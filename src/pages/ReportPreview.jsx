import { useParams, useNavigate } from 'react-router-dom'

const reports = [
  {
    id: 1, name: 'Enrollment Report', icon: '📊', description: 'Complete student enrollment data',
    data: [
      { Student: 'John Doe', Courses: 4, Credits: 15, Status: 'Active' },
      { Student: 'Jane Smith', Courses: 3, Credits: 12, Status: 'Active' },
      { Student: 'Mike Johnson', Courses: 5, Credits: 18, Status: 'Active' },
      { Student: 'Sarah Williams', Courses: 2, Credits: 8, Status: 'Inactive' }
    ]
  },
  {
    id: 2, name: 'Course Capacity Report', icon: '📈', description: 'Seat availability and occupancy',
    data: [
      { Course: 'CS101', TotalSeats: 30, AvailableSeats: 25, Occupancy: '17%' },
      { Course: 'CS201', TotalSeats: 25, AvailableSeats: 15, Occupancy: '40%' },
      { Course: 'MATH101', TotalSeats: 40, AvailableSeats: 30, Occupancy: '25%' },
      { Course: 'ENG101', TotalSeats: 20, AvailableSeats: 0, Occupancy: '100%' }
    ]
  },
  {
    id: 3, name: 'Schedule Report', icon: '📅', description: 'All course schedules',
    data: [
      { Course: 'CS101', Instructor: 'Dr. Smith', Schedule: 'Mon/Wed 09:00-10:30' },
      { Course: 'CS201', Instructor: 'Dr. Johnson', Schedule: 'Tue/Thu 11:00-12:30' },
      { Course: 'MATH101', Instructor: 'Prof. Williams', Schedule: 'Mon/Wed/Fri 10:00-11:00' },
      { Course: 'ENG101', Instructor: 'Dr. Brown', Schedule: 'Tue/Thu 14:00-15:30' }
    ]
  },
  {
    id: 4, name: 'Department Report', icon: '🏛️', description: 'Department-wise statistics',
    data: [
      { Department: 'Computer Science', Courses: 12, Students: 245, Head: 'Dr. Smith' },
      { Department: 'Mathematics', Courses: 8, Students: 180, Head: 'Prof. Williams' },
      { Department: 'English', Courses: 6, Students: 150, Head: 'Dr. Brown' }
    ]
  }
]

function ReportPreview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const report = reports.find(r => r.id === parseInt(id))

  if (!report) return <div className="page"><h2>Report not found</h2></div>

  const headers = Object.keys(report.data[0])

  const handleDownload = () => {
    const csv = [headers.join(','), ...report.data.map(row => Object.values(row).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${report.name}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/admin')} className="btn-small btn-info" style={{ marginBottom: '1rem' }}>← Back</button>
      <h2>{report.icon} {report.name}</h2>
      <p style={{ marginBottom: '1rem', color: '#666' }}>{report.description}</p>
      <button onClick={handleDownload} className="btn-primary" style={{ marginBottom: '1.5rem' }}>📥 Download CSV</button>
      <table className="schedule-table">
        <thead>
          <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {report.data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportPreview
