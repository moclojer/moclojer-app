goog.provide('front.dev.msw.core');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
front.dev.msw.core.ss_key = "mock-active?";
if((typeof front !== 'undefined') && (typeof front.dev !== 'undefined') && (typeof front.dev.msw !== 'undefined') && (typeof front.dev.msw.core !== 'undefined') && (typeof front.dev.msw.core.mock_state !== 'undefined')){
} else {
front.dev.msw.core.mock_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
front.dev.msw.core.start_browser = (function front$dev$msw$core$start_browser(handlers){
if((cljs.core.deref(front.dev.msw.core.mock_state) == null)){
} else {
cljs.core.deref(front.dev.msw.core.mock_state).resetHandlers();
}

cljs.core.reset_BANG_(front.dev.msw.core.mock_state,handlers);

return cljs.core.deref(front.dev.msw.core.mock_state).start(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onUnhandledRequest","onUnhandledRequest",375972856),"bypass"], null))).then((function (){
return front.dev.session_storage.set_item_BANG_(front.dev.msw.core.ss_key,true);
})).catch((function (p1__33633_SHARP_){
return console.log(p1__33633_SHARP_);
}));
});
front.dev.msw.core.stop_browser = (function front$dev$msw$core$stop_browser(){
cljs.core.deref(front.dev.msw.core.mock_state).stop();

cljs.core.reset_BANG_(front.dev.msw.core.mock_state,null);

return front.dev.session_storage.remove_item_BANG_(front.dev.msw.core.ss_key);
});
front.dev.msw.core.start_BANG_ = (function front$dev$msw$core$start_BANG_(var_args){
var G__33636 = arguments.length;
switch (G__33636) {
case 0:
return front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1(front.dev.msw.config.default$);
}));

(front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (custom_config){
return front.dev.msw.core.start_browser(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$msw$lib$index.setupWorker,front.dev.msw.mount.mount(custom_config)));
}));

(front.dev.msw.core.start_BANG_.cljs$lang$maxFixedArity = 1);

front.dev.msw.core.stop_BANG_ = (function front$dev$msw$core$stop_BANG_(){
return front.dev.msw.core.stop_browser();
});
front.dev.msw.core.init_BANG_ = (function front$dev$msw$core$init_BANG_(){
if(cljs.core.truth_(front.dev.session_storage.get_item(front.dev.msw.core.ss_key))){
return front.dev.msw.core.start_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return Promise.resolve();
}
});

//# sourceMappingURL=front.dev.msw.core.js.map
