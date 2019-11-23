const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
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
    jquery: '$',
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
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader', // 将 Less 编译为 CSS
        ]
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
    new webpack.HashedModuleIdsPlugin()
  ]
}

module.exports = webpackConfig
