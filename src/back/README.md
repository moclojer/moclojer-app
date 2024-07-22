# Back

O serviço de backend serve a API de entrada, criando ponte entre o [Frontend](../front/README.md), o serviço [gerador de yaml](../yaml_generator/README.md) e os serviços terciários de [persistência](../../docker/README.md) (pg, redis, aws/localstack, etc).

## Hierarquia

A hierarquia de arquivos segue o seguinte padrão:

- **[adapters](./api/adapters)**: Conversores de dados internos para uso em serviços externos.
- **[controllers](./api/controllers)**: Ponte entre a lógica de negócios, serviços externos, adaptadores, e outros.
- **[db](./api/db)**: Helpers de execução de queries no banco de dados.
- **[interceptors](./api/interceptors)**: Helpers executados antes/depois de requests.
- **[logic](./api/logic)**: Lógica de negócio.
- **[ports](./api/ports)**: Declaração dos requests.
- **[schemas](./api/schemas)**: Declaração dos tipos de models para coercing.

## Como rodar localmente

### Docker

Caso não tenha *uppado* antes, volte às instruções dos containers do [Docker](../../docker/README.md) e rode-os antes.

### PostgreSQL

O ambiente de desenvolvimento utiliza-se do `pg-embedded-clj`, criando uma instância in-memory do Postgres. Caso você não esteja no ambiente `dev` e já tenha [*uppado* o container do PG](../../docker/README.md#como-rodar-localmente), você precisará fazer a seguinte migração:

```bash
clj -M:migratus migrate
```

Veja mais sobre como usar [**migratus** aqui](https://github.com/yogthos/migratus#usage).

### REPL

Abra um servidor nrepl:

```bash
clj -M:back-dev:nrepl # dev
# clj -M:nrepl
```

Após aberto, conecte seu [editor de código](https://neovim.io/) ao nrepl e rode o seguinte:

```clj
(in-ns 'back.api.server)
(start-system-dev! (build-system-map))
```
