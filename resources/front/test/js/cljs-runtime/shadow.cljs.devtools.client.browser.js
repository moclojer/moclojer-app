goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52146 = arguments.length;
var i__5770__auto___52147 = (0);
while(true){
if((i__5770__auto___52147 < len__5769__auto___52146)){
args__5775__auto__.push((arguments[i__5770__auto___52147]));

var G__52148 = (i__5770__auto___52147 + (1));
i__5770__auto___52147 = G__52148;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51360){
var G__51361 = cljs.core.first(seq51360);
var seq51360__$1 = cljs.core.next(seq51360);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51361,seq51360__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51363 = cljs.core.seq(sources);
var chunk__51364 = null;
var count__51365 = (0);
var i__51366 = (0);
while(true){
if((i__51366 < count__51365)){
var map__51371 = chunk__51364.cljs$core$IIndexed$_nth$arity$2(null,i__51366);
var map__51371__$1 = cljs.core.__destructure_map(map__51371);
var src = map__51371__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51379){var e_52157 = e51379;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52157);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52157.message)].join('')));
}

var G__52158 = seq__51363;
var G__52159 = chunk__51364;
var G__52160 = count__51365;
var G__52161 = (i__51366 + (1));
seq__51363 = G__52158;
chunk__51364 = G__52159;
count__51365 = G__52160;
i__51366 = G__52161;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51363);
if(temp__5804__auto__){
var seq__51363__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51363__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51363__$1);
var G__52162 = cljs.core.chunk_rest(seq__51363__$1);
var G__52163 = c__5568__auto__;
var G__52164 = cljs.core.count(c__5568__auto__);
var G__52165 = (0);
seq__51363 = G__52162;
chunk__51364 = G__52163;
count__51365 = G__52164;
i__51366 = G__52165;
continue;
} else {
var map__51388 = cljs.core.first(seq__51363__$1);
var map__51388__$1 = cljs.core.__destructure_map(map__51388);
var src = map__51388__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51388__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51389){var e_52166 = e51389;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52166);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52166.message)].join('')));
}

var G__52167 = cljs.core.next(seq__51363__$1);
var G__52168 = null;
var G__52169 = (0);
var G__52170 = (0);
seq__51363 = G__52167;
chunk__51364 = G__52168;
count__51365 = G__52169;
i__51366 = G__52170;
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
var seq__51401 = cljs.core.seq(js_requires);
var chunk__51402 = null;
var count__51403 = (0);
var i__51404 = (0);
while(true){
if((i__51404 < count__51403)){
var js_ns = chunk__51402.cljs$core$IIndexed$_nth$arity$2(null,i__51404);
var require_str_52171 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52171);


var G__52173 = seq__51401;
var G__52174 = chunk__51402;
var G__52175 = count__51403;
var G__52176 = (i__51404 + (1));
seq__51401 = G__52173;
chunk__51402 = G__52174;
count__51403 = G__52175;
i__51404 = G__52176;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51401);
if(temp__5804__auto__){
var seq__51401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51401__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51401__$1);
var G__52177 = cljs.core.chunk_rest(seq__51401__$1);
var G__52178 = c__5568__auto__;
var G__52179 = cljs.core.count(c__5568__auto__);
var G__52180 = (0);
seq__51401 = G__52177;
chunk__51402 = G__52178;
count__51403 = G__52179;
i__51404 = G__52180;
continue;
} else {
var js_ns = cljs.core.first(seq__51401__$1);
var require_str_52215 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52215);


var G__52218 = cljs.core.next(seq__51401__$1);
var G__52219 = null;
var G__52220 = (0);
var G__52221 = (0);
seq__51401 = G__52218;
chunk__51402 = G__52219;
count__51403 = G__52220;
i__51404 = G__52221;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51423){
var map__51424 = p__51423;
var map__51424__$1 = cljs.core.__destructure_map(map__51424);
var msg = map__51424__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51424__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51428(s__51429){
return (new cljs.core.LazySeq(null,(function (){
var s__51429__$1 = s__51429;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51429__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__51435 = cljs.core.first(xs__6360__auto__);
var map__51435__$1 = cljs.core.__destructure_map(map__51435);
var src = map__51435__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51435__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__51429__$1,map__51435,map__51435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51424,map__51424__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51428_$_iter__51430(s__51431){
return (new cljs.core.LazySeq(null,((function (s__51429__$1,map__51435,map__51435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51424,map__51424__$1,msg,info,reload_info){
return (function (){
var s__51431__$1 = s__51431;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51431__$1);
if(temp__5804__auto____$1){
var s__51431__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51431__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51431__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51433 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51432 = (0);
while(true){
if((i__51432 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__51432);
cljs.core.chunk_append(b__51433,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52222 = (i__51432 + (1));
i__51432 = G__52222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51433),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51428_$_iter__51430(cljs.core.chunk_rest(s__51431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51433),null);
}
} else {
var warning = cljs.core.first(s__51431__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51428_$_iter__51430(cljs.core.rest(s__51431__$2)));
}
} else {
return null;
}
break;
}
});})(s__51429__$1,map__51435,map__51435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51424,map__51424__$1,msg,info,reload_info))
,null,null));
});})(s__51429__$1,map__51435,map__51435__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51424,map__51424__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51428(cljs.core.rest(s__51429__$1)));
} else {
var G__52246 = cljs.core.rest(s__51429__$1);
s__51429__$1 = G__52246;
continue;
}
} else {
var G__52247 = cljs.core.rest(s__51429__$1);
s__51429__$1 = G__52247;
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
var seq__51443_52249 = cljs.core.seq(warnings);
var chunk__51444_52250 = null;
var count__51445_52251 = (0);
var i__51446_52252 = (0);
while(true){
if((i__51446_52252 < count__51445_52251)){
var map__51459_52253 = chunk__51444_52250.cljs$core$IIndexed$_nth$arity$2(null,i__51446_52252);
var map__51459_52254__$1 = cljs.core.__destructure_map(map__51459_52253);
var w_52255 = map__51459_52254__$1;
var msg_52256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459_52254__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459_52254__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459_52254__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459_52254__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52259)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52257),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52258),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52256__$1)].join(''));


var G__52260 = seq__51443_52249;
var G__52261 = chunk__51444_52250;
var G__52262 = count__51445_52251;
var G__52263 = (i__51446_52252 + (1));
seq__51443_52249 = G__52260;
chunk__51444_52250 = G__52261;
count__51445_52251 = G__52262;
i__51446_52252 = G__52263;
continue;
} else {
var temp__5804__auto___52264 = cljs.core.seq(seq__51443_52249);
if(temp__5804__auto___52264){
var seq__51443_52265__$1 = temp__5804__auto___52264;
if(cljs.core.chunked_seq_QMARK_(seq__51443_52265__$1)){
var c__5568__auto___52266 = cljs.core.chunk_first(seq__51443_52265__$1);
var G__52267 = cljs.core.chunk_rest(seq__51443_52265__$1);
var G__52268 = c__5568__auto___52266;
var G__52269 = cljs.core.count(c__5568__auto___52266);
var G__52270 = (0);
seq__51443_52249 = G__52267;
chunk__51444_52250 = G__52268;
count__51445_52251 = G__52269;
i__51446_52252 = G__52270;
continue;
} else {
var map__51461_52271 = cljs.core.first(seq__51443_52265__$1);
var map__51461_52272__$1 = cljs.core.__destructure_map(map__51461_52271);
var w_52273 = map__51461_52272__$1;
var msg_52274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461_52272__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461_52272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461_52272__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51461_52272__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52277)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52275),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52276),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52274__$1)].join(''));


var G__52278 = cljs.core.next(seq__51443_52265__$1);
var G__52279 = null;
var G__52280 = (0);
var G__52281 = (0);
seq__51443_52249 = G__52278;
chunk__51444_52250 = G__52279;
count__51445_52251 = G__52280;
i__51446_52252 = G__52281;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51422_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51422_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51482){
var map__51483 = p__51482;
var map__51483__$1 = cljs.core.__destructure_map(map__51483);
var msg = map__51483__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51483__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__51484 = cljs.core.seq(updates);
var chunk__51486 = null;
var count__51487 = (0);
var i__51488 = (0);
while(true){
if((i__51488 < count__51487)){
var path = chunk__51486.cljs$core$IIndexed$_nth$arity$2(null,i__51488);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51828_52286 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51832_52287 = null;
var count__51833_52288 = (0);
var i__51834_52289 = (0);
while(true){
if((i__51834_52289 < count__51833_52288)){
var node_52291 = chunk__51832_52287.cljs$core$IIndexed$_nth$arity$2(null,i__51834_52289);
if(cljs.core.not(node_52291.shadow$old)){
var path_match_52292 = shadow.cljs.devtools.client.browser.match_paths(node_52291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52292)){
var new_link_52296 = (function (){var G__51876 = node_52291.cloneNode(true);
G__51876.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51876;
})();
(node_52291.shadow$old = true);

(new_link_52296.onload = ((function (seq__51828_52286,chunk__51832_52287,count__51833_52288,i__51834_52289,seq__51484,chunk__51486,count__51487,i__51488,new_link_52296,path_match_52292,node_52291,path,map__51483,map__51483__$1,msg,updates,reload_info){
return (function (e){
var seq__51877_52297 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51879_52298 = null;
var count__51880_52299 = (0);
var i__51881_52300 = (0);
while(true){
if((i__51881_52300 < count__51880_52299)){
var map__51887_52301 = chunk__51879_52298.cljs$core$IIndexed$_nth$arity$2(null,i__51881_52300);
var map__51887_52302__$1 = cljs.core.__destructure_map(map__51887_52301);
var task_52303 = map__51887_52302__$1;
var fn_str_52304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887_52302__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887_52302__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52309 = goog.getObjectByName(fn_str_52304,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52305)].join(''));

(fn_obj_52309.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52309.cljs$core$IFn$_invoke$arity$2(path,new_link_52296) : fn_obj_52309.call(null,path,new_link_52296));


var G__52310 = seq__51877_52297;
var G__52311 = chunk__51879_52298;
var G__52312 = count__51880_52299;
var G__52313 = (i__51881_52300 + (1));
seq__51877_52297 = G__52310;
chunk__51879_52298 = G__52311;
count__51880_52299 = G__52312;
i__51881_52300 = G__52313;
continue;
} else {
var temp__5804__auto___52314 = cljs.core.seq(seq__51877_52297);
if(temp__5804__auto___52314){
var seq__51877_52315__$1 = temp__5804__auto___52314;
if(cljs.core.chunked_seq_QMARK_(seq__51877_52315__$1)){
var c__5568__auto___52317 = cljs.core.chunk_first(seq__51877_52315__$1);
var G__52319 = cljs.core.chunk_rest(seq__51877_52315__$1);
var G__52320 = c__5568__auto___52317;
var G__52321 = cljs.core.count(c__5568__auto___52317);
var G__52322 = (0);
seq__51877_52297 = G__52319;
chunk__51879_52298 = G__52320;
count__51880_52299 = G__52321;
i__51881_52300 = G__52322;
continue;
} else {
var map__51888_52323 = cljs.core.first(seq__51877_52315__$1);
var map__51888_52324__$1 = cljs.core.__destructure_map(map__51888_52323);
var task_52325 = map__51888_52324__$1;
var fn_str_52326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888_52324__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51888_52324__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52328 = goog.getObjectByName(fn_str_52326,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52327)].join(''));

(fn_obj_52328.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52328.cljs$core$IFn$_invoke$arity$2(path,new_link_52296) : fn_obj_52328.call(null,path,new_link_52296));


var G__52329 = cljs.core.next(seq__51877_52315__$1);
var G__52330 = null;
var G__52331 = (0);
var G__52332 = (0);
seq__51877_52297 = G__52329;
chunk__51879_52298 = G__52330;
count__51880_52299 = G__52331;
i__51881_52300 = G__52332;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52291);
});})(seq__51828_52286,chunk__51832_52287,count__51833_52288,i__51834_52289,seq__51484,chunk__51486,count__51487,i__51488,new_link_52296,path_match_52292,node_52291,path,map__51483,map__51483__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52292], 0));

goog.dom.insertSiblingAfter(new_link_52296,node_52291);


var G__52333 = seq__51828_52286;
var G__52334 = chunk__51832_52287;
var G__52335 = count__51833_52288;
var G__52336 = (i__51834_52289 + (1));
seq__51828_52286 = G__52333;
chunk__51832_52287 = G__52334;
count__51833_52288 = G__52335;
i__51834_52289 = G__52336;
continue;
} else {
var G__52337 = seq__51828_52286;
var G__52338 = chunk__51832_52287;
var G__52339 = count__51833_52288;
var G__52340 = (i__51834_52289 + (1));
seq__51828_52286 = G__52337;
chunk__51832_52287 = G__52338;
count__51833_52288 = G__52339;
i__51834_52289 = G__52340;
continue;
}
} else {
var G__52341 = seq__51828_52286;
var G__52342 = chunk__51832_52287;
var G__52343 = count__51833_52288;
var G__52344 = (i__51834_52289 + (1));
seq__51828_52286 = G__52341;
chunk__51832_52287 = G__52342;
count__51833_52288 = G__52343;
i__51834_52289 = G__52344;
continue;
}
} else {
var temp__5804__auto___52345 = cljs.core.seq(seq__51828_52286);
if(temp__5804__auto___52345){
var seq__51828_52346__$1 = temp__5804__auto___52345;
if(cljs.core.chunked_seq_QMARK_(seq__51828_52346__$1)){
var c__5568__auto___52347 = cljs.core.chunk_first(seq__51828_52346__$1);
var G__52348 = cljs.core.chunk_rest(seq__51828_52346__$1);
var G__52349 = c__5568__auto___52347;
var G__52350 = cljs.core.count(c__5568__auto___52347);
var G__52351 = (0);
seq__51828_52286 = G__52348;
chunk__51832_52287 = G__52349;
count__51833_52288 = G__52350;
i__51834_52289 = G__52351;
continue;
} else {
var node_52352 = cljs.core.first(seq__51828_52346__$1);
if(cljs.core.not(node_52352.shadow$old)){
var path_match_52353 = shadow.cljs.devtools.client.browser.match_paths(node_52352.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52353)){
var new_link_52354 = (function (){var G__51889 = node_52352.cloneNode(true);
G__51889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52353),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51889;
})();
(node_52352.shadow$old = true);

(new_link_52354.onload = ((function (seq__51828_52286,chunk__51832_52287,count__51833_52288,i__51834_52289,seq__51484,chunk__51486,count__51487,i__51488,new_link_52354,path_match_52353,node_52352,seq__51828_52346__$1,temp__5804__auto___52345,path,map__51483,map__51483__$1,msg,updates,reload_info){
return (function (e){
var seq__51892_52355 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51894_52356 = null;
var count__51895_52357 = (0);
var i__51896_52358 = (0);
while(true){
if((i__51896_52358 < count__51895_52357)){
var map__51908_52359 = chunk__51894_52356.cljs$core$IIndexed$_nth$arity$2(null,i__51896_52358);
var map__51908_52360__$1 = cljs.core.__destructure_map(map__51908_52359);
var task_52361 = map__51908_52360__$1;
var fn_str_52362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51908_52360__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51908_52360__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52364 = goog.getObjectByName(fn_str_52362,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52363)].join(''));

(fn_obj_52364.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52364.cljs$core$IFn$_invoke$arity$2(path,new_link_52354) : fn_obj_52364.call(null,path,new_link_52354));


var G__52365 = seq__51892_52355;
var G__52366 = chunk__51894_52356;
var G__52367 = count__51895_52357;
var G__52368 = (i__51896_52358 + (1));
seq__51892_52355 = G__52365;
chunk__51894_52356 = G__52366;
count__51895_52357 = G__52367;
i__51896_52358 = G__52368;
continue;
} else {
var temp__5804__auto___52369__$1 = cljs.core.seq(seq__51892_52355);
if(temp__5804__auto___52369__$1){
var seq__51892_52370__$1 = temp__5804__auto___52369__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51892_52370__$1)){
var c__5568__auto___52371 = cljs.core.chunk_first(seq__51892_52370__$1);
var G__52372 = cljs.core.chunk_rest(seq__51892_52370__$1);
var G__52373 = c__5568__auto___52371;
var G__52374 = cljs.core.count(c__5568__auto___52371);
var G__52375 = (0);
seq__51892_52355 = G__52372;
chunk__51894_52356 = G__52373;
count__51895_52357 = G__52374;
i__51896_52358 = G__52375;
continue;
} else {
var map__51912_52376 = cljs.core.first(seq__51892_52370__$1);
var map__51912_52377__$1 = cljs.core.__destructure_map(map__51912_52376);
var task_52378 = map__51912_52377__$1;
var fn_str_52379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912_52377__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912_52377__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52381 = goog.getObjectByName(fn_str_52379,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52380)].join(''));

(fn_obj_52381.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52381.cljs$core$IFn$_invoke$arity$2(path,new_link_52354) : fn_obj_52381.call(null,path,new_link_52354));


var G__52382 = cljs.core.next(seq__51892_52370__$1);
var G__52383 = null;
var G__52384 = (0);
var G__52385 = (0);
seq__51892_52355 = G__52382;
chunk__51894_52356 = G__52383;
count__51895_52357 = G__52384;
i__51896_52358 = G__52385;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52352);
});})(seq__51828_52286,chunk__51832_52287,count__51833_52288,i__51834_52289,seq__51484,chunk__51486,count__51487,i__51488,new_link_52354,path_match_52353,node_52352,seq__51828_52346__$1,temp__5804__auto___52345,path,map__51483,map__51483__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52353], 0));

goog.dom.insertSiblingAfter(new_link_52354,node_52352);


var G__52386 = cljs.core.next(seq__51828_52346__$1);
var G__52387 = null;
var G__52388 = (0);
var G__52389 = (0);
seq__51828_52286 = G__52386;
chunk__51832_52287 = G__52387;
count__51833_52288 = G__52388;
i__51834_52289 = G__52389;
continue;
} else {
var G__52390 = cljs.core.next(seq__51828_52346__$1);
var G__52391 = null;
var G__52392 = (0);
var G__52393 = (0);
seq__51828_52286 = G__52390;
chunk__51832_52287 = G__52391;
count__51833_52288 = G__52392;
i__51834_52289 = G__52393;
continue;
}
} else {
var G__52394 = cljs.core.next(seq__51828_52346__$1);
var G__52395 = null;
var G__52396 = (0);
var G__52397 = (0);
seq__51828_52286 = G__52394;
chunk__51832_52287 = G__52395;
count__51833_52288 = G__52396;
i__51834_52289 = G__52397;
continue;
}
}
} else {
}
}
break;
}


var G__52398 = seq__51484;
var G__52399 = chunk__51486;
var G__52400 = count__51487;
var G__52401 = (i__51488 + (1));
seq__51484 = G__52398;
chunk__51486 = G__52399;
count__51487 = G__52400;
i__51488 = G__52401;
continue;
} else {
var G__52402 = seq__51484;
var G__52403 = chunk__51486;
var G__52404 = count__51487;
var G__52405 = (i__51488 + (1));
seq__51484 = G__52402;
chunk__51486 = G__52403;
count__51487 = G__52404;
i__51488 = G__52405;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51484);
if(temp__5804__auto__){
var seq__51484__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51484__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51484__$1);
var G__52406 = cljs.core.chunk_rest(seq__51484__$1);
var G__52407 = c__5568__auto__;
var G__52408 = cljs.core.count(c__5568__auto__);
var G__52409 = (0);
seq__51484 = G__52406;
chunk__51486 = G__52407;
count__51487 = G__52408;
i__51488 = G__52409;
continue;
} else {
var path = cljs.core.first(seq__51484__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51917_52411 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51921_52412 = null;
var count__51922_52413 = (0);
var i__51923_52414 = (0);
while(true){
if((i__51923_52414 < count__51922_52413)){
var node_52416 = chunk__51921_52412.cljs$core$IIndexed$_nth$arity$2(null,i__51923_52414);
if(cljs.core.not(node_52416.shadow$old)){
var path_match_52417 = shadow.cljs.devtools.client.browser.match_paths(node_52416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52417)){
var new_link_52418 = (function (){var G__51966 = node_52416.cloneNode(true);
G__51966.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51966;
})();
(node_52416.shadow$old = true);

(new_link_52418.onload = ((function (seq__51917_52411,chunk__51921_52412,count__51922_52413,i__51923_52414,seq__51484,chunk__51486,count__51487,i__51488,new_link_52418,path_match_52417,node_52416,path,seq__51484__$1,temp__5804__auto__,map__51483,map__51483__$1,msg,updates,reload_info){
return (function (e){
var seq__51967_52419 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51969_52420 = null;
var count__51970_52421 = (0);
var i__51971_52422 = (0);
while(true){
if((i__51971_52422 < count__51970_52421)){
var map__51977_52423 = chunk__51969_52420.cljs$core$IIndexed$_nth$arity$2(null,i__51971_52422);
var map__51977_52424__$1 = cljs.core.__destructure_map(map__51977_52423);
var task_52425 = map__51977_52424__$1;
var fn_str_52426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977_52424__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977_52424__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52428 = goog.getObjectByName(fn_str_52426,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52427)].join(''));

(fn_obj_52428.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52428.cljs$core$IFn$_invoke$arity$2(path,new_link_52418) : fn_obj_52428.call(null,path,new_link_52418));


var G__52429 = seq__51967_52419;
var G__52430 = chunk__51969_52420;
var G__52431 = count__51970_52421;
var G__52432 = (i__51971_52422 + (1));
seq__51967_52419 = G__52429;
chunk__51969_52420 = G__52430;
count__51970_52421 = G__52431;
i__51971_52422 = G__52432;
continue;
} else {
var temp__5804__auto___52433__$1 = cljs.core.seq(seq__51967_52419);
if(temp__5804__auto___52433__$1){
var seq__51967_52434__$1 = temp__5804__auto___52433__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51967_52434__$1)){
var c__5568__auto___52435 = cljs.core.chunk_first(seq__51967_52434__$1);
var G__52436 = cljs.core.chunk_rest(seq__51967_52434__$1);
var G__52437 = c__5568__auto___52435;
var G__52438 = cljs.core.count(c__5568__auto___52435);
var G__52439 = (0);
seq__51967_52419 = G__52436;
chunk__51969_52420 = G__52437;
count__51970_52421 = G__52438;
i__51971_52422 = G__52439;
continue;
} else {
var map__51978_52442 = cljs.core.first(seq__51967_52434__$1);
var map__51978_52443__$1 = cljs.core.__destructure_map(map__51978_52442);
var task_52444 = map__51978_52443__$1;
var fn_str_52445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978_52443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978_52443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52449 = goog.getObjectByName(fn_str_52445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52446)].join(''));

(fn_obj_52449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52449.cljs$core$IFn$_invoke$arity$2(path,new_link_52418) : fn_obj_52449.call(null,path,new_link_52418));


var G__52450 = cljs.core.next(seq__51967_52434__$1);
var G__52451 = null;
var G__52452 = (0);
var G__52453 = (0);
seq__51967_52419 = G__52450;
chunk__51969_52420 = G__52451;
count__51970_52421 = G__52452;
i__51971_52422 = G__52453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52416);
});})(seq__51917_52411,chunk__51921_52412,count__51922_52413,i__51923_52414,seq__51484,chunk__51486,count__51487,i__51488,new_link_52418,path_match_52417,node_52416,path,seq__51484__$1,temp__5804__auto__,map__51483,map__51483__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52417], 0));

goog.dom.insertSiblingAfter(new_link_52418,node_52416);


var G__52456 = seq__51917_52411;
var G__52457 = chunk__51921_52412;
var G__52458 = count__51922_52413;
var G__52459 = (i__51923_52414 + (1));
seq__51917_52411 = G__52456;
chunk__51921_52412 = G__52457;
count__51922_52413 = G__52458;
i__51923_52414 = G__52459;
continue;
} else {
var G__52460 = seq__51917_52411;
var G__52461 = chunk__51921_52412;
var G__52462 = count__51922_52413;
var G__52463 = (i__51923_52414 + (1));
seq__51917_52411 = G__52460;
chunk__51921_52412 = G__52461;
count__51922_52413 = G__52462;
i__51923_52414 = G__52463;
continue;
}
} else {
var G__52465 = seq__51917_52411;
var G__52466 = chunk__51921_52412;
var G__52467 = count__51922_52413;
var G__52468 = (i__51923_52414 + (1));
seq__51917_52411 = G__52465;
chunk__51921_52412 = G__52466;
count__51922_52413 = G__52467;
i__51923_52414 = G__52468;
continue;
}
} else {
var temp__5804__auto___52469__$1 = cljs.core.seq(seq__51917_52411);
if(temp__5804__auto___52469__$1){
var seq__51917_52470__$1 = temp__5804__auto___52469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51917_52470__$1)){
var c__5568__auto___52471 = cljs.core.chunk_first(seq__51917_52470__$1);
var G__52472 = cljs.core.chunk_rest(seq__51917_52470__$1);
var G__52473 = c__5568__auto___52471;
var G__52474 = cljs.core.count(c__5568__auto___52471);
var G__52475 = (0);
seq__51917_52411 = G__52472;
chunk__51921_52412 = G__52473;
count__51922_52413 = G__52474;
i__51923_52414 = G__52475;
continue;
} else {
var node_52476 = cljs.core.first(seq__51917_52470__$1);
if(cljs.core.not(node_52476.shadow$old)){
var path_match_52477 = shadow.cljs.devtools.client.browser.match_paths(node_52476.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52477)){
var new_link_52478 = (function (){var G__52007 = node_52476.cloneNode(true);
G__52007.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52477),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52007;
})();
(node_52476.shadow$old = true);

(new_link_52478.onload = ((function (seq__51917_52411,chunk__51921_52412,count__51922_52413,i__51923_52414,seq__51484,chunk__51486,count__51487,i__51488,new_link_52478,path_match_52477,node_52476,seq__51917_52470__$1,temp__5804__auto___52469__$1,path,seq__51484__$1,temp__5804__auto__,map__51483,map__51483__$1,msg,updates,reload_info){
return (function (e){
var seq__52010_52492 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52012_52493 = null;
var count__52013_52494 = (0);
var i__52014_52495 = (0);
while(true){
if((i__52014_52495 < count__52013_52494)){
var map__52027_52496 = chunk__52012_52493.cljs$core$IIndexed$_nth$arity$2(null,i__52014_52495);
var map__52027_52497__$1 = cljs.core.__destructure_map(map__52027_52496);
var task_52498 = map__52027_52497__$1;
var fn_str_52499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52027_52497__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52027_52497__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52501 = goog.getObjectByName(fn_str_52499,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52500)].join(''));

(fn_obj_52501.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52501.cljs$core$IFn$_invoke$arity$2(path,new_link_52478) : fn_obj_52501.call(null,path,new_link_52478));


var G__52502 = seq__52010_52492;
var G__52503 = chunk__52012_52493;
var G__52504 = count__52013_52494;
var G__52505 = (i__52014_52495 + (1));
seq__52010_52492 = G__52502;
chunk__52012_52493 = G__52503;
count__52013_52494 = G__52504;
i__52014_52495 = G__52505;
continue;
} else {
var temp__5804__auto___52506__$2 = cljs.core.seq(seq__52010_52492);
if(temp__5804__auto___52506__$2){
var seq__52010_52507__$1 = temp__5804__auto___52506__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52010_52507__$1)){
var c__5568__auto___52508 = cljs.core.chunk_first(seq__52010_52507__$1);
var G__52509 = cljs.core.chunk_rest(seq__52010_52507__$1);
var G__52510 = c__5568__auto___52508;
var G__52511 = cljs.core.count(c__5568__auto___52508);
var G__52512 = (0);
seq__52010_52492 = G__52509;
chunk__52012_52493 = G__52510;
count__52013_52494 = G__52511;
i__52014_52495 = G__52512;
continue;
} else {
var map__52028_52513 = cljs.core.first(seq__52010_52507__$1);
var map__52028_52514__$1 = cljs.core.__destructure_map(map__52028_52513);
var task_52515 = map__52028_52514__$1;
var fn_str_52516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028_52514__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_52517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028_52514__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_52518 = goog.getObjectByName(fn_str_52516,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_52517)].join(''));

(fn_obj_52518.cljs$core$IFn$_invoke$arity$2 ? fn_obj_52518.cljs$core$IFn$_invoke$arity$2(path,new_link_52478) : fn_obj_52518.call(null,path,new_link_52478));


var G__52519 = cljs.core.next(seq__52010_52507__$1);
var G__52520 = null;
var G__52521 = (0);
var G__52522 = (0);
seq__52010_52492 = G__52519;
chunk__52012_52493 = G__52520;
count__52013_52494 = G__52521;
i__52014_52495 = G__52522;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_52476);
});})(seq__51917_52411,chunk__51921_52412,count__51922_52413,i__51923_52414,seq__51484,chunk__51486,count__51487,i__51488,new_link_52478,path_match_52477,node_52476,seq__51917_52470__$1,temp__5804__auto___52469__$1,path,seq__51484__$1,temp__5804__auto__,map__51483,map__51483__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52477], 0));

goog.dom.insertSiblingAfter(new_link_52478,node_52476);


var G__52524 = cljs.core.next(seq__51917_52470__$1);
var G__52525 = null;
var G__52526 = (0);
var G__52527 = (0);
seq__51917_52411 = G__52524;
chunk__51921_52412 = G__52525;
count__51922_52413 = G__52526;
i__51923_52414 = G__52527;
continue;
} else {
var G__52529 = cljs.core.next(seq__51917_52470__$1);
var G__52530 = null;
var G__52531 = (0);
var G__52532 = (0);
seq__51917_52411 = G__52529;
chunk__51921_52412 = G__52530;
count__51922_52413 = G__52531;
i__51923_52414 = G__52532;
continue;
}
} else {
var G__52533 = cljs.core.next(seq__51917_52470__$1);
var G__52534 = null;
var G__52535 = (0);
var G__52536 = (0);
seq__51917_52411 = G__52533;
chunk__51921_52412 = G__52534;
count__51922_52413 = G__52535;
i__51923_52414 = G__52536;
continue;
}
}
} else {
}
}
break;
}


var G__52537 = cljs.core.next(seq__51484__$1);
var G__52538 = null;
var G__52539 = (0);
var G__52540 = (0);
seq__51484 = G__52537;
chunk__51486 = G__52538;
count__51487 = G__52539;
i__51488 = G__52540;
continue;
} else {
var G__52541 = cljs.core.next(seq__51484__$1);
var G__52542 = null;
var G__52543 = (0);
var G__52544 = (0);
seq__51484 = G__52541;
chunk__51486 = G__52542;
count__51487 = G__52543;
i__51488 = G__52544;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52036){
var map__52037 = p__52036;
var map__52037__$1 = cljs.core.__destructure_map(map__52037);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52037__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52060){
var map__52061 = p__52060;
var map__52061__$1 = cljs.core.__destructure_map(map__52061);
var _ = map__52061__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52061__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52065,done,error){
var map__52066 = p__52065;
var map__52066__$1 = cljs.core.__destructure_map(map__52066);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52079,done,error){
var map__52080 = p__52079;
var map__52080__$1 = cljs.core.__destructure_map(map__52080);
var msg = map__52080__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52080__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52083){
var map__52084 = p__52083;
var map__52084__$1 = cljs.core.__destructure_map(map__52084);
var src = map__52084__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52084__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52085 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52085) : done.call(null,G__52085));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52099){
var map__52100 = p__52099;
var map__52100__$1 = cljs.core.__destructure_map(map__52100);
var msg__$1 = map__52100__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52101){var ex = e52101;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52104){
var map__52105 = p__52104;
var map__52105__$1 = cljs.core.__destructure_map(map__52105);
var env = map__52105__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52122){
var map__52123 = p__52122;
var map__52123__$1 = cljs.core.__destructure_map(map__52123);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52127){
var map__52129 = p__52127;
var map__52129__$1 = cljs.core.__destructure_map(map__52129);
var svc = map__52129__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
