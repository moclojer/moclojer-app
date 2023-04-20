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
var temp__5804__auto___58429 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___58429)){
var new_db_58430 = temp__5804__auto___58429;
refx.effects.db_effect(new_db_58430);
} else {
}

var seq__58362 = cljs.core.seq(effects_without_db);
var chunk__58363 = null;
var count__58364 = (0);
var i__58365 = (0);
while(true){
if((i__58365 < count__58364)){
var vec__58379 = chunk__58363.cljs$core$IIndexed$_nth$arity$2(null,i__58365);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58379,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58379,(1),null);
var temp__5802__auto___58432 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___58432)){
var effect_fn_58433 = temp__5802__auto___58432;
(effect_fn_58433.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58433.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58433.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__58434 = seq__58362;
var G__58435 = chunk__58363;
var G__58436 = count__58364;
var G__58437 = (i__58365 + (1));
seq__58362 = G__58434;
chunk__58363 = G__58435;
count__58364 = G__58436;
i__58365 = G__58437;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58362);
if(temp__5804__auto__){
var seq__58362__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58362__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58362__$1);
var G__58438 = cljs.core.chunk_rest(seq__58362__$1);
var G__58439 = c__5568__auto__;
var G__58440 = cljs.core.count(c__5568__auto__);
var G__58441 = (0);
seq__58362 = G__58438;
chunk__58363 = G__58439;
count__58364 = G__58440;
i__58365 = G__58441;
continue;
} else {
var vec__58383 = cljs.core.first(seq__58362__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58383,(1),null);
var temp__5802__auto___58442 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___58442)){
var effect_fn_58443 = temp__5802__auto___58442;
(effect_fn_58443.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58443.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58443.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__58444 = cljs.core.next(seq__58362__$1);
var G__58445 = null;
var G__58446 = (0);
var G__58447 = (0);
seq__58362 = G__58444;
chunk__58363 = G__58445;
count__58364 = G__58446;
i__58365 = G__58447;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__58386){
var map__58387 = p__58386;
var map__58387__$1 = cljs.core.__destructure_map(map__58387);
var effect = map__58387__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58387__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__58388 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58389 = null;
var count__58390 = (0);
var i__58391 = (0);
while(true){
if((i__58391 < count__58390)){
var effect = chunk__58389.cljs$core$IIndexed$_nth$arity$2(null,i__58391);
refx.effects.dispatch_later(effect);


var G__58448 = seq__58388;
var G__58449 = chunk__58389;
var G__58450 = count__58390;
var G__58451 = (i__58391 + (1));
seq__58388 = G__58448;
chunk__58389 = G__58449;
count__58390 = G__58450;
i__58391 = G__58451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58388);
if(temp__5804__auto__){
var seq__58388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58388__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58388__$1);
var G__58452 = cljs.core.chunk_rest(seq__58388__$1);
var G__58453 = c__5568__auto__;
var G__58454 = cljs.core.count(c__5568__auto__);
var G__58455 = (0);
seq__58388 = G__58452;
chunk__58389 = G__58453;
count__58390 = G__58454;
i__58391 = G__58455;
continue;
} else {
var effect = cljs.core.first(seq__58388__$1);
refx.effects.dispatch_later(effect);


var G__58456 = cljs.core.next(seq__58388__$1);
var G__58457 = null;
var G__58458 = (0);
var G__58459 = (0);
seq__58388 = G__58456;
chunk__58389 = G__58457;
count__58390 = G__58458;
i__58391 = G__58459;
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
var seq__58400 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__58401 = null;
var count__58402 = (0);
var i__58403 = (0);
while(true){
if((i__58403 < count__58402)){
var vec__58414 = chunk__58401.cljs$core$IIndexed$_nth$arity$2(null,i__58403);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___58460 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___58460)){
var effect_fn_58461 = temp__5802__auto___58460;
(effect_fn_58461.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58461.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58461.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__58462 = seq__58400;
var G__58463 = chunk__58401;
var G__58464 = count__58402;
var G__58465 = (i__58403 + (1));
seq__58400 = G__58462;
chunk__58401 = G__58463;
count__58402 = G__58464;
i__58403 = G__58465;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58400);
if(temp__5804__auto__){
var seq__58400__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58400__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58400__$1);
var G__58466 = cljs.core.chunk_rest(seq__58400__$1);
var G__58467 = c__5568__auto__;
var G__58468 = cljs.core.count(c__5568__auto__);
var G__58469 = (0);
seq__58400 = G__58466;
chunk__58401 = G__58467;
count__58402 = G__58468;
i__58403 = G__58469;
continue;
} else {
var vec__58417 = cljs.core.first(seq__58400__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58417,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___58470 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___58470)){
var effect_fn_58471 = temp__5802__auto___58470;
(effect_fn_58471.cljs$core$IFn$_invoke$arity$1 ? effect_fn_58471.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_58471.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__58472 = cljs.core.next(seq__58400__$1);
var G__58473 = null;
var G__58474 = (0);
var G__58475 = (0);
seq__58400 = G__58472;
chunk__58401 = G__58473;
count__58402 = G__58474;
i__58403 = G__58475;
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
var seq__58420 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__58421 = null;
var count__58422 = (0);
var i__58423 = (0);
while(true){
if((i__58423 < count__58422)){
var event = chunk__58421.cljs$core$IIndexed$_nth$arity$2(null,i__58423);
refx.dispatch.dispatch(event);


var G__58477 = seq__58420;
var G__58478 = chunk__58421;
var G__58479 = count__58422;
var G__58480 = (i__58423 + (1));
seq__58420 = G__58477;
chunk__58421 = G__58478;
count__58422 = G__58479;
i__58423 = G__58480;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58420);
if(temp__5804__auto__){
var seq__58420__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58420__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58420__$1);
var G__58481 = cljs.core.chunk_rest(seq__58420__$1);
var G__58482 = c__5568__auto__;
var G__58483 = cljs.core.count(c__5568__auto__);
var G__58484 = (0);
seq__58420 = G__58481;
chunk__58421 = G__58482;
count__58422 = G__58483;
i__58423 = G__58484;
continue;
} else {
var event = cljs.core.first(seq__58420__$1);
refx.dispatch.dispatch(event);


var G__58485 = cljs.core.next(seq__58420__$1);
var G__58486 = null;
var G__58487 = (0);
var G__58488 = (0);
seq__58420 = G__58485;
chunk__58421 = G__58486;
count__58422 = G__58487;
i__58423 = G__58488;
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
var seq__58424 = cljs.core.seq(value);
var chunk__58425 = null;
var count__58426 = (0);
var i__58427 = (0);
while(true){
if((i__58427 < count__58426)){
var event_id = chunk__58425.cljs$core$IIndexed$_nth$arity$2(null,i__58427);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__58489 = seq__58424;
var G__58490 = chunk__58425;
var G__58491 = count__58426;
var G__58492 = (i__58427 + (1));
seq__58424 = G__58489;
chunk__58425 = G__58490;
count__58426 = G__58491;
i__58427 = G__58492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__58424);
if(temp__5804__auto__){
var seq__58424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58424__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__58424__$1);
var G__58493 = cljs.core.chunk_rest(seq__58424__$1);
var G__58494 = c__5568__auto__;
var G__58495 = cljs.core.count(c__5568__auto__);
var G__58496 = (0);
seq__58424 = G__58493;
chunk__58425 = G__58494;
count__58426 = G__58495;
i__58427 = G__58496;
continue;
} else {
var event_id = cljs.core.first(seq__58424__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__58497 = cljs.core.next(seq__58424__$1);
var G__58498 = null;
var G__58499 = (0);
var G__58500 = (0);
seq__58424 = G__58497;
chunk__58425 = G__58498;
count__58426 = G__58499;
i__58427 = G__58500;
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
