import axios from 'axios'

export const RealizarPagoRequest = async (Datos) =>
  await axios.post(`http://localhost:4000/api/RealizarPago`, Datos)

