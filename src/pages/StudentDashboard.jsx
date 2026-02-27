import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function StudentDashboard() {
  const [stats, setStats] = useState({ courses: 0, credits: 0 })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('registeredCourses') || '[]')
    setStats({
      courses: saved.length,
      credits: saved.reduce((sum, c) => sum + c.credits, 0)
    })
  }, [])

  return (
    <div className="dashboard">
      <div className="welcome-banner">
        <h2>Welcome Back, Student! 🎓</h2>
        <p>Ready to build your perfect schedule?</p>
      </div>
      <div className="quick-stats">
        <div className="quick-stat">
          <span className="stat-number">{stats.courses}</span>
          <span className="stat-text">Enrolled Courses</span>
        </div>
        <div className="quick-stat">
          <span className="stat-number">{stats.credits}</span>
          <span className="stat-text">Total Credits</span>
        </div>
      </div>
      <div className="dashboard-cards">
        <Link to="/student/courses" className="dashboard-card">
          <div className="card-icon">📚</div>
          <h3>Course Selection</h3>
          <p>Browse and register for available courses</p>
        </Link>
        <Link to="/student/schedule" className="dashboard-card">
          <div className="card-icon">📅</div>
          <h3>My Schedule</h3>
          <p>View your timetable and manage registrations</p>
        </Link>
      </div>
    </div>
  )
}

export default StudentDashboard
