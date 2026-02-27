import { useState, useEffect } from 'react'
import CourseCard from '../components/CourseCard'
import SearchFilter from '../components/SearchFilter'
import Recommendations from '../components/Recommendations'

function CourseSelection() {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [registeredCourses, setRegisteredCourses] = useState([])

  useEffect(() => {
    const allCourses = [
      { id: 1, code: 'CS101', name: 'Introduction to Programming', instructor: 'Dr. Smith', schedule: 'Mon/Wed 09:00-10:30', credits: 3, availableSeats: 25, totalSeats: 30 },
      { id: 2, code: 'CS201', name: 'Data Structures', instructor: 'Dr. Johnson', schedule: 'Tue/Thu 11:00-12:30', credits: 4, availableSeats: 15, totalSeats: 25 },
      { id: 3, code: 'MATH101', name: 'Calculus I', instructor: 'Prof. Williams', schedule: 'Mon/Wed/Fri 10:00-11:00', credits: 4, availableSeats: 30, totalSeats: 40 },
      { id: 4, code: 'ENG101', name: 'English Composition', instructor: 'Dr. Brown', schedule: 'Tue/Thu 14:00-15:30', credits: 3, availableSeats: 0, totalSeats: 20 },
      { id: 5, code: 'CS301', name: 'Algorithms', instructor: 'Dr. Davis', schedule: 'Mon/Wed 13:00-14:30', credits: 4, availableSeats: 20, totalSeats: 25 },
      { id: 6, code: 'MATH201', name: 'Linear Algebra', instructor: 'Prof. Miller', schedule: 'Tue/Thu 09:00-10:30', credits: 3, availableSeats: 18, totalSeats: 30 }
    ]
    setCourses(allCourses)
    setFilteredCourses(allCourses)
    const saved = JSON.parse(localStorage.getItem('registeredCourses') || '[]')
    setRegisteredCourses(saved)
  }, [])

  const handleFilter = ({ search, filter }) => {
    let filtered = courses
    if (search) {
      filtered = filtered.filter(c => 
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (filter === 'available') filtered = filtered.filter(c => c.availableSeats > 0)
    if (filter === 'cs') filtered = filtered.filter(c => c.code.startsWith('CS'))
    if (filter === 'math') filtered = filtered.filter(c => c.code.startsWith('MATH'))
    if (filter === 'eng') filtered = filtered.filter(c => c.code.startsWith('ENG'))
    setFilteredCourses(filtered)
  }

  const handleRegister = (course) => {
    if (registeredCourses.find(c => c.id === course.id)) return
    
    const hasConflict = registeredCourses.some(c => c.schedule === course.schedule)
    if (hasConflict) {
      alert('⚠️ Schedule conflict detected! This course overlaps with your existing schedule.')
      return
    }

    const updated = [...registeredCourses, course]
    setRegisteredCourses(updated)
    localStorage.setItem('registeredCourses', JSON.stringify(updated))
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
