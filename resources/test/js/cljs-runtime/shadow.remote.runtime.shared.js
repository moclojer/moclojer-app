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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45003,res){
var map__45008 = p__45003;
var map__45008__$1 = cljs.core.__destructure_map(map__45008);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45008__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45008__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45012 = res;
var G__45012__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45012,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45012);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45012__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45012__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45026 = arguments.length;
switch (G__45026) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45032,msg,handlers,timeout_after_ms){
var map__45033 = p__45032;
var map__45033__$1 = cljs.core.__destructure_map(map__45033);
var runtime = map__45033__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45329 = arguments.length;
var i__5770__auto___45330 = (0);
while(true){
if((i__5770__auto___45330 < len__5769__auto___45329)){
args__5775__auto__.push((arguments[i__5770__auto___45330]));

var G__45332 = (i__5770__auto___45330 + (1));
i__5770__auto___45330 = G__45332;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45053,ev,args){
var map__45055 = p__45053;
var map__45055__$1 = cljs.core.__destructure_map(map__45055);
var runtime = map__45055__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45055__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45057 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45060 = null;
var count__45061 = (0);
var i__45062 = (0);
while(true){
if((i__45062 < count__45061)){
var ext = chunk__45060.cljs$core$IIndexed$_nth$arity$2(null,i__45062);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45341 = seq__45057;
var G__45342 = chunk__45060;
var G__45343 = count__45061;
var G__45344 = (i__45062 + (1));
seq__45057 = G__45341;
chunk__45060 = G__45342;
count__45061 = G__45343;
i__45062 = G__45344;
continue;
} else {
var G__45346 = seq__45057;
var G__45347 = chunk__45060;
var G__45348 = count__45061;
var G__45349 = (i__45062 + (1));
seq__45057 = G__45346;
chunk__45060 = G__45347;
count__45061 = G__45348;
i__45062 = G__45349;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45057);
if(temp__5804__auto__){
var seq__45057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45057__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45057__$1);
var G__45352 = cljs.core.chunk_rest(seq__45057__$1);
var G__45353 = c__5568__auto__;
var G__45354 = cljs.core.count(c__5568__auto__);
var G__45355 = (0);
seq__45057 = G__45352;
chunk__45060 = G__45353;
count__45061 = G__45354;
i__45062 = G__45355;
continue;
} else {
var ext = cljs.core.first(seq__45057__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45357 = cljs.core.next(seq__45057__$1);
var G__45358 = null;
var G__45359 = (0);
var G__45360 = (0);
seq__45057 = G__45357;
chunk__45060 = G__45358;
count__45061 = G__45359;
i__45062 = G__45360;
continue;
} else {
var G__45362 = cljs.core.next(seq__45057__$1);
var G__45363 = null;
var G__45364 = (0);
var G__45365 = (0);
seq__45057 = G__45362;
chunk__45060 = G__45363;
count__45061 = G__45364;
i__45062 = G__45365;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45047){
var G__45048 = cljs.core.first(seq45047);
var seq45047__$1 = cljs.core.next(seq45047);
var G__45049 = cljs.core.first(seq45047__$1);
var seq45047__$2 = cljs.core.next(seq45047__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45048,G__45049,seq45047__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45093,p__45094){
var map__45097 = p__45093;
var map__45097__$1 = cljs.core.__destructure_map(map__45097);
var runtime = map__45097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45099 = p__45094;
var map__45099__$1 = cljs.core.__destructure_map(map__45099);
var msg = map__45099__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45099__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45103 = cljs.core.deref(state_ref);
var map__45103__$1 = cljs.core.__destructure_map(map__45103);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45103__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45103__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45125){
var map__45128 = p__45125;
var map__45128__$1 = cljs.core.__destructure_map(map__45128);
var runtime = map__45128__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45128__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45141,msg){
var map__45146 = p__45141;
var map__45146__$1 = cljs.core.__destructure_map(map__45146);
var runtime = map__45146__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45155,key,p__45156){
var map__45158 = p__45155;
var map__45158__$1 = cljs.core.__destructure_map(map__45158);
var state = map__45158__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45158__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45159 = p__45156;
var map__45159__$1 = cljs.core.__destructure_map(map__45159);
var spec = map__45159__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45159__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45177,key,spec){
var map__45182 = p__45177;
var map__45182__$1 = cljs.core.__destructure_map(map__45182);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45188_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45188_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45189_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45189_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45190_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45190_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45191_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45191_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45192_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45192_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45215,key){
var map__45217 = p__45215;
var map__45217__$1 = cljs.core.__destructure_map(map__45217);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45217__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45233,msg){
var map__45234 = p__45233;
var map__45234__$1 = cljs.core.__destructure_map(map__45234);
var runtime = map__45234__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45234__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45253,p__45254){
var map__45255 = p__45253;
var map__45255__$1 = cljs.core.__destructure_map(map__45255);
var runtime = map__45255__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45255__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45256 = p__45254;
var map__45256__$1 = cljs.core.__destructure_map(map__45256);
var msg = map__45256__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__45279 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45281 = null;
var count__45282 = (0);
var i__45283 = (0);
while(true){
if((i__45283 < count__45282)){
var map__45294 = chunk__45281.cljs$core$IIndexed$_nth$arity$2(null,i__45283);
var map__45294__$1 = cljs.core.__destructure_map(map__45294);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45443 = seq__45279;
var G__45444 = chunk__45281;
var G__45445 = count__45282;
var G__45446 = (i__45283 + (1));
seq__45279 = G__45443;
chunk__45281 = G__45444;
count__45282 = G__45445;
i__45283 = G__45446;
continue;
} else {
var G__45450 = seq__45279;
var G__45451 = chunk__45281;
var G__45452 = count__45282;
var G__45453 = (i__45283 + (1));
seq__45279 = G__45450;
chunk__45281 = G__45451;
count__45282 = G__45452;
i__45283 = G__45453;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45279);
if(temp__5804__auto__){
var seq__45279__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45279__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45279__$1);
var G__45457 = cljs.core.chunk_rest(seq__45279__$1);
var G__45458 = c__5568__auto__;
var G__45459 = cljs.core.count(c__5568__auto__);
var G__45460 = (0);
seq__45279 = G__45457;
chunk__45281 = G__45458;
count__45282 = G__45459;
i__45283 = G__45460;
continue;
} else {
var map__45304 = cljs.core.first(seq__45279__$1);
var map__45304__$1 = cljs.core.__destructure_map(map__45304);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45304__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45463 = cljs.core.next(seq__45279__$1);
var G__45464 = null;
var G__45465 = (0);
var G__45466 = (0);
seq__45279 = G__45463;
chunk__45281 = G__45464;
count__45282 = G__45465;
i__45283 = G__45466;
continue;
} else {
var G__45468 = cljs.core.next(seq__45279__$1);
var G__45469 = null;
var G__45470 = (0);
var G__45471 = (0);
seq__45279 = G__45468;
chunk__45281 = G__45469;
count__45282 = G__45470;
i__45283 = G__45471;
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
