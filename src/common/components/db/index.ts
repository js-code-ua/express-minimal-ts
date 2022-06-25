import mongoose from 'mongoose'

export async function init(uri: string) {
  await mongoose.connect(uri)
  console.log('[Mongoose]: db connected')
}
