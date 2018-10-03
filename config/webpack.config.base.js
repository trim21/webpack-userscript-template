const path = require('path')
const webpack = require('webpack')

const pkg = require('../package.json')
let webpackConfig = {
  node: {
    Buffer: false
  },
  resolve: {
    extensions: ['.js']
  },
  // performance: {
  // hints: false
  // },
  optimization: {
    minimize: false
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  externals: {
    'jquery': '$',
    axios: 'axios',
    'axios-userscript-adapter': 'axiosGmxhrAdapter'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'version': JSON.stringify(pkg.version)
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
}

module.exports = webpackConfig
