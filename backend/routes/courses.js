const express = require('express')
const router = express.Router()
const Course = require('../models/Course')

router.get('/', async (req, res) => {
  const courses = await Course.findAll()
  res.json(courses)
})

router.get('/:id', async (req, res) => {
  const course = await Course.findByPk(req.params.id)
  if (!course) return res.status(404).json({ message: 'Course not found' })
  res.json(course)
})

router.post('/', async (req, res) => {
  const course = await Course.create({
    ...req.body,
    availableSeats: parseInt(req.body.totalSeats)
  })
  res.status(201).json(course)
})

router.put('/:id', async (req, res) => {
  const course = await Course.findByPk(req.params.id)
  if (!course) return res.status(404).json({ message: 'Course not found' })
  await course.update(req.body)
  res.json(course)
})

router.delete('/:id', async (req, res) => {
  await Course.destroy({ where: { id: req.params.id } })
  res.json({ message: 'Course deleted' })
})

module.exports = router
