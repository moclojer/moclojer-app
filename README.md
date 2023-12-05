# Moclojer App

**Moclojer App** é um produto *Micro SaaS* construído em cima do produto Open Source [Moclojer](https://github.com/moclojer/moclojer). Apesar de ser um *monorepo*, este produto é composto por 3 serviços menores:

- [Back](./src/back/README.md)
- [Yaml Generator](./src/yaml_generator/README.md)
- [Front](./src/front/README.md)

## Como rodar localmente

Siga os passos de cada um dos elementos a seguir:

1. [Docker](./docker/README.md#como-rodar-localmente)
2. [Back](./src/back/README.md#como-rodar-localmente)
3. [Yaml Generator](./src/back/README.md#como-rodar-localmente)
4. [Front](./src/front/README.md#como-rodar-localmente)

Se você estiver com pressa:

```bash
docker compose -f docker/docker-compose.yml up localstack -d
docker compose -f docker/docker-compose.yml up redis -d

clj -M:back-dev:nrepl
npm run watch
```
