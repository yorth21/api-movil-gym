import { RegDiaryModel } from '../models/regDiary.model.js'

export class RegDiaryRepository {
  static async getByIdUser (iduser) {
    try {
      const diary = await RegDiaryModel.findAll({
        where: {
          iduser
        }
      })
      return diary
    } catch (error) {
      throw new Error(error)
    }
  }

  static async createDiary (diary) {
    try {
      const newDiary = await RegDiaryModel.create(diary)
      return newDiary
    } catch (error) {
      throw new Error(error)
    }
  }
}
