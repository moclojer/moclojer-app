goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47536,p__47537){
var map__47539 = p__47536;
var map__47539__$1 = cljs.core.__destructure_map(map__47539);
var svc = map__47539__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47539__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47539__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47540 = p__47537;
var map__47540__$1 = cljs.core.__destructure_map(map__47540);
var msg = map__47540__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47540__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47540__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47540__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47540__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47550,p__47551){
var map__47552 = p__47550;
var map__47552__$1 = cljs.core.__destructure_map(map__47552);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47552__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47553 = p__47551;
var map__47553__$1 = cljs.core.__destructure_map(map__47553);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47553__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47558,p__47559){
var map__47562 = p__47558;
var map__47562__$1 = cljs.core.__destructure_map(map__47562);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47562__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47562__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47563 = p__47559;
var map__47563__$1 = cljs.core.__destructure_map(map__47563);
var msg = map__47563__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47563__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47567,tid){
var map__47568 = p__47567;
var map__47568__$1 = cljs.core.__destructure_map(map__47568);
var svc = map__47568__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47568__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47591 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47592 = null;
var count__47593 = (0);
var i__47594 = (0);
while(true){
if((i__47594 < count__47593)){
var vec__47608 = chunk__47592.cljs$core$IIndexed$_nth$arity$2(null,i__47594);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47608,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47608,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47632 = seq__47591;
var G__47633 = chunk__47592;
var G__47634 = count__47593;
var G__47635 = (i__47594 + (1));
seq__47591 = G__47632;
chunk__47592 = G__47633;
count__47593 = G__47634;
i__47594 = G__47635;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47591);
if(temp__5804__auto__){
var seq__47591__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47591__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47591__$1);
var G__47636 = cljs.core.chunk_rest(seq__47591__$1);
var G__47637 = c__5568__auto__;
var G__47638 = cljs.core.count(c__5568__auto__);
var G__47639 = (0);
seq__47591 = G__47636;
chunk__47592 = G__47637;
count__47593 = G__47638;
i__47594 = G__47639;
continue;
} else {
var vec__47611 = cljs.core.first(seq__47591__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47611,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47611,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47641 = cljs.core.next(seq__47591__$1);
var G__47642 = null;
var G__47643 = (0);
var G__47644 = (0);
seq__47591 = G__47641;
chunk__47592 = G__47642;
count__47593 = G__47643;
i__47594 = G__47644;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47573_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47573_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47578_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47578_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47579_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47579_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47580_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47580_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47617){
var map__47618 = p__47617;
var map__47618__$1 = cljs.core.__destructure_map(map__47618);
var svc = map__47618__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47618__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
