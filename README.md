# Course Scheduling Platform

A modern, feature-rich React web application for student course selection and scheduling with visual timetable.

## ✨ Features

### Student Features
- 📚 Browse and search available courses
- 🔍 Advanced filtering by department and availability
- 📅 Visual weekly timetable view
- 📊 Personal statistics dashboard
- 🎯 Smart course recommendations
- ⚠️ Automatic schedule conflict detection
- 💾 Persistent course registration (localStorage)
- 📈 Progress tracking

### Admin Features
- 📊 Registration analytics dashboard
- ➕ Add new courses
- 🗑️ Delete courses
- 👥 Monitor seat availability
- 📈 View occupancy rates
- 🎨 Color-coded seat status

## 🎨 Unique Features

1. **Visual Timetable**: Interactive weekly schedule grid with color-coded courses
2. **Smart Recommendations**: AI-style course suggestions based on enrollment
3. **Real-time Statistics**: Live dashboard with enrollment metrics
4. **Modern UI/UX**: Gradient designs, smooth animations, and responsive layout
5. **Dual View Modes**: Switch between timetable and list views
6. **Search & Filter**: Powerful course discovery tools

## 🛠️ Tech Stack
- React 18
- React Router 6
- Vite (Fast build tool)
- Axios (API ready)
- Modern CSS3 with gradients and animations
- LocalStorage for data persistence

## 🚀 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

## 📁 Project Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── CourseCard.jsx
│   ├── TimeTable.jsx          # Visual weekly timetable
│   ├── Statistics.jsx         # Stats dashboard
│   ├── Recommendations.jsx    # Course suggestions
│   ├── SearchFilter.jsx       # Search & filter bar
│   └── Analytics.jsx          # Admin analytics
├── pages/
│   ├── Login.jsx
│   ├── StudentDashboard.jsx
│   ├── CourseSelection.jsx
│   ├── MySchedule.jsx
│   └── AdminDashboard.jsx
├── services/
│   └── api.js                 # API integration layer
├── styles/
│   └── index.css              # Modern styling
└── utils/
    └── scheduleUtils.js       # Conflict detection
```

## 🎯 Usage

1. **Login**: Choose Student or Admin role
2. **Students**: 
   - Browse courses with search/filter
   - Register for courses
   - View visual timetable
   - Track progress with statistics
3. **Admins**: 
   - View analytics dashboard
   - Manage course catalog
   - Monitor registrations

## 🎨 Design Highlights

- Purple gradient theme throughout
- Smooth hover animations
- Card-based layouts
- Emoji icons for visual appeal
- Responsive grid systems
- Color-coded course blocks in timetable
- Modern glassmorphism effects

## 🔧 Future Enhancements

- Backend API integration
- User authentication
- Email notifications
- PDF schedule export
- Mobile app version
- Real-time updates with WebSocket
