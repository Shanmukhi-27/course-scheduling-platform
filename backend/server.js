require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./config/db')

require('./models/Course')
require('./models/Registration')
require('./models/Student')
require('./models/Conflict')
require('./models/Department')
require('./models/Notification')
require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/courses', require('./routes/courses'))
app.use('/api/registrations', require('./routes/registrations'))
app.use('/api/students', require('./routes/students'))
app.use('/api/conflicts', require('./routes/conflicts'))
app.use('/api/departments', require('./routes/departments'))
app.use('/api/notifications', require('./routes/notifications'))
app.use('/api/auth', require('./routes/auth'))

sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected and tables synced')
  app.listen(process.env.PORT || 8081, () => console.log(`Server running on http://localhost:${process.env.PORT || 8081}`))
}).catch(err => console.error('Database connection failed:', err))
