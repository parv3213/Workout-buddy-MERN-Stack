import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email: string, password: string) => {
    setIsLoading(true)
    setError(undefined)

    try {
      const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const json = await res.json()

      if (!res.ok) {
        setError(json.error)
      } else {
        // save the user in local storage
        localStorage.setItem('user', JSON.stringify(json))

        // update authContext
        dispatch({ type: 'LOGIN', payload: json })
      }
    } catch (e: any) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
