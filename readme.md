# This is a project help you build userscript with webpack

Just [use this git repo as a template](https://github.com/Trim21/webpack-userscript-template/generate).

[中文说明](./readme.cn.md)

## dev

1. Allow Tampermonkey's access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. install deps with `npm i` or `npm ci`.
3. `npm run dev` to start your development.
4. open `webpack-userscript-template/dist/index.dev.user.js` in your Chrome and install it with your userscript manager.

this userscript's meta contains `// @require file://path/to/dist/index.prod.user.js`,
it will run the code in `index.prod.user.js`,
which take [src/js/index.js](./src/js/index.js) as entry point.

every times you edit your metadata, you'll have to install it again,
because Tampermonkey don't read it from dist every times.

5. edit [src/js/index.js](./src/js/index.js) with es6, you can even import css or less files. You can use scss if you like.
6. go wo <https://www.example.com/> and open console, you'll see it's working.

livereload is default enabled, use [this chrome extension](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

## TypeScript

use typescript as normal, see [example](src/js/example.ts)

## dependencies

There are two ways to using a package on npm.

### UserScript way

like original UserScript way, you will need to add them to your [user script metadata's require section](./config/metadata.js#L13-L17) , and exclude them in [config/webpack.config.base.js](./config/webpack.config.base.js#L21-L25)

### Webpack way

just install a package and import it in your js file. webpack will pack them with in your final production js file.

## build

```bash
npm run build
```

`dist/index.prod.user.js` is the finally script. you can manually copy it to greaskfork for deploy.

## deploy

[github actions](./.github/workflows/nodejs.yml#L68) will deploy production usersctip to gh-pages branch.

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)

[deployed](https://trim21.github.io/webpack-userscript-template/)
