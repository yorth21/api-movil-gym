import { FoodRepository } from '../data/postgres/repositories/food.respository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class FoodController {
  static async getFoods (req, res) {
    try {
      const foods = await FoodRepository.getFoods()
      sendSuccess(res, foods)
    } catch
    (error) {
      sendError(res, 500, error.message)
    }
  }
}
