import { FoodModel } from '../models/food.model.js'
import { IngredientModel } from '../models/ingredient.model.js'

export class FoodRepository {
  static async getFoods () {
    try {
      const foods = await FoodModel.findAll({
        include: {
          model: IngredientModel,
          attributes: ['name']
        }
      })
      return foods
    } catch (error) {
      throw new Error(error)
    }
  }
}
