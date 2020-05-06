const Joi = require('@hapi/joi')

module.exports = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  firstname: Joi.string().max(30).min(1).required(),
  lastname: Joi.string().max(30).min(1).required(),
  description: Joi.string().max(5000).min(1).required(),
  city: Joi.string().max(30).min(1).required(),
  role: Joi.string().valid('admin', 'user').required()
}