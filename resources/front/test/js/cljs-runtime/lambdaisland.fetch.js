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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51979 = cljs.core.get_global_hierarchy;
return (fexpr__51979.cljs$core$IFn$_invoke$arity$0 ? fexpr__51979.cljs$core$IFn$_invoke$arity$0() : fexpr__51979.call(null));
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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51980 = cljs.core.get_global_hierarchy;
return (fexpr__51980.cljs$core$IFn$_invoke$arity$0 ? fexpr__51980.cljs$core$IFn$_invoke$arity$0() : fexpr__51980.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","decode-body"),(function (content_type,bodyp,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,opts){
var obj__26530__auto__ = response;
var f__26531__auto__ = (obj__26530__auto__["text"]);
return f__26531__auto__.call(obj__26530__auto__);
}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,response,opts){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var obj__26530__auto__ = response;
var f__26531__auto__ = (obj__26530__auto__["text"]);
return f__26531__auto__.call(obj__26530__auto__);
})(),(function (text){
var decoded = cognitect.transit.read(new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_reader)),text);
if((((!((decoded == null))))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e51981){var e__26724__auto__ = e51981;
return kitchen_async.promise.reject(e__26724__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__26530__auto__ = response;
var f__26531__auto__ = (obj__26530__auto__["json"]);
return f__26531__auto__.call(obj__26530__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__51983){
var map__51984 = p__51983;
var map__51984__$1 = cljs.core.__destructure_map(map__51984);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51984__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51984__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__51985_52183 = cljs.core.seq(headers);
var chunk__51986_52184 = null;
var count__51987_52185 = (0);
var i__51988_52186 = (0);
while(true){
if((i__51988_52186 < count__51987_52185)){
var vec__52004_52188 = chunk__51986_52184.cljs$core$IIndexed$_nth$arity$2(null,i__51988_52186);
var k_52189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52004_52188,(0),null);
var v_52190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52004_52188,(1),null);
var obj52008_52191 = fetch_headers;
var obj52009_52192 = (((!((obj52008_52191 == null))))?obj52008_52191:({}));
(obj52009_52192[applied_science.js_interop.impl.wrap_key(k_52189)] = v_52190);



var G__52193 = seq__51985_52183;
var G__52194 = chunk__51986_52184;
var G__52195 = count__51987_52185;
var G__52196 = (i__51988_52186 + (1));
seq__51985_52183 = G__52193;
chunk__51986_52184 = G__52194;
count__51987_52185 = G__52195;
i__51988_52186 = G__52196;
continue;
} else {
var temp__5804__auto___52197 = cljs.core.seq(seq__51985_52183);
if(temp__5804__auto___52197){
var seq__51985_52198__$1 = temp__5804__auto___52197;
if(cljs.core.chunked_seq_QMARK_(seq__51985_52198__$1)){
var c__5568__auto___52199 = cljs.core.chunk_first(seq__51985_52198__$1);
var G__52200 = cljs.core.chunk_rest(seq__51985_52198__$1);
var G__52201 = c__5568__auto___52199;
var G__52202 = cljs.core.count(c__5568__auto___52199);
var G__52203 = (0);
seq__51985_52183 = G__52200;
chunk__51986_52184 = G__52201;
count__51987_52185 = G__52202;
i__51988_52186 = G__52203;
continue;
} else {
var vec__52019_52204 = cljs.core.first(seq__51985_52198__$1);
var k_52205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019_52204,(0),null);
var v_52206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019_52204,(1),null);
var obj52023_52207 = fetch_headers;
var obj52024_52208 = (((!((obj52023_52207 == null))))?obj52023_52207:({}));
(obj52024_52208[applied_science.js_interop.impl.wrap_key(k_52205)] = v_52206);



var G__52209 = cljs.core.next(seq__51985_52198__$1);
var G__52210 = null;
var G__52211 = (0);
var G__52212 = (0);
seq__51985_52183 = G__52209;
chunk__51986_52184 = G__52210;
count__51987_52185 = G__52211;
i__51988_52186 = G__52212;
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
var len__5769__auto___52214 = arguments.length;
var i__5770__auto___52216 = (0);
while(true){
if((i__5770__auto___52216 < len__5769__auto___52214)){
args__5775__auto__.push((arguments[i__5770__auto___52216]));

var G__52217 = (i__5770__auto___52216 + (1));
i__5770__auto___52216 = G__52217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__52031){
var vec__52032 = p__52031;
var map__52035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52032,(0),null);
var map__52035__$1 = cljs.core.__destructure_map(map__52035);
var opts = map__52035__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52035__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52035__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.assoc_query_STAR_(lambdaisland.uri.uri(url),query_params));
var request = (function (){var G__52039 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj52040 = G__52039;
var obj52041 = (((!((obj52040 == null))))?obj52040:({}));
(obj52041["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj52041;
} else {
return G__52039;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj52054 = response;
if((!((obj52054 == null)))){
return (obj52054["headers"]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.es6_iterator_seq((function (){var obj__26530__auto__ = headers;
var f__26531__auto__ = (obj__26530__auto__["entries"]);
return f__26531__auto__.call(obj__26530__auto__);
})()));
var content_type_header = (function (){var obj__26530__auto__ = headers;
var f__26531__auto__ = (obj__26530__auto__["get"]);
return f__26531__auto__.call(obj__26530__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(lambdaisland.fetch.content_types),clojure.string.replace(content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.decode_body.cljs$core$IFn$_invoke$arity$3(content_type__$1,response,opts),(function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj52062 = response;
if((!((obj52062 == null)))){
return (obj52062["status"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj52063 = request;
var obj52064 = (((!((obj52063 == null))))?obj52063:({}));
(obj52064["url"] = url__$1);

return obj52064;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e52059){var e__26724__auto__ = e52059;
return kitchen_async.promise.reject(e__26724__auto__);
}})());
}catch (e52051){var e__26724__auto__ = e52051;
return kitchen_async.promise.reject(e__26724__auto__);
}})(),(function (err52046){
var e = err52046;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj52074 = request;
var obj52075 = (((!((obj52074 == null))))?obj52074:({}));
(obj52075["url"] = url__$1);

return obj52075;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e52044){var e__26724__auto__ = e52044;
return kitchen_async.promise.reject(e__26724__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq52029){
var G__52030 = cljs.core.first(seq52029);
var seq52029__$1 = cljs.core.next(seq52029);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52030,seq52029__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52284 = arguments.length;
var i__5770__auto___52285 = (0);
while(true){
if((i__5770__auto___52285 < len__5769__auto___52284)){
args__5775__auto__.push((arguments[i__5770__auto___52285]));

var G__52290 = (i__5770__auto___52285 + (1));
i__5770__auto___52285 = G__52290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__52094){
var vec__52096 = p__52094;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52096,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq52090){
var G__52091 = cljs.core.first(seq52090);
var seq52090__$1 = cljs.core.next(seq52090);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52091,seq52090__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52293 = arguments.length;
var i__5770__auto___52294 = (0);
while(true){
if((i__5770__auto___52294 < len__5769__auto___52293)){
args__5775__auto__.push((arguments[i__5770__auto___52294]));

var G__52295 = (i__5770__auto___52294 + (1));
i__5770__auto___52294 = G__52295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__52118){
var vec__52119 = p__52118;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52119,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq52116){
var G__52117 = cljs.core.first(seq52116);
var seq52116__$1 = cljs.core.next(seq52116);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52117,seq52116__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52306 = arguments.length;
var i__5770__auto___52307 = (0);
while(true){
if((i__5770__auto___52307 < len__5769__auto___52306)){
args__5775__auto__.push((arguments[i__5770__auto___52307]));

var G__52308 = (i__5770__auto___52307 + (1));
i__5770__auto___52307 = G__52308;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__52136){
var vec__52138 = p__52136;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52138,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq52126){
var G__52128 = cljs.core.first(seq52126);
var seq52126__$1 = cljs.core.next(seq52126);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52128,seq52126__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52316 = arguments.length;
var i__5770__auto___52318 = (0);
while(true){
if((i__5770__auto___52318 < len__5769__auto___52316)){
args__5775__auto__.push((arguments[i__5770__auto___52318]));

var G__52455 = (i__5770__auto___52318 + (1));
i__5770__auto___52318 = G__52455;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__52152){
var vec__52153 = p__52152;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq52143){
var G__52144 = cljs.core.first(seq52143);
var seq52143__$1 = cljs.core.next(seq52143);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52144,seq52143__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
