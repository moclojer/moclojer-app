goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57901 = arguments.length;
var i__5770__auto___57902 = (0);
while(true){
if((i__5770__auto___57902 < len__5769__auto___57901)){
args__5775__auto__.push((arguments[i__5770__auto___57902]));

var G__57903 = (i__5770__auto___57902 + (1));
i__5770__auto___57902 = G__57903;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57012){
var G__57013 = cljs.core.first(seq57012);
var seq57012__$1 = cljs.core.next(seq57012);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57013,seq57012__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57014 = cljs.core.seq(sources);
var chunk__57015 = null;
var count__57016 = (0);
var i__57017 = (0);
while(true){
if((i__57017 < count__57016)){
var map__57031 = chunk__57015.cljs$core$IIndexed$_nth$arity$2(null,i__57017);
var map__57031__$1 = cljs.core.__destructure_map(map__57031);
var src = map__57031__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57031__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57032){var e_57904 = e57032;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57904);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57904.message)].join('')));
}

var G__57905 = seq__57014;
var G__57906 = chunk__57015;
var G__57907 = count__57016;
var G__57908 = (i__57017 + (1));
seq__57014 = G__57905;
chunk__57015 = G__57906;
count__57016 = G__57907;
i__57017 = G__57908;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57014);
if(temp__5804__auto__){
var seq__57014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57014__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57014__$1);
var G__57909 = cljs.core.chunk_rest(seq__57014__$1);
var G__57910 = c__5568__auto__;
var G__57911 = cljs.core.count(c__5568__auto__);
var G__57912 = (0);
seq__57014 = G__57909;
chunk__57015 = G__57910;
count__57016 = G__57911;
i__57017 = G__57912;
continue;
} else {
var map__57049 = cljs.core.first(seq__57014__$1);
var map__57049__$1 = cljs.core.__destructure_map(map__57049);
var src = map__57049__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57050){var e_57914 = e57050;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57914);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57914.message)].join('')));
}

var G__57915 = cljs.core.next(seq__57014__$1);
var G__57916 = null;
var G__57917 = (0);
var G__57918 = (0);
seq__57014 = G__57915;
chunk__57015 = G__57916;
count__57016 = G__57917;
i__57017 = G__57918;
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
var seq__57100 = cljs.core.seq(js_requires);
var chunk__57101 = null;
var count__57102 = (0);
var i__57103 = (0);
while(true){
if((i__57103 < count__57102)){
var js_ns = chunk__57101.cljs$core$IIndexed$_nth$arity$2(null,i__57103);
var require_str_57919 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57919);


var G__57920 = seq__57100;
var G__57921 = chunk__57101;
var G__57922 = count__57102;
var G__57923 = (i__57103 + (1));
seq__57100 = G__57920;
chunk__57101 = G__57921;
count__57102 = G__57922;
i__57103 = G__57923;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57100);
if(temp__5804__auto__){
var seq__57100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57100__$1);
var G__57924 = cljs.core.chunk_rest(seq__57100__$1);
var G__57925 = c__5568__auto__;
var G__57926 = cljs.core.count(c__5568__auto__);
var G__57927 = (0);
seq__57100 = G__57924;
chunk__57101 = G__57925;
count__57102 = G__57926;
i__57103 = G__57927;
continue;
} else {
var js_ns = cljs.core.first(seq__57100__$1);
var require_str_57928 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57928);


var G__57929 = cljs.core.next(seq__57100__$1);
var G__57930 = null;
var G__57931 = (0);
var G__57932 = (0);
seq__57100 = G__57929;
chunk__57101 = G__57930;
count__57102 = G__57931;
i__57103 = G__57932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__57105){
var map__57106 = p__57105;
var map__57106__$1 = cljs.core.__destructure_map(map__57106);
var msg = map__57106__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57106__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57106__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57107(s__57108){
return (new cljs.core.LazySeq(null,(function (){
var s__57108__$1 = s__57108;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57108__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__57113 = cljs.core.first(xs__6360__auto__);
var map__57113__$1 = cljs.core.__destructure_map(map__57113);
var src = map__57113__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57113__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57113__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__57108__$1,map__57113,map__57113__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57106,map__57106__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57107_$_iter__57109(s__57110){
return (new cljs.core.LazySeq(null,((function (s__57108__$1,map__57113,map__57113__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57106,map__57106__$1,msg,info,reload_info){
return (function (){
var s__57110__$1 = s__57110;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__57110__$1);
if(temp__5804__auto____$1){
var s__57110__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57110__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57110__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57112 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57111 = (0);
while(true){
if((i__57111 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__57111);
cljs.core.chunk_append(b__57112,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57935 = (i__57111 + (1));
i__57111 = G__57935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57112),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57107_$_iter__57109(cljs.core.chunk_rest(s__57110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57112),null);
}
} else {
var warning = cljs.core.first(s__57110__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57107_$_iter__57109(cljs.core.rest(s__57110__$2)));
}
} else {
return null;
}
break;
}
});})(s__57108__$1,map__57113,map__57113__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57106,map__57106__$1,msg,info,reload_info))
,null,null));
});})(s__57108__$1,map__57113,map__57113__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57106,map__57106__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57107(cljs.core.rest(s__57108__$1)));
} else {
var G__57938 = cljs.core.rest(s__57108__$1);
s__57108__$1 = G__57938;
continue;
}
} else {
var G__57939 = cljs.core.rest(s__57108__$1);
s__57108__$1 = G__57939;
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
var seq__57114_57940 = cljs.core.seq(warnings);
var chunk__57115_57941 = null;
var count__57116_57942 = (0);
var i__57117_57943 = (0);
while(true){
if((i__57117_57943 < count__57116_57942)){
var map__57123_57944 = chunk__57115_57941.cljs$core$IIndexed$_nth$arity$2(null,i__57117_57943);
var map__57123_57945__$1 = cljs.core.__destructure_map(map__57123_57944);
var w_57946 = map__57123_57945__$1;
var msg_57947__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123_57945__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123_57945__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123_57945__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57123_57945__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57950)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57948),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57949),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57947__$1)].join(''));


var G__57952 = seq__57114_57940;
var G__57953 = chunk__57115_57941;
var G__57954 = count__57116_57942;
var G__57955 = (i__57117_57943 + (1));
seq__57114_57940 = G__57952;
chunk__57115_57941 = G__57953;
count__57116_57942 = G__57954;
i__57117_57943 = G__57955;
continue;
} else {
var temp__5804__auto___57956 = cljs.core.seq(seq__57114_57940);
if(temp__5804__auto___57956){
var seq__57114_57957__$1 = temp__5804__auto___57956;
if(cljs.core.chunked_seq_QMARK_(seq__57114_57957__$1)){
var c__5568__auto___57958 = cljs.core.chunk_first(seq__57114_57957__$1);
var G__57959 = cljs.core.chunk_rest(seq__57114_57957__$1);
var G__57960 = c__5568__auto___57958;
var G__57961 = cljs.core.count(c__5568__auto___57958);
var G__57962 = (0);
seq__57114_57940 = G__57959;
chunk__57115_57941 = G__57960;
count__57116_57942 = G__57961;
i__57117_57943 = G__57962;
continue;
} else {
var map__57145_57963 = cljs.core.first(seq__57114_57957__$1);
var map__57145_57964__$1 = cljs.core.__destructure_map(map__57145_57963);
var w_57965 = map__57145_57964__$1;
var msg_57966__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57145_57964__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57145_57964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57145_57964__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57145_57964__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57969)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57967),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57968),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57966__$1)].join(''));


var G__57970 = cljs.core.next(seq__57114_57957__$1);
var G__57971 = null;
var G__57972 = (0);
var G__57973 = (0);
seq__57114_57940 = G__57970;
chunk__57115_57941 = G__57971;
count__57116_57942 = G__57972;
i__57117_57943 = G__57973;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__57104_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57104_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__57163){
var map__57166 = p__57163;
var map__57166__$1 = cljs.core.__destructure_map(map__57166);
var msg = map__57166__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57166__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57166__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__57171 = cljs.core.seq(updates);
var chunk__57173 = null;
var count__57174 = (0);
var i__57175 = (0);
while(true){
if((i__57175 < count__57174)){
var path = chunk__57173.cljs$core$IIndexed$_nth$arity$2(null,i__57175);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57434_57974 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57438_57975 = null;
var count__57439_57976 = (0);
var i__57440_57977 = (0);
while(true){
if((i__57440_57977 < count__57439_57976)){
var node_57978 = chunk__57438_57975.cljs$core$IIndexed$_nth$arity$2(null,i__57440_57977);
if(cljs.core.not(node_57978.shadow$old)){
var path_match_57979 = shadow.cljs.devtools.client.browser.match_paths(node_57978.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57979)){
var new_link_57980 = (function (){var G__57483 = node_57978.cloneNode(true);
G__57483.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57979),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57483;
})();
(node_57978.shadow$old = true);

(new_link_57980.onload = ((function (seq__57434_57974,chunk__57438_57975,count__57439_57976,i__57440_57977,seq__57171,chunk__57173,count__57174,i__57175,new_link_57980,path_match_57979,node_57978,path,map__57166,map__57166__$1,msg,updates,reload_info){
return (function (e){
var seq__57484_57981 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57486_57982 = null;
var count__57487_57983 = (0);
var i__57488_57984 = (0);
while(true){
if((i__57488_57984 < count__57487_57983)){
var map__57492_57985 = chunk__57486_57982.cljs$core$IIndexed$_nth$arity$2(null,i__57488_57984);
var map__57492_57986__$1 = cljs.core.__destructure_map(map__57492_57985);
var task_57987 = map__57492_57986__$1;
var fn_str_57988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57492_57986__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57492_57986__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57994 = goog.getObjectByName(fn_str_57988,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57989)].join(''));

(fn_obj_57994.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57994.cljs$core$IFn$_invoke$arity$2(path,new_link_57980) : fn_obj_57994.call(null,path,new_link_57980));


var G__57995 = seq__57484_57981;
var G__57996 = chunk__57486_57982;
var G__57997 = count__57487_57983;
var G__57998 = (i__57488_57984 + (1));
seq__57484_57981 = G__57995;
chunk__57486_57982 = G__57996;
count__57487_57983 = G__57997;
i__57488_57984 = G__57998;
continue;
} else {
var temp__5804__auto___57999 = cljs.core.seq(seq__57484_57981);
if(temp__5804__auto___57999){
var seq__57484_58000__$1 = temp__5804__auto___57999;
if(cljs.core.chunked_seq_QMARK_(seq__57484_58000__$1)){
var c__5568__auto___58001 = cljs.core.chunk_first(seq__57484_58000__$1);
var G__58002 = cljs.core.chunk_rest(seq__57484_58000__$1);
var G__58003 = c__5568__auto___58001;
var G__58004 = cljs.core.count(c__5568__auto___58001);
var G__58005 = (0);
seq__57484_57981 = G__58002;
chunk__57486_57982 = G__58003;
count__57487_57983 = G__58004;
i__57488_57984 = G__58005;
continue;
} else {
var map__57493_58006 = cljs.core.first(seq__57484_58000__$1);
var map__57493_58007__$1 = cljs.core.__destructure_map(map__57493_58006);
var task_58008 = map__57493_58007__$1;
var fn_str_58009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57493_58007__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57493_58007__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58011 = goog.getObjectByName(fn_str_58009,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58010)].join(''));

(fn_obj_58011.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58011.cljs$core$IFn$_invoke$arity$2(path,new_link_57980) : fn_obj_58011.call(null,path,new_link_57980));


var G__58012 = cljs.core.next(seq__57484_58000__$1);
var G__58013 = null;
var G__58014 = (0);
var G__58015 = (0);
seq__57484_57981 = G__58012;
chunk__57486_57982 = G__58013;
count__57487_57983 = G__58014;
i__57488_57984 = G__58015;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57978);
});})(seq__57434_57974,chunk__57438_57975,count__57439_57976,i__57440_57977,seq__57171,chunk__57173,count__57174,i__57175,new_link_57980,path_match_57979,node_57978,path,map__57166,map__57166__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57979], 0));

goog.dom.insertSiblingAfter(new_link_57980,node_57978);


var G__58016 = seq__57434_57974;
var G__58017 = chunk__57438_57975;
var G__58018 = count__57439_57976;
var G__58019 = (i__57440_57977 + (1));
seq__57434_57974 = G__58016;
chunk__57438_57975 = G__58017;
count__57439_57976 = G__58018;
i__57440_57977 = G__58019;
continue;
} else {
var G__58020 = seq__57434_57974;
var G__58021 = chunk__57438_57975;
var G__58022 = count__57439_57976;
var G__58023 = (i__57440_57977 + (1));
seq__57434_57974 = G__58020;
chunk__57438_57975 = G__58021;
count__57439_57976 = G__58022;
i__57440_57977 = G__58023;
continue;
}
} else {
var G__58024 = seq__57434_57974;
var G__58025 = chunk__57438_57975;
var G__58026 = count__57439_57976;
var G__58027 = (i__57440_57977 + (1));
seq__57434_57974 = G__58024;
chunk__57438_57975 = G__58025;
count__57439_57976 = G__58026;
i__57440_57977 = G__58027;
continue;
}
} else {
var temp__5804__auto___58028 = cljs.core.seq(seq__57434_57974);
if(temp__5804__auto___58028){
var seq__57434_58029__$1 = temp__5804__auto___58028;
if(cljs.core.chunked_seq_QMARK_(seq__57434_58029__$1)){
var c__5568__auto___58030 = cljs.core.chunk_first(seq__57434_58029__$1);
var G__58031 = cljs.core.chunk_rest(seq__57434_58029__$1);
var G__58032 = c__5568__auto___58030;
var G__58033 = cljs.core.count(c__5568__auto___58030);
var G__58034 = (0);
seq__57434_57974 = G__58031;
chunk__57438_57975 = G__58032;
count__57439_57976 = G__58033;
i__57440_57977 = G__58034;
continue;
} else {
var node_58035 = cljs.core.first(seq__57434_58029__$1);
if(cljs.core.not(node_58035.shadow$old)){
var path_match_58036 = shadow.cljs.devtools.client.browser.match_paths(node_58035.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58036)){
var new_link_58038 = (function (){var G__57495 = node_58035.cloneNode(true);
G__57495.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58036),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57495;
})();
(node_58035.shadow$old = true);

(new_link_58038.onload = ((function (seq__57434_57974,chunk__57438_57975,count__57439_57976,i__57440_57977,seq__57171,chunk__57173,count__57174,i__57175,new_link_58038,path_match_58036,node_58035,seq__57434_58029__$1,temp__5804__auto___58028,path,map__57166,map__57166__$1,msg,updates,reload_info){
return (function (e){
var seq__57496_58040 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57498_58041 = null;
var count__57499_58042 = (0);
var i__57500_58043 = (0);
while(true){
if((i__57500_58043 < count__57499_58042)){
var map__57505_58044 = chunk__57498_58041.cljs$core$IIndexed$_nth$arity$2(null,i__57500_58043);
var map__57505_58045__$1 = cljs.core.__destructure_map(map__57505_58044);
var task_58046 = map__57505_58045__$1;
var fn_str_58047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57505_58045__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57505_58045__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58050 = goog.getObjectByName(fn_str_58047,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58048)].join(''));

(fn_obj_58050.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58050.cljs$core$IFn$_invoke$arity$2(path,new_link_58038) : fn_obj_58050.call(null,path,new_link_58038));


var G__58051 = seq__57496_58040;
var G__58052 = chunk__57498_58041;
var G__58053 = count__57499_58042;
var G__58054 = (i__57500_58043 + (1));
seq__57496_58040 = G__58051;
chunk__57498_58041 = G__58052;
count__57499_58042 = G__58053;
i__57500_58043 = G__58054;
continue;
} else {
var temp__5804__auto___58055__$1 = cljs.core.seq(seq__57496_58040);
if(temp__5804__auto___58055__$1){
var seq__57496_58056__$1 = temp__5804__auto___58055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57496_58056__$1)){
var c__5568__auto___58057 = cljs.core.chunk_first(seq__57496_58056__$1);
var G__58058 = cljs.core.chunk_rest(seq__57496_58056__$1);
var G__58059 = c__5568__auto___58057;
var G__58060 = cljs.core.count(c__5568__auto___58057);
var G__58061 = (0);
seq__57496_58040 = G__58058;
chunk__57498_58041 = G__58059;
count__57499_58042 = G__58060;
i__57500_58043 = G__58061;
continue;
} else {
var map__57506_58062 = cljs.core.first(seq__57496_58056__$1);
var map__57506_58063__$1 = cljs.core.__destructure_map(map__57506_58062);
var task_58064 = map__57506_58063__$1;
var fn_str_58065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506_58063__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506_58063__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58067 = goog.getObjectByName(fn_str_58065,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58066)].join(''));

(fn_obj_58067.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58067.cljs$core$IFn$_invoke$arity$2(path,new_link_58038) : fn_obj_58067.call(null,path,new_link_58038));


var G__58068 = cljs.core.next(seq__57496_58056__$1);
var G__58069 = null;
var G__58070 = (0);
var G__58071 = (0);
seq__57496_58040 = G__58068;
chunk__57498_58041 = G__58069;
count__57499_58042 = G__58070;
i__57500_58043 = G__58071;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58035);
});})(seq__57434_57974,chunk__57438_57975,count__57439_57976,i__57440_57977,seq__57171,chunk__57173,count__57174,i__57175,new_link_58038,path_match_58036,node_58035,seq__57434_58029__$1,temp__5804__auto___58028,path,map__57166,map__57166__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58036], 0));

goog.dom.insertSiblingAfter(new_link_58038,node_58035);


var G__58072 = cljs.core.next(seq__57434_58029__$1);
var G__58073 = null;
var G__58074 = (0);
var G__58075 = (0);
seq__57434_57974 = G__58072;
chunk__57438_57975 = G__58073;
count__57439_57976 = G__58074;
i__57440_57977 = G__58075;
continue;
} else {
var G__58076 = cljs.core.next(seq__57434_58029__$1);
var G__58077 = null;
var G__58078 = (0);
var G__58079 = (0);
seq__57434_57974 = G__58076;
chunk__57438_57975 = G__58077;
count__57439_57976 = G__58078;
i__57440_57977 = G__58079;
continue;
}
} else {
var G__58080 = cljs.core.next(seq__57434_58029__$1);
var G__58081 = null;
var G__58082 = (0);
var G__58083 = (0);
seq__57434_57974 = G__58080;
chunk__57438_57975 = G__58081;
count__57439_57976 = G__58082;
i__57440_57977 = G__58083;
continue;
}
}
} else {
}
}
break;
}


var G__58084 = seq__57171;
var G__58085 = chunk__57173;
var G__58086 = count__57174;
var G__58087 = (i__57175 + (1));
seq__57171 = G__58084;
chunk__57173 = G__58085;
count__57174 = G__58086;
i__57175 = G__58087;
continue;
} else {
var G__58088 = seq__57171;
var G__58089 = chunk__57173;
var G__58090 = count__57174;
var G__58091 = (i__57175 + (1));
seq__57171 = G__58088;
chunk__57173 = G__58089;
count__57174 = G__58090;
i__57175 = G__58091;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57171);
if(temp__5804__auto__){
var seq__57171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57171__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57171__$1);
var G__58092 = cljs.core.chunk_rest(seq__57171__$1);
var G__58093 = c__5568__auto__;
var G__58094 = cljs.core.count(c__5568__auto__);
var G__58095 = (0);
seq__57171 = G__58092;
chunk__57173 = G__58093;
count__57174 = G__58094;
i__57175 = G__58095;
continue;
} else {
var path = cljs.core.first(seq__57171__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57538_58096 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57542_58097 = null;
var count__57543_58098 = (0);
var i__57544_58099 = (0);
while(true){
if((i__57544_58099 < count__57543_58098)){
var node_58100 = chunk__57542_58097.cljs$core$IIndexed$_nth$arity$2(null,i__57544_58099);
if(cljs.core.not(node_58100.shadow$old)){
var path_match_58102 = shadow.cljs.devtools.client.browser.match_paths(node_58100.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58102)){
var new_link_58103 = (function (){var G__57723 = node_58100.cloneNode(true);
G__57723.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58102),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57723;
})();
(node_58100.shadow$old = true);

(new_link_58103.onload = ((function (seq__57538_58096,chunk__57542_58097,count__57543_58098,i__57544_58099,seq__57171,chunk__57173,count__57174,i__57175,new_link_58103,path_match_58102,node_58100,path,seq__57171__$1,temp__5804__auto__,map__57166,map__57166__$1,msg,updates,reload_info){
return (function (e){
var seq__57724_58104 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57726_58105 = null;
var count__57727_58106 = (0);
var i__57728_58107 = (0);
while(true){
if((i__57728_58107 < count__57727_58106)){
var map__57737_58109 = chunk__57726_58105.cljs$core$IIndexed$_nth$arity$2(null,i__57728_58107);
var map__57737_58110__$1 = cljs.core.__destructure_map(map__57737_58109);
var task_58111 = map__57737_58110__$1;
var fn_str_58112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57737_58110__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57737_58110__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58114 = goog.getObjectByName(fn_str_58112,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58113)].join(''));

(fn_obj_58114.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58114.cljs$core$IFn$_invoke$arity$2(path,new_link_58103) : fn_obj_58114.call(null,path,new_link_58103));


var G__58115 = seq__57724_58104;
var G__58116 = chunk__57726_58105;
var G__58117 = count__57727_58106;
var G__58118 = (i__57728_58107 + (1));
seq__57724_58104 = G__58115;
chunk__57726_58105 = G__58116;
count__57727_58106 = G__58117;
i__57728_58107 = G__58118;
continue;
} else {
var temp__5804__auto___58119__$1 = cljs.core.seq(seq__57724_58104);
if(temp__5804__auto___58119__$1){
var seq__57724_58122__$1 = temp__5804__auto___58119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57724_58122__$1)){
var c__5568__auto___58124 = cljs.core.chunk_first(seq__57724_58122__$1);
var G__58126 = cljs.core.chunk_rest(seq__57724_58122__$1);
var G__58127 = c__5568__auto___58124;
var G__58128 = cljs.core.count(c__5568__auto___58124);
var G__58129 = (0);
seq__57724_58104 = G__58126;
chunk__57726_58105 = G__58127;
count__57727_58106 = G__58128;
i__57728_58107 = G__58129;
continue;
} else {
var map__57739_58130 = cljs.core.first(seq__57724_58122__$1);
var map__57739_58131__$1 = cljs.core.__destructure_map(map__57739_58130);
var task_58132 = map__57739_58131__$1;
var fn_str_58133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739_58131__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739_58131__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58135 = goog.getObjectByName(fn_str_58133,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58134)].join(''));

(fn_obj_58135.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58135.cljs$core$IFn$_invoke$arity$2(path,new_link_58103) : fn_obj_58135.call(null,path,new_link_58103));


var G__58137 = cljs.core.next(seq__57724_58122__$1);
var G__58138 = null;
var G__58139 = (0);
var G__58140 = (0);
seq__57724_58104 = G__58137;
chunk__57726_58105 = G__58138;
count__57727_58106 = G__58139;
i__57728_58107 = G__58140;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58100);
});})(seq__57538_58096,chunk__57542_58097,count__57543_58098,i__57544_58099,seq__57171,chunk__57173,count__57174,i__57175,new_link_58103,path_match_58102,node_58100,path,seq__57171__$1,temp__5804__auto__,map__57166,map__57166__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58102], 0));

goog.dom.insertSiblingAfter(new_link_58103,node_58100);


var G__58141 = seq__57538_58096;
var G__58142 = chunk__57542_58097;
var G__58143 = count__57543_58098;
var G__58144 = (i__57544_58099 + (1));
seq__57538_58096 = G__58141;
chunk__57542_58097 = G__58142;
count__57543_58098 = G__58143;
i__57544_58099 = G__58144;
continue;
} else {
var G__58145 = seq__57538_58096;
var G__58146 = chunk__57542_58097;
var G__58147 = count__57543_58098;
var G__58148 = (i__57544_58099 + (1));
seq__57538_58096 = G__58145;
chunk__57542_58097 = G__58146;
count__57543_58098 = G__58147;
i__57544_58099 = G__58148;
continue;
}
} else {
var G__58149 = seq__57538_58096;
var G__58150 = chunk__57542_58097;
var G__58151 = count__57543_58098;
var G__58152 = (i__57544_58099 + (1));
seq__57538_58096 = G__58149;
chunk__57542_58097 = G__58150;
count__57543_58098 = G__58151;
i__57544_58099 = G__58152;
continue;
}
} else {
var temp__5804__auto___58154__$1 = cljs.core.seq(seq__57538_58096);
if(temp__5804__auto___58154__$1){
var seq__57538_58155__$1 = temp__5804__auto___58154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57538_58155__$1)){
var c__5568__auto___58156 = cljs.core.chunk_first(seq__57538_58155__$1);
var G__58157 = cljs.core.chunk_rest(seq__57538_58155__$1);
var G__58158 = c__5568__auto___58156;
var G__58159 = cljs.core.count(c__5568__auto___58156);
var G__58160 = (0);
seq__57538_58096 = G__58157;
chunk__57542_58097 = G__58158;
count__57543_58098 = G__58159;
i__57544_58099 = G__58160;
continue;
} else {
var node_58163 = cljs.core.first(seq__57538_58155__$1);
if(cljs.core.not(node_58163.shadow$old)){
var path_match_58165 = shadow.cljs.devtools.client.browser.match_paths(node_58163.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58165)){
var new_link_58166 = (function (){var G__57740 = node_58163.cloneNode(true);
G__57740.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58165),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57740;
})();
(node_58163.shadow$old = true);

(new_link_58166.onload = ((function (seq__57538_58096,chunk__57542_58097,count__57543_58098,i__57544_58099,seq__57171,chunk__57173,count__57174,i__57175,new_link_58166,path_match_58165,node_58163,seq__57538_58155__$1,temp__5804__auto___58154__$1,path,seq__57171__$1,temp__5804__auto__,map__57166,map__57166__$1,msg,updates,reload_info){
return (function (e){
var seq__57761_58168 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57763_58169 = null;
var count__57764_58170 = (0);
var i__57765_58171 = (0);
while(true){
if((i__57765_58171 < count__57764_58170)){
var map__57797_58172 = chunk__57763_58169.cljs$core$IIndexed$_nth$arity$2(null,i__57765_58171);
var map__57797_58173__$1 = cljs.core.__destructure_map(map__57797_58172);
var task_58174 = map__57797_58173__$1;
var fn_str_58175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57797_58173__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57797_58173__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58177 = goog.getObjectByName(fn_str_58175,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58176)].join(''));

(fn_obj_58177.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58177.cljs$core$IFn$_invoke$arity$2(path,new_link_58166) : fn_obj_58177.call(null,path,new_link_58166));


var G__58178 = seq__57761_58168;
var G__58179 = chunk__57763_58169;
var G__58180 = count__57764_58170;
var G__58181 = (i__57765_58171 + (1));
seq__57761_58168 = G__58178;
chunk__57763_58169 = G__58179;
count__57764_58170 = G__58180;
i__57765_58171 = G__58181;
continue;
} else {
var temp__5804__auto___58182__$2 = cljs.core.seq(seq__57761_58168);
if(temp__5804__auto___58182__$2){
var seq__57761_58183__$1 = temp__5804__auto___58182__$2;
if(cljs.core.chunked_seq_QMARK_(seq__57761_58183__$1)){
var c__5568__auto___58184 = cljs.core.chunk_first(seq__57761_58183__$1);
var G__58185 = cljs.core.chunk_rest(seq__57761_58183__$1);
var G__58186 = c__5568__auto___58184;
var G__58187 = cljs.core.count(c__5568__auto___58184);
var G__58188 = (0);
seq__57761_58168 = G__58185;
chunk__57763_58169 = G__58186;
count__57764_58170 = G__58187;
i__57765_58171 = G__58188;
continue;
} else {
var map__57798_58189 = cljs.core.first(seq__57761_58183__$1);
var map__57798_58190__$1 = cljs.core.__destructure_map(map__57798_58189);
var task_58191 = map__57798_58190__$1;
var fn_str_58192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57798_58190__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_58193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57798_58190__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_58194 = goog.getObjectByName(fn_str_58192,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_58193)].join(''));

(fn_obj_58194.cljs$core$IFn$_invoke$arity$2 ? fn_obj_58194.cljs$core$IFn$_invoke$arity$2(path,new_link_58166) : fn_obj_58194.call(null,path,new_link_58166));


var G__58195 = cljs.core.next(seq__57761_58183__$1);
var G__58196 = null;
var G__58197 = (0);
var G__58198 = (0);
seq__57761_58168 = G__58195;
chunk__57763_58169 = G__58196;
count__57764_58170 = G__58197;
i__57765_58171 = G__58198;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_58163);
});})(seq__57538_58096,chunk__57542_58097,count__57543_58098,i__57544_58099,seq__57171,chunk__57173,count__57174,i__57175,new_link_58166,path_match_58165,node_58163,seq__57538_58155__$1,temp__5804__auto___58154__$1,path,seq__57171__$1,temp__5804__auto__,map__57166,map__57166__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58165], 0));

goog.dom.insertSiblingAfter(new_link_58166,node_58163);


var G__58199 = cljs.core.next(seq__57538_58155__$1);
var G__58200 = null;
var G__58201 = (0);
var G__58202 = (0);
seq__57538_58096 = G__58199;
chunk__57542_58097 = G__58200;
count__57543_58098 = G__58201;
i__57544_58099 = G__58202;
continue;
} else {
var G__58203 = cljs.core.next(seq__57538_58155__$1);
var G__58204 = null;
var G__58205 = (0);
var G__58206 = (0);
seq__57538_58096 = G__58203;
chunk__57542_58097 = G__58204;
count__57543_58098 = G__58205;
i__57544_58099 = G__58206;
continue;
}
} else {
var G__58207 = cljs.core.next(seq__57538_58155__$1);
var G__58208 = null;
var G__58209 = (0);
var G__58210 = (0);
seq__57538_58096 = G__58207;
chunk__57542_58097 = G__58208;
count__57543_58098 = G__58209;
i__57544_58099 = G__58210;
continue;
}
}
} else {
}
}
break;
}


var G__58211 = cljs.core.next(seq__57171__$1);
var G__58212 = null;
var G__58213 = (0);
var G__58214 = (0);
seq__57171 = G__58211;
chunk__57173 = G__58212;
count__57174 = G__58213;
i__57175 = G__58214;
continue;
} else {
var G__58215 = cljs.core.next(seq__57171__$1);
var G__58216 = null;
var G__58217 = (0);
var G__58218 = (0);
seq__57171 = G__58215;
chunk__57173 = G__58216;
count__57174 = G__58217;
i__57175 = G__58218;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57799){
var map__57800 = p__57799;
var map__57800__$1 = cljs.core.__destructure_map(map__57800);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57800__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57829){
var map__57830 = p__57829;
var map__57830__$1 = cljs.core.__destructure_map(map__57830);
var _ = map__57830__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57831,done,error){
var map__57833 = p__57831;
var map__57833__$1 = cljs.core.__destructure_map(map__57833);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57833__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57836,done,error){
var map__57840 = p__57836;
var map__57840__$1 = cljs.core.__destructure_map(map__57840);
var msg = map__57840__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57840__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57841){
var map__57843 = p__57841;
var map__57843__$1 = cljs.core.__destructure_map(map__57843);
var src = map__57843__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57843__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57849 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57849) : done.call(null,G__57849));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57850){
var map__57851 = p__57850;
var map__57851__$1 = cljs.core.__destructure_map(map__57851);
var msg__$1 = map__57851__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57851__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e57852){var ex = e57852;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__57853){
var map__57854 = p__57853;
var map__57854__$1 = cljs.core.__destructure_map(map__57854);
var env = map__57854__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57854__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__57855){
var map__57856 = p__57855;
var map__57856__$1 = cljs.core.__destructure_map(map__57856);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57856__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57856__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__57857){
var map__57858 = p__57857;
var map__57858__$1 = cljs.core.__destructure_map(map__57858);
var svc = map__57858__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
