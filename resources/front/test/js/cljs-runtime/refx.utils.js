goog.provide('refx.utils');
refx.utils.first_in_vector = (function refx$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
refx.utils.apply_kw = (function refx$utils$apply_kw(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57714 = arguments.length;
var i__5770__auto___57715 = (0);
while(true){
if((i__5770__auto___57715 < len__5769__auto___57714)){
args__5775__auto__.push((arguments[i__5770__auto___57715]));

var G__57717 = (i__5770__auto___57715 + (1));
i__5770__auto___57715 = G__57717;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return refx.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(refx.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(refx.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(refx.utils.apply_kw.cljs$lang$applyTo = (function (seq57704){
var G__57705 = cljs.core.first(seq57704);
var seq57704__$1 = cljs.core.next(seq57704);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57705,seq57704__$1);
}));


//# sourceMappingURL=refx.utils.js.map
