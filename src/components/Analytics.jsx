function Analytics({ courses }) {
  const totalSeats = courses.reduce((sum, c) => sum + c.totalSeats, 0)
  const occupiedSeats = courses.reduce((sum, c) => sum + (c.totalSeats - c.availableSeats), 0)
  const occupancyRate = totalSeats > 0 ? ((occupiedSeats / totalSeats) * 100).toFixed(1) : 0

  return (
    <div className="analytics-section">
      <h3>📊 Registration Analytics</h3>
      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="analytics-value">{courses.length}</div>
          <div className="analytics-label">Total Courses</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-value">{totalSeats}</div>
          <div className="analytics-label">Total Capacity</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-value">{occupiedSeats}</div>
          <div className="analytics-label">Enrolled Students</div>
        </div>
        <div className="analytics-card">
          <div className="analytics-value">{occupancyRate}%</div>
          <div className="analytics-label">Occupancy Rate</div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
