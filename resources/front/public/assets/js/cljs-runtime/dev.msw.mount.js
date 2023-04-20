goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__25103,args){
var map__25104 = p__25103;
var map__25104__$1 = cljs.core.__destructure_map(map__25104);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25104__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__25105,p__25106){
var map__25107 = p__25105;
var map__25107__$1 = cljs.core.__destructure_map(map__25107);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25107__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__25108 = p__25106;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25108,(2),null);
var G__25111 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__25112 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__25113 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__25111,G__25112,G__25113) : res.call(null,G__25111,G__25112,G__25113));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__25114){
var vec__25115 = p__25114;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25115,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25115,(1),null);
var vec__25118 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__25122__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__25122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25123__i = 0, G__25123__a = new Array(arguments.length -  0);
while (G__25123__i < G__25123__a.length) {G__25123__a[G__25123__i] = arguments[G__25123__i + 0]; ++G__25123__i;}
  args = new cljs.core.IndexedSeq(G__25123__a,0,null);
} 
return G__25122__delegate.call(this,args);};
G__25122.cljs$lang$maxFixedArity = 0;
G__25122.cljs$lang$applyTo = (function (arglist__25124){
var args = cljs.core.seq(arglist__25124);
return G__25122__delegate(args);
});
G__25122.cljs$core$IFn$_invoke$arity$variadic = G__25122__delegate;
return G__25122;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
