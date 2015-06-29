# react-webpack-es6-boilerplate

## commands

```
Lifecycle scripts included in react-webpack-es6-boilerplate:
  test
    mocha --recursive --reporter spec --timeout 15000 --bail

available via `npm run-script`:
  assets:build
    NODE_ENV=production webpack --config ./webpack.build.config.js --progress --profile --colors
  assets:serve
    NODE_ENV=development webpack-dev-server --config ./webpack.hot.assets.config.js --hot --progress --colors --port 2992 --inline --host 0.0.0.0
  packages:purge
    rm -rf node_modules
  packages:reinstall
    npm run packages:purge && npm install
  packages:updates
    npm-check-updates
  packages:upgrade
    npm-check-updates -u
  server:dev
    NODE_ENV=development node ./dev.server.js
  shrinkwrap:build
    npm-shrinkwrap --dev
  shrinkwrap:remove
    rm npm-shrinkwrap.json
  shrinkwrap:rebuild
    npm run shrinkwrap:remove && npm run package:reinstall && npm run shrinkwrap:build
  test:watch
    mocha --recursive --reporter spec -w --timeout 15000 --bail
  test:watch:browser
    mocha --recursive --reporter spec -w --timeout 15000 2>&1 --bail | report-viewer
```

## development

- `npm run assets:serve` - to serve assets only, use if index.html being served elsewhere, `localhost:2992/assets/`.
- `npm run server:dev` - to run full server w/ index.html, `localhost:9999`.

## testing

- `npm test` - run mocha test suite
- `npm run test:watch` - run mocha tests continuously
- `npm run test:watch:browser` - run mocha tests continuously, with inbrowser reporter

## production

- `npm run assets:build` - build assets, also builds a `index.html` and `stats.json`.

## shrinkwrapping

You should update the `npm-shrinkwrap.json` file by running the `npm run shrinkwrap:build` command. Run it when adding new or updating packages in your `package.json`.

- `npm run shrinkwrap:build` - generate a `npm-shrinkwrap.json`.
- `npm run shrinkwrap:rebuild` - rebuilds the `npm-shrinkwrap.json`, after reinstalling `node_modules`.
- `npm run shrinkwrap:remove` - remove `npm-shrinkwrap.json`.
