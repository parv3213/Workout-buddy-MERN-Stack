import express from 'express'

import Workout from '../models/workoutModel'

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
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error })
  }
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
