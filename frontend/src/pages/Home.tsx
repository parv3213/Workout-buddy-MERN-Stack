import React, { useEffect, useState } from 'react'
import AddWorkout from '../components/AddWorkout'
import WorkoutDetails from '../components/WorkoutDetails'

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
  const [workouts, setWorkouts] = useState<Workout[]>()

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch('/api/workouts')
        const json = await response.json()

        if (response.ok) {
          setWorkouts(json)
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }

    fetchWorkout()
  }, [])

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
