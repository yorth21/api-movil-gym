import bcrypt from 'bcrypt'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { generateToken } from '../utils/jwt.util.js'
import { validateLogin } from '../schemas/login.schema.js'

export class AuthController {
  static async login (req, res) {
    const dataLogin = validateLogin(req.body)
    if (!dataLogin.success) {
      return sendError(res, 400, dataLogin.message)
    }

    try {
      const user = await UserRepository.getUserByUsername(dataLogin.data.username)
      if (!user) {
        return sendError(res, 401, 'Invalid credentials')
      }

      const match = await bcrypt.compare(dataLogin.data.password, user.password)
      if (!match) {
        return sendError(res, 401, 'Invalid credentials')
      }

      user.password = undefined

      const token = generateToken({
        payload: { id: user.id, username: user.username },
        expiresIn: '1h',
        jwtSecret: process.env.JWT_SECRET
      })

      user.token = token

      sendSuccess(res, user)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
