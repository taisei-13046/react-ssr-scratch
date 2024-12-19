import type { Hono } from 'hono'

export const routes = (app: Hono) => {
  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })
}
