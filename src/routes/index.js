import { Router } from 'express'
import { usersRoutes } from './user.routes.js'
import { authRoutes } from './auth.routes.js'
import { catExcerciseRoutes } from './catExcercise.routes.js'
import { excerciseRoutes } from './excercise.routes.js'
import { regDiaryRoutes } from './regDiary.routes.js'
import { physicalInfoRoutes } from './physicalInfo.routes.js'
import { emailRoutes } from './email.routes.js'
import { foodRoutes } from './food.routes.js'

export const Routes = Router()

Routes
  .use('/auth', authRoutes)
  .use('/email', emailRoutes)
  .use('/users', usersRoutes)
  .use('/catexcercises', catExcerciseRoutes)
  .use('/excercises', excerciseRoutes)
  .use('/physicalinfo', physicalInfoRoutes)
  .use('/regdiaries', regDiaryRoutes)
  .use('/foods', foodRoutes)
