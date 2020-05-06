const Joi = require('@hapi/joi')

module.exports = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  firstname: Joi.string().max(30).min(1).required(),
  lastname: Joi.string().max(30).min(1).required(),
  username: Joi.string().max(30).min(1).required(),
  role: Joi.string().valid('admin', 'user').required()
}