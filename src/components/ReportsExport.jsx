function ReportsExport() {
  const reports = [
    { id: 1, name: 'Enrollment Report', icon: '📊', description: 'Complete student enrollment data' },
    { id: 2, name: 'Course Capacity Report', icon: '📈', description: 'Seat availability and occupancy' },
    { id: 3, name: 'Schedule Report', icon: '📅', description: 'All course schedules' },
    { id: 4, name: 'Department Report', icon: '🏛️', description: 'Department-wise statistics' }
  ]

  return (
    <div className="admin-section">
      <h3>📄 Reports & Export</h3>
      <div className="reports-grid">
        {reports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-icon">{report.icon}</div>
            <h4>{report.name}</h4>
            <p>{report.description}</p>
            <div className="report-actions">
              <button className="btn-small btn-success">📥 Download</button>
              <button className="btn-small btn-info">👁️ Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportsExport
