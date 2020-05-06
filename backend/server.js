const express = require('express')
const next = require('next')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
global.base = __dirname
global.mongoose = mongoose
const { printRoute, parseToken, parseData } = require(`./middlewares`)
const config = require(`./config`)
const connectDatabase = require(`./database/connectDatabase`)
const routes = require(`./routes`)

const server = async () => {
  // db
  await connectDatabase({ sync: false })
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev, dir: './frontend' })
  const app = express()
  const handle = nextApp.getRequestHandler()
  //const server = http.createServer(app)
  
  // middlewares
  app.set('trust proxy', true)
  app.use(cors())
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(parseData)
  app.use(parseToken)
  app.use(printRoute)

  // routes
  app.use('/api', routes)
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
  })
  
  await nextApp.prepare()
  // next app
  app.get('*', (req, res) => {
    handle(req, res)
  })
}

server()