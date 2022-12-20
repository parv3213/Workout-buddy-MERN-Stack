import express from 'express'

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'Get all workout' })
})

// GET single workout by id
router.get('/:id', (req, res) => {
  res.json({ msg: 'Get single workout' })
})

// POST a new workout
router.post('/', (req, res) => {
  res.json({ msg: 'Post a new workout' })
})

// DELETE a new workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete a new workout' })
})

// UPDATE a new workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'Update a new workout' })
})

export default router
