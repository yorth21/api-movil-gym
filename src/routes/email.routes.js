import { Router } from 'express'
import { EmailController } from '../controllers/email.controller.js'

export const emailRoutes = Router()

emailRoutes
  .post('/', EmailController.sendEmail)
