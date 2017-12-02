const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

//init app
const app = express();

const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);


//using webpack middleware for serving files on the fly
app.use(webpackMiddleWare(compiler,{
    publicPath: webpackConfig.output.publicPath
}));

//this is for hot reloading
app.use(require('webpack-hot-middleware')(compiler)); 

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'src','index.html'));
})

app.listen(3000,(err)=>{
    if(err)
        return err;
    console.log("server running at port 3000");
})