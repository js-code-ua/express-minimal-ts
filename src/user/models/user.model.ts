import mongoose from 'mongoose'
import { User } from '../types/interfaces'
import { UserGenderEnum, UserRoleEnum } from '../types/enums'
import { PasswordService } from '../../auth/services'

interface UserDoc extends User, mongoose.Document {}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: User): UserDoc
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      enum: Object.values(UserGenderEnum),
    },
    role: { type: String, required: true, enum: Object.values(UserRoleEnum) },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      },
    },
  }
)

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordService.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

userSchema.statics.build = (attrs: User) => {
  return new UserModel(attrs)
}

const UserModel = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { UserModel }
