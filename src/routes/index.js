import { Router } from 'express'
import { usersRoutes } from './users.routes.js'

export const Routes = Router()

Routes
  .use('/users', usersRoutes)
