import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext'

const App = () => {
  const { user } = useAuthContext()

  return (
    <div className="flex h-screen flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex h-full flex-1 justify-center bg-gray-200">
          <div className="w-[80%]">
            <Routes>
              <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            </Routes>
            <Routes>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            </Routes>
            <Routes>
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
