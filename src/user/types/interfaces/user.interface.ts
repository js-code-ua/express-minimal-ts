import { UserGenderEnum, UserRoleEnum } from '../enums'

export interface User {
  email: string
  password: string
  firstName: string
  lastName: string
  gender: UserGenderEnum
  role: UserRoleEnum
}
