import { useState } from 'react'

function Notifications() {
  const [announcements] = useState([
    { id: 1, title: 'Registration Deadline', message: 'Course registration closes on Dec 31', type: 'warning', date: '2024-01-15' },
    { id: 2, title: 'New Courses Added', message: '5 new courses available for Spring 2024', type: 'info', date: '2024-01-14' },
    { id: 3, title: 'System Maintenance', message: 'Platform will be down on Sunday 2-4 AM', type: 'alert', date: '2024-01-13' }
  ])

  return (
    <div className="admin-section">
      <h3>🔔 Notifications & Announcements</h3>
      <button className="btn-primary" style={{marginBottom: '1rem'}}>➕ Create Announcement</button>
      <div className="notifications-list">
        {announcements.map(notif => (
          <div key={notif.id} className={`notification-card ${notif.type}`}>
            <div className="notif-header">
              <strong>{notif.title}</strong>
              <span className="notif-date">{notif.date}</span>
            </div>
            <p>{notif.message}</p>
            <div className="notif-actions">
              <button className="btn-small btn-info">Edit</button>
              <button className="btn-small btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
