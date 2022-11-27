const { merge } = require('webpack-merge')
const webPackConfig = require('./webpack.config')

module.exports = merge(webPackConfig, {
  mode: 'development',
  entry: './src/index.tsx'
})
