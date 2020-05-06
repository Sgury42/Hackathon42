module.exports = async (userId) => {
  if (!userId)
    throw { status: 403, code: 'Unauthorized' }

  const { User } = mongoose.models
  const user = await User.findOne({ _id: userId })
  if (!user || user.role !== 'admin')
    throw { status: 403, code: 'Unauthorized' }
}