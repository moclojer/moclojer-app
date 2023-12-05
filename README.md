# Moclojer App

**Moclojer App** é um produto *Micro SaaS* construído em cima do produto Open Source [Moclojer](https://github.com/moclojer/moclojer). Apesar de ser um *monorepo*, este produto é composto por 3 serviços menores:

- [Back](./src/back/README.md)
- [Yaml Generator](./src/yaml_generator/README.md)
- [Front](./src/front/README.md)

Tanto [Back](./src/back/README.md) e [Yaml Generator](./src/yaml_generator/README.md) dependem de [./src/components](./src/components/README.md). Leia sobre, caso queira entender como lidamos com lifecycle and gerenciamento de estado.

## Como rodar localmente

Siga os passos de cada um dos elementos a seguir:

1. [Docker](./docker/README.md#como-rodar-localmente)
2. [Back](./src/back/README.md#como-rodar-localmente)
3. [Yaml Generator](./src/back/README.md#como-rodar-localmente)
4. [Front](./src/front/README.md#como-rodar-localmente)
