import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { conflictService } from '../services/api'

function ConflictDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [conflict, setConflict] = useState(null)

  useEffect(() => {
    conflictService.getConflictById(id).then(res => setConflict(res.data))
  }, [id])

  if (!conflict) return <div className="page"><h2>Loading...</h2></div>

  const handleResolve = (drop) => {
    conflictService.resolveConflict(id).then(() => navigate('/admin'))
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>⚠️ Resolve Conflict</h2>
      <div className="conflict-card" style={{ maxWidth: '500px', padding: '2rem' }}>
        <div className="conflict-header">
          <span className={`severity-badge ${conflict.severity.toLowerCase()}`}>{conflict.severity}</span>
          <strong>{conflict.student}</strong>
        </div>
        <p>Conflict between <strong>{conflict.course1}</strong> and <strong>{conflict.course2}</strong></p>
        <p className="conflict-time">⏰ {conflict.time}</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <button className="btn-primary" onClick={handleResolve}>Drop {conflict.course1}</button>
          <button className="btn-primary" onClick={handleResolve}>Drop {conflict.course2}</button>
        </div>
      </div>
    </div>
  )
}

export default ConflictDetail
