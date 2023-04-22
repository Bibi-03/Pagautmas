import axios from 'axios'

// export const getVerificarNumCuentaRequest = async (numCuenta, Servicio, Proveedor) =>
//   await axios.get(`http://localhost:4000/api/ValidarNumCuenta/${numCuenta}/${Servicio}/${Proveedor}`)


export const getVerificarNumCuentaRequest = async (numCuenta, Servicio, Proveedor) =>
  await axios.get(`/api/ValidarNumCuenta/${numCuenta}/${Servicio}/${Proveedor}`)

