goog.provide('dev.msw.core');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.core.ss_key = "mock-active?";
if((typeof dev !== 'undefined') && (typeof dev.msw !== 'undefined') && (typeof dev.msw.core !== 'undefined') && (typeof dev.msw.core.mock_state !== 'undefined')){
} else {
dev.msw.core.mock_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
dev.msw.core.start_browser = (function dev$msw$core$start_browser(handlers){
if((cljs.core.deref(dev.msw.core.mock_state) == null)){
} else {
cljs.core.deref(dev.msw.core.mock_state).resetHandlers();
}

cljs.core.reset_BANG_(dev.msw.core.mock_state,handlers);

return cljs.core.deref(dev.msw.core.mock_state).start(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onUnhandledRequest","onUnhandledRequest",375972856),"bypass"], null))).then((function (){
return dev.session_storage.set_item_BANG_(dev.msw.core.ss_key,true);
})).catch((function (p1__33316_SHARP_){
return console.log(p1__33316_SHARP_);
}));
});
dev.msw.core.stop_browser = (function dev$msw$core$stop_browser(){
cljs.core.deref(dev.msw.core.mock_state).stop();

cljs.core.reset_BANG_(dev.msw.core.mock_state,null);

return dev.session_storage.remove_item_BANG_(dev.msw.core.ss_key);
});
dev.msw.core.start_BANG_ = (function dev$msw$core$start_BANG_(var_args){
var G__33321 = arguments.length;
switch (G__33321) {
case 0:
return dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(dev.msw.config.default$);
}));

(dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (custom_config){
return dev.msw.core.start_browser(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$msw$lib$index.setupWorker,dev.msw.mount.mount(custom_config)));
}));

(dev.msw.core.start_BANG_.cljs$lang$maxFixedArity = 1);

dev.msw.core.stop_BANG_ = (function dev$msw$core$stop_BANG_(){
return dev.msw.core.stop_browser();
});
dev.msw.core.init_BANG_ = (function dev$msw$core$init_BANG_(){
if(cljs.core.truth_(dev.session_storage.get_item(dev.msw.core.ss_key))){
return dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return Promise.resolve();
}
});

//# sourceMappingURL=dev.msw.core.js.map
