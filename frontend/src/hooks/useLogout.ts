import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = useWorkoutContext()

  const logout = async () => {
    // remove user
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })

    workoutsDispatch({
      type: 'SET_WORKOUTS',
      payload: undefined,
    })

    // delete user from local storage
    localStorage.removeItem('user')
  }

  return { logout }
}
