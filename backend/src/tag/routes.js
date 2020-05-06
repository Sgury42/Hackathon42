const publicRouter = require('express').Router()
const adminRouter = require('express').Router()
const respond = require(base + '/utils/respond')
const getTags = require('./utils/getTags')
const createTag = require('./utils/createTag')
const updateTag = require('./utils/updateTag')
const deleteTag = require('./utils/deleteTag')

// get list
publicRouter.get('/tags', async (req, res) => {
  respond(req, res, getTags)
})

// post
adminRouter.post('/tag', async (req, res) => {
  respond(req, res, createTag)
})

// update
adminRouter.put('/tag', async (req, res) => {
  respond(req, res, updateTag)
})

adminRouter.delete('/tag', async (req, res) => {
  respond(req, res, deleteTag)
})

module.exports = {
  adminRouter,
  publicRouter
}