import { Router } from 'express'
import { FoodDiaryController } from '../controllers/foodDiary.controller.js'

export const foodDiaryRoutes = Router()

foodDiaryRoutes
  .get('/:iduser', FoodDiaryController.getFoodDiariesByIduser)
  .get('/today/:iduser', FoodDiaryController.getFoodDiariesByIduserAndDate)
  .post('/', FoodDiaryController.createFoodDiary)
  .put('/:id', FoodDiaryController.updateFoodDiary)
