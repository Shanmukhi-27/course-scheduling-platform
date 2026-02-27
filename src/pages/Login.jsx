import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
  const [role, setRole] = useState('student')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { role }
    setUser(userData)
    navigate(role === 'admin' ? '/admin' : '/student')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Course Scheduling Platform</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Login As:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
