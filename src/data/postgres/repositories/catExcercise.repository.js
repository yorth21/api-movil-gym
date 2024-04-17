import { CatExcerciseModel } from '../models/catExcercise.model.js'

export class CatExcercisesRepository {
  static async getAll () {
    try {
      const catExcercises = await CatExcerciseModel.findAll()
      return catExcercises
    } catch (error) {
      throw new Error(error)
    }
  }
}
