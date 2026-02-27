function EnrollmentManager() {
  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com', courses: 4, credits: 15, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', courses: 3, credits: 12, status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', courses: 5, credits: 18, status: 'Active' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', courses: 2, credits: 8, status: 'Inactive' }
  ]

  return (
    <div className="admin-section">
      <h3>👥 Student Enrollments</h3>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th>Credits</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td><strong>{student.name}</strong></td>
              <td>{student.email}</td>
              <td>{student.courses}</td>
              <td>{student.credits}</td>
              <td><span className={`status-badge ${student.status.toLowerCase()}`}>{student.status}</span></td>
              <td>
                <button className="btn-small btn-info">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EnrollmentManager
