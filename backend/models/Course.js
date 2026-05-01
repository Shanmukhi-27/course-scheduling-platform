const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Course = sequelize.define('Course', {
  code: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  instructor: { type: DataTypes.STRING, allowNull: false },
  schedule: { type: DataTypes.STRING, allowNull: false },
  credits: { type: DataTypes.INTEGER, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false }
})

module.exports = Course
