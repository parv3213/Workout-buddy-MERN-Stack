import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/userModel'

const createToken = (_id: number) => {
  if (typeof process.env.SECRET == 'string') return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// Login user
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    // @ts-ignore
    const user = await User.login(email, password)

    // create JWT token
    const token = createToken(user._id)

    return res.status(200).json({ email, token })
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

// Signup User
const signupUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    // @ts-ignore
    const user = await User.signup(email, password)

    // create JWT token
    const token = createToken(user._id)

    return res.status(200).json({ email, token })
  } catch (e: any) {
    return res.status(400).json({ error: e.message })
  }
}

export { loginUser, signupUser }
