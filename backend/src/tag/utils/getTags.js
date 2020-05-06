module.exports = async () => {
  const { Tag } = mongoose.models
  // req
  const tags = await Tag.find({}, null, {
    sort: '-createdAt',
  })
  return {
    data: tags,
    count: tags.length
  }
}