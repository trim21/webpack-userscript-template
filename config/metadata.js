const pkg = require('../package.json')

module.exports = {
  name: 'webpack-userscript-template',
  namespace: 'https://trim21.me/',
  version: pkg.version,
  author: pkg.author,
  source: pkg.repository.url,
  // 'license': 'MIT',
  match: [
    'http://www.example.com/*'
  ],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${pkg.dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/axios@${pkg.dependencies.axios}/dist/axios.min.js`,
    `https://cdn.jsdelivr.net/npm/axios-userscript-adapter@${pkg.dependencies['axios-userscript-adapter']}/dist/axiosGmxhrAdapter.min.js`,
  ],
  grant: [
    'GM_xmlhttpRequest'
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-end'
}
