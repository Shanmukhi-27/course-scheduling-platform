const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

router.get('/', async (req, res) => res.json(await Student.findAll()))
router.get('/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  if (!student) return res.status(404).json({ message: 'Student not found' })
  res.json(student)
})
router.post('/', async (req, res) => res.status(201).json(await Student.create(req.body)))
router.put('/:id', async (req, res) => {
  const student = await Student.findByPk(req.params.id)
  if (!student) return res.status(404).json({ message: 'Student not found' })
  await student.update(req.body)
  res.json(student)
})
router.delete('/:id', async (req, res) => {
  await Student.destroy({ where: { id: req.params.id } })
  res.json({ message: 'Student deleted' })
})

module.exports = router
