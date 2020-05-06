const checkRight = require(`../../user/utils/checkRight`)

module.exports = async ({ articleId, myId, slug }) => {
  // validation
  if (!articleId && !slug)
    throw { status: 400, code: 'INCOMPLETE_DATAS' }
  
  const where = {}
  if (articleId) where._id = articleId
  if (slug) where.slug = slug

  const { Article } = mongoose.models
  const article = await Article.findOne(where)
  .populate('user')
  .populate('tags')
  .exec()

  if (!article)
    throw { status: 404, code: 'ARTICLE_NOT_FOUND' }
  if (!article.published)
    await checkRight(myId)
  return article
}