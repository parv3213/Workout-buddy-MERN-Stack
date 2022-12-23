import { createContext, useReducer } from 'react'

import { Workout } from '../pages/Home'

interface WorkoutActionSetWorkouts {
  type: 'SET_WORKOUTS'
  payload: Workout[]
}

interface WorkoutActionCreateWorkout {
  type: 'CREATE_WORKOUT'
  payload: Workout
}

type WorkoutAction = WorkoutActionSetWorkouts | WorkoutActionCreateWorkout

interface WorkoutState {
  workouts: undefined | Workout[]
}

interface WorkoutContext {
  workouts: undefined | Workout[]
  dispatch: React.Dispatch<WorkoutAction>
}

export const WorkoutContext = createContext<WorkoutContext>({
  workouts: undefined,
  dispatch: () => {},
})

export const workoutsReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      if (state.workouts) {
        return {
          workouts: [action.payload, ...state.workouts],
        }
      } else {
        return { workouts: [action.payload] }
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  })

  return <WorkoutContext.Provider value={{ ...state, dispatch }}>{children}</WorkoutContext.Provider>
}
