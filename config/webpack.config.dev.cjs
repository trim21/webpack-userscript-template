const path = require("path");
const { merge } = require("webpack-merge");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const UserScriptMetaDataPlugin = require("userscript-metadata-webpack-plugin");

const metadata = require("./metadata.cjs");
const webpackConfig = require("./webpack.config.base.cjs");

metadata.require.push(
  "file://" + path.resolve(__dirname, "../dist/index.debug.js")
);

const cfg = merge(webpackConfig, {
  mode: "development",
  cache: {
    type: "filesystem",
    name: "dev",
  },
  entry: {
    debug: webpackConfig.entry,
    "dev.user": path.resolve(__dirname, "./empty.cjs"),
  },
  output: {
    filename: "index.[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "eval-source-map",
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

module.exports = cfg;
