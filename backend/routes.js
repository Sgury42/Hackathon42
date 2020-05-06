const express = require('express')
const adminRoutes = express.Router()
const privateRoutes = express.Router()
const publicRoutes = express.Router()
const router = express.Router()

// check access
adminRoutes.use(async (req, res, next) => {
  const { User } = mongoose.models
  if (!req.userId)
    res.status(401).json('Bad access token')
  const user = await User.findOne({ _id: req.userId })
  if (user.role !== 'admin')
    res.status(403).json('Unauthorized admin route')
  else
    next()
})

privateRoutes.use((req, res, next) => {
  if (!req.userId)
    res.status(401).json('Bad access token')
  else
    next()
})

const routePaths = [
  'article',
  'user',
]

for (let path of routePaths) {
  const { adminRouter, privateRouter, publicRouter } = require(`./src/${path}/routes`)
  if (adminRouter)
    adminRoutes.use('/', adminRouter)
  if (privateRouter)
    privateRoutes.use('/', privateRouter)
  if (publicRouter)
    publicRoutes.use('/', publicRouter)
}

router.use('/', publicRoutes)
router.use('/', privateRoutes)
router.use('/', adminRoutes)

module.exports = router
