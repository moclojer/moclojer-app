goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__31402,args){
var map__31403 = p__31402;
var map__31403__$1 = cljs.core.__destructure_map(map__31403);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__31404,p__31405){
var map__31406 = p__31404;
var map__31406__$1 = cljs.core.__destructure_map(map__31406);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31406__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__31407 = p__31405;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31407,(2),null);
var G__31410 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__31411 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__31412 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__31410,G__31411,G__31412) : res.call(null,G__31410,G__31411,G__31412));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31428){
var vec__31429 = p__31428;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31429,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31429,(1),null);
var vec__31432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31432,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__31435__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__31435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31436__i = 0, G__31436__a = new Array(arguments.length -  0);
while (G__31436__i < G__31436__a.length) {G__31436__a[G__31436__i] = arguments[G__31436__i + 0]; ++G__31436__i;}
  args = new cljs.core.IndexedSeq(G__31436__a,0,null);
} 
return G__31435__delegate.call(this,args);};
G__31435.cljs$lang$maxFixedArity = 0;
G__31435.cljs$lang$applyTo = (function (arglist__31437){
var args = cljs.core.seq(arglist__31437);
return G__31435__delegate(args);
});
G__31435.cljs$core$IFn$_invoke$arity$variadic = G__31435__delegate;
return G__31435;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
