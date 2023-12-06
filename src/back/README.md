# Back

O serviço de backend serve a API de entrada, criando ponte entre o [Frontend](../front/README.md), o serviço [gerador de yaml](../yaml_generator/README.md) e os serviços terceiros de [persistẽncia](../../docker/README.md) (pg, redis, aws/localstack, etc).

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

O ambiente de desenvolvimento utiliza do `pg-embedded-clj`, criando uma instância in-memory do Postgres. Caso você não esteja em ambiente `dev`, e já tenha [*uppado* o container do PG](../../docker/README.md#como-rodar-localmente), você precisa fazer a migração:

```bash
clj -M:migratus migrate
```

Veja mais sobre como usar migratus: https://github.com/yogthos/migratus#usage

### REPL

Abra um servidor nrepl:

```bash
clj -M:back-dev:nrepl # dev
# clj -M:nrepl
```

Após aberto, conecte seu [editor](TODO) ao nrepl, e rode o seguinte:

```clj
(in-ns 'back.api.server)
(start-system-dev! (build-system-map))
```

### Testes

Existem tanto testes unitários quanto de integração, e você pode rodá-los da seguinte maneira:

```bash
clj -M:test :unit # unitários
clj -M:test :integration # integração
```
