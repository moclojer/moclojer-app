goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45654,p__45655){
var map__45656 = p__45654;
var map__45656__$1 = cljs.core.__destructure_map(map__45656);
var svc = map__45656__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45656__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45657 = p__45655;
var map__45657__$1 = cljs.core.__destructure_map(map__45657);
var msg = map__45657__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45657__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45657__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45657__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45657__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45658,p__45659){
var map__45660 = p__45658;
var map__45660__$1 = cljs.core.__destructure_map(map__45660);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45660__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45661 = p__45659;
var map__45661__$1 = cljs.core.__destructure_map(map__45661);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45664,p__45665){
var map__45666 = p__45664;
var map__45666__$1 = cljs.core.__destructure_map(map__45666);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45666__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45666__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45667 = p__45665;
var map__45667__$1 = cljs.core.__destructure_map(map__45667);
var msg = map__45667__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45667__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45676,tid){
var map__45678 = p__45676;
var map__45678__$1 = cljs.core.__destructure_map(map__45678);
var svc = map__45678__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45678__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45696 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45697 = null;
var count__45698 = (0);
var i__45699 = (0);
while(true){
if((i__45699 < count__45698)){
var vec__45707 = chunk__45697.cljs$core$IIndexed$_nth$arity$2(null,i__45699);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45707,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45707,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45721 = seq__45696;
var G__45722 = chunk__45697;
var G__45723 = count__45698;
var G__45724 = (i__45699 + (1));
seq__45696 = G__45721;
chunk__45697 = G__45722;
count__45698 = G__45723;
i__45699 = G__45724;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45696);
if(temp__5804__auto__){
var seq__45696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45696__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45696__$1);
var G__45725 = cljs.core.chunk_rest(seq__45696__$1);
var G__45726 = c__5568__auto__;
var G__45727 = cljs.core.count(c__5568__auto__);
var G__45728 = (0);
seq__45696 = G__45725;
chunk__45697 = G__45726;
count__45698 = G__45727;
i__45699 = G__45728;
continue;
} else {
var vec__45710 = cljs.core.first(seq__45696__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45733 = cljs.core.next(seq__45696__$1);
var G__45734 = null;
var G__45735 = (0);
var G__45736 = (0);
seq__45696 = G__45733;
chunk__45697 = G__45734;
count__45698 = G__45735;
i__45699 = G__45736;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45684_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45684_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45686_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45686_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45687_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45687_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45688_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45688_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45713){
var map__45714 = p__45713;
var map__45714__$1 = cljs.core.__destructure_map(map__45714);
var svc = map__45714__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45714__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45714__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
