# This is a project help you build userscript with webpack

Just [use this git repo as a template](https://github.com/Trim21/webpack-userscript-template/generate).

## dev

```bash
npm run dev
```

**make sure you run `npm run dev` before these steps, otherwise the file path will be incorrect.**

1. Allow Tampermonkey's access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. open `webpack-userscript-template/dist/index.dev.user.js` in your Chrome.
3. Install it.

this userscript's meta contains `// @require file://path/to/dist/index.prod.user.js`,
it will run the code in `index.prod.user.js`,
which take [src/js/index.js](./src/js/index.js) as entry point.

every times you edit your metadata, you'll have to install it again,
because Tampermonkey don't read it from dist every times.

4. edit [src/index.js](./src/index.js) with es6, you can even import css or less files. You can use scss if you like.
5. go wo <https://www.example.com/> and open console, you'll see it working.

livereload is default enabled, use [this chrome extension](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

## dependencies

There are two ways to using a package on npm.

### UserScript way

like original UserScript way, you will need to add them to your [user script metadata's require section](./config/metadata.js#L13-L17)  , and exclude them in [config/webpack.config.base.js](./config/webpack.config.base.js#L22-L26)

### Webpack way

just install a package and import it in your js file. webpack will pack them with in your final production js file, which make diff unreadable for user.

## build

```bash
npm run build
```

`dist/index.prod.user.js` is the finally script. you can manually copy it to greaskfork for deploy.

## TypeScript

TypeScript works.

## deploy

[github actions](./github/workflows/nodejs.yml) will deploy production usersctip to gh-pages branch.

[example](https://github.com/Trim21/webpack-userscript-template/tree/gh-pages)
