const chalk = require('chalk')

module.exports = (req, res, next) => {
  const user = req.userId ? req.userId : 'anonymous'
  if (req.originalUrl.includes('/api/'))
    console.log(chalk.magentaBright.bold(`[user: ${user}] ${req.method} ${req.originalUrl}`))
  next()
}