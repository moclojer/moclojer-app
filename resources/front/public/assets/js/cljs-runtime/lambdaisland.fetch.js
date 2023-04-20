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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23494 = cljs.core.get_global_hierarchy;
return (fexpr__23494.cljs$core$IFn$_invoke$arity$0 ? fexpr__23494.cljs$core$IFn$_invoke$arity$0() : fexpr__23494.call(null));
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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__23496 = cljs.core.get_global_hierarchy;
return (fexpr__23496.cljs$core$IFn$_invoke$arity$0 ? fexpr__23496.cljs$core$IFn$_invoke$arity$0() : fexpr__23496.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","decode-body"),(function (content_type,bodyp,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,opts){
var obj__22107__auto__ = response;
var f__22108__auto__ = (obj__22107__auto__["text"]);
return f__22108__auto__.call(obj__22107__auto__);
}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,response,opts){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var obj__22107__auto__ = response;
var f__22108__auto__ = (obj__22107__auto__["text"]);
return f__22108__auto__.call(obj__22107__auto__);
})(),(function (text){
var decoded = cognitect.transit.read(new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_reader)),text);
if((((!((decoded == null))))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e23501){var e__22712__auto__ = e23501;
return kitchen_async.promise.reject(e__22712__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__22107__auto__ = response;
var f__22108__auto__ = (obj__22107__auto__["json"]);
return f__22108__auto__.call(obj__22107__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__23509){
var map__23510 = p__23509;
var map__23510__$1 = cljs.core.__destructure_map(map__23510);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23510__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23510__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__23511_23728 = cljs.core.seq(headers);
var chunk__23512_23729 = null;
var count__23513_23730 = (0);
var i__23514_23731 = (0);
while(true){
if((i__23514_23731 < count__23513_23730)){
var vec__23529_23732 = chunk__23512_23729.cljs$core$IIndexed$_nth$arity$2(null,i__23514_23731);
var k_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529_23732,(0),null);
var v_23734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529_23732,(1),null);
var obj23532_23735 = fetch_headers;
var obj23533_23736 = (((!((obj23532_23735 == null))))?obj23532_23735:({}));
(obj23533_23736[applied_science.js_interop.impl.wrap_key(k_23733)] = v_23734);



var G__23737 = seq__23511_23728;
var G__23738 = chunk__23512_23729;
var G__23739 = count__23513_23730;
var G__23740 = (i__23514_23731 + (1));
seq__23511_23728 = G__23737;
chunk__23512_23729 = G__23738;
count__23513_23730 = G__23739;
i__23514_23731 = G__23740;
continue;
} else {
var temp__5804__auto___23741 = cljs.core.seq(seq__23511_23728);
if(temp__5804__auto___23741){
var seq__23511_23742__$1 = temp__5804__auto___23741;
if(cljs.core.chunked_seq_QMARK_(seq__23511_23742__$1)){
var c__5568__auto___23743 = cljs.core.chunk_first(seq__23511_23742__$1);
var G__23744 = cljs.core.chunk_rest(seq__23511_23742__$1);
var G__23745 = c__5568__auto___23743;
var G__23746 = cljs.core.count(c__5568__auto___23743);
var G__23747 = (0);
seq__23511_23728 = G__23744;
chunk__23512_23729 = G__23745;
count__23513_23730 = G__23746;
i__23514_23731 = G__23747;
continue;
} else {
var vec__23536_23748 = cljs.core.first(seq__23511_23742__$1);
var k_23749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23536_23748,(0),null);
var v_23750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23536_23748,(1),null);
var obj23539_23751 = fetch_headers;
var obj23541_23752 = (((!((obj23539_23751 == null))))?obj23539_23751:({}));
(obj23541_23752[applied_science.js_interop.impl.wrap_key(k_23749)] = v_23750);



var G__23753 = cljs.core.next(seq__23511_23742__$1);
var G__23754 = null;
var G__23755 = (0);
var G__23756 = (0);
seq__23511_23728 = G__23753;
chunk__23512_23729 = G__23754;
count__23513_23730 = G__23755;
i__23514_23731 = G__23756;
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
var len__5769__auto___23760 = arguments.length;
var i__5770__auto___23761 = (0);
while(true){
if((i__5770__auto___23761 < len__5769__auto___23760)){
args__5775__auto__.push((arguments[i__5770__auto___23761]));

var G__23764 = (i__5770__auto___23761 + (1));
i__5770__auto___23761 = G__23764;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23549){
var vec__23551 = p__23549;
var map__23554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23551,(0),null);
var map__23554__$1 = cljs.core.__destructure_map(map__23554);
var opts = map__23554__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23554__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23554__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23554__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23554__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23554__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.assoc_query_STAR_(lambdaisland.uri.uri(url),query_params));
var request = (function (){var G__23558 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj23559 = G__23558;
var obj23560 = (((!((obj23559 == null))))?obj23559:({}));
(obj23560["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj23560;
} else {
return G__23558;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj23592 = response;
if((!((obj23592 == null)))){
return (obj23592["headers"]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.es6_iterator_seq((function (){var obj__22107__auto__ = headers;
var f__22108__auto__ = (obj__22107__auto__["entries"]);
return f__22108__auto__.call(obj__22107__auto__);
})()));
var content_type_header = (function (){var obj__22107__auto__ = headers;
var f__22108__auto__ = (obj__22107__auto__["get"]);
return f__22108__auto__.call(obj__22107__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(lambdaisland.fetch.content_types),clojure.string.replace(content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.decode_body.cljs$core$IFn$_invoke$arity$3(content_type__$1,response,opts),(function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj23614 = response;
if((!((obj23614 == null)))){
return (obj23614["status"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj23616 = request;
var obj23617 = (((!((obj23616 == null))))?obj23616:({}));
(obj23617["url"] = url__$1);

return obj23617;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e23613){var e__22712__auto__ = e23613;
return kitchen_async.promise.reject(e__22712__auto__);
}})());
}catch (e23587){var e__22712__auto__ = e23587;
return kitchen_async.promise.reject(e__22712__auto__);
}})(),(function (err23582){
var e = err23582;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj23624 = request;
var obj23625 = (((!((obj23624 == null))))?obj23624:({}));
(obj23625["url"] = url__$1);

return obj23625;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e23563){var e__22712__auto__ = e23563;
return kitchen_async.promise.reject(e__22712__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq23544){
var G__23545 = cljs.core.first(seq23544);
var seq23544__$1 = cljs.core.next(seq23544);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23545,seq23544__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23804 = arguments.length;
var i__5770__auto___23805 = (0);
while(true){
if((i__5770__auto___23805 < len__5769__auto___23804)){
args__5775__auto__.push((arguments[i__5770__auto___23805]));

var G__23806 = (i__5770__auto___23805 + (1));
i__5770__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23639){
var vec__23640 = p__23639;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq23634){
var G__23635 = cljs.core.first(seq23634);
var seq23634__$1 = cljs.core.next(seq23634);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23635,seq23634__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23808 = arguments.length;
var i__5770__auto___23809 = (0);
while(true){
if((i__5770__auto___23809 < len__5769__auto___23808)){
args__5775__auto__.push((arguments[i__5770__auto___23809]));

var G__23816 = (i__5770__auto___23809 + (1));
i__5770__auto___23809 = G__23816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23676){
var vec__23678 = p__23676;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23678,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq23672){
var G__23673 = cljs.core.first(seq23672);
var seq23672__$1 = cljs.core.next(seq23672);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23673,seq23672__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23820 = arguments.length;
var i__5770__auto___23821 = (0);
while(true){
if((i__5770__auto___23821 < len__5769__auto___23820)){
args__5775__auto__.push((arguments[i__5770__auto___23821]));

var G__23822 = (i__5770__auto___23821 + (1));
i__5770__auto___23821 = G__23822;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23688){
var vec__23689 = p__23688;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23689,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq23684){
var G__23685 = cljs.core.first(seq23684);
var seq23684__$1 = cljs.core.next(seq23684);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23685,seq23684__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23828 = arguments.length;
var i__5770__auto___23829 = (0);
while(true){
if((i__5770__auto___23829 < len__5769__auto___23828)){
args__5775__auto__.push((arguments[i__5770__auto___23829]));

var G__23830 = (i__5770__auto___23829 + (1));
i__5770__auto___23829 = G__23830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23707){
var vec__23708 = p__23707;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq23695){
var G__23696 = cljs.core.first(seq23695);
var seq23695__$1 = cljs.core.next(seq23695);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23696,seq23695__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
