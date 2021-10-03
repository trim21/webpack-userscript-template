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
  target: 'web',
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
        loader: 'babel-loader', // use ts-loader if you like
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
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
