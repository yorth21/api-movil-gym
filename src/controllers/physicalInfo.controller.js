import { PhysicalInfoRepository } from '../data/postgres/repositories/physicalInfo.repository.js'
import { sendError, sendSuccess } from '../utils/response.util.js'

export class PhysicalInfoController {
  static async getPhysicalInfoByIduser (req, res) {
    try {
      const physicalInfo = await PhysicalInfoRepository.getPhysicalInfoByIduser(req.params.iduser)
      if (!physicalInfo) {
        return sendError(res, 404, 'Physical info not found')
      }

      sendSuccess(res, physicalInfo)
    } catch (error) {
      sendError(res, 500, error.message)
    }
  }
}
