const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname,'build/client');
const ENTRY_DIR = ['./src/app/app.js'];

const DEV_ENTRY = ENTRY_DIR.concat(['webpack-hot-middleware/client']);

let webpackConfig = {
    entry: {
        // the app key caused the file name to output as app.js in output:[name]
        app: DEV_ENTRY
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins:[
         new webpack.HotModuleReplacementPlugin(),
         new webpack.ProvidePlugin({
             $: 'jquery',
             jQuery: 'jquery',
             'window.jQuery': 'jquery'
         })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders:['react-hot-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                loaders: [ 'style-loader', 'css-loader' ]
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader?name=[name].[ext]' 
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff' 
            },
            { 
                 test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                 loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    stats:{
        colors: true
    },
    devtool: 'cheap-module-eval-source-map'

}

module.exports = webpackConfig;