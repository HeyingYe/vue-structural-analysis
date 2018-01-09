//build.js主要完成下面几件事：
//1.loading动画
//2.删除创建目标文件夹
//3.webpack编译
//4.输出信息
//(说明：webpack编译之后会输出到配置里面指定的目标文件夹；删除目标文件夹之后再创建是为了去除旧的内容，以免产生不可预测的影响。)

// 检查 Node 和 npm 版本
require('./check-versions')()
//生产环境
process.env.NODE_ENV = 'production'
// 一个很好看的 loading 插件
var ora = require('ora')
var rm = require('rimraf')
// 使用 NodeJS 自带的文件路径插件
var path = require('path')
// 用于在控制台输出带颜色字体的插件
var chalk = require('chalk')
//加载webpack
var webpack = require('webpack')
//加载config中index.js
var config = require('../config')
//加载webpack.prod.conf
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()// 开启loading动画
// 拼接编译输出文件路径
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);
// 删除这个文件夹 （递归删除）
rm(assetsPath, err => {
  if (err) throw err
    //  开始 webpack 的编译
  webpack(webpackConfig, function (err, stats) {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
