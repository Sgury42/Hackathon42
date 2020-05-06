const Joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const { userJoiSchema } = require('../../../validation')
const { Schema } = mongoose

const userSchema = Schema({
  email: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  role: { type: String, default: 'user' }
}, {
  timestamps: true
})

// validation
userSchema.methods.joiValidate = function() {
  const user = this.toObject()
  const res = Joi.object(userJoiSchema).validate(user, { allowUnknown: true })
  if (res.error)
    throw { status: 400, code: 'Invalid ', details: res.error.details }
}

// middlewares
userSchema.pre('save', async function (next) {
  this.joiValidate()
  if (!this.isModified('password'))
    return next()
  this.password = await bcrypt.hash(this.password, 8)
  return next()
})

module.exports = mongoose.model('User', userSchema)