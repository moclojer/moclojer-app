goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48074,res){
var map__48075 = p__48074;
var map__48075__$1 = cljs.core.__destructure_map(map__48075);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48075__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48075__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48076 = res;
var G__48076__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48076,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48076);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48076__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48076__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48090 = arguments.length;
switch (G__48090) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48091,msg,handlers,timeout_after_ms){
var map__48092 = p__48091;
var map__48092__$1 = cljs.core.__destructure_map(map__48092);
var runtime = map__48092__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48092__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48300 = arguments.length;
var i__5770__auto___48301 = (0);
while(true){
if((i__5770__auto___48301 < len__5769__auto___48300)){
args__5775__auto__.push((arguments[i__5770__auto___48301]));

var G__48302 = (i__5770__auto___48301 + (1));
i__5770__auto___48301 = G__48302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48096,ev,args){
var map__48097 = p__48096;
var map__48097__$1 = cljs.core.__destructure_map(map__48097);
var runtime = map__48097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48098 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48101 = null;
var count__48102 = (0);
var i__48103 = (0);
while(true){
if((i__48103 < count__48102)){
var ext = chunk__48101.cljs$core$IIndexed$_nth$arity$2(null,i__48103);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48303 = seq__48098;
var G__48304 = chunk__48101;
var G__48305 = count__48102;
var G__48306 = (i__48103 + (1));
seq__48098 = G__48303;
chunk__48101 = G__48304;
count__48102 = G__48305;
i__48103 = G__48306;
continue;
} else {
var G__48307 = seq__48098;
var G__48308 = chunk__48101;
var G__48309 = count__48102;
var G__48310 = (i__48103 + (1));
seq__48098 = G__48307;
chunk__48101 = G__48308;
count__48102 = G__48309;
i__48103 = G__48310;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48098);
if(temp__5804__auto__){
var seq__48098__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48098__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48098__$1);
var G__48311 = cljs.core.chunk_rest(seq__48098__$1);
var G__48312 = c__5568__auto__;
var G__48313 = cljs.core.count(c__5568__auto__);
var G__48314 = (0);
seq__48098 = G__48311;
chunk__48101 = G__48312;
count__48102 = G__48313;
i__48103 = G__48314;
continue;
} else {
var ext = cljs.core.first(seq__48098__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48317 = cljs.core.next(seq__48098__$1);
var G__48318 = null;
var G__48319 = (0);
var G__48320 = (0);
seq__48098 = G__48317;
chunk__48101 = G__48318;
count__48102 = G__48319;
i__48103 = G__48320;
continue;
} else {
var G__48321 = cljs.core.next(seq__48098__$1);
var G__48322 = null;
var G__48323 = (0);
var G__48324 = (0);
seq__48098 = G__48321;
chunk__48101 = G__48322;
count__48102 = G__48323;
i__48103 = G__48324;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48093){
var G__48094 = cljs.core.first(seq48093);
var seq48093__$1 = cljs.core.next(seq48093);
var G__48095 = cljs.core.first(seq48093__$1);
var seq48093__$2 = cljs.core.next(seq48093__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48094,G__48095,seq48093__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48107,p__48108){
var map__48109 = p__48107;
var map__48109__$1 = cljs.core.__destructure_map(map__48109);
var runtime = map__48109__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48110 = p__48108;
var map__48110__$1 = cljs.core.__destructure_map(map__48110);
var msg = map__48110__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48110__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48112 = cljs.core.deref(state_ref);
var map__48112__$1 = cljs.core.__destructure_map(map__48112);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48113){
var map__48114 = p__48113;
var map__48114__$1 = cljs.core.__destructure_map(map__48114);
var runtime = map__48114__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48114__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48118,msg){
var map__48119 = p__48118;
var map__48119__$1 = cljs.core.__destructure_map(map__48119);
var runtime = map__48119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48129,key,p__48130){
var map__48131 = p__48129;
var map__48131__$1 = cljs.core.__destructure_map(map__48131);
var state = map__48131__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48131__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48132 = p__48130;
var map__48132__$1 = cljs.core.__destructure_map(map__48132);
var spec = map__48132__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48132__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48134,key,spec){
var map__48135 = p__48134;
var map__48135__$1 = cljs.core.__destructure_map(map__48135);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48135__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48136_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48136_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48137_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48137_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48138_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48138_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48139_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48139_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48140_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48140_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48161,key){
var map__48167 = p__48161;
var map__48167__$1 = cljs.core.__destructure_map(map__48167);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48171,msg){
var map__48174 = p__48171;
var map__48174__$1 = cljs.core.__destructure_map(map__48174);
var runtime = map__48174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48183,p__48184){
var map__48185 = p__48183;
var map__48185__$1 = cljs.core.__destructure_map(map__48185);
var runtime = map__48185__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48185__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48186 = p__48184;
var map__48186__$1 = cljs.core.__destructure_map(map__48186);
var msg = map__48186__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48186__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48208 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48210 = null;
var count__48211 = (0);
var i__48212 = (0);
while(true){
if((i__48212 < count__48211)){
var map__48225 = chunk__48210.cljs$core$IIndexed$_nth$arity$2(null,i__48212);
var map__48225__$1 = cljs.core.__destructure_map(map__48225);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48225__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48418 = seq__48208;
var G__48419 = chunk__48210;
var G__48420 = count__48211;
var G__48421 = (i__48212 + (1));
seq__48208 = G__48418;
chunk__48210 = G__48419;
count__48211 = G__48420;
i__48212 = G__48421;
continue;
} else {
var G__48422 = seq__48208;
var G__48423 = chunk__48210;
var G__48424 = count__48211;
var G__48425 = (i__48212 + (1));
seq__48208 = G__48422;
chunk__48210 = G__48423;
count__48211 = G__48424;
i__48212 = G__48425;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48208);
if(temp__5804__auto__){
var seq__48208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48208__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48208__$1);
var G__48426 = cljs.core.chunk_rest(seq__48208__$1);
var G__48427 = c__5568__auto__;
var G__48428 = cljs.core.count(c__5568__auto__);
var G__48429 = (0);
seq__48208 = G__48426;
chunk__48210 = G__48427;
count__48211 = G__48428;
i__48212 = G__48429;
continue;
} else {
var map__48230 = cljs.core.first(seq__48208__$1);
var map__48230__$1 = cljs.core.__destructure_map(map__48230);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48431 = cljs.core.next(seq__48208__$1);
var G__48432 = null;
var G__48433 = (0);
var G__48434 = (0);
seq__48208 = G__48431;
chunk__48210 = G__48432;
count__48211 = G__48433;
i__48212 = G__48434;
continue;
} else {
var G__48435 = cljs.core.next(seq__48208__$1);
var G__48436 = null;
var G__48437 = (0);
var G__48438 = (0);
seq__48208 = G__48435;
chunk__48210 = G__48436;
count__48211 = G__48437;
i__48212 = G__48438;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
