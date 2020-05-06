module.exports = async ({ firstname, lastname, email, tags, city, description, password }) => {
  const { User } = mongoose.models
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      tags,
      description,
      city,
      password
    })
    return user
  } catch (e) {
    throw { status: 400, code: 'INVALID_DATAS', ...e }
  }
}