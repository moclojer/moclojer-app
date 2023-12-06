# Testes

## Back & Yaml Generator

Existem tanto testes unitários quanto de integração, e você pode rodá-los da seguinte maneira:

```bash
clj -M:test :unit # unitários
clj -M:test :integration # integração
```

Por enquanto, estes testes cobrem tanto o serviço de Backend quanto o Yaml Generator.

## Front

Para rodar os testes de Frontend, basta rodar:

```bash
npm run ci:tests
```
