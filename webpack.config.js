var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

//Deps
var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'react-bootstrap/dist/react-bootstrap.min.js',
    'moment/min/moment.min.js'
];

var config = {
  entry: {
      app: path.resolve(__dirname, 'public/app/app.js'),
      vendors: ['react', 'react-router', 'react-bootstrap', 'moment']
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'app.js'
  },
  resolve:{
      alias:{}
  },
  module: {
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
    noParse: []
},
plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

deps.forEach(function(dep){
    var depPath = path.resolve(node_modules, dep);

    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
