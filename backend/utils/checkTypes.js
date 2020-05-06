const typeCheck = require('type-check').typeCheck;
module.exports = (tab) => {
  for (let elem of tab) {
    if (!typeCheck(elem[0], elem[1]))
      throw { status: 400, code: 'Bad parameter type' }
  }
}