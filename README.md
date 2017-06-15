# webpack-react-synchronous-refresh
webpack+react热更新
之前在开发中一直使用gulp同步刷新，简单方便：），后来在学习react过程中接触到webpack的热更新，开始转移到webpack平台；

自己简单构建了一个webpack+react环境，可以前往

操作步骤：

1、首先安装完node后，若安装速度太慢，可以使用淘宝镜像，接下来安装webpack，
npm config set registryhttpregistry.npm.taobao.org
npm install webpack-g

2、接下来使用 npm init 命令，初始化，package.json 文件
npm init

3、接下来开始添加依赖包及插件
安装webpack和react相关包

npm install   webpack   react react-dom react-hot-loader     jsx-loader  html-webpack-plugin   --save-dev

安装babel插件,用于编译和转化,若缺少这几个加载器，es2015语法就会报错。

npm install babel-loader  babel-core   babel-preset-es2015  babel-preset-react  
babel-preset-stage-0    --save-dev

安装自动刷新热更新服务
npm install webpack-dev-server--save-dev

安装自动生成 HTML 文件插件

HtmlWebpackPlugin = require('html-webpack-plugin')

在package.json文件中为scripts添加服务命令,以下是完整pagkage.json文件，
（其中webpack.production.js用于生产打包，webpack.config.js用于开发）

{
name cobby,

version 1.0.0,

description ,

main index.js,

scripts {

build webpack --config webpack.production.js,

start webpack-dev-server --devtool eval --progress --colors --content-base build

},

author ,

license ISC,

devDependencies {

babel-core ^6.25.0,

babel-loader ^7.0.0,

babel-preset-es2015 ^6.24.1,

babel-preset-react ^6.24.1,

babel-preset-stage-0 ^6.24.1,

html-webpack-plugin ^2.28.0,

jsx-loader ^0.13.2,

open-browser-webpack-plugin 0.0.5,

path ^0.12.7,

react ^15.6.1,

react-dom ^15.6.1,

react-hot-loader ^1.3.1,

webpack ^2.6.1,

webpack-dev-server ^2.4.5

}}
webpack.config.js文件配置如下
var path = require('path'),

webpack = require('webpack'),

HtmlWebpackPlugin = require('html-webpack-plugin'),

OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

entry [

'webpackhotdev-server',

'webpack-dev-serverclienthttplocalhost8080',

path.resolve(__dirname, '.srcjsroot.jsx')

],

output {

path path.resolve(__dirname, '.__build__'),

filename 'bundle.js'

},

devServer {

inline true,

port 8080

},

module {

loaders [{

test .js[x]$,

exclude (node_modules),

loader 'babel-loader',

query {

presets ['es2015', 'react']

}}]},

resolve {

extensions [ '.js', '.jsx']jsx后缀，一定要添加'.jsx'

},

plugins [

new HtmlWebpackPlugin({

template '.index.html'

}),

new webpack.HotModuleReplacementPlugin(),

new OpenBrowserPlugin({ url 'httplocalhost8080' })

]};

npm run  start  开发命令
npm run build  打包命令

运行 npm run  start 后会自动自动打开 http://localhost:8080 
