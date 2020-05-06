const Joi = require('@hapi/joi')

module.exports = {
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  firstname: Joi.string().min(1).max(30).required(),
  lastname: Joi.string().min(1).max(30).required(),
  phone: Joi.string().min(10).required(),
  subject: Joi.string().min(1).max(50).required(),
  body: Joi.string().max(3000).allow('').required()
}