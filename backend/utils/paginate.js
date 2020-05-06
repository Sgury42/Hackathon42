module.exports = (page, limit = 10) => {
  return {
    limit: limit,
    skip: limit * (page - 1),
  }
}