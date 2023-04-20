goog.provide('dev.msw.browser');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.browser.mock_key = "mock-active?";
dev.msw.browser.worker = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$msw$lib$index.setupWorker,dev.msw.handlers.handlers);
dev.msw.browser.start_worker_BANG_ = (function dev$msw$browser$start_worker_BANG_(){
return dev.msw.browser.worker.start(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onunhandledrequest","onunhandledrequest",-2028852112),"bypass"], null)));
});
dev.msw.browser.start_BANG_ = (function dev$msw$browser$start_BANG_(){
return dev.msw.browser.start_worker_BANG_().then((function (){
return dev.session_storage.set_item_BANG_(dev.msw.browser.mock_key,true);
}));
});
dev.msw.browser.stop_BANG_ = (function dev$msw$browser$stop_BANG_(){
dev.msw.browser.worker.stop();

return dev.session_storage.remove_item_BANG_(dev.msw.browser.mock_key);
});
dev.msw.browser.init_BANG_ = (function dev$msw$browser$init_BANG_(){
if(cljs.core.truth_(dev.session_storage.get_item(dev.msw.browser.mock_key))){
return dev.msw.browser.start_worker_BANG_();
} else {
return Promise.resolve();
}
});

//# sourceMappingURL=dev.msw.browser.js.map
