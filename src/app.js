import express, { json } from 'express'

const app = express()

app.disable('x-powered-by')
app.use(json())

export default app
