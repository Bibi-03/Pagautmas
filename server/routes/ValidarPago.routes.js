import { Router } from 'express'

import {
  ValidarNumCuenta
} from '../controllers/ValidarPagos.controllers.js'

const router = Router()

router.get('/ValidarNumCuenta/:numCuenta/:Servicio/:Proveedor', ValidarNumCuenta)

// router.put('/TypeAccount', getTypeAccount)

// router.put('/forgot-password', ForgotPassword)

// router.put('/new-password', CreateNewPassword)

// router.get('/GetInformationLog', getInformationLog)

export default router
