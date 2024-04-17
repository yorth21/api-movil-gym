import { Router } from 'express'
import { usersRoutes } from './user.routes.js'
import { authRoutes } from './auth.routes.js'
import { catExcerciseRoutes } from './catExcercise.routes.js'
import { excerciseRoutes } from './excercise.routes.js'

export const Routes = Router()

Routes
  .use('/auth', authRoutes)
  .use('/users', usersRoutes)
  .use('/catExcercise', catExcerciseRoutes)
  .use('/excercise', excerciseRoutes)
