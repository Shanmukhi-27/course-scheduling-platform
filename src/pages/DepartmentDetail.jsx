import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { departmentService } from '../services/api'

function DepartmentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [dept, setDept] = useState(null)

  useEffect(() => {
    departmentService.getDepartmentById(id).then(res => setDept(res.data))
  }, [id])

  if (!dept) return <div className="page"><h2>Loading...</h2></div>

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>🏛️ {dept.name} Department</h2>
      <div className="department-card" style={{ maxWidth: '500px', padding: '2rem' }}>
        <div className="dept-code">{dept.code}</div>
        <h4>{dept.name}</h4>
        <p><strong>Head:</strong> {dept.head}</p>
        <div className="dept-stats">
          <span>📚 {dept.courses} Courses</span>
          <span>👥 {dept.students} Students</span>
        </div>
      </div>
    </div>
  )
}

export default DepartmentDetail
