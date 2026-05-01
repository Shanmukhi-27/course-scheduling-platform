import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { studentService } from '../services/api'

function EnrollmentManager() {
  const navigate = useNavigate()
  const [students, setStudents] = useState([])

  useEffect(() => {
    studentService.getAllStudents().then(res => setStudents(res.data))
  }, [])

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
                <button className="btn-small btn-info" onClick={() => navigate(`/admin/student/${student.id}`)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EnrollmentManager
