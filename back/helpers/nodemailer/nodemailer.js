const nodemailer = require('nodemailer')
const message = require('./spreadsheet')
require('colors')

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  },
  tls: { rejectUnauthorized: false }
}

const mailOptions = (email, name) => ({
  from: transport.auth.user,
  to: email,
  subject: `Te Damos la bienvenida a Green trace ${name}`,
  html: message
})

const sendingMail = async (email, name) => {
  try {
    const transporter = nodemailer.createTransport(transport)
    const info = await transporter.sendMail(mailOptions(email, name))
    console.log('Correo electrónico enviado:', info.response.green)
  }
  catch (err) {
    console.log('ERROR!'.red, err.message.red)
  }
}

module.exports = sendingMail
