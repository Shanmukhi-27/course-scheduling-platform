import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import CourseSelection from './pages/CourseSelection'
import MySchedule from './pages/MySchedule'
import StudentDetail from './pages/StudentDetail'
import ConflictDetail from './pages/ConflictDetail'
import DepartmentDetail from './pages/DepartmentDetail'
import ReportPreview from './pages/ReportPreview'
import NotificationEdit from './pages/NotificationEdit'
import NotificationCreate from './pages/NotificationCreate'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="app">
        {user && <Header user={user} setUser={setUser} />}
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/student" element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to="/signin" />} />
          <Route path="/student/courses" element={user?.role === 'student' ? <CourseSelection user={user} /> : <Navigate to="/signin" />} />
          <Route path="/student/schedule" element={user?.role === 'student' ? <MySchedule user={user} /> : <Navigate to="/signin" />} />
          <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/signin" />} />
          <Route path="/admin/student/:id" element={user?.role === 'admin' ? <StudentDetail /> : <Navigate to="/signin" />} />
          <Route path="/admin/conflict/:id" element={user?.role === 'admin' ? <ConflictDetail /> : <Navigate to="/signin" />} />
          <Route path="/admin/department/:id" element={user?.role === 'admin' ? <DepartmentDetail /> : <Navigate to="/signin" />} />
          <Route path="/admin/report/:id" element={user?.role === 'admin' ? <ReportPreview /> : <Navigate to="/signin" />} />
          <Route path="/admin/notification/create" element={user?.role === 'admin' ? <NotificationCreate /> : <Navigate to="/signin" />} />
          <Route path="/admin/notification/:id" element={user?.role === 'admin' ? <NotificationEdit /> : <Navigate to="/signin" />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
