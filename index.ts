import dotenv from 'dotenv'
import app from './src/app'
import { init } from './src/common/components/db'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000
const dbUri = process.env.MONGODB_URI || ''

async function startUp() {
  await init(dbUri)

  app.listen(port, () => {
    console.log(`[Express]: Application is listening on port ${port}!`)
  })
}

startUp().catch(console.error)
