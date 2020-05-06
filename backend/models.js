module.exports = () => {
  const modelPaths = [
    'user',
    'article',
  ]
  for (let path of modelPaths) {
    require(`./src/${path}/model`)
  }
}