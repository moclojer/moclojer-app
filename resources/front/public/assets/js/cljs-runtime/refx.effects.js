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
var temp__5804__auto___22387 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___22387)){
var new_db_22388 = temp__5804__auto___22387;
refx.effects.db_effect(new_db_22388);
} else {
}

var seq__22284 = cljs.core.seq(effects_without_db);
var chunk__22285 = null;
var count__22286 = (0);
var i__22287 = (0);
while(true){
if((i__22287 < count__22286)){
var vec__22299 = chunk__22285.cljs$core$IIndexed$_nth$arity$2(null,i__22287);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(1),null);
var temp__5802__auto___22389 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___22389)){
var effect_fn_22390 = temp__5802__auto___22389;
(effect_fn_22390.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22390.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22390.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__22392 = seq__22284;
var G__22393 = chunk__22285;
var G__22394 = count__22286;
var G__22395 = (i__22287 + (1));
seq__22284 = G__22392;
chunk__22285 = G__22393;
count__22286 = G__22394;
i__22287 = G__22395;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22284);
if(temp__5804__auto__){
var seq__22284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22284__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22284__$1);
var G__22396 = cljs.core.chunk_rest(seq__22284__$1);
var G__22397 = c__5568__auto__;
var G__22398 = cljs.core.count(c__5568__auto__);
var G__22399 = (0);
seq__22284 = G__22396;
chunk__22285 = G__22397;
count__22286 = G__22398;
i__22287 = G__22399;
continue;
} else {
var vec__22304 = cljs.core.first(seq__22284__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22304,(1),null);
var temp__5802__auto___22401 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___22401)){
var effect_fn_22402 = temp__5802__auto___22401;
(effect_fn_22402.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22402.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22402.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__22403 = cljs.core.next(seq__22284__$1);
var G__22404 = null;
var G__22405 = (0);
var G__22406 = (0);
seq__22284 = G__22403;
chunk__22285 = G__22404;
count__22286 = G__22405;
i__22287 = G__22406;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__22311){
var map__22312 = p__22311;
var map__22312__$1 = cljs.core.__destructure_map(map__22312);
var effect = map__22312__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22312__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22312__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__22313 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22314 = null;
var count__22315 = (0);
var i__22316 = (0);
while(true){
if((i__22316 < count__22315)){
var effect = chunk__22314.cljs$core$IIndexed$_nth$arity$2(null,i__22316);
refx.effects.dispatch_later(effect);


var G__22407 = seq__22313;
var G__22408 = chunk__22314;
var G__22409 = count__22315;
var G__22410 = (i__22316 + (1));
seq__22313 = G__22407;
chunk__22314 = G__22408;
count__22315 = G__22409;
i__22316 = G__22410;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22313);
if(temp__5804__auto__){
var seq__22313__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22313__$1);
var G__22411 = cljs.core.chunk_rest(seq__22313__$1);
var G__22412 = c__5568__auto__;
var G__22413 = cljs.core.count(c__5568__auto__);
var G__22414 = (0);
seq__22313 = G__22411;
chunk__22314 = G__22412;
count__22315 = G__22413;
i__22316 = G__22414;
continue;
} else {
var effect = cljs.core.first(seq__22313__$1);
refx.effects.dispatch_later(effect);


var G__22415 = cljs.core.next(seq__22313__$1);
var G__22416 = null;
var G__22417 = (0);
var G__22418 = (0);
seq__22313 = G__22415;
chunk__22314 = G__22416;
count__22315 = G__22417;
i__22316 = G__22418;
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
var seq__22333 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__22334 = null;
var count__22335 = (0);
var i__22336 = (0);
while(true){
if((i__22336 < count__22335)){
var vec__22343 = chunk__22334.cljs$core$IIndexed$_nth$arity$2(null,i__22336);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22343,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22421 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___22421)){
var effect_fn_22423 = temp__5802__auto___22421;
(effect_fn_22423.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22423.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22423.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__22424 = seq__22333;
var G__22425 = chunk__22334;
var G__22426 = count__22335;
var G__22427 = (i__22336 + (1));
seq__22333 = G__22424;
chunk__22334 = G__22425;
count__22335 = G__22426;
i__22336 = G__22427;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22333);
if(temp__5804__auto__){
var seq__22333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22333__$1);
var G__22432 = cljs.core.chunk_rest(seq__22333__$1);
var G__22433 = c__5568__auto__;
var G__22434 = cljs.core.count(c__5568__auto__);
var G__22435 = (0);
seq__22333 = G__22432;
chunk__22334 = G__22433;
count__22335 = G__22434;
i__22336 = G__22435;
continue;
} else {
var vec__22347 = cljs.core.first(seq__22333__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___22437 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___22437)){
var effect_fn_22439 = temp__5802__auto___22437;
(effect_fn_22439.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22439.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22439.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__22441 = cljs.core.next(seq__22333__$1);
var G__22442 = null;
var G__22443 = (0);
var G__22444 = (0);
seq__22333 = G__22441;
chunk__22334 = G__22442;
count__22335 = G__22443;
i__22336 = G__22444;
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
var seq__22355 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22356 = null;
var count__22357 = (0);
var i__22358 = (0);
while(true){
if((i__22358 < count__22357)){
var event = chunk__22356.cljs$core$IIndexed$_nth$arity$2(null,i__22358);
refx.dispatch.dispatch(event);


var G__22446 = seq__22355;
var G__22447 = chunk__22356;
var G__22448 = count__22357;
var G__22449 = (i__22358 + (1));
seq__22355 = G__22446;
chunk__22356 = G__22447;
count__22357 = G__22448;
i__22358 = G__22449;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22355);
if(temp__5804__auto__){
var seq__22355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22355__$1);
var G__22451 = cljs.core.chunk_rest(seq__22355__$1);
var G__22452 = c__5568__auto__;
var G__22453 = cljs.core.count(c__5568__auto__);
var G__22454 = (0);
seq__22355 = G__22451;
chunk__22356 = G__22452;
count__22357 = G__22453;
i__22358 = G__22454;
continue;
} else {
var event = cljs.core.first(seq__22355__$1);
refx.dispatch.dispatch(event);


var G__22457 = cljs.core.next(seq__22355__$1);
var G__22458 = null;
var G__22459 = (0);
var G__22460 = (0);
seq__22355 = G__22457;
chunk__22356 = G__22458;
count__22357 = G__22459;
i__22358 = G__22460;
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
var seq__22374 = cljs.core.seq(value);
var chunk__22375 = null;
var count__22376 = (0);
var i__22377 = (0);
while(true){
if((i__22377 < count__22376)){
var event_id = chunk__22375.cljs$core$IIndexed$_nth$arity$2(null,i__22377);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__22462 = seq__22374;
var G__22463 = chunk__22375;
var G__22464 = count__22376;
var G__22465 = (i__22377 + (1));
seq__22374 = G__22462;
chunk__22375 = G__22463;
count__22376 = G__22464;
i__22377 = G__22465;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22374);
if(temp__5804__auto__){
var seq__22374__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22374__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22374__$1);
var G__22468 = cljs.core.chunk_rest(seq__22374__$1);
var G__22469 = c__5568__auto__;
var G__22470 = cljs.core.count(c__5568__auto__);
var G__22471 = (0);
seq__22374 = G__22468;
chunk__22375 = G__22469;
count__22376 = G__22470;
i__22377 = G__22471;
continue;
} else {
var event_id = cljs.core.first(seq__22374__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__22472 = cljs.core.next(seq__22374__$1);
var G__22473 = null;
var G__22474 = (0);
var G__22475 = (0);
seq__22374 = G__22472;
chunk__22375 = G__22473;
count__22376 = G__22474;
i__22377 = G__22475;
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
