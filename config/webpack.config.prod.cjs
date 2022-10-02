const { merge } = require("webpack-merge");
const UserScriptMetaDataPlugin = require("userscript-metadata-webpack-plugin");

const metadata = require("./metadata.cjs");
const webpackConfig = require("./webpack.config.base.cjs");

const cfg = merge(webpackConfig, {
  mode: "production",
  output: {
    filename: "index.prod.user.js",
  },
  optimization: {
    // if you need minimize, you need to config minimizer to keep all comments
    // to keep userscript meta.
    minimize: false,
  },
  cache: {
    type: "filesystem",
    name: "prod",
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
});

module.exports = cfg;
