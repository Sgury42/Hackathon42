const publicRouter = require('express').Router()
const privateRouter = require('express').Router()
const createUser = require('./utils/createUser')
const getUser = require('./utils/getUser')
const generateToken = require('./utils/generateToken')
const respond = require(base + '/utils/respond')


// create
publicRouter.post('/user', async (req, res) => {
  respond(req, res, createUser)
})

// get token
publicRouter.get('/user/token', async (req, res) => {
  respond(req, res, generateToken)
})

// get token
privateRouter.get('/user/current', async (req, res) => {
  respond(req, res, async (data) => await getUser({ ...data, userId: data.myId }))
})

module.exports = {
  privateRouter,
  publicRouter
}