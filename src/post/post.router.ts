import { Router } from 'express'
import { NamedRouter } from '../common/types/tuples'

const router = Router()

export const PostRouter: NamedRouter = ['/post', router]
