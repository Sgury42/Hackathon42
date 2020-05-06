const config = require('../config')
const createAdmin = require('./createAdmin')
const initModels = require('../models')

module.exports = async ({ sync }) => {
  initModels()
  try {
    // connect to db
    mongoose.set('debug', true);
    await mongoose.connect(`mongodb://${config.dbUsername}:${config.dbPassword}@${config.dbHost}:27017/${config.dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Connected to Database')
    if (sync)
      await mongoose.connection.db.dropDatabase()
    // await createAdmin()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}