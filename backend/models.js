module.exports = () => {
  const modelPaths = [
    'user',
    'tag',
  ]
  for (let path of modelPaths) {
    require(`./src/${path}/model`)
  }
}