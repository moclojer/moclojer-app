goog.provide('lambdaisland.fetch');
lambdaisland.fetch.content_types = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),"application/transit+json",new cljs.core.Keyword(null,"json","json",1279968570),"application/json",new cljs.core.Keyword(null,"form-encoded","form-encoded",188329083),"application/x-www-form-urlencoded",new cljs.core.Keyword(null,"text","text",-1790561697),"text/plain",new cljs.core.Keyword(null,"html","html",-998796897),"text/html",new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn"], null);
lambdaisland.fetch.transit_json_writer = (new cljs.core.Delay((function (){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
lambdaisland.fetch.transit_json_reader = (new cljs.core.Delay((function (){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
}),null));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.fetch !== 'undefined') && (typeof lambdaisland.fetch.encode_body !== 'undefined')){
} else {
lambdaisland.fetch.encode_body = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57510 = cljs.core.get_global_hierarchy;
return (fexpr__57510.cljs$core$IFn$_invoke$arity$0 ? fexpr__57510.cljs$core$IFn$_invoke$arity$0() : fexpr__57510.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","encode-body"),(function (content_type,body,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,body,opts){
return body;
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,body,opts){
return cognitect.transit.write(new cljs.core.Keyword(null,"transit-json-writer","transit-json-writer",-326747160).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_writer)),body);
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"form-encoded","form-encoded",188329083),(function (_,body,opts){
return lambdaisland.uri.map__GT_query_string(body);
}));
lambdaisland.fetch.encode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,body,opts){
return JSON.stringify(cljs.core.clj__GT_js(body));
}));
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.fetch !== 'undefined') && (typeof lambdaisland.fetch.decode_body !== 'undefined')){
} else {
lambdaisland.fetch.decode_body = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__57553 = cljs.core.get_global_hierarchy;
return (fexpr__57553.cljs$core$IFn$_invoke$arity$0 ? fexpr__57553.cljs$core$IFn$_invoke$arity$0() : fexpr__57553.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","decode-body"),(function (content_type,bodyp,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,opts){
var obj__29487__auto__ = response;
var f__29488__auto__ = (obj__29487__auto__["text"]);
return f__29488__auto__.call(obj__29487__auto__);
}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,response,opts){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var obj__29487__auto__ = response;
var f__29488__auto__ = (obj__29487__auto__["text"]);
return f__29488__auto__.call(obj__29487__auto__);
})(),(function (text){
var decoded = cognitect.transit.read(new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_reader)),text);
if((((!((decoded == null))))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e57569){var e__29942__auto__ = e57569;
return kitchen_async.promise.reject(e__29942__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__29487__auto__ = response;
var f__29488__auto__ = (obj__29487__auto__["json"]);
return f__29488__auto__.call(obj__29487__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__57582){
var map__57583 = p__57582;
var map__57583__$1 = cljs.core.__destructure_map(map__57583);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57583__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57583__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__57584_57741 = cljs.core.seq(headers);
var chunk__57585_57742 = null;
var count__57586_57743 = (0);
var i__57587_57744 = (0);
while(true){
if((i__57587_57744 < count__57586_57743)){
var vec__57603_57745 = chunk__57585_57742.cljs$core$IIndexed$_nth$arity$2(null,i__57587_57744);
var k_57746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57603_57745,(0),null);
var v_57747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57603_57745,(1),null);
var obj57606_57748 = fetch_headers;
var obj57607_57749 = (((!((obj57606_57748 == null))))?obj57606_57748:({}));
(obj57607_57749[applied_science.js_interop.impl.wrap_key(k_57746)] = v_57747);



var G__57750 = seq__57584_57741;
var G__57751 = chunk__57585_57742;
var G__57752 = count__57586_57743;
var G__57753 = (i__57587_57744 + (1));
seq__57584_57741 = G__57750;
chunk__57585_57742 = G__57751;
count__57586_57743 = G__57752;
i__57587_57744 = G__57753;
continue;
} else {
var temp__5804__auto___57754 = cljs.core.seq(seq__57584_57741);
if(temp__5804__auto___57754){
var seq__57584_57755__$1 = temp__5804__auto___57754;
if(cljs.core.chunked_seq_QMARK_(seq__57584_57755__$1)){
var c__5568__auto___57756 = cljs.core.chunk_first(seq__57584_57755__$1);
var G__57757 = cljs.core.chunk_rest(seq__57584_57755__$1);
var G__57758 = c__5568__auto___57756;
var G__57759 = cljs.core.count(c__5568__auto___57756);
var G__57760 = (0);
seq__57584_57741 = G__57757;
chunk__57585_57742 = G__57758;
count__57586_57743 = G__57759;
i__57587_57744 = G__57760;
continue;
} else {
var vec__57610_57768 = cljs.core.first(seq__57584_57755__$1);
var k_57769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57610_57768,(0),null);
var v_57770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57610_57768,(1),null);
var obj57613_57771 = fetch_headers;
var obj57614_57772 = (((!((obj57613_57771 == null))))?obj57613_57771:({}));
(obj57614_57772[applied_science.js_interop.impl.wrap_key(k_57769)] = v_57770);



var G__57774 = cljs.core.next(seq__57584_57755__$1);
var G__57775 = null;
var G__57776 = (0);
var G__57777 = (0);
seq__57584_57741 = G__57774;
chunk__57585_57742 = G__57775;
count__57586_57743 = G__57776;
i__57587_57744 = G__57777;
continue;
}
} else {
}
}
break;
}

return ({"method": clojure.string.upper_case(cljs.core.name(method)), "headers": fetch_headers, "redirect": cljs.core.name(redirect), "mode": cljs.core.name(mode), "cache": cljs.core.name(cache), "credentials": cljs.core.name(credentials), "referrer-policy": cljs.core.name(referrer_policy)});
});
lambdaisland.fetch.request = (function lambdaisland$fetch$request(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57781 = arguments.length;
var i__5770__auto___57782 = (0);
while(true){
if((i__5770__auto___57782 < len__5769__auto___57781)){
args__5775__auto__.push((arguments[i__5770__auto___57782]));

var G__57783 = (i__5770__auto___57782 + (1));
i__5770__auto___57782 = G__57783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__57643){
var vec__57644 = p__57643;
var map__57647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57644,(0),null);
var map__57647__$1 = cljs.core.__destructure_map(map__57647);
var opts = map__57647__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57647__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57647__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57647__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57647__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57647__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.assoc_query_STAR_(lambdaisland.uri.uri(url),query_params));
var request = (function (){var G__57654 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj57655 = G__57654;
var obj57656 = (((!((obj57655 == null))))?obj57655:({}));
(obj57656["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj57656;
} else {
return G__57654;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj57669 = response;
if((!((obj57669 == null)))){
return (obj57669["headers"]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.es6_iterator_seq((function (){var obj__29487__auto__ = headers;
var f__29488__auto__ = (obj__29487__auto__["entries"]);
return f__29488__auto__.call(obj__29487__auto__);
})()));
var content_type_header = (function (){var obj__29487__auto__ = headers;
var f__29488__auto__ = (obj__29487__auto__["get"]);
return f__29488__auto__.call(obj__29487__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(lambdaisland.fetch.content_types),clojure.string.replace(content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.decode_body.cljs$core$IFn$_invoke$arity$3(content_type__$1,response,opts),(function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj57671 = response;
if((!((obj57671 == null)))){
return (obj57671["status"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj57672 = request;
var obj57673 = (((!((obj57672 == null))))?obj57672:({}));
(obj57673["url"] = url__$1);

return obj57673;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e57670){var e__29942__auto__ = e57670;
return kitchen_async.promise.reject(e__29942__auto__);
}})());
}catch (e57666){var e__29942__auto__ = e57666;
return kitchen_async.promise.reject(e__29942__auto__);
}})(),(function (err57665){
var e = err57665;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj57676 = request;
var obj57677 = (((!((obj57676 == null))))?obj57676:({}));
(obj57677["url"] = url__$1);

return obj57677;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e57659){var e__29942__auto__ = e57659;
return kitchen_async.promise.reject(e__29942__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq57625){
var G__57626 = cljs.core.first(seq57625);
var seq57625__$1 = cljs.core.next(seq57625);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57626,seq57625__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57784 = arguments.length;
var i__5770__auto___57785 = (0);
while(true){
if((i__5770__auto___57785 < len__5769__auto___57784)){
args__5775__auto__.push((arguments[i__5770__auto___57785]));

var G__57786 = (i__5770__auto___57785 + (1));
i__5770__auto___57785 = G__57786;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__57689){
var vec__57690 = p__57689;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57690,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq57686){
var G__57687 = cljs.core.first(seq57686);
var seq57686__$1 = cljs.core.next(seq57686);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57687,seq57686__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57787 = arguments.length;
var i__5770__auto___57788 = (0);
while(true){
if((i__5770__auto___57788 < len__5769__auto___57787)){
args__5775__auto__.push((arguments[i__5770__auto___57788]));

var G__57789 = (i__5770__auto___57788 + (1));
i__5770__auto___57788 = G__57789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__57706){
var vec__57707 = p__57706;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57707,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq57697){
var G__57699 = cljs.core.first(seq57697);
var seq57697__$1 = cljs.core.next(seq57697);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57699,seq57697__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57790 = arguments.length;
var i__5770__auto___57791 = (0);
while(true){
if((i__5770__auto___57791 < len__5769__auto___57790)){
args__5775__auto__.push((arguments[i__5770__auto___57791]));

var G__57792 = (i__5770__auto___57791 + (1));
i__5770__auto___57791 = G__57792;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__57716){
var vec__57718 = p__57716;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57718,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq57712){
var G__57713 = cljs.core.first(seq57712);
var seq57712__$1 = cljs.core.next(seq57712);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57713,seq57712__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57793 = arguments.length;
var i__5770__auto___57794 = (0);
while(true){
if((i__5770__auto___57794 < len__5769__auto___57793)){
args__5775__auto__.push((arguments[i__5770__auto___57794]));

var G__57795 = (i__5770__auto___57794 + (1));
i__5770__auto___57794 = G__57795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__57730){
var vec__57731 = p__57730;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57731,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq57721){
var G__57722 = cljs.core.first(seq57721);
var seq57721__$1 = cljs.core.next(seq57721);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57722,seq57721__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
