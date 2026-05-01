const express = require('express')
const router = express.Router()
const Department = require('../models/Department')

router.get('/', async (req, res) => res.json(await Department.findAll()))
router.get('/:id', async (req, res) => {
  const dept = await Department.findByPk(req.params.id)
  if (!dept) return res.status(404).json({ message: 'Department not found' })
  res.json(dept)
})
router.post('/', async (req, res) => res.status(201).json(await Department.create(req.body)))
router.put('/:id', async (req, res) => {
  const dept = await Department.findByPk(req.params.id)
  if (!dept) return res.status(404).json({ message: 'Department not found' })
  await dept.update(req.body)
  res.json(dept)
})
router.delete('/:id', async (req, res) => {
  await Department.destroy({ where: { id: req.params.id } })
  res.json({ message: 'Department deleted' })
})

module.exports = router
