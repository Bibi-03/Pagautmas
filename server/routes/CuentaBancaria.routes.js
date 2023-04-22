import { Router } from 'express'

import {
  getCuentaBancaria
} from '../controllers/CuentaBancaria.controllers.js'

const router = Router()

router.get('/getCurrentMoney/:email', getCuentaBancaria)

export default router
