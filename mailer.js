import nodemailer from 'nodemailer'
import config from './config.js'

export async function sendWelcomeMessage(email) {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: config.host, // 'smtp.ethereal.email',
    port: config.port, // 587, // 465 crypted,
    secure: config.port === 465, // false, // no SSL (no 465)
    auth: {
      user: config.user, // testAccount.user,
      pass: config.password, // testAccount.pass,
    },
  })

  const info = await transporter.sendMail({
    from: 'Milosz z mbIT <mil.bukala@gmail.com>',
    to: email,
    subject: 'Subscription confirmation',
    text: 'Hi! Thank you for subscribing to the mailing list',
    html: 'Hi! <br>Thank you for subscribing to the <b>mailing list</b>',
  })

  console.log('welcome message send to ', email)
  console.log('preview -> ', nodemailer.getTestMessageUrl(info))
}
