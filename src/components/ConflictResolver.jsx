function ConflictResolver() {
  const conflicts = [
    { id: 1, student: 'John Doe', course1: 'CS101', course2: 'MATH101', time: 'Mon/Wed 10:00-11:00', severity: 'High' },
    { id: 2, student: 'Jane Smith', course1: 'CS201', course2: 'ENG101', time: 'Tue/Thu 11:00-12:30', severity: 'Medium' }
  ]

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
              <button className="btn-small btn-warning">Resolve</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ConflictResolver
