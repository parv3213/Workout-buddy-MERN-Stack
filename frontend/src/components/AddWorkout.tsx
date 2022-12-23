import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContext'
import { Workout } from '../pages/Home'

const AddWorkout = () => {
  const { dispatch } = useWorkoutContext()

  const [title, setTitle] = useState<string>()
  const [load, setLoad] = useState<number>()
  const [reps, setReps] = useState<number>()
  const [error, setError] = useState<any>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const workout = { title, load, reps }
    try {
      const res = await fetch('/api/workouts/', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await res.json()

      if (res.ok) {
        setTitle(undefined)
        setLoad(undefined)
        setReps(undefined)
        setError(undefined)
        dispatch({ type: 'CREATE_WORKOUT', payload: json as Workout })
      } else {
        setError(json.error)
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  return (
    <form className="ml-10 flex w-[25%] flex-col" onSubmit={(e) => onSubmit(e)}>
      <p className="mb-2 font-bold">Add a New Workout</p>
      <label className="mt-4 text-slate-700">Exercise Title:</label>
      <input
        type="text"
        className="mt-2 h-8 rounded-md pl-3 text-slate-700 shadow-md"
        onChange={(e) => setTitle(e.target.value)}
        value={title ? title : ''}
      />
      <label className="mt-4 text-slate-700">Load(kg):</label>
      <input
        type="number"
        className="mt-2 h-8 rounded-md pl-3 text-slate-700 shadow-md"
        onChange={(e) => setLoad(Number(e.target.value))}
        value={load ? load : ''}
      />
      <label className="mt-4 text-slate-700">Reps:</label>
      <input
        type="number"
        className="mt-2 h-8 rounded-md pl-3 text-slate-700 shadow-md"
        onChange={(e) => setReps(Number(e.target.value))}
        value={reps ? reps : ''}
      />

      <button className="mt-6 max-w-fit rounded-lg bg-green-600 px-2 py-2 text-left text-white" type="submit">
        Add Workout
      </button>

      {!error ? (
        ''
      ) : (
        <div className="mt-4 rounded-md border border-rose-600 bg-rose-50 px-4 py-6 text-rose-600">{error.message}</div>
      )}
    </form>
  )
}

export default AddWorkout
