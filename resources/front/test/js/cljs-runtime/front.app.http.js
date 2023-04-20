goog.provide('front.app.http');
front.app.http.js__GT_cljs_key = (function front$app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
front.app.http.send_request_BANG_ = (function front$app$http$send_request_BANG_(p__53035,fn_request){
var map__53036 = p__53035;
var map__53036__$1 = cljs.core.__destructure_map(map__53036);
var request = map__53036__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53036__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53036__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53036__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__53037){
var map__53038 = p__53037;
var map__53038__$1 = cljs.core.__destructure_map(map__53038);
var resp = map__53038__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53038__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if((status > (400))){
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,front.app.http.js__GT_cljs_key(resp)));
} else {
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,front.app.http.js__GT_cljs_key(resp)));
}
})).catch((function (resp){
return refx.alpha.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,front.app.http.js__GT_cljs_key(resp)));
}));
});
front.app.http.http_effect = (function front$app$http$http_effect(fn_request){
return (function (request){
if(cljs.core.sequential_QMARK_(request)){
var seq__53039 = cljs.core.seq(request);
var chunk__53040 = null;
var count__53041 = (0);
var i__53042 = (0);
while(true){
if((i__53042 < count__53041)){
var req = chunk__53040.cljs$core$IIndexed$_nth$arity$2(null,i__53042);
front.app.http.send_request_BANG_(req,fn_request);


var G__53044 = seq__53039;
var G__53045 = chunk__53040;
var G__53046 = count__53041;
var G__53047 = (i__53042 + (1));
seq__53039 = G__53044;
chunk__53040 = G__53045;
count__53041 = G__53046;
i__53042 = G__53047;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53039);
if(temp__5804__auto__){
var seq__53039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53039__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53039__$1);
var G__53048 = cljs.core.chunk_rest(seq__53039__$1);
var G__53049 = c__5568__auto__;
var G__53050 = cljs.core.count(c__5568__auto__);
var G__53051 = (0);
seq__53039 = G__53048;
chunk__53040 = G__53049;
count__53041 = G__53050;
i__53042 = G__53051;
continue;
} else {
var req = cljs.core.first(seq__53039__$1);
front.app.http.send_request_BANG_(req,fn_request);


var G__53052 = cljs.core.next(seq__53039__$1);
var G__53053 = null;
var G__53054 = (0);
var G__53055 = (0);
seq__53039 = G__53052;
chunk__53040 = G__53053;
count__53041 = G__53054;
i__53042 = G__53055;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return front.app.http.send_request_BANG_(request,fn_request);
}
});
});
front.app.http.fetch_request_mock = (function front$app$http$fetch_request_mock(responses){
return (function (url,_request){
var map__53043 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__53043__$1 = cljs.core.__destructure_map(map__53043);
var response = map__53043__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53043__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = lag;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (100);
}
})(),response);
});
});
refx.alpha.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),front.app.http.http_effect(lambdaisland.fetch.request));

//# sourceMappingURL=front.app.http.js.map
