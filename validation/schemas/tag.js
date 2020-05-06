const Joi = require('@hapi/joi')

module.exports = {
  label: Joi.string().max(100).min(1).required(),
  color: Joi.string().max(12).min(1).required(),
}