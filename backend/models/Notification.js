const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Notification = sequelize.define('Notification', {
  title: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, defaultValue: 'info' },
  date: { type: DataTypes.STRING, allowNull: false }
})

module.exports = Notification
