goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__60416,args){
var map__60417 = p__60416;
var map__60417__$1 = cljs.core.__destructure_map(map__60417);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60417__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__60418,p__60419){
var map__60420 = p__60418;
var map__60420__$1 = cljs.core.__destructure_map(map__60420);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60420__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__60421 = p__60419;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60421,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60421,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60421,(2),null);
var G__60424 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__60425 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__60426 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__60424,G__60425,G__60426) : res.call(null,G__60424,G__60425,G__60426));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60427){
var vec__60428 = p__60427;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(1),null);
var vec__60431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__60434__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__60434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60435__i = 0, G__60435__a = new Array(arguments.length -  0);
while (G__60435__i < G__60435__a.length) {G__60435__a[G__60435__i] = arguments[G__60435__i + 0]; ++G__60435__i;}
  args = new cljs.core.IndexedSeq(G__60435__a,0,null);
} 
return G__60434__delegate.call(this,args);};
G__60434.cljs$lang$maxFixedArity = 0;
G__60434.cljs$lang$applyTo = (function (arglist__60436){
var args = cljs.core.seq(arglist__60436);
return G__60434__delegate(args);
});
G__60434.cljs$core$IFn$_invoke$arity$variadic = G__60434__delegate;
return G__60434;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
