import { useState, useEffect } from 'react'
import TimeTable from '../components/TimeTable'
import Statistics from '../components/Statistics'

function MySchedule() {
  const [schedule, setSchedule] = useState([])
  const [view, setView] = useState('timetable')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('registeredCourses') || '[]')
    setSchedule(saved)
  }, [])

  const handleDrop = (courseId) => {
    const updated = schedule.filter(c => c.id !== courseId)
    setSchedule(updated)
    localStorage.setItem('registeredCourses', JSON.stringify(updated))
  }

  return (
    <div className="page">
      <h2>My Schedule</h2>
      {schedule.length === 0 ? (
        <p className="empty-message">No courses registered yet. Start building your schedule!</p>
      ) : (
        <>
          <Statistics courses={schedule} />
          <div className="view-toggle">
            <button className={view === 'timetable' ? 'active' : ''} onClick={() => setView('timetable')}>📅 Timetable View</button>
            <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>📋 List View</button>
          </div>
          {view === 'timetable' ? (
            <TimeTable courses={schedule} />
          ) : (
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Instructor</th>
                  <th>Schedule</th>
                  <th>Credits</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map(course => (
                  <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>{course.instructor}</td>
                    <td>{course.schedule}</td>
                    <td>{course.credits}</td>
                    <td><button onClick={() => handleDrop(course.id)} className="btn-danger">Drop</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  )
}

export default MySchedule
