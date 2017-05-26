var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin({
  banner: '// { "framework": "Vue" }\n',
  raw: true
})

function getBaseConfig () {
  return {
    entry: {
      'index': path.resolve('src', 'entry.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist')
      ,filename: '[name].web.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: ['vue-loader']
        }
      ]
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
      bannerPlugin
    ]
  }
}

var webConfig = getBaseConfig()

module.exports = [webConfig]
