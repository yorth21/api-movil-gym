import { Router } from 'express'
import { usersRoutes } from './user.routes.js'

export const Routes = Router()

Routes
  .use('/users', usersRoutes)
