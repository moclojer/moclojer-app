# Moclojer App

**Moclojer App** é um produto *Micro SaaS* construído em cima do produto Open Source [Moclojer](https://github.com/moclojer/moclojer). Apesar de ser um *monorepo*, este produto é composto por 3 serviços menores:

- [Front](./src/front/README.md)
- [Back](./src/back/README.md)
- [Yaml Generator](./src/yaml_generator/README.md)

## Como rodar localmente

Siga os passos de cada um dos elementos a seguir:

1. [Docker](./docker/README.md#como-rodar-localmente)
2. [Back](./docker/README.md#como-rodar-localmente)
3. [Front](./docker/README.md#como-rodar-localmente)

Em suma, rode o seguinte script se estiver com pressa :)

```bash
docker-compose -f docker/docker-compose.yml up localstack -d
docker-compose -f docker/docker-compose.yml up redis -d

clj -M:back-dev:nrepl
npm run watch
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

### Running the server

First you need to have the database running, for this you can use the docker command in the step above.

Repl
You can start a repl open and evaluate the file `src/back/api/server.clj` and execute following code:

```clojure
(start-system! (build-system-map))
```
