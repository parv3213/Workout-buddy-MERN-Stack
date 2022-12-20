import React from 'react'
import { Workout } from '../pages/Home'

const WorkoutDetails = ({ workout }: { workout: Workout }) => {
  return (
    <div className="mt-4 rounded-md bg-white px-4 py-6 shadow-md">
      <p className="pb-3 text-lg font-bold text-green-600">{workout.title}</p>
      <p>
        <span className="font-bold">Load(kg): </span>
        <span className="text-slate-700">{workout.load}</span>
      </p>
      <p>
        <span className="font-bold">Reps: </span>
        <span className="text-slate-700">{workout.reps}</span>
      </p>
      <p>
        <span className="text-slate-700">{workout.updatedAt}</span>
      </p>
    </div>
  )
}

export default WorkoutDetails
