module.exports = async () => {
  const { User } = mongoose.models
  let user = await User.findOne({ username: 'admin' })
  console.log(user)
  if (!user) {
    await User.create({
      email: 'admin@admin.fr',
      firstname: 'Admin',
      lastname: 'Admin',
      description: 'Looking for awesome mates',
      password: 'admin',
      city: 'Paris',
      role: 'admin',
    })
  }
}