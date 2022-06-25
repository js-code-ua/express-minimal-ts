import dotenv from 'dotenv'
// initialize configuration
dotenv.config()

import app from './src/app'
import { init, logger } from './src/common/components'

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000
const dbUri = process.env.MONGODB_URI || ''

async function startUp() {
  await init(dbUri)

  app.listen(port, () => {
    logger.info(`[Express]: Application is listening on port ${port}!`)
  })
}

startUp().catch(logger.error)
