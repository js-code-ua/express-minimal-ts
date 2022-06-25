import { Router } from 'express'
import { NamedRouter } from '../common/types/tuples'
import { userService } from './user.service'

const router = Router()

router.get('/list', async (req, res) => {
  const list = await userService.getAll()
  res.send(list)
})

export const UserRouter: NamedRouter = ['/user', router]
