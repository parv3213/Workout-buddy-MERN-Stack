import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import { WorkoutContextProvider } from './context/WorkoutContext'

const App = () => {
  return (
    <WorkoutContextProvider>
      <div className="flex h-screen flex-col">
        <BrowserRouter>
          <Navbar />
          <div className="flex h-full flex-1 justify-center bg-gray-200">
            <div className="w-[80%]">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </WorkoutContextProvider>
  )
}

export default App
