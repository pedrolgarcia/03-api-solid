import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some descripition',
        phone: '11999999999',
        latitude: -22.8744843,
        longitude: -43.3004858,
      })

    expect(response.statusCode).toEqual(201)
  })
})
