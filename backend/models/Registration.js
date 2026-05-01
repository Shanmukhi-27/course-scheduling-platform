const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Registration = sequelize.define('Registration', {
  studentId: { type: DataTypes.STRING, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false }
})

module.exports = Registration
