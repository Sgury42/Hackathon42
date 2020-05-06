module.exports = async ({ articleId, title, body, published, img, myId, tags }) => {
  const { Article, Tag } = mongoose.models

  const article = await Article.findOne({ _id: articleId })
  if (!article)
    throw { status: 404, code: 'ARTICLE_NOT_FOUND' }
    
  // update fields
  if (published && published !== article.published)
    article.publishedAt = new Date().toISOString()
  article.title = title
  article.img = img
  article.published = published
  article.body = body
  let newTags = []
  for(let i in tags) {
    const tag = await Tag.findOne({ label: tags[i] })
    if (!tag)
      throw { status: 404, code: 'TAG_NOT_FOUND' }
    newTags.push(tag._id)
  }
  article.tags = newTags
  
  await article.save()
  return article
}