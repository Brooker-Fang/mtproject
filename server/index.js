//index.js
// 启动文件
import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import index from './routes/index'
import users from './routes/users'
import menu from './routes/menu'
import city from './routes/city'
import recreation from './routes/recreation'
async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
// error handler
  onerror(app)

// middlewares
  app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
  }))
  app.use(json())
  app.use(logger())
  app.use(require('koa-static')(__dirname + '/public'))
  // routes
  //app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())
  app.use(menu.routes(), menu.allowedMethods())
  app.use(city.routes(), city.allowedMethods())
  //app.use(recreation.routes(), recreation.allowedMethods())
// error-handling
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });
  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()


