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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49078 = cljs.core.get_global_hierarchy;
return (fexpr__49078.cljs$core$IFn$_invoke$arity$0 ? fexpr__49078.cljs$core$IFn$_invoke$arity$0() : fexpr__49078.call(null));
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
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49085 = cljs.core.get_global_hierarchy;
return (fexpr__49085.cljs$core$IFn$_invoke$arity$0 ? fexpr__49085.cljs$core$IFn$_invoke$arity$0() : fexpr__49085.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lambdaisland.fetch","decode-body"),(function (content_type,bodyp,opts){
return content_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,response,opts){
var obj__26494__auto__ = response;
var f__26495__auto__ = (obj__26494__auto__["text"]);
return f__26495__auto__.call(obj__26494__auto__);
}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_,response,opts){
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2((function (){var obj__26494__auto__ = response;
var f__26495__auto__ = (obj__26494__auto__["text"]);
return f__26495__auto__.call(obj__26494__auto__);
})(),(function (text){
var decoded = cognitect.transit.read(new cljs.core.Keyword(null,"transit-json-reader","transit-json-reader",-1038918063).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.deref(lambdaisland.fetch.transit_json_reader)),text);
if((((!((decoded == null))))?(((((decoded.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === decoded.cljs$core$IWithMeta$))))?true:(((!decoded.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,decoded))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(decoded,cljs.core.assoc,new cljs.core.Keyword("lambdaisland.fetch","raw","lambdaisland.fetch/raw",-42775008),text);
} else {
return decoded;
}
})));
}catch (e49089){var e__26703__auto__ = e49089;
return kitchen_async.promise.reject(e__26703__auto__);
}}));
lambdaisland.fetch.decode_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,response,opts){
var obj__26494__auto__ = response;
var f__26495__auto__ = (obj__26494__auto__["json"]);
return f__26495__auto__.call(obj__26494__auto__);
}));
lambdaisland.fetch.fetch_opts = (function lambdaisland$fetch$fetch_opts(p__49091){
var map__49093 = p__49091;
var map__49093__$1 = cljs.core.__destructure_map(map__49093);
var redirect = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"follow","follow",-809317662));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"credentials","credentials",1373178854),new cljs.core.Keyword(null,"same-origin","same-origin",706703957));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cors","cors",1066181665));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49093__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"default","default",-1987822328));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278),new cljs.core.Keyword(null,"client","client",-1323448117));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49093__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var fetch_headers = ({"Accept": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,accept), "Content-Type": cljs.core.get.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.content_types,content_type)});
var seq__49094_49223 = cljs.core.seq(headers);
var chunk__49095_49224 = null;
var count__49096_49225 = (0);
var i__49097_49226 = (0);
while(true){
if((i__49097_49226 < count__49096_49225)){
var vec__49113_49227 = chunk__49095_49224.cljs$core$IIndexed$_nth$arity$2(null,i__49097_49226);
var k_49228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113_49227,(0),null);
var v_49229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49113_49227,(1),null);
var obj49116_49231 = fetch_headers;
var obj49117_49232 = (((!((obj49116_49231 == null))))?obj49116_49231:({}));
(obj49117_49232[applied_science.js_interop.impl.wrap_key(k_49228)] = v_49229);



var G__49233 = seq__49094_49223;
var G__49234 = chunk__49095_49224;
var G__49235 = count__49096_49225;
var G__49236 = (i__49097_49226 + (1));
seq__49094_49223 = G__49233;
chunk__49095_49224 = G__49234;
count__49096_49225 = G__49235;
i__49097_49226 = G__49236;
continue;
} else {
var temp__5804__auto___49237 = cljs.core.seq(seq__49094_49223);
if(temp__5804__auto___49237){
var seq__49094_49238__$1 = temp__5804__auto___49237;
if(cljs.core.chunked_seq_QMARK_(seq__49094_49238__$1)){
var c__5568__auto___49239 = cljs.core.chunk_first(seq__49094_49238__$1);
var G__49240 = cljs.core.chunk_rest(seq__49094_49238__$1);
var G__49241 = c__5568__auto___49239;
var G__49242 = cljs.core.count(c__5568__auto___49239);
var G__49243 = (0);
seq__49094_49223 = G__49240;
chunk__49095_49224 = G__49241;
count__49096_49225 = G__49242;
i__49097_49226 = G__49243;
continue;
} else {
var vec__49120_49244 = cljs.core.first(seq__49094_49238__$1);
var k_49245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49120_49244,(0),null);
var v_49246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49120_49244,(1),null);
var obj49123_49247 = fetch_headers;
var obj49124_49248 = (((!((obj49123_49247 == null))))?obj49123_49247:({}));
(obj49124_49248[applied_science.js_interop.impl.wrap_key(k_49245)] = v_49246);



var G__49249 = cljs.core.next(seq__49094_49238__$1);
var G__49250 = null;
var G__49251 = (0);
var G__49252 = (0);
seq__49094_49223 = G__49249;
chunk__49095_49224 = G__49250;
count__49096_49225 = G__49251;
i__49097_49226 = G__49252;
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
var len__5769__auto___49253 = arguments.length;
var i__5770__auto___49254 = (0);
while(true){
if((i__5770__auto___49254 < len__5769__auto___49253)){
args__5775__auto__.push((arguments[i__5770__auto___49254]));

var G__49255 = (i__5770__auto___49254 + (1));
i__5770__auto___49254 = G__49255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49129){
var vec__49130 = p__49129;
var map__49133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49130,(0),null);
var map__49133__$1 = cljs.core.__destructure_map(map__49133);
var opts = map__49133__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49133__$1,new cljs.core.Keyword(null,"method","method",55703592));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49133__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49133__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"transit-json","transit-json",1168016579));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49133__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49133__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.assoc_query_STAR_(lambdaisland.uri.uri(url),query_params));
var request = (function (){var G__49134 = lambdaisland.fetch.fetch_opts(opts);
if(cljs.core.truth_(body)){
var obj49137 = G__49134;
var obj49140 = (((!((obj49137 == null))))?obj49137:({}));
(obj49140["body"] = ((typeof body === 'string')?body:lambdaisland.fetch.encode_body.cljs$core$IFn$_invoke$arity$3(content_type,body,opts)));

return obj49140;
} else {
return G__49134;
}
})();
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(fetch(url__$1,request),(function (response){
return kitchen_async.promise.catch_STAR_((function (){try{return kitchen_async.promise.__GT_promise((function (){var headers = (function (){var obj49160 = response;
if((!((obj49160 == null)))){
return (obj49160["headers"]);
} else {
return undefined;
}
})();
var header_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.es6_iterator_seq((function (){var obj__26494__auto__ = headers;
var f__26495__auto__ = (obj__26494__auto__["entries"]);
return f__26495__auto__.call(obj__26494__auto__);
})()));
var content_type_header = (function (){var obj__26494__auto__ = headers;
var f__26495__auto__ = (obj__26494__auto__["get"]);
return f__26495__auto__.call(obj__26494__auto__,"Content-Type");
})();
var content_type__$1 = (cljs.core.truth_(content_type_header)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(lambdaisland.fetch.content_types),clojure.string.replace(content_type_header,/;.*/,"")):null);
try{return kitchen_async.promise.__GT_promise(kitchen_async.promise.then.cljs$core$IFn$_invoke$arity$2(lambdaisland.fetch.decode_body.cljs$core$IFn$_invoke$arity$3(content_type__$1,response,opts),(function (body__$1){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(function (){var obj49164 = response;
if((!((obj49164 == null)))){
return (obj49164["status"]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),header_map,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj49166 = request;
var obj49167 = (((!((obj49166 == null))))?obj49166:({}));
(obj49167["url"] = url__$1);

return obj49167;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));
})));
}catch (e49163){var e__26703__auto__ = e49163;
return kitchen_async.promise.reject(e__26703__auto__);
}})());
}catch (e49157){var e__26703__auto__ = e49157;
return kitchen_async.promise.reject(e__26703__auto__);
}})(),(function (err49154){
var e = err49154;
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lambdaisland.fetch","request","lambdaisland.fetch/request",-613027989),(function (){var obj49171 = request;
var obj49172 = (((!((obj49171 == null))))?obj49171:({}));
(obj49172["url"] = url__$1);

return obj49172;
})(),new cljs.core.Keyword("lambdaisland.fetch","response","lambdaisland.fetch/response",1394308888),response], null));

}));
})));
}catch (e49149){var e__26703__auto__ = e49149;
return kitchen_async.promise.reject(e__26703__auto__);
}}));

(lambdaisland.fetch.request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.request.cljs$lang$applyTo = (function (seq49127){
var G__49128 = cljs.core.first(seq49127);
var seq49127__$1 = cljs.core.next(seq49127);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49128,seq49127__$1);
}));

lambdaisland.fetch.get = lambdaisland.fetch.request;
lambdaisland.fetch.post = (function lambdaisland$fetch$post(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49262 = arguments.length;
var i__5770__auto___49263 = (0);
while(true){
if((i__5770__auto___49263 < len__5769__auto___49262)){
args__5775__auto__.push((arguments[i__5770__auto___49263]));

var G__49264 = (i__5770__auto___49263 + (1));
i__5770__auto___49263 = G__49264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49199){
var vec__49200 = p__49199;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49200,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687))], 0));
}));

(lambdaisland.fetch.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.post.cljs$lang$applyTo = (function (seq49194){
var G__49195 = cljs.core.first(seq49194);
var seq49194__$1 = cljs.core.next(seq49194);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49195,seq49194__$1);
}));

lambdaisland.fetch.put = (function lambdaisland$fetch$put(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49267 = arguments.length;
var i__5770__auto___49268 = (0);
while(true){
if((i__5770__auto___49268 < len__5769__auto___49267)){
args__5775__auto__.push((arguments[i__5770__auto___49268]));

var G__49269 = (i__5770__auto___49268 + (1));
i__5770__auto___49268 = G__49269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49205){
var vec__49206 = p__49205;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49206,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570))], 0));
}));

(lambdaisland.fetch.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.put.cljs$lang$applyTo = (function (seq49203){
var G__49204 = cljs.core.first(seq49203);
var seq49203__$1 = cljs.core.next(seq49203);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49204,seq49203__$1);
}));

lambdaisland.fetch.delete$ = (function lambdaisland$fetch$delete(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49273 = arguments.length;
var i__5770__auto___49274 = (0);
while(true){
if((i__5770__auto___49274 < len__5769__auto___49273)){
args__5775__auto__.push((arguments[i__5770__auto___49274]));

var G__49275 = (i__5770__auto___49274 + (1));
i__5770__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49211){
var vec__49212 = p__49211;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620))], 0));
}));

(lambdaisland.fetch.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.delete$.cljs$lang$applyTo = (function (seq49209){
var G__49210 = cljs.core.first(seq49209);
var seq49209__$1 = cljs.core.next(seq49209);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49210,seq49209__$1);
}));

lambdaisland.fetch.head = (function lambdaisland$fetch$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49277 = arguments.length;
var i__5770__auto___49278 = (0);
while(true){
if((i__5770__auto___49278 < len__5769__auto___49277)){
args__5775__auto__.push((arguments[i__5770__auto___49278]));

var G__49279 = (i__5770__auto___49278 + (1));
i__5770__auto___49278 = G__49279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.fetch.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49217){
var vec__49218 = p__49217;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49218,(0),null);
return lambdaisland.fetch.request.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919))], 0));
}));

(lambdaisland.fetch.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.fetch.head.cljs$lang$applyTo = (function (seq49215){
var G__49216 = cljs.core.first(seq49215);
var seq49215__$1 = cljs.core.next(seq49215);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49216,seq49215__$1);
}));


//# sourceMappingURL=lambdaisland.fetch.js.map
