import { createContext, useEffect, useReducer } from 'react'

interface User {
  email: string
  token: string
}

interface UserState {
  user: User | null
}

interface UserAction {
  type: string
  payload: User | null
}

interface AuthContext {
  user: null | User
  dispatch: React.Dispatch<UserAction>
}

export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }

    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  dispatch: () => {},
})

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  console.log('AuthContext state', state)
  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      dispatch({
        type: 'LOGIN',
        payload: JSON.parse(user),
      })
    }
  }, [])

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
}
