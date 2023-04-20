goog.provide('refx.effects');
refx.effects.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
refx.effects.register = (function refx$effects$register(id,handler){
return refx.registry.add_BANG_(refx.effects.kind,id,handler);
});
refx.effects.db_effect = (function refx$effects$db_effect(db){
if((cljs.core.deref(refx.db.app_db) === db)){
return null;
} else {
return cljs.core.reset_BANG_(refx.db.app_db,db);
}
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
refx.effects.do_fx = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function refx$effects$do_fx_after(context){
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___28516 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___28516)){
var new_db_28517 = temp__5804__auto___28516;
refx.effects.db_effect(new_db_28517);
} else {
}

var seq__28410 = cljs.core.seq(effects_without_db);
var chunk__28411 = null;
var count__28412 = (0);
var i__28413 = (0);
while(true){
if((i__28413 < count__28412)){
var vec__28422 = chunk__28411.cljs$core$IIndexed$_nth$arity$2(null,i__28413);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28422,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28422,(1),null);
var temp__5802__auto___28519 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___28519)){
var effect_fn_28520 = temp__5802__auto___28519;
(effect_fn_28520.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28520.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28520.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__28521 = seq__28410;
var G__28522 = chunk__28411;
var G__28523 = count__28412;
var G__28524 = (i__28413 + (1));
seq__28410 = G__28521;
chunk__28411 = G__28522;
count__28412 = G__28523;
i__28413 = G__28524;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28410);
if(temp__5804__auto__){
var seq__28410__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28410__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28410__$1);
var G__28525 = cljs.core.chunk_rest(seq__28410__$1);
var G__28526 = c__5568__auto__;
var G__28527 = cljs.core.count(c__5568__auto__);
var G__28528 = (0);
seq__28410 = G__28525;
chunk__28411 = G__28526;
count__28412 = G__28527;
i__28413 = G__28528;
continue;
} else {
var vec__28429 = cljs.core.first(seq__28410__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(1),null);
var temp__5802__auto___28530 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___28530)){
var effect_fn_28531 = temp__5802__auto___28530;
(effect_fn_28531.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28531.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28531.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__28532 = cljs.core.next(seq__28410__$1);
var G__28533 = null;
var G__28534 = (0);
var G__28535 = (0);
seq__28410 = G__28532;
chunk__28411 = G__28533;
count__28412 = G__28534;
i__28413 = G__28535;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__28435){
var map__28436 = p__28435;
var map__28436__$1 = cljs.core.__destructure_map(map__28436);
var effect = map__28436__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-later value:",effect], 0));
} else {
return refx.interop.set_timeout_BANG_((function (){
return refx.dispatch.dispatch(dispatch);
}),ms);
}
});
refx.effects.register(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return refx.effects.dispatch_later(value);
} else {
var seq__28438 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28439 = null;
var count__28440 = (0);
var i__28441 = (0);
while(true){
if((i__28441 < count__28440)){
var effect = chunk__28439.cljs$core$IIndexed$_nth$arity$2(null,i__28441);
refx.effects.dispatch_later(effect);


var G__28556 = seq__28438;
var G__28557 = chunk__28439;
var G__28558 = count__28440;
var G__28559 = (i__28441 + (1));
seq__28438 = G__28556;
chunk__28439 = G__28557;
count__28440 = G__28558;
i__28441 = G__28559;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28438);
if(temp__5804__auto__){
var seq__28438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28438__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28438__$1);
var G__28562 = cljs.core.chunk_rest(seq__28438__$1);
var G__28563 = c__5568__auto__;
var G__28564 = cljs.core.count(c__5568__auto__);
var G__28565 = (0);
seq__28438 = G__28562;
chunk__28439 = G__28563;
count__28440 = G__28564;
i__28441 = G__28565;
continue;
} else {
var effect = cljs.core.first(seq__28438__$1);
refx.effects.dispatch_later(effect);


var G__28566 = cljs.core.next(seq__28438__$1);
var G__28567 = null;
var G__28568 = (0);
var G__28569 = (0);
seq__28438 = G__28566;
chunk__28439 = G__28567;
count__28440 = G__28568;
i__28441 = G__28569;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28446 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28447 = null;
var count__28448 = (0);
var i__28449 = (0);
while(true){
if((i__28449 < count__28448)){
var vec__28462 = chunk__28447.cljs$core$IIndexed$_nth$arity$2(null,i__28449);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___28573 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___28573)){
var effect_fn_28574 = temp__5802__auto___28573;
(effect_fn_28574.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28574.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28574.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__28575 = seq__28446;
var G__28576 = chunk__28447;
var G__28577 = count__28448;
var G__28578 = (i__28449 + (1));
seq__28446 = G__28575;
chunk__28447 = G__28576;
count__28448 = G__28577;
i__28449 = G__28578;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28446);
if(temp__5804__auto__){
var seq__28446__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28446__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28446__$1);
var G__28579 = cljs.core.chunk_rest(seq__28446__$1);
var G__28580 = c__5568__auto__;
var G__28581 = cljs.core.count(c__5568__auto__);
var G__28582 = (0);
seq__28446 = G__28579;
chunk__28447 = G__28580;
count__28448 = G__28581;
i__28449 = G__28582;
continue;
} else {
var vec__28470 = cljs.core.first(seq__28446__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___28585 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___28585)){
var effect_fn_28586 = temp__5802__auto___28585;
(effect_fn_28586.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28586.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28586.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__28589 = cljs.core.next(seq__28446__$1);
var G__28590 = null;
var G__28591 = (0);
var G__28592 = (0);
seq__28446 = G__28589;
chunk__28447 = G__28590;
count__28448 = G__28591;
i__28449 = G__28592;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return refx.dispatch.dispatch(value);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28479 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28480 = null;
var count__28481 = (0);
var i__28482 = (0);
while(true){
if((i__28482 < count__28481)){
var event = chunk__28480.cljs$core$IIndexed$_nth$arity$2(null,i__28482);
refx.dispatch.dispatch(event);


var G__28602 = seq__28479;
var G__28603 = chunk__28480;
var G__28604 = count__28481;
var G__28605 = (i__28482 + (1));
seq__28479 = G__28602;
chunk__28480 = G__28603;
count__28481 = G__28604;
i__28482 = G__28605;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28479);
if(temp__5804__auto__){
var seq__28479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28479__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28479__$1);
var G__28610 = cljs.core.chunk_rest(seq__28479__$1);
var G__28611 = c__5568__auto__;
var G__28612 = cljs.core.count(c__5568__auto__);
var G__28613 = (0);
seq__28479 = G__28610;
chunk__28480 = G__28611;
count__28481 = G__28612;
i__28482 = G__28613;
continue;
} else {
var event = cljs.core.first(seq__28479__$1);
refx.dispatch.dispatch(event);


var G__28618 = cljs.core.next(seq__28479__$1);
var G__28619 = null;
var G__28620 = (0);
var G__28621 = (0);
seq__28479 = G__28618;
chunk__28480 = G__28619;
count__28481 = G__28620;
i__28482 = G__28621;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
if(cljs.core.sequential_QMARK_(value)){
var seq__28495 = cljs.core.seq(value);
var chunk__28496 = null;
var count__28497 = (0);
var i__28498 = (0);
while(true){
if((i__28498 < count__28497)){
var event_id = chunk__28496.cljs$core$IIndexed$_nth$arity$2(null,i__28498);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__28622 = seq__28495;
var G__28623 = chunk__28496;
var G__28624 = count__28497;
var G__28625 = (i__28498 + (1));
seq__28495 = G__28622;
chunk__28496 = G__28623;
count__28497 = G__28624;
i__28498 = G__28625;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28495);
if(temp__5804__auto__){
var seq__28495__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28495__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28495__$1);
var G__28626 = cljs.core.chunk_rest(seq__28495__$1);
var G__28627 = c__5568__auto__;
var G__28628 = cljs.core.count(c__5568__auto__);
var G__28629 = (0);
seq__28495 = G__28626;
chunk__28496 = G__28627;
count__28497 = G__28628;
i__28498 = G__28629;
continue;
} else {
var event_id = cljs.core.first(seq__28495__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__28630 = cljs.core.next(seq__28495__$1);
var G__28631 = null;
var G__28632 = (0);
var G__28633 = (0);
seq__28495 = G__28630;
chunk__28496 = G__28631;
count__28497 = G__28632;
i__28498 = G__28633;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return refx.registry.clear_BANG_(refx.events.kind);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"db","db",993250759),refx.effects.db_effect);

//# sourceMappingURL=refx.effects.js.map
