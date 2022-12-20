import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="flex justify-center">
      <div className="w-[80%] py-8">
        <Link to="/" className="text-xl font-bold">
          Workout Buddy
        </Link>
      </div>
    </header>
  )
}

export default Navbar
