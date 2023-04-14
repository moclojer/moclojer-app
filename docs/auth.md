# Auth

The auth using WORKOS is divided in two steps, **email send** and **code validation** via redirect in the frontend url `http://localhost:8000/#/login/auth?code=<string>`.

## Email Send

### POST on `/login/send-email`

```clj
{:body {:email "string"}}
```

### Result OK

```clj
{:status 201
 :content-type :json
 :body {:ok true}}
```

### Result Not OK

```clj
{:status 500
 :content-type :json
 :body {:message "string"}}
```

## Code Validation

### POST on `/login/auth`

```clj
{:body {:code "string"}}
```

### Result OK

```clj
{:status 201
 :content-type :json
 :body {:profile {:email "string"
                  :name "string"}
        :token "string"
        :expires_in int}}
```

### Result Not OK

```clj
{:status 401
 :content-type :json
 :body {:message "string"}}
```
