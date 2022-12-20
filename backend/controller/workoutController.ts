import { Request, Response } from 'express'
import mongoose from 'mongoose'

import Workout from '../models/workoutModel'

// GET all workouts
const getWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

// GET single workout by id
const getWorkout = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)
    if (!workout) {
      return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

// POST a new workout
const createWorkout = async (req: Request, res: Response) => {
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
}

// DELETE a new workout
const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
      return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

// UPDATE a new workout
const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
    )

    if (!workout) {
      return res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout }
