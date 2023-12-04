# Frontend

admin area (dashboard, app.moclojer.com)

We use the [helix](https://github.com/lilactown/helix) framework to develop our dashboard, it's a library that makes it easy to use **React** using **ClojureScript**.

## Commands

```sh
npm i # install
```
Start shadow-cljs watching and serving main in [`localhost:8000`](http://localhost:8000) and tests in [`localhost:8100`](http://localhost:8100):

```sh
npm run watch
```

### Tests

Run **Karma** tests targeted for running CI tests with *Headless Chromium Driver*:

```sh
npm run ci:tests
```
