const merge = require('webpack-merge')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const metadata = require('./metadata')
const path = require('path')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin')
const webpackConfig = require('./webpack.config.base')
let cfg = merge(webpackConfig, {
  output: {
    filename: metadata.name + '.dev.user.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new WatchLiveReloadPlugin({
      delay: 500,
      files: [
        // Replace these globs with yours
        './src/**/*.html',
        './src/**/*.css',
        './src/**/*.js'
      ]
    })
  ]
})
metadata.require.push('file://' + path.resolve(__dirname, '../dist', cfg.output.filename))

cfg.plugins.push(new UserScriptMetaDataPlugin({
  metadata
}))

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
