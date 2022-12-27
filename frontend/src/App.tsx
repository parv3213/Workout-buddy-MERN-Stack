import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import { WorkoutContextProvider } from './context/WorkoutContext'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <AuthContextProvider>
      <WorkoutContextProvider>
        <div className="flex h-screen flex-col">
          <BrowserRouter>
            <Navbar />
            <div className="flex h-full flex-1 justify-center bg-gray-200">
              <div className="w-[80%]">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                  <Route path="/login" element={<Login />} />
                </Routes>
                <Routes>
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </WorkoutContextProvider>
    </AuthContextProvider>
  )
}

export default App
