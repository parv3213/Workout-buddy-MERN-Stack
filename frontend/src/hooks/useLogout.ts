import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = async () => {
    // remove user
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })

    // delete user from local storage
    localStorage.removeItem('user')
  }

  return { logout }
}
