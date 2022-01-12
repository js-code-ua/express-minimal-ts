import express from 'express'
import routes from './routes'

const app = express()

// common middlewares
app.use(express.json())

// map routers
routes.map(([name, router]) => {
  app.use(name, router)
})

export default app
