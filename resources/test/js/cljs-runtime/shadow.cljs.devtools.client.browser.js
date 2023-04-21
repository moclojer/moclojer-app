goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48670 = arguments.length;
var i__5770__auto___48671 = (0);
while(true){
if((i__5770__auto___48671 < len__5769__auto___48670)){
args__5775__auto__.push((arguments[i__5770__auto___48671]));

var G__48672 = (i__5770__auto___48671 + (1));
i__5770__auto___48671 = G__48672;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48151){
var G__48152 = cljs.core.first(seq48151);
var seq48151__$1 = cljs.core.next(seq48151);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48152,seq48151__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48163 = cljs.core.seq(sources);
var chunk__48164 = null;
var count__48165 = (0);
var i__48166 = (0);
while(true){
if((i__48166 < count__48165)){
var map__48175 = chunk__48164.cljs$core$IIndexed$_nth$arity$2(null,i__48166);
var map__48175__$1 = cljs.core.__destructure_map(map__48175);
var src = map__48175__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48175__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48175__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48175__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48175__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48176){var e_48673 = e48176;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48673);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48673.message)].join('')));
}

var G__48674 = seq__48163;
var G__48675 = chunk__48164;
var G__48676 = count__48165;
var G__48677 = (i__48166 + (1));
seq__48163 = G__48674;
chunk__48164 = G__48675;
count__48165 = G__48676;
i__48166 = G__48677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48163);
if(temp__5804__auto__){
var seq__48163__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48163__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48163__$1);
var G__48678 = cljs.core.chunk_rest(seq__48163__$1);
var G__48679 = c__5568__auto__;
var G__48680 = cljs.core.count(c__5568__auto__);
var G__48681 = (0);
seq__48163 = G__48678;
chunk__48164 = G__48679;
count__48165 = G__48680;
i__48166 = G__48681;
continue;
} else {
var map__48178 = cljs.core.first(seq__48163__$1);
var map__48178__$1 = cljs.core.__destructure_map(map__48178);
var src = map__48178__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e48180){var e_48682 = e48180;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48682);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48682.message)].join('')));
}

var G__48683 = cljs.core.next(seq__48163__$1);
var G__48684 = null;
var G__48685 = (0);
var G__48686 = (0);
seq__48163 = G__48683;
chunk__48164 = G__48684;
count__48165 = G__48685;
i__48166 = G__48686;
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
var seq__48186 = cljs.core.seq(js_requires);
var chunk__48187 = null;
var count__48188 = (0);
var i__48189 = (0);
while(true){
if((i__48189 < count__48188)){
var js_ns = chunk__48187.cljs$core$IIndexed$_nth$arity$2(null,i__48189);
var require_str_48687 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48687);


var G__48688 = seq__48186;
var G__48689 = chunk__48187;
var G__48690 = count__48188;
var G__48691 = (i__48189 + (1));
seq__48186 = G__48688;
chunk__48187 = G__48689;
count__48188 = G__48690;
i__48189 = G__48691;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48186);
if(temp__5804__auto__){
var seq__48186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48186__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48186__$1);
var G__48692 = cljs.core.chunk_rest(seq__48186__$1);
var G__48693 = c__5568__auto__;
var G__48694 = cljs.core.count(c__5568__auto__);
var G__48695 = (0);
seq__48186 = G__48692;
chunk__48187 = G__48693;
count__48188 = G__48694;
i__48189 = G__48695;
continue;
} else {
var js_ns = cljs.core.first(seq__48186__$1);
var require_str_48696 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48696);


var G__48697 = cljs.core.next(seq__48186__$1);
var G__48698 = null;
var G__48699 = (0);
var G__48700 = (0);
seq__48186 = G__48697;
chunk__48187 = G__48698;
count__48188 = G__48699;
i__48189 = G__48700;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__48194){
var map__48195 = p__48194;
var map__48195__$1 = cljs.core.__destructure_map(map__48195);
var msg = map__48195__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48195__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48195__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196(s__48197){
return (new cljs.core.LazySeq(null,(function (){
var s__48197__$1 = s__48197;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48197__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__48202 = cljs.core.first(xs__6360__auto__);
var map__48202__$1 = cljs.core.__destructure_map(map__48202);
var src = map__48202__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48202__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48202__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__48197__$1,map__48202,map__48202__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48195,map__48195__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(s__48199){
return (new cljs.core.LazySeq(null,((function (s__48197__$1,map__48202,map__48202__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48195,map__48195__$1,msg,info,reload_info){
return (function (){
var s__48199__$1 = s__48199;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__48199__$1);
if(temp__5804__auto____$1){
var s__48199__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48199__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__48199__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__48201 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__48200 = (0);
while(true){
if((i__48200 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__48200);
cljs.core.chunk_append(b__48201,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48701 = (i__48200 + (1));
i__48200 = G__48701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48201),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(cljs.core.chunk_rest(s__48199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48201),null);
}
} else {
var warning = cljs.core.first(s__48199__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196_$_iter__48198(cljs.core.rest(s__48199__$2)));
}
} else {
return null;
}
break;
}
});})(s__48197__$1,map__48202,map__48202__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48195,map__48195__$1,msg,info,reload_info))
,null,null));
});})(s__48197__$1,map__48202,map__48202__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__48195,map__48195__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48196(cljs.core.rest(s__48197__$1)));
} else {
var G__48702 = cljs.core.rest(s__48197__$1);
s__48197__$1 = G__48702;
continue;
}
} else {
var G__48703 = cljs.core.rest(s__48197__$1);
s__48197__$1 = G__48703;
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
var seq__48205_48704 = cljs.core.seq(warnings);
var chunk__48206_48705 = null;
var count__48207_48706 = (0);
var i__48208_48707 = (0);
while(true){
if((i__48208_48707 < count__48207_48706)){
var map__48221_48708 = chunk__48206_48705.cljs$core$IIndexed$_nth$arity$2(null,i__48208_48707);
var map__48221_48709__$1 = cljs.core.__destructure_map(map__48221_48708);
var w_48710 = map__48221_48709__$1;
var msg_48711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221_48709__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221_48709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221_48709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221_48709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48714)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48712),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48713),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48711__$1)].join(''));


var G__48715 = seq__48205_48704;
var G__48716 = chunk__48206_48705;
var G__48717 = count__48207_48706;
var G__48718 = (i__48208_48707 + (1));
seq__48205_48704 = G__48715;
chunk__48206_48705 = G__48716;
count__48207_48706 = G__48717;
i__48208_48707 = G__48718;
continue;
} else {
var temp__5804__auto___48719 = cljs.core.seq(seq__48205_48704);
if(temp__5804__auto___48719){
var seq__48205_48720__$1 = temp__5804__auto___48719;
if(cljs.core.chunked_seq_QMARK_(seq__48205_48720__$1)){
var c__5568__auto___48721 = cljs.core.chunk_first(seq__48205_48720__$1);
var G__48722 = cljs.core.chunk_rest(seq__48205_48720__$1);
var G__48723 = c__5568__auto___48721;
var G__48724 = cljs.core.count(c__5568__auto___48721);
var G__48725 = (0);
seq__48205_48704 = G__48722;
chunk__48206_48705 = G__48723;
count__48207_48706 = G__48724;
i__48208_48707 = G__48725;
continue;
} else {
var map__48223_48726 = cljs.core.first(seq__48205_48720__$1);
var map__48223_48727__$1 = cljs.core.__destructure_map(map__48223_48726);
var w_48728 = map__48223_48727__$1;
var msg_48729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223_48727__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223_48727__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223_48727__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48223_48727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48732)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48730),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48731),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48729__$1)].join(''));


var G__48736 = cljs.core.next(seq__48205_48720__$1);
var G__48737 = null;
var G__48738 = (0);
var G__48739 = (0);
seq__48205_48704 = G__48736;
chunk__48206_48705 = G__48737;
count__48207_48706 = G__48738;
i__48208_48707 = G__48739;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__48190_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48190_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48226){
var map__48227 = p__48226;
var map__48227__$1 = cljs.core.__destructure_map(map__48227);
var msg = map__48227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__48228 = cljs.core.seq(updates);
var chunk__48230 = null;
var count__48231 = (0);
var i__48232 = (0);
while(true){
if((i__48232 < count__48231)){
var path = chunk__48230.cljs$core$IIndexed$_nth$arity$2(null,i__48232);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48389_48747 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48393_48748 = null;
var count__48394_48749 = (0);
var i__48395_48750 = (0);
while(true){
if((i__48395_48750 < count__48394_48749)){
var node_48751 = chunk__48393_48748.cljs$core$IIndexed$_nth$arity$2(null,i__48395_48750);
if(cljs.core.not(node_48751.shadow$old)){
var path_match_48752 = shadow.cljs.devtools.client.browser.match_paths(node_48751.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48752)){
var new_link_48753 = (function (){var G__48481 = node_48751.cloneNode(true);
G__48481.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48752),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48481;
})();
(node_48751.shadow$old = true);

(new_link_48753.onload = ((function (seq__48389_48747,chunk__48393_48748,count__48394_48749,i__48395_48750,seq__48228,chunk__48230,count__48231,i__48232,new_link_48753,path_match_48752,node_48751,path,map__48227,map__48227__$1,msg,updates,reload_info){
return (function (e){
var seq__48482_48754 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48484_48755 = null;
var count__48485_48756 = (0);
var i__48486_48757 = (0);
while(true){
if((i__48486_48757 < count__48485_48756)){
var map__48493_48758 = chunk__48484_48755.cljs$core$IIndexed$_nth$arity$2(null,i__48486_48757);
var map__48493_48759__$1 = cljs.core.__destructure_map(map__48493_48758);
var task_48760 = map__48493_48759__$1;
var fn_str_48761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493_48759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493_48759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48763 = goog.getObjectByName(fn_str_48761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48762)].join(''));

(fn_obj_48763.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48763.cljs$core$IFn$_invoke$arity$2(path,new_link_48753) : fn_obj_48763.call(null,path,new_link_48753));


var G__48764 = seq__48482_48754;
var G__48765 = chunk__48484_48755;
var G__48766 = count__48485_48756;
var G__48767 = (i__48486_48757 + (1));
seq__48482_48754 = G__48764;
chunk__48484_48755 = G__48765;
count__48485_48756 = G__48766;
i__48486_48757 = G__48767;
continue;
} else {
var temp__5804__auto___48768 = cljs.core.seq(seq__48482_48754);
if(temp__5804__auto___48768){
var seq__48482_48769__$1 = temp__5804__auto___48768;
if(cljs.core.chunked_seq_QMARK_(seq__48482_48769__$1)){
var c__5568__auto___48770 = cljs.core.chunk_first(seq__48482_48769__$1);
var G__48771 = cljs.core.chunk_rest(seq__48482_48769__$1);
var G__48772 = c__5568__auto___48770;
var G__48773 = cljs.core.count(c__5568__auto___48770);
var G__48774 = (0);
seq__48482_48754 = G__48771;
chunk__48484_48755 = G__48772;
count__48485_48756 = G__48773;
i__48486_48757 = G__48774;
continue;
} else {
var map__48498_48775 = cljs.core.first(seq__48482_48769__$1);
var map__48498_48776__$1 = cljs.core.__destructure_map(map__48498_48775);
var task_48777 = map__48498_48776__$1;
var fn_str_48778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48498_48776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48498_48776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48780 = goog.getObjectByName(fn_str_48778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48779)].join(''));

(fn_obj_48780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48780.cljs$core$IFn$_invoke$arity$2(path,new_link_48753) : fn_obj_48780.call(null,path,new_link_48753));


var G__48781 = cljs.core.next(seq__48482_48769__$1);
var G__48782 = null;
var G__48783 = (0);
var G__48784 = (0);
seq__48482_48754 = G__48781;
chunk__48484_48755 = G__48782;
count__48485_48756 = G__48783;
i__48486_48757 = G__48784;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48751);
});})(seq__48389_48747,chunk__48393_48748,count__48394_48749,i__48395_48750,seq__48228,chunk__48230,count__48231,i__48232,new_link_48753,path_match_48752,node_48751,path,map__48227,map__48227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48752], 0));

goog.dom.insertSiblingAfter(new_link_48753,node_48751);


var G__48785 = seq__48389_48747;
var G__48786 = chunk__48393_48748;
var G__48787 = count__48394_48749;
var G__48788 = (i__48395_48750 + (1));
seq__48389_48747 = G__48785;
chunk__48393_48748 = G__48786;
count__48394_48749 = G__48787;
i__48395_48750 = G__48788;
continue;
} else {
var G__48789 = seq__48389_48747;
var G__48790 = chunk__48393_48748;
var G__48791 = count__48394_48749;
var G__48792 = (i__48395_48750 + (1));
seq__48389_48747 = G__48789;
chunk__48393_48748 = G__48790;
count__48394_48749 = G__48791;
i__48395_48750 = G__48792;
continue;
}
} else {
var G__48793 = seq__48389_48747;
var G__48794 = chunk__48393_48748;
var G__48795 = count__48394_48749;
var G__48796 = (i__48395_48750 + (1));
seq__48389_48747 = G__48793;
chunk__48393_48748 = G__48794;
count__48394_48749 = G__48795;
i__48395_48750 = G__48796;
continue;
}
} else {
var temp__5804__auto___48797 = cljs.core.seq(seq__48389_48747);
if(temp__5804__auto___48797){
var seq__48389_48798__$1 = temp__5804__auto___48797;
if(cljs.core.chunked_seq_QMARK_(seq__48389_48798__$1)){
var c__5568__auto___48799 = cljs.core.chunk_first(seq__48389_48798__$1);
var G__48800 = cljs.core.chunk_rest(seq__48389_48798__$1);
var G__48801 = c__5568__auto___48799;
var G__48802 = cljs.core.count(c__5568__auto___48799);
var G__48803 = (0);
seq__48389_48747 = G__48800;
chunk__48393_48748 = G__48801;
count__48394_48749 = G__48802;
i__48395_48750 = G__48803;
continue;
} else {
var node_48804 = cljs.core.first(seq__48389_48798__$1);
if(cljs.core.not(node_48804.shadow$old)){
var path_match_48805 = shadow.cljs.devtools.client.browser.match_paths(node_48804.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48805)){
var new_link_48806 = (function (){var G__48506 = node_48804.cloneNode(true);
G__48506.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48805),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48506;
})();
(node_48804.shadow$old = true);

(new_link_48806.onload = ((function (seq__48389_48747,chunk__48393_48748,count__48394_48749,i__48395_48750,seq__48228,chunk__48230,count__48231,i__48232,new_link_48806,path_match_48805,node_48804,seq__48389_48798__$1,temp__5804__auto___48797,path,map__48227,map__48227__$1,msg,updates,reload_info){
return (function (e){
var seq__48512_48807 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48514_48808 = null;
var count__48515_48809 = (0);
var i__48516_48810 = (0);
while(true){
if((i__48516_48810 < count__48515_48809)){
var map__48539_48811 = chunk__48514_48808.cljs$core$IIndexed$_nth$arity$2(null,i__48516_48810);
var map__48539_48812__$1 = cljs.core.__destructure_map(map__48539_48811);
var task_48813 = map__48539_48812__$1;
var fn_str_48814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539_48812__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48539_48812__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48816 = goog.getObjectByName(fn_str_48814,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48815)].join(''));

(fn_obj_48816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48816.cljs$core$IFn$_invoke$arity$2(path,new_link_48806) : fn_obj_48816.call(null,path,new_link_48806));


var G__48817 = seq__48512_48807;
var G__48818 = chunk__48514_48808;
var G__48819 = count__48515_48809;
var G__48820 = (i__48516_48810 + (1));
seq__48512_48807 = G__48817;
chunk__48514_48808 = G__48818;
count__48515_48809 = G__48819;
i__48516_48810 = G__48820;
continue;
} else {
var temp__5804__auto___48821__$1 = cljs.core.seq(seq__48512_48807);
if(temp__5804__auto___48821__$1){
var seq__48512_48823__$1 = temp__5804__auto___48821__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48512_48823__$1)){
var c__5568__auto___48824 = cljs.core.chunk_first(seq__48512_48823__$1);
var G__48825 = cljs.core.chunk_rest(seq__48512_48823__$1);
var G__48826 = c__5568__auto___48824;
var G__48827 = cljs.core.count(c__5568__auto___48824);
var G__48828 = (0);
seq__48512_48807 = G__48825;
chunk__48514_48808 = G__48826;
count__48515_48809 = G__48827;
i__48516_48810 = G__48828;
continue;
} else {
var map__48540_48829 = cljs.core.first(seq__48512_48823__$1);
var map__48540_48830__$1 = cljs.core.__destructure_map(map__48540_48829);
var task_48831 = map__48540_48830__$1;
var fn_str_48832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48540_48830__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48540_48830__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48834 = goog.getObjectByName(fn_str_48832,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48833)].join(''));

(fn_obj_48834.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48834.cljs$core$IFn$_invoke$arity$2(path,new_link_48806) : fn_obj_48834.call(null,path,new_link_48806));


var G__48835 = cljs.core.next(seq__48512_48823__$1);
var G__48836 = null;
var G__48837 = (0);
var G__48838 = (0);
seq__48512_48807 = G__48835;
chunk__48514_48808 = G__48836;
count__48515_48809 = G__48837;
i__48516_48810 = G__48838;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48804);
});})(seq__48389_48747,chunk__48393_48748,count__48394_48749,i__48395_48750,seq__48228,chunk__48230,count__48231,i__48232,new_link_48806,path_match_48805,node_48804,seq__48389_48798__$1,temp__5804__auto___48797,path,map__48227,map__48227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48805], 0));

goog.dom.insertSiblingAfter(new_link_48806,node_48804);


var G__48839 = cljs.core.next(seq__48389_48798__$1);
var G__48840 = null;
var G__48841 = (0);
var G__48842 = (0);
seq__48389_48747 = G__48839;
chunk__48393_48748 = G__48840;
count__48394_48749 = G__48841;
i__48395_48750 = G__48842;
continue;
} else {
var G__48850 = cljs.core.next(seq__48389_48798__$1);
var G__48851 = null;
var G__48852 = (0);
var G__48853 = (0);
seq__48389_48747 = G__48850;
chunk__48393_48748 = G__48851;
count__48394_48749 = G__48852;
i__48395_48750 = G__48853;
continue;
}
} else {
var G__48854 = cljs.core.next(seq__48389_48798__$1);
var G__48855 = null;
var G__48856 = (0);
var G__48857 = (0);
seq__48389_48747 = G__48854;
chunk__48393_48748 = G__48855;
count__48394_48749 = G__48856;
i__48395_48750 = G__48857;
continue;
}
}
} else {
}
}
break;
}


var G__48858 = seq__48228;
var G__48859 = chunk__48230;
var G__48860 = count__48231;
var G__48861 = (i__48232 + (1));
seq__48228 = G__48858;
chunk__48230 = G__48859;
count__48231 = G__48860;
i__48232 = G__48861;
continue;
} else {
var G__48862 = seq__48228;
var G__48863 = chunk__48230;
var G__48864 = count__48231;
var G__48865 = (i__48232 + (1));
seq__48228 = G__48862;
chunk__48230 = G__48863;
count__48231 = G__48864;
i__48232 = G__48865;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48228);
if(temp__5804__auto__){
var seq__48228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48228__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48228__$1);
var G__48867 = cljs.core.chunk_rest(seq__48228__$1);
var G__48868 = c__5568__auto__;
var G__48869 = cljs.core.count(c__5568__auto__);
var G__48870 = (0);
seq__48228 = G__48867;
chunk__48230 = G__48868;
count__48231 = G__48869;
i__48232 = G__48870;
continue;
} else {
var path = cljs.core.first(seq__48228__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48544_48871 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48548_48872 = null;
var count__48549_48873 = (0);
var i__48550_48874 = (0);
while(true){
if((i__48550_48874 < count__48549_48873)){
var node_48875 = chunk__48548_48872.cljs$core$IIndexed$_nth$arity$2(null,i__48550_48874);
if(cljs.core.not(node_48875.shadow$old)){
var path_match_48877 = shadow.cljs.devtools.client.browser.match_paths(node_48875.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48877)){
var new_link_48878 = (function (){var G__48612 = node_48875.cloneNode(true);
G__48612.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48877),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48612;
})();
(node_48875.shadow$old = true);

(new_link_48878.onload = ((function (seq__48544_48871,chunk__48548_48872,count__48549_48873,i__48550_48874,seq__48228,chunk__48230,count__48231,i__48232,new_link_48878,path_match_48877,node_48875,path,seq__48228__$1,temp__5804__auto__,map__48227,map__48227__$1,msg,updates,reload_info){
return (function (e){
var seq__48613_48880 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48615_48881 = null;
var count__48616_48882 = (0);
var i__48617_48883 = (0);
while(true){
if((i__48617_48883 < count__48616_48882)){
var map__48621_48884 = chunk__48615_48881.cljs$core$IIndexed$_nth$arity$2(null,i__48617_48883);
var map__48621_48885__$1 = cljs.core.__destructure_map(map__48621_48884);
var task_48886 = map__48621_48885__$1;
var fn_str_48887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48621_48885__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48621_48885__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48890 = goog.getObjectByName(fn_str_48887,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48888)].join(''));

(fn_obj_48890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48890.cljs$core$IFn$_invoke$arity$2(path,new_link_48878) : fn_obj_48890.call(null,path,new_link_48878));


var G__48894 = seq__48613_48880;
var G__48895 = chunk__48615_48881;
var G__48896 = count__48616_48882;
var G__48897 = (i__48617_48883 + (1));
seq__48613_48880 = G__48894;
chunk__48615_48881 = G__48895;
count__48616_48882 = G__48896;
i__48617_48883 = G__48897;
continue;
} else {
var temp__5804__auto___48898__$1 = cljs.core.seq(seq__48613_48880);
if(temp__5804__auto___48898__$1){
var seq__48613_48899__$1 = temp__5804__auto___48898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48613_48899__$1)){
var c__5568__auto___48900 = cljs.core.chunk_first(seq__48613_48899__$1);
var G__48901 = cljs.core.chunk_rest(seq__48613_48899__$1);
var G__48902 = c__5568__auto___48900;
var G__48903 = cljs.core.count(c__5568__auto___48900);
var G__48904 = (0);
seq__48613_48880 = G__48901;
chunk__48615_48881 = G__48902;
count__48616_48882 = G__48903;
i__48617_48883 = G__48904;
continue;
} else {
var map__48623_48905 = cljs.core.first(seq__48613_48899__$1);
var map__48623_48906__$1 = cljs.core.__destructure_map(map__48623_48905);
var task_48907 = map__48623_48906__$1;
var fn_str_48908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623_48906__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623_48906__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48910 = goog.getObjectByName(fn_str_48908,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48909)].join(''));

(fn_obj_48910.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48910.cljs$core$IFn$_invoke$arity$2(path,new_link_48878) : fn_obj_48910.call(null,path,new_link_48878));


var G__48911 = cljs.core.next(seq__48613_48899__$1);
var G__48912 = null;
var G__48913 = (0);
var G__48914 = (0);
seq__48613_48880 = G__48911;
chunk__48615_48881 = G__48912;
count__48616_48882 = G__48913;
i__48617_48883 = G__48914;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48875);
});})(seq__48544_48871,chunk__48548_48872,count__48549_48873,i__48550_48874,seq__48228,chunk__48230,count__48231,i__48232,new_link_48878,path_match_48877,node_48875,path,seq__48228__$1,temp__5804__auto__,map__48227,map__48227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48877], 0));

goog.dom.insertSiblingAfter(new_link_48878,node_48875);


var G__48915 = seq__48544_48871;
var G__48916 = chunk__48548_48872;
var G__48917 = count__48549_48873;
var G__48918 = (i__48550_48874 + (1));
seq__48544_48871 = G__48915;
chunk__48548_48872 = G__48916;
count__48549_48873 = G__48917;
i__48550_48874 = G__48918;
continue;
} else {
var G__48919 = seq__48544_48871;
var G__48920 = chunk__48548_48872;
var G__48921 = count__48549_48873;
var G__48922 = (i__48550_48874 + (1));
seq__48544_48871 = G__48919;
chunk__48548_48872 = G__48920;
count__48549_48873 = G__48921;
i__48550_48874 = G__48922;
continue;
}
} else {
var G__48923 = seq__48544_48871;
var G__48924 = chunk__48548_48872;
var G__48925 = count__48549_48873;
var G__48926 = (i__48550_48874 + (1));
seq__48544_48871 = G__48923;
chunk__48548_48872 = G__48924;
count__48549_48873 = G__48925;
i__48550_48874 = G__48926;
continue;
}
} else {
var temp__5804__auto___48927__$1 = cljs.core.seq(seq__48544_48871);
if(temp__5804__auto___48927__$1){
var seq__48544_48928__$1 = temp__5804__auto___48927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48544_48928__$1)){
var c__5568__auto___48931 = cljs.core.chunk_first(seq__48544_48928__$1);
var G__48932 = cljs.core.chunk_rest(seq__48544_48928__$1);
var G__48933 = c__5568__auto___48931;
var G__48934 = cljs.core.count(c__5568__auto___48931);
var G__48935 = (0);
seq__48544_48871 = G__48932;
chunk__48548_48872 = G__48933;
count__48549_48873 = G__48934;
i__48550_48874 = G__48935;
continue;
} else {
var node_48936 = cljs.core.first(seq__48544_48928__$1);
if(cljs.core.not(node_48936.shadow$old)){
var path_match_48937 = shadow.cljs.devtools.client.browser.match_paths(node_48936.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48937)){
var new_link_48938 = (function (){var G__48628 = node_48936.cloneNode(true);
G__48628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48937),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48628;
})();
(node_48936.shadow$old = true);

(new_link_48938.onload = ((function (seq__48544_48871,chunk__48548_48872,count__48549_48873,i__48550_48874,seq__48228,chunk__48230,count__48231,i__48232,new_link_48938,path_match_48937,node_48936,seq__48544_48928__$1,temp__5804__auto___48927__$1,path,seq__48228__$1,temp__5804__auto__,map__48227,map__48227__$1,msg,updates,reload_info){
return (function (e){
var seq__48629_48939 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__48631_48940 = null;
var count__48632_48941 = (0);
var i__48633_48942 = (0);
while(true){
if((i__48633_48942 < count__48632_48941)){
var map__48637_48943 = chunk__48631_48940.cljs$core$IIndexed$_nth$arity$2(null,i__48633_48942);
var map__48637_48944__$1 = cljs.core.__destructure_map(map__48637_48943);
var task_48945 = map__48637_48944__$1;
var fn_str_48946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637_48944__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637_48944__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48948 = goog.getObjectByName(fn_str_48946,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48947)].join(''));

(fn_obj_48948.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48948.cljs$core$IFn$_invoke$arity$2(path,new_link_48938) : fn_obj_48948.call(null,path,new_link_48938));


var G__48949 = seq__48629_48939;
var G__48950 = chunk__48631_48940;
var G__48951 = count__48632_48941;
var G__48952 = (i__48633_48942 + (1));
seq__48629_48939 = G__48949;
chunk__48631_48940 = G__48950;
count__48632_48941 = G__48951;
i__48633_48942 = G__48952;
continue;
} else {
var temp__5804__auto___48953__$2 = cljs.core.seq(seq__48629_48939);
if(temp__5804__auto___48953__$2){
var seq__48629_48954__$1 = temp__5804__auto___48953__$2;
if(cljs.core.chunked_seq_QMARK_(seq__48629_48954__$1)){
var c__5568__auto___48955 = cljs.core.chunk_first(seq__48629_48954__$1);
var G__48956 = cljs.core.chunk_rest(seq__48629_48954__$1);
var G__48957 = c__5568__auto___48955;
var G__48958 = cljs.core.count(c__5568__auto___48955);
var G__48959 = (0);
seq__48629_48939 = G__48956;
chunk__48631_48940 = G__48957;
count__48632_48941 = G__48958;
i__48633_48942 = G__48959;
continue;
} else {
var map__48638_48960 = cljs.core.first(seq__48629_48954__$1);
var map__48638_48961__$1 = cljs.core.__destructure_map(map__48638_48960);
var task_48962 = map__48638_48961__$1;
var fn_str_48963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48638_48961__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48638_48961__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48965 = goog.getObjectByName(fn_str_48963,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48964)].join(''));

(fn_obj_48965.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48965.cljs$core$IFn$_invoke$arity$2(path,new_link_48938) : fn_obj_48965.call(null,path,new_link_48938));


var G__48966 = cljs.core.next(seq__48629_48954__$1);
var G__48967 = null;
var G__48968 = (0);
var G__48969 = (0);
seq__48629_48939 = G__48966;
chunk__48631_48940 = G__48967;
count__48632_48941 = G__48968;
i__48633_48942 = G__48969;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48936);
});})(seq__48544_48871,chunk__48548_48872,count__48549_48873,i__48550_48874,seq__48228,chunk__48230,count__48231,i__48232,new_link_48938,path_match_48937,node_48936,seq__48544_48928__$1,temp__5804__auto___48927__$1,path,seq__48228__$1,temp__5804__auto__,map__48227,map__48227__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48937], 0));

goog.dom.insertSiblingAfter(new_link_48938,node_48936);


var G__48971 = cljs.core.next(seq__48544_48928__$1);
var G__48972 = null;
var G__48973 = (0);
var G__48974 = (0);
seq__48544_48871 = G__48971;
chunk__48548_48872 = G__48972;
count__48549_48873 = G__48973;
i__48550_48874 = G__48974;
continue;
} else {
var G__48975 = cljs.core.next(seq__48544_48928__$1);
var G__48976 = null;
var G__48977 = (0);
var G__48978 = (0);
seq__48544_48871 = G__48975;
chunk__48548_48872 = G__48976;
count__48549_48873 = G__48977;
i__48550_48874 = G__48978;
continue;
}
} else {
var G__48979 = cljs.core.next(seq__48544_48928__$1);
var G__48980 = null;
var G__48981 = (0);
var G__48982 = (0);
seq__48544_48871 = G__48979;
chunk__48548_48872 = G__48980;
count__48549_48873 = G__48981;
i__48550_48874 = G__48982;
continue;
}
}
} else {
}
}
break;
}


var G__48984 = cljs.core.next(seq__48228__$1);
var G__48985 = null;
var G__48986 = (0);
var G__48987 = (0);
seq__48228 = G__48984;
chunk__48230 = G__48985;
count__48231 = G__48986;
i__48232 = G__48987;
continue;
} else {
var G__48988 = cljs.core.next(seq__48228__$1);
var G__48989 = null;
var G__48990 = (0);
var G__48991 = (0);
seq__48228 = G__48988;
chunk__48230 = G__48989;
count__48231 = G__48990;
i__48232 = G__48991;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48639){
var map__48640 = p__48639;
var map__48640__$1 = cljs.core.__destructure_map(map__48640);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48640__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48641){
var map__48642 = p__48641;
var map__48642__$1 = cljs.core.__destructure_map(map__48642);
var _ = map__48642__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48642__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48643,done,error){
var map__48644 = p__48643;
var map__48644__$1 = cljs.core.__destructure_map(map__48644);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48644__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48645,done,error){
var map__48646 = p__48645;
var map__48646__$1 = cljs.core.__destructure_map(map__48646);
var msg = map__48646__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48646__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48647){
var map__48648 = p__48647;
var map__48648__$1 = cljs.core.__destructure_map(map__48648);
var src = map__48648__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48648__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48649 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48649) : done.call(null,G__48649));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48652){
var map__48653 = p__48652;
var map__48653__$1 = cljs.core.__destructure_map(map__48653);
var msg__$1 = map__48653__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48654){var ex = e48654;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48655){
var map__48656 = p__48655;
var map__48656__$1 = cljs.core.__destructure_map(map__48656);
var env = map__48656__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48656__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48662){
var map__48663 = p__48662;
var map__48663__$1 = cljs.core.__destructure_map(map__48663);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__48668){
var map__48669 = p__48668;
var map__48669__$1 = cljs.core.__destructure_map(map__48669);
var svc = map__48669__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48669__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
