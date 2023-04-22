import { connection, pool } from '../db.js'

export const getCuentaBancaria = async (req, res) => {
  try {
    const {email} = req.params
    const [result] = await pool.query(
      'SELECT `email`,`dineroActual`, `numCuentaUsuario` FROM `cuentabancaria` WHERE email = ?;',
      [email]
    )
 
    return res.json(result[0])
  } catch (error) {
    return res.status(404).json({ message: 'Account not found' })
  }
}
