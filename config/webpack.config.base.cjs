const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.ts']
  },
  optimization: {
    minimize: false,
    moduleIds: 'named',
  },
  entry: './src/js/index.ts',
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
        use: {
          loader: 'babel-loader',
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader', // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
}

module.exports = webpackConfig
