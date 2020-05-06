module.exports = async () => {
  const { Tag } = mongoose.models
  const tags = await Tag.create([
    { label: 'Summer Body', color: 'red' },
    { label: 'ReactJs', color: 'red' },
    { label: 'Javascript', color: 'red' },
    { label: 'C', color: 'red' },
    { label: 'C++', color: 'red' },
  ])
}