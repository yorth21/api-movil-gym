import express, { json } from 'express'
import http from 'http'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)

app.disable('x-powered-by')
app.use(json())

server.listen(PORT, async () => {
  console.log(`Server escuchando en el puerto: ${PORT}`)
})