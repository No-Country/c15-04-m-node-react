const { request, response } = require('express')
const Newsletter = require('../models/newsletter')
require('colors')

const newsletterPost = async (req = request, res = response) => {
  const { nombre, correo } = req.body
  try {
    const news = await Newsletter.findOne({ correo })
    if (news) return res.status(400).json({
      message: `${nombre} este Correo ya está suscrito`
    })
    const newsletter = new Newsletter({ nombre, correo })
    await newsletter.save()

    res.status(201).json({
      message: `Te hemos suscrito satisfactoriamente ${newsletter.nombre}. Muchas gracias`,
      newsletter
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