var path = require('path')
var config = require('../config')
var utils = require('./utils')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './docs/main.js'
  },
  output: {
    path: config.docs.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.docs.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.pug', '.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('docs'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue',
      'asic': path.resolve(__dirname, '../src/index'), // for consistent docs
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../docs/assets'),
      'examples': path.resolve(__dirname, '../docs/partials/examples'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('docs'), resolve('test')]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
        include: [resolve('src'), resolve('docs')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
