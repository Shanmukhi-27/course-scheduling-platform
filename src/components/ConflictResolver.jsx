import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { conflictService } from '../services/api'

function ConflictResolver() {
  const navigate = useNavigate()
  const [conflicts, setConflicts] = useState([])

  useEffect(() => {
    conflictService.getAllConflicts().then(res => setConflicts(res.data))
  }, [])

  return (
    <div className="admin-section">
      <h3>⚠️ Schedule Conflicts</h3>
      {conflicts.length === 0 ? (
        <p className="empty-message">No conflicts detected</p>
      ) : (
        <div className="conflicts-list">
          {conflicts.map(conflict => (
            <div key={conflict.id} className="conflict-card">
              <div className="conflict-header">
                <span className={`severity-badge ${conflict.severity.toLowerCase()}`}>{conflict.severity}</span>
                <strong>{conflict.student}</strong>
              </div>
              <p>Conflict between <strong>{conflict.course1}</strong> and <strong>{conflict.course2}</strong></p>
              <p className="conflict-time">⏰ {conflict.time}</p>
              <button className="btn-small btn-warning" onClick={() => navigate(`/admin/conflict/${conflict.id}`)}>Resolve</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ConflictResolver
