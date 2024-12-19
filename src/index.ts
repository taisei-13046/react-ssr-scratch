import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { routes } from './routes'

const app = new Hono()

routes(app)

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
