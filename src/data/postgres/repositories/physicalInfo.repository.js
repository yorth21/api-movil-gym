import { PhysicalInfoModel } from '../models/physicalInfo.model.js'

export class PhysicalInfoRepository {
  static async getPhysicalInfos () {
    try {
      const physicalInfos = await PhysicalInfoModel.findAll()
      return physicalInfos
    } catch (error) {
      throw new Error(error)
    }
  }

  static async createPhysicalInfo (physicalInfo) {
    try {
      const newPhysicalInfo = await PhysicalInfoModel.create(physicalInfo)
      return newPhysicalInfo
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updatePhysicalInfo (id, physicalInfo) {
    try {
      const physicalInfoToUpdate = await PhysicalInfoModel.findByPk(id)
      if (!physicalInfoToUpdate) {
        return null
      }
      await physicalInfoToUpdate.update(physicalInfo)
      return physicalInfoToUpdate
    } catch (error) {
      throw new Error(error)
    }
  }

  static async deletePhysicalInfo (id) {
    try {
      const physicalInfoToDelete = await PhysicalInfoModel.findByPk(id)
      if (!physicalInfoToDelete) {
        return null
      }
      physicalInfoToDelete.isActive = false
      await physicalInfoToDelete.save()
      return physicalInfoToDelete
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getPhysicalInfoByIduser (iduser) {
    try {
      const physicalInfo = await PhysicalInfoModel.findOne({ where: { iduser } })
      return physicalInfo
    } catch (error) {
      throw new Error(error)
    }
  }
}
