import dotenv from 'dotenv'
import app from './src/app'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`)
})
