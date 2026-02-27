import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'
import CourseSelection from './pages/CourseSelection'
import MySchedule from './pages/MySchedule'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="app">
        {user && <Header user={user} setUser={setUser} />}
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/student" element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to="/signin" />} />
          <Route path="/student/courses" element={user?.role === 'student' ? <CourseSelection /> : <Navigate to="/signin" />} />
          <Route path="/student/schedule" element={user?.role === 'student' ? <MySchedule /> : <Navigate to="/signin" />} />
          <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/signin" />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
