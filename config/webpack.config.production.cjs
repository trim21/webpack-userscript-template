const { merge } = require('webpack-merge')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const metadata = require('./metadata.cjs')
const webpackConfig = require('./webpack.config.base.cjs')

const cfg = merge(webpackConfig, {
  mode: 'production',
  output: {
    filename: metadata.name + '.prod.user.js',
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
