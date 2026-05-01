import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { departmentService } from '../services/api'

function DepartmentManager() {
  const navigate = useNavigate()
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    departmentService.getAllDepartments().then(res => setDepartments(res.data))
  }, [])

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
            <button className="btn-small btn-primary" onClick={() => navigate(`/admin/department/${dept.id}`)}>Manage</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentManager
