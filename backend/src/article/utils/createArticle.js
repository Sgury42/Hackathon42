module.exports = async ({ title, body, myId, published, img, tags }) => {
  const { Article, Tag } = mongoose.models
  const article = new Article({
    title,
    body,
    user: myId,
    published,
    img,
    publishedAt: published ? new Date().toISOString() : null
  })

  for(let i in tags) {
    const tag = await Tag.findOne({ label: tags[i] })
    if (!tag)
      throw { status: 404, code: 'Tag not found' }
    article.tags.push(tag._id)
  }

  article.save()

  return article
}