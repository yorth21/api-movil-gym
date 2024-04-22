import { FoodDiaryRepository } from '../data/postgres/repositories/foodDiary.repository.js'
import { validateFoodDiary } from '../schemas/foodDiary.schema.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class FoodDiaryController {
  static async getFoodDiariesByIduser (req, res) {
    try {
      const iduser = req.params.iduser
      const foodDiaries = await FoodDiaryRepository.getFoodDiariesByIduser(iduser)
      sendSuccess(res, foodDiaries)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async getFoodDiariesByIduserAndDate (req, res) {
    try {
      const iduser = req.params.iduser
      const date = req.params.date
      const foodDiaries = await FoodDiaryRepository.getFoodDiariesByIduserAndDate(iduser, date)
      sendSuccess(res, foodDiaries)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async createFoodDiary (req, res) {
    const dataFoodDiary = validateFoodDiary(req.body)
    if (!dataFoodDiary.success) {
      return sendError(res, 400, 'Validation error')
    }

    try {
      const newFoodDiary = await FoodDiaryRepository.createFoodDiary(dataFoodDiary.data)
      sendSuccess(res, newFoodDiary, 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async updateFoodDiary (req, res) {
    const dataFoodDiary = validateFoodDiary(req.body)
    if (!dataFoodDiary.success) {
      return sendError(res, 400, 'Validation error')
    }

    try {
      const id = req.params.id
      const updatedFoodDiary = await FoodDiaryRepository.updateFoodDiary(id, dataFoodDiary.data)
      sendSuccess(res, updatedFoodDiary)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
