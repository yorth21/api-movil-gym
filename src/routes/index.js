import { Router } from 'express'
import { usersRoutes } from './user.routes.js'
import { authRoutes } from './auth.routes.js'

export const Routes = Router()

Routes
  .use('/auth', authRoutes)
  .use('/users', usersRoutes)
