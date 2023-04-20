goog.provide('schema_tools.util');
/**
 * Returns vector of tuples containing path vector to the value and the value.
 */
schema_tools.util.path_vals = (function schema_tools$util$path_vals(var_args){
var G__30098 = arguments.length;
switch (G__30098) {
case 1:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2(m,cljs.core.identity);
}));

(schema_tools.util.path_vals.cljs$core$IFn$_invoke$arity$2 = (function (m,fk){
var pvals = (function schema_tools$util$pvals(l,p,m__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (l__$1,p__30150){
var vec__30151 = p__30150;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30151,(1),null);
var k__$1 = (fk.cljs$core$IFn$_invoke$arity$1 ? fk.cljs$core$IFn$_invoke$arity$1(k) : fk.call(null,k));
if(cljs.core.map_QMARK_(v)){
return schema_tools$util$pvals(l__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k__$1),v);
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k__$1),v], null),l__$1);
}
}),l,m__$1);
});
return pvals(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
}));

(schema_tools.util.path_vals.cljs$lang$maxFixedArity = 2);

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
schema_tools.util.dissoc_in = (function schema_tools$util$dissoc_in(m,p__30168){
var vec__30169 = p__30168;
var seq__30170 = cljs.core.seq(vec__30169);
var first__30171 = cljs.core.first(seq__30170);
var seq__30170__$1 = cljs.core.next(seq__30170);
var k = first__30171;
var ks = seq__30170__$1;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (schema_tools.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? schema_tools.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : schema_tools.util.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
schema_tools.util.map_keys = (function schema_tools$util$map_keys(f,m){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.empty(m)),m)),cljs.core.meta(m));
});

//# sourceMappingURL=schema_tools.util.js.map
