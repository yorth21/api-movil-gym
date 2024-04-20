import { Router } from 'express'
import { ExcerciseController } from '../controllers/excercise.controller.js'

export const excerciseRoutes = Router()

excerciseRoutes
  .get('/', ExcerciseController.getAll)
  .get('/:idcat', ExcerciseController.getByIdcat)
