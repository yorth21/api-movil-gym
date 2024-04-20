import { RegDiaryRepository } from '../data/postgres/repositories/regDiary.repository.js'
import { validateRegDiary } from '../schemas/regDiary.schema.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class RegDiaryController {
  static async getByIdUser (req, res) {
    try {
      const diary = await RegDiaryRepository.getByIdUser(req.params.iduser)
      sendSuccess(res, diary)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async createDiary (req, res) {
    const dataRegDiary = validateRegDiary(req.body)
    if (!dataRegDiary.success) {
      return sendError(res, 400, 'Validation error')
    }

    try {
      dataRegDiary.data.date = Date.now()

      const newDiary = await RegDiaryRepository.createDiary(dataRegDiary.data)
      sendSuccess(res, newDiary, 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
