goog.provide('front.dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
front.dev.msw.mount.resolve_body_fn = (function front$dev$msw$mount$resolve_body_fn(p__33596,args){
var map__33597 = p__33596;
var map__33597__$1 = cljs.core.__destructure_map(map__33597);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33597__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
front.dev.msw.mount.resolve_body_map = (function front$dev$msw$mount$resolve_body_map(p__33598,p__33599){
var map__33600 = p__33598;
var map__33600__$1 = cljs.core.__destructure_map(map__33600);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33600__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33600__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33600__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33600__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__33601 = p__33599;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(2),null);
var G__33606 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__33607 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__33608 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__33606,G__33607,G__33608) : res.call(null,G__33606,G__33607,G__33608));
});
front.dev.msw.mount.resolve_body = (function front$dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return front.dev.msw.mount.resolve_body_fn(options,args);
} else {
return front.dev.msw.mount.resolve_body_map(options,args);
}
});
front.dev.msw.mount.mount = (function front$dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33615){
var vec__33617 = p__33615;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(1),null);
var vec__33621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__33629__delegate = function (args){
return front.dev.msw.mount.resolve_body(options,args);
};
var G__33629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33630__i = 0, G__33630__a = new Array(arguments.length -  0);
while (G__33630__i < G__33630__a.length) {G__33630__a[G__33630__i] = arguments[G__33630__i + 0]; ++G__33630__i;}
  args = new cljs.core.IndexedSeq(G__33630__a,0,null);
} 
return G__33629__delegate.call(this,args);};
G__33629.cljs$lang$maxFixedArity = 0;
G__33629.cljs$lang$applyTo = (function (arglist__33631){
var args = cljs.core.seq(arglist__33631);
return G__33629__delegate(args);
});
G__33629.cljs$core$IFn$_invoke$arity$variadic = G__33629__delegate;
return G__33629;
})()
);
}),mock_map);
});

//# sourceMappingURL=front.dev.msw.mount.js.map
