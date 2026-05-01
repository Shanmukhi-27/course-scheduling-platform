function CourseCard({ course, onRegister, isRegistered }) {
  return (
    <div className="course-card">
      <h3>{course.code} - {course.name}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <p><strong>Available Seats:</strong> {course.availableSeats}/{course.totalSeats}</p>
      <button 
        onClick={() => onRegister(course)}
        disabled={isRegistered || course.availableSeats === 0}
        className={isRegistered ? 'btn-registered' : 'btn-register'}
      >
        {isRegistered ? 'Registered' : course.availableSeats === 0 ? 'Full' : 'Register'}
      </button>
    </div>
  )
}

export default CourseCard
