const fs = require('fs')

const getFilesOfPath = src => {
  return fs.readdirSync(src)
}

module.exports = getFilesOfPath