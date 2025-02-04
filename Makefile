# Requirements
# ------------------------------------------

# .PHONY: ensures target used rather than matching file name
# https://makefiletutorial.com/#phony
.PHONY: deps

deps: deps.edn  ## Prepare dependencies for test and dist targets
	$(info --------- Download test and service libraries ---------)
	clojure -P -X:build

# to build the yml service
dist-yml: build-uberjar-yml ## Build and package Clojure service
	$(info --------- Build and Package Clojure service ---------)

build-uberjar-yml: ## Build a uberjar archive of Clojure project & Clojure runtime
	$(info --------- Build service Uberjar  ---------)
	clojure -T:build uberjar :uber-file yaml-service

# to build the api service
dist-api: build-uberjar-api ## Build and package Clojure service
	$(info --------- Build and Package Clojure service ---------)

build-uberjar-api: ## Build a uberjar archive of Clojure project & Clojure runtime
	$(info --------- Build service Uberjar  ---------)
	clojure -T:build uberjar :uber-file api

dist-cloud-ops: build-uberjar-cloud-ops
	$(info --------- Build and Package Clojure service ---------)

build-uberjar-cloud-ops:
	$(info --------- Build service Uberjar  ---------)
	clojure -T:build uberjar :uber-file cloud-ops

dist-job-ops: build-uberjar-job-ops
	$(info --------- Build and Package Clojure service ---------)

build-uberjar-job-ops:
	$(info --------- Build service Uberjar  ---------)
	clojure -T:build uberjar :uber-file job-ops
