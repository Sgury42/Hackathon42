const publicRouter = require('express').Router()
const adminRouter = require('express').Router()
const respond = require(base + '/utils/respond')
const getArticles = require('./utils/getArticles')
const getArticle = require('./utils/getArticle')
const createArticle = require('./utils/createArticle')
const updateArticle = require('./utils/updateArticle')
const deleteArticle = require('./utils/deleteArticle')

// get list
publicRouter.get('/articles', async (req, res) => {
  respond(req, res, getArticles)
})

// get one
publicRouter.get('/article', async (req, res) => {
  respond(req, res, getArticle)
})

// post
adminRouter.post('/article', async (req, res) => {
  respond(req, res, createArticle)
})

// update
adminRouter.put('/article', async (req, res) => {
  respond(req, res, updateArticle)
})

adminRouter.delete('/article', async (req, res) => {
  respond(req, res, deleteArticle)
})

module.exports = {
  adminRouter,
  publicRouter
}