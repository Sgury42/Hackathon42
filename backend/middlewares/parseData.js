// parseData parse all data if body and query and respond an error if there is an error during parsing

module.exports = (req, res, next) => {
  const SHOULD_BE_INTEGER = ['limit']
  req.data = {
    ...req.data,
    ...req.query,
    ...req.body
  }
  for (let parameter of Object.keys(req.data)) {
    // parsing int, float, boolean
    if (req.data[parameter] === 'true')
      req.data[parameter] = true
    if (req.data[parameter] === 'false')
      req.data[parameter] = false
    // if (!isNaN(req.data[parameter]) && req.data[parameter].toString().indexOf('.') != -1) {
    //   req.data[parameter] = parseInt(req.data[parameter])
    // } else if (!isNaN(req.data[parameter])) {
    //   req.data[parameter] = parseInt(req.data[parameter])
    // }

    // check int values and Ids
    if (SHOULD_BE_INTEGER.includes(parameter)) {
      req.data[parameter] = parseInt(req.data[parameter])
      if (isNaN(req.data[parameter]))
        return res.status(400).json(`${parameter} should be an integer`.toUpperCase())
    }
    if (parameter.includes('Id') || parameter === 'id') {
      if (!mongoose.Types.ObjectId.isValid(req.data[parameter])) {
        return res.status(400).json(`${parameter} should be an ObjectId`.toUpperCase())
      }
    }
  }
  next()
}