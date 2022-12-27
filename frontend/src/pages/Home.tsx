import React, { useEffect } from 'react'
import AddWorkout from '../components/AddWorkout'
import WorkoutDetails from '../components/WorkoutDetails'
import { useAuthContext } from '../hooks/useAuthContext'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

export interface Workout {
  _id: string
  title: string
  reps: number
  load: number
  createdAt: string
  updatedAt: string
  __v: number
}

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch('/api/workouts', {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        })
        const json = (await response.json()) as Workout[]

        if (response.ok) {
          dispatch({
            type: 'SET_WORKOUTS',
            payload: json,
          })
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }

    if (user) fetchWorkout()
  }, [user, dispatch])

  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <div className="w-[60%]">
          {workouts &&
            workouts.map((workout) => {
              return (
                <div key={workout._id}>
                  <WorkoutDetails workout={workout} />
                </div>
              )
            })}
        </div>
        <AddWorkout />
      </div>
    </div>
  )
}

export default Home
