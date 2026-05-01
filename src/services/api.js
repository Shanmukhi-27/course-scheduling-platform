import axios from 'axios'

const API_BASE_URL = 'http://localhost:8081/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const courseService = {
  getAllCourses: () => api.get('/courses'),
  getCourseById: (id) => api.get(`/courses/${id}`),
  createCourse: (course) => api.post('/courses', course),
  updateCourse: (id, course) => api.put(`/courses/${id}`, course),
  deleteCourse: (id) => api.delete(`/courses/${id}`)
}

export const authService = {
  login: (data) => api.post('/auth/login', data),
  signup: (data) => api.post('/auth/signup', data)
}

export const registrationService = {
  registerCourse: (studentId, courseId) => api.post('/registrations', { studentId, courseId }),
  getStudentRegistrations: (studentId) => api.get(`/registrations/student/${studentId}`),
  dropCourse: (studentId, courseId) => api.delete(`/registrations/student/${studentId}/course/${courseId}`)
}

export const studentService = {
  getAllStudents: () => api.get('/students'),
  getStudentById: (id) => api.get(`/students/${id}`),
  updateStudent: (id, data) => api.put(`/students/${id}`, data),
  deleteStudent: (id) => api.delete(`/students/${id}`)
}

export const conflictService = {
  getAllConflicts: () => api.get('/conflicts'),
  getConflictById: (id) => api.get(`/conflicts/${id}`),
  resolveConflict: (id) => api.delete(`/conflicts/${id}`)
}

export const departmentService = {
  getAllDepartments: () => api.get('/departments'),
  getDepartmentById: (id) => api.get(`/departments/${id}`),
  updateDepartment: (id, data) => api.put(`/departments/${id}`, data)
}

export const notificationService = {
  getAllNotifications: () => api.get('/notifications'),
  getNotificationById: (id) => api.get(`/notifications/${id}`),
  createNotification: (data) => api.post('/notifications', data),
  updateNotification: (id, data) => api.put(`/notifications/${id}`, data),
  deleteNotification: (id) => api.delete(`/notifications/${id}`)
}

export default api
