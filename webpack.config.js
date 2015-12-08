var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

//Config
var appInfo = require('./config').appInfo;

//Deps
var deps = [
    'react/dist/react.min.js',
    'react-dom/dist/react-dom.min.js',
    'react-router/dist/react-router.min.js',
    'react-bootstrap/dist/react-bootstrap.min.js',
    'moment/min/moment.min.js'
];

var config = {
  entry: {
      app: path.resolve(__dirname, 'public/app/app.js'),
      vendors: ['react', 'react-dom', 'react-router', 'react-bootstrap', 'moment']
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: appInfo.buildDev ? '[name].js' : '[name]-[hash].js',
    chunkFileName: appInfo.buildDev ? '[name].js' : '[name]-[chunkhash].js'
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
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'less?sourceMap'
                )
        }

    ],
    noParse: []
},
plugins: [
    //vendors
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: appInfo.buildDev ? '[name].js' : '[name]-[hash].js',
      minChunks: Infinity
    }),

    //Css files
     new ExtractTextPlugin(appInfo.buildDev ? '[name].css' : '[name]-[hash].css', {allChunks: true})
  ]
};

//No parse libs
deps.forEach(function(dep){
    var depPath = path.resolve(node_modules, dep);

    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;
