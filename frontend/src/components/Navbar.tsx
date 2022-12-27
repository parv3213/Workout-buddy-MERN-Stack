import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header className="flex justify-center">
      <div className="flex w-[80%] justify-between py-8">
        <Link to="/" className="text-xl font-bold">
          Workout Buddy
        </Link>
        <nav>
          {user ? (
            <div>
              <span className="mr-4">{user.email}</span>
              <button
                onClick={handleClick}
                className="mr-4 rounded-md border border-green-600 p-2 hover:bg-green-600 hover:text-white">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="mr-4 rounded-md border border-green-600 p-2 hover:bg-green-600 hover:text-white">
                Login
              </Link>
              <Link to="/signup" className="rounded-md bg-yellow-200 p-2 hover:bg-yellow-400">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
