const path = require("path");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const LiveReloadPlugin = require("webpack-livereload-plugin");
const UserScriptMetaDataPlugin = require("userscript-metadata-webpack-plugin");
const metadata = require("./metadata");

const webpackConfig = require("./webpack.config.base");

metadata.require.push(
  "file://" + path.resolve(__dirname, "../dist/index.prod.user.js")
);

const cfg = merge(webpackConfig, {
  entry: {
    prod: webpackConfig.entry,
    dev: path.resolve(__dirname, "./empty.js"),
  },
  output: {
    filename: "index.[name].user.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    new LiveReloadPlugin({
      delay: 500,
    }),
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
});

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = cfg;
