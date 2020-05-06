module.exports = async (req, res, fn) => {
  try {
    const result = await fn(req.data, req)
    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    if (e.status)
      res.status(e.status).json(e.code)
    else
      res.status(400).json('Unhandled error')
  }
}