import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { notificationService } from '../services/api'

function Notifications() {
  const navigate = useNavigate()
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    notificationService.getAllNotifications().then(res => setAnnouncements(res.data))
  }, [])

  return (
    <div className="admin-section">
      <h3>🔔 Notifications & Announcements</h3>
      <button className="btn-primary" style={{ marginBottom: '1rem' }} onClick={() => navigate('/admin/notification/create')}>➕ Create Announcement</button>
      <div className="notifications-list">
        {announcements.map(notif => (
          <div key={notif.id} className={`notification-card ${notif.type}`}>
            <div className="notif-header">
              <strong>{notif.title}</strong>
              <span className="notif-date">{notif.date}</span>
            </div>
            <p>{notif.message}</p>
            <div className="notif-actions">
              <button className="btn-small btn-info" onClick={() => navigate(`/admin/notification/${notif.id}`)}>Edit</button>
              <button className="btn-small btn-danger" onClick={() => navigate(`/admin/notification/${notif.id}`)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
