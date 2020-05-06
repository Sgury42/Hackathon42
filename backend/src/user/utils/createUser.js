module.exports = async ({ firstName, lastName, email, username }) => {
  const { User } = mongoose.models
  try {
    const user = await User.create({
      username,
      firstName,
      lastName,
      email
    })
    return user
  } catch (e) {
    throw { status: 400, code: 'INVALID_DATAS', ...e }
  }
}