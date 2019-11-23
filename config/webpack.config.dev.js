const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const metadata = require('./metadata')
const path = require('path')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const webpackConfig = require('./webpack.config.base')

const output = {
  filename: metadata.name + '.dev.user.js'
}

metadata.require.push('file://' + path.resolve(__dirname, '../dist', output.filename))

const cfg = merge(webpackConfig, {
  output,
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new LiveReloadPlugin({
      delay: 500,
    }),
    new UserScriptMetaDataPlugin({
      metadata
    })
  ]
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
