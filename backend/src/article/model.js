const Joi = require('@hapi/joi')
const { articleJoiSchema } = require('../../../validation')
const { Schema } = mongoose
const URLSlugs = require('mongoose-url-slugs')
// const { composeWithMongoose } = require('graphql-compose-mongoose')

const articleSchema = Schema({
  title: { type: String, required: true },
  img: { type: String, default: '' },
  body: { type: String, required: true },
  published: { type: Boolean, default: false },
  publishedAt: { type: Date },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})
articleSchema.plugin(URLSlugs('title', { field: 'slug', update: true }))

// validation
articleSchema.methods.joiValidate = function() {
  const article = this.toObject()
  const res = Joi.object(articleJoiSchema).validate(article, { allowUnknown: true })
  if (res.error)
    throw { status: 400, code: 'INVALID_DATAS', details: res.error.details }
}

// middlewares
articleSchema.pre('save', function (next) {
  this.joiValidate()
  next()
})

module.exports = mongoose.model('Article', articleSchema)