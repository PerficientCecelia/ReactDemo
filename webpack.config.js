
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
ReactTester={
	entry:{
		index:'./index.js'
	},
	output:{
		path: path.resolve(__dirname,'./dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
	},
	module:{		
		rules:[
		
		    {
			  test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
			}
		]
	},
	plugins:[
	    new HtmlWebpackPlugin({
            filename: 'index.html',
            template:  './index.ejs',
			chunks:['index'],
            inject: true
        }),
		new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()	
	]	
}

module.exports = ReactTester

