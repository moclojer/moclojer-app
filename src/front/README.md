# Frontend

Área de admin (dashboard) -> https://app.moclojer.com

## Dependências

O frontend é construido em cima de algumas libs principais, entre elas:

- **[Refx](https://github.com/ferdinand-beyer/refx)**: Framework semelhante ao [re-frame](https://github.com/day8/re-frame), mas sem dependência da lib [Reagent](https://github.com/reagent-project/reagent).
- **[Helix](https://github.com/lilactown/helix)**: Wrapper do React para Cljs.
- **[Promesa](https://github.com/funcool/promesa)**: Toolkit de concurrency.
- **[reitit-schema](https://github.com/metosin/reitit/tree/master/modules/reitit-schema)**: Coercing.
- **[reitit-frontend](https://github.com/metosin/reitit/tree/master/modules/reitit-schema)**: Routing.
- **[fetch](https://github.com/lambdaisland/fetch)**: Wrapper da lib fetch do JS para Cljs.

## Hierarquia

- **[app](./app)**
  - **[auth](./app/auth)**: Feature de autenticação e autorização.
  - **[components](./app/components)**: Componentes mínimos.
  - **[routes](./app/routes)**: Páginas/routes.
- **[css](./css)**: Entry point do TailwindCSS.

## Como rodar localmente

### NPM

Instale as dependências do node, caso não tenha-o feito ainda:

```sh
npm i # install
```

### Watcher

Dê start no watcher [shadow-cljs](https://github.com/thheller/shadow-cljs):

```sh
npm run app:watch
```

Assim que estiver pronto, as portas criadas serão:

- *http://localhost:8000*: aplicação normal
- *http://localhost:8100*: testes

### REPL

O shadow-cljs cria automaticamente um nrepl em http://localhost:8777. Basta conectar ao seu [editor](../../../docs/editores.md#Neovim).

### Testes

```sh
npm run ci:tests
```
