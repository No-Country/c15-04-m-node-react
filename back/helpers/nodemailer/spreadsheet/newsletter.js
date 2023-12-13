const newsletter = name => ({
  title: `Gracias por suscribirte ${name}!`,
  body:
    `<body style="width: 100vw; height: 100vh; background-color: aqua;">
  <a href="https://green-trace-cc1qtnh52-blacksamuelbellamy.vercel.app/" style="display: inline-block; padding: 10px; background-color: #4CAF50; color: #fff; text-decoration: none;">Ir a la página</a>
    <p style="color: #fff;">Esta es una prueba newsletter</p>
   </body>`
})

module.exports = newsletter