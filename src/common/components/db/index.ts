import mongoose from 'mongoose'
import { logger } from '../logger'

export async function init(uri: string) {
  await mongoose.connect(uri)
  logger.info('[Mongoose]: db connected')
}
