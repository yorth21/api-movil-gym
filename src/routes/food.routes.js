import { Router } from 'express'
import { FoodController } from '../controllers/food.controller.js'

export const foodRoutes = Router()

foodRoutes
  .get('/', FoodController.getFoods)
