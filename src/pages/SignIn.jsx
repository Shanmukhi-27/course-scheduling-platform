import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/api'

function SignIn({ setUser }) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ email: '', password: '', name: '', role: 'student' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = isLogin
        ? await authService.login({ email: formData.email, password: formData.password, role: formData.role })
        : await authService.signup(formData)
      setUser(res.data)
      navigate(res.data.role === 'admin' ? '/admin' : '/student')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-header">
          <h1>🎓 Course Scheduler</h1>
          <p>Manage your academic journey</p>
        </div>

        <div className="auth-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Sign In</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}

        <form onSubmit={handleSubmit} className="signin-form">
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} required={!isLogin} />
            </div>
          )}
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="your.email@example.com" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
          </div>
          <div className="input-group">
            <label>I am a</label>
            <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
              <option value="student">Student</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <button type="submit" className="btn-signin">{isLogin ? 'Sign In' : 'Create Account'}</button>
        </form>

        <div className="signin-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); setError('') }}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </a>
          </p>
        </div>
      </div>

      <div className="signin-features">
        <div className="feature-item">
          <div className="feature-icon">📚</div>
          <h3>Course Selection</h3>
          <p>Browse and register for courses easily</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📅</div>
          <h3>Visual Timetable</h3>
          <p>See your schedule at a glance</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <h3>Instant Updates</h3>
          <p>Real-time seat availability</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
