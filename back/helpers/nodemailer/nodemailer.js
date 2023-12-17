require('colors')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const {
  newsletter,
  updateMail,
  welcome
} = require('./spreadsheet')


const transport = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    redirectUri: process.env.REDIRECT_URI
  },
  tls: { rejectUnauthorized: false }
}

const mailOptions = (email, name, type, token) => {
  let message = ''
  const url = process.env.EMAIL_PATH

  switch (type) {
    case 'newsletter':
      message = newsletter(name)
      break
    case 'update':
      message = updateMail(name, token, url)
      break
    case 'welcome':
      message = welcome(name, token, url)
      break
  }

  return {
    from: transport.auth.user,
    to: email,
    subject: message.title,
    html: message.body
  }
}

const getUpdatedAccessToken = async () => {
  const oAuth2Client = new google.auth.OAuth2(
    transport.auth.clientId,
    transport.auth.clientSecret,
    transport.auth.redirectUri
  )
  oAuth2Client.setCredentials({
    refresh_token: transport.auth.refreshToken,
  })
  try {
    const { token } = await oAuth2Client.refreshAccessToken()
    return token
  } catch (error) {
    console.error('Error al obtener el nuevo token de acceso:'.red, error.message)
    throw error
  }
}

const sendingMail = async (email, name, type, token = '') => {
  try {
    const state = '2.0.0 OK'
    const transporter = nodemailer.createTransport(transport)
    const accessToken = await getUpdatedAccessToken()
    transport.auth.accessToken = accessToken
    const info = await transporter.sendMail(mailOptions(email, name, type, token))
    if (info.accepted.length > 0 && info.response.includes(state))
      return true
    else return info.rejected
  }
  catch (err) {
    console.log('ERROR!'.red, err.message.red)
  }
}

module.exports = sendingMail
