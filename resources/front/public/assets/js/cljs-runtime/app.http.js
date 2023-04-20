goog.provide('app.http');
app.http.js__GT_cljs_key = (function app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
app.http.send_request_BANG_ = (function app$http$send_request_BANG_(p__21561,fn_request){
var map__21569 = p__21561;
var map__21569__$1 = cljs.core.__destructure_map(map__21569);
var request = map__21569__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21569__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__21580){
var map__21581 = p__21580;
var map__21581__$1 = cljs.core.__destructure_map(map__21581);
var resp = map__21581__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21581__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__21601 = cljs.core.seq(request);
var chunk__21602 = null;
var count__21603 = (0);
var i__21604 = (0);
while(true){
if((i__21604 < count__21603)){
var req = chunk__21602.cljs$core$IIndexed$_nth$arity$2(null,i__21604);
app.http.send_request_BANG_(req,fn_request);


var G__21679 = seq__21601;
var G__21680 = chunk__21602;
var G__21681 = count__21603;
var G__21682 = (i__21604 + (1));
seq__21601 = G__21679;
chunk__21602 = G__21680;
count__21603 = G__21681;
i__21604 = G__21682;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21601);
if(temp__5804__auto__){
var seq__21601__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21601__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21601__$1);
var G__21685 = cljs.core.chunk_rest(seq__21601__$1);
var G__21686 = c__5568__auto__;
var G__21687 = cljs.core.count(c__5568__auto__);
var G__21688 = (0);
seq__21601 = G__21685;
chunk__21602 = G__21686;
count__21603 = G__21687;
i__21604 = G__21688;
continue;
} else {
var req = cljs.core.first(seq__21601__$1);
app.http.send_request_BANG_(req,fn_request);


var G__21692 = cljs.core.next(seq__21601__$1);
var G__21693 = null;
var G__21694 = (0);
var G__21695 = (0);
seq__21601 = G__21692;
chunk__21602 = G__21693;
count__21603 = G__21694;
i__21604 = G__21695;
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
var map__21634 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__21634__$1 = cljs.core.__destructure_map(map__21634);
var response = map__21634__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21634__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
