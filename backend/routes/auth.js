const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body
  const exists = await User.findOne({ where: { email } })
  if (exists) return res.status(400).json({ message: 'Email already registered' })
  const user = await User.create({ name, email, password, role })
  res.status(201).json({ id: user.id, name: user.name, email: user.email, role: user.role })
})

router.post('/login', async (req, res) => {
  const { email, password, role } = req.body
  const user = await User.findOne({ where: { email, password, role } })
  if (!user) return res.status(401).json({ message: 'Invalid email, password or role' })
  res.json({ id: user.id, name: user.name, email: user.email, role: user.role })
})

module.exports = router
