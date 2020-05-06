module.exports = async ({ tagId }) => {
  const { Tag } = mongoose.models

  const tag = await Tag.findOne({ _id: tagId })
  if (!tag)
    throw { status: 404, code: 'tag_NOT_FOUND' }

  await tag.remove()
  return tag
}