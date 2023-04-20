goog.provide('front.app.http');
front.app.http.js__GT_cljs_key = (function front$app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
front.app.http.send_request_BANG_ = (function front$app$http$send_request_BANG_(p__25670,fn_request){
var map__25671 = p__25670;
var map__25671__$1 = cljs.core.__destructure_map(map__25671);
var request = map__25671__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25671__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25671__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25671__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__25674){
var map__25675 = p__25674;
var map__25675__$1 = cljs.core.__destructure_map(map__25675);
var resp = map__25675__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25675__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__25686 = cljs.core.seq(request);
var chunk__25687 = null;
var count__25688 = (0);
var i__25689 = (0);
while(true){
if((i__25689 < count__25688)){
var req = chunk__25687.cljs$core$IIndexed$_nth$arity$2(null,i__25689);
front.app.http.send_request_BANG_(req,fn_request);


var G__25730 = seq__25686;
var G__25731 = chunk__25687;
var G__25732 = count__25688;
var G__25733 = (i__25689 + (1));
seq__25686 = G__25730;
chunk__25687 = G__25731;
count__25688 = G__25732;
i__25689 = G__25733;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25686);
if(temp__5804__auto__){
var seq__25686__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25686__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25686__$1);
var G__25735 = cljs.core.chunk_rest(seq__25686__$1);
var G__25736 = c__5568__auto__;
var G__25737 = cljs.core.count(c__5568__auto__);
var G__25738 = (0);
seq__25686 = G__25735;
chunk__25687 = G__25736;
count__25688 = G__25737;
i__25689 = G__25738;
continue;
} else {
var req = cljs.core.first(seq__25686__$1);
front.app.http.send_request_BANG_(req,fn_request);


var G__25742 = cljs.core.next(seq__25686__$1);
var G__25743 = null;
var G__25744 = (0);
var G__25745 = (0);
seq__25686 = G__25742;
chunk__25687 = G__25743;
count__25688 = G__25744;
i__25689 = G__25745;
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
var map__25711 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__25711__$1 = cljs.core.__destructure_map(map__25711);
var response = map__25711__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25711__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
