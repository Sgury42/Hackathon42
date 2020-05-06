const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = async ({ userId }) => {
  const { User } = mongoose.models
  const user = await User.findOne({ _id: userId })
  if (!user)
    throw { status: 404, code: 'USER_NOT_FOUND' }
  return user
}