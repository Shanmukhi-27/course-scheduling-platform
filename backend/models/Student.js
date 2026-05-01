const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Student = sequelize.define('Student', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  courses: { type: DataTypes.INTEGER, defaultValue: 0 },
  credits: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { type: DataTypes.STRING, defaultValue: 'Active' }
})

module.exports = Student
