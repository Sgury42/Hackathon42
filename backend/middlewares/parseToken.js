const jwt = require('jsonwebtoken')
const config = require(`../config`)

module.exports = (req, res, next) => {
  let token = req.cookies.Authorization || req.headers.authorization
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (!err)
        req.userId = decoded.data.userId
    })
  }
  // inject currentUserId in body and query
  req.data = { ...req.data, myId: req.userId }
  next()
}