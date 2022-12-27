import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/userModel'

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  // verify authentication
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    if (typeof process.env.SECRET == 'string') {
      // @ts-ignore
      const { _id } = jwt.verify(token, process.env.SECRET)
      // @ts-ignore
      req.user = await User.findOne({ _id }).select('_id')

      next()
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Unauthorized' })
  }
}

export default requireAuth
