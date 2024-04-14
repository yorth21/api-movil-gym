import express, { json } from 'express'
import { Routes } from './routes/index.js'

const app = express()

app.disable('x-powered-by')
app.use(json())

app.use('/api', Routes)

export default app
