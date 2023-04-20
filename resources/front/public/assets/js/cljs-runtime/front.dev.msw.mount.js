goog.provide('front.dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
front.dev.msw.mount.resolve_body_fn = (function front$dev$msw$mount$resolve_body_fn(p__46342,args){
var map__46343 = p__46342;
var map__46343__$1 = cljs.core.__destructure_map(map__46343);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46343__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
front.dev.msw.mount.resolve_body_map = (function front$dev$msw$mount$resolve_body_map(p__46344,p__46345){
var map__46346 = p__46344;
var map__46346__$1 = cljs.core.__destructure_map(map__46346);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46346__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46346__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46346__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46346__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__46347 = p__46345;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46347,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46347,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46347,(2),null);
var G__46350 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__46351 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__46352 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__46350,G__46351,G__46352) : res.call(null,G__46350,G__46351,G__46352));
});
front.dev.msw.mount.resolve_body = (function front$dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return front.dev.msw.mount.resolve_body_fn(options,args);
} else {
return front.dev.msw.mount.resolve_body_map(options,args);
}
});
front.dev.msw.mount.mount = (function front$dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46368){
var vec__46369 = p__46368;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46369,(1),null);
var vec__46372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46372,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46372,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__46396__delegate = function (args){
return front.dev.msw.mount.resolve_body(options,args);
};
var G__46396 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46397__i = 0, G__46397__a = new Array(arguments.length -  0);
while (G__46397__i < G__46397__a.length) {G__46397__a[G__46397__i] = arguments[G__46397__i + 0]; ++G__46397__i;}
  args = new cljs.core.IndexedSeq(G__46397__a,0,null);
} 
return G__46396__delegate.call(this,args);};
G__46396.cljs$lang$maxFixedArity = 0;
G__46396.cljs$lang$applyTo = (function (arglist__46398){
var args = cljs.core.seq(arglist__46398);
return G__46396__delegate(args);
});
G__46396.cljs$core$IFn$_invoke$arity$variadic = G__46396__delegate;
return G__46396;
})()
);
}),mock_map);
});

//# sourceMappingURL=front.dev.msw.mount.js.map
