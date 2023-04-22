import { connection, pool } from '../db.js'
// import Jwt from 'jsonwebtoken'
import { SECRETRESET, DOMAIN, SECRET } from '../config.js'
import { transporter } from '../mailer.js'
import bcrypt from 'bcrypt'

export const getLogin = async (req, res) => {
  try {
    const {email, password} = req.params
    const [result] = await pool.query(
      'select * from usuario where email = ? and contrasena = ?;',
      [email, password]
    )
 
    return res.json(result[0])
  } catch (error) {
    return res.status(404).json({ message: 'user not found' })
  }
}
export const getInformationLog = async (req, res) => {
  try {
    const { id, email, identification } = req.params

    res.json({ id, email, identification })
  } catch (error) {
    return res.status(500).json({ message: 'user not found' })
  }
}

export const getTypeAccount = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT `email`, password,  `identification`, `type`, `Token` FROM `login` WHERE `email` = ? AND stateId = 1',
      [req.params.email]
    )

    const match = await bcrypt.compare(req.params.password, result[0].password)

    if (match) {
      return res.json(result[0].type)
    } else {
      return res.status(404).json({ message: 'user not found' })
    }
  } catch (error) {
    return res.status(404).json({ message: 'user not found' })
  }
}

const VerifyExistenceEmail = async (email) => {
  const [result] = await pool.query(
    'SELECT count(loginId) FROM `login` WHERE email = ?',
    [email]
  )
  return result[0]['count(loginId)'] === 0
}

export const ForgotPassword = async (req, res) => {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: 'Email is required!' })
  }
  if (await VerifyExistenceEmail(email)) {
    return res.status(401).json({ message: 'The email is not registered' })
  }

  const message = 'Check your email for a link to reset your password'
  let verificationLink
  let emailStatus = 'OK'
  let resetToken
  let LoginID

  try {
    const [result] = await pool.query(
      'SELECT `loginId`, `email`, `identification` FROM `login` WHERE `email` = ? ',
      [email]
    )

    if (result.length === 0) {
      return res.json({ message: 'Something goes wrong' })
    }

    const token = Jwt.sign(
      { email: result[0].email, identification: result[0].identification },
      SECRETRESET,
      { expiresIn: '10m' }
    )
    verificationLink = `${DOMAIN}/new-password/${token}/Reset`
    resetToken = token
    LoginID = result[0].loginId
  } catch (error) {
    return res.json({ message })
  }

  // Send email
  try {
    await transporter.sendMail({
      from: '"Forgot Password" <a.quesada@newstreetdev.com>', // sender address
      to: email, // list of receivers
      subject: 'Forgot Password', // Subject line
      html: `
      <h4>Please click on the following link, or paste this into your browser to complete the process:</h4>
      </br>
      <a href="${verificationLink}">${verificationLink}</a>
      ` // html body
    })
  } catch (error) {
    emailStatus = error
    return res.status(400).json({ message: 'Something goes wrong' })
  }

  try {
    await connection.beginTransaction()
    await pool.query('UPDATE `login` SET resetToken = ? WHERE loginId = ?', [
      resetToken,
      LoginID
    ])
    await connection.commit()
  } catch (error) {
    await connection.rollback()
    return res.status(400).json({ message: error.message })
  }

  res.status(200).json({ message, info: emailStatus })
}

export const CreateNewPassword = async (req, res) => {
  const { newPassword } = req.body
  const resetToken = req.headers.reset
  if (!(resetToken && newPassword)) {
    return res.status(400).json({ message: 'All the fields are required' })
  }
  let jwtPayload

  try {
    jwtPayload = Jwt.verify(resetToken, SECRETRESET)
    const [result] = await pool.query(
      'SELECT `loginId`, `email`, `identification`, Token FROM `login` WHERE `resetToken` = ? ',
      [resetToken]
    )

    if (result.length === 0) {
      return res.status(404).json({ message: 'Something goes wrong' })
    }

    const decodedToken = Jwt.verify(result[0].Token, SECRET)
    const { email, id, identification } = decodedToken

    const userForToken = {
      email,
      password: newPassword,
      id,
      identification
    }

    const newToken = Jwt.sign(userForToken, SECRET, { expiresIn: '90d' })

    const saltRounds = 10
    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds)

    await connection.beginTransaction()
    await pool.query(
      'UPDATE `login` SET password = ?, Token = ? WHERE email = ?',
      [newPasswordHash, newToken, jwtPayload.email]
    )
    await connection.commit()
  } catch (error) {
    return res.status(401).json({ message: 'Something goes wrong!' })
  }

  res.status(200).json({ message: 'Password changed!' })
}
