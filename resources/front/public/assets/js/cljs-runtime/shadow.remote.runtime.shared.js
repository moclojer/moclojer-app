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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33466,res){
var map__33467 = p__33466;
var map__33467__$1 = cljs.core.__destructure_map(map__33467);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33467__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33467__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33469 = res;
var G__33469__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33469,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33469);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33469__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33469__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33474 = arguments.length;
switch (G__33474) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33475,msg,handlers,timeout_after_ms){
var map__33476 = p__33475;
var map__33476__$1 = cljs.core.__destructure_map(map__33476);
var runtime = map__33476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33614 = arguments.length;
var i__5770__auto___33615 = (0);
while(true){
if((i__5770__auto___33615 < len__5769__auto___33614)){
args__5775__auto__.push((arguments[i__5770__auto___33615]));

var G__33616 = (i__5770__auto___33615 + (1));
i__5770__auto___33615 = G__33616;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33486,ev,args){
var map__33487 = p__33486;
var map__33487__$1 = cljs.core.__destructure_map(map__33487);
var runtime = map__33487__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33487__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33488 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33491 = null;
var count__33492 = (0);
var i__33493 = (0);
while(true){
if((i__33493 < count__33492)){
var ext = chunk__33491.cljs$core$IIndexed$_nth$arity$2(null,i__33493);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33617 = seq__33488;
var G__33618 = chunk__33491;
var G__33619 = count__33492;
var G__33620 = (i__33493 + (1));
seq__33488 = G__33617;
chunk__33491 = G__33618;
count__33492 = G__33619;
i__33493 = G__33620;
continue;
} else {
var G__33621 = seq__33488;
var G__33622 = chunk__33491;
var G__33623 = count__33492;
var G__33624 = (i__33493 + (1));
seq__33488 = G__33621;
chunk__33491 = G__33622;
count__33492 = G__33623;
i__33493 = G__33624;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33488);
if(temp__5804__auto__){
var seq__33488__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33488__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33488__$1);
var G__33626 = cljs.core.chunk_rest(seq__33488__$1);
var G__33627 = c__5568__auto__;
var G__33628 = cljs.core.count(c__5568__auto__);
var G__33629 = (0);
seq__33488 = G__33626;
chunk__33491 = G__33627;
count__33492 = G__33628;
i__33493 = G__33629;
continue;
} else {
var ext = cljs.core.first(seq__33488__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33630 = cljs.core.next(seq__33488__$1);
var G__33631 = null;
var G__33632 = (0);
var G__33633 = (0);
seq__33488 = G__33630;
chunk__33491 = G__33631;
count__33492 = G__33632;
i__33493 = G__33633;
continue;
} else {
var G__33634 = cljs.core.next(seq__33488__$1);
var G__33635 = null;
var G__33636 = (0);
var G__33637 = (0);
seq__33488 = G__33634;
chunk__33491 = G__33635;
count__33492 = G__33636;
i__33493 = G__33637;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33479){
var G__33480 = cljs.core.first(seq33479);
var seq33479__$1 = cljs.core.next(seq33479);
var G__33481 = cljs.core.first(seq33479__$1);
var seq33479__$2 = cljs.core.next(seq33479__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33480,G__33481,seq33479__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33497,p__33498){
var map__33499 = p__33497;
var map__33499__$1 = cljs.core.__destructure_map(map__33499);
var runtime = map__33499__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33499__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33500 = p__33498;
var map__33500__$1 = cljs.core.__destructure_map(map__33500);
var msg = map__33500__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33500__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33502 = cljs.core.deref(state_ref);
var map__33502__$1 = cljs.core.__destructure_map(map__33502);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33503){
var map__33504 = p__33503;
var map__33504__$1 = cljs.core.__destructure_map(map__33504);
var runtime = map__33504__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33506,msg){
var map__33507 = p__33506;
var map__33507__$1 = cljs.core.__destructure_map(map__33507);
var runtime = map__33507__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33507__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33513,key,p__33514){
var map__33515 = p__33513;
var map__33515__$1 = cljs.core.__destructure_map(map__33515);
var state = map__33515__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33515__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33516 = p__33514;
var map__33516__$1 = cljs.core.__destructure_map(map__33516);
var spec = map__33516__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33516__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33518,key,spec){
var map__33519 = p__33518;
var map__33519__$1 = cljs.core.__destructure_map(map__33519);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33519__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33520_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33520_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33521_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33521_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33523_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33523_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33524_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33524_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33525_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33525_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33531,key){
var map__33532 = p__33531;
var map__33532__$1 = cljs.core.__destructure_map(map__33532);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33532__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33539,msg){
var map__33541 = p__33539;
var map__33541__$1 = cljs.core.__destructure_map(map__33541);
var runtime = map__33541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33566,p__33567){
var map__33568 = p__33566;
var map__33568__$1 = cljs.core.__destructure_map(map__33568);
var runtime = map__33568__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33568__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33569 = p__33567;
var map__33569__$1 = cljs.core.__destructure_map(map__33569);
var msg = map__33569__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__33577 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33579 = null;
var count__33580 = (0);
var i__33581 = (0);
while(true){
if((i__33581 < count__33580)){
var map__33604 = chunk__33579.cljs$core$IIndexed$_nth$arity$2(null,i__33581);
var map__33604__$1 = cljs.core.__destructure_map(map__33604);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33604__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33742 = seq__33577;
var G__33743 = chunk__33579;
var G__33744 = count__33580;
var G__33745 = (i__33581 + (1));
seq__33577 = G__33742;
chunk__33579 = G__33743;
count__33580 = G__33744;
i__33581 = G__33745;
continue;
} else {
var G__33746 = seq__33577;
var G__33747 = chunk__33579;
var G__33748 = count__33580;
var G__33749 = (i__33581 + (1));
seq__33577 = G__33746;
chunk__33579 = G__33747;
count__33580 = G__33748;
i__33581 = G__33749;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33577);
if(temp__5804__auto__){
var seq__33577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33577__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33577__$1);
var G__33750 = cljs.core.chunk_rest(seq__33577__$1);
var G__33751 = c__5568__auto__;
var G__33752 = cljs.core.count(c__5568__auto__);
var G__33753 = (0);
seq__33577 = G__33750;
chunk__33579 = G__33751;
count__33580 = G__33752;
i__33581 = G__33753;
continue;
} else {
var map__33608 = cljs.core.first(seq__33577__$1);
var map__33608__$1 = cljs.core.__destructure_map(map__33608);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33608__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33754 = cljs.core.next(seq__33577__$1);
var G__33755 = null;
var G__33756 = (0);
var G__33757 = (0);
seq__33577 = G__33754;
chunk__33579 = G__33755;
count__33580 = G__33756;
i__33581 = G__33757;
continue;
} else {
var G__33758 = cljs.core.next(seq__33577__$1);
var G__33759 = null;
var G__33760 = (0);
var G__33761 = (0);
seq__33577 = G__33758;
chunk__33579 = G__33759;
count__33580 = G__33760;
i__33581 = G__33761;
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
