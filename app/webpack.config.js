var path = require('path');

var config = {
  entry: [path.resolve(__dirname, './app.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  modules: {
    loaders:[]
  }
};

module.exports = config;
