module.exports = async ({ articleId, title, body, published, myId }) => {
  const { Article } = mongoose.models

  const article = await Article.findOne({ _id: articleId })
  if (!article)
    throw { status: 404, code: 'ARTICLE_NOT_FOUND' }
    
  await article.remove()
  return article
}