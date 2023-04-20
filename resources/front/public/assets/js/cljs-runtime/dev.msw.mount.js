goog.provide('dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
dev.msw.mount.resolve_body_fn = (function dev$msw$mount$resolve_body_fn(p__60513,args){
var map__60514 = p__60513;
var map__60514__$1 = cljs.core.__destructure_map(map__60514);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60514__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
dev.msw.mount.resolve_body_map = (function dev$msw$mount$resolve_body_map(p__60515,p__60516){
var map__60517 = p__60515;
var map__60517__$1 = cljs.core.__destructure_map(map__60517);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60517__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60517__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60517__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60517__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__60518 = p__60516;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60518,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60518,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60518,(2),null);
var G__60521 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__60522 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__60523 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__60521,G__60522,G__60523) : res.call(null,G__60521,G__60522,G__60523));
});
dev.msw.mount.resolve_body = (function dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return dev.msw.mount.resolve_body_fn(options,args);
} else {
return dev.msw.mount.resolve_body_map(options,args);
}
});
dev.msw.mount.mount = (function dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60524){
var vec__60525 = p__60524;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60525,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60525,(1),null);
var vec__60528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60528,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60528,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__60531__delegate = function (args){
return dev.msw.mount.resolve_body(options,args);
};
var G__60531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60532__i = 0, G__60532__a = new Array(arguments.length -  0);
while (G__60532__i < G__60532__a.length) {G__60532__a[G__60532__i] = arguments[G__60532__i + 0]; ++G__60532__i;}
  args = new cljs.core.IndexedSeq(G__60532__a,0,null);
} 
return G__60531__delegate.call(this,args);};
G__60531.cljs$lang$maxFixedArity = 0;
G__60531.cljs$lang$applyTo = (function (arglist__60533){
var args = cljs.core.seq(arglist__60533);
return G__60531__delegate(args);
});
G__60531.cljs$core$IFn$_invoke$arity$variadic = G__60531__delegate;
return G__60531;
})()
);
}),mock_map);
});

//# sourceMappingURL=dev.msw.mount.js.map
