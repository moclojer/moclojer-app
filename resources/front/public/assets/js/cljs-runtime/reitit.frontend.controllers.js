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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__40078,match){
var map__40079 = p__40078;
var map__40079__$1 = cljs.core.__destructure_map(map__40079);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40079__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__40085(s__40086){
return (new cljs.core.LazySeq(null,(function (){
var s__40086__$1 = s__40086;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40086__$1);
if(temp__5804__auto__){
var s__40086__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40086__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40086__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40088 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40087 = (0);
while(true){
if((i__40087 < size__5522__auto__)){
var vec__40091 = cljs.core._nth(c__5521__auto__,i__40087);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40091,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40091,(1),null);
cljs.core.chunk_append(b__40088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__40115 = (i__40087 + (1));
i__40087 = G__40115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40088),reitit$frontend$controllers$get_identity_$_iter__40085(cljs.core.chunk_rest(s__40086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40088),null);
}
} else {
var vec__40095 = cljs.core.first(s__40086__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__40085(cljs.core.rest(s__40086__$2)));
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
var G__40098 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40098) : f.call(null,G__40098));
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
var seq__40103_40120 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__40104_40121 = null;
var count__40105_40122 = (0);
var i__40106_40123 = (0);
while(true){
if((i__40106_40123 < count__40105_40122)){
var controller_40127 = chunk__40104_40121.cljs$core$IIndexed$_nth$arity$2(null,i__40106_40123);
reitit.frontend.controllers.apply_controller(controller_40127,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__40128 = seq__40103_40120;
var G__40129 = chunk__40104_40121;
var G__40130 = count__40105_40122;
var G__40131 = (i__40106_40123 + (1));
seq__40103_40120 = G__40128;
chunk__40104_40121 = G__40129;
count__40105_40122 = G__40130;
i__40106_40123 = G__40131;
continue;
} else {
var temp__5804__auto___40132 = cljs.core.seq(seq__40103_40120);
if(temp__5804__auto___40132){
var seq__40103_40133__$1 = temp__5804__auto___40132;
if(cljs.core.chunked_seq_QMARK_(seq__40103_40133__$1)){
var c__5568__auto___40135 = cljs.core.chunk_first(seq__40103_40133__$1);
var G__40136 = cljs.core.chunk_rest(seq__40103_40133__$1);
var G__40137 = c__5568__auto___40135;
var G__40138 = cljs.core.count(c__5568__auto___40135);
var G__40139 = (0);
seq__40103_40120 = G__40136;
chunk__40104_40121 = G__40137;
count__40105_40122 = G__40138;
i__40106_40123 = G__40139;
continue;
} else {
var controller_40140 = cljs.core.first(seq__40103_40133__$1);
reitit.frontend.controllers.apply_controller(controller_40140,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__40141 = cljs.core.next(seq__40103_40133__$1);
var G__40142 = null;
var G__40143 = (0);
var G__40144 = (0);
seq__40103_40120 = G__40141;
chunk__40104_40121 = G__40142;
count__40105_40122 = G__40143;
i__40106_40123 = G__40144;
continue;
}
} else {
}
}
break;
}

var seq__40110_40145 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__40111_40146 = null;
var count__40112_40147 = (0);
var i__40113_40148 = (0);
while(true){
if((i__40113_40148 < count__40112_40147)){
var controller_40149 = chunk__40111_40146.cljs$core$IIndexed$_nth$arity$2(null,i__40113_40148);
reitit.frontend.controllers.apply_controller(controller_40149,new cljs.core.Keyword(null,"start","start",-355208981));


var G__40150 = seq__40110_40145;
var G__40151 = chunk__40111_40146;
var G__40152 = count__40112_40147;
var G__40153 = (i__40113_40148 + (1));
seq__40110_40145 = G__40150;
chunk__40111_40146 = G__40151;
count__40112_40147 = G__40152;
i__40113_40148 = G__40153;
continue;
} else {
var temp__5804__auto___40154 = cljs.core.seq(seq__40110_40145);
if(temp__5804__auto___40154){
var seq__40110_40155__$1 = temp__5804__auto___40154;
if(cljs.core.chunked_seq_QMARK_(seq__40110_40155__$1)){
var c__5568__auto___40156 = cljs.core.chunk_first(seq__40110_40155__$1);
var G__40158 = cljs.core.chunk_rest(seq__40110_40155__$1);
var G__40159 = c__5568__auto___40156;
var G__40160 = cljs.core.count(c__5568__auto___40156);
var G__40161 = (0);
seq__40110_40145 = G__40158;
chunk__40111_40146 = G__40159;
count__40112_40147 = G__40160;
i__40113_40148 = G__40161;
continue;
} else {
var controller_40162 = cljs.core.first(seq__40110_40155__$1);
reitit.frontend.controllers.apply_controller(controller_40162,new cljs.core.Keyword(null,"start","start",-355208981));


var G__40163 = cljs.core.next(seq__40110_40155__$1);
var G__40164 = null;
var G__40165 = (0);
var G__40166 = (0);
seq__40110_40145 = G__40163;
chunk__40111_40146 = G__40164;
count__40112_40147 = G__40165;
i__40113_40148 = G__40166;
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
