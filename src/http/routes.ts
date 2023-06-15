import { FastifyInstance } from 'fastify'

import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)
  app.post('/users', register)
}
