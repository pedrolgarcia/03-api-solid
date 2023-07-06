import { FastifyInstance } from 'fastify'

import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { refresh } from './refresh'

import { verifyJWT } from '../../middlewares/verify-jwt'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)
  app.post('/users', register)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
