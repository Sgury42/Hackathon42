module.exports = async ({ label, color }) => {
  const { Tag } = mongoose.models
  const tag = await Tag.create({
    label,
    color
  })
  return tag
}