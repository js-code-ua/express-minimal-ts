import { NamedRouter } from './common/types/tuples'
import { UserRouter } from './user/user.router'
import { PostRouter } from './post/post.router'

const routes: NamedRouter[] = [UserRouter, PostRouter]

export default routes
