# moclojer app

##  Frontend

*Micro SaaS* **moclojer** admin area (dashboard, app.moclojer.com)

We use the [helix](https://github.com/lilactown/helix) framework to develop our dashboard, it's a library that makes it easy to use **React** using **ClojureScript**.

## Documents

- [Authentication](docs/auth.md)

## Commands

before you can upload the development environment with `watch` or `ci:tests` you must install the packages as `npm`:

```sh
npm i # install
```

### Watch

Start shadow-cljs watching and serving main in [`localhost:8000`](http://localhost:8000) and tests in [`localhost:8100`](http://localhost:8100):

```sh
npm run watch
```

### Tests

Run **Karma** tests targeted for running CI tests with *Headless Chromium Driver*:

```sh
npm run ci:tests
```

### Repl

#### Repl on your terminal

**Open REPL:**

```sh
npm run repl
```

Inside **REPL** run the following calls (log below is with the output, *call the functions*):

```log
shadow.user => (shadow/watch :app)
# then open the http://localhost:8000
shadow.user => (shadow/repl :app)
cljs.user => (in-ns 'front.dev.core)
dev.core => (p/do (mock/start!) (.reload js/location))
```

Then your mock (**msw**) will be running.

1. after running the mock, you must enter the `msw.mock@email.com` email address into the `/#/login/auth?code=123ABC456DEF` URI
      > it will give you the *"Check your email, and click on the link. Didn't received it?"* message
2. in the same tab, open this URI `/#/login/auth?code=123ABC456DEF` *(what changes is the parameter code)*

#### REPL on your nvim

- It needs [Conjure](https://github.com/Olical/conjure)

- To configure your neovim to use Conjure follow [setup](https://github.com/rafaeldelboni/nvim-fennel-lsp-conjure-as-clojure-ide)

```sh
npm run app:watch
```

In your neovim run

```vim
:ConjureShadowSelect app
```

## MSW

I decided to start the app (even on development) with [MSW](https://mswjs.io/) turned off.  

To enable it you need an active REPL connection with the project and and evaluate the start expression on the block comment at the end of the following file: [`src/dev/core.cljs`](src/dev/core.cljs)

```clj
(p/do (mock/start!)
      (.reload js/location))
```

read more [here](#repl-on-your-terminal)

## Backend

### Repl
To open a nrepl

```bash
clj -M:nrepl
```
To open a nrepl with all test extra-deps on it

```bash
clj -M:test:nrepl
```
### Run dev
To open a dev nrepl

```bash
clj -M:back-dev:nrepl
```

## Run tests

To run unit tests inside ./test/back/back/unit

```bash
clj -M:test :unit
```
To run integration tests inside ./test/back/back/integration

```bash
clj -M:test :integration
```
To run all tests inside ./test

```bash
clj -M:test
```
### Migrations
To create a new migration with a name

```bash
clj -M:migratus create migration-name
```
To execute all pending migrations

```bash
clj -M:migratus migration
```
To rollback the latest migration

```bash
clj -M:migratus rollback
```
See Migratus Usage for documentation on each command https://github.com/yogthos/migratus#usage.

### Docker

Start containers with `postgres user: postgres, password: postgres, hostname: db, port: 5432`
and pg-admin `email: pg@pg.cc, password: pg, port: 5433`

```bash
docker-compose -f docker/docker-compose.yml up -d
```
Stop containers

```bash
docker-compose -f docker/docker-compose.yml stop
```

### Running the server
First you need to have the database running, for this you can use the docker command in the step above.

Repl
You can start a repl open and evaluate the file `src/back/api/server.clj` and execute following code:

```clojure
(start-system! (build-system-map))
```
