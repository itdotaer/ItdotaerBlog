var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: {
      app: path.resolve(__dirname, 'public/app/app.js');
      vendors: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'app.js'
  },
  modules: {
    loaders:[
        {
            test: /\.jsx?$/, // js or jsx files
            exclude: [node_modules],
            loader: 'babel' // load babel-loader module
        },
        {
          test: /\.css$/, // Only .css files
          loader: 'style!css' // Run both loaders
        }
    ],
    noParse: [pathToReact]
},
plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;
