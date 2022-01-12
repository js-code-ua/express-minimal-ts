import { UserGenderEnum, UserRoleEnum } from '../enums'

export interface User {
  id: string
  firstName: string
  lastName: string
  gender: UserGenderEnum
  role: UserRoleEnum
}
