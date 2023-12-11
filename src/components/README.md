# Components

A lib [com.stuartsierra/components](https://github.com/stuartsierra/component) traz uma framework que procura tratar do lifecycle e gerenciar estado em aplicações que os têm.

No caso do Moclojer, temos os seguintes componentes, em ordem de injeção de dependência:

- **[logs](./logs.clj)**
- **[config](./config.clj)**
- **[http](./http.clj)**: Interceptor de requests.
- **[router](./router.clj)**
- **[database](./database.clj)**: Conexão, Datasource, etc.
- **[publisher](./redis_publisher.clj)**: Publisher do redis.
- **[workers](./redis_workers.clj)**: Workers do redis.
- **[webserver](./webserver.clj)**

Todos esses componentes são utilizados pelos serviços de [Backend](../back/README.md) e de [Yaml Generator](../yaml_generator/README.md), exceto pelo componente de workers, que está presente somente no Yaml Generator.

Caso queira saber mais sobre a lib components do stuartsierra, assista essa talk: https://www.youtube.com/watch?v=13cmHf_kt-Q.
