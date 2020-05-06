const checkRight = require(`${base}/src/user/utils/checkRight`)
const paginate = require(`${base}/utils/paginate`)
const checkTypes = require(`${base}/utils/checkTypes`)

module.exports = async ({ page, sort, published, myId, limit: userLimit, tag }) => {
  const { Article, Tag } = mongoose.models
  checkTypes([
    ['Boolean | Undefined', published],
    // ['String | Undefined', tag],
  ])

  // where clause
  const where = {}
  // publushed
  if (published !== undefined) where.published = published
  if (where.published !== true) await checkRight(myId)
  // tag
  if (tag) tag = await Tag.findOne({ label: tag })
  if (tag) where.tags = tag._id
  
  // sort
  sort = [['publishedAt', -1], ['createdAt', -1]]
  // if (['views'].indexOf(sort) >= 0)
  //   sort = { views: -1 }

  // validation
  if (!page) page = '1'

  // req
  let { limit, skip } = paginate(page, userLimit)
  const [articles, count] = await Promise.all([
    Article.find(where)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .populate('user')
    .populate('tags')
    .exec(),
    Article.countDocuments(where)
  ])

  return {
    data: articles,
    pages: Math.ceil(count / limit),
    page,
    count
  }
}