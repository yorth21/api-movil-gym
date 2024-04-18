import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

export const usersRoutes = Router()

usersRoutes
  .get('/', UserController.getUsers)
  .post('/', UserController.createUser)
  .put('/:username', UserController.updateUser)
  .get('/:username', UserController.getUserByUsername)
