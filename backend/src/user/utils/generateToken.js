const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require(`${base}/config`)

module.exports = async ({ username, email, password }) => {
  const { User } = mongoose.models

  // check
  if ((!username && !email) || !password)
    throw { status: 400, code: 'INCOMPLETE_DATAS' }

  // get user
  const user = await User.findOne({ username })
  if (!user)
    throw { status: 404, code: 'USER_NOT_FOUND' }

  // check password
  const match = await bcrypt.compare(password, user.password)
  if (match === false)
    throw { status: 403, code: 'BAD_PASSWORD' }

  // generate token
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: { userId: user._id }
  }, config.secret)
  return token
}