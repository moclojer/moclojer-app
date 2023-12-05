# Yaml Generator

O serviço de geração de yaml é responsável por realizar pub/sub de updates em mocks, tanto seja criação, update, etc.

## Hierarquia

- **[controllers](./api/controllers)**: Ponte entre a lógica de negócios, serviços externos, e outros.
- **[logic](./api/logic)**: Lógica de negócio.
- **[ports](./api/ports)**: Declaração dos requests.

## Como rodar localmente

### REPL

Abra um servidor nrepl:

```bash
clj -M:back-dev:nrepl # dev
# clj -M:nrepl
```

Após aberto, conecte seu [editor](TODO) ao nrepl e rode o seguinte:

```clj
(in-ns 'yaml-generator.server)
(start-system-dev! (build-system-map))
```
