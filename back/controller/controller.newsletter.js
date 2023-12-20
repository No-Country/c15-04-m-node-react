const { request, response } = require('express')
const { Newsletter } = require('../models')
const sendingMail = require('../helpers/nodemailer/nodemailer')
require('colors')

const newsletterPost = async (req = request, res = response) => {

  const { correo } = req.body
  try {
    const noNew = await Newsletter.findOne({ correo })
    if (noNew) return res.status(400).json({
      message: `este Correo ya está suscrito`
    })
    const mail = await sendingMail(correo, 'newsletter')
    if (mail) {
      const newsletter = new Newsletter({ correo })
      await newsletter.save()
      return res.status(201).json({
        message: `Te hemos suscrito satisfactoriamente. Muchas gracias`,
        newsletter
      })
    }
    else return res.status(500).json({
      message: `Hubo un problema al enviarte nuestro boletín, favor intenta más tarde`
    })
  } catch (e) {
    console.log('ERROR!'.red, e.message, e)
    res.status(500).json({
      message: `No fué posible suscribirte, intenta en un momento otra vez.`,
      error: e.message
    })
  }
}

module.exports = newsletterPost