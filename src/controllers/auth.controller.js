import bcrypt from 'bcrypt'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { generateToken } from '../utils/jwt.util.js'
import { validateLogin } from '../schemas/login.schema.js'

export class AuthController {
  static async login (req, res) {
    const body = validateLogin(req.body)
    if (!body.success) {
      return sendError(res, 400, body.message)
    }

    try {
      const user = await UserRepository.getUserByUsername(body.username)
      if (!user) {
        return sendError(res, 401, 'Invalid credentials')
      }

      const match = await bcrypt.compare(body.password, user.password)
      if (!match) {
        return sendError(res, 401, 'Invalid credentials')
      }

      delete user.password

      const token = generateToken({
        payload: { id: user.id, username: user.username },
        jwtSecret: process.env.JWT_SECRET
      })

      user.token = token

      sendSuccess(res, user)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
