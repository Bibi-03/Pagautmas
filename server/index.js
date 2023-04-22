import express from 'express'
import cors from 'cors'
// import { dirname, join } from 'path'
// import { fileURLToPath } from 'url'
import { PORT } from './config.js'

// import indexRoutes from "./routes/index.routes.js";
import LoginRoutes from './routes/Login.routes.js'
import ValidarCuentaRoutes from './routes/ValidarPago.routes.js'
import RealizarPagoRoutes from './routes/RealizarPago.routes.js'

const app = express()
// const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname)

app.use(cors())
app.use(express.json())

app.use('/api', LoginRoutes)
app.use('/api', ValidarCuentaRoutes)
app.use('/api', RealizarPagoRoutes)
// app.use(express.static(join(__dirname, '../client/dist')))

// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, '../client/dist/index.html'))
// })

app.listen(PORT)
console.log(`Server is listening on port ${PORT}`)
