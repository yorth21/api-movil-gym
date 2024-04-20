import { Router } from 'express'
import { CatExcerciseController } from '../controllers/catExcercise.controller.js'

export const catExcerciseRoutes = Router()

catExcerciseRoutes
  .get('/', CatExcerciseController.getAll)
