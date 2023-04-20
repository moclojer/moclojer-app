goog.provide('front.app.http');
front.app.http.js__GT_cljs_key = (function front$app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
front.app.http.send_request_BANG_ = (function front$app$http$send_request_BANG_(p__32776,fn_request){
var map__32777 = p__32776;
var map__32777__$1 = cljs.core.__destructure_map(map__32777);
var request = map__32777__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__32778){
var map__32779 = p__32778;
var map__32779__$1 = cljs.core.__destructure_map(map__32779);
var resp = map__32779__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__32780 = cljs.core.seq(request);
var chunk__32781 = null;
var count__32782 = (0);
var i__32783 = (0);
while(true){
if((i__32783 < count__32782)){
var req = chunk__32781.cljs$core$IIndexed$_nth$arity$2(null,i__32783);
front.app.http.send_request_BANG_(req,fn_request);


var G__32803 = seq__32780;
var G__32804 = chunk__32781;
var G__32805 = count__32782;
var G__32806 = (i__32783 + (1));
seq__32780 = G__32803;
chunk__32781 = G__32804;
count__32782 = G__32805;
i__32783 = G__32806;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32780);
if(temp__5804__auto__){
var seq__32780__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32780__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32780__$1);
var G__32808 = cljs.core.chunk_rest(seq__32780__$1);
var G__32809 = c__5568__auto__;
var G__32810 = cljs.core.count(c__5568__auto__);
var G__32811 = (0);
seq__32780 = G__32808;
chunk__32781 = G__32809;
count__32782 = G__32810;
i__32783 = G__32811;
continue;
} else {
var req = cljs.core.first(seq__32780__$1);
front.app.http.send_request_BANG_(req,fn_request);


var G__32812 = cljs.core.next(seq__32780__$1);
var G__32813 = null;
var G__32814 = (0);
var G__32815 = (0);
seq__32780 = G__32812;
chunk__32781 = G__32813;
count__32782 = G__32814;
i__32783 = G__32815;
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
var map__32793 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__32793__$1 = cljs.core.__destructure_map(map__32793);
var response = map__32793__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
