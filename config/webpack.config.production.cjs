const { merge } = require('webpack-merge')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')

const metadata = require('./metadata.cjs')
const webpackConfig = require('./webpack.config.base.cjs')

const cfg = merge(webpackConfig, {
  mode: 'production',
  output: {
    filename: 'index.prod.user.js',
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
})

module.exports = cfg
