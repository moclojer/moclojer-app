goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51618 = arguments.length;
var i__5770__auto___51619 = (0);
while(true){
if((i__5770__auto___51619 < len__5769__auto___51618)){
args__5775__auto__.push((arguments[i__5770__auto___51619]));

var G__51620 = (i__5770__auto___51619 + (1));
i__5770__auto___51619 = G__51620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__51375_51631 = keyvals;
var vec__51376_51632 = G__51375_51631;
var seq__51377_51633 = cljs.core.seq(vec__51376_51632);
var first__51378_51634 = cljs.core.first(seq__51377_51633);
var seq__51377_51635__$1 = cljs.core.next(seq__51377_51633);
var k_51636 = first__51378_51634;
var first__51378_51637__$1 = cljs.core.first(seq__51377_51635__$1);
var seq__51377_51638__$2 = cljs.core.next(seq__51377_51635__$1);
var v_51639 = first__51378_51637__$1;
var keyvals_51640__$1 = seq__51377_51638__$2;
var G__51375_51641__$1 = G__51375_51631;
while(true){
var vec__51380_51642 = G__51375_51641__$1;
var seq__51381_51643 = cljs.core.seq(vec__51380_51642);
var first__51382_51644 = cljs.core.first(seq__51381_51643);
var seq__51381_51645__$1 = cljs.core.next(seq__51381_51643);
var k_51646__$1 = first__51382_51644;
var first__51382_51647__$1 = cljs.core.first(seq__51381_51645__$1);
var seq__51381_51648__$2 = cljs.core.next(seq__51381_51645__$1);
var v_51649__$1 = first__51382_51647__$1;
var keyvals_51650__$2 = seq__51381_51648__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_51646__$1)] = v_51649__$1);

if(keyvals_51650__$2){
var G__51652 = keyvals_51650__$2;
G__51375_51641__$1 = G__51652;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq51350){
var G__51351 = cljs.core.first(seq51350);
var seq51350__$1 = cljs.core.next(seq51350);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51351,seq51350__$1);
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
var G__51391 = arguments.length;
switch (G__51391) {
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
var obj51395 = obj;
if((!((obj51395 == null)))){
return (obj51395[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj51399 = obj;
if((!((obj51399 == null)))){
return (obj51399[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__26405__auto__ = (function (){var obj51400 = obj;
if((!((obj51400 == null)))){
return (obj51400[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26405__auto__)){
return not_found;
} else {
return val__26405__auto__;
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
var G__51418 = arguments.length;
switch (G__51418) {
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
var obj51437 = self__.obj;
if((!((obj51437 == null)))){
return (obj51437[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__26405__auto__ = (function (){var obj51438 = self__.obj;
if((!((obj51438 == null)))){
return (obj51438[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26405__auto__)){
return not_found;
} else {
return val__26405__auto__;
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
var len__5769__auto___51663 = arguments.length;
var i__5770__auto___51664 = (0);
while(true){
if((i__5770__auto___51664 < len__5769__auto___51663)){
args__5775__auto__.push((arguments[i__5770__auto___51664]));

var G__51670 = (i__5770__auto___51664 + (1));
i__5770__auto___51664 = G__51670;
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
var G__51452 = keyvals;
var vec__51453 = G__51452;
var seq__51454 = cljs.core.seq(vec__51453);
var first__51455 = cljs.core.first(seq__51454);
var seq__51454__$1 = cljs.core.next(seq__51454);
var k = first__51455;
var first__51455__$1 = cljs.core.first(seq__51454__$1);
var seq__51454__$2 = cljs.core.next(seq__51454__$1);
var v = first__51455__$1;
var kvs = seq__51454__$2;
var G__51452__$1 = G__51452;
while(true){
var vec__51456 = G__51452__$1;
var seq__51457 = cljs.core.seq(vec__51456);
var first__51458 = cljs.core.first(seq__51457);
var seq__51457__$1 = cljs.core.next(seq__51457);
var k__$1 = first__51458;
var first__51458__$1 = cljs.core.first(seq__51457__$1);
var seq__51457__$2 = cljs.core.next(seq__51457__$1);
var v__$1 = first__51458__$1;
var kvs__$1 = seq__51457__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__51677 = kvs__$1;
G__51452__$1 = G__51677;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq51441){
var G__51442 = cljs.core.first(seq51441);
var seq51441__$1 = cljs.core.next(seq51441);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51442,seq51441__$1);
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
var len__5769__auto___51679 = arguments.length;
var i__5770__auto___51680 = (0);
while(true){
if((i__5770__auto___51680 < len__5769__auto___51679)){
args__5775__auto__.push((arguments[i__5770__auto___51680]));

var G__51681 = (i__5770__auto___51680 + (1));
i__5770__auto___51680 = G__51681;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq51460){
var G__51462 = cljs.core.first(seq51460);
var seq51460__$1 = cljs.core.next(seq51460);
var G__51463 = cljs.core.first(seq51460__$1);
var seq51460__$2 = cljs.core.next(seq51460__$1);
var G__51464 = cljs.core.first(seq51460__$2);
var seq51460__$3 = cljs.core.next(seq51460__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51462,G__51463,G__51464,seq51460__$3);
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
var len__5769__auto___51694 = arguments.length;
var i__5770__auto___51695 = (0);
while(true){
if((i__5770__auto___51695 < len__5769__auto___51694)){
args__5775__auto__.push((arguments[i__5770__auto___51695]));

var G__51696 = (i__5770__auto___51695 + (1));
i__5770__auto___51695 = G__51696;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq51478){
var G__51479 = cljs.core.first(seq51478);
var seq51478__$1 = cljs.core.next(seq51478);
var G__51480 = cljs.core.first(seq51478__$1);
var seq51478__$2 = cljs.core.next(seq51478__$1);
var G__51481 = cljs.core.first(seq51478__$2);
var seq51478__$3 = cljs.core.next(seq51478__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51479,G__51480,G__51481,seq51478__$3);
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
var G__51516 = arguments.length;
switch (G__51516) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___51713 = arguments.length;
var i__5770__auto___51714 = (0);
while(true){
if((i__5770__auto___51714 < len__5769__auto___51713)){
args_arr__5794__auto__.push((arguments[i__5770__auto___51714]));

var G__51715 = (i__5770__auto___51714 + (1));
i__5770__auto___51714 = G__51715;
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
var seq__51518_51716 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__51519_51717 = null;
var count__51520_51718 = (0);
var i__51521_51719 = (0);
while(true){
if((i__51521_51719 < count__51520_51718)){
var k_51720 = chunk__51519_51717.cljs$core$IIndexed$_nth$arity$2(null,i__51521_51719);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51720,applied_science.js_interop.unchecked_get(x,k_51720)], 0));


var G__51721 = seq__51518_51716;
var G__51722 = chunk__51519_51717;
var G__51723 = count__51520_51718;
var G__51725 = (i__51521_51719 + (1));
seq__51518_51716 = G__51721;
chunk__51519_51717 = G__51722;
count__51520_51718 = G__51723;
i__51521_51719 = G__51725;
continue;
} else {
var temp__5804__auto___51729 = cljs.core.seq(seq__51518_51716);
if(temp__5804__auto___51729){
var seq__51518_51730__$1 = temp__5804__auto___51729;
if(cljs.core.chunked_seq_QMARK_(seq__51518_51730__$1)){
var c__5568__auto___51731 = cljs.core.chunk_first(seq__51518_51730__$1);
var G__51732 = cljs.core.chunk_rest(seq__51518_51730__$1);
var G__51733 = c__5568__auto___51731;
var G__51734 = cljs.core.count(c__5568__auto___51731);
var G__51735 = (0);
seq__51518_51716 = G__51732;
chunk__51519_51717 = G__51733;
count__51520_51718 = G__51734;
i__51521_51719 = G__51735;
continue;
} else {
var k_51736 = cljs.core.first(seq__51518_51730__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51736,applied_science.js_interop.unchecked_get(x,k_51736)], 0));


var G__51737 = cljs.core.next(seq__51518_51730__$1);
var G__51738 = null;
var G__51739 = (0);
var G__51740 = (0);
seq__51518_51716 = G__51737;
chunk__51519_51717 = G__51738;
count__51520_51718 = G__51739;
i__51521_51719 = G__51740;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq51513){
var G__51514 = cljs.core.first(seq51513);
var seq51513__$1 = cljs.core.next(seq51513);
var G__51515 = cljs.core.first(seq51513__$1);
var seq51513__$2 = cljs.core.next(seq51513__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51514,G__51515,seq51513__$2);
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
var G__51533 = array;
G__51533.push(x);

return G__51533;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__51534 = array;
G__51534.unshift(x);

return G__51534;
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
var len__5769__auto___51747 = arguments.length;
var i__5770__auto___51748 = (0);
while(true){
if((i__5770__auto___51748 < len__5769__auto___51747)){
args__5775__auto__.push((arguments[i__5770__auto___51748]));

var G__51749 = (i__5770__auto___51748 + (1));
i__5770__auto___51748 = G__51749;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj51544 = obj;
if((!((obj51544 == null)))){
return (obj51544[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq51536){
var G__51537 = cljs.core.first(seq51536);
var seq51536__$1 = cljs.core.next(seq51536);
var G__51538 = cljs.core.first(seq51536__$1);
var seq51536__$2 = cljs.core.next(seq51536__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51537,G__51538,seq51536__$2);
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
return (function (){var obj51545 = obj;
if((!((obj51545 == null)))){
return (obj51545[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__5769__auto___51751 = arguments.length;
var i__5770__auto___51753 = (0);
while(true){
if((i__5770__auto___51753 < len__5769__auto___51751)){
args__5775__auto__.push((arguments[i__5770__auto___51753]));

var G__51754 = (i__5770__auto___51753 + (1));
i__5770__auto___51753 = G__51754;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq51556){
var G__51557 = cljs.core.first(seq51556);
var seq51556__$1 = cljs.core.next(seq51556);
var G__51558 = cljs.core.first(seq51556__$1);
var seq51556__$2 = cljs.core.next(seq51556__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51557,G__51558,seq51556__$2);
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
var len__5769__auto___51770 = arguments.length;
var i__5770__auto___51771 = (0);
while(true){
if((i__5770__auto___51771 < len__5769__auto___51770)){
args__5775__auto__.push((arguments[i__5770__auto___51771]));

var G__51772 = (i__5770__auto___51771 + (1));
i__5770__auto___51771 = G__51772;
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
var seq__51570_51773 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__51571_51774 = null;
var count__51572_51775 = (0);
var i__51573_51776 = (0);
while(true){
if((i__51573_51776 < count__51572_51775)){
var vec__51592_51777 = chunk__51571_51774.cljs$core$IIndexed$_nth$arity$2(null,i__51573_51776);
var k_51778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51592_51777,(0),null);
var v_51779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51592_51777,(1),null);
var obj51595_51780 = obj;
var obj51606_51781 = (((!((obj51595_51780 == null))))?obj51595_51780:({}));
(obj51606_51781[applied_science.js_interop.impl.wrap_key(k_51778)] = v_51779);



var G__51782 = seq__51570_51773;
var G__51783 = chunk__51571_51774;
var G__51784 = count__51572_51775;
var G__51785 = (i__51573_51776 + (1));
seq__51570_51773 = G__51782;
chunk__51571_51774 = G__51783;
count__51572_51775 = G__51784;
i__51573_51776 = G__51785;
continue;
} else {
var temp__5804__auto___51786 = cljs.core.seq(seq__51570_51773);
if(temp__5804__auto___51786){
var seq__51570_51787__$1 = temp__5804__auto___51786;
if(cljs.core.chunked_seq_QMARK_(seq__51570_51787__$1)){
var c__5568__auto___51788 = cljs.core.chunk_first(seq__51570_51787__$1);
var G__51789 = cljs.core.chunk_rest(seq__51570_51787__$1);
var G__51790 = c__5568__auto___51788;
var G__51791 = cljs.core.count(c__5568__auto___51788);
var G__51792 = (0);
seq__51570_51773 = G__51789;
chunk__51571_51774 = G__51790;
count__51572_51775 = G__51791;
i__51573_51776 = G__51792;
continue;
} else {
var vec__51609_51793 = cljs.core.first(seq__51570_51787__$1);
var k_51794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609_51793,(0),null);
var v_51795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51609_51793,(1),null);
var obj51613_51796 = obj;
var obj51614_51797 = (((!((obj51613_51796 == null))))?obj51613_51796:({}));
(obj51614_51797[applied_science.js_interop.impl.wrap_key(k_51794)] = v_51795);



var G__51798 = cljs.core.next(seq__51570_51787__$1);
var G__51799 = null;
var G__51800 = (0);
var G__51801 = (0);
seq__51570_51773 = G__51798;
chunk__51571_51774 = G__51799;
count__51572_51775 = G__51800;
i__51573_51776 = G__51801;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq51565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51565));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
