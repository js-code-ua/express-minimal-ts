import { User } from './types/interfaces'
import { UserModel } from './models'

class UserRepository {
  create(data: User) {
    const user = UserModel.build(data)
    return user.save()
  }

  findAll() {
    return UserModel.find({}).exec()
  }
}

export const userRepository = new UserRepository()
