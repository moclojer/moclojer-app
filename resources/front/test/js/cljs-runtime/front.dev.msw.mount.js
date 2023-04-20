goog.provide('front.dev.msw.mount');
var module$node_modules$msw$lib$index=shadow.js.require("module$node_modules$msw$lib$index", {});
front.dev.msw.mount.resolve_body_fn = (function front$dev$msw$mount$resolve_body_fn(p__59760,args){
var map__59762 = p__59760;
var map__59762__$1 = cljs.core.__destructure_map(map__59762);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(body,args);
});
front.dev.msw.mount.resolve_body_map = (function front$dev$msw$mount$resolve_body_map(p__59764,p__59765){
var map__59766 = p__59764;
var map__59766__$1 = cljs.core.__destructure_map(map__59766);
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var vec__59767 = p__59765;
var _req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59767,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59767,(1),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59767,(2),null);
var G__59770 = (cljs.core.truth_(lag)?ctx.delay(lag):null);
var G__59771 = (cljs.core.truth_(status)?ctx.status((function (){var or__5045__auto__ = status;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"200","200",123973690);
}
})()):null);
var G__59772 = (cljs.core.truth_(body)?(ctx[cljs.core.name(content_type)]).call(ctx,body):null);
return (res.cljs$core$IFn$_invoke$arity$3 ? res.cljs$core$IFn$_invoke$arity$3(G__59770,G__59771,G__59772) : res.call(null,G__59770,G__59771,G__59772));
});
front.dev.msw.mount.resolve_body = (function front$dev$msw$mount$resolve_body(options,args){
if(cljs.core.fn_QMARK_(options)){
return front.dev.msw.mount.resolve_body_fn(options,args);
} else {
return front.dev.msw.mount.resolve_body_map(options,args);
}
});
front.dev.msw.mount.mount = (function front$dev$msw$mount$mount(mock_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59785){
var vec__59786 = p__59785;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59786,(0),null);
var url_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59786,(1),null);
var vec__59789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,url_config);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(1),null);
var rest_method = (module$node_modules$msw$lib$index.rest[cljs.core.name(method)]);
return rest_method.call(module$node_modules$msw$lib$index.rest,url,(function() { 
var G__59792__delegate = function (args){
return front.dev.msw.mount.resolve_body(options,args);
};
var G__59792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59793__i = 0, G__59793__a = new Array(arguments.length -  0);
while (G__59793__i < G__59793__a.length) {G__59793__a[G__59793__i] = arguments[G__59793__i + 0]; ++G__59793__i;}
  args = new cljs.core.IndexedSeq(G__59793__a,0,null);
} 
return G__59792__delegate.call(this,args);};
G__59792.cljs$lang$maxFixedArity = 0;
G__59792.cljs$lang$applyTo = (function (arglist__59794){
var args = cljs.core.seq(arglist__59794);
return G__59792__delegate(args);
});
G__59792.cljs$core$IFn$_invoke$arity$variadic = G__59792__delegate;
return G__59792;
})()
);
}),mock_map);
});

//# sourceMappingURL=front.dev.msw.mount.js.map
