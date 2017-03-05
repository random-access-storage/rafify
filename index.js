var raf = require('random-access-file')

module.exports = function (store) {
  return typeof store === 'string' ? raf(store) : store
}
