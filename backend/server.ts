import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import workoutRoutes from './routes/workout'
import userRoutes from './routes/user'

dotenv.config()

// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to db
if (process.env.MONGO_URI) {
  mongoose.set('strictQuery', false)
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      // Listen for requests
      app.listen(process.env.PORT, () => {
        console.log('Connected to db and Listening on port', process.env.PORT)
      })
    })
    .catch((error) => console.log(error))
} else {
  throw new Error('Invalid Mongo URI')
}
