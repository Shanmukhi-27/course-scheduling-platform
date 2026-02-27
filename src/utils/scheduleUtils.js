export const detectScheduleConflict = (existingCourses, newCourse) => {
  return existingCourses.some(course => {
    const existingSchedule = parseSchedule(course.schedule)
    const newSchedule = parseSchedule(newCourse.schedule)
    
    return existingSchedule.days.some(day => newSchedule.days.includes(day)) &&
           timeOverlap(existingSchedule.time, newSchedule.time)
  })
}

const parseSchedule = (scheduleString) => {
  const parts = scheduleString.split(' ')
  const days = parts[0].split('/')
  const time = parts[1]
  return { days, time }
}

const timeOverlap = (time1, time2) => {
  const [start1, end1] = time1.split('-').map(t => convertToMinutes(t))
  const [start2, end2] = time2.split('-').map(t => convertToMinutes(t))
  
  return start1 < end2 && start2 < end1
}

const convertToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours * 60 + minutes
}
