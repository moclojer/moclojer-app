# Auth
The auth using WORKOS is divided in two steps, **email send** and **code validation** via redirect.

## Email Send

### POST on `/login/send-email`
```clojure
{:body {:email "string"}}
```

### Result OK
```clojure
{:status 201
 :content-type :json
 :body {:ok true}}
```

### Result Not OK
```clojure
{:status 500
 :content-type :json
 :body {:message "string"}}
```

## Code Validation

### POST on `/login/auth`
```clojure
{:body {:code "string"}}
```

### Result OK
```clojure
{:status 201
 :content-type :json
 :body {:profile {:email "string"
                  :name "string"}
        :token "string"
        :expires_in int}}
```

### Result Not OK
```clojure
{:status 401
 :content-type :json
 :body {:message "string"}}
```
