import nodemailer from 'nodemailer'
import { PASS_MAILER, USER_MAILER } from './config.js'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: USER_MAILER, // generated ethereal user
    pass: PASS_MAILER // generated ethereal password
  }
})

// transporter.verify().then(() => {
//   console.log("ready for send emails");
// });
