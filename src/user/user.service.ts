import { User } from './types/interfaces'
import { userRepository } from './user.repository'

export default class UserService {
  create(user: User) {
    return userRepository.create(user)
  }

  async getAll() {
    return (await userRepository.findAll()).map((x) => x.toJSON)
  }
}

export const userService = new UserService()
