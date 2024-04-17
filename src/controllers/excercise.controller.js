import { ExcerciseRepository } from '../data/postgres/repositories/excercise.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class ExcerciseController {
  static async getAll (req, res) {
    try {
      const excercises = await ExcerciseRepository.getAll()
      sendSuccess(res, excercises)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async getByIdcat (req, res) {
    const { id } = req.params
    try {
      const excercises = await ExcerciseRepository.getByIdcat(id)
      sendSuccess(res, excercises)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
