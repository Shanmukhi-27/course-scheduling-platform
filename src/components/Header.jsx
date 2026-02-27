import { Link, useNavigate } from 'react-router-dom'

function Header({ user, setUser }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/signin')
  }

  return (
    <header className="header">
      <div className="header-content">
        <h1>Course Scheduling Platform</h1>
        <nav>
          {user.role === 'student' && (
            <>
              <Link to="/student">Dashboard</Link>
              <Link to="/student/courses">Course Selection</Link>
              <Link to="/student/schedule">My Schedule</Link>
            </>
          )}
          {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
          <span className="user-info">👤 {user.name || user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
