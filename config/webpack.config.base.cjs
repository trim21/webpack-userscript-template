const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.ts']
  },
  optimization: {
    minimize: false,
    moduleIds: 'named',
  },
  entry: './src/index.ts',
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
      },
      {
        test: /\.ts$/,
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
  plugins: process.env.npm_config_report ? [new BundleAnalyzerPlugin()] : [],
}

module.exports = webpackConfig
