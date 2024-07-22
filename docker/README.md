# Docker

## Dependências

As ferramentas que fazem parte do moclojer são:

- **db**: [Postgres](https://www.postgresql.org/) | ::5432
- **db-admin**: [pgAdmin4](https://www.pgadmin.org/) | ::5433
- **localstack**: [LocalStack](https://www.localstack.cloud/) | ::4566 ... ::4583
- **redis**: [Redis](https://redis.io/) | 6379

## Como rodar localmente

> Nos exemplos a seguir, o comando `docker compose` será utilizado, mas, dependendo do seu sistema, a forma correta seria `docker-compose`.

### PostgreSQL

**Atenção**: Pule esta parte caso esteja em ambiente de desenvolvimento. A instância do PostgreSQL não é necessária, já que utilizamos o [pg-embedded-clj](https://github.com/Bigsy/pg-embedded-clj), um emulador *in-memory* do PostgreSQL, tanto para executar queries quanto mockar testes.

```bash
# cuidado com colisão com pg-embedded-clj
docker compose docker-compose.yml up db -d
docker compose docker-compose.yml up db-admin -d
```

Após inicializado, você pode acessar o pgadmin em `localhost:5433`, email `pg@pg.cc` e senha `pg`.

### LocalStack

[LocalStack](https://www.localstack.cloud/) é um emulador de infra. No nosso caso, utilizamos o localstack para emular o produto de storage/bucket [S3](https://aws.amazon.com/s3/) da AWS.

```bash
docker compose -f docker-compose.yml up localstack -d
```

### Redis

Utilizamos o [Redis](https://redis.io/) como message/queue broker na criação dos yaml's para mocks.

```bash
docker compose -f docker-compose.yml up redis -d
```
