import { UserModel } from '../models/user.model.js'

export class UserRepository {
  static async getUsers () {
    try {
      const users = await UserModel.findAll()
      return users
    } catch (error) {
      throw new Error(error)
    }
  }

  static async createUser (user) {
    try {
      const newUser = await UserModel.create(user)
      return newUser
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updateUser (id, user) {
    try {
      const userToUpdate = await UserModel.findByPk(id)
      if (!userToUpdate) {
        throw new Error('User not found')
      }
      await userToUpdate.update(user)
      return userToUpdate
    } catch (error) {
      throw new Error(error)
    }
  }

  static async deleteUser (id) {
    try {
      const userToDelete = await UserModel.findByPk(id)
      if (!userToDelete) {
        return null
      }
      userToDelete.isActive = false
      await userToDelete.save()
      return userToDelete
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getUserByUsername (username) {
    try {
      const user = await UserModel.findOne({ where: { username } })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getUserByEmail (email) {
    try {
      const user = await UserModel.findOne({ where: { email } })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updatePassword (id, password) {
    try {
      const userToUpdate = await UserModel.findByPk(id)
      if (!userToUpdate) {
        throw new Error('User not found')
      }
      userToUpdate.password = password
      await userToUpdate.save()
      return userToUpdate
    } catch (error) {
      throw new Error(error)
    }
  }
}
