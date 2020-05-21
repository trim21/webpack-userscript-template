# 使用WebPack来构件UserScript

[使用这个repo作为模板](https://github.com/Trim21/webpack-userscript-template/generate).

## 开发

1. 允许Tampermonkey访问文件网址 `右键插件图标`-`插件管理页面`-`访问文件网址` 或者参照[官方faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
3. 使用 `npm ci` or `npm i` 安装依赖。
4. `npm run dev` 来进行自动编译。
5. 在浏览器中打开 `webpack-userscript-template/dist/index.dev.user.js` ，使用Userscript manager安装脚本。

被安装的用户脚本包含`// @require file://path/to/dist/index.prod.user.js`,
所以在每次加载的时候会运行 `index.prod.user.js`。
`index.prod.user.js`是webpack以[src/js/index.js](./src/js/index.js)作为入口打包出来的完整的userscript。

每次你修改了你的[metadata](./config/metadata.js)，你需要重新安装`index.dev.user.js`。

6. 修改 [src/js/index.js](./src/js/index.js) 。如果你需要的话你可以引入css或者less文件。你也可以通过设置webpack来引入scss。
7. 在 <https://www.example.com/> 并且打开控制台，你可以看到用户脚本被运行。

livereload 默认启用。在浏览器中进行自动刷新需要 [这个 chrome 插件](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

## TypeScript

已经设置好了`ts-loader`，可以直接typescript。[example](src/js/example.ts)

## 使用依赖

有两个办法引入依赖。

### 像以往的UserScript一样

在 [metadata 的 require 部分](./config/metadata.js#L13-L17) 中修改你引入的依赖。然后在 [config/webpack.config.base.js](./config/webpack.config.base.js#L21-L25) 的`exclude`配置中里面把他们排除。

### 跟以往的WebPack一样

直接使用npm安装，然后什么都不用管。

这会造成最终打包出来的文件提及增大。

## build

```bash
npm run build
```

`dist/index.prod.user.js` 就是最终打包出来的UserScript。

## deploy

[github actions](./.github/workflows/nodejs.yml#L60) 会自动在每个tag把`dist/index.prod.user.js`部属到`gh-pages`分支的根目录去。

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)
