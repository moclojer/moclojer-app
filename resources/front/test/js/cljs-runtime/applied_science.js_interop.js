goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57120 = arguments.length;
var i__5770__auto___57121 = (0);
while(true){
if((i__5770__auto___57121 < len__5769__auto___57120)){
args__5775__auto__.push((arguments[i__5770__auto___57121]));

var G__57122 = (i__5770__auto___57121 + (1));
i__5770__auto___57121 = G__57122;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__56940_57124 = keyvals;
var vec__56941_57125 = G__56940_57124;
var seq__56942_57126 = cljs.core.seq(vec__56941_57125);
var first__56943_57127 = cljs.core.first(seq__56942_57126);
var seq__56942_57128__$1 = cljs.core.next(seq__56942_57126);
var k_57129 = first__56943_57127;
var first__56943_57130__$1 = cljs.core.first(seq__56942_57128__$1);
var seq__56942_57131__$2 = cljs.core.next(seq__56942_57128__$1);
var v_57132 = first__56943_57130__$1;
var keyvals_57133__$1 = seq__56942_57131__$2;
var G__56940_57134__$1 = G__56940_57124;
while(true){
var vec__56945_57135 = G__56940_57134__$1;
var seq__56946_57136 = cljs.core.seq(vec__56945_57135);
var first__56947_57137 = cljs.core.first(seq__56946_57136);
var seq__56946_57138__$1 = cljs.core.next(seq__56946_57136);
var k_57139__$1 = first__56947_57137;
var first__56947_57140__$1 = cljs.core.first(seq__56946_57138__$1);
var seq__56946_57141__$2 = cljs.core.next(seq__56946_57138__$1);
var v_57142__$1 = first__56947_57140__$1;
var keyvals_57143__$2 = seq__56946_57141__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_57139__$1)] = v_57142__$1);

if(keyvals_57143__$2){
var G__57144 = keyvals_57143__$2;
G__56940_57134__$1 = G__57144;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq56932){
var G__56933 = cljs.core.first(seq56932);
var seq56932__$1 = cljs.core.next(seq56932);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56933,seq56932__$1);
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
var G__56953 = arguments.length;
switch (G__56953) {
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
var obj56956 = obj;
if((!((obj56956 == null)))){
return (obj56956[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj56965 = obj;
if((!((obj56965 == null)))){
return (obj56965[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__29330__auto__ = (function (){var obj56966 = obj;
if((!((obj56966 == null)))){
return (obj56966[applied_science.js_interop.impl.wrap_key(k)]);
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
var G__56968 = arguments.length;
switch (G__56968) {
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
var obj56971 = self__.obj;
if((!((obj56971 == null)))){
return (obj56971[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__29330__auto__ = (function (){var obj56972 = self__.obj;
if((!((obj56972 == null)))){
return (obj56972[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__5769__auto___57179 = arguments.length;
var i__5770__auto___57180 = (0);
while(true){
if((i__5770__auto___57180 < len__5769__auto___57179)){
args__5775__auto__.push((arguments[i__5770__auto___57180]));

var G__57181 = (i__5770__auto___57180 + (1));
i__5770__auto___57180 = G__57181;
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
var G__56981 = keyvals;
var vec__56982 = G__56981;
var seq__56983 = cljs.core.seq(vec__56982);
var first__56984 = cljs.core.first(seq__56983);
var seq__56983__$1 = cljs.core.next(seq__56983);
var k = first__56984;
var first__56984__$1 = cljs.core.first(seq__56983__$1);
var seq__56983__$2 = cljs.core.next(seq__56983__$1);
var v = first__56984__$1;
var kvs = seq__56983__$2;
var G__56981__$1 = G__56981;
while(true){
var vec__56985 = G__56981__$1;
var seq__56986 = cljs.core.seq(vec__56985);
var first__56987 = cljs.core.first(seq__56986);
var seq__56986__$1 = cljs.core.next(seq__56986);
var k__$1 = first__56987;
var first__56987__$1 = cljs.core.first(seq__56986__$1);
var seq__56986__$2 = cljs.core.next(seq__56986__$1);
var v__$1 = first__56987__$1;
var kvs__$1 = seq__56986__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__57196 = kvs__$1;
G__56981__$1 = G__57196;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq56973){
var G__56974 = cljs.core.first(seq56973);
var seq56973__$1 = cljs.core.next(seq56973);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56974,seq56973__$1);
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
var len__5769__auto___57207 = arguments.length;
var i__5770__auto___57208 = (0);
while(true){
if((i__5770__auto___57208 < len__5769__auto___57207)){
args__5775__auto__.push((arguments[i__5770__auto___57208]));

var G__57209 = (i__5770__auto___57208 + (1));
i__5770__auto___57208 = G__57209;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq56988){
var G__56989 = cljs.core.first(seq56988);
var seq56988__$1 = cljs.core.next(seq56988);
var G__56990 = cljs.core.first(seq56988__$1);
var seq56988__$2 = cljs.core.next(seq56988__$1);
var G__56991 = cljs.core.first(seq56988__$2);
var seq56988__$3 = cljs.core.next(seq56988__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56989,G__56990,G__56991,seq56988__$3);
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
var len__5769__auto___57211 = arguments.length;
var i__5770__auto___57212 = (0);
while(true){
if((i__5770__auto___57212 < len__5769__auto___57211)){
args__5775__auto__.push((arguments[i__5770__auto___57212]));

var G__57213 = (i__5770__auto___57212 + (1));
i__5770__auto___57212 = G__57213;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq56992){
var G__56993 = cljs.core.first(seq56992);
var seq56992__$1 = cljs.core.next(seq56992);
var G__56994 = cljs.core.first(seq56992__$1);
var seq56992__$2 = cljs.core.next(seq56992__$1);
var G__56995 = cljs.core.first(seq56992__$2);
var seq56992__$3 = cljs.core.next(seq56992__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56993,G__56994,G__56995,seq56992__$3);
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
var G__57007 = arguments.length;
switch (G__57007) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___57215 = arguments.length;
var i__5770__auto___57216 = (0);
while(true){
if((i__5770__auto___57216 < len__5769__auto___57215)){
args_arr__5794__auto__.push((arguments[i__5770__auto___57216]));

var G__57217 = (i__5770__auto___57216 + (1));
i__5770__auto___57216 = G__57217;
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
var seq__57008_57219 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__57009_57220 = null;
var count__57010_57221 = (0);
var i__57011_57222 = (0);
while(true){
if((i__57011_57222 < count__57010_57221)){
var k_57223 = chunk__57009_57220.cljs$core$IIndexed$_nth$arity$2(null,i__57011_57222);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_57223,applied_science.js_interop.unchecked_get(x,k_57223)], 0));


var G__57224 = seq__57008_57219;
var G__57225 = chunk__57009_57220;
var G__57226 = count__57010_57221;
var G__57227 = (i__57011_57222 + (1));
seq__57008_57219 = G__57224;
chunk__57009_57220 = G__57225;
count__57010_57221 = G__57226;
i__57011_57222 = G__57227;
continue;
} else {
var temp__5804__auto___57228 = cljs.core.seq(seq__57008_57219);
if(temp__5804__auto___57228){
var seq__57008_57229__$1 = temp__5804__auto___57228;
if(cljs.core.chunked_seq_QMARK_(seq__57008_57229__$1)){
var c__5568__auto___57231 = cljs.core.chunk_first(seq__57008_57229__$1);
var G__57232 = cljs.core.chunk_rest(seq__57008_57229__$1);
var G__57233 = c__5568__auto___57231;
var G__57234 = cljs.core.count(c__5568__auto___57231);
var G__57235 = (0);
seq__57008_57219 = G__57232;
chunk__57009_57220 = G__57233;
count__57010_57221 = G__57234;
i__57011_57222 = G__57235;
continue;
} else {
var k_57236 = cljs.core.first(seq__57008_57229__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_57236,applied_science.js_interop.unchecked_get(x,k_57236)], 0));


var G__57237 = cljs.core.next(seq__57008_57229__$1);
var G__57238 = null;
var G__57239 = (0);
var G__57240 = (0);
seq__57008_57219 = G__57237;
chunk__57009_57220 = G__57238;
count__57010_57221 = G__57239;
i__57011_57222 = G__57240;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq57004){
var G__57005 = cljs.core.first(seq57004);
var seq57004__$1 = cljs.core.next(seq57004);
var G__57006 = cljs.core.first(seq57004__$1);
var seq57004__$2 = cljs.core.next(seq57004__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57005,G__57006,seq57004__$2);
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
var G__57021 = array;
G__57021.push(x);

return G__57021;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__57022 = array;
G__57022.unshift(x);

return G__57022;
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
var len__5769__auto___57242 = arguments.length;
var i__5770__auto___57243 = (0);
while(true){
if((i__5770__auto___57243 < len__5769__auto___57242)){
args__5775__auto__.push((arguments[i__5770__auto___57243]));

var G__57244 = (i__5770__auto___57243 + (1));
i__5770__auto___57243 = G__57244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj57033 = obj;
if((!((obj57033 == null)))){
return (obj57033[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq57024){
var G__57025 = cljs.core.first(seq57024);
var seq57024__$1 = cljs.core.next(seq57024);
var G__57026 = cljs.core.first(seq57024__$1);
var seq57024__$2 = cljs.core.next(seq57024__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57025,G__57026,seq57024__$2);
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
return (function (){var obj57041 = obj;
if((!((obj57041 == null)))){
return (obj57041[applied_science.js_interop.impl.wrap_key(k)]);
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
var len__5769__auto___57245 = arguments.length;
var i__5770__auto___57246 = (0);
while(true){
if((i__5770__auto___57246 < len__5769__auto___57245)){
args__5775__auto__.push((arguments[i__5770__auto___57246]));

var G__57247 = (i__5770__auto___57246 + (1));
i__5770__auto___57246 = G__57247;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq57046){
var G__57047 = cljs.core.first(seq57046);
var seq57046__$1 = cljs.core.next(seq57046);
var G__57048 = cljs.core.first(seq57046__$1);
var seq57046__$2 = cljs.core.next(seq57046__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57047,G__57048,seq57046__$2);
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
var len__5769__auto___57248 = arguments.length;
var i__5770__auto___57249 = (0);
while(true){
if((i__5770__auto___57249 < len__5769__auto___57248)){
args__5775__auto__.push((arguments[i__5770__auto___57249]));

var G__57250 = (i__5770__auto___57249 + (1));
i__5770__auto___57249 = G__57250;
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
var seq__57054_57251 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__57055_57252 = null;
var count__57056_57253 = (0);
var i__57057_57254 = (0);
while(true){
if((i__57057_57254 < count__57056_57253)){
var vec__57086_57255 = chunk__57055_57252.cljs$core$IIndexed$_nth$arity$2(null,i__57057_57254);
var k_57256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57086_57255,(0),null);
var v_57257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57086_57255,(1),null);
var obj57089_57258 = obj;
var obj57090_57259 = (((!((obj57089_57258 == null))))?obj57089_57258:({}));
(obj57090_57259[applied_science.js_interop.impl.wrap_key(k_57256)] = v_57257);



var G__57260 = seq__57054_57251;
var G__57261 = chunk__57055_57252;
var G__57262 = count__57056_57253;
var G__57263 = (i__57057_57254 + (1));
seq__57054_57251 = G__57260;
chunk__57055_57252 = G__57261;
count__57056_57253 = G__57262;
i__57057_57254 = G__57263;
continue;
} else {
var temp__5804__auto___57264 = cljs.core.seq(seq__57054_57251);
if(temp__5804__auto___57264){
var seq__57054_57265__$1 = temp__5804__auto___57264;
if(cljs.core.chunked_seq_QMARK_(seq__57054_57265__$1)){
var c__5568__auto___57266 = cljs.core.chunk_first(seq__57054_57265__$1);
var G__57267 = cljs.core.chunk_rest(seq__57054_57265__$1);
var G__57268 = c__5568__auto___57266;
var G__57269 = cljs.core.count(c__5568__auto___57266);
var G__57270 = (0);
seq__57054_57251 = G__57267;
chunk__57055_57252 = G__57268;
count__57056_57253 = G__57269;
i__57057_57254 = G__57270;
continue;
} else {
var vec__57093_57271 = cljs.core.first(seq__57054_57265__$1);
var k_57272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57093_57271,(0),null);
var v_57273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57093_57271,(1),null);
var obj57096_57274 = obj;
var obj57097_57275 = (((!((obj57096_57274 == null))))?obj57096_57274:({}));
(obj57097_57275[applied_science.js_interop.impl.wrap_key(k_57272)] = v_57273);



var G__57276 = cljs.core.next(seq__57054_57265__$1);
var G__57277 = null;
var G__57278 = (0);
var G__57279 = (0);
seq__57054_57251 = G__57276;
chunk__57055_57252 = G__57277;
count__57056_57253 = G__57278;
i__57057_57254 = G__57279;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq57051){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57051));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
