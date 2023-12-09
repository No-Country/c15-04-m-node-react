const nodemailer = require('nodemailer')
const message = require('./spreadsheet')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
require('colors')

const transportSettings = {
  service: "gmail",
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
  from: process.env.EMAIL,
  to: email,
  subject: `Te Damos la bienvenida a Green trace ${name}`,
  html: message
})

const sendingMail = async (email, name) => {
  try {
    const oauth2Client = new OAuth2(
      transportSettings.auth.clientId,
      transportSettings.auth.clientSecret,
      "https://developers.google.com/oauthplayground"
    )
    oauth2Client.setCredentials({
      refresh_token: transportSettings.auth.refreshToken
    })
    const token = await oauth2Client.getAccessToken()
    transportSettings.auth.getAccessToken = token
    const transporter = nodemailer.createTransport(transportSettings)
    const info = await transporter.sendMail(mailOptions(email, name))
    console.log('Correo electrónico enviado:', info.response.green)
  }
  catch (err) {
    console.log('ERROR!'.red, err.message.red)
  }
}

module.exports = sendingMail
