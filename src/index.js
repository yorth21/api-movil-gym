import app from './app.js'
import http from 'http'
import 'dotenv/config'
import { sequelize } from './data/postgres/connection.js'

import './data/postgres/models/user.model.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, async () => {
  try {
    // await sequelize.sync({ force: false })
    await sequelize.authenticate()
    console.log(`Server escuchando en el puerto: ${PORT}`)
  } catch (error) {
    console.error('No se pudo conectar con la base de datos:', error)
  }
})
