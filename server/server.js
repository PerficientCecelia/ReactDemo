const express = require('express');
const webpack = require('webpack');


const app = express();

//in dev env, we need dev/hot middleware 
if (process.env.NODE_ENV === 'development') {
const webpackDevMiddleware = require('webpack-dev-middleware');
    //const config = require('../config/webpack.config.prod.js');
const config = require('../webpack.dev.config.js');
const compiler = webpack(config);

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(hotMiddleware);

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
      })
  })
}

// Serve the files on port 8800.
app.listen(8800, function () {
  console.log('Example app listening on port 8800!\n');
});

//router test
app.get('/flowdirector',async (req, res, next)=>{
  console.log("get test"); 
});