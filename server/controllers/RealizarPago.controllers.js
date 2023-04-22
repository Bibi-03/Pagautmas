import { pool, connection } from '../db.js'
import { transporter } from '../mailer.js'

const proveedores = ["CNTEL", "JASEC", "SPA", "Kolbi", "Liberty", "Claro"];
const Servicios = ["Electricidad", "Internet", "Telefono"]

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



    const [query] = await pool.query(
      'SELECT `email`, `numCuentaUsuario`, `pin`, `vencimiento`, `dineroActual` FROM `cuentabancaria` WHERE dineroActual >= ? and email = ?',
      [monto, emailUser]
    )

    if (query.length === 0){
      return res.status(505).json({ message: "No hay suficientes fondos"})
    }


    const [result] = await pool.query(
      'INSERT INTO `recibo`(`id`, `numCuentaUsuario`, `Proveedor`, `Servicio`, `FechaEmision`) VALUES (?, ?, ?, ?, ?);',
      [null, numCuenta, Proveedor, Servicio, fechaFormateada]
    )


    const [result2] = await pool.query(
      'UPDATE `cuentabancaria` SET `dineroActual`= (dineroActual - ?) WHERE email = ?;',
      [monto, emailUser]
    )

    

//     await transporter.sendMail({
//        from: '"Pago de servicios" <brenquesada22@gmail.com>', // sender address
//       to: emailUser, // list of receivers
//       subject: 'Pago Realizado', // Subject line
//       html: `
//       <h1>Pago de Servicios</h1>
//       </br>
//       <p>Se ha realizado el pago de servicios de ${Servicios[Servicio - 1]}</p>
//       </br>

// <table>
//         <thead>
//           <tr>
//             <th rowspan="2">Servicio</th>
//             <th rowspan="2">Proveedor</th>
//             <th rowspan="2">Monto</th>
//             <th rowspan="2">Numero de Cuenta</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>${Servicios[Servicio-1]}</td>
//             <td>${proveedores[Proveedor - 1]}</td>
//             <td>${monto}</td>
//             <td>${numCuenta}</td>
//           </tr>
//         </tbody>
//       </table>
//     //   ` // html body
//     })
    

    await connection.commit()
    res.json({
      numCuenta, Proveedor, Servicio, fechaFormateada, emailUser, monto
    })
  } catch (error) {
    await connection.rollback()
    return res.status(500).json({ message: error.message })
  }
}

