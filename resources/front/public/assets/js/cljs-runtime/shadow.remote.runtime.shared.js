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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__42156,res){
var map__42157 = p__42156;
var map__42157__$1 = cljs.core.__destructure_map(map__42157);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__42162 = res;
var G__42162__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42162,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__42162);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42162__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__42162__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__42173 = arguments.length;
switch (G__42173) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__42179,msg,handlers,timeout_after_ms){
var map__42180 = p__42179;
var map__42180__$1 = cljs.core.__destructure_map(map__42180);
var runtime = map__42180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42307 = arguments.length;
var i__5770__auto___42308 = (0);
while(true){
if((i__5770__auto___42308 < len__5769__auto___42307)){
args__5775__auto__.push((arguments[i__5770__auto___42308]));

var G__42309 = (i__5770__auto___42308 + (1));
i__5770__auto___42308 = G__42309;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42184,ev,args){
var map__42185 = p__42184;
var map__42185__$1 = cljs.core.__destructure_map(map__42185);
var runtime = map__42185__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42185__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__42186 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42189 = null;
var count__42190 = (0);
var i__42191 = (0);
while(true){
if((i__42191 < count__42190)){
var ext = chunk__42189.cljs$core$IIndexed$_nth$arity$2(null,i__42191);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42310 = seq__42186;
var G__42311 = chunk__42189;
var G__42312 = count__42190;
var G__42313 = (i__42191 + (1));
seq__42186 = G__42310;
chunk__42189 = G__42311;
count__42190 = G__42312;
i__42191 = G__42313;
continue;
} else {
var G__42314 = seq__42186;
var G__42315 = chunk__42189;
var G__42316 = count__42190;
var G__42317 = (i__42191 + (1));
seq__42186 = G__42314;
chunk__42189 = G__42315;
count__42190 = G__42316;
i__42191 = G__42317;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42186);
if(temp__5804__auto__){
var seq__42186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42186__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42186__$1);
var G__42318 = cljs.core.chunk_rest(seq__42186__$1);
var G__42319 = c__5568__auto__;
var G__42320 = cljs.core.count(c__5568__auto__);
var G__42321 = (0);
seq__42186 = G__42318;
chunk__42189 = G__42319;
count__42190 = G__42320;
i__42191 = G__42321;
continue;
} else {
var ext = cljs.core.first(seq__42186__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42322 = cljs.core.next(seq__42186__$1);
var G__42323 = null;
var G__42324 = (0);
var G__42325 = (0);
seq__42186 = G__42322;
chunk__42189 = G__42323;
count__42190 = G__42324;
i__42191 = G__42325;
continue;
} else {
var G__42326 = cljs.core.next(seq__42186__$1);
var G__42327 = null;
var G__42328 = (0);
var G__42329 = (0);
seq__42186 = G__42326;
chunk__42189 = G__42327;
count__42190 = G__42328;
i__42191 = G__42329;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq42181){
var G__42182 = cljs.core.first(seq42181);
var seq42181__$1 = cljs.core.next(seq42181);
var G__42183 = cljs.core.first(seq42181__$1);
var seq42181__$2 = cljs.core.next(seq42181__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42182,G__42183,seq42181__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__42208,p__42209){
var map__42210 = p__42208;
var map__42210__$1 = cljs.core.__destructure_map(map__42210);
var runtime = map__42210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42211 = p__42209;
var map__42211__$1 = cljs.core.__destructure_map(map__42211);
var msg = map__42211__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42211__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__42217 = cljs.core.deref(state_ref);
var map__42217__$1 = cljs.core.__destructure_map(map__42217);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__42240){
var map__42241 = p__42240;
var map__42241__$1 = cljs.core.__destructure_map(map__42241);
var runtime = map__42241__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__42244,msg){
var map__42248 = p__42244;
var map__42248__$1 = cljs.core.__destructure_map(map__42248);
var runtime = map__42248__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42248__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__42254,key,p__42255){
var map__42257 = p__42254;
var map__42257__$1 = cljs.core.__destructure_map(map__42257);
var state = map__42257__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42257__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__42258 = p__42255;
var map__42258__$1 = cljs.core.__destructure_map(map__42258);
var spec = map__42258__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__42263,key,spec){
var map__42264 = p__42263;
var map__42264__$1 = cljs.core.__destructure_map(map__42264);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42264__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__42265_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__42265_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__42266_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__42266_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__42268_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__42268_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__42269_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__42269_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__42270_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__42270_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__42275,key){
var map__42276 = p__42275;
var map__42276__$1 = cljs.core.__destructure_map(map__42276);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__42279,msg){
var map__42280 = p__42279;
var map__42280__$1 = cljs.core.__destructure_map(map__42280);
var runtime = map__42280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__42284,p__42285){
var map__42286 = p__42284;
var map__42286__$1 = cljs.core.__destructure_map(map__42286);
var runtime = map__42286__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42286__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42287 = p__42285;
var map__42287__$1 = cljs.core.__destructure_map(map__42287);
var msg = map__42287__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42287__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42287__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__42288 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42290 = null;
var count__42291 = (0);
var i__42292 = (0);
while(true){
if((i__42292 < count__42291)){
var map__42299 = chunk__42290.cljs$core$IIndexed$_nth$arity$2(null,i__42292);
var map__42299__$1 = cljs.core.__destructure_map(map__42299);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42299__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42338 = seq__42288;
var G__42339 = chunk__42290;
var G__42340 = count__42291;
var G__42341 = (i__42292 + (1));
seq__42288 = G__42338;
chunk__42290 = G__42339;
count__42291 = G__42340;
i__42292 = G__42341;
continue;
} else {
var G__42342 = seq__42288;
var G__42343 = chunk__42290;
var G__42344 = count__42291;
var G__42345 = (i__42292 + (1));
seq__42288 = G__42342;
chunk__42290 = G__42343;
count__42291 = G__42344;
i__42292 = G__42345;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42288);
if(temp__5804__auto__){
var seq__42288__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42288__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42288__$1);
var G__42346 = cljs.core.chunk_rest(seq__42288__$1);
var G__42347 = c__5568__auto__;
var G__42348 = cljs.core.count(c__5568__auto__);
var G__42349 = (0);
seq__42288 = G__42346;
chunk__42290 = G__42347;
count__42291 = G__42348;
i__42292 = G__42349;
continue;
} else {
var map__42301 = cljs.core.first(seq__42288__$1);
var map__42301__$1 = cljs.core.__destructure_map(map__42301);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42350 = cljs.core.next(seq__42288__$1);
var G__42351 = null;
var G__42352 = (0);
var G__42353 = (0);
seq__42288 = G__42350;
chunk__42290 = G__42351;
count__42291 = G__42352;
i__42292 = G__42353;
continue;
} else {
var G__42354 = cljs.core.next(seq__42288__$1);
var G__42355 = null;
var G__42356 = (0);
var G__42357 = (0);
seq__42288 = G__42354;
chunk__42290 = G__42355;
count__42291 = G__42356;
i__42292 = G__42357;
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
