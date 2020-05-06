const Joi = require('@hapi/joi')

module.exports = {
  title: Joi.string().max(100).min(1).required(),
  body: Joi.string().max(30000).min(1).required(),
  img: Joi.string().max(3000).allow('').required()
}