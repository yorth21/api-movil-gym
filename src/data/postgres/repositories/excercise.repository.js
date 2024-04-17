import { ExcerciseModel } from '../models/excercise.model.js'

export class ExcerciseRepository {
  static async getAll () {
    try {
      const excercises = await ExcerciseModel.findAll()
      return excercises
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getByIdcat (id) {
    try {
      const excercises = await ExcerciseModel.findAll({ where: { idcat: id } })
      return excercises
    } catch (error) {
      throw new Error(error)
    }
  }
}
