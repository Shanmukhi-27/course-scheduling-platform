import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { notificationService } from '../services/api'

function NotificationCreate() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', message: '', type: 'info' })

  const handleSubmit = (e) => {
    e.preventDefault()
    notificationService.createNotification({
      ...form,
      date: new Date().toISOString().split('T')[0]
    }).then(() => navigate('/admin'))
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>🔔 Create Announcement</h2>
      <form onSubmit={handleSubmit} className="course-form" style={{ maxWidth: '500px' }}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          required rows={4}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
        />
        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
        >
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="alert">Alert</option>
        </select>
        <button type="submit" className="btn-primary">➕ Create Announcement</button>
      </form>
    </div>
  )
}

export default NotificationCreate
