const express = require('express')
const router = express.Router()
const Notification = require('../models/Notification')

router.get('/', async (req, res) => res.json(await Notification.findAll()))
router.get('/:id', async (req, res) => {
  const notif = await Notification.findByPk(req.params.id)
  if (!notif) return res.status(404).json({ message: 'Notification not found' })
  res.json(notif)
})
router.post('/', async (req, res) => res.status(201).json(await Notification.create(req.body)))
router.put('/:id', async (req, res) => {
  const notif = await Notification.findByPk(req.params.id)
  if (!notif) return res.status(404).json({ message: 'Notification not found' })
  await notif.update(req.body)
  res.json(notif)
})
router.delete('/:id', async (req, res) => {
  await Notification.destroy({ where: { id: req.params.id } })
  res.json({ message: 'Notification deleted' })
})

module.exports = router
