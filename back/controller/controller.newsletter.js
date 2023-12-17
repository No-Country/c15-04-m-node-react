const { request, response } = require('express')
const { Newsletter } = require('../models')
const sendingMail = require('../helpers/nodemailer/nodemailer')
require('colors')

const newsletterPost = async (req = request, res = response) => {

  const { nombre, correo } = req.body
  try {
    const noNew = await Newsletter.findOne({ correo })
    if (noNew) return res.status(400).json({
      message: `${nombre} este Correo ya está suscrito`
    })
    const newsletter = new Newsletter({ nombre, correo })
    await newsletter.save()
    const mail = await sendingMail(correo, nombre, 'newsletter')
    if (mail) return res.status(201).json({
      message: `Te hemos suscrito satisfactoriamente ${nombre}. Muchas gracias`,
      newsletter
    })
    else return res.status(500).json({
      message: `${nombre} hubo un problema al enviarte nuestro boletín, favor intenta más tarde`
    })
  } catch (e) {
    console.log('ERROR!'.red, e.message, e)
    res.status(500).json({
      message: `No fué posible suscribirte ${nombre}, intenta en un momento otra vez.`,
      error: e.message
    })
  }
}

module.exports = newsletterPost