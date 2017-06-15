var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
         path.resolve(__dirname, './src/js/root.jsx')
         ],
    output: {
        path: path.resolve(__dirname, './__build__'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
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
        new webpack.HotModuleReplacementPlugin(),
         new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};