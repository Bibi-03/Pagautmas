import { connection, pool } from '../db.js'

export const ValidarNumCuenta = async (req, res) => {
  try {
    const {numCuenta, Servicio, Proveedor} = req.params
    const [result] = await pool.query(
      'SELECT `numCuentaUsuario`, `Servicio`, `Proveedor`, `Tasa` FROM `pago` WHERE numCuentaUsuario = ? and Servicio = ? and Proveedor = ?;',
      [numCuenta, Servicio, Proveedor]
    )

    if (result.length === 0){
        return res.status(404).json({ message: 'Something was wrong' })
    }

    let fecha = new Date(); // Obtiene la fecha actual
    fecha.setDate(fecha.getDate() - 30); // Resta 30 días a la fecha actual
    
    let year = fecha.getFullYear(); // Obtiene el año (yyyy)
    let month = ('0' + (fecha.getMonth() + 1)).slice(-2); // Obtiene el mes (mm) y agrega un cero al principio si es necesario
    let day = ('0' + fecha.getDate()).slice(-2); // Obtiene el día (dd) y agrega un cero al principio si es necesario
    
    let fechaFormateada = year + '-' + month + '-' + day; // Formatea la fecha al formato "yyyy-mm-dd"
    
    const [result2] = await pool.query(
        'SELECT `id`, `numCuentaUsuario`, `Proveedor`, `Servicio`, `FechaEmision` FROM `recibo` WHERE numCuentaUsuario = ? and Servicio = ? and Proveedor = ? and FechaEmision > ?;',
        [numCuenta, Servicio, Proveedor, fechaFormateada]
      )

    if (result2.length != 0){
        return res.status(500).json({ message: 'No hay pagos pendientes' })
    }
 
    return res.json(result[0])
  } catch (error) {
    return res.status(404).json({ message: 'Something was wrong' })
  }
}
// export const getInformationLog = async (req, res) => {
//   try {
//     const { id, email, identification } = req.params

//     res.json({ id, email, identification })
//   } catch (error) {
//     return res.status(500).json({ message: 'user not found' })
//   }
// }

// export const getTypeAccount = async (req, res) => {
//   try {
//     const [result] = await pool.query(
//       'SELECT `email`, password,  `identification`, `type`, `Token` FROM `login` WHERE `email` = ? AND stateId = 1',
//       [req.params.email]
//     )

//     const match = await bcrypt.compare(req.params.password, result[0].password)

//     if (match) {
//       return res.json(result[0].type)
//     } else {
//       return res.status(404).json({ message: 'user not found' })
//     }
//   } catch (error) {
//     return res.status(404).json({ message: 'user not found' })
//   }
// }

// const VerifyExistenceEmail = async (email) => {
//   const [result] = await pool.query(
//     'SELECT count(loginId) FROM `login` WHERE email = ?',
//     [email]
//   )
//   return result[0]['count(loginId)'] === 0
// }

// export const ForgotPassword = async (req, res) => {
//   const { email } = req.body
//   if (!email) {
//     return res.status(400).json({ message: 'Email is required!' })
//   }
//   if (await VerifyExistenceEmail(email)) {
//     return res.status(401).json({ message: 'The email is not registered' })
//   }

//   const message = 'Check your email for a link to reset your password'
//   let verificationLink
//   let emailStatus = 'OK'
//   let resetToken
//   let LoginID

//   try {
//     const [result] = await pool.query(
//       'SELECT `loginId`, `email`, `identification` FROM `login` WHERE `email` = ? ',
//       [email]
//     )

//     if (result.length === 0) {
//       return res.json({ message: 'Something goes wrong' })
//     }

//     const token = Jwt.sign(
//       { email: result[0].email, identification: result[0].identification },
//       SECRETRESET,
//       { expiresIn: '10m' }
//     )
//     verificationLink = `${DOMAIN}/new-password/${token}/Reset`
//     resetToken = token
//     LoginID = result[0].loginId
//   } catch (error) {
//     return res.json({ message })
//   }

//   // Send email
//   try {
//     await transporter.sendMail({
//       from: '"Forgot Password" <a.quesada@newstreetdev.com>', // sender address
//       to: email, // list of receivers
//       subject: 'Forgot Password', // Subject line
//       html: `
//       <h4>Please click on the following link, or paste this into your browser to complete the process:</h4>
//       </br>
//       <a href="${verificationLink}">${verificationLink}</a>
//       ` // html body
//     })
//   } catch (error) {
//     emailStatus = error
//     return res.status(400).json({ message: 'Something goes wrong' })
//   }

//   try {
//     await connection.beginTransaction()
//     await pool.query('UPDATE `login` SET resetToken = ? WHERE loginId = ?', [
//       resetToken,
//       LoginID
//     ])
//     await connection.commit()
//   } catch (error) {
//     await connection.rollback()
//     return res.status(400).json({ message: error.message })
//   }

//   res.status(200).json({ message, info: emailStatus })
// }

// export const CreateNewPassword = async (req, res) => {
//   const { newPassword } = req.body
//   const resetToken = req.headers.reset
//   if (!(resetToken && newPassword)) {
//     return res.status(400).json({ message: 'All the fields are required' })
//   }
//   let jwtPayload

//   try {
//     jwtPayload = Jwt.verify(resetToken, SECRETRESET)
//     const [result] = await pool.query(
//       'SELECT `loginId`, `email`, `identification`, Token FROM `login` WHERE `resetToken` = ? ',
//       [resetToken]
//     )

//     if (result.length === 0) {
//       return res.status(404).json({ message: 'Something goes wrong' })
//     }

//     const decodedToken = Jwt.verify(result[0].Token, SECRET)
//     const { email, id, identification } = decodedToken

//     const userForToken = {
//       email,
//       password: newPassword,
//       id,
//       identification
//     }

//     const newToken = Jwt.sign(userForToken, SECRET, { expiresIn: '90d' })

//     const saltRounds = 10
//     const newPasswordHash = await bcrypt.hash(newPassword, saltRounds)

//     await connection.beginTransaction()
//     await pool.query(
//       'UPDATE `login` SET password = ?, Token = ? WHERE email = ?',
//       [newPasswordHash, newToken, jwtPayload.email]
//     )
//     await connection.commit()
//   } catch (error) {
//     return res.status(401).json({ message: 'Something goes wrong!' })
//   }

//   res.status(200).json({ message: 'Password changed!' })
// }
