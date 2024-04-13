import app from './app.js'
import http from 'http'
import 'dotenv/config'
import { sequelize } from './database/database.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexión establecida con la base de datos')
    console.log(`Server escuchando en el puerto: ${PORT}`)
  } catch (error) {
    console.error('No se pudo conectar con la base de datos:', error)
  }
})
