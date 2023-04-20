goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39453 = arguments.length;
var i__5770__auto___39454 = (0);
while(true){
if((i__5770__auto___39454 < len__5769__auto___39453)){
args__5775__auto__.push((arguments[i__5770__auto___39454]));

var G__39455 = (i__5770__auto___39454 + (1));
i__5770__auto___39454 = G__39455;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38975){
var G__38976 = cljs.core.first(seq38975);
var seq38975__$1 = cljs.core.next(seq38975);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38976,seq38975__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38984 = cljs.core.seq(sources);
var chunk__38985 = null;
var count__38986 = (0);
var i__38987 = (0);
while(true){
if((i__38987 < count__38986)){
var map__38999 = chunk__38985.cljs$core$IIndexed$_nth$arity$2(null,i__38987);
var map__38999__$1 = cljs.core.__destructure_map(map__38999);
var src = map__38999__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38999__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39000){var e_39456 = e39000;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39456);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39456.message)].join('')));
}

var G__39457 = seq__38984;
var G__39458 = chunk__38985;
var G__39459 = count__38986;
var G__39460 = (i__38987 + (1));
seq__38984 = G__39457;
chunk__38985 = G__39458;
count__38986 = G__39459;
i__38987 = G__39460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38984);
if(temp__5804__auto__){
var seq__38984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38984__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38984__$1);
var G__39462 = cljs.core.chunk_rest(seq__38984__$1);
var G__39463 = c__5568__auto__;
var G__39464 = cljs.core.count(c__5568__auto__);
var G__39465 = (0);
seq__38984 = G__39462;
chunk__38985 = G__39463;
count__38986 = G__39464;
i__38987 = G__39465;
continue;
} else {
var map__39010 = cljs.core.first(seq__38984__$1);
var map__39010__$1 = cljs.core.__destructure_map(map__39010);
var src = map__39010__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39010__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39013){var e_39466 = e39013;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39466);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39466.message)].join('')));
}

var G__39467 = cljs.core.next(seq__38984__$1);
var G__39468 = null;
var G__39469 = (0);
var G__39470 = (0);
seq__38984 = G__39467;
chunk__38985 = G__39468;
count__38986 = G__39469;
i__38987 = G__39470;
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
var seq__39024 = cljs.core.seq(js_requires);
var chunk__39025 = null;
var count__39026 = (0);
var i__39027 = (0);
while(true){
if((i__39027 < count__39026)){
var js_ns = chunk__39025.cljs$core$IIndexed$_nth$arity$2(null,i__39027);
var require_str_39473 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39473);


var G__39474 = seq__39024;
var G__39475 = chunk__39025;
var G__39476 = count__39026;
var G__39477 = (i__39027 + (1));
seq__39024 = G__39474;
chunk__39025 = G__39475;
count__39026 = G__39476;
i__39027 = G__39477;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39024);
if(temp__5804__auto__){
var seq__39024__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39024__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39024__$1);
var G__39478 = cljs.core.chunk_rest(seq__39024__$1);
var G__39479 = c__5568__auto__;
var G__39480 = cljs.core.count(c__5568__auto__);
var G__39481 = (0);
seq__39024 = G__39478;
chunk__39025 = G__39479;
count__39026 = G__39480;
i__39027 = G__39481;
continue;
} else {
var js_ns = cljs.core.first(seq__39024__$1);
var require_str_39482 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39482);


var G__39483 = cljs.core.next(seq__39024__$1);
var G__39484 = null;
var G__39485 = (0);
var G__39486 = (0);
seq__39024 = G__39483;
chunk__39025 = G__39484;
count__39026 = G__39485;
i__39027 = G__39486;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39038){
var map__39041 = p__39038;
var map__39041__$1 = cljs.core.__destructure_map(map__39041);
var msg = map__39041__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39041__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39041__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39045(s__39046){
return (new cljs.core.LazySeq(null,(function (){
var s__39046__$1 = s__39046;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39046__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__39056 = cljs.core.first(xs__6360__auto__);
var map__39056__$1 = cljs.core.__destructure_map(map__39056);
var src = map__39056__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39046__$1,map__39056,map__39056__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39041,map__39041__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39045_$_iter__39047(s__39048){
return (new cljs.core.LazySeq(null,((function (s__39046__$1,map__39056,map__39056__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39041,map__39041__$1,msg,info,reload_info){
return (function (){
var s__39048__$1 = s__39048;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__39048__$1);
if(temp__5804__auto____$1){
var s__39048__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39048__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39048__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39050 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39049 = (0);
while(true){
if((i__39049 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39049);
cljs.core.chunk_append(b__39050,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39487 = (i__39049 + (1));
i__39049 = G__39487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39050),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39045_$_iter__39047(cljs.core.chunk_rest(s__39048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39050),null);
}
} else {
var warning = cljs.core.first(s__39048__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39045_$_iter__39047(cljs.core.rest(s__39048__$2)));
}
} else {
return null;
}
break;
}
});})(s__39046__$1,map__39056,map__39056__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39041,map__39041__$1,msg,info,reload_info))
,null,null));
});})(s__39046__$1,map__39056,map__39056__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__39041,map__39041__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39045(cljs.core.rest(s__39046__$1)));
} else {
var G__39488 = cljs.core.rest(s__39046__$1);
s__39046__$1 = G__39488;
continue;
}
} else {
var G__39489 = cljs.core.rest(s__39046__$1);
s__39046__$1 = G__39489;
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
var seq__39067_39490 = cljs.core.seq(warnings);
var chunk__39068_39491 = null;
var count__39069_39492 = (0);
var i__39070_39493 = (0);
while(true){
if((i__39070_39493 < count__39069_39492)){
var map__39078_39495 = chunk__39068_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39070_39493);
var map__39078_39496__$1 = cljs.core.__destructure_map(map__39078_39495);
var w_39497 = map__39078_39496__$1;
var msg_39498__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078_39496__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078_39496__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078_39496__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39078_39496__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39501)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39499),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39500),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39498__$1)].join(''));


var G__39502 = seq__39067_39490;
var G__39503 = chunk__39068_39491;
var G__39504 = count__39069_39492;
var G__39505 = (i__39070_39493 + (1));
seq__39067_39490 = G__39502;
chunk__39068_39491 = G__39503;
count__39069_39492 = G__39504;
i__39070_39493 = G__39505;
continue;
} else {
var temp__5804__auto___39506 = cljs.core.seq(seq__39067_39490);
if(temp__5804__auto___39506){
var seq__39067_39507__$1 = temp__5804__auto___39506;
if(cljs.core.chunked_seq_QMARK_(seq__39067_39507__$1)){
var c__5568__auto___39508 = cljs.core.chunk_first(seq__39067_39507__$1);
var G__39509 = cljs.core.chunk_rest(seq__39067_39507__$1);
var G__39510 = c__5568__auto___39508;
var G__39511 = cljs.core.count(c__5568__auto___39508);
var G__39512 = (0);
seq__39067_39490 = G__39509;
chunk__39068_39491 = G__39510;
count__39069_39492 = G__39511;
i__39070_39493 = G__39512;
continue;
} else {
var map__39080_39513 = cljs.core.first(seq__39067_39507__$1);
var map__39080_39514__$1 = cljs.core.__destructure_map(map__39080_39513);
var w_39515 = map__39080_39514__$1;
var msg_39516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39080_39514__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39080_39514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39080_39514__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39080_39514__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39519)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39517),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39518),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39516__$1)].join(''));


var G__39520 = cljs.core.next(seq__39067_39507__$1);
var G__39521 = null;
var G__39522 = (0);
var G__39523 = (0);
seq__39067_39490 = G__39520;
chunk__39068_39491 = G__39521;
count__39069_39492 = G__39522;
i__39070_39493 = G__39523;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39037_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39037_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39092){
var map__39093 = p__39092;
var map__39093__$1 = cljs.core.__destructure_map(map__39093);
var msg = map__39093__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39097 = cljs.core.seq(updates);
var chunk__39099 = null;
var count__39100 = (0);
var i__39101 = (0);
while(true){
if((i__39101 < count__39100)){
var path = chunk__39099.cljs$core$IIndexed$_nth$arity$2(null,i__39101);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39323_39526 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39327_39527 = null;
var count__39328_39528 = (0);
var i__39329_39529 = (0);
while(true){
if((i__39329_39529 < count__39328_39528)){
var node_39530 = chunk__39327_39527.cljs$core$IIndexed$_nth$arity$2(null,i__39329_39529);
if(cljs.core.not(node_39530.shadow$old)){
var path_match_39531 = shadow.cljs.devtools.client.browser.match_paths(node_39530.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39531)){
var new_link_39532 = (function (){var G__39356 = node_39530.cloneNode(true);
G__39356.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39531),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39356;
})();
(node_39530.shadow$old = true);

(new_link_39532.onload = ((function (seq__39323_39526,chunk__39327_39527,count__39328_39528,i__39329_39529,seq__39097,chunk__39099,count__39100,i__39101,new_link_39532,path_match_39531,node_39530,path,map__39093,map__39093__$1,msg,updates,reload_info){
return (function (e){
var seq__39357_39533 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39359_39534 = null;
var count__39360_39535 = (0);
var i__39361_39536 = (0);
while(true){
if((i__39361_39536 < count__39360_39535)){
var map__39365_39537 = chunk__39359_39534.cljs$core$IIndexed$_nth$arity$2(null,i__39361_39536);
var map__39365_39538__$1 = cljs.core.__destructure_map(map__39365_39537);
var task_39539 = map__39365_39538__$1;
var fn_str_39540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365_39538__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365_39538__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39542 = goog.getObjectByName(fn_str_39540,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39541)].join(''));

(fn_obj_39542.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39542.cljs$core$IFn$_invoke$arity$2(path,new_link_39532) : fn_obj_39542.call(null,path,new_link_39532));


var G__39543 = seq__39357_39533;
var G__39544 = chunk__39359_39534;
var G__39545 = count__39360_39535;
var G__39546 = (i__39361_39536 + (1));
seq__39357_39533 = G__39543;
chunk__39359_39534 = G__39544;
count__39360_39535 = G__39545;
i__39361_39536 = G__39546;
continue;
} else {
var temp__5804__auto___39547 = cljs.core.seq(seq__39357_39533);
if(temp__5804__auto___39547){
var seq__39357_39548__$1 = temp__5804__auto___39547;
if(cljs.core.chunked_seq_QMARK_(seq__39357_39548__$1)){
var c__5568__auto___39549 = cljs.core.chunk_first(seq__39357_39548__$1);
var G__39550 = cljs.core.chunk_rest(seq__39357_39548__$1);
var G__39551 = c__5568__auto___39549;
var G__39552 = cljs.core.count(c__5568__auto___39549);
var G__39553 = (0);
seq__39357_39533 = G__39550;
chunk__39359_39534 = G__39551;
count__39360_39535 = G__39552;
i__39361_39536 = G__39553;
continue;
} else {
var map__39366_39554 = cljs.core.first(seq__39357_39548__$1);
var map__39366_39555__$1 = cljs.core.__destructure_map(map__39366_39554);
var task_39556 = map__39366_39555__$1;
var fn_str_39557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39366_39555__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39366_39555__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39559 = goog.getObjectByName(fn_str_39557,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39558)].join(''));

(fn_obj_39559.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39559.cljs$core$IFn$_invoke$arity$2(path,new_link_39532) : fn_obj_39559.call(null,path,new_link_39532));


var G__39560 = cljs.core.next(seq__39357_39548__$1);
var G__39561 = null;
var G__39562 = (0);
var G__39563 = (0);
seq__39357_39533 = G__39560;
chunk__39359_39534 = G__39561;
count__39360_39535 = G__39562;
i__39361_39536 = G__39563;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39530);
});})(seq__39323_39526,chunk__39327_39527,count__39328_39528,i__39329_39529,seq__39097,chunk__39099,count__39100,i__39101,new_link_39532,path_match_39531,node_39530,path,map__39093,map__39093__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39531], 0));

goog.dom.insertSiblingAfter(new_link_39532,node_39530);


var G__39564 = seq__39323_39526;
var G__39565 = chunk__39327_39527;
var G__39566 = count__39328_39528;
var G__39567 = (i__39329_39529 + (1));
seq__39323_39526 = G__39564;
chunk__39327_39527 = G__39565;
count__39328_39528 = G__39566;
i__39329_39529 = G__39567;
continue;
} else {
var G__39568 = seq__39323_39526;
var G__39569 = chunk__39327_39527;
var G__39570 = count__39328_39528;
var G__39571 = (i__39329_39529 + (1));
seq__39323_39526 = G__39568;
chunk__39327_39527 = G__39569;
count__39328_39528 = G__39570;
i__39329_39529 = G__39571;
continue;
}
} else {
var G__39572 = seq__39323_39526;
var G__39573 = chunk__39327_39527;
var G__39574 = count__39328_39528;
var G__39575 = (i__39329_39529 + (1));
seq__39323_39526 = G__39572;
chunk__39327_39527 = G__39573;
count__39328_39528 = G__39574;
i__39329_39529 = G__39575;
continue;
}
} else {
var temp__5804__auto___39576 = cljs.core.seq(seq__39323_39526);
if(temp__5804__auto___39576){
var seq__39323_39577__$1 = temp__5804__auto___39576;
if(cljs.core.chunked_seq_QMARK_(seq__39323_39577__$1)){
var c__5568__auto___39578 = cljs.core.chunk_first(seq__39323_39577__$1);
var G__39579 = cljs.core.chunk_rest(seq__39323_39577__$1);
var G__39580 = c__5568__auto___39578;
var G__39581 = cljs.core.count(c__5568__auto___39578);
var G__39582 = (0);
seq__39323_39526 = G__39579;
chunk__39327_39527 = G__39580;
count__39328_39528 = G__39581;
i__39329_39529 = G__39582;
continue;
} else {
var node_39583 = cljs.core.first(seq__39323_39577__$1);
if(cljs.core.not(node_39583.shadow$old)){
var path_match_39584 = shadow.cljs.devtools.client.browser.match_paths(node_39583.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39584)){
var new_link_39585 = (function (){var G__39367 = node_39583.cloneNode(true);
G__39367.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39584),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39367;
})();
(node_39583.shadow$old = true);

(new_link_39585.onload = ((function (seq__39323_39526,chunk__39327_39527,count__39328_39528,i__39329_39529,seq__39097,chunk__39099,count__39100,i__39101,new_link_39585,path_match_39584,node_39583,seq__39323_39577__$1,temp__5804__auto___39576,path,map__39093,map__39093__$1,msg,updates,reload_info){
return (function (e){
var seq__39368_39586 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39370_39587 = null;
var count__39371_39588 = (0);
var i__39372_39589 = (0);
while(true){
if((i__39372_39589 < count__39371_39588)){
var map__39376_39590 = chunk__39370_39587.cljs$core$IIndexed$_nth$arity$2(null,i__39372_39589);
var map__39376_39591__$1 = cljs.core.__destructure_map(map__39376_39590);
var task_39592 = map__39376_39591__$1;
var fn_str_39593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376_39591__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39376_39591__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39595 = goog.getObjectByName(fn_str_39593,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39594)].join(''));

(fn_obj_39595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39595.cljs$core$IFn$_invoke$arity$2(path,new_link_39585) : fn_obj_39595.call(null,path,new_link_39585));


var G__39596 = seq__39368_39586;
var G__39597 = chunk__39370_39587;
var G__39598 = count__39371_39588;
var G__39599 = (i__39372_39589 + (1));
seq__39368_39586 = G__39596;
chunk__39370_39587 = G__39597;
count__39371_39588 = G__39598;
i__39372_39589 = G__39599;
continue;
} else {
var temp__5804__auto___39600__$1 = cljs.core.seq(seq__39368_39586);
if(temp__5804__auto___39600__$1){
var seq__39368_39601__$1 = temp__5804__auto___39600__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39368_39601__$1)){
var c__5568__auto___39602 = cljs.core.chunk_first(seq__39368_39601__$1);
var G__39603 = cljs.core.chunk_rest(seq__39368_39601__$1);
var G__39604 = c__5568__auto___39602;
var G__39605 = cljs.core.count(c__5568__auto___39602);
var G__39606 = (0);
seq__39368_39586 = G__39603;
chunk__39370_39587 = G__39604;
count__39371_39588 = G__39605;
i__39372_39589 = G__39606;
continue;
} else {
var map__39377_39607 = cljs.core.first(seq__39368_39601__$1);
var map__39377_39608__$1 = cljs.core.__destructure_map(map__39377_39607);
var task_39609 = map__39377_39608__$1;
var fn_str_39610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39377_39608__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39377_39608__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39612 = goog.getObjectByName(fn_str_39610,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39611)].join(''));

(fn_obj_39612.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39612.cljs$core$IFn$_invoke$arity$2(path,new_link_39585) : fn_obj_39612.call(null,path,new_link_39585));


var G__39613 = cljs.core.next(seq__39368_39601__$1);
var G__39614 = null;
var G__39615 = (0);
var G__39616 = (0);
seq__39368_39586 = G__39613;
chunk__39370_39587 = G__39614;
count__39371_39588 = G__39615;
i__39372_39589 = G__39616;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39583);
});})(seq__39323_39526,chunk__39327_39527,count__39328_39528,i__39329_39529,seq__39097,chunk__39099,count__39100,i__39101,new_link_39585,path_match_39584,node_39583,seq__39323_39577__$1,temp__5804__auto___39576,path,map__39093,map__39093__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39584], 0));

goog.dom.insertSiblingAfter(new_link_39585,node_39583);


var G__39617 = cljs.core.next(seq__39323_39577__$1);
var G__39618 = null;
var G__39619 = (0);
var G__39620 = (0);
seq__39323_39526 = G__39617;
chunk__39327_39527 = G__39618;
count__39328_39528 = G__39619;
i__39329_39529 = G__39620;
continue;
} else {
var G__39621 = cljs.core.next(seq__39323_39577__$1);
var G__39622 = null;
var G__39623 = (0);
var G__39624 = (0);
seq__39323_39526 = G__39621;
chunk__39327_39527 = G__39622;
count__39328_39528 = G__39623;
i__39329_39529 = G__39624;
continue;
}
} else {
var G__39625 = cljs.core.next(seq__39323_39577__$1);
var G__39626 = null;
var G__39627 = (0);
var G__39628 = (0);
seq__39323_39526 = G__39625;
chunk__39327_39527 = G__39626;
count__39328_39528 = G__39627;
i__39329_39529 = G__39628;
continue;
}
}
} else {
}
}
break;
}


var G__39629 = seq__39097;
var G__39630 = chunk__39099;
var G__39631 = count__39100;
var G__39632 = (i__39101 + (1));
seq__39097 = G__39629;
chunk__39099 = G__39630;
count__39100 = G__39631;
i__39101 = G__39632;
continue;
} else {
var G__39633 = seq__39097;
var G__39634 = chunk__39099;
var G__39635 = count__39100;
var G__39636 = (i__39101 + (1));
seq__39097 = G__39633;
chunk__39099 = G__39634;
count__39100 = G__39635;
i__39101 = G__39636;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39097);
if(temp__5804__auto__){
var seq__39097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39097__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39097__$1);
var G__39637 = cljs.core.chunk_rest(seq__39097__$1);
var G__39638 = c__5568__auto__;
var G__39639 = cljs.core.count(c__5568__auto__);
var G__39640 = (0);
seq__39097 = G__39637;
chunk__39099 = G__39638;
count__39100 = G__39639;
i__39101 = G__39640;
continue;
} else {
var path = cljs.core.first(seq__39097__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39378_39641 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39382_39642 = null;
var count__39383_39643 = (0);
var i__39384_39644 = (0);
while(true){
if((i__39384_39644 < count__39383_39643)){
var node_39645 = chunk__39382_39642.cljs$core$IIndexed$_nth$arity$2(null,i__39384_39644);
if(cljs.core.not(node_39645.shadow$old)){
var path_match_39646 = shadow.cljs.devtools.client.browser.match_paths(node_39645.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39646)){
var new_link_39647 = (function (){var G__39411 = node_39645.cloneNode(true);
G__39411.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39646),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39411;
})();
(node_39645.shadow$old = true);

(new_link_39647.onload = ((function (seq__39378_39641,chunk__39382_39642,count__39383_39643,i__39384_39644,seq__39097,chunk__39099,count__39100,i__39101,new_link_39647,path_match_39646,node_39645,path,seq__39097__$1,temp__5804__auto__,map__39093,map__39093__$1,msg,updates,reload_info){
return (function (e){
var seq__39412_39648 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39414_39649 = null;
var count__39415_39650 = (0);
var i__39416_39651 = (0);
while(true){
if((i__39416_39651 < count__39415_39650)){
var map__39420_39652 = chunk__39414_39649.cljs$core$IIndexed$_nth$arity$2(null,i__39416_39651);
var map__39420_39653__$1 = cljs.core.__destructure_map(map__39420_39652);
var task_39654 = map__39420_39653__$1;
var fn_str_39655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39420_39653__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39420_39653__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39657 = goog.getObjectByName(fn_str_39655,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39656)].join(''));

(fn_obj_39657.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39657.cljs$core$IFn$_invoke$arity$2(path,new_link_39647) : fn_obj_39657.call(null,path,new_link_39647));


var G__39658 = seq__39412_39648;
var G__39659 = chunk__39414_39649;
var G__39660 = count__39415_39650;
var G__39661 = (i__39416_39651 + (1));
seq__39412_39648 = G__39658;
chunk__39414_39649 = G__39659;
count__39415_39650 = G__39660;
i__39416_39651 = G__39661;
continue;
} else {
var temp__5804__auto___39664__$1 = cljs.core.seq(seq__39412_39648);
if(temp__5804__auto___39664__$1){
var seq__39412_39665__$1 = temp__5804__auto___39664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39412_39665__$1)){
var c__5568__auto___39666 = cljs.core.chunk_first(seq__39412_39665__$1);
var G__39667 = cljs.core.chunk_rest(seq__39412_39665__$1);
var G__39668 = c__5568__auto___39666;
var G__39669 = cljs.core.count(c__5568__auto___39666);
var G__39670 = (0);
seq__39412_39648 = G__39667;
chunk__39414_39649 = G__39668;
count__39415_39650 = G__39669;
i__39416_39651 = G__39670;
continue;
} else {
var map__39421_39671 = cljs.core.first(seq__39412_39665__$1);
var map__39421_39672__$1 = cljs.core.__destructure_map(map__39421_39671);
var task_39673 = map__39421_39672__$1;
var fn_str_39674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39421_39672__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39421_39672__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39677 = goog.getObjectByName(fn_str_39674,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39675)].join(''));

(fn_obj_39677.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39677.cljs$core$IFn$_invoke$arity$2(path,new_link_39647) : fn_obj_39677.call(null,path,new_link_39647));


var G__39678 = cljs.core.next(seq__39412_39665__$1);
var G__39679 = null;
var G__39680 = (0);
var G__39681 = (0);
seq__39412_39648 = G__39678;
chunk__39414_39649 = G__39679;
count__39415_39650 = G__39680;
i__39416_39651 = G__39681;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39645);
});})(seq__39378_39641,chunk__39382_39642,count__39383_39643,i__39384_39644,seq__39097,chunk__39099,count__39100,i__39101,new_link_39647,path_match_39646,node_39645,path,seq__39097__$1,temp__5804__auto__,map__39093,map__39093__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39646], 0));

goog.dom.insertSiblingAfter(new_link_39647,node_39645);


var G__39682 = seq__39378_39641;
var G__39683 = chunk__39382_39642;
var G__39684 = count__39383_39643;
var G__39685 = (i__39384_39644 + (1));
seq__39378_39641 = G__39682;
chunk__39382_39642 = G__39683;
count__39383_39643 = G__39684;
i__39384_39644 = G__39685;
continue;
} else {
var G__39686 = seq__39378_39641;
var G__39687 = chunk__39382_39642;
var G__39688 = count__39383_39643;
var G__39689 = (i__39384_39644 + (1));
seq__39378_39641 = G__39686;
chunk__39382_39642 = G__39687;
count__39383_39643 = G__39688;
i__39384_39644 = G__39689;
continue;
}
} else {
var G__39690 = seq__39378_39641;
var G__39691 = chunk__39382_39642;
var G__39692 = count__39383_39643;
var G__39693 = (i__39384_39644 + (1));
seq__39378_39641 = G__39690;
chunk__39382_39642 = G__39691;
count__39383_39643 = G__39692;
i__39384_39644 = G__39693;
continue;
}
} else {
var temp__5804__auto___39694__$1 = cljs.core.seq(seq__39378_39641);
if(temp__5804__auto___39694__$1){
var seq__39378_39695__$1 = temp__5804__auto___39694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39378_39695__$1)){
var c__5568__auto___39696 = cljs.core.chunk_first(seq__39378_39695__$1);
var G__39697 = cljs.core.chunk_rest(seq__39378_39695__$1);
var G__39698 = c__5568__auto___39696;
var G__39699 = cljs.core.count(c__5568__auto___39696);
var G__39700 = (0);
seq__39378_39641 = G__39697;
chunk__39382_39642 = G__39698;
count__39383_39643 = G__39699;
i__39384_39644 = G__39700;
continue;
} else {
var node_39701 = cljs.core.first(seq__39378_39695__$1);
if(cljs.core.not(node_39701.shadow$old)){
var path_match_39702 = shadow.cljs.devtools.client.browser.match_paths(node_39701.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39702)){
var new_link_39703 = (function (){var G__39422 = node_39701.cloneNode(true);
G__39422.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39702),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39422;
})();
(node_39701.shadow$old = true);

(new_link_39703.onload = ((function (seq__39378_39641,chunk__39382_39642,count__39383_39643,i__39384_39644,seq__39097,chunk__39099,count__39100,i__39101,new_link_39703,path_match_39702,node_39701,seq__39378_39695__$1,temp__5804__auto___39694__$1,path,seq__39097__$1,temp__5804__auto__,map__39093,map__39093__$1,msg,updates,reload_info){
return (function (e){
var seq__39423_39704 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39425_39705 = null;
var count__39426_39706 = (0);
var i__39427_39707 = (0);
while(true){
if((i__39427_39707 < count__39426_39706)){
var map__39431_39708 = chunk__39425_39705.cljs$core$IIndexed$_nth$arity$2(null,i__39427_39707);
var map__39431_39709__$1 = cljs.core.__destructure_map(map__39431_39708);
var task_39710 = map__39431_39709__$1;
var fn_str_39711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39431_39709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39713 = goog.getObjectByName(fn_str_39711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39712)].join(''));

(fn_obj_39713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39713.cljs$core$IFn$_invoke$arity$2(path,new_link_39703) : fn_obj_39713.call(null,path,new_link_39703));


var G__39715 = seq__39423_39704;
var G__39716 = chunk__39425_39705;
var G__39717 = count__39426_39706;
var G__39718 = (i__39427_39707 + (1));
seq__39423_39704 = G__39715;
chunk__39425_39705 = G__39716;
count__39426_39706 = G__39717;
i__39427_39707 = G__39718;
continue;
} else {
var temp__5804__auto___39720__$2 = cljs.core.seq(seq__39423_39704);
if(temp__5804__auto___39720__$2){
var seq__39423_39721__$1 = temp__5804__auto___39720__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39423_39721__$1)){
var c__5568__auto___39723 = cljs.core.chunk_first(seq__39423_39721__$1);
var G__39724 = cljs.core.chunk_rest(seq__39423_39721__$1);
var G__39725 = c__5568__auto___39723;
var G__39726 = cljs.core.count(c__5568__auto___39723);
var G__39727 = (0);
seq__39423_39704 = G__39724;
chunk__39425_39705 = G__39725;
count__39426_39706 = G__39726;
i__39427_39707 = G__39727;
continue;
} else {
var map__39432_39728 = cljs.core.first(seq__39423_39721__$1);
var map__39432_39729__$1 = cljs.core.__destructure_map(map__39432_39728);
var task_39730 = map__39432_39729__$1;
var fn_str_39731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432_39729__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39432_39729__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39733 = goog.getObjectByName(fn_str_39731,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39732)].join(''));

(fn_obj_39733.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39733.cljs$core$IFn$_invoke$arity$2(path,new_link_39703) : fn_obj_39733.call(null,path,new_link_39703));


var G__39736 = cljs.core.next(seq__39423_39721__$1);
var G__39737 = null;
var G__39738 = (0);
var G__39739 = (0);
seq__39423_39704 = G__39736;
chunk__39425_39705 = G__39737;
count__39426_39706 = G__39738;
i__39427_39707 = G__39739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39701);
});})(seq__39378_39641,chunk__39382_39642,count__39383_39643,i__39384_39644,seq__39097,chunk__39099,count__39100,i__39101,new_link_39703,path_match_39702,node_39701,seq__39378_39695__$1,temp__5804__auto___39694__$1,path,seq__39097__$1,temp__5804__auto__,map__39093,map__39093__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39702], 0));

goog.dom.insertSiblingAfter(new_link_39703,node_39701);


var G__39740 = cljs.core.next(seq__39378_39695__$1);
var G__39741 = null;
var G__39742 = (0);
var G__39743 = (0);
seq__39378_39641 = G__39740;
chunk__39382_39642 = G__39741;
count__39383_39643 = G__39742;
i__39384_39644 = G__39743;
continue;
} else {
var G__39744 = cljs.core.next(seq__39378_39695__$1);
var G__39745 = null;
var G__39746 = (0);
var G__39747 = (0);
seq__39378_39641 = G__39744;
chunk__39382_39642 = G__39745;
count__39383_39643 = G__39746;
i__39384_39644 = G__39747;
continue;
}
} else {
var G__39748 = cljs.core.next(seq__39378_39695__$1);
var G__39749 = null;
var G__39750 = (0);
var G__39751 = (0);
seq__39378_39641 = G__39748;
chunk__39382_39642 = G__39749;
count__39383_39643 = G__39750;
i__39384_39644 = G__39751;
continue;
}
}
} else {
}
}
break;
}


var G__39752 = cljs.core.next(seq__39097__$1);
var G__39753 = null;
var G__39754 = (0);
var G__39755 = (0);
seq__39097 = G__39752;
chunk__39099 = G__39753;
count__39100 = G__39754;
i__39101 = G__39755;
continue;
} else {
var G__39756 = cljs.core.next(seq__39097__$1);
var G__39757 = null;
var G__39758 = (0);
var G__39759 = (0);
seq__39097 = G__39756;
chunk__39099 = G__39757;
count__39100 = G__39758;
i__39101 = G__39759;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39433){
var map__39434 = p__39433;
var map__39434__$1 = cljs.core.__destructure_map(map__39434);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39434__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39435){
var map__39436 = p__39435;
var map__39436__$1 = cljs.core.__destructure_map(map__39436);
var _ = map__39436__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39436__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39437,done,error){
var map__39438 = p__39437;
var map__39438__$1 = cljs.core.__destructure_map(map__39438);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39438__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39439,done,error){
var map__39440 = p__39439;
var map__39440__$1 = cljs.core.__destructure_map(map__39440);
var msg = map__39440__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39440__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39441){
var map__39442 = p__39441;
var map__39442__$1 = cljs.core.__destructure_map(map__39442);
var src = map__39442__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39442__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39443 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39443) : done.call(null,G__39443));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39444){
var map__39445 = p__39444;
var map__39445__$1 = cljs.core.__destructure_map(map__39445);
var msg__$1 = map__39445__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39445__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39446){var ex = e39446;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39447){
var map__39448 = p__39447;
var map__39448__$1 = cljs.core.__destructure_map(map__39448);
var env = map__39448__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39448__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39449){
var map__39450 = p__39449;
var map__39450__$1 = cljs.core.__destructure_map(map__39450);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__39451){
var map__39452 = p__39451;
var map__39452__$1 = cljs.core.__destructure_map(map__39452);
var svc = map__39452__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39452__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
