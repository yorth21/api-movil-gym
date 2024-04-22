import { FoodModel } from '../models/food.model.js'

export class FoodRepository {
  static async getFoods () {
    try {
      const foods = await FoodModel.findAll()
      return foods
    } catch (error) {
      throw new Error(error)
    }
  }
}
