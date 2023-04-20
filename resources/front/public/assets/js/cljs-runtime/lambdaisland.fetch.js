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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30685 = cljs.core.get_global_hierarchy;
return (fexpr__30685.cljs$core$IFn$_invoke$arity$0 ? fexpr__30685.cljs$core$IFn$_invoke$arity$0() : fexpr__30685.call(null));
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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30699 = cljs.core.get_global_hierarchy;
return (fexpr__30699.cljs$core$IFn$_invoke$arity$0 ? fexpr__30699.cljs$core$IFn$_invoke$arity$0() : fexpr__30699.call(null));
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
}catch (e30705){var e__29942__auto__ = e30705;
return kitchen_async.promise.reject(e__29942__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__29487__auto__ = response;
var f__29488__auto__ = (obj__29487__auto__["json"]);
return f__29488__auto__.call(obj__29487__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__30722){
var map__30732 = p__30722;
var map__30732__$1 = cljs.core.__destructure_map(map__30732);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30732__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30732__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__30734_30910 = cljs.core.seq(headers);
var chunk__30735_30911 = null;
var count__30736_30912 = (0);
var i__30737_30913 = (0);
while(true){
if((i__30737_30913 < count__30736_30912)){
var vec__30769_30918 = chunk__30735_30911.cljs$core$IIndexed$_nth$arity$2(null,i__30737_30913);
var k_30919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769_30918,(0),null);
var v_30920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769_30918,(1),null);
var obj30772_30922 = fetch_headers;
var obj30774_30923 = (((!((obj30772_30922 == null))))?obj30772_30922:({}));
(obj30774_30923[applied_science.js_interop.impl.wrap_key(k_30919)] = v_30920);



var G__30925 = seq__30734_30910;
var G__30926 = chunk__30735_30911;
var G__30927 = count__30736_30912;
var G__30928 = (i__30737_30913 + (1));
seq__30734_30910 = G__30925;
chunk__30735_30911 = G__30926;
count__30736_30912 = G__30927;
i__30737_30913 = G__30928;
continue;
} else {
var temp__5804__auto___30929 = cljs.core.seq(seq__30734_30910);
if(temp__5804__auto___30929){
var seq__30734_30930__$1 = temp__5804__auto___30929;
if(cljs.core.chunked_seq_QMARK_(seq__30734_30930__$1)){
var c__5568__auto___30931 = cljs.core.chunk_first(seq__30734_30930__$1);
var G__30934 = cljs.core.chunk_rest(seq__30734_30930__$1);
var G__30935 = c__5568__auto___30931;
var G__30937 = cljs.core.count(c__5568__auto___30931);
var G__30938 = (0);
seq__30734_30910 = G__30934;
chunk__30735_30911 = G__30935;
count__30736_30912 = G__30937;
i__30737_30913 = G__30938;
continue;
} else {
var vec__30778_30941 = cljs.core.first(seq__30734_30930__$1);
var k_30942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30778_30941,(0),null);
var v_30943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30778_30941,(1),null);
var obj30781_30944 = fetch_headers;
var obj30782_30945 = (((!((obj30781_30944 == null))))?obj30781_30944:({}));
(obj30782_30945[applied_science.js_interop.impl.wrap_key(k_30942)] = v_30943);



var G__30946 = cljs.core.next(seq__30734_30930__$1);
var G__30947 = null;
var G__30948 = (0);
var G__30949 = (0);
seq__30734_30910 = G__30946;
chunk__30735_30911 = G__30947;
count__30736_30912 = G__30948;
i__30737_30913 = G__30949;
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
var len__5769__auto___30954 = arguments.length;
var i__5770__auto___30955 = (0);
while(true){
if((i__5770__auto___30955 < len__5769__auto___30954)){
args__5775__auto__.push((arguments[i__5770__auto___30955]));

var G__30960 = (i__5770__auto___30955 + (1));
i__5770__auto___30955 = G__30960;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30793){
var vec__30794 = p__30793;
var map__30797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(0),null);
var map__30797__$1 = cljs.core.__destructure_map(map__30797);
var opts = map__30797__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30797__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30797__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.assoc_query_STAR_(lambdaisland.uri.uri(url),query_params));
var request = (function (){var G__30798 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj30799 = G__30798;
var obj30800 = (((!((obj30799 == null))))?obj30799:({}));
(obj30800["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj30800;
} else {
return G__30798;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj30824 = response;
if((!((obj30824 == null)))){
return (obj30824["headers"]);
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
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj30826 = response;
if((!((obj30826 == null)))){
return (obj30826["status"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj30828 = request;
var obj30829 = (((!((obj30828 == null))))?obj30828:({}));
(obj30829["url"] = url__$1);

return obj30829;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e30825){var e__29942__auto__ = e30825;
return kitchen_async.promise.reject(e__29942__auto__);
}})());
}catch (e30823){var e__29942__auto__ = e30823;
return kitchen_async.promise.reject(e__29942__auto__);
}})(),(function (err30815){
var e = err30815;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj30833 = request;
var obj30834 = (((!((obj30833 == null))))?obj30833:({}));
(obj30834["url"] = url__$1);

return obj30834;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e30803){var e__29942__auto__ = e30803;
return kitchen_async.promise.reject(e__29942__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq30788){
var G__30789 = cljs.core.first(seq30788);
var seq30788__$1 = cljs.core.next(seq30788);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30789,seq30788__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31007 = arguments.length;
var i__5770__auto___31009 = (0);
while(true){
if((i__5770__auto___31009 < len__5769__auto___31007)){
args__5775__auto__.push((arguments[i__5770__auto___31009]));

var G__31010 = (i__5770__auto___31009 + (1));
i__5770__auto___31009 = G__31010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30847){
var vec__30848 = p__30847;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30848,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq30845){
var G__30846 = cljs.core.first(seq30845);
var seq30845__$1 = cljs.core.next(seq30845);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30846,seq30845__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31032 = arguments.length;
var i__5770__auto___31033 = (0);
while(true){
if((i__5770__auto___31033 < len__5769__auto___31032)){
args__5775__auto__.push((arguments[i__5770__auto___31033]));

var G__31036 = (i__5770__auto___31033 + (1));
i__5770__auto___31033 = G__31036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30861){
var vec__30862 = p__30861;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30862,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq30859){
var G__30860 = cljs.core.first(seq30859);
var seq30859__$1 = cljs.core.next(seq30859);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30860,seq30859__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31052 = arguments.length;
var i__5770__auto___31053 = (0);
while(true){
if((i__5770__auto___31053 < len__5769__auto___31052)){
args__5775__auto__.push((arguments[i__5770__auto___31053]));

var G__31058 = (i__5770__auto___31053 + (1));
i__5770__auto___31053 = G__31058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30892){
var vec__30893 = p__30892;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30893,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq30887){
var G__30888 = cljs.core.first(seq30887);
var seq30887__$1 = cljs.core.next(seq30887);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30888,seq30887__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31075 = arguments.length;
var i__5770__auto___31077 = (0);
while(true){
if((i__5770__auto___31077 < len__5769__auto___31075)){
args__5775__auto__.push((arguments[i__5770__auto___31077]));

var G__31082 = (i__5770__auto___31077 + (1));
i__5770__auto___31077 = G__31082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30898){
var vec__30899 = p__30898;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30899,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq30896){
var G__30897 = cljs.core.first(seq30896);
var seq30896__$1 = cljs.core.next(seq30896);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30897,seq30896__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
