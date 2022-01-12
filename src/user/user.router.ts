import { Router } from 'express'
import { NamedRouter } from '../common/types/tuples'
import { userService } from './user.service'

const router = Router()

router.get('/list', (req, res) => {
  res.send(userService.getAll())
})

export const UserRouter: NamedRouter = ['/user', router]
