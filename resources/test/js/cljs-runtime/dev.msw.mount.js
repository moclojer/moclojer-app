goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__33275,args){
var map__33277 = p__33275;
var map__33277__$1 = cljs.core.__destructure_map(map__33277);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33277__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__33278,p__33279){
var map__33280 = p__33278;
var map__33280__$1 = cljs.core.__destructure_map(map__33280);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__33281 = p__33279;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33281,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33281,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33281,(2),null);
var G__33288 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__33289 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__33290 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__33288,G__33289,G__33290) : res.call(null,G__33288,G__33289,G__33290));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33302){
var vec__33303 = p__33302;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(1),null);
var vec__33306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__33312__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__33312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33313__i = 0, G__33313__a = new Array(arguments.length -  0);
while (G__33313__i < G__33313__a.length) {G__33313__a[G__33313__i] = arguments[G__33313__i + 0]; ++G__33313__i;}
  args = new cljs.core.IndexedSeq(G__33313__a,0,null);
} 
return G__33312__delegate.call(this,args);};
G__33312.cljs$lang$maxFixedArity = 0;
G__33312.cljs$lang$applyTo = (function (arglist__33314){
var args = cljs.core.seq(arglist__33314);
return G__33312__delegate(args);
});
G__33312.cljs$core$IFn$_invoke$arity$variadic = G__33312__delegate;
return G__33312;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
