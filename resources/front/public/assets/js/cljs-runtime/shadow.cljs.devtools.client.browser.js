goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47216 = arguments.length;
var i__5770__auto___47217 = (0);
while(true){
if((i__5770__auto___47217 < len__5769__auto___47216)){
args__5775__auto__.push((arguments[i__5770__auto___47217]));

var G__47218 = (i__5770__auto___47217 + (1));
i__5770__auto___47217 = G__47218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46927){
var G__46928 = cljs.core.first(seq46927);
var seq46927__$1 = cljs.core.next(seq46927);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46928,seq46927__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46930 = cljs.core.seq(sources);
var chunk__46931 = null;
var count__46932 = (0);
var i__46933 = (0);
while(true){
if((i__46933 < count__46932)){
var map__46938 = chunk__46931.cljs$core$IIndexed$_nth$arity$2(null,i__46933);
var map__46938__$1 = cljs.core.__destructure_map(map__46938);
var src = map__46938__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46938__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46939){var e_47219 = e46939;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47219);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47219.message)].join('')));
}

var G__47220 = seq__46930;
var G__47221 = chunk__46931;
var G__47222 = count__46932;
var G__47223 = (i__46933 + (1));
seq__46930 = G__47220;
chunk__46931 = G__47221;
count__46932 = G__47222;
i__46933 = G__47223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46930);
if(temp__5804__auto__){
var seq__46930__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46930__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46930__$1);
var G__47224 = cljs.core.chunk_rest(seq__46930__$1);
var G__47225 = c__5568__auto__;
var G__47226 = cljs.core.count(c__5568__auto__);
var G__47227 = (0);
seq__46930 = G__47224;
chunk__46931 = G__47225;
count__46932 = G__47226;
i__46933 = G__47227;
continue;
} else {
var map__46940 = cljs.core.first(seq__46930__$1);
var map__46940__$1 = cljs.core.__destructure_map(map__46940);
var src = map__46940__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46940__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46940__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46940__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46940__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46942){var e_47228 = e46942;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47228);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47228.message)].join('')));
}

var G__47229 = cljs.core.next(seq__46930__$1);
var G__47230 = null;
var G__47231 = (0);
var G__47232 = (0);
seq__46930 = G__47229;
chunk__46931 = G__47230;
count__46932 = G__47231;
i__46933 = G__47232;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46944 = cljs.core.seq(js_requires);
var chunk__46945 = null;
var count__46946 = (0);
var i__46947 = (0);
while(true){
if((i__46947 < count__46946)){
var js_ns = chunk__46945.cljs$core$IIndexed$_nth$arity$2(null,i__46947);
var require_str_47233 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47233);


var G__47234 = seq__46944;
var G__47235 = chunk__46945;
var G__47236 = count__46946;
var G__47237 = (i__46947 + (1));
seq__46944 = G__47234;
chunk__46945 = G__47235;
count__46946 = G__47236;
i__46947 = G__47237;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46944);
if(temp__5804__auto__){
var seq__46944__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46944__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46944__$1);
var G__47238 = cljs.core.chunk_rest(seq__46944__$1);
var G__47239 = c__5568__auto__;
var G__47240 = cljs.core.count(c__5568__auto__);
var G__47241 = (0);
seq__46944 = G__47238;
chunk__46945 = G__47239;
count__46946 = G__47240;
i__46947 = G__47241;
continue;
} else {
var js_ns = cljs.core.first(seq__46944__$1);
var require_str_47242 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47242);


var G__47243 = cljs.core.next(seq__46944__$1);
var G__47244 = null;
var G__47245 = (0);
var G__47246 = (0);
seq__46944 = G__47243;
chunk__46945 = G__47244;
count__46946 = G__47245;
i__46947 = G__47246;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46949){
var map__46950 = p__46949;
var map__46950__$1 = cljs.core.__destructure_map(map__46950);
var msg = map__46950__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46950__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46950__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46951(s__46952){
return (new cljs.core.LazySeq(null,(function (){
var s__46952__$1 = s__46952;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46952__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__46957 = cljs.core.first(xs__6360__auto__);
var map__46957__$1 = cljs.core.__destructure_map(map__46957);
var src = map__46957__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46957__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__46952__$1,map__46957,map__46957__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__46950,map__46950__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46951_$_iter__46953(s__46954){
return (new cljs.core.LazySeq(null,((function (s__46952__$1,map__46957,map__46957__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__46950,map__46950__$1,msg,info,reload_info){
return (function (){
var s__46954__$1 = s__46954;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__46954__$1);
if(temp__5804__auto____$1){
var s__46954__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46954__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46954__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46956 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46955 = (0);
while(true){
if((i__46955 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__46955);
cljs.core.chunk_append(b__46956,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47247 = (i__46955 + (1));
i__46955 = G__47247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46956),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46951_$_iter__46953(cljs.core.chunk_rest(s__46954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46956),null);
}
} else {
var warning = cljs.core.first(s__46954__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46951_$_iter__46953(cljs.core.rest(s__46954__$2)));
}
} else {
return null;
}
break;
}
});})(s__46952__$1,map__46957,map__46957__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__46950,map__46950__$1,msg,info,reload_info))
,null,null));
});})(s__46952__$1,map__46957,map__46957__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__46950,map__46950__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46951(cljs.core.rest(s__46952__$1)));
} else {
var G__47248 = cljs.core.rest(s__46952__$1);
s__46952__$1 = G__47248;
continue;
}
} else {
var G__47249 = cljs.core.rest(s__46952__$1);
s__46952__$1 = G__47249;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46958_47250 = cljs.core.seq(warnings);
var chunk__46959_47251 = null;
var count__46960_47252 = (0);
var i__46961_47253 = (0);
while(true){
if((i__46961_47253 < count__46960_47252)){
var map__46964_47254 = chunk__46959_47251.cljs$core$IIndexed$_nth$arity$2(null,i__46961_47253);
var map__46964_47255__$1 = cljs.core.__destructure_map(map__46964_47254);
var w_47256 = map__46964_47255__$1;
var msg_47257__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46964_47255__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46964_47255__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46964_47255__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46964_47255__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47260)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47258),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47259),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47257__$1)].join(''));


var G__47261 = seq__46958_47250;
var G__47262 = chunk__46959_47251;
var G__47263 = count__46960_47252;
var G__47264 = (i__46961_47253 + (1));
seq__46958_47250 = G__47261;
chunk__46959_47251 = G__47262;
count__46960_47252 = G__47263;
i__46961_47253 = G__47264;
continue;
} else {
var temp__5804__auto___47265 = cljs.core.seq(seq__46958_47250);
if(temp__5804__auto___47265){
var seq__46958_47266__$1 = temp__5804__auto___47265;
if(cljs.core.chunked_seq_QMARK_(seq__46958_47266__$1)){
var c__5568__auto___47267 = cljs.core.chunk_first(seq__46958_47266__$1);
var G__47268 = cljs.core.chunk_rest(seq__46958_47266__$1);
var G__47269 = c__5568__auto___47267;
var G__47270 = cljs.core.count(c__5568__auto___47267);
var G__47271 = (0);
seq__46958_47250 = G__47268;
chunk__46959_47251 = G__47269;
count__46960_47252 = G__47270;
i__46961_47253 = G__47271;
continue;
} else {
var map__46965_47272 = cljs.core.first(seq__46958_47266__$1);
var map__46965_47273__$1 = cljs.core.__destructure_map(map__46965_47272);
var w_47274 = map__46965_47273__$1;
var msg_47275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46965_47273__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46965_47273__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46965_47273__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46965_47273__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47278)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47276),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47277),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47275__$1)].join(''));


var G__47279 = cljs.core.next(seq__46958_47266__$1);
var G__47280 = null;
var G__47281 = (0);
var G__47282 = (0);
seq__46958_47250 = G__47279;
chunk__46959_47251 = G__47280;
count__46960_47252 = G__47281;
i__46961_47253 = G__47282;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46948_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46948_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46966){
var map__46967 = p__46966;
var map__46967__$1 = cljs.core.__destructure_map(map__46967);
var msg = map__46967__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46967__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__46968 = cljs.core.seq(updates);
var chunk__46970 = null;
var count__46971 = (0);
var i__46972 = (0);
while(true){
if((i__46972 < count__46971)){
var path = chunk__46970.cljs$core$IIndexed$_nth$arity$2(null,i__46972);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47088_47284 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47092_47285 = null;
var count__47093_47286 = (0);
var i__47094_47287 = (0);
while(true){
if((i__47094_47287 < count__47093_47286)){
var node_47288 = chunk__47092_47285.cljs$core$IIndexed$_nth$arity$2(null,i__47094_47287);
if(cljs.core.not(node_47288.shadow$old)){
var path_match_47290 = shadow.cljs.devtools.client.browser.match_paths(node_47288.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47290)){
var new_link_47291 = (function (){var G__47120 = node_47288.cloneNode(true);
G__47120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47290),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47120;
})();
(node_47288.shadow$old = true);

(new_link_47291.onload = ((function (seq__47088_47284,chunk__47092_47285,count__47093_47286,i__47094_47287,seq__46968,chunk__46970,count__46971,i__46972,new_link_47291,path_match_47290,node_47288,path,map__46967,map__46967__$1,msg,updates,reload_info){
return (function (e){
var seq__47121_47292 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47123_47293 = null;
var count__47124_47294 = (0);
var i__47125_47295 = (0);
while(true){
if((i__47125_47295 < count__47124_47294)){
var map__47129_47296 = chunk__47123_47293.cljs$core$IIndexed$_nth$arity$2(null,i__47125_47295);
var map__47129_47297__$1 = cljs.core.__destructure_map(map__47129_47296);
var task_47298 = map__47129_47297__$1;
var fn_str_47299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129_47297__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47129_47297__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47301 = goog.getObjectByName(fn_str_47299,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47300)].join(''));

(fn_obj_47301.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47301.cljs$core$IFn$_invoke$arity$2(path,new_link_47291) : fn_obj_47301.call(null,path,new_link_47291));


var G__47302 = seq__47121_47292;
var G__47303 = chunk__47123_47293;
var G__47304 = count__47124_47294;
var G__47305 = (i__47125_47295 + (1));
seq__47121_47292 = G__47302;
chunk__47123_47293 = G__47303;
count__47124_47294 = G__47304;
i__47125_47295 = G__47305;
continue;
} else {
var temp__5804__auto___47306 = cljs.core.seq(seq__47121_47292);
if(temp__5804__auto___47306){
var seq__47121_47307__$1 = temp__5804__auto___47306;
if(cljs.core.chunked_seq_QMARK_(seq__47121_47307__$1)){
var c__5568__auto___47308 = cljs.core.chunk_first(seq__47121_47307__$1);
var G__47309 = cljs.core.chunk_rest(seq__47121_47307__$1);
var G__47310 = c__5568__auto___47308;
var G__47311 = cljs.core.count(c__5568__auto___47308);
var G__47312 = (0);
seq__47121_47292 = G__47309;
chunk__47123_47293 = G__47310;
count__47124_47294 = G__47311;
i__47125_47295 = G__47312;
continue;
} else {
var map__47130_47313 = cljs.core.first(seq__47121_47307__$1);
var map__47130_47314__$1 = cljs.core.__destructure_map(map__47130_47313);
var task_47315 = map__47130_47314__$1;
var fn_str_47316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130_47314__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130_47314__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47318 = goog.getObjectByName(fn_str_47316,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47317)].join(''));

(fn_obj_47318.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47318.cljs$core$IFn$_invoke$arity$2(path,new_link_47291) : fn_obj_47318.call(null,path,new_link_47291));


var G__47319 = cljs.core.next(seq__47121_47307__$1);
var G__47320 = null;
var G__47321 = (0);
var G__47322 = (0);
seq__47121_47292 = G__47319;
chunk__47123_47293 = G__47320;
count__47124_47294 = G__47321;
i__47125_47295 = G__47322;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47288);
});})(seq__47088_47284,chunk__47092_47285,count__47093_47286,i__47094_47287,seq__46968,chunk__46970,count__46971,i__46972,new_link_47291,path_match_47290,node_47288,path,map__46967,map__46967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47290], 0));

goog.dom.insertSiblingAfter(new_link_47291,node_47288);


var G__47323 = seq__47088_47284;
var G__47324 = chunk__47092_47285;
var G__47325 = count__47093_47286;
var G__47326 = (i__47094_47287 + (1));
seq__47088_47284 = G__47323;
chunk__47092_47285 = G__47324;
count__47093_47286 = G__47325;
i__47094_47287 = G__47326;
continue;
} else {
var G__47327 = seq__47088_47284;
var G__47328 = chunk__47092_47285;
var G__47329 = count__47093_47286;
var G__47330 = (i__47094_47287 + (1));
seq__47088_47284 = G__47327;
chunk__47092_47285 = G__47328;
count__47093_47286 = G__47329;
i__47094_47287 = G__47330;
continue;
}
} else {
var G__47331 = seq__47088_47284;
var G__47332 = chunk__47092_47285;
var G__47333 = count__47093_47286;
var G__47334 = (i__47094_47287 + (1));
seq__47088_47284 = G__47331;
chunk__47092_47285 = G__47332;
count__47093_47286 = G__47333;
i__47094_47287 = G__47334;
continue;
}
} else {
var temp__5804__auto___47335 = cljs.core.seq(seq__47088_47284);
if(temp__5804__auto___47335){
var seq__47088_47336__$1 = temp__5804__auto___47335;
if(cljs.core.chunked_seq_QMARK_(seq__47088_47336__$1)){
var c__5568__auto___47337 = cljs.core.chunk_first(seq__47088_47336__$1);
var G__47338 = cljs.core.chunk_rest(seq__47088_47336__$1);
var G__47339 = c__5568__auto___47337;
var G__47340 = cljs.core.count(c__5568__auto___47337);
var G__47341 = (0);
seq__47088_47284 = G__47338;
chunk__47092_47285 = G__47339;
count__47093_47286 = G__47340;
i__47094_47287 = G__47341;
continue;
} else {
var node_47342 = cljs.core.first(seq__47088_47336__$1);
if(cljs.core.not(node_47342.shadow$old)){
var path_match_47343 = shadow.cljs.devtools.client.browser.match_paths(node_47342.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47343)){
var new_link_47344 = (function (){var G__47131 = node_47342.cloneNode(true);
G__47131.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47343),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47131;
})();
(node_47342.shadow$old = true);

(new_link_47344.onload = ((function (seq__47088_47284,chunk__47092_47285,count__47093_47286,i__47094_47287,seq__46968,chunk__46970,count__46971,i__46972,new_link_47344,path_match_47343,node_47342,seq__47088_47336__$1,temp__5804__auto___47335,path,map__46967,map__46967__$1,msg,updates,reload_info){
return (function (e){
var seq__47132_47345 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47134_47346 = null;
var count__47135_47347 = (0);
var i__47136_47348 = (0);
while(true){
if((i__47136_47348 < count__47135_47347)){
var map__47140_47349 = chunk__47134_47346.cljs$core$IIndexed$_nth$arity$2(null,i__47136_47348);
var map__47140_47350__$1 = cljs.core.__destructure_map(map__47140_47349);
var task_47351 = map__47140_47350__$1;
var fn_str_47352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47140_47350__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47140_47350__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47354 = goog.getObjectByName(fn_str_47352,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47353)].join(''));

(fn_obj_47354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47354.cljs$core$IFn$_invoke$arity$2(path,new_link_47344) : fn_obj_47354.call(null,path,new_link_47344));


var G__47355 = seq__47132_47345;
var G__47356 = chunk__47134_47346;
var G__47357 = count__47135_47347;
var G__47358 = (i__47136_47348 + (1));
seq__47132_47345 = G__47355;
chunk__47134_47346 = G__47356;
count__47135_47347 = G__47357;
i__47136_47348 = G__47358;
continue;
} else {
var temp__5804__auto___47359__$1 = cljs.core.seq(seq__47132_47345);
if(temp__5804__auto___47359__$1){
var seq__47132_47360__$1 = temp__5804__auto___47359__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47132_47360__$1)){
var c__5568__auto___47361 = cljs.core.chunk_first(seq__47132_47360__$1);
var G__47362 = cljs.core.chunk_rest(seq__47132_47360__$1);
var G__47363 = c__5568__auto___47361;
var G__47364 = cljs.core.count(c__5568__auto___47361);
var G__47365 = (0);
seq__47132_47345 = G__47362;
chunk__47134_47346 = G__47363;
count__47135_47347 = G__47364;
i__47136_47348 = G__47365;
continue;
} else {
var map__47141_47366 = cljs.core.first(seq__47132_47360__$1);
var map__47141_47367__$1 = cljs.core.__destructure_map(map__47141_47366);
var task_47368 = map__47141_47367__$1;
var fn_str_47369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47141_47367__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47141_47367__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47371 = goog.getObjectByName(fn_str_47369,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47370)].join(''));

(fn_obj_47371.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47371.cljs$core$IFn$_invoke$arity$2(path,new_link_47344) : fn_obj_47371.call(null,path,new_link_47344));


var G__47372 = cljs.core.next(seq__47132_47360__$1);
var G__47373 = null;
var G__47374 = (0);
var G__47375 = (0);
seq__47132_47345 = G__47372;
chunk__47134_47346 = G__47373;
count__47135_47347 = G__47374;
i__47136_47348 = G__47375;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47342);
});})(seq__47088_47284,chunk__47092_47285,count__47093_47286,i__47094_47287,seq__46968,chunk__46970,count__46971,i__46972,new_link_47344,path_match_47343,node_47342,seq__47088_47336__$1,temp__5804__auto___47335,path,map__46967,map__46967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47343], 0));

goog.dom.insertSiblingAfter(new_link_47344,node_47342);


var G__47376 = cljs.core.next(seq__47088_47336__$1);
var G__47377 = null;
var G__47378 = (0);
var G__47379 = (0);
seq__47088_47284 = G__47376;
chunk__47092_47285 = G__47377;
count__47093_47286 = G__47378;
i__47094_47287 = G__47379;
continue;
} else {
var G__47380 = cljs.core.next(seq__47088_47336__$1);
var G__47381 = null;
var G__47382 = (0);
var G__47383 = (0);
seq__47088_47284 = G__47380;
chunk__47092_47285 = G__47381;
count__47093_47286 = G__47382;
i__47094_47287 = G__47383;
continue;
}
} else {
var G__47384 = cljs.core.next(seq__47088_47336__$1);
var G__47385 = null;
var G__47386 = (0);
var G__47387 = (0);
seq__47088_47284 = G__47384;
chunk__47092_47285 = G__47385;
count__47093_47286 = G__47386;
i__47094_47287 = G__47387;
continue;
}
}
} else {
}
}
break;
}


var G__47388 = seq__46968;
var G__47389 = chunk__46970;
var G__47390 = count__46971;
var G__47391 = (i__46972 + (1));
seq__46968 = G__47388;
chunk__46970 = G__47389;
count__46971 = G__47390;
i__46972 = G__47391;
continue;
} else {
var G__47392 = seq__46968;
var G__47393 = chunk__46970;
var G__47394 = count__46971;
var G__47395 = (i__46972 + (1));
seq__46968 = G__47392;
chunk__46970 = G__47393;
count__46971 = G__47394;
i__46972 = G__47395;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46968);
if(temp__5804__auto__){
var seq__46968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46968__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46968__$1);
var G__47396 = cljs.core.chunk_rest(seq__46968__$1);
var G__47397 = c__5568__auto__;
var G__47398 = cljs.core.count(c__5568__auto__);
var G__47399 = (0);
seq__46968 = G__47396;
chunk__46970 = G__47397;
count__46971 = G__47398;
i__46972 = G__47399;
continue;
} else {
var path = cljs.core.first(seq__46968__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47142_47400 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47146_47401 = null;
var count__47147_47402 = (0);
var i__47148_47403 = (0);
while(true){
if((i__47148_47403 < count__47147_47402)){
var node_47404 = chunk__47146_47401.cljs$core$IIndexed$_nth$arity$2(null,i__47148_47403);
if(cljs.core.not(node_47404.shadow$old)){
var path_match_47405 = shadow.cljs.devtools.client.browser.match_paths(node_47404.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47405)){
var new_link_47406 = (function (){var G__47174 = node_47404.cloneNode(true);
G__47174.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47405),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47174;
})();
(node_47404.shadow$old = true);

(new_link_47406.onload = ((function (seq__47142_47400,chunk__47146_47401,count__47147_47402,i__47148_47403,seq__46968,chunk__46970,count__46971,i__46972,new_link_47406,path_match_47405,node_47404,path,seq__46968__$1,temp__5804__auto__,map__46967,map__46967__$1,msg,updates,reload_info){
return (function (e){
var seq__47175_47407 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47177_47408 = null;
var count__47178_47409 = (0);
var i__47179_47410 = (0);
while(true){
if((i__47179_47410 < count__47178_47409)){
var map__47183_47411 = chunk__47177_47408.cljs$core$IIndexed$_nth$arity$2(null,i__47179_47410);
var map__47183_47412__$1 = cljs.core.__destructure_map(map__47183_47411);
var task_47413 = map__47183_47412__$1;
var fn_str_47414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183_47412__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183_47412__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47416 = goog.getObjectByName(fn_str_47414,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47415)].join(''));

(fn_obj_47416.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47416.cljs$core$IFn$_invoke$arity$2(path,new_link_47406) : fn_obj_47416.call(null,path,new_link_47406));


var G__47417 = seq__47175_47407;
var G__47418 = chunk__47177_47408;
var G__47419 = count__47178_47409;
var G__47420 = (i__47179_47410 + (1));
seq__47175_47407 = G__47417;
chunk__47177_47408 = G__47418;
count__47178_47409 = G__47419;
i__47179_47410 = G__47420;
continue;
} else {
var temp__5804__auto___47421__$1 = cljs.core.seq(seq__47175_47407);
if(temp__5804__auto___47421__$1){
var seq__47175_47422__$1 = temp__5804__auto___47421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47175_47422__$1)){
var c__5568__auto___47423 = cljs.core.chunk_first(seq__47175_47422__$1);
var G__47424 = cljs.core.chunk_rest(seq__47175_47422__$1);
var G__47425 = c__5568__auto___47423;
var G__47426 = cljs.core.count(c__5568__auto___47423);
var G__47427 = (0);
seq__47175_47407 = G__47424;
chunk__47177_47408 = G__47425;
count__47178_47409 = G__47426;
i__47179_47410 = G__47427;
continue;
} else {
var map__47184_47428 = cljs.core.first(seq__47175_47422__$1);
var map__47184_47429__$1 = cljs.core.__destructure_map(map__47184_47428);
var task_47430 = map__47184_47429__$1;
var fn_str_47431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184_47429__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184_47429__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47433 = goog.getObjectByName(fn_str_47431,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47432)].join(''));

(fn_obj_47433.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47433.cljs$core$IFn$_invoke$arity$2(path,new_link_47406) : fn_obj_47433.call(null,path,new_link_47406));


var G__47434 = cljs.core.next(seq__47175_47422__$1);
var G__47435 = null;
var G__47436 = (0);
var G__47437 = (0);
seq__47175_47407 = G__47434;
chunk__47177_47408 = G__47435;
count__47178_47409 = G__47436;
i__47179_47410 = G__47437;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47404);
});})(seq__47142_47400,chunk__47146_47401,count__47147_47402,i__47148_47403,seq__46968,chunk__46970,count__46971,i__46972,new_link_47406,path_match_47405,node_47404,path,seq__46968__$1,temp__5804__auto__,map__46967,map__46967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47405], 0));

goog.dom.insertSiblingAfter(new_link_47406,node_47404);


var G__47438 = seq__47142_47400;
var G__47439 = chunk__47146_47401;
var G__47440 = count__47147_47402;
var G__47441 = (i__47148_47403 + (1));
seq__47142_47400 = G__47438;
chunk__47146_47401 = G__47439;
count__47147_47402 = G__47440;
i__47148_47403 = G__47441;
continue;
} else {
var G__47442 = seq__47142_47400;
var G__47443 = chunk__47146_47401;
var G__47444 = count__47147_47402;
var G__47445 = (i__47148_47403 + (1));
seq__47142_47400 = G__47442;
chunk__47146_47401 = G__47443;
count__47147_47402 = G__47444;
i__47148_47403 = G__47445;
continue;
}
} else {
var G__47446 = seq__47142_47400;
var G__47447 = chunk__47146_47401;
var G__47448 = count__47147_47402;
var G__47449 = (i__47148_47403 + (1));
seq__47142_47400 = G__47446;
chunk__47146_47401 = G__47447;
count__47147_47402 = G__47448;
i__47148_47403 = G__47449;
continue;
}
} else {
var temp__5804__auto___47450__$1 = cljs.core.seq(seq__47142_47400);
if(temp__5804__auto___47450__$1){
var seq__47142_47451__$1 = temp__5804__auto___47450__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47142_47451__$1)){
var c__5568__auto___47452 = cljs.core.chunk_first(seq__47142_47451__$1);
var G__47453 = cljs.core.chunk_rest(seq__47142_47451__$1);
var G__47454 = c__5568__auto___47452;
var G__47455 = cljs.core.count(c__5568__auto___47452);
var G__47456 = (0);
seq__47142_47400 = G__47453;
chunk__47146_47401 = G__47454;
count__47147_47402 = G__47455;
i__47148_47403 = G__47456;
continue;
} else {
var node_47457 = cljs.core.first(seq__47142_47451__$1);
if(cljs.core.not(node_47457.shadow$old)){
var path_match_47458 = shadow.cljs.devtools.client.browser.match_paths(node_47457.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47458)){
var new_link_47459 = (function (){var G__47185 = node_47457.cloneNode(true);
G__47185.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47458),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47185;
})();
(node_47457.shadow$old = true);

(new_link_47459.onload = ((function (seq__47142_47400,chunk__47146_47401,count__47147_47402,i__47148_47403,seq__46968,chunk__46970,count__46971,i__46972,new_link_47459,path_match_47458,node_47457,seq__47142_47451__$1,temp__5804__auto___47450__$1,path,seq__46968__$1,temp__5804__auto__,map__46967,map__46967__$1,msg,updates,reload_info){
return (function (e){
var seq__47186_47460 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47188_47461 = null;
var count__47189_47462 = (0);
var i__47190_47463 = (0);
while(true){
if((i__47190_47463 < count__47189_47462)){
var map__47194_47464 = chunk__47188_47461.cljs$core$IIndexed$_nth$arity$2(null,i__47190_47463);
var map__47194_47465__$1 = cljs.core.__destructure_map(map__47194_47464);
var task_47466 = map__47194_47465__$1;
var fn_str_47467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194_47465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47194_47465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47469 = goog.getObjectByName(fn_str_47467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47468)].join(''));

(fn_obj_47469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47469.cljs$core$IFn$_invoke$arity$2(path,new_link_47459) : fn_obj_47469.call(null,path,new_link_47459));


var G__47470 = seq__47186_47460;
var G__47471 = chunk__47188_47461;
var G__47472 = count__47189_47462;
var G__47473 = (i__47190_47463 + (1));
seq__47186_47460 = G__47470;
chunk__47188_47461 = G__47471;
count__47189_47462 = G__47472;
i__47190_47463 = G__47473;
continue;
} else {
var temp__5804__auto___47474__$2 = cljs.core.seq(seq__47186_47460);
if(temp__5804__auto___47474__$2){
var seq__47186_47475__$1 = temp__5804__auto___47474__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47186_47475__$1)){
var c__5568__auto___47476 = cljs.core.chunk_first(seq__47186_47475__$1);
var G__47477 = cljs.core.chunk_rest(seq__47186_47475__$1);
var G__47478 = c__5568__auto___47476;
var G__47479 = cljs.core.count(c__5568__auto___47476);
var G__47480 = (0);
seq__47186_47460 = G__47477;
chunk__47188_47461 = G__47478;
count__47189_47462 = G__47479;
i__47190_47463 = G__47480;
continue;
} else {
var map__47195_47481 = cljs.core.first(seq__47186_47475__$1);
var map__47195_47482__$1 = cljs.core.__destructure_map(map__47195_47481);
var task_47483 = map__47195_47482__$1;
var fn_str_47484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47482__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47195_47482__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47486 = goog.getObjectByName(fn_str_47484,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47485)].join(''));

(fn_obj_47486.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47486.cljs$core$IFn$_invoke$arity$2(path,new_link_47459) : fn_obj_47486.call(null,path,new_link_47459));


var G__47487 = cljs.core.next(seq__47186_47475__$1);
var G__47488 = null;
var G__47489 = (0);
var G__47490 = (0);
seq__47186_47460 = G__47487;
chunk__47188_47461 = G__47488;
count__47189_47462 = G__47489;
i__47190_47463 = G__47490;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47457);
});})(seq__47142_47400,chunk__47146_47401,count__47147_47402,i__47148_47403,seq__46968,chunk__46970,count__46971,i__46972,new_link_47459,path_match_47458,node_47457,seq__47142_47451__$1,temp__5804__auto___47450__$1,path,seq__46968__$1,temp__5804__auto__,map__46967,map__46967__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47458], 0));

goog.dom.insertSiblingAfter(new_link_47459,node_47457);


var G__47491 = cljs.core.next(seq__47142_47451__$1);
var G__47492 = null;
var G__47493 = (0);
var G__47494 = (0);
seq__47142_47400 = G__47491;
chunk__47146_47401 = G__47492;
count__47147_47402 = G__47493;
i__47148_47403 = G__47494;
continue;
} else {
var G__47495 = cljs.core.next(seq__47142_47451__$1);
var G__47496 = null;
var G__47497 = (0);
var G__47498 = (0);
seq__47142_47400 = G__47495;
chunk__47146_47401 = G__47496;
count__47147_47402 = G__47497;
i__47148_47403 = G__47498;
continue;
}
} else {
var G__47499 = cljs.core.next(seq__47142_47451__$1);
var G__47500 = null;
var G__47501 = (0);
var G__47502 = (0);
seq__47142_47400 = G__47499;
chunk__47146_47401 = G__47500;
count__47147_47402 = G__47501;
i__47148_47403 = G__47502;
continue;
}
}
} else {
}
}
break;
}


var G__47503 = cljs.core.next(seq__46968__$1);
var G__47504 = null;
var G__47505 = (0);
var G__47506 = (0);
seq__46968 = G__47503;
chunk__46970 = G__47504;
count__46971 = G__47505;
i__46972 = G__47506;
continue;
} else {
var G__47507 = cljs.core.next(seq__46968__$1);
var G__47508 = null;
var G__47509 = (0);
var G__47510 = (0);
seq__46968 = G__47507;
chunk__46970 = G__47508;
count__46971 = G__47509;
i__46972 = G__47510;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47196){
var map__47197 = p__47196;
var map__47197__$1 = cljs.core.__destructure_map(map__47197);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47197__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47198){
var map__47199 = p__47198;
var map__47199__$1 = cljs.core.__destructure_map(map__47199);
var _ = map__47199__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47199__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47200,done,error){
var map__47201 = p__47200;
var map__47201__$1 = cljs.core.__destructure_map(map__47201);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47201__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47202,done,error){
var map__47203 = p__47202;
var map__47203__$1 = cljs.core.__destructure_map(map__47203);
var msg = map__47203__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47204){
var map__47205 = p__47204;
var map__47205__$1 = cljs.core.__destructure_map(map__47205);
var src = map__47205__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47206 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47206) : done.call(null,G__47206));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47207){
var map__47208 = p__47207;
var map__47208__$1 = cljs.core.__destructure_map(map__47208);
var msg__$1 = map__47208__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47208__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47209){var ex = e47209;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47210){
var map__47211 = p__47210;
var map__47211__$1 = cljs.core.__destructure_map(map__47211);
var env = map__47211__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47212){
var map__47213 = p__47212;
var map__47213__$1 = cljs.core.__destructure_map(map__47213);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47213__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47213__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__47214){
var map__47215 = p__47214;
var map__47215__$1 = cljs.core.__destructure_map(map__47215);
var svc = map__47215__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47215__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
