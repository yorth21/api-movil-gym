import { Router } from 'express'
import { PhysicalInfoController } from '../controllers/physicalInfo.controller.js'

export const physicalInfoRoutes = Router()

physicalInfoRoutes
  .get('/:iduser', PhysicalInfoController.getPhysicalInfoByIduser)
  // .post('/', PhysicalInfoController.createPhysicalInfo)
  // .put('/:id', PhysicalInfoController.updatePhysicalInfo)
  // .delete('/:id', PhysicalInfoController.deletePhysicalInfo)
