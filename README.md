# front-helix

We use the [helix](https://github.com/lilactown/helix) framework to develop our dashboard, it's a library that makes it easy to use **React** using **ClojureScript**.

## Developer environment

**how to get up the development environment?**

```bash
npm i
npm run watch
```

## Repl on your terminal

```bash
npm run repl
#inside repl

shadow.user => (shadow/watch :app)
#then open the http://localhost:8000

shadow.user =>  (shadow/repl :app)
cljs.user=> (in-ns 'dev.core)
dev.core=>   (p/do (browser/start!) (.reload js/location)) 
```
Then your mock (msw) will be running.


### Run on REPL VIM Users

* It needs [Conjure](https://github.com/Olical/conjure)
 - To configure your neovim to use Conjure follow [setup](https://github.com/rafaeldelboni/nvim-fennel-lsp-conjure-as-clojure-ide)

```bash
npm run watch
```
In your neovim run 

```bash
:ConjureShadowSelect app
```

Go to the `(ns dev.core)` and run  to start the mock service
```clojure
  (p/do (browser/start!)
        (.reload js/location))
```

