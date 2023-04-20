goog.provide('front.app.http');
front.app.http.js__GT_cljs_key = (function front$app$http$js__GT_cljs_key(obj){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
front.app.http.send_request_BANG_ = (function front$app$http$send_request_BANG_(p__58606,fn_request){
var map__58608 = p__58606;
var map__58608__$1 = cljs.core.__destructure_map(map__58608);
var request = map__58608__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58608__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return (fn_request.cljs$core$IFn$_invoke$arity$2 ? fn_request.cljs$core$IFn$_invoke$arity$2(url,request) : fn_request.call(null,url,request)).then((function (p__58609){
var map__58610 = p__58609;
var map__58610__$1 = cljs.core.__destructure_map(map__58610);
var resp = map__58610__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58610__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
var seq__58611 = cljs.core.seq(request);
var chunk__58612 = null;
var count__58613 = (0);
var i__58614 = (0);
while(true){
if((i__58614 < count__58613)){
var req = chunk__58612.cljs$core$IIndexed$_nth$arity$2(null,i__58614);
front.app.http.send_request_BANG_(req,fn_request);


var G__58624 = seq__58611;
var G__58625 = chunk__58612;
var G__58626 = count__58613;
var G__58627 = (i__58614 + (1));
seq__58611 = G__58624;
chunk__58612 = G__58625;
count__58613 = G__58626;
i__58614 = G__58627;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58611);
if(temp__5804__auto__){
var seq__58611__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58611__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58611__$1);
var G__58628 = cljs.core.chunk_rest(seq__58611__$1);
var G__58629 = c__5568__auto__;
var G__58630 = cljs.core.count(c__5568__auto__);
var G__58631 = (0);
seq__58611 = G__58628;
chunk__58612 = G__58629;
count__58613 = G__58630;
i__58614 = G__58631;
continue;
} else {
var req = cljs.core.first(seq__58611__$1);
front.app.http.send_request_BANG_(req,fn_request);


var G__58632 = cljs.core.next(seq__58611__$1);
var G__58633 = null;
var G__58634 = (0);
var G__58635 = (0);
seq__58611 = G__58632;
chunk__58612 = G__58633;
count__58613 = G__58634;
i__58614 = G__58635;
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
var map__58617 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"body","body",-2049205669),"Response not set in mocks!"], null));
var map__58617__$1 = cljs.core.__destructure_map(map__58617);
var response = map__58617__$1;
var lag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58617__$1,new cljs.core.Keyword(null,"lag","lag",935418682));
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
