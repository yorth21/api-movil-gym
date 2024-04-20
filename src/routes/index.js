import { Router } from 'express'
import { usersRoutes } from './user.routes.js'
import { authRoutes } from './auth.routes.js'
import { catExcerciseRoutes } from './catExcercise.routes.js'
import { excerciseRoutes } from './excercise.routes.js'
import { regDiaryRoutes } from './regDiary.routes.js'

export const Routes = Router()

Routes
  .use('/auth', authRoutes)
  .use('/users', usersRoutes)
  .use('/catexcercises', catExcerciseRoutes)
  .use('/excercises', excerciseRoutes)
  .use('/regdiaries', regDiaryRoutes)
