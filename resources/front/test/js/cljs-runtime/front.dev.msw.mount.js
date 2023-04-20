goog.provide('front.dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
front.dev.msw.mount.resolve_body_fn = (function front$dev$msw$mount$resolve_body_fn(p__54159,args){
var map__54160 = p__54159;
var map__54160__$1 = cljs.core.__destructure_map(map__54160);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54160__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
front.dev.msw.mount.resolve_body_map = (function front$dev$msw$mount$resolve_body_map(p__54163,p__54164){
var map__54165 = p__54163;
var map__54165__$1 = cljs.core.__destructure_map(map__54165);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54165__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__54166 = p__54164;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54166,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54166,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54166,(2),null);
var G__54169 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__54170 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__54171 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__54169,G__54170,G__54171) : res.call(null,G__54169,G__54170,G__54171));
});
front.dev.msw.mount.resolve_body = (function front$dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return front.dev.msw.mount.resolve_body_fn(options,args);
} else {
return front.dev.msw.mount.resolve_body_map(options,args);
}
});
front.dev.msw.mount.mount = (function front$dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54176){
var vec__54177 = p__54176;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54177,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54177,(1),null);
var vec__54180 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54180,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54180,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__54184__delegate = function (args){
return front.dev.msw.mount.resolve_body(options,args);
};
var G__54184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54185__i = 0, G__54185__a = new Array(arguments.length -  0);
while (G__54185__i < G__54185__a.length) {G__54185__a[G__54185__i] = arguments[G__54185__i + 0]; ++G__54185__i;}
  args = new cljs.core.IndexedSeq(G__54185__a,0,null);
} 
return G__54184__delegate.call(this,args);};
G__54184.cljs$lang$maxFixedArity = 0;
G__54184.cljs$lang$applyTo = (function (arglist__54186){
var args = cljs.core.seq(arglist__54186);
return G__54184__delegate(args);
});
G__54184.cljs$core$IFn$_invoke$arity$variadic = G__54184__delegate;
return G__54184;
})()
);
}),mock_map);
});

//# sourceMappingURL=front.dev.msw.mount.js.map
