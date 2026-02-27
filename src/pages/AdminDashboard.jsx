import { useState, useEffect } from 'react'
import Analytics from '../components/Analytics'
import EnrollmentManager from '../components/EnrollmentManager'
import ConflictResolver from '../components/ConflictResolver'
import DepartmentManager from '../components/DepartmentManager'
import ReportsExport from '../components/ReportsExport'
import Notifications from '../components/Notifications'

function AdminDashboard() {
  const [courses, setCourses] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [activeTab, setActiveTab] = useState('courses')
  const [formData, setFormData] = useState({
    code: '', name: '', instructor: '', schedule: '', credits: '', totalSeats: ''
  })

  useEffect(() => {
    setCourses([
      { id: 1, code: 'CS101', name: 'Introduction to Programming', instructor: 'Dr. Smith', schedule: 'Mon/Wed 09:00-10:30', credits: 3, availableSeats: 25, totalSeats: 30 },
      { id: 2, code: 'CS201', name: 'Data Structures', instructor: 'Dr. Johnson', schedule: 'Tue/Thu 11:00-12:30', credits: 4, availableSeats: 15, totalSeats: 25 },
      { id: 3, code: 'MATH101', name: 'Calculus I', instructor: 'Prof. Williams', schedule: 'Mon/Wed/Fri 10:00-11:00', credits: 4, availableSeats: 30, totalSeats: 40 }
    ])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCourse = {
      id: courses.length + 1,
      ...formData,
      credits: parseInt(formData.credits),
      totalSeats: parseInt(formData.totalSeats),
      availableSeats: parseInt(formData.totalSeats)
    }
    setCourses([...courses, newCourse])
    setFormData({ code: '', name: '', instructor: '', schedule: '', credits: '', totalSeats: '' })
    setShowForm(false)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(c => c.id !== id))
    }
  }

  return (
    <div className="page">
      <h2>Admin Dashboard</h2>
      <Analytics courses={courses} />
      
      <div className="admin-tabs">
        <button className={activeTab === 'courses' ? 'tab-active' : ''} onClick={() => setActiveTab('courses')}>📚 Courses</button>
        <button className={activeTab === 'students' ? 'tab-active' : ''} onClick={() => setActiveTab('students')}>👥 Students</button>
        <button className={activeTab === 'conflicts' ? 'tab-active' : ''} onClick={() => setActiveTab('conflicts')}>⚠️ Conflicts</button>
        <button className={activeTab === 'departments' ? 'tab-active' : ''} onClick={() => setActiveTab('departments')}>🏛️ Departments</button>
        <button className={activeTab === 'reports' ? 'tab-active' : ''} onClick={() => setActiveTab('reports')}>📄 Reports</button>
        <button className={activeTab === 'notifications' ? 'tab-active' : ''} onClick={() => setActiveTab('notifications')}>🔔 Notifications</button>
      </div>

      {activeTab === 'courses' && (
        <div className="admin-section">
          <button onClick={() => setShowForm(!showForm)} className="btn-primary">
            {showForm ? '❌ Cancel' : '➕ Add New Course'}
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className="course-form">
              <input placeholder="Course Code (e.g., CS101)" value={formData.code} onChange={(e) => setFormData({...formData, code: e.target.value})} required />
              <input placeholder="Course Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <input placeholder="Instructor" value={formData.instructor} onChange={(e) => setFormData({...formData, instructor: e.target.value})} required />
              <input placeholder="Schedule (e.g., Mon/Wed 09:00-10:30)" value={formData.schedule} onChange={(e) => setFormData({...formData, schedule: e.target.value})} required />
              <input type="number" placeholder="Credits" value={formData.credits} onChange={(e) => setFormData({...formData, credits: e.target.value})} required />
              <input type="number" placeholder="Total Seats" value={formData.totalSeats} onChange={(e) => setFormData({...formData, totalSeats: e.target.value})} required />
              <button type="submit" className="btn-primary">Add Course</button>
            </form>
          )}

          <table className="schedule-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Schedule</th>
                <th>Credits</th>
                <th>Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td><strong>{course.code}</strong></td>
                  <td>{course.name}</td>
                  <td>{course.instructor}</td>
                  <td>{course.schedule}</td>
                  <td>{course.credits}</td>
                  <td>
                    <span className={course.availableSeats === 0 ? 'seats-full' : 'seats-available'}>
                      {course.availableSeats}/{course.totalSeats}
                    </span>
                  </td>
                  <td><button onClick={() => handleDelete(course.id)} className="btn-danger">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'students' && <EnrollmentManager />}
      {activeTab === 'conflicts' && <ConflictResolver />}
      {activeTab === 'departments' && <DepartmentManager />}
      {activeTab === 'reports' && <ReportsExport />}
      {activeTab === 'notifications' && <Notifications />}
    </div>
  )
}

export default AdminDashboard
