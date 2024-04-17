import http from 'http'
import 'dotenv/config'
import { sequelize } from './data/postgres/connection.js'
import app from './app.js'

import './data/postgres/models/user.model.js'
import './data/postgres/models/physicalInfo.model.js'
import './data/postgres/models/regDiary.model.js'
import './data/postgres/models/catExcercise.model.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false })
    console.log(`Server escuchando en el puerto: ${PORT}`)
  } catch (error) {
    console.error('No se pudo conectar con la base de datos:', error)
  }
})
