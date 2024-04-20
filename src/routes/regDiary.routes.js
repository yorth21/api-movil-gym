import { Router } from 'express'
import { RegDiaryController } from '../controllers/regDiary.controller.js'

export const regDiaryRoutes = Router()

regDiaryRoutes
  .get('/:iduser', RegDiaryController.getByIdUser)
  .post('/', RegDiaryController.createDiary)
