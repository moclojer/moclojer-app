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
var temp__5804__auto___49642 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___49642)){
var new_db_49643 = temp__5804__auto___49642;
refx.effects.db_effect(new_db_49643);
} else {
}

var seq__49571 = cljs.core.seq(effects_without_db);
var chunk__49572 = null;
var count__49573 = (0);
var i__49574 = (0);
while(true){
if((i__49574 < count__49573)){
var vec__49586 = chunk__49572.cljs$core$IIndexed$_nth$arity$2(null,i__49574);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49586,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49586,(1),null);
var temp__5802__auto___49644 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___49644)){
var effect_fn_49645 = temp__5802__auto___49644;
(effect_fn_49645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49645.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__49646 = seq__49571;
var G__49647 = chunk__49572;
var G__49648 = count__49573;
var G__49649 = (i__49574 + (1));
seq__49571 = G__49646;
chunk__49572 = G__49647;
count__49573 = G__49648;
i__49574 = G__49649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49571);
if(temp__5804__auto__){
var seq__49571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49571__$1);
var G__49650 = cljs.core.chunk_rest(seq__49571__$1);
var G__49651 = c__5568__auto__;
var G__49652 = cljs.core.count(c__5568__auto__);
var G__49653 = (0);
seq__49571 = G__49650;
chunk__49572 = G__49651;
count__49573 = G__49652;
i__49574 = G__49653;
continue;
} else {
var vec__49591 = cljs.core.first(seq__49571__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49591,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49591,(1),null);
var temp__5802__auto___49654 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___49654)){
var effect_fn_49655 = temp__5802__auto___49654;
(effect_fn_49655.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49655.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49655.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__49656 = cljs.core.next(seq__49571__$1);
var G__49657 = null;
var G__49658 = (0);
var G__49659 = (0);
seq__49571 = G__49656;
chunk__49572 = G__49657;
count__49573 = G__49658;
i__49574 = G__49659;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__49596){
var map__49597 = p__49596;
var map__49597__$1 = cljs.core.__destructure_map(map__49597);
var effect = map__49597__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__49601 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49602 = null;
var count__49603 = (0);
var i__49604 = (0);
while(true){
if((i__49604 < count__49603)){
var effect = chunk__49602.cljs$core$IIndexed$_nth$arity$2(null,i__49604);
refx.effects.dispatch_later(effect);


var G__49660 = seq__49601;
var G__49661 = chunk__49602;
var G__49662 = count__49603;
var G__49663 = (i__49604 + (1));
seq__49601 = G__49660;
chunk__49602 = G__49661;
count__49603 = G__49662;
i__49604 = G__49663;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49601);
if(temp__5804__auto__){
var seq__49601__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49601__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49601__$1);
var G__49664 = cljs.core.chunk_rest(seq__49601__$1);
var G__49665 = c__5568__auto__;
var G__49666 = cljs.core.count(c__5568__auto__);
var G__49667 = (0);
seq__49601 = G__49664;
chunk__49602 = G__49665;
count__49603 = G__49666;
i__49604 = G__49667;
continue;
} else {
var effect = cljs.core.first(seq__49601__$1);
refx.effects.dispatch_later(effect);


var G__49668 = cljs.core.next(seq__49601__$1);
var G__49669 = null;
var G__49670 = (0);
var G__49671 = (0);
seq__49601 = G__49668;
chunk__49602 = G__49669;
count__49603 = G__49670;
i__49604 = G__49671;
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
var seq__49606 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__49607 = null;
var count__49608 = (0);
var i__49609 = (0);
while(true){
if((i__49609 < count__49608)){
var vec__49628 = chunk__49607.cljs$core$IIndexed$_nth$arity$2(null,i__49609);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49628,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49628,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___49672 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___49672)){
var effect_fn_49673 = temp__5802__auto___49672;
(effect_fn_49673.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49673.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49673.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__49674 = seq__49606;
var G__49675 = chunk__49607;
var G__49676 = count__49608;
var G__49677 = (i__49609 + (1));
seq__49606 = G__49674;
chunk__49607 = G__49675;
count__49608 = G__49676;
i__49609 = G__49677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49606);
if(temp__5804__auto__){
var seq__49606__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49606__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49606__$1);
var G__49678 = cljs.core.chunk_rest(seq__49606__$1);
var G__49679 = c__5568__auto__;
var G__49680 = cljs.core.count(c__5568__auto__);
var G__49681 = (0);
seq__49606 = G__49678;
chunk__49607 = G__49679;
count__49608 = G__49680;
i__49609 = G__49681;
continue;
} else {
var vec__49631 = cljs.core.first(seq__49606__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___49682 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___49682)){
var effect_fn_49683 = temp__5802__auto___49682;
(effect_fn_49683.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49683.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49683.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__49684 = cljs.core.next(seq__49606__$1);
var G__49685 = null;
var G__49686 = (0);
var G__49687 = (0);
seq__49606 = G__49684;
chunk__49607 = G__49685;
count__49608 = G__49686;
i__49609 = G__49687;
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
var seq__49634 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49635 = null;
var count__49636 = (0);
var i__49637 = (0);
while(true){
if((i__49637 < count__49636)){
var event = chunk__49635.cljs$core$IIndexed$_nth$arity$2(null,i__49637);
refx.dispatch.dispatch(event);


var G__49688 = seq__49634;
var G__49689 = chunk__49635;
var G__49690 = count__49636;
var G__49691 = (i__49637 + (1));
seq__49634 = G__49688;
chunk__49635 = G__49689;
count__49636 = G__49690;
i__49637 = G__49691;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49634);
if(temp__5804__auto__){
var seq__49634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49634__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49634__$1);
var G__49692 = cljs.core.chunk_rest(seq__49634__$1);
var G__49693 = c__5568__auto__;
var G__49694 = cljs.core.count(c__5568__auto__);
var G__49695 = (0);
seq__49634 = G__49692;
chunk__49635 = G__49693;
count__49636 = G__49694;
i__49637 = G__49695;
continue;
} else {
var event = cljs.core.first(seq__49634__$1);
refx.dispatch.dispatch(event);


var G__49696 = cljs.core.next(seq__49634__$1);
var G__49697 = null;
var G__49698 = (0);
var G__49699 = (0);
seq__49634 = G__49696;
chunk__49635 = G__49697;
count__49636 = G__49698;
i__49637 = G__49699;
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
var seq__49638 = cljs.core.seq(value);
var chunk__49639 = null;
var count__49640 = (0);
var i__49641 = (0);
while(true){
if((i__49641 < count__49640)){
var event_id = chunk__49639.cljs$core$IIndexed$_nth$arity$2(null,i__49641);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__49701 = seq__49638;
var G__49702 = chunk__49639;
var G__49703 = count__49640;
var G__49704 = (i__49641 + (1));
seq__49638 = G__49701;
chunk__49639 = G__49702;
count__49640 = G__49703;
i__49641 = G__49704;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49638);
if(temp__5804__auto__){
var seq__49638__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49638__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49638__$1);
var G__49706 = cljs.core.chunk_rest(seq__49638__$1);
var G__49707 = c__5568__auto__;
var G__49708 = cljs.core.count(c__5568__auto__);
var G__49709 = (0);
seq__49638 = G__49706;
chunk__49639 = G__49707;
count__49640 = G__49708;
i__49641 = G__49709;
continue;
} else {
var event_id = cljs.core.first(seq__49638__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__49710 = cljs.core.next(seq__49638__$1);
var G__49711 = null;
var G__49712 = (0);
var G__49713 = (0);
seq__49638 = G__49710;
chunk__49639 = G__49711;
count__49640 = G__49712;
i__49641 = G__49713;
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
