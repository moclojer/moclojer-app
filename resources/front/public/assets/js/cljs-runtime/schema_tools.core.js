goog.provide('schema_tools.core');
schema_tools.core.explicit_key = (function schema_tools$core$explicit_key(k){
if(schema.core.specific_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return k;
}
});
schema_tools.core.explicit_key_set = (function schema_tools$core$explicit_key_set(ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,schema_tools.core.explicit_key(k));
}),cljs.core.PersistentHashSet.EMPTY,ks);
});
schema_tools.core.single_sequence_element_QMARK_ = (function schema_tools$core$single_sequence_element_QMARK_(x){
return (x instanceof schema.core.One);
});
schema_tools.core.index_in_schema = (function schema_tools$core$index_in_schema(m,k){
var last_idx = (cljs.core.count(m) - (1));
if((k <= last_idx)){
return k;
} else {
if((!(schema_tools.core.single_sequence_element_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,last_idx))))){
return last_idx;
} else {
return null;

}
}
});
schema_tools.core.key_in_schema = (function schema_tools$core$key_in_schema(m,k){
if(((cljs.core.sequential_QMARK_(m)) && (typeof k === 'number'))){
return schema_tools.core.index_in_schema(m,k);
} else {
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
if(cljs.core.contains_QMARK_(m,schema.core.required_key(k))){
return schema.core.required_key(k);
} else {
if(((schema.core.specific_key_QMARK_(k)) && (cljs.core.contains_QMARK_(m,schema.core.explicit_schema_key(k))))){
return schema.core.explicit_schema_key(k);
} else {
return k;

}
}
}
}
}
});
schema_tools.core.unwrap_sequence_schemas = (function schema_tools$core$unwrap_sequence_schemas(m){
if(schema_tools.core.single_sequence_element_QMARK_(m)){
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(m);
} else {
return m;

}
});
schema_tools.core.get_in_schema = (function schema_tools$core$get_in_schema(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40282 = arguments.length;
var i__5770__auto___40283 = (0);
while(true){
if((i__5770__auto___40283 < len__5769__auto___40282)){
args__5775__auto__.push((arguments[i__5770__auto___40283]));

var G__40284 = (i__5770__auto___40283 + (1));
i__5770__auto___40283 = G__40284;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,p__40181){
var vec__40182 = p__40181;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182,(0),null);
return schema_tools.core.unwrap_sequence_schemas(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,schema_tools.core.key_in_schema(m,k),default$));
}));

(schema_tools.core.get_in_schema.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(schema_tools.core.get_in_schema.cljs$lang$applyTo = (function (seq40178){
var G__40179 = cljs.core.first(seq40178);
var seq40178__$1 = cljs.core.next(seq40178);
var G__40180 = cljs.core.first(seq40178__$1);
var seq40178__$2 = cljs.core.next(seq40178__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40179,G__40180,seq40178__$2);
}));

schema_tools.core.maybe_anonymous = (function schema_tools$core$maybe_anonymous(original,current){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(original,current)){
return original;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(current,(function (meta){
var new_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(meta,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760)], 0));
if(cljs.core.empty_QMARK_(new_meta)){
return null;
} else {
return new_meta;
}
}));
}
});
schema_tools.core.transform_keys = (function schema_tools$core$transform_keys(schema__$1,f,ks,optional_keys_schema_QMARK_){
if(((cljs.core.not(ks)) || (cljs.core.vector_QMARK_(ks)))){
} else {
throw (new Error(["Assert failed: ","input should be nil or a vector of keys.","\n","(or (not ks) (vector? ks))"].join('')));
}

return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return schema_tools.util.map_keys((function (k){
if(cljs.core.truth_((function (){var and__5043__auto__ = ks;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not((function (){var G__40185 = schema_tools.core.explicit_key(k);
return (ks_QMARK_.cljs$core$IFn$_invoke$arity$1 ? ks_QMARK_.cljs$core$IFn$_invoke$arity$1(G__40185) : ks_QMARK_.call(null,G__40185));
})());
} else {
return and__5043__auto__;
}
})())){
return k;
} else {
if(schema.core.specific_key_QMARK_(k)){
var G__40186 = schema.core.explicit_schema_key(k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40186) : f.call(null,G__40186));
} else {
if(cljs.core.truth_(optional_keys_schema_QMARK_)){
return k;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));

}
}
}
}),schema__$1);
})());
});
schema_tools.core.AnyKeys = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Any,schema.core.Any]);
schema_tools.core.any_keys = (function schema_tools$core$any_keys(){
return schema_tools.core.AnyKeys;
});
schema_tools.core.AnyKeywordKeys = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]);
schema_tools.core.any_keyword_keys = (function schema_tools$core$any_keyword_keys(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40285 = arguments.length;
var i__5770__auto___40286 = (0);
while(true){
if((i__5770__auto___40286 < len__5769__auto___40285)){
args__5775__auto__.push((arguments[i__5770__auto___40286]));

var G__40287 = (i__5770__auto___40286 + (1));
i__5770__auto___40286 = G__40287;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema_tools.core.any_keyword_keys.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,schema_tools.core.AnyKeywordKeys,schemas);
}));

(schema_tools.core.any_keyword_keys.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema_tools.core.any_keyword_keys.cljs$lang$applyTo = (function (seq40188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40188));
}));

/**
 * Assoc[iate]s key & vals into Schema.
 */
schema_tools.core.assoc = (function schema_tools$core$assoc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40288 = arguments.length;
var i__5770__auto___40289 = (0);
while(true){
if((i__5770__auto___40289 < len__5769__auto___40288)){
args__5775__auto__.push((arguments[i__5770__auto___40289]));

var G__40290 = (i__5770__auto___40289 + (1));
i__5770__auto___40289 = G__40290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,kvs){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,p__40191){
var vec__40192 = p__40191;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40192,(1),null);
var rk = schema_tools.core.key_in_schema(schema__$2,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,rk),k,v);
}),schema__$1,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),null,kvs)));
}));

(schema_tools.core.assoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_tools.core.assoc.cljs$lang$applyTo = (function (seq40189){
var G__40190 = cljs.core.first(seq40189);
var seq40189__$1 = cljs.core.next(seq40189);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40190,seq40189__$1);
}));

/**
 * Dissoc[iate]s keys from Schema.
 */
schema_tools.core.dissoc = (function schema_tools$core$dissoc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40291 = arguments.length;
var i__5770__auto___40292 = (0);
while(true){
if((i__5770__auto___40292 < len__5769__auto___40291)){
args__5775__auto__.push((arguments[i__5770__auto___40292]));

var G__40293 = (i__5770__auto___40292 + (1));
i__5770__auto___40292 = G__40293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (schema__$2,k){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$2,schema_tools.core.key_in_schema(schema__$2,k));
}),schema__$1,ks));
}));

(schema_tools.core.dissoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_tools.core.dissoc.cljs$lang$applyTo = (function (seq40196){
var G__40197 = cljs.core.first(seq40196);
var seq40196__$1 = cljs.core.next(seq40196);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40197,seq40196__$1);
}));

/**
 * Like `clojure.core/select-keys` but handles boths optional-keys and required-keys.
 */
schema_tools.core.select_keys = (function schema_tools$core$select_keys(schema__$1,ks){
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var ks_QMARK_ = schema_tools.core.explicit_key_set(ks);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(ks_QMARK_,schema_tools.core.explicit_key,cljs.core.key),schema__$1));
})());
});
/**
 * Returns the sub-schema or sub-schemas of given schema.
 */
schema_tools.core.schema_value = (function schema_tools$core$schema_value(s){
return schema_tools.impl.schema_value(s);
});
/**
 * Returns the value in a nested associative Schema,
 *   where `ks` is a sequence of keys. Returns `nil` if the key
 *   is not present, or the `not-found` value if supplied.
 */
schema_tools.core.get_in = (function schema_tools$core$get_in(var_args){
var G__40202 = arguments.length;
switch (G__40202) {
case 2:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
}));

(schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,not_found){
var sentinel = (new Object());
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var k = cljs.core.first(ks__$1);
var m__$2 = schema_tools.core.get_in_schema.cljs$core$IFn$_invoke$arity$variadic(m__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sentinel], 0));
if((sentinel === m__$2)){
return not_found;
} else {
var G__40295 = sentinel;
var G__40296 = m__$2;
var G__40297 = cljs.core.next(ks__$1);
sentinel = G__40295;
m__$1 = G__40296;
ks__$1 = G__40297;
continue;
}
} else {
return m__$1;
}
break;
}
}));

(schema_tools.core.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Associates a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `v` is the new value and returns a new nested Schema.
 *   If any levels do not exist, hash-maps will be created.
 */
schema_tools.core.assoc_in = (function schema_tools$core$assoc_in(schema__$1,p__40206,v){
var vec__40207 = p__40206;
var seq__40208 = cljs.core.seq(vec__40207);
var first__40209 = cljs.core.first(seq__40208);
var seq__40208__$1 = cljs.core.next(seq__40208);
var k = first__40209;
var ks = seq__40208__$1;
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,(function (){var G__40211 = schema_tools.core.get_in_schema(schema__$1,k);
var G__40212 = ks;
var G__40213 = v;
return (schema_tools.core.assoc_in.cljs$core$IFn$_invoke$arity$3 ? schema_tools.core.assoc_in.cljs$core$IFn$_invoke$arity$3(G__40211,G__40212,G__40213) : schema_tools.core.assoc_in.call(null,G__40211,G__40212,G__40213));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,v);
}
})());
});
/**
 * 'Updates' a value in a nested associative Schema, where `ks` is a
 *   sequence of keys and `f` is a function that will take the old value
 *   and any supplied args and return the new value, and returns a new
 *   nested Schema. If any levels do not exist, hash-maps will be
 *   created.
 */
schema_tools.core.update_in = (function schema_tools$core$update_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40298 = arguments.length;
var i__5770__auto___40299 = (0);
while(true){
if((i__5770__auto___40299 < len__5769__auto___40298)){
args__5775__auto__.push((arguments[i__5770__auto___40299]));

var G__40300 = (i__5770__auto___40299 + (1));
i__5770__auto___40299 = G__40300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(schema_tools.core.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,p__40221,f,args){
var vec__40222 = p__40221;
var seq__40223 = cljs.core.seq(vec__40222);
var first__40224 = cljs.core.first(seq__40223);
var seq__40223__$1 = cljs.core.next(seq__40223);
var k = first__40224;
var ks = seq__40223__$1;
return schema_tools.core.maybe_anonymous(schema__$1,(function (){var kis = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema_tools.core.get_in_schema(schema__$1,k),ks,f,args));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,kis,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,schema_tools.core.get_in_schema(schema__$1,k),args));
}
})());
}));

(schema_tools.core.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(schema_tools.core.update_in.cljs$lang$applyTo = (function (seq40214){
var G__40215 = cljs.core.first(seq40214);
var seq40214__$1 = cljs.core.next(seq40214);
var G__40216 = cljs.core.first(seq40214__$1);
var seq40214__$2 = cljs.core.next(seq40214__$1);
var G__40217 = cljs.core.first(seq40214__$2);
var seq40214__$3 = cljs.core.next(seq40214__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40215,G__40216,G__40217,seq40214__$3);
}));

/**
 * Dissociates an entry from a nested associative Schema returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new Schema.
 */
schema_tools.core.dissoc_in = (function schema_tools$core$dissoc_in(schema__$1,p__40226){
var vec__40227 = p__40226;
var seq__40228 = cljs.core.seq(vec__40227);
var first__40229 = cljs.core.first(seq__40228);
var seq__40228__$1 = cljs.core.next(seq__40228);
var k = first__40229;
var ks = seq__40228__$1;
var k__$1 = schema_tools.core.key_in_schema(schema__$1,k);
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,k__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (schema_tools.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? schema_tools.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : schema_tools.core.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,k__$1,newmap);
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1], 0));
}
} else {
return schema__$1;
}
} else {
return schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1], 0));
}
});
/**
 * Updates a value in a map with a function.
 */
schema_tools.core.update = (function schema_tools$core$update(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40301 = arguments.length;
var i__5770__auto___40302 = (0);
while(true){
if((i__5770__auto___40302 < len__5769__auto___40301)){
args__5775__auto__.push((arguments[i__5770__auto___40302]));

var G__40303 = (i__5770__auto___40302 + (1));
i__5770__auto___40302 = G__40303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(schema_tools.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,k,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(schema_tools.core.update_in,schema__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),f,args);
}));

(schema_tools.core.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(schema_tools.core.update.cljs$lang$applyTo = (function (seq40231){
var G__40232 = cljs.core.first(seq40231);
var seq40231__$1 = cljs.core.next(seq40231);
var G__40233 = cljs.core.first(seq40231__$1);
var seq40231__$2 = cljs.core.next(seq40231__$1);
var G__40234 = cljs.core.first(seq40231__$2);
var seq40231__$3 = cljs.core.next(seq40231__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40232,G__40233,G__40234,seq40231__$3);
}));

/**
 * Returns a Schema that consists of the rest of the Schemas conj-ed onto
 *   the first. If a schema key occurs in more than one map, the mapping from
 *   the latter (left-to-right) will be the mapping in the result. Works only
 *   with Map schemas.
 */
schema_tools.core.merge = (function schema_tools$core$merge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40312 = arguments.length;
var i__5770__auto___40313 = (0);
while(true){
if((i__5770__auto___40313 < len__5769__auto___40312)){
args__5775__auto__.push((arguments[i__5770__auto___40313]));

var G__40314 = (i__5770__auto___40313 + (1));
i__5770__auto___40313 = G__40314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(schema_tools.core.merge.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
if(cljs.core.every_QMARK_((function (p1__40235_SHARP_){
return ((cljs.core.map_QMARK_(p1__40235_SHARP_)) || ((p1__40235_SHARP_ == null)));
}),schemas)){
} else {
throw (new Error("Assert failed: (every? (fn* [p1__40235#] (or (map? p1__40235#) (nil? p1__40235#))) schemas)"));
}

return schema_tools.core.maybe_anonymous(cljs.core.first(schemas),(cljs.core.truth_(cljs.core.some(cljs.core.identity,schemas))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,p__40238){
var vec__40239 = p__40238;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40239,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(acc__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),k,v);
}),acc,m);
}),schemas):null));
}));

(schema_tools.core.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema_tools.core.merge.cljs$lang$applyTo = (function (seq40236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40236));
}));

schema_tools.core.default$ = (function schema_tools$core$default(schema__$1,default$){
return schema_tools.impl.default$(schema__$1,default$);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema_tools.core.Schema = (function (schema,data,__meta,__extmap,__hash){
this.schema = schema;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema_tools.core.Schema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema_tools.core.Schema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40243,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40247 = k40243;
var G__40247__$1 = (((G__40247 instanceof cljs.core.Keyword))?G__40247.fqn:null);
switch (G__40247__$1) {
case "schema":
return self__.schema;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40243,else__5346__auto__);

}
}));

(schema_tools.core.Schema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40249){
var vec__40250 = p__40249;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40250,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema_tools.core.Schema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema-tools.core.Schema{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40242){
var self__ = this;
var G__40242__$1 = this;
return (new cljs.core.RecordIter((0),G__40242__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema_tools.core.Schema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema_tools.core.Schema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema_tools.core.Schema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1564373953 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema_tools.core.Schema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40244,other40245){
var self__ = this;
var this40244__$1 = this;
return (((!((other40245 == null)))) && ((((this40244__$1.constructor === other40245.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40244__$1.schema,other40245.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40244__$1.data,other40245.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40244__$1.__extmap,other40245.__extmap)))))))));
}));

(schema_tools.core.Schema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.core.Schema.prototype.schema$core$Schema$spec$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema_tools.core.Schema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var ops = schema_tools.core.select_keys(self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null));
return cljs.core.seq((function (){var G__40258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),schema.core.explain(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(this$__$1))], null);
if(cljs.core.seq(ops)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__40258,ops);
} else {
return G__40258;
}
})());
}));

(schema_tools.core.Schema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema_tools.core.Schema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40243){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40260 = k40243;
var G__40260__$1 = (((G__40260 instanceof cljs.core.Keyword))?G__40260.fqn:null);
switch (G__40260__$1) {
case "schema":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40243);

}
}));

(schema_tools.core.Schema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40242){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40261 = cljs.core.keyword_identical_QMARK_;
var expr__40262 = k__5352__auto__;
if(cljs.core.truth_((pred__40261.cljs$core$IFn$_invoke$arity$2 ? pred__40261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__40262) : pred__40261.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__40262)))){
return (new schema_tools.core.Schema(G__40242,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40261.cljs$core$IFn$_invoke$arity$2 ? pred__40261.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__40262) : pred__40261.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__40262)))){
return (new schema_tools.core.Schema(self__.schema,G__40242,self__.__meta,self__.__extmap,null));
} else {
return (new schema_tools.core.Schema(self__.schema,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40242),null));
}
}
}));

(schema_tools.core.Schema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(schema_tools.core.Schema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40242){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema_tools.core.Schema(self__.schema,self__.data,G__40242,self__.__extmap,self__.__hash));
}));

(schema_tools.core.Schema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema_tools.core.Schema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(schema_tools.core.Schema.cljs$lang$type = true);

(schema_tools.core.Schema.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema-tools.core/Schema",null,(1),null));
}));

(schema_tools.core.Schema.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema-tools.core/Schema");
}));

/**
 * Positional factory function for schema-tools.core/Schema.
 */
schema_tools.core.__GT_Schema = (function schema_tools$core$__GT_Schema(schema__$1,data){
return (new schema_tools.core.Schema(schema__$1,data,null,null,null));
});

/**
 * Factory function for schema-tools.core/Schema, taking a map of keywords to field values.
 */
schema_tools.core.map__GT_Schema = (function schema_tools$core$map__GT_Schema(G__40246){
var extmap__5385__auto__ = (function (){var G__40264 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40246,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__40246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40264);
} else {
return G__40264;
}
})();
return (new schema_tools.core.Schema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__40246),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__40246),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

schema_tools.core.schema = (function schema_tools$core$schema(var_args){
var G__40268 = arguments.length;
switch (G__40268) {
case 1:
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.schema.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2(pred,null);
}));

(schema_tools.core.schema.cljs$core$IFn$_invoke$arity$2 = (function (pred,data){
return schema_tools.core.__GT_Schema(pred,data);
}));

(schema_tools.core.schema.cljs$lang$maxFixedArity = 2);

/**
 * Makes given map keys optional. Defaults to all keys.
 */
schema_tools.core.optional_keys = (function schema_tools$core$optional_keys(var_args){
var G__40271 = arguments.length;
switch (G__40271) {
case 1:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(schema_tools.core.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,schema.core.optional_key,ks,false);
}));

(schema_tools.core.optional_keys.cljs$lang$maxFixedArity = 2);

/**
 * Makes given map keys required. Defaults to all keys.
 */
schema_tools.core.required_keys = (function schema_tools$core$required_keys(var_args){
var G__40275 = arguments.length;
switch (G__40275) {
case 1:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (m){
return schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2(m,null);
}));

(schema_tools.core.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
return schema_tools.core.transform_keys(m,(function (p1__40273_SHARP_){
if((p1__40273_SHARP_ instanceof cljs.core.Keyword)){
return p1__40273_SHARP_;
} else {
return schema.core.required_key(p1__40273_SHARP_);
}
}),ks,false);
}));

(schema_tools.core.required_keys.cljs$lang$maxFixedArity = 2);

/**
 * Strips all disallowed keys from nested Map schemas via coercion. Takes an optional
 *   coercion matcher for extra coercing the selected value(s) on a single sweep. If a value
 *   can't be coerced to match the schema `ExceptionInfo` is thrown (like `schema.core/validate`).
 */
schema_tools.core.select_schema = (function schema_tools$core$select_schema(var_args){
var G__40278 = arguments.length;
switch (G__40278) {
case 2:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3(value,schema__$1,cljs.core.constantly(null));
}));

(schema_tools.core.select_schema.cljs$core$IFn$_invoke$arity$3 = (function (value,schema__$1,matcher){
return schema_tools.coerce.coerce.cljs$core$IFn$_invoke$arity$3(value,schema__$1,schema_tools.coerce.or_matcher.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema_tools.coerce.map_filter_matcher,matcher], 0)));
}));

(schema_tools.core.select_schema.cljs$lang$maxFixedArity = 3);

/**
 * Walks a schema adding [`s/Keyword` `s/Any`] entry to all Map Schemas
 */
schema_tools.core.open_schema = (function schema_tools$core$open_schema(schema__$1){
return schema_tools.walk.prewalk((function (x){
if(((cljs.core.map_QMARK_(x)) && ((((!(cljs.core.record_QMARK_(x)))) && (cljs.core.not(schema.core.find_extra_keys_schema(x))))))){
return schema_tools.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.core.Keyword,schema.core.Any], 0));
} else {
return x;
}
}),schema__$1);
});
/**
 * Walks a schema making all keys optional in Map Schemas.
 */
schema_tools.core.optional_keys_schema = (function schema_tools$core$optional_keys_schema(schema__$1){
return schema_tools.walk.prewalk((function (x){
if(((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))))){
return schema_tools.core.transform_keys(x,schema.core.optional_key,null,true);
} else {
return x;
}
}),schema__$1);
});
/**
 * Records description in schema's metadata.
 */
schema_tools.core.schema_with_description = (function schema_tools$core$schema_with_description(schema__$1,description){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,schema_tools.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),description);
});
/**
 * Returns the description of a schema attached via schema-with-description.
 */
schema_tools.core.schema_description = (function schema_tools$core$schema_description(schema__$1){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});

//# sourceMappingURL=schema_tools.core.js.map
