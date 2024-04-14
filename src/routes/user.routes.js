import { Router } from 'express'
import { UserController } from '../controllers/user.controller.js'

export const usersRoutes = Router()

usersRoutes
  .get('/', UserController.getUsers)
  .post('/', UserController.createUser)
  .put('/:id')
  .delete('/:id')
  .get('/:id')
