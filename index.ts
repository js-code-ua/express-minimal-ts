import dotenv from 'dotenv'
import express from 'express'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.send('Well done!')
})

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`)
})
