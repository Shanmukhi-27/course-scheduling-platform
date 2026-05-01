import { useState, useEffect } from 'react'
import CourseCard from '../components/CourseCard'
import SearchFilter from '../components/SearchFilter'
import Recommendations from '../components/Recommendations'
import { courseService, registrationService } from '../services/api'

function CourseSelection({ user }) {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [registeredCourses, setRegisteredCourses] = useState([])

  useEffect(() => {
    courseService.getAllCourses().then(res => {
      setCourses(res.data)
      setFilteredCourses(res.data)
    })
    if (user?.id) {
      registrationService.getStudentRegistrations(user.id).then(res => setRegisteredCourses(res.data))
    }
  }, [user])

  const handleFilter = ({ search, filter }) => {
    let filtered = courses
    if (search) filtered = filtered.filter(c => c.code.toLowerCase().includes(search.toLowerCase()) || c.name.toLowerCase().includes(search.toLowerCase()))
    if (filter === 'available') filtered = filtered.filter(c => c.availableSeats > 0)
    if (filter === 'cs') filtered = filtered.filter(c => c.code.startsWith('CS'))
    if (filter === 'math') filtered = filtered.filter(c => c.code.startsWith('MATH'))
    if (filter === 'eng') filtered = filtered.filter(c => c.code.startsWith('ENG'))
    setFilteredCourses(filtered)
  }

  const handleRegister = async (course) => {
    if (registeredCourses.find(c => c.id === course.id)) return
    const hasConflict = registeredCourses.some(c => c.schedule === course.schedule)
    if (hasConflict) {
      alert('⚠️ Schedule conflict detected!')
      return
    }
    await registrationService.registerCourse(user.id, course.id)
    const updated = [...registeredCourses, course]
    setRegisteredCourses(updated)
    setCourses(courses.map(c => c.id === course.id ? { ...c, availableSeats: c.availableSeats - 1 } : c))
    setFilteredCourses(filteredCourses.map(c => c.id === course.id ? { ...c, availableSeats: c.availableSeats - 1 } : c))
  }

  return (
    <div className="page">
      <h2>Course Selection</h2>
      <SearchFilter onFilterChange={handleFilter} />
      <Recommendations registeredCourses={registeredCourses} allCourses={courses} />
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onRegister={handleRegister}
            isRegistered={registeredCourses.some(c => c.id === course.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseSelection
