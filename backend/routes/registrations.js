const express = require('express')
const router = express.Router()
const Registration = require('../models/Registration')
const Course = require('../models/Course')

router.post('/', async (req, res) => {
  const { studentId, courseId } = req.body
  const exists = await Registration.findOne({ where: { studentId, courseId } })
  if (exists) return res.status(400).json({ message: 'Already registered' })
  const registration = await Registration.create({ studentId, courseId })
  await Course.decrement('availableSeats', { by: 1, where: { id: courseId } })
  res.status(201).json(registration)
})

router.get('/student/:studentId', async (req, res) => {
  const registrations = await Registration.findAll({ where: { studentId: req.params.studentId } })
  const courseIds = registrations.map(r => r.courseId)
  const courses = await Course.findAll({ where: { id: courseIds } })
  res.json(courses)
})

router.delete('/:id', async (req, res) => {
  const reg = await Registration.findByPk(req.params.id)
  if (reg) {
    await Course.increment('availableSeats', { by: 1, where: { id: reg.courseId } })
    await reg.destroy()
  }
  res.json({ message: 'Registration dropped' })
})

router.delete('/student/:studentId/course/:courseId', async (req, res) => {
  const reg = await Registration.findOne({ where: { studentId: req.params.studentId, courseId: req.params.courseId } })
  if (reg) {
    await Course.increment('availableSeats', { by: 1, where: { id: reg.courseId } })
    await reg.destroy()
  }
  res.json({ message: 'Course dropped' })
})

module.exports = router
