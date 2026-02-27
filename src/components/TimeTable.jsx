function TimeTable({ courses }) {
  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  
  const parseCourseSchedule = (course) => {
    const [daysPart, timePart] = course.schedule.split(' ')
    const courseDays = daysPart.split('/').map(d => {
      const dayMap = { 'Mon': 'Monday', 'Tue': 'Tuesday', 'Wed': 'Wednesday', 'Thu': 'Thursday', 'Fri': 'Friday' }
      return dayMap[d]
    })
    const [startTime] = timePart.split('-')
    return { days: courseDays, startTime }
  }

  const getCourseForSlot = (day, time) => {
    return courses.find(course => {
      const { days: courseDays, startTime } = parseCourseSchedule(course)
      return courseDays.includes(day) && startTime === time
    })
  }

  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22']

  return (
    <div className="timetable-container">
      <div className="timetable-grid">
        <div className="timetable-header">
          <div className="time-column-header">Time</div>
          {days.map(day => (
            <div key={day} className="day-header">{day}</div>
          ))}
        </div>
        {timeSlots.map(time => (
          <div key={time} className="timetable-row">
            <div className="time-cell">{time}</div>
            {days.map(day => {
              const course = getCourseForSlot(day, time)
              return (
                <div key={`${day}-${time}`} className="schedule-cell">
                  {course && (
                    <div className="course-block" style={{ background: colors[course.id % colors.length] }}>
                      <div className="course-code">{course.code}</div>
                      <div className="course-name-small">{course.name}</div>
                      <div className="course-instructor-small">{course.instructor}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeTable
