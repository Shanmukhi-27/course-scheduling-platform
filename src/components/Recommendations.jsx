function Recommendations({ registeredCourses, allCourses }) {
  const getRecommendations = () => {
    const registeredIds = registeredCourses.map(c => c.id)
    return allCourses
      .filter(c => !registeredIds.includes(c.id) && c.availableSeats > 0)
      .slice(0, 3)
  }

  const recommendations = getRecommendations()

  if (recommendations.length === 0) return null

  return (
    <div className="recommendations-section">
      <h3>🎓 Recommended for You</h3>
      <div className="recommendations-grid">
        {recommendations.map(course => (
          <div key={course.id} className="recommendation-card">
            <div className="rec-badge">Recommended</div>
            <h4>{course.code}</h4>
            <p>{course.name}</p>
            <span className="rec-credits">{course.credits} Credits</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
