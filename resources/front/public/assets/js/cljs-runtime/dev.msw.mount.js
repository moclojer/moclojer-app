goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__33510,args){
var map__33511 = p__33510;
var map__33511__$1 = cljs.core.__destructure_map(map__33511);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33511__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__33512,p__33513){
var map__33514 = p__33512;
var map__33514__$1 = cljs.core.__destructure_map(map__33514);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33514__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__33515 = p__33513;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(2),null);
var G__33518 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__33519 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__33520 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__33518,G__33519,G__33520) : res.call(null,G__33518,G__33519,G__33520));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33521){
var vec__33522 = p__33521;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(1),null);
var vec__33525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__33528__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__33528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33529__i = 0, G__33529__a = new Array(arguments.length -  0);
while (G__33529__i < G__33529__a.length) {G__33529__a[G__33529__i] = arguments[G__33529__i + 0]; ++G__33529__i;}
  args = new cljs.core.IndexedSeq(G__33529__a,0,null);
} 
return G__33528__delegate.call(this,args);};
G__33528.cljs$lang$maxFixedArity = 0;
G__33528.cljs$lang$applyTo = (function (arglist__33530){
var args = cljs.core.seq(arglist__33530);
return G__33528__delegate(args);
});
G__33528.cljs$core$IFn$_invoke$arity$variadic = G__33528__delegate;
return G__33528;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
