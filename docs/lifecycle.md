
# Lifecycle
Neste arquivo, trataremos do lifecycle presente durante o runtime do projeto. Vale ressaltar que nosso projeto se baseia no [Component](https://github.com/stuartsierra/component/tree/master?tab=readme-ov-file#usage), uma framework responsável por facilitar o gerenciamento de componentes com `estados definidos`. Para entender melhor, considere assistir o próprio criador descrevendo a framework [[clique aqui](https://www.youtube.com/watch?v=13cmHf_kt-Q.)] ou acesse o repositório oficial.

> Os componentes utilizados no Moclojer estão definidos no repositório [`components`](https://github.com/moclojer/components/blob/main/README.md).

# State Wrapper

Os componentes são definidos como `records (maps)`, ou seja, são estruturas imutáveis que implementam 2 funções pré-definidas: 
- start -> só retorna um valor quando todo o processo interno for finalizado
- stop -> só retorna um valor quando todo o processo interno for finalizado

``` clojure
(defrecord Database [host port connection]
  component/Lifecycle
  (start [this]
    (println "starting database")
    (let [conn (connect-to-database host port)]
      (assoc this :connection conn)))

  (stop [this]
    (println ";; Stopping database")
    (.close connection)
    (assoc this :connection nil)))
```

Esta estrutura tem o nome de `State Wrapper`. Esta estrutura tem por característica "encapsular" os estados que ela guarda, assim sendo, todos os `consumers` não terão acesso direto a estes dados, apenas ao record em si.

Então, de que maneira poderíamos acessar estes dados? 

# Providers
Os `providers` são uma API pública que utilizam o componente que nós definimos anteriormente. Elas podem, particularmente, utilizar o *estado interno* do componente.

``` clojure
;; vejamos um exemplo de acesso
(defn get-user [db username]
    (execute-query (:conn db) 
    "SELECT * FROM users WHERE id = ?;"
    username)) ;; podemos acessar o conn que setamos via start e fazer o que quisermos com ele
```

# Constructors
Podemos, também, separar uma função responsável por inserir os valores em um componente e retornar um map
```clj
(defn new-database [host port]
  (map->Database {:host host :port port}))
```
> NÃO insira dependências em um construtor

# Dependency
As dependências, neste pattern, são cunhadas de `Associative Dependency`. Este termo representa que, durante a eval de componente, você pode inserir funções de outros componentes e tê-las como uma dependência associada no código. Vejamos:

``` clj
(defrecord Example [options database]
  component/Lifecycle
  ;; função get-user retorna um o resultado de uma query com o usuário admin como parâmetro
  ;; desta forma, a função start só será concluída quando a dependência do admin for resolvida
  (start [this]
    (println "starting Example")
    (assoc this :admin (get-user database "admin"))) 
```

# System
Os `systems` são responsáveis por alinhar a ordem de injeção de dependência de um sistema e nele podemos inserir diversos outros componentes. Vejamos o exemplo:
```clj
(defn example-system [config-options]
  (let [{:keys [host port]} config-options]
    (component/system-map
      :db (new-database host port)
      :scheduler (new-scheduler)
      :app (component/using
             (example-component config-options)
             {:database  :db ;; db setado previamente
              }))))
```

para definir que um componente precisa de outro, usamos a função `component/using` e enviamos um componente e suas subsequentes deps. 

```clj 
    ;; Se o nome for igual em ambos os componentes, ao invés de:
    {:database :db}
    ;;; podemos passar 
    [:database]
```

---
# Inicializando 

Você deve associar as dependências antes de rodar o start.
``` clj
(-> example-component
    (assoc :database (:db system))
    ; (assoc :config (:conig system)) 
    ;; [...])
    (start))
```

após associar todas as deps, você pode startar o seu programa utilizando da função `component/start`.

``` clj
(defn main [] (component/start (new-build-system)))
```
## Imutabilidade e escopo de um componente
Vale destacar que como um record é completamente imutável, você só poderá utilizar um map com estado alterado fora do escopo em que ele está sendo alterado, ou seja, apenas após o retorno.

```clj
(start [this]
  ;; o componente utilizado por (do-something) será diferente do que está fora deste escopo
  (do-something (assoc this :hello true)) 
  (assoc this :hello false))

(start [this]
  ;; neste caso, my-this guarda o retorno de this dentro do escopo do let
  (let [my-this (assoc this :hello true)]
    (do-something my-this)
    my-this))
```

