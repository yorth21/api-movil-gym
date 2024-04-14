import bcrypt from 'bcrypt'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import { validateUser } from '../schemas/user.schema.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class UserController {
  static async getUsers (req, res) {
    try {
      const users = await UserRepository.getUsers()
      sendSuccess(res, users)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async createUser (req, res) {
    const body = validateUser(req.body)
    if (!body.success) {
      return sendError(res, 400, body.message)
    }

    try {
      const user = await UserRepository.getUserByUsername(req.body.username)
      if (user) {
        return sendError(res, 400, 'User already exists')
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      req.body.password = hashedPassword

      const newUser = await UserRepository.createUser(body)
      delete newUser.password

      sendSuccess(res, newUser, 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
