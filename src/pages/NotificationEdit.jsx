import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { notificationService } from '../services/api'

function NotificationEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', message: '' })

  useEffect(() => {
    notificationService.getNotificationById(id).then(res => setForm({ title: res.data.title, message: res.data.message }))
  }, [id])

  const handleSave = (e) => {
    e.preventDefault()
    notificationService.updateNotification(id, form).then(() => navigate('/admin'))
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this notification?')) {
      notificationService.deleteNotification(id).then(() => navigate('/admin'))
    }
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>🔔 Edit Notification</h2>
      <form onSubmit={handleSave} className="course-form" style={{ maxWidth: '500px' }}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required rows={4}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" className="btn-primary">💾 Save Changes</button>
          <button type="button" className="btn-danger" onClick={handleDelete}>🗑️ Delete</button>
        </div>
      </form>
    </div>
  )
}

export default NotificationEdit
