import { pool, connection } from '../db.js'


export const RealizarPago = async (req, res) => {
  try {
    await connection.beginTransaction()
    const {
      numCuenta, Proveedor, Servicio, emailUser, monto
    } = req.body

    let fecha = new Date(); // Obtiene la fecha actual

    let year = fecha.getFullYear(); // Obtiene el año (yyyy)
    let month = ('0' + (fecha.getMonth() + 1)).slice(-2); // Obtiene el mes (mm) y agrega un cero al principio si es necesario
    let day = ('0' + fecha.getDate()).slice(-2); // Obtiene el día (dd) y agrega un cero al principio si es necesario

    let fechaFormateada = year + '-' + month + '-' + day; // Formatea la fecha al formato "yyyy-mm-dd"



    const [result] = await pool.query(
      'INSERT INTO `recibo`(`id`, `numCuentaUsuario`, `Proveedor`, `Servicio`, `FechaEmision`) VALUES (?, ?, ?, ?, ?);',
      [null, numCuenta, Proveedor, Servicio, fechaFormateada]
    )

    await connection.commit()
    res.json({
      numCuenta, Proveedor, Servicio, fechaFormateada, emailUser, monto
    })
  } catch (error) {
    await connection.rollback()
    return res.status(500).json({ message: error.message })
  }
}

