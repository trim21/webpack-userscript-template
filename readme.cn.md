# 使用 WebPack 来构件 UserScript

[使用这个 repo 作为模板](https://github.com/Trim21/webpack-userscript-template/generate).

## 开发

1. 允许 Tampermonkey 访问文件网址 `右键插件图标`-`插件管理页面`-`访问文件网址` 或者参照[官方 faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. 使用 `npm ci` or `npm i` 安装依赖。
3. `npm run dev` 来进行自动编译。
4. 在浏览器中打开 `webpack-userscript-template/dist/index.dev.user.js` ，使用 Userscript manager 安装脚本。

被安装的用户脚本包含`// @require file://path/to/dist/index.prod.user.js`,
所以在每次加载的时候会运行 `index.prod.user.js`。
`index.prod.user.js`是 webpack 以[src/js/index.js](./src/js/index.js)作为入口打包出来的完整的 userscript。

每次你修改了你的[metadata](./config/metadata.js)，你需要重新安装`index.dev.user.js`。

6. 修改 [src/js/index.js](./src/js/index.js) 。如果你需要的话你可以引入 css 或者 less 文件。你也可以通过设置 webpack 来引入 scss。
7. 在 <https://www.example.com/> 并且打开控制台，你可以看到用户脚本被运行。

livereload 默认启用。在浏览器中进行自动刷新需要 [这个 chrome 插件](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

## TypeScript

已经设置好了`ts-loader`，可以直接 typescript。[example](src/js/example.ts)

## 使用依赖

有两个办法引入依赖。

### 像以往的 UserScript 一样

在 [metadata 的 require 部分](./config/metadata.js#L13-L17) 中修改你引入的依赖。然后在 [config/webpack.config.base.js](./config/webpack.config.base.js#L21-L25) 的`exclude`配置中里面把他们排除。

### 跟以往的 WebPack 一样

直接使用 npm 安装，然后什么都不用管。

这会造成最终打包出来的文件提及增大。

## build

```bash
npm run build
```

`dist/index.prod.user.js` 就是最终打包出来的 UserScript。

## deploy

[github actions](./.github/workflows/nodejs.yml#L68) 会自动在每个 tag 把`dist/index.prod.user.js`部属到`gh-pages`分支的根目录去。

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)

[deployed](https://trim21.github.io/webpack-userscript-template/)
