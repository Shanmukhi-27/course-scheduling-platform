function DepartmentManager() {
  const departments = [
    { id: 1, name: 'Computer Science', code: 'CS', courses: 12, students: 245, head: 'Dr. Smith' },
    { id: 2, name: 'Mathematics', code: 'MATH', courses: 8, students: 180, head: 'Prof. Williams' },
    { id: 3, name: 'English', code: 'ENG', courses: 6, students: 150, head: 'Dr. Brown' }
  ]

  return (
    <div className="admin-section">
      <h3>🏛️ Departments</h3>
      <div className="departments-grid">
        {departments.map(dept => (
          <div key={dept.id} className="department-card">
            <div className="dept-code">{dept.code}</div>
            <h4>{dept.name}</h4>
            <p><strong>Head:</strong> {dept.head}</p>
            <div className="dept-stats">
              <span>📚 {dept.courses} Courses</span>
              <span>👥 {dept.students} Students</span>
            </div>
            <button className="btn-small btn-primary">Manage</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentManager
