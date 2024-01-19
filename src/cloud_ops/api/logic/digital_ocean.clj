(ns cloud-ops.api.logic.digital-ocean)

(defn domain-already-exists?
  "Checks if given `new-domain` is already in the spec `domains`."
  [domains new-domain]
  (-> #(= (:domain %) new-domain)
      (filter domains)
      seq))

(defn add-domain-to-spec
  "Appends the `new-domain` to the `spec` domain list if the `new-domain`
   isn't there already. In this case, returns `nil`."
  [spec new-domain]
  (let [domains (:domains spec)
        new-domain-url (str new-domain ".moclojer.com")
        domain-exists? (domain-already-exists? domains new-domain-url)]
    (if-not domain-exists?
      (let [new-domain-spec {:type "ALIAS" :domain new-domain-url}
            new-domains (conj domains new-domain-spec)]
        (assoc spec :domains new-domains))
      (throw (ex-info "domain already exists"
                      {:provider "digital ocean"
                       :domain new-domain})))))

(comment

  "this is what a spec might look like"

  {:features ["buildpack-stack=ubuntu-22"],
   :ingress
   {:rules
    [{:component {:name "moclojer-cloud"},
      :match {:path {:prefix "/"}}}]},
   :domains
   [{:type "PRIMARY", :domain "test2-chico.moclojer.com"}
    {:type "ALIAS", :domain "test-45-j0suetm.moclojer.com"}
    {:type "ALIAS", :domain "teste-j0suetm.moclojer.com"}
    {:type "ALIAS", :domain "teste-123.moclojer.com"}],
   :name "moclojer-app-cloud",
   :region "nyc",
   :alerts [{:rule "DEPLOYMENT_FAILED"} {:rule "DOMAIN_FAILED"}],
   :services
   [{:http_port 8000,
     :github
     {:repo "moclojer/moclojer-cloud",
      :deploy_on_push true,
      :branch "main"},
     :dockerfile_path "Dockerfile",
     :name "moclojer-cloud",
     :instance_size_slug "professional-xs",
     :envs
     [{:key "AWS_ACCESS_KEY_ID",
       :value "foo",
       :scope "RUN_TIME"}
      {:key "AWS_SECRET_ACCESS_KEY",
       :value "bar",
       :scope "RUN_TIME"}
      {:key "REDIS_URL",
       :value "foobar",
       :scope "RUN_TIME"}
      {:key "PROFILE", :value "prod", :scope "RUN_TIME"}],
     :source_dir "/",
     :instance_count 1}]})
