import { Router } from 'express'

import {
  RealizarPago
} from '../controllers/RealizarPago.controllers.js'

const router = Router()

router.post('/RealizarPago', RealizarPago)


export default router
