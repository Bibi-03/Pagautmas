import { Router } from 'express'

import {
  CreateNewPassword,
  ForgotPassword,
  getLogin,
  getTypeAccount,
  getInformationLog
} from '../controllers/Login.controllers.js'

const router = Router()

// login
router.get('/Login/:email/:password', getLogin)

router.put('/TypeAccount', getTypeAccount)

router.put('/forgot-password', ForgotPassword)

router.put('/new-password', CreateNewPassword)

router.get('/GetInformationLog', getInformationLog)

export default router
