# react-webpack-es6-boilerplate

## commands

```
Lifecycle scripts included in react-webpack-es6-boilerplate:
  test
    npm run karma

available via `npm run-script`:
  assets:build
    NODE_ENV=production webpack --config ./webpack.build.config.js --progress --profile --colors
  assets:serve
    NODE_ENV=development webpack-dev-server --config ./webpack.hot.assets.config.js --hot --progress --colors --port 2992 --inline --host 0.0.0.0
  karma
    karma start
  karma:watch
    npm run karma -- --auto-watch --no-single-run
  karma:all
    npm run karma -- --browsers=PhantomJS,Chrome,Firefox
  package:purge
    rm -rf node_modules
  package:reinstall
    npm run package:purge && npm install
  package:updates
    npm-check-updates -f '/^(?!npm-shrinkwrap).*$/'
  package:upgrade
    npm-check-updates -u -f '/^(?!npm-shrinkwrap).*$/'
  server:dev
    NODE_ENV=development node ./dev.server.js
  shrinkwrap:build
    npm-shrinkwrap --dev
  shrinkwrap:remove
    rm npm-shrinkwrap.json
  shrinkwrap:rebuild
    npm run shrinkwrap:remove && npm run package:reinstall && npm run shrinkwrap:build
  shrinkwrap:upgrade
    npm upgrade npm-shrinkwrap@200 --save-dev
  spec
    mocha ./test/**/*.spec.js --reporter spec --timeout 15000 --bail --require ./test/_lib/bootstrap.js
  spec:watch
    npm run spec -- -w
  spec:watch:browser
    npm run spec:watch -- 2>&1 --bail --require ./test/_lib/bootstrap.js | report-viewer --port 9123
```

## development

- `npm run assets:serve` - to serve assets only, use if index.html being served elsewhere, `localhost:2992/assets/`.
- `npm run server:dev` - to run full server w/ index.html, `localhost:9999`.

## testing

Support for running tests in **mocha** and via **karma**.

Update `test`, to run whatever test suite you prefer. By default it will run `karma`.

### mocha

Note: watching may not work properly due to `babel/register` being used as the transpilier in `bootstrap.js` and because of node caching `require`.

Looks for files ending with `*.spec.js`, bootstraped via `test/_lib/bootstrap.js` (sets up globals).

`jsdom` is used to simulate the dom, it should stay at v3 unless you are using io.js.

- `npm run spec` - run mocha tests.
- `npm run spec:watch` - run mocha tests continuously, watches for updates.
- `npm run spec:watch:browser` - run mocha tests continuously, watches for updates, with inbrowser reporter.

### karma

Run the test by default inside `PhantomJS`, could be configured to also run in `Chrome` and `Firefox`.

- `npm run karma` - run karma.
- `npm run karma:watch` - run karma continuously, watches for updates.
- `npm run karma:all` - run karma for Chrome, Firefox, and PhantomJS.

## production

- `npm run assets:build` - build assets, also builds a `index.html` and `stats.json`.

## shrinkwrapping

**npm-shrinkwrap** is set to version 200, because I am assuming you have npm v2.

You should update the `npm-shrinkwrap.json` file by running the `npm run shrinkwrap:build` command. Run it when adding new or updating package in your `package.json`.

- `npm run shrinkwrap:build` - generate a `npm-shrinkwrap.json`.
- `npm run shrinkwrap:rebuild` - removes `npm-shrinkwrap.json`, reinstall npm package, generates new `npm-shrinkwrap.json`.
- `npm run shrinkwrap:remove` - remove `npm-shrinkwrap.json`.
- `npm run shrinkwrap:update` - update `npm-shrinkwrap@200` (for npm version 2).

## maintaining package

By default, the `package:updates` and `package:upgrade` commands are set to filter out `npm-shrinkwrap`, to lock it to `v200+`.

- `npm run package:updates` - list package that may be outdated.
- `npm run package:upgrade` - updates all the package versions in `package.json`.
- `npm run package:purge` - removes your `node_modules` folder.
- `npm run package:reinstall` - removes your `node_modules` folder and does a `npm install`.
