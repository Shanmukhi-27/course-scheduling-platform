const express = require('express')
const router = express.Router()
const Conflict = require('../models/Conflict')

router.get('/', async (req, res) => res.json(await Conflict.findAll()))
router.get('/:id', async (req, res) => {
  const conflict = await Conflict.findByPk(req.params.id)
  if (!conflict) return res.status(404).json({ message: 'Conflict not found' })
  res.json(conflict)
})
router.post('/', async (req, res) => res.status(201).json(await Conflict.create(req.body)))
router.delete('/:id', async (req, res) => {
  await Conflict.destroy({ where: { id: req.params.id } })
  res.json({ message: 'Conflict resolved' })
})

module.exports = router
