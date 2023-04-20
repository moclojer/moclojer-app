goog.provide('app.http');
app.http.js__GT_cljs_key = (function app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
app.http.send_request_BANG_ = (function app$http$send_request_BANG_(p__33262,fn_request){
var map__33264 = p__33262;
var map__33264__$1 = cljs.core.__destructure_map(map__33264);
var request = map__33264__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33264__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33264__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33264__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__33266){
var map__33267 = p__33266;
var map__33267__$1 = cljs.core.__destructure_map(map__33267);
var resp = map__33267__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33267__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((status > (400))){
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,app.http.js__GT_cljs_key(resp)));
} else {
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,app.http.js__GT_cljs_key(resp)));
}
})).catch((function (resp){
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,app.http.js__GT_cljs_key(resp)));
}));
});
app.http.http_effect = (function app$http$http_effect(fn_request){
return (function (request){
if(cljs.core.sequential_QMARK_(request)){
var seq__33274 = cljs.core.seq(request);
var chunk__33275 = null;
var count__33276 = (0);
var i__33277 = (0);
while(true){
if((i__33277 < count__33276)){
var req = chunk__33275.cljs$core$IIndexed$_nth$arity$2(null,i__33277);
app.http.send_request_BANG_(req,fn_request);


var G__33317 = seq__33274;
var G__33318 = chunk__33275;
var G__33319 = count__33276;
var G__33320 = (i__33277 + (1));
seq__33274 = G__33317;
chunk__33275 = G__33318;
count__33276 = G__33319;
i__33277 = G__33320;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33274);
if(temp__5804__auto__){
var seq__33274__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33274__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33274__$1);
var G__33321 = cljs.core.chunk_rest(seq__33274__$1);
var G__33322 = c__5568__auto__;
var G__33323 = cljs.core.count(c__5568__auto__);
var G__33324 = (0);
seq__33274 = G__33321;
chunk__33275 = G__33322;
count__33276 = G__33323;
i__33277 = G__33324;
continue;
} else {
var req = cljs.core.first(seq__33274__$1);
app.http.send_request_BANG_(req,fn_request);


var G__33325 = cljs.core.next(seq__33274__$1);
var G__33326 = null;
var G__33327 = (0);
var G__33328 = (0);
seq__33274 = G__33325;
chunk__33275 = G__33326;
count__33276 = G__33327;
i__33277 = G__33328;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return app.http.send_request_BANG_(request,fn_request);
}
});
});
app.http.fetch_request_mock = (function app$http$fetch_request_mock(responses){
return (function (url,_request){
var map__33292 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__33292__$1 = cljs.core.__destructure_map(map__33292);
var response = map__33292__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = lag;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (100);
}
})(),response);
});
});
refx.alpha.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),app.http.http_effect(lambdaisland.fetch.request));

//# sourceMappingURL=app.http.js.map
