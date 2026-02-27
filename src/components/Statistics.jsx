function StatsCard({ icon, label, value, color }) {
  return (
    <div className="stat-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  )
}

function Statistics({ courses }) {
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0)
  const totalCourses = courses.length
  const avgCredits = totalCourses > 0 ? (totalCredits / totalCourses).toFixed(1) : 0

  return (
    <div className="stats-container">
      <StatsCard icon="📚" label="Total Courses" value={totalCourses} color="#3498db" />
      <StatsCard icon="⭐" label="Total Credits" value={totalCredits} color="#2ecc71" />
      <StatsCard icon="📊" label="Avg Credits" value={avgCredits} color="#f39c12" />
      <StatsCard icon="🎯" label="Completion" value={`${Math.min(totalCredits * 6, 100)}%`} color="#9b59b6" />
    </div>
  )
}

export default Statistics
