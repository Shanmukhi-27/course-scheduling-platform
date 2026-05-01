const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Department = sequelize.define('Department', {
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false },
  courses: { type: DataTypes.INTEGER, defaultValue: 0 },
  students: { type: DataTypes.INTEGER, defaultValue: 0 },
  head: { type: DataTypes.STRING, allowNull: false }
})

module.exports = Department
