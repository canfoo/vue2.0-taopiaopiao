// https://github.com/shelljs/shelljs
var path = require('path')
var fs = require('fs')
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)


var dealSomingAsync = function(path, fileReg, replaceReg, fn) {
   var files = fs.readdirSync(path);
   files.forEach(function(item) {
    if (fileReg.test(item)) {
      var filePath = path + '/' + item
      var str = fs.readFileSync(filePath, 'utf-8');
      str = str.replace(replaceReg, fn)
      fs.writeFile(filePath, str, function(err) {
        err ? console.log('write fail: ' + err) : console.log(item + " write success!")
      });
    }
   })
}

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
    
  dealSomingAsync(webpackConfig.output.path, /index.html/, /(\/..\/public)/g, function() {
    return ''
  })
  dealSomingAsync(path.resolve(__dirname, '../server/public/stylesheets'), /\.css$/, /(\/..\/public)/g, function() {
    return ''
  })

})





