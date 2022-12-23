import React from 'react'
import { formatDistance } from 'date-fns'
import { useWorkoutContext } from '../hooks/UseWorkoutContext'
import { Workout } from '../pages/Home'

const WorkoutDetails = ({ workout }: { workout: Workout }) => {
  const { dispatch } = useWorkoutContext()

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/workouts/${id}`, {
        method: 'DELETE',
      })
      const json = await res.json()

      if (res.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: json as Workout })
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <div className="mt-4 flex-1 rounded-md bg-white px-4 py-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
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
            <span className="text-slate-700">
              {formatDistance(new Date(workout.updatedAt), new Date(), { addSuffix: true })}
            </span>
          </p>
        </div>

        <button onClick={() => handleDelete(workout._id)}>
          {/* Delete svg */}
          <svg xmlns="http://www.w3.org/2000/svg" className="scale-50 hover:stroke-rose-900" height={48} width={48}>
            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default WorkoutDetails
