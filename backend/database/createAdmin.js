module.exports = async () => {
  const { User } = mongoose.models
  let user = await User.findOne({ username: 'admin' })
  console.log(user)
  if (!user) {
    await User.create({
      username: 'admin',
      firstname: 'Admin',
      lastname: 'Admin',
      password: 'admin',
      email: 'admin@admin.fr',
      role: 'admin',
    })
  }
}