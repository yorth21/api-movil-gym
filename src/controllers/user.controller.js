import bcrypt from 'bcrypt'
import { UserRepository } from '../data/postgres/repositories/user.repository.js'
import { validateUser } from '../schemas/user.schema.js'
import { sendError, sendSuccess } from '../utils/response.util.js'
import { sequelize } from '../data/postgres/connection.js'
import { PhysicalInfoRepository } from '../data/postgres/repositories/physicalInfo.repository.js'
import { validatePhysicalInfo } from '../schemas/physicalInfo.schema.js'

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
    const dataUser = validateUser(req.body)
    const dataPhysicalInfo = validatePhysicalInfo(req.body)
    if (!dataUser.success || !dataPhysicalInfo.success) {
      return sendError(res, 400, 'Validation error')
    }

    try {
      const user = await UserRepository.getUserByUsername(req.body.username)
      if (user) {
        return sendError(res, 400, 'User already exists')
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      dataUser.data.password = hashedPassword

      const result = await sequelize.transaction(async () => {
        const newUser = await UserRepository.createUser(dataUser.data)
        newUser.password = undefined

        dataPhysicalInfo.data.iduser = newUser.id
        const newPhysicalInfo = await PhysicalInfoRepository.createPhysicalInfo(dataPhysicalInfo.data)

        return { newUser, newPhysicalInfo }
      })

      sendSuccess(res, result, 201)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async getUserByUsername (req, res) {
    try {
      const user = await UserRepository.getUserByUsername(req.params.username)
      if (!user) {
        return sendError(res, 404, 'User not found')
      }

      user.password = undefined
      sendSuccess(res, user)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }

  static async updateUser (req, res) {
    const data = validateUser(req.body)
    if (!data.success) {
      return sendError(res, 400, 'Validation error')
    }

    try {
      const user = await UserRepository.getUserByUsername(req.params.username)
      if (!user) {
        return sendError(res, 404, 'User not found')
      }

      const result = await UserRepository.updateUser(user.id, data.data)
      result.password = undefined
      sendSuccess(res, result)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
