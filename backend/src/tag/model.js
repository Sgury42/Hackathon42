const Joi = require('@hapi/joi')
const { tagJoiSchema } = require('../../../validation')
const { Schema } = mongoose

const tagSchema = Schema({
  label: { type: String, required: true },
  color: { type: String, required: true },
  articles: [{ type: mongoose.Schema.ObjectId, ref: 'Article' }]
}, {
  timestamps: true
})

// validation
tagSchema.methods.joiValidate = function() {
  const tag = this.toObject()
  const res = Joi.object(tagJoiSchema).validate(tag, { allowUnknown: true })
  if (res.error)
    throw { status: 400, code: 'INVALID_DATAS', details: res.error.details }
}

// middlewares
tagSchema.pre('save', function (next) {
  this.joiValidate()
  next()
})


module.exports = mongoose.model('Tag', tagSchema)