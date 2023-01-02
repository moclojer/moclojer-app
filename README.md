# front-helix

We use the [helix](https://github.com/lilactown/helix) framework to develop our dashboard, it's a library that makes it easy to use **React** using **ClojureScript**.

## Documents
- [Authentication](docs/auth.md)

## Commands

### Watch
Start shadow-cljs watching and serving main in [`localhost:8000`](http://localhost:8000) and tests in [`localhost:8100`](http://localhost:8100)
```bash
npm run watch
```

### Tests
Run **Karma** tests targeted for running CI tests with *Headless Chromium Driver*
```bash
npm run ci:tests
```

### Repl

#### Repl on your terminal

```bash
npm run repl
# inside repl

shadow.user => (shadow/watch :app)
# then open the http://localhost:8000

shadow.user => (shadow/repl :app)
cljs.user => (in-ns 'dev.core)
dev.core => (p/do (mock/start!) (.reload js/location))
```
Then your mock (msw) will be running.

#### REPL on your nvim

* It needs [Conjure](https://github.com/Olical/conjure)
 - To configure your neovim to use Conjure follow [setup](https://github.com/rafaeldelboni/nvim-fennel-lsp-conjure-as-clojure-ide)

```bash
npm run watch
```
In your neovim run 

```bash
:ConjureShadowSelect app
```

## MSW
I decided to start the app (even on development) with [MSW](https://mswjs.io/) turned off.  

To enable it you need an active repl connection with the project and and evaluate
the start expression on the block comment at the end of the following file: [src/dev/core.cljs](src/dev/core.cljs)
```clj
(p/do (mock/start!)
 (.reload js/location))
```

