const fs = require('fs');

const setStore = (src) => {
  fs.writeFileSync( './store.json', JSON.stringify(require(src)) );
}

module.exports = setStore