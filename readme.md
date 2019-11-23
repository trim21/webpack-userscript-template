# This is a project help you build userscript with webpack

Just copy this git repo to your repo then edit [config/metadata.js](config/metadata.js)

## dev

```bash
npm run dev
```

1. Allow Tampermonkey access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. create a new UserScript in your tampermonkey
3. Replace all content with the meta (**only userscript meta**) of [dist/${metadata.name}.dev.user.js](./dist/webpack-userscript-template.dev.user.js).

this meta contains `// @require     file://path/to/dist/webpack-userscript-template.dev.user.js`, it will run the code in `webpack-userscript-template.dev.user.js`.
(so after you edit metadata, you'll have to do this again.)

4. edit [src/index.js](./src/index.js) with es6, you can even import css files.
5. go wo [www.example.com](www.example.com) and open console, you'll see the output

(livereload is default enabled)

## build

```bash
npm run build
```

[dist/${metadata.name}.user.js](./dist/webpack-userscript-template.user.js) is the finally file.
