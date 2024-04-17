import { CatExcercisesRepository } from '../data/postgres/repositories/catExcercise.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class CatExcerciseController {
  static async getAll (req, res) {
    try {
      const catExcercises = await CatExcercisesRepository.getAll()
      sendSuccess(res, catExcercises)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
