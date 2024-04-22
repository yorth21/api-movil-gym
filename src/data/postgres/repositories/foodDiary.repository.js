import { FoodDiaryModel } from '../models/foodDiary.model.js'

export class FoodDiaryRepository {
  static async getFoodDiariesByIduser (iduser) {
    try {
      const foodDiaries = await FoodDiaryModel.findAll({ where: { iduser } })
      return foodDiaries
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getFoodDiariesByIduserAndDate (iduser, date) {
    try {
      const foodDiaries = await FoodDiaryModel.findAll({ where: { iduser, date } })
      return foodDiaries
    } catch (error) {
      throw new Error(error)
    }
  }

  static async createFoodDiary (foodDiary) {
    try {
      const newFoodDiary = await FoodDiaryModel.create(foodDiary)
      return newFoodDiary
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updateFoodDiary (id, foodDiary) {
    try {
      const foodDiaryToUpdate = await FoodDiaryModel.findByPk(id)
      if (!foodDiaryToUpdate) {
        throw new Error('FoodDiary not found')
      }
      await foodDiaryToUpdate.update(foodDiary)
      return foodDiaryToUpdate
    } catch (error) {
      throw new Error(error)
    }
  }
}
