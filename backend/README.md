# Backend 


run  `clj -M:nrepl` to run a repl o this project
go to server.clj namespace and run

```clojure

(comment
  (stop-system!)
  (start-system! (build-system-map)))
```
then open `http://0.0.0.0:3001/index.html` to see the swagger

run `clojure -X:uberjar` to build the jar

- [ ] need to add test
- [ ] need to add database component with postgres
