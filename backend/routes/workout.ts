import express from 'express'
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from '../controller/workoutController'
import requireAuth from '../middleware/requireAuth'

const router = express.Router()

// Middleware
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET single workout by id
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout)

// UPDATE a new workout
router.patch('/:id', updateWorkout)

export default router
