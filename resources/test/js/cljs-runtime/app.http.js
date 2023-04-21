goog.provide('app.http');
app.http.js__GT_cljs_key = (function app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
app.http.send_request_BANG_ = (function app$http$send_request_BANG_(p__49804,fn_request){
var map__49805 = p__49804;
var map__49805__$1 = cljs.core.__destructure_map(map__49805);
var request = map__49805__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__49807){
var map__49808 = p__49807;
var map__49808__$1 = cljs.core.__destructure_map(map__49808);
var resp = map__49808__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49808__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__49813 = cljs.core.seq(request);
var chunk__49814 = null;
var count__49815 = (0);
var i__49816 = (0);
while(true){
if((i__49816 < count__49815)){
var req = chunk__49814.cljs$core$IIndexed$_nth$arity$2(null,i__49816);
app.http.send_request_BANG_(req,fn_request);


var G__49825 = seq__49813;
var G__49826 = chunk__49814;
var G__49827 = count__49815;
var G__49828 = (i__49816 + (1));
seq__49813 = G__49825;
chunk__49814 = G__49826;
count__49815 = G__49827;
i__49816 = G__49828;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49813);
if(temp__5804__auto__){
var seq__49813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49813__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49813__$1);
var G__49829 = cljs.core.chunk_rest(seq__49813__$1);
var G__49830 = c__5568__auto__;
var G__49831 = cljs.core.count(c__5568__auto__);
var G__49832 = (0);
seq__49813 = G__49829;
chunk__49814 = G__49830;
count__49815 = G__49831;
i__49816 = G__49832;
continue;
} else {
var req = cljs.core.first(seq__49813__$1);
app.http.send_request_BANG_(req,fn_request);


var G__49833 = cljs.core.next(seq__49813__$1);
var G__49834 = null;
var G__49835 = (0);
var G__49836 = (0);
seq__49813 = G__49833;
chunk__49814 = G__49834;
count__49815 = G__49835;
i__49816 = G__49836;
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
var map__49822 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__49822__$1 = cljs.core.__destructure_map(map__49822);
var response = map__49822__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
