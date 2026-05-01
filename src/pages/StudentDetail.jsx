import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { studentService } from '../services/api'

function StudentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    studentService.getStudentById(id).then(res => setStudent(res.data))
  }, [id])

  if (!student) return <div className="page"><h2>Loading...</h2></div>

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>👤 Student Details</h2>
      <div className="card" style={{ padding: '2rem', maxWidth: '500px' }}>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Courses Enrolled:</strong> {student.courses}</p>
        <p><strong>Total Credits:</strong> {student.credits}</p>
        <p><strong>Status:</strong> <span className={`status-badge ${student.status.toLowerCase()}`}>{student.status}</span></p>
      </div>
    </div>
  )
}

export default StudentDetail
