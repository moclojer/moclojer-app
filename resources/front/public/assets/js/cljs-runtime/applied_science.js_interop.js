goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22861 = arguments.length;
var i__5770__auto___22862 = (0);
while(true){
if((i__5770__auto___22862 < len__5769__auto___22861)){
args__5775__auto__.push((arguments[i__5770__auto___22862]));

var G__22863 = (i__5770__auto___22862 + (1));
i__5770__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__22528_22864 = keyvals;
var vec__22529_22865 = G__22528_22864;
var seq__22530_22866 = cljs.core.seq(vec__22529_22865);
var first__22531_22867 = cljs.core.first(seq__22530_22866);
var seq__22530_22868__$1 = cljs.core.next(seq__22530_22866);
var k_22869 = first__22531_22867;
var first__22531_22870__$1 = cljs.core.first(seq__22530_22868__$1);
var seq__22530_22871__$2 = cljs.core.next(seq__22530_22868__$1);
var v_22872 = first__22531_22870__$1;
var keyvals_22873__$1 = seq__22530_22871__$2;
var G__22528_22874__$1 = G__22528_22864;
while(true){
var vec__22533_22875 = G__22528_22874__$1;
var seq__22534_22876 = cljs.core.seq(vec__22533_22875);
var first__22535_22877 = cljs.core.first(seq__22534_22876);
var seq__22534_22878__$1 = cljs.core.next(seq__22534_22876);
var k_22879__$1 = first__22535_22877;
var first__22535_22880__$1 = cljs.core.first(seq__22534_22878__$1);
var seq__22534_22881__$2 = cljs.core.next(seq__22534_22878__$1);
var v_22882__$1 = first__22535_22880__$1;
var keyvals_22883__$2 = seq__22534_22881__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_22879__$1)] = v_22882__$1);

if(keyvals_22883__$2){
var G__22884 = keyvals_22883__$2;
G__22528_22874__$1 = G__22884;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq22522){
var G__22523 = cljs.core.first(seq22522);
var seq22522__$1 = cljs.core.next(seq22522);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22523,seq22522__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__22538 = arguments.length;
switch (G__22538) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj22539 = obj;
if((!((obj22539 == null)))){
return (obj22539[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj22541 = obj;
if((!((obj22541 == null)))){
return (obj22541[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__21963__auto__ = (function (){var obj22548 = obj;
if((!((obj22548 == null)))){
return (obj22548[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__21963__auto__)){
return not_found;
} else {
return val__21963__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__22552 = arguments.length;
switch (G__22552) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj22565 = self__.obj;
if((!((obj22565 == null)))){
return (obj22565[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__21963__auto__ = (function (){var obj22567 = self__.obj;
if((!((obj22567 == null)))){
return (obj22567[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__21963__auto__)){
return not_found;
} else {
return val__21963__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22914 = arguments.length;
var i__5770__auto___22915 = (0);
while(true){
if((i__5770__auto___22915 < len__5769__auto___22914)){
args__5775__auto__.push((arguments[i__5770__auto___22915]));

var G__22916 = (i__5770__auto___22915 + (1));
i__5770__auto___22915 = G__22916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__22576 = keyvals;
var vec__22578 = G__22576;
var seq__22579 = cljs.core.seq(vec__22578);
var first__22580 = cljs.core.first(seq__22579);
var seq__22579__$1 = cljs.core.next(seq__22579);
var k = first__22580;
var first__22580__$1 = cljs.core.first(seq__22579__$1);
var seq__22579__$2 = cljs.core.next(seq__22579__$1);
var v = first__22580__$1;
var kvs = seq__22579__$2;
var G__22576__$1 = G__22576;
while(true){
var vec__22581 = G__22576__$1;
var seq__22582 = cljs.core.seq(vec__22581);
var first__22583 = cljs.core.first(seq__22582);
var seq__22582__$1 = cljs.core.next(seq__22582);
var k__$1 = first__22583;
var first__22583__$1 = cljs.core.first(seq__22582__$1);
var seq__22582__$2 = cljs.core.next(seq__22582__$1);
var v__$1 = first__22583__$1;
var kvs__$1 = seq__22582__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__22924 = kvs__$1;
G__22576__$1 = G__22924;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq22569){
var G__22570 = cljs.core.first(seq22569);
var seq22569__$1 = cljs.core.next(seq22569);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22570,seq22569__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22935 = arguments.length;
var i__5770__auto___22936 = (0);
while(true){
if((i__5770__auto___22936 < len__5769__auto___22935)){
args__5775__auto__.push((arguments[i__5770__auto___22936]));

var G__22939 = (i__5770__auto___22936 + (1));
i__5770__auto___22936 = G__22939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq22585){
var G__22586 = cljs.core.first(seq22585);
var seq22585__$1 = cljs.core.next(seq22585);
var G__22588 = cljs.core.first(seq22585__$1);
var seq22585__$2 = cljs.core.next(seq22585__$1);
var G__22589 = cljs.core.first(seq22585__$2);
var seq22585__$3 = cljs.core.next(seq22585__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22586,G__22588,G__22589,seq22585__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22950 = arguments.length;
var i__5770__auto___22951 = (0);
while(true){
if((i__5770__auto___22951 < len__5769__auto___22950)){
args__5775__auto__.push((arguments[i__5770__auto___22951]));

var G__22953 = (i__5770__auto___22951 + (1));
i__5770__auto___22951 = G__22953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq22600){
var G__22601 = cljs.core.first(seq22600);
var seq22600__$1 = cljs.core.next(seq22600);
var G__22602 = cljs.core.first(seq22600__$1);
var seq22600__$2 = cljs.core.next(seq22600__$1);
var G__22603 = cljs.core.first(seq22600__$2);
var seq22600__$3 = cljs.core.next(seq22600__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22601,G__22602,G__22603,seq22600__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__22611 = arguments.length;
switch (G__22611) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___22963 = arguments.length;
var i__5770__auto___22964 = (0);
while(true){
if((i__5770__auto___22964 < len__5769__auto___22963)){
args_arr__5794__auto__.push((arguments[i__5770__auto___22964]));

var G__22965 = (i__5770__auto___22964 + (1));
i__5770__auto___22964 = G__22965;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__22643_22966 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__22644_22967 = null;
var count__22645_22968 = (0);
var i__22646_22969 = (0);
while(true){
if((i__22646_22969 < count__22645_22968)){
var k_22970 = chunk__22644_22967.cljs$core$IIndexed$_nth$arity$2(null,i__22646_22969);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_22970,applied_science.js_interop.unchecked_get(x,k_22970)], 0));


var G__22971 = seq__22643_22966;
var G__22972 = chunk__22644_22967;
var G__22973 = count__22645_22968;
var G__22974 = (i__22646_22969 + (1));
seq__22643_22966 = G__22971;
chunk__22644_22967 = G__22972;
count__22645_22968 = G__22973;
i__22646_22969 = G__22974;
continue;
} else {
var temp__5804__auto___22975 = cljs.core.seq(seq__22643_22966);
if(temp__5804__auto___22975){
var seq__22643_22976__$1 = temp__5804__auto___22975;
if(cljs.core.chunked_seq_QMARK_(seq__22643_22976__$1)){
var c__5568__auto___22977 = cljs.core.chunk_first(seq__22643_22976__$1);
var G__22978 = cljs.core.chunk_rest(seq__22643_22976__$1);
var G__22979 = c__5568__auto___22977;
var G__22980 = cljs.core.count(c__5568__auto___22977);
var G__22981 = (0);
seq__22643_22966 = G__22978;
chunk__22644_22967 = G__22979;
count__22645_22968 = G__22980;
i__22646_22969 = G__22981;
continue;
} else {
var k_22991 = cljs.core.first(seq__22643_22976__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_22991,applied_science.js_interop.unchecked_get(x,k_22991)], 0));


var G__22995 = cljs.core.next(seq__22643_22976__$1);
var G__22996 = null;
var G__22997 = (0);
var G__22998 = (0);
seq__22643_22966 = G__22995;
chunk__22644_22967 = G__22996;
count__22645_22968 = G__22997;
i__22646_22969 = G__22998;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq22608){
var G__22609 = cljs.core.first(seq22608);
var seq22608__$1 = cljs.core.next(seq22608);
var G__22610 = cljs.core.first(seq22608__$1);
var seq22608__$2 = cljs.core.next(seq22608__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22609,G__22610,seq22608__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__22662 = array;
G__22662.push(x);

return G__22662;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__22663 = array;
G__22663.unshift(x);

return G__22663;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23011 = arguments.length;
var i__5770__auto___23014 = (0);
while(true){
if((i__5770__auto___23014 < len__5769__auto___23011)){
args__5775__auto__.push((arguments[i__5770__auto___23014]));

var G__23019 = (i__5770__auto___23014 + (1));
i__5770__auto___23014 = G__23019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj22673 = obj;
if((!((obj22673 == null)))){
return (obj22673[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq22664){
var G__22665 = cljs.core.first(seq22664);
var seq22664__$1 = cljs.core.next(seq22664);
var G__22666 = cljs.core.first(seq22664__$1);
var seq22664__$2 = cljs.core.next(seq22664__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22665,G__22666,seq22664__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj22717 = obj;
if((!((obj22717 == null)))){
return (obj22717[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23047 = arguments.length;
var i__5770__auto___23048 = (0);
while(true){
if((i__5770__auto___23048 < len__5769__auto___23047)){
args__5775__auto__.push((arguments[i__5770__auto___23048]));

var G__23049 = (i__5770__auto___23048 + (1));
i__5770__auto___23048 = G__23049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq22722){
var G__22723 = cljs.core.first(seq22722);
var seq22722__$1 = cljs.core.next(seq22722);
var G__22724 = cljs.core.first(seq22722__$1);
var seq22722__$2 = cljs.core.next(seq22722__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22723,G__22724,seq22722__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23061 = arguments.length;
var i__5770__auto___23062 = (0);
while(true){
if((i__5770__auto___23062 < len__5769__auto___23061)){
args__5775__auto__.push((arguments[i__5770__auto___23062]));

var G__23063 = (i__5770__auto___23062 + (1));
i__5770__auto___23062 = G__23063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__22761_23064 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__22762_23065 = null;
var count__22763_23066 = (0);
var i__22764_23067 = (0);
while(true){
if((i__22764_23067 < count__22763_23066)){
var vec__22796_23068 = chunk__22762_23065.cljs$core$IIndexed$_nth$arity$2(null,i__22764_23067);
var k_23070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22796_23068,(0),null);
var v_23071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22796_23068,(1),null);
var obj22799_23074 = obj;
var obj22800_23075 = (((!((obj22799_23074 == null))))?obj22799_23074:({}));
(obj22800_23075[applied_science.js_interop.impl.wrap_key(k_23070)] = v_23071);



var G__23077 = seq__22761_23064;
var G__23078 = chunk__22762_23065;
var G__23079 = count__22763_23066;
var G__23080 = (i__22764_23067 + (1));
seq__22761_23064 = G__23077;
chunk__22762_23065 = G__23078;
count__22763_23066 = G__23079;
i__22764_23067 = G__23080;
continue;
} else {
var temp__5804__auto___23081 = cljs.core.seq(seq__22761_23064);
if(temp__5804__auto___23081){
var seq__22761_23083__$1 = temp__5804__auto___23081;
if(cljs.core.chunked_seq_QMARK_(seq__22761_23083__$1)){
var c__5568__auto___23084 = cljs.core.chunk_first(seq__22761_23083__$1);
var G__23085 = cljs.core.chunk_rest(seq__22761_23083__$1);
var G__23086 = c__5568__auto___23084;
var G__23087 = cljs.core.count(c__5568__auto___23084);
var G__23088 = (0);
seq__22761_23064 = G__23085;
chunk__22762_23065 = G__23086;
count__22763_23066 = G__23087;
i__22764_23067 = G__23088;
continue;
} else {
var vec__22806_23089 = cljs.core.first(seq__22761_23083__$1);
var k_23090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22806_23089,(0),null);
var v_23091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22806_23089,(1),null);
var obj22810_23094 = obj;
var obj22813_23095 = (((!((obj22810_23094 == null))))?obj22810_23094:({}));
(obj22813_23095[applied_science.js_interop.impl.wrap_key(k_23090)] = v_23091);



var G__23105 = cljs.core.next(seq__22761_23083__$1);
var G__23106 = null;
var G__23107 = (0);
var G__23108 = (0);
seq__22761_23064 = G__23105;
chunk__22762_23065 = G__23106;
count__22763_23066 = G__23107;
i__22764_23067 = G__23108;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq22752){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22752));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
