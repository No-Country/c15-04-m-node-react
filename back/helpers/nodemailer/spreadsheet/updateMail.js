const updateMail = (name, token, url) => ({
  title: `Hola ${name}, este paso es necesario para actualizar tu E-mail`,
  body:
    `<body style="width: 100vw; height: 100vh; background-color: aqua;">
  <a href="${url}/${token}" style="display: inline-block; padding: 10px; background-color: #4CAF50; color: #fff; text-decoration: none;">Ir a la página</a>
    <p style="color: #fff;">Esta es una prueba update</p>
   </body>`
})

module.exports = updateMail