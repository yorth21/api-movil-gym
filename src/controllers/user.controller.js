import { UserRepository } from '../data/postgres/repositories/user.repository.js'

export class UserController {
  static async getUsers (req, res) {
    try {
      const users = await UserRepository.getUsers()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async createUser (req, res) {
    try {
      const newUser = await UserRepository.createUser(req.body)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}
