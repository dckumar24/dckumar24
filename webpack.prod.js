const path = require('path')
const { merge } = require('webpack-merge')
const webPackConfig = require('./webpack.config')

module.exports = merge(webPackConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
})
