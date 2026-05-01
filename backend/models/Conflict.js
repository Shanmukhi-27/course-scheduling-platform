const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Conflict = sequelize.define('Conflict', {
  student: { type: DataTypes.STRING, allowNull: false },
  course1: { type: DataTypes.STRING, allowNull: false },
  course2: { type: DataTypes.STRING, allowNull: false },
  time: { type: DataTypes.STRING, allowNull: false },
  severity: { type: DataTypes.STRING, allowNull: false }
})

module.exports = Conflict
