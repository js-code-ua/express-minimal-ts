import { User } from './types/interfaces'

export default class UserService {
  private readonly users: User[] = []

  create(user: User) {
    this.users.push(user)
  }

  getAll() {
    return this.users
  }
}

export const userService = new UserService()
