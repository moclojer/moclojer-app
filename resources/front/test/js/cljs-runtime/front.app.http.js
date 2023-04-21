goog.provide('front.app.http');
front.app.http.js__GT_cljs_key = (function front$app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
front.app.http.send_request_BANG_ = (function front$app$http$send_request_BANG_(p__62126,fn_request){
var map__62127 = p__62126;
var map__62127__$1 = cljs.core.__destructure_map(map__62127);
var request = map__62127__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62127__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__62128){
var map__62129 = p__62128;
var map__62129__$1 = cljs.core.__destructure_map(map__62129);
var resp = map__62129__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62129__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__62132 = cljs.core.seq(request);
var chunk__62133 = null;
var count__62134 = (0);
var i__62135 = (0);
while(true){
if((i__62135 < count__62134)){
var req = chunk__62133.cljs$core$IIndexed$_nth$arity$2(null,i__62135);
front.app.http.send_request_BANG_(req,fn_request);


var G__62181 = seq__62132;
var G__62182 = chunk__62133;
var G__62183 = count__62134;
var G__62184 = (i__62135 + (1));
seq__62132 = G__62181;
chunk__62133 = G__62182;
count__62134 = G__62183;
i__62135 = G__62184;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62132);
if(temp__5804__auto__){
var seq__62132__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62132__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62132__$1);
var G__62185 = cljs.core.chunk_rest(seq__62132__$1);
var G__62186 = c__5568__auto__;
var G__62187 = cljs.core.count(c__5568__auto__);
var G__62188 = (0);
seq__62132 = G__62185;
chunk__62133 = G__62186;
count__62134 = G__62187;
i__62135 = G__62188;
continue;
} else {
var req = cljs.core.first(seq__62132__$1);
front.app.http.send_request_BANG_(req,fn_request);


var G__62189 = cljs.core.next(seq__62132__$1);
var G__62190 = null;
var G__62191 = (0);
var G__62192 = (0);
seq__62132 = G__62189;
chunk__62133 = G__62190;
count__62134 = G__62191;
i__62135 = G__62192;
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
var map__62177 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__62177__$1 = cljs.core.__destructure_map(map__62177);
var response = map__62177__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62177__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
