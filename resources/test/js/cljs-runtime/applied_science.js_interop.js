goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48454 = arguments.length;
var i__5770__auto___48455 = (0);
while(true){
if((i__5770__auto___48455 < len__5769__auto___48454)){
args__5775__auto__.push((arguments[i__5770__auto___48455]));

var G__48456 = (i__5770__auto___48455 + (1));
i__5770__auto___48455 = G__48456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__48213_48457 = keyvals;
var vec__48214_48458 = G__48213_48457;
var seq__48215_48459 = cljs.core.seq(vec__48214_48458);
var first__48216_48460 = cljs.core.first(seq__48215_48459);
var seq__48215_48461__$1 = cljs.core.next(seq__48215_48459);
var k_48462 = first__48216_48460;
var first__48216_48463__$1 = cljs.core.first(seq__48215_48461__$1);
var seq__48215_48464__$2 = cljs.core.next(seq__48215_48461__$1);
var v_48465 = first__48216_48463__$1;
var keyvals_48466__$1 = seq__48215_48464__$2;
var G__48213_48467__$1 = G__48213_48457;
while(true){
var vec__48217_48469 = G__48213_48467__$1;
var seq__48218_48470 = cljs.core.seq(vec__48217_48469);
var first__48219_48471 = cljs.core.first(seq__48218_48470);
var seq__48218_48472__$1 = cljs.core.next(seq__48218_48470);
var k_48473__$1 = first__48219_48471;
var first__48219_48474__$1 = cljs.core.first(seq__48218_48472__$1);
var seq__48218_48475__$2 = cljs.core.next(seq__48218_48472__$1);
var v_48476__$1 = first__48219_48474__$1;
var keyvals_48477__$2 = seq__48218_48475__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_48473__$1)] = v_48476__$1);

if(keyvals_48477__$2){
var G__48478 = keyvals_48477__$2;
G__48213_48467__$1 = G__48478;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq48203){
var G__48204 = cljs.core.first(seq48203);
var seq48203__$1 = cljs.core.next(seq48203);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48204,seq48203__$1);
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
var G__48224 = arguments.length;
switch (G__48224) {
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
var obj48225 = obj;
if((!((obj48225 == null)))){
return (obj48225[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj48253 = obj;
if((!((obj48253 == null)))){
return (obj48253[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__26369__auto__ = (function (){var obj48255 = obj;
if((!((obj48255 == null)))){
return (obj48255[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26369__auto__)){
return not_found;
} else {
return val__26369__auto__;
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
var G__48258 = arguments.length;
switch (G__48258) {
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
var obj48270 = self__.obj;
if((!((obj48270 == null)))){
return (obj48270[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__26369__auto__ = (function (){var obj48280 = self__.obj;
if((!((obj48280 == null)))){
return (obj48280[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__26369__auto__)){
return not_found;
} else {
return val__26369__auto__;
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
var len__5769__auto___48489 = arguments.length;
var i__5770__auto___48490 = (0);
while(true){
if((i__5770__auto___48490 < len__5769__auto___48489)){
args__5775__auto__.push((arguments[i__5770__auto___48490]));

var G__48491 = (i__5770__auto___48490 + (1));
i__5770__auto___48490 = G__48491;
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
var G__48297 = keyvals;
var vec__48298 = G__48297;
var seq__48299 = cljs.core.seq(vec__48298);
var first__48300 = cljs.core.first(seq__48299);
var seq__48299__$1 = cljs.core.next(seq__48299);
var k = first__48300;
var first__48300__$1 = cljs.core.first(seq__48299__$1);
var seq__48299__$2 = cljs.core.next(seq__48299__$1);
var v = first__48300__$1;
var kvs = seq__48299__$2;
var G__48297__$1 = G__48297;
while(true){
var vec__48302 = G__48297__$1;
var seq__48303 = cljs.core.seq(vec__48302);
var first__48304 = cljs.core.first(seq__48303);
var seq__48303__$1 = cljs.core.next(seq__48303);
var k__$1 = first__48304;
var first__48304__$1 = cljs.core.first(seq__48303__$1);
var seq__48303__$2 = cljs.core.next(seq__48303__$1);
var v__$1 = first__48304__$1;
var kvs__$1 = seq__48303__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__48494 = kvs__$1;
G__48297__$1 = G__48494;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq48284){
var G__48285 = cljs.core.first(seq48284);
var seq48284__$1 = cljs.core.next(seq48284);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48285,seq48284__$1);
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
var len__5769__auto___48495 = arguments.length;
var i__5770__auto___48496 = (0);
while(true){
if((i__5770__auto___48496 < len__5769__auto___48495)){
args__5775__auto__.push((arguments[i__5770__auto___48496]));

var G__48497 = (i__5770__auto___48496 + (1));
i__5770__auto___48496 = G__48497;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq48307){
var G__48308 = cljs.core.first(seq48307);
var seq48307__$1 = cljs.core.next(seq48307);
var G__48309 = cljs.core.first(seq48307__$1);
var seq48307__$2 = cljs.core.next(seq48307__$1);
var G__48310 = cljs.core.first(seq48307__$2);
var seq48307__$3 = cljs.core.next(seq48307__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48308,G__48309,G__48310,seq48307__$3);
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
var len__5769__auto___48499 = arguments.length;
var i__5770__auto___48500 = (0);
while(true){
if((i__5770__auto___48500 < len__5769__auto___48499)){
args__5775__auto__.push((arguments[i__5770__auto___48500]));

var G__48501 = (i__5770__auto___48500 + (1));
i__5770__auto___48500 = G__48501;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq48330){
var G__48331 = cljs.core.first(seq48330);
var seq48330__$1 = cljs.core.next(seq48330);
var G__48332 = cljs.core.first(seq48330__$1);
var seq48330__$2 = cljs.core.next(seq48330__$1);
var G__48333 = cljs.core.first(seq48330__$2);
var seq48330__$3 = cljs.core.next(seq48330__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48331,G__48332,G__48333,seq48330__$3);
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
var G__48340 = arguments.length;
switch (G__48340) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48503 = arguments.length;
var i__5770__auto___48504 = (0);
while(true){
if((i__5770__auto___48504 < len__5769__auto___48503)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48504]));

var G__48505 = (i__5770__auto___48504 + (1));
i__5770__auto___48504 = G__48505;
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
var seq__48349_48507 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__48350_48508 = null;
var count__48351_48509 = (0);
var i__48352_48510 = (0);
while(true){
if((i__48352_48510 < count__48351_48509)){
var k_48511 = chunk__48350_48508.cljs$core$IIndexed$_nth$arity$2(null,i__48352_48510);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48511,applied_science.js_interop.unchecked_get(x,k_48511)], 0));


var G__48518 = seq__48349_48507;
var G__48519 = chunk__48350_48508;
var G__48520 = count__48351_48509;
var G__48521 = (i__48352_48510 + (1));
seq__48349_48507 = G__48518;
chunk__48350_48508 = G__48519;
count__48351_48509 = G__48520;
i__48352_48510 = G__48521;
continue;
} else {
var temp__5804__auto___48522 = cljs.core.seq(seq__48349_48507);
if(temp__5804__auto___48522){
var seq__48349_48523__$1 = temp__5804__auto___48522;
if(cljs.core.chunked_seq_QMARK_(seq__48349_48523__$1)){
var c__5568__auto___48524 = cljs.core.chunk_first(seq__48349_48523__$1);
var G__48525 = cljs.core.chunk_rest(seq__48349_48523__$1);
var G__48526 = c__5568__auto___48524;
var G__48527 = cljs.core.count(c__5568__auto___48524);
var G__48528 = (0);
seq__48349_48507 = G__48525;
chunk__48350_48508 = G__48526;
count__48351_48509 = G__48527;
i__48352_48510 = G__48528;
continue;
} else {
var k_48530 = cljs.core.first(seq__48349_48523__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_48530,applied_science.js_interop.unchecked_get(x,k_48530)], 0));


var G__48531 = cljs.core.next(seq__48349_48523__$1);
var G__48532 = null;
var G__48533 = (0);
var G__48534 = (0);
seq__48349_48507 = G__48531;
chunk__48350_48508 = G__48532;
count__48351_48509 = G__48533;
i__48352_48510 = G__48534;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq48337){
var G__48338 = cljs.core.first(seq48337);
var seq48337__$1 = cljs.core.next(seq48337);
var G__48339 = cljs.core.first(seq48337__$1);
var seq48337__$2 = cljs.core.next(seq48337__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48338,G__48339,seq48337__$2);
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
var G__48356 = array;
G__48356.push(x);

return G__48356;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__48364 = array;
G__48364.unshift(x);

return G__48364;
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
var len__5769__auto___48536 = arguments.length;
var i__5770__auto___48537 = (0);
while(true){
if((i__5770__auto___48537 < len__5769__auto___48536)){
args__5775__auto__.push((arguments[i__5770__auto___48537]));

var G__48538 = (i__5770__auto___48537 + (1));
i__5770__auto___48537 = G__48538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj48370 = obj;
if((!((obj48370 == null)))){
return (obj48370[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq48366){
var G__48367 = cljs.core.first(seq48366);
var seq48366__$1 = cljs.core.next(seq48366);
var G__48368 = cljs.core.first(seq48366__$1);
var seq48366__$2 = cljs.core.next(seq48366__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48367,G__48368,seq48366__$2);
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
return (function (){var obj48373 = obj;
if((!((obj48373 == null)))){
return (obj48373[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__5769__auto___48541 = arguments.length;
var i__5770__auto___48542 = (0);
while(true){
if((i__5770__auto___48542 < len__5769__auto___48541)){
args__5775__auto__.push((arguments[i__5770__auto___48542]));

var G__48543 = (i__5770__auto___48542 + (1));
i__5770__auto___48542 = G__48543;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq48375){
var G__48376 = cljs.core.first(seq48375);
var seq48375__$1 = cljs.core.next(seq48375);
var G__48377 = cljs.core.first(seq48375__$1);
var seq48375__$2 = cljs.core.next(seq48375__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48376,G__48377,seq48375__$2);
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
var len__5769__auto___48565 = arguments.length;
var i__5770__auto___48566 = (0);
while(true){
if((i__5770__auto___48566 < len__5769__auto___48565)){
args__5775__auto__.push((arguments[i__5770__auto___48566]));

var G__48567 = (i__5770__auto___48566 + (1));
i__5770__auto___48566 = G__48567;
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
var seq__48408_48568 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__48409_48569 = null;
var count__48410_48570 = (0);
var i__48411_48571 = (0);
while(true){
if((i__48411_48571 < count__48410_48570)){
var vec__48430_48572 = chunk__48409_48569.cljs$core$IIndexed$_nth$arity$2(null,i__48411_48571);
var k_48573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48430_48572,(0),null);
var v_48574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48430_48572,(1),null);
var obj48433_48575 = obj;
var obj48434_48576 = (((!((obj48433_48575 == null))))?obj48433_48575:({}));
(obj48434_48576[applied_science.js_interop.impl.wrap_key(k_48573)] = v_48574);



var G__48577 = seq__48408_48568;
var G__48578 = chunk__48409_48569;
var G__48579 = count__48410_48570;
var G__48580 = (i__48411_48571 + (1));
seq__48408_48568 = G__48577;
chunk__48409_48569 = G__48578;
count__48410_48570 = G__48579;
i__48411_48571 = G__48580;
continue;
} else {
var temp__5804__auto___48581 = cljs.core.seq(seq__48408_48568);
if(temp__5804__auto___48581){
var seq__48408_48582__$1 = temp__5804__auto___48581;
if(cljs.core.chunked_seq_QMARK_(seq__48408_48582__$1)){
var c__5568__auto___48583 = cljs.core.chunk_first(seq__48408_48582__$1);
var G__48584 = cljs.core.chunk_rest(seq__48408_48582__$1);
var G__48585 = c__5568__auto___48583;
var G__48586 = cljs.core.count(c__5568__auto___48583);
var G__48587 = (0);
seq__48408_48568 = G__48584;
chunk__48409_48569 = G__48585;
count__48410_48570 = G__48586;
i__48411_48571 = G__48587;
continue;
} else {
var vec__48438_48588 = cljs.core.first(seq__48408_48582__$1);
var k_48589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48438_48588,(0),null);
var v_48590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48438_48588,(1),null);
var obj48441_48591 = obj;
var obj48442_48592 = (((!((obj48441_48591 == null))))?obj48441_48591:({}));
(obj48442_48592[applied_science.js_interop.impl.wrap_key(k_48589)] = v_48590);



var G__48594 = cljs.core.next(seq__48408_48582__$1);
var G__48595 = null;
var G__48596 = (0);
var G__48597 = (0);
seq__48408_48568 = G__48594;
chunk__48409_48569 = G__48595;
count__48410_48570 = G__48596;
i__48411_48571 = G__48597;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq48388){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48388));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
