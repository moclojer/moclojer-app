goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__32495,match){
var map__32496 = p__32495;
var map__32496__$1 = cljs.core.__destructure_map(map__32496);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32496__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32496__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32496__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__5043__auto__ = identity;
if(cljs.core.truth_(and__5043__auto__)){
return parameters;
} else {
return and__5043__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__32498(s__32499){
return (new cljs.core.LazySeq(null,(function (){
var s__32499__$1 = s__32499;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32499__$1);
if(temp__5804__auto__){
var s__32499__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32499__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32499__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32501 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32500 = (0);
while(true){
if((i__32500 < size__5522__auto__)){
var vec__32503 = cljs.core._nth(c__5521__auto__,i__32500);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(1),null);
cljs.core.chunk_append(b__32501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__32555 = (i__32500 + (1));
i__32500 = G__32555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32501),reitit$frontend$controllers$get_identity_$_iter__32498(cljs.core.chunk_rest(s__32499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32501),null);
}
} else {
var vec__32517 = cljs.core.first(s__32499__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32517,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32517,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__32498(cljs.core.rest(s__32499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
var G__32531 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32531) : f.call(null,G__32531));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__32543_32556 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__32544_32557 = null;
var count__32545_32558 = (0);
var i__32546_32559 = (0);
while(true){
if((i__32546_32559 < count__32545_32558)){
var controller_32560 = chunk__32544_32557.cljs$core$IIndexed$_nth$arity$2(null,i__32546_32559);
reitit.frontend.controllers.apply_controller(controller_32560,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__32561 = seq__32543_32556;
var G__32562 = chunk__32544_32557;
var G__32563 = count__32545_32558;
var G__32564 = (i__32546_32559 + (1));
seq__32543_32556 = G__32561;
chunk__32544_32557 = G__32562;
count__32545_32558 = G__32563;
i__32546_32559 = G__32564;
continue;
} else {
var temp__5804__auto___32565 = cljs.core.seq(seq__32543_32556);
if(temp__5804__auto___32565){
var seq__32543_32566__$1 = temp__5804__auto___32565;
if(cljs.core.chunked_seq_QMARK_(seq__32543_32566__$1)){
var c__5568__auto___32567 = cljs.core.chunk_first(seq__32543_32566__$1);
var G__32568 = cljs.core.chunk_rest(seq__32543_32566__$1);
var G__32569 = c__5568__auto___32567;
var G__32570 = cljs.core.count(c__5568__auto___32567);
var G__32571 = (0);
seq__32543_32556 = G__32568;
chunk__32544_32557 = G__32569;
count__32545_32558 = G__32570;
i__32546_32559 = G__32571;
continue;
} else {
var controller_32572 = cljs.core.first(seq__32543_32566__$1);
reitit.frontend.controllers.apply_controller(controller_32572,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__32573 = cljs.core.next(seq__32543_32566__$1);
var G__32574 = null;
var G__32575 = (0);
var G__32576 = (0);
seq__32543_32556 = G__32573;
chunk__32544_32557 = G__32574;
count__32545_32558 = G__32575;
i__32546_32559 = G__32576;
continue;
}
} else {
}
}
break;
}

var seq__32548_32577 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__32549_32578 = null;
var count__32550_32579 = (0);
var i__32551_32580 = (0);
while(true){
if((i__32551_32580 < count__32550_32579)){
var controller_32582 = chunk__32549_32578.cljs$core$IIndexed$_nth$arity$2(null,i__32551_32580);
reitit.frontend.controllers.apply_controller(controller_32582,new cljs.core.Keyword(null,"start","start",-355208981));


var G__32583 = seq__32548_32577;
var G__32584 = chunk__32549_32578;
var G__32585 = count__32550_32579;
var G__32586 = (i__32551_32580 + (1));
seq__32548_32577 = G__32583;
chunk__32549_32578 = G__32584;
count__32550_32579 = G__32585;
i__32551_32580 = G__32586;
continue;
} else {
var temp__5804__auto___32587 = cljs.core.seq(seq__32548_32577);
if(temp__5804__auto___32587){
var seq__32548_32588__$1 = temp__5804__auto___32587;
if(cljs.core.chunked_seq_QMARK_(seq__32548_32588__$1)){
var c__5568__auto___32589 = cljs.core.chunk_first(seq__32548_32588__$1);
var G__32590 = cljs.core.chunk_rest(seq__32548_32588__$1);
var G__32591 = c__5568__auto___32589;
var G__32592 = cljs.core.count(c__5568__auto___32589);
var G__32593 = (0);
seq__32548_32577 = G__32590;
chunk__32549_32578 = G__32591;
count__32550_32579 = G__32592;
i__32551_32580 = G__32593;
continue;
} else {
var controller_32594 = cljs.core.first(seq__32548_32588__$1);
reitit.frontend.controllers.apply_controller(controller_32594,new cljs.core.Keyword(null,"start","start",-355208981));


var G__32595 = cljs.core.next(seq__32548_32588__$1);
var G__32596 = null;
var G__32597 = (0);
var G__32598 = (0);
seq__32548_32577 = G__32595;
chunk__32549_32578 = G__32596;
count__32550_32579 = G__32597;
i__32551_32580 = G__32598;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
