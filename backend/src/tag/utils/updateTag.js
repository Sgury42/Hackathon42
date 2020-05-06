module.exports = async ({ label, color, tagId }) => {
  const { Tag } = mongoose.models
  const tag = await Tag.findOne({ _id: tagId })
  if (!tag)
    throw { status: 404, code: 'TAG_NOT_FOUND' }
  tag.label = label
  tag.color = color
  await tag.save()
  return tag
}