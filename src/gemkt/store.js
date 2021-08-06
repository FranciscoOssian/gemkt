const fs = require('fs');

const setStore = (config) => {
  fs.writeFileSync( './store.json', JSON.stringify(config) );
}

module.exports = setStore