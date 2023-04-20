goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30438 = arguments.length;
var i__5770__auto___30440 = (0);
while(true){
if((i__5770__auto___30440 < len__5769__auto___30438)){
args__5775__auto__.push((arguments[i__5770__auto___30440]));

var G__30441 = (i__5770__auto___30440 + (1));
i__5770__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__30258_30442 = keyvals;
var vec__30263_30443 = G__30258_30442;
var seq__30264_30444 = cljs.core.seq(vec__30263_30443);
var first__30265_30445 = cljs.core.first(seq__30264_30444);
var seq__30264_30446__$1 = cljs.core.next(seq__30264_30444);
var k_30447 = first__30265_30445;
var first__30265_30448__$1 = cljs.core.first(seq__30264_30446__$1);
var seq__30264_30449__$2 = cljs.core.next(seq__30264_30446__$1);
var v_30450 = first__30265_30448__$1;
var keyvals_30451__$1 = seq__30264_30449__$2;
var G__30258_30453__$1 = G__30258_30442;
while(true){
var vec__30267_30454 = G__30258_30453__$1;
var seq__30268_30455 = cljs.core.seq(vec__30267_30454);
var first__30269_30456 = cljs.core.first(seq__30268_30455);
var seq__30268_30457__$1 = cljs.core.next(seq__30268_30455);
var k_30458__$1 = first__30269_30456;
var first__30269_30459__$1 = cljs.core.first(seq__30268_30457__$1);
var seq__30268_30460__$2 = cljs.core.next(seq__30268_30457__$1);
var v_30461__$1 = first__30269_30459__$1;
var keyvals_30462__$2 = seq__30268_30460__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_30458__$1)] = v_30461__$1);

if(keyvals_30462__$2){
var G__30464 = keyvals_30462__$2;
G__30258_30453__$1 = G__30464;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq30252){
var G__30253 = cljs.core.first(seq30252);
var seq30252__$1 = cljs.core.next(seq30252);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30253,seq30252__$1);
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
var G__30274 = arguments.length;
switch (G__30274) {
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
var obj30276 = obj;
if((!((obj30276 == null)))){
return (obj30276[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj30277 = obj;
if((!((obj30277 == null)))){
return (obj30277[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__29330__auto__ = (function (){var obj30278 = obj;
if((!((obj30278 == null)))){
return (obj30278[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__29330__auto__)){
return not_found;
} else {
return val__29330__auto__;
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
var G__30285 = arguments.length;
switch (G__30285) {
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
var obj30307 = self__.obj;
if((!((obj30307 == null)))){
return (obj30307[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__29330__auto__ = (function (){var obj30308 = self__.obj;
if((!((obj30308 == null)))){
return (obj30308[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__29330__auto__)){
return not_found;
} else {
return val__29330__auto__;
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
var len__5769__auto___30477 = arguments.length;
var i__5770__auto___30478 = (0);
while(true){
if((i__5770__auto___30478 < len__5769__auto___30477)){
args__5775__auto__.push((arguments[i__5770__auto___30478]));

var G__30479 = (i__5770__auto___30478 + (1));
i__5770__auto___30478 = G__30479;
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
var G__30316 = keyvals;
var vec__30317 = G__30316;
var seq__30318 = cljs.core.seq(vec__30317);
var first__30319 = cljs.core.first(seq__30318);
var seq__30318__$1 = cljs.core.next(seq__30318);
var k = first__30319;
var first__30319__$1 = cljs.core.first(seq__30318__$1);
var seq__30318__$2 = cljs.core.next(seq__30318__$1);
var v = first__30319__$1;
var kvs = seq__30318__$2;
var G__30316__$1 = G__30316;
while(true){
var vec__30320 = G__30316__$1;
var seq__30321 = cljs.core.seq(vec__30320);
var first__30322 = cljs.core.first(seq__30321);
var seq__30321__$1 = cljs.core.next(seq__30321);
var k__$1 = first__30322;
var first__30322__$1 = cljs.core.first(seq__30321__$1);
var seq__30321__$2 = cljs.core.next(seq__30321__$1);
var v__$1 = first__30322__$1;
var kvs__$1 = seq__30321__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__30480 = kvs__$1;
G__30316__$1 = G__30480;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq30309){
var G__30310 = cljs.core.first(seq30309);
var seq30309__$1 = cljs.core.next(seq30309);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30310,seq30309__$1);
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
var len__5769__auto___30483 = arguments.length;
var i__5770__auto___30484 = (0);
while(true){
if((i__5770__auto___30484 < len__5769__auto___30483)){
args__5775__auto__.push((arguments[i__5770__auto___30484]));

var G__30485 = (i__5770__auto___30484 + (1));
i__5770__auto___30484 = G__30485;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq30325){
var G__30326 = cljs.core.first(seq30325);
var seq30325__$1 = cljs.core.next(seq30325);
var G__30327 = cljs.core.first(seq30325__$1);
var seq30325__$2 = cljs.core.next(seq30325__$1);
var G__30328 = cljs.core.first(seq30325__$2);
var seq30325__$3 = cljs.core.next(seq30325__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30326,G__30327,G__30328,seq30325__$3);
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
var len__5769__auto___30487 = arguments.length;
var i__5770__auto___30488 = (0);
while(true){
if((i__5770__auto___30488 < len__5769__auto___30487)){
args__5775__auto__.push((arguments[i__5770__auto___30488]));

var G__30490 = (i__5770__auto___30488 + (1));
i__5770__auto___30488 = G__30490;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq30334){
var G__30335 = cljs.core.first(seq30334);
var seq30334__$1 = cljs.core.next(seq30334);
var G__30336 = cljs.core.first(seq30334__$1);
var seq30334__$2 = cljs.core.next(seq30334__$1);
var G__30337 = cljs.core.first(seq30334__$2);
var seq30334__$3 = cljs.core.next(seq30334__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30335,G__30336,G__30337,seq30334__$3);
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
var G__30347 = arguments.length;
switch (G__30347) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___30495 = arguments.length;
var i__5770__auto___30496 = (0);
while(true){
if((i__5770__auto___30496 < len__5769__auto___30495)){
args_arr__5794__auto__.push((arguments[i__5770__auto___30496]));

var G__30497 = (i__5770__auto___30496 + (1));
i__5770__auto___30496 = G__30497;
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
var seq__30349_30499 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__30350_30500 = null;
var count__30351_30501 = (0);
var i__30352_30502 = (0);
while(true){
if((i__30352_30502 < count__30351_30501)){
var k_30503 = chunk__30350_30500.cljs$core$IIndexed$_nth$arity$2(null,i__30352_30502);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_30503,applied_science.js_interop.unchecked_get(x,k_30503)], 0));


var G__30505 = seq__30349_30499;
var G__30506 = chunk__30350_30500;
var G__30507 = count__30351_30501;
var G__30508 = (i__30352_30502 + (1));
seq__30349_30499 = G__30505;
chunk__30350_30500 = G__30506;
count__30351_30501 = G__30507;
i__30352_30502 = G__30508;
continue;
} else {
var temp__5804__auto___30509 = cljs.core.seq(seq__30349_30499);
if(temp__5804__auto___30509){
var seq__30349_30510__$1 = temp__5804__auto___30509;
if(cljs.core.chunked_seq_QMARK_(seq__30349_30510__$1)){
var c__5568__auto___30514 = cljs.core.chunk_first(seq__30349_30510__$1);
var G__30515 = cljs.core.chunk_rest(seq__30349_30510__$1);
var G__30516 = c__5568__auto___30514;
var G__30517 = cljs.core.count(c__5568__auto___30514);
var G__30518 = (0);
seq__30349_30499 = G__30515;
chunk__30350_30500 = G__30516;
count__30351_30501 = G__30517;
i__30352_30502 = G__30518;
continue;
} else {
var k_30519 = cljs.core.first(seq__30349_30510__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_30519,applied_science.js_interop.unchecked_get(x,k_30519)], 0));


var G__30520 = cljs.core.next(seq__30349_30510__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__30349_30499 = G__30520;
chunk__30350_30500 = G__30521;
count__30351_30501 = G__30522;
i__30352_30502 = G__30523;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq30343){
var G__30344 = cljs.core.first(seq30343);
var seq30343__$1 = cljs.core.next(seq30343);
var G__30345 = cljs.core.first(seq30343__$1);
var seq30343__$2 = cljs.core.next(seq30343__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30344,G__30345,seq30343__$2);
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
var G__30357 = array;
G__30357.push(x);

return G__30357;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__30358 = array;
G__30358.unshift(x);

return G__30358;
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
var len__5769__auto___30529 = arguments.length;
var i__5770__auto___30530 = (0);
while(true){
if((i__5770__auto___30530 < len__5769__auto___30529)){
args__5775__auto__.push((arguments[i__5770__auto___30530]));

var G__30531 = (i__5770__auto___30530 + (1));
i__5770__auto___30530 = G__30531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj30362 = obj;
if((!((obj30362 == null)))){
return (obj30362[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq30359){
var G__30360 = cljs.core.first(seq30359);
var seq30359__$1 = cljs.core.next(seq30359);
var G__30361 = cljs.core.first(seq30359__$1);
var seq30359__$2 = cljs.core.next(seq30359__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30360,G__30361,seq30359__$2);
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
return (function (){var obj30363 = obj;
if((!((obj30363 == null)))){
return (obj30363[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__5769__auto___30539 = arguments.length;
var i__5770__auto___30540 = (0);
while(true){
if((i__5770__auto___30540 < len__5769__auto___30539)){
args__5775__auto__.push((arguments[i__5770__auto___30540]));

var G__30541 = (i__5770__auto___30540 + (1));
i__5770__auto___30540 = G__30541;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq30364){
var G__30365 = cljs.core.first(seq30364);
var seq30364__$1 = cljs.core.next(seq30364);
var G__30366 = cljs.core.first(seq30364__$1);
var seq30364__$2 = cljs.core.next(seq30364__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30365,G__30366,seq30364__$2);
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
var len__5769__auto___30542 = arguments.length;
var i__5770__auto___30543 = (0);
while(true){
if((i__5770__auto___30543 < len__5769__auto___30542)){
args__5775__auto__.push((arguments[i__5770__auto___30543]));

var G__30544 = (i__5770__auto___30543 + (1));
i__5770__auto___30543 = G__30544;
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
var seq__30386_30545 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__30387_30546 = null;
var count__30388_30547 = (0);
var i__30389_30548 = (0);
while(true){
if((i__30389_30548 < count__30388_30547)){
var vec__30415_30549 = chunk__30387_30546.cljs$core$IIndexed$_nth$arity$2(null,i__30389_30548);
var k_30550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415_30549,(0),null);
var v_30551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30415_30549,(1),null);
var obj30418_30553 = obj;
var obj30419_30554 = (((!((obj30418_30553 == null))))?obj30418_30553:({}));
(obj30419_30554[applied_science.js_interop.impl.wrap_key(k_30550)] = v_30551);



var G__30555 = seq__30386_30545;
var G__30556 = chunk__30387_30546;
var G__30557 = count__30388_30547;
var G__30558 = (i__30389_30548 + (1));
seq__30386_30545 = G__30555;
chunk__30387_30546 = G__30556;
count__30388_30547 = G__30557;
i__30389_30548 = G__30558;
continue;
} else {
var temp__5804__auto___30559 = cljs.core.seq(seq__30386_30545);
if(temp__5804__auto___30559){
var seq__30386_30560__$1 = temp__5804__auto___30559;
if(cljs.core.chunked_seq_QMARK_(seq__30386_30560__$1)){
var c__5568__auto___30561 = cljs.core.chunk_first(seq__30386_30560__$1);
var G__30562 = cljs.core.chunk_rest(seq__30386_30560__$1);
var G__30563 = c__5568__auto___30561;
var G__30564 = cljs.core.count(c__5568__auto___30561);
var G__30565 = (0);
seq__30386_30545 = G__30562;
chunk__30387_30546 = G__30563;
count__30388_30547 = G__30564;
i__30389_30548 = G__30565;
continue;
} else {
var vec__30423_30566 = cljs.core.first(seq__30386_30560__$1);
var k_30567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30423_30566,(0),null);
var v_30568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30423_30566,(1),null);
var obj30426_30569 = obj;
var obj30427_30570 = (((!((obj30426_30569 == null))))?obj30426_30569:({}));
(obj30427_30570[applied_science.js_interop.impl.wrap_key(k_30567)] = v_30568);



var G__30572 = cljs.core.next(seq__30386_30560__$1);
var G__30573 = null;
var G__30574 = (0);
var G__30575 = (0);
seq__30386_30545 = G__30572;
chunk__30387_30546 = G__30573;
count__30388_30547 = G__30574;
i__30389_30548 = G__30575;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq30378){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30378));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
