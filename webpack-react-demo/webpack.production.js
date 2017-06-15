var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: path.resolve(__dirname, './src/js/root.jsx'),
    output: {
        path: path.resolve(__dirname, './__build__'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }

        }]
    },
      resolve: {
    extensions: [ '.js', '.jsx']//jsx后缀，一定要添加'.jsx'
  },
    plugins: [
            new HtmlWebpackPlugin({
            template: './index.html'
        }),
   new webpack.optimize.UglifyJsPlugin({
   exclude:/\.min\.js$/,
   mangle:true,
   compress: { warnings: false },
   output: { comments: false }
    })
    ]
};