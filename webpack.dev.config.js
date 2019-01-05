var webpack = require('webpack');
var isDevelopment = process.env.NODE_ENV === 'development';
var config =require("./webpack.config");

config.output.publicPath = '/';
config.devtool='inline-source-map';
config.mode='development';

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        __DEVELOPMENT__: isDevelopment
    })
]); 

var hotMiddleWareClientPath='./dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [hotMiddleWareClientPath]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports= config;