const merge = require('webpack-merge')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const metadata = require('./metadata')

const webpackConfig = require('./webpack.config.base')
const cfg = merge({}, webpackConfig, {
  output: {
    filename: 'index.prod.user.js'
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata
    })
  ]
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
