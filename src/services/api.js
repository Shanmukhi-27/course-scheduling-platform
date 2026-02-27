import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const courseService = {
  getAllCourses: () => api.get('/courses'),
  getCourseById: (id) => api.get(`/courses/${id}`),
  createCourse: (course) => api.post('/courses', course),
  updateCourse: (id, course) => api.put(`/courses/${id}`, course),
  deleteCourse: (id) => api.delete(`/courses/${id}`)
}

export const registrationService = {
  registerCourse: (studentId, courseId) => api.post('/registrations', { studentId, courseId }),
  getStudentRegistrations: (studentId) => api.get(`/registrations/student/${studentId}`),
  dropCourse: (registrationId) => api.delete(`/registrations/${registrationId}`)
}

export default api
