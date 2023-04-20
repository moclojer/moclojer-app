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
var temp__5804__auto___52899 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___52899)){
var new_db_52900 = temp__5804__auto___52899;
refx.effects.db_effect(new_db_52900);
} else {
}

var seq__52824 = cljs.core.seq(effects_without_db);
var chunk__52825 = null;
var count__52826 = (0);
var i__52827 = (0);
while(true){
if((i__52827 < count__52826)){
var vec__52834 = chunk__52825.cljs$core$IIndexed$_nth$arity$2(null,i__52827);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52834,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52834,(1),null);
var temp__5802__auto___52901 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___52901)){
var effect_fn_52902 = temp__5802__auto___52901;
(effect_fn_52902.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52902.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52902.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__52910 = seq__52824;
var G__52911 = chunk__52825;
var G__52912 = count__52826;
var G__52913 = (i__52827 + (1));
seq__52824 = G__52910;
chunk__52825 = G__52911;
count__52826 = G__52912;
i__52827 = G__52913;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52824);
if(temp__5804__auto__){
var seq__52824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52824__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52824__$1);
var G__52915 = cljs.core.chunk_rest(seq__52824__$1);
var G__52916 = c__5568__auto__;
var G__52917 = cljs.core.count(c__5568__auto__);
var G__52918 = (0);
seq__52824 = G__52915;
chunk__52825 = G__52916;
count__52826 = G__52917;
i__52827 = G__52918;
continue;
} else {
var vec__52837 = cljs.core.first(seq__52824__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(1),null);
var temp__5802__auto___52919 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___52919)){
var effect_fn_52920 = temp__5802__auto___52919;
(effect_fn_52920.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52920.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52920.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__52921 = cljs.core.next(seq__52824__$1);
var G__52922 = null;
var G__52923 = (0);
var G__52924 = (0);
seq__52824 = G__52921;
chunk__52825 = G__52922;
count__52826 = G__52923;
i__52827 = G__52924;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__52842){
var map__52843 = p__52842;
var map__52843__$1 = cljs.core.__destructure_map(map__52843);
var effect = map__52843__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52843__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52843__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__52844 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52845 = null;
var count__52846 = (0);
var i__52847 = (0);
while(true){
if((i__52847 < count__52846)){
var effect = chunk__52845.cljs$core$IIndexed$_nth$arity$2(null,i__52847);
refx.effects.dispatch_later(effect);


var G__52929 = seq__52844;
var G__52930 = chunk__52845;
var G__52931 = count__52846;
var G__52932 = (i__52847 + (1));
seq__52844 = G__52929;
chunk__52845 = G__52930;
count__52846 = G__52931;
i__52847 = G__52932;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52844);
if(temp__5804__auto__){
var seq__52844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52844__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52844__$1);
var G__52933 = cljs.core.chunk_rest(seq__52844__$1);
var G__52934 = c__5568__auto__;
var G__52935 = cljs.core.count(c__5568__auto__);
var G__52936 = (0);
seq__52844 = G__52933;
chunk__52845 = G__52934;
count__52846 = G__52935;
i__52847 = G__52936;
continue;
} else {
var effect = cljs.core.first(seq__52844__$1);
refx.effects.dispatch_later(effect);


var G__52937 = cljs.core.next(seq__52844__$1);
var G__52938 = null;
var G__52939 = (0);
var G__52940 = (0);
seq__52844 = G__52937;
chunk__52845 = G__52938;
count__52846 = G__52939;
i__52847 = G__52940;
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
var seq__52851 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52852 = null;
var count__52853 = (0);
var i__52854 = (0);
while(true){
if((i__52854 < count__52853)){
var vec__52866 = chunk__52852.cljs$core$IIndexed$_nth$arity$2(null,i__52854);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52866,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52866,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___52941 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___52941)){
var effect_fn_52942 = temp__5802__auto___52941;
(effect_fn_52942.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52942.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52942.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__52943 = seq__52851;
var G__52944 = chunk__52852;
var G__52945 = count__52853;
var G__52946 = (i__52854 + (1));
seq__52851 = G__52943;
chunk__52852 = G__52944;
count__52853 = G__52945;
i__52854 = G__52946;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52851);
if(temp__5804__auto__){
var seq__52851__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52851__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52851__$1);
var G__52947 = cljs.core.chunk_rest(seq__52851__$1);
var G__52948 = c__5568__auto__;
var G__52949 = cljs.core.count(c__5568__auto__);
var G__52950 = (0);
seq__52851 = G__52947;
chunk__52852 = G__52948;
count__52853 = G__52949;
i__52854 = G__52950;
continue;
} else {
var vec__52869 = cljs.core.first(seq__52851__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52869,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52869,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___52951 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___52951)){
var effect_fn_52952 = temp__5802__auto___52951;
(effect_fn_52952.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52952.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52952.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__52953 = cljs.core.next(seq__52851__$1);
var G__52954 = null;
var G__52955 = (0);
var G__52956 = (0);
seq__52851 = G__52953;
chunk__52852 = G__52954;
count__52853 = G__52955;
i__52854 = G__52956;
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
var seq__52878 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52879 = null;
var count__52880 = (0);
var i__52881 = (0);
while(true){
if((i__52881 < count__52880)){
var event = chunk__52879.cljs$core$IIndexed$_nth$arity$2(null,i__52881);
refx.dispatch.dispatch(event);


var G__52957 = seq__52878;
var G__52958 = chunk__52879;
var G__52959 = count__52880;
var G__52960 = (i__52881 + (1));
seq__52878 = G__52957;
chunk__52879 = G__52958;
count__52880 = G__52959;
i__52881 = G__52960;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52878);
if(temp__5804__auto__){
var seq__52878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52878__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52878__$1);
var G__52962 = cljs.core.chunk_rest(seq__52878__$1);
var G__52963 = c__5568__auto__;
var G__52964 = cljs.core.count(c__5568__auto__);
var G__52965 = (0);
seq__52878 = G__52962;
chunk__52879 = G__52963;
count__52880 = G__52964;
i__52881 = G__52965;
continue;
} else {
var event = cljs.core.first(seq__52878__$1);
refx.dispatch.dispatch(event);


var G__52970 = cljs.core.next(seq__52878__$1);
var G__52971 = null;
var G__52972 = (0);
var G__52973 = (0);
seq__52878 = G__52970;
chunk__52879 = G__52971;
count__52880 = G__52972;
i__52881 = G__52973;
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
var seq__52882 = cljs.core.seq(value);
var chunk__52883 = null;
var count__52884 = (0);
var i__52885 = (0);
while(true){
if((i__52885 < count__52884)){
var event_id = chunk__52883.cljs$core$IIndexed$_nth$arity$2(null,i__52885);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__52982 = seq__52882;
var G__52983 = chunk__52883;
var G__52984 = count__52884;
var G__52985 = (i__52885 + (1));
seq__52882 = G__52982;
chunk__52883 = G__52983;
count__52884 = G__52984;
i__52885 = G__52985;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52882);
if(temp__5804__auto__){
var seq__52882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52882__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52882__$1);
var G__52987 = cljs.core.chunk_rest(seq__52882__$1);
var G__52988 = c__5568__auto__;
var G__52989 = cljs.core.count(c__5568__auto__);
var G__52990 = (0);
seq__52882 = G__52987;
chunk__52883 = G__52988;
count__52884 = G__52989;
i__52885 = G__52990;
continue;
} else {
var event_id = cljs.core.first(seq__52882__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__52991 = cljs.core.next(seq__52882__$1);
var G__52992 = null;
var G__52993 = (0);
var G__52994 = (0);
seq__52882 = G__52991;
chunk__52883 = G__52992;
count__52884 = G__52993;
i__52885 = G__52994;
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
