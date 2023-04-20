goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44061 = arguments.length;
switch (G__44061) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44062 = (function (f,blockable,meta44063){
this.f = f;
this.blockable = blockable;
this.meta44063 = meta44063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44064,meta44063__$1){
var self__ = this;
var _44064__$1 = this;
return (new cljs.core.async.t_cljs$core$async44062(self__.f,self__.blockable,meta44063__$1));
}));

(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44064){
var self__ = this;
var _44064__$1 = this;
return self__.meta44063;
}));

(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44063","meta44063",-1517061400,null)], null);
}));

(cljs.core.async.t_cljs$core$async44062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44062");

(cljs.core.async.t_cljs$core$async44062.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44062.
 */
cljs.core.async.__GT_t_cljs$core$async44062 = (function cljs$core$async$__GT_t_cljs$core$async44062(f__$1,blockable__$1,meta44063){
return (new cljs.core.async.t_cljs$core$async44062(f__$1,blockable__$1,meta44063));
});

}

return (new cljs.core.async.t_cljs$core$async44062(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44075 = arguments.length;
switch (G__44075) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44098 = arguments.length;
switch (G__44098) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44143 = arguments.length;
switch (G__44143) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47389 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47389) : fn1.call(null,val_47389));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47389) : fn1.call(null,val_47389));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44160 = arguments.length;
switch (G__44160) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___47395 = n;
var x_47396 = (0);
while(true){
if((x_47396 < n__5636__auto___47395)){
(a[x_47396] = x_47396);

var G__47397 = (x_47396 + (1));
x_47396 = G__47397;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44173 = (function (flag,meta44174){
this.flag = flag;
this.meta44174 = meta44174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44175,meta44174__$1){
var self__ = this;
var _44175__$1 = this;
return (new cljs.core.async.t_cljs$core$async44173(self__.flag,meta44174__$1));
}));

(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44175){
var self__ = this;
var _44175__$1 = this;
return self__.meta44174;
}));

(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44174","meta44174",349765811,null)], null);
}));

(cljs.core.async.t_cljs$core$async44173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44173");

(cljs.core.async.t_cljs$core$async44173.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44173.
 */
cljs.core.async.__GT_t_cljs$core$async44173 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44173(flag__$1,meta44174){
return (new cljs.core.async.t_cljs$core$async44173(flag__$1,meta44174));
});

}

return (new cljs.core.async.t_cljs$core$async44173(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44208 = (function (flag,cb,meta44209){
this.flag = flag;
this.cb = cb;
this.meta44209 = meta44209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44210,meta44209__$1){
var self__ = this;
var _44210__$1 = this;
return (new cljs.core.async.t_cljs$core$async44208(self__.flag,self__.cb,meta44209__$1));
}));

(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44210){
var self__ = this;
var _44210__$1 = this;
return self__.meta44209;
}));

(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44209","meta44209",-15100189,null)], null);
}));

(cljs.core.async.t_cljs$core$async44208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44208");

(cljs.core.async.t_cljs$core$async44208.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44208.
 */
cljs.core.async.__GT_t_cljs$core$async44208 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44208(flag__$1,cb__$1,meta44209){
return (new cljs.core.async.t_cljs$core$async44208(flag__$1,cb__$1,meta44209));
});

}

return (new cljs.core.async.t_cljs$core$async44208(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44215_SHARP_){
var G__44221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44215_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44221) : fret.call(null,G__44221));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44216_SHARP_){
var G__44222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44216_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44222) : fret.call(null,G__44222));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47421 = (i + (1));
i = G__47421;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47438 = arguments.length;
var i__5770__auto___47439 = (0);
while(true){
if((i__5770__auto___47439 < len__5769__auto___47438)){
args__5775__auto__.push((arguments[i__5770__auto___47439]));

var G__47440 = (i__5770__auto___47439 + (1));
i__5770__auto___47439 = G__47440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44242){
var map__44244 = p__44242;
var map__44244__$1 = cljs.core.__destructure_map(map__44244);
var opts = map__44244__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44232){
var G__44233 = cljs.core.first(seq44232);
var seq44232__$1 = cljs.core.next(seq44232);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44233,seq44232__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44248 = arguments.length;
switch (G__44248) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33655__auto___47450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44272){
var state_val_44273 = (state_44272[(1)]);
if((state_val_44273 === (7))){
var inst_44268 = (state_44272[(2)]);
var state_44272__$1 = state_44272;
var statearr_44277_47458 = state_44272__$1;
(statearr_44277_47458[(2)] = inst_44268);

(statearr_44277_47458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (1))){
var state_44272__$1 = state_44272;
var statearr_44279_47459 = state_44272__$1;
(statearr_44279_47459[(2)] = null);

(statearr_44279_47459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (4))){
var inst_44251 = (state_44272[(7)]);
var inst_44251__$1 = (state_44272[(2)]);
var inst_44252 = (inst_44251__$1 == null);
var state_44272__$1 = (function (){var statearr_44280 = state_44272;
(statearr_44280[(7)] = inst_44251__$1);

return statearr_44280;
})();
if(cljs.core.truth_(inst_44252)){
var statearr_44282_47461 = state_44272__$1;
(statearr_44282_47461[(1)] = (5));

} else {
var statearr_44283_47462 = state_44272__$1;
(statearr_44283_47462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (13))){
var state_44272__$1 = state_44272;
var statearr_44284_47463 = state_44272__$1;
(statearr_44284_47463[(2)] = null);

(statearr_44284_47463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (6))){
var inst_44251 = (state_44272[(7)]);
var state_44272__$1 = state_44272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44272__$1,(11),to,inst_44251);
} else {
if((state_val_44273 === (3))){
var inst_44270 = (state_44272[(2)]);
var state_44272__$1 = state_44272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44272__$1,inst_44270);
} else {
if((state_val_44273 === (12))){
var state_44272__$1 = state_44272;
var statearr_44288_47467 = state_44272__$1;
(statearr_44288_47467[(2)] = null);

(statearr_44288_47467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (2))){
var state_44272__$1 = state_44272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44272__$1,(4),from);
} else {
if((state_val_44273 === (11))){
var inst_44261 = (state_44272[(2)]);
var state_44272__$1 = state_44272;
if(cljs.core.truth_(inst_44261)){
var statearr_44289_47471 = state_44272__$1;
(statearr_44289_47471[(1)] = (12));

} else {
var statearr_44290_47473 = state_44272__$1;
(statearr_44290_47473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (9))){
var state_44272__$1 = state_44272;
var statearr_44291_47477 = state_44272__$1;
(statearr_44291_47477[(2)] = null);

(statearr_44291_47477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (5))){
var state_44272__$1 = state_44272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44293_47478 = state_44272__$1;
(statearr_44293_47478[(1)] = (8));

} else {
var statearr_44294_47479 = state_44272__$1;
(statearr_44294_47479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (14))){
var inst_44266 = (state_44272[(2)]);
var state_44272__$1 = state_44272;
var statearr_44295_47496 = state_44272__$1;
(statearr_44295_47496[(2)] = inst_44266);

(statearr_44295_47496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (10))){
var inst_44258 = (state_44272[(2)]);
var state_44272__$1 = state_44272;
var statearr_44296_47497 = state_44272__$1;
(statearr_44296_47497[(2)] = inst_44258);

(statearr_44296_47497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44273 === (8))){
var inst_44255 = cljs.core.async.close_BANG_(to);
var state_44272__$1 = state_44272;
var statearr_44297_47498 = state_44272__$1;
(statearr_44297_47498[(2)] = inst_44255);

(statearr_44297_47498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_44298 = [null,null,null,null,null,null,null,null];
(statearr_44298[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_44298[(1)] = (1));

return statearr_44298;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_44272){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44272);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44299){var ex__33424__auto__ = e44299;
var statearr_44300_47499 = state_44272;
(statearr_44300_47499[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44272[(4)]))){
var statearr_44301_47500 = state_44272;
(statearr_44301_47500[(1)] = cljs.core.first((state_44272[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47501 = state_44272;
state_44272 = G__47501;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_44272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_44272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44302 = f__33656__auto__();
(statearr_44302[(6)] = c__33655__auto___47450);

return statearr_44302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44303){
var vec__44304 = p__44303;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44304,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44304,(1),null);
var job = vec__44304;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33655__auto___47505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44311){
var state_val_44312 = (state_44311[(1)]);
if((state_val_44312 === (1))){
var state_44311__$1 = state_44311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44311__$1,(2),res,v);
} else {
if((state_val_44312 === (2))){
var inst_44308 = (state_44311[(2)]);
var inst_44309 = cljs.core.async.close_BANG_(res);
var state_44311__$1 = (function (){var statearr_44328 = state_44311;
(statearr_44328[(7)] = inst_44308);

return statearr_44328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44311__$1,inst_44309);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_44330 = [null,null,null,null,null,null,null,null];
(statearr_44330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_44330[(1)] = (1));

return statearr_44330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_44311){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44311);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44331){var ex__33424__auto__ = e44331;
var statearr_44332_47511 = state_44311;
(statearr_44332_47511[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44311[(4)]))){
var statearr_44333_47515 = state_44311;
(statearr_44333_47515[(1)] = cljs.core.first((state_44311[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47516 = state_44311;
state_44311 = G__47516;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_44311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_44311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44334 = f__33656__auto__();
(statearr_44334[(6)] = c__33655__auto___47505);

return statearr_44334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44340){
var vec__44342 = p__44340;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44342,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44342,(1),null);
var job = vec__44342;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___47518 = n;
var __47519 = (0);
while(true){
if((__47519 < n__5636__auto___47518)){
var G__44345_47529 = type;
var G__44345_47530__$1 = (((G__44345_47529 instanceof cljs.core.Keyword))?G__44345_47529.fqn:null);
switch (G__44345_47530__$1) {
case "compute":
var c__33655__auto___47532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47519,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = ((function (__47519,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function (state_44358){
var state_val_44359 = (state_44358[(1)]);
if((state_val_44359 === (1))){
var state_44358__$1 = state_44358;
var statearr_44361_47534 = state_44358__$1;
(statearr_44361_47534[(2)] = null);

(statearr_44361_47534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (2))){
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44358__$1,(4),jobs);
} else {
if((state_val_44359 === (3))){
var inst_44356 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44358__$1,inst_44356);
} else {
if((state_val_44359 === (4))){
var inst_44348 = (state_44358[(2)]);
var inst_44349 = process__$1(inst_44348);
var state_44358__$1 = state_44358;
if(cljs.core.truth_(inst_44349)){
var statearr_44370_47549 = state_44358__$1;
(statearr_44370_47549[(1)] = (5));

} else {
var statearr_44371_47550 = state_44358__$1;
(statearr_44371_47550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (5))){
var state_44358__$1 = state_44358;
var statearr_44372_47551 = state_44358__$1;
(statearr_44372_47551[(2)] = null);

(statearr_44372_47551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (6))){
var state_44358__$1 = state_44358;
var statearr_44373_47554 = state_44358__$1;
(statearr_44373_47554[(2)] = null);

(statearr_44373_47554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (7))){
var inst_44354 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44374_47555 = state_44358__$1;
(statearr_44374_47555[(2)] = inst_44354);

(statearr_44374_47555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47519,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
;
return ((function (__47519,switch__33420__auto__,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_44375 = [null,null,null,null,null,null,null];
(statearr_44375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_44375[(1)] = (1));

return statearr_44375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_44358){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44358);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44376){var ex__33424__auto__ = e44376;
var statearr_44377_47563 = state_44358;
(statearr_44377_47563[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44358[(4)]))){
var statearr_44378_47605 = state_44358;
(statearr_44378_47605[(1)] = cljs.core.first((state_44358[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47606 = state_44358;
state_44358 = G__47606;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_44358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_44358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
;})(__47519,switch__33420__auto__,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
})();
var state__33657__auto__ = (function (){var statearr_44379 = f__33656__auto__();
(statearr_44379[(6)] = c__33655__auto___47532);

return statearr_44379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__47519,c__33655__auto___47532,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
);


break;
case "async":
var c__33655__auto___47607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47519,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = ((function (__47519,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function (state_44392){
var state_val_44393 = (state_44392[(1)]);
if((state_val_44393 === (1))){
var state_44392__$1 = state_44392;
var statearr_44397_47608 = state_44392__$1;
(statearr_44397_47608[(2)] = null);

(statearr_44397_47608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44393 === (2))){
var state_44392__$1 = state_44392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44392__$1,(4),jobs);
} else {
if((state_val_44393 === (3))){
var inst_44390 = (state_44392[(2)]);
var state_44392__$1 = state_44392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44392__$1,inst_44390);
} else {
if((state_val_44393 === (4))){
var inst_44382 = (state_44392[(2)]);
var inst_44383 = async(inst_44382);
var state_44392__$1 = state_44392;
if(cljs.core.truth_(inst_44383)){
var statearr_44406_47609 = state_44392__$1;
(statearr_44406_47609[(1)] = (5));

} else {
var statearr_44407_47610 = state_44392__$1;
(statearr_44407_47610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44393 === (5))){
var state_44392__$1 = state_44392;
var statearr_44408_47611 = state_44392__$1;
(statearr_44408_47611[(2)] = null);

(statearr_44408_47611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44393 === (6))){
var state_44392__$1 = state_44392;
var statearr_44409_47612 = state_44392__$1;
(statearr_44409_47612[(2)] = null);

(statearr_44409_47612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44393 === (7))){
var inst_44388 = (state_44392[(2)]);
var state_44392__$1 = state_44392;
var statearr_44410_47613 = state_44392__$1;
(statearr_44410_47613[(2)] = inst_44388);

(statearr_44410_47613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47519,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
;
return ((function (__47519,switch__33420__auto__,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_44411 = [null,null,null,null,null,null,null];
(statearr_44411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_44411[(1)] = (1));

return statearr_44411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_44392){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44392);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44412){var ex__33424__auto__ = e44412;
var statearr_44413_47615 = state_44392;
(statearr_44413_47615[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44392[(4)]))){
var statearr_44414_47616 = state_44392;
(statearr_44414_47616[(1)] = cljs.core.first((state_44392[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47618 = state_44392;
state_44392 = G__47618;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_44392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_44392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
;})(__47519,switch__33420__auto__,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
})();
var state__33657__auto__ = (function (){var statearr_44415 = f__33656__auto__();
(statearr_44415[(6)] = c__33655__auto___47607);

return statearr_44415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__47519,c__33655__auto___47607,G__44345_47529,G__44345_47530__$1,n__5636__auto___47518,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44345_47530__$1)].join('')));

}

var G__47619 = (__47519 + (1));
__47519 = G__47619;
continue;
} else {
}
break;
}

var c__33655__auto___47620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44437){
var state_val_44438 = (state_44437[(1)]);
if((state_val_44438 === (7))){
var inst_44433 = (state_44437[(2)]);
var state_44437__$1 = state_44437;
var statearr_44439_47621 = state_44437__$1;
(statearr_44439_47621[(2)] = inst_44433);

(statearr_44439_47621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44438 === (1))){
var state_44437__$1 = state_44437;
var statearr_44440_47622 = state_44437__$1;
(statearr_44440_47622[(2)] = null);

(statearr_44440_47622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44438 === (4))){
var inst_44418 = (state_44437[(7)]);
var inst_44418__$1 = (state_44437[(2)]);
var inst_44419 = (inst_44418__$1 == null);
var state_44437__$1 = (function (){var statearr_44441 = state_44437;
(statearr_44441[(7)] = inst_44418__$1);

return statearr_44441;
})();
if(cljs.core.truth_(inst_44419)){
var statearr_44442_47623 = state_44437__$1;
(statearr_44442_47623[(1)] = (5));

} else {
var statearr_44443_47624 = state_44437__$1;
(statearr_44443_47624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44438 === (6))){
var inst_44423 = (state_44437[(8)]);
var inst_44418 = (state_44437[(7)]);
var inst_44423__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44425 = [inst_44418,inst_44423__$1];
var inst_44426 = (new cljs.core.PersistentVector(null,2,(5),inst_44424,inst_44425,null));
var state_44437__$1 = (function (){var statearr_44445 = state_44437;
(statearr_44445[(8)] = inst_44423__$1);

return statearr_44445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44437__$1,(8),jobs,inst_44426);
} else {
if((state_val_44438 === (3))){
var inst_44435 = (state_44437[(2)]);
var state_44437__$1 = state_44437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44437__$1,inst_44435);
} else {
if((state_val_44438 === (2))){
var state_44437__$1 = state_44437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44437__$1,(4),from);
} else {
if((state_val_44438 === (9))){
var inst_44430 = (state_44437[(2)]);
var state_44437__$1 = (function (){var statearr_44446 = state_44437;
(statearr_44446[(9)] = inst_44430);

return statearr_44446;
})();
var statearr_44447_47647 = state_44437__$1;
(statearr_44447_47647[(2)] = null);

(statearr_44447_47647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44438 === (5))){
var inst_44421 = cljs.core.async.close_BANG_(jobs);
var state_44437__$1 = state_44437;
var statearr_44448_47648 = state_44437__$1;
(statearr_44448_47648[(2)] = inst_44421);

(statearr_44448_47648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44438 === (8))){
var inst_44423 = (state_44437[(8)]);
var inst_44428 = (state_44437[(2)]);
var state_44437__$1 = (function (){var statearr_44449 = state_44437;
(statearr_44449[(10)] = inst_44428);

return statearr_44449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44437__$1,(9),results,inst_44423);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_44451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44451[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_44451[(1)] = (1));

return statearr_44451;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_44437){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44437);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44467){var ex__33424__auto__ = e44467;
var statearr_44468_47653 = state_44437;
(statearr_44468_47653[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44437[(4)]))){
var statearr_44469_47654 = state_44437;
(statearr_44469_47654[(1)] = cljs.core.first((state_44437[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47658 = state_44437;
state_44437 = G__47658;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_44437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_44437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44470 = f__33656__auto__();
(statearr_44470[(6)] = c__33655__auto___47620);

return statearr_44470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44508){
var state_val_44510 = (state_44508[(1)]);
if((state_val_44510 === (7))){
var inst_44504 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
var statearr_44518_47659 = state_44508__$1;
(statearr_44518_47659[(2)] = inst_44504);

(statearr_44518_47659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (20))){
var state_44508__$1 = state_44508;
var statearr_44519_47666 = state_44508__$1;
(statearr_44519_47666[(2)] = null);

(statearr_44519_47666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (1))){
var state_44508__$1 = state_44508;
var statearr_44520_47667 = state_44508__$1;
(statearr_44520_47667[(2)] = null);

(statearr_44520_47667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (4))){
var inst_44473 = (state_44508[(7)]);
var inst_44473__$1 = (state_44508[(2)]);
var inst_44474 = (inst_44473__$1 == null);
var state_44508__$1 = (function (){var statearr_44521 = state_44508;
(statearr_44521[(7)] = inst_44473__$1);

return statearr_44521;
})();
if(cljs.core.truth_(inst_44474)){
var statearr_44522_47668 = state_44508__$1;
(statearr_44522_47668[(1)] = (5));

} else {
var statearr_44523_47669 = state_44508__$1;
(statearr_44523_47669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (15))){
var inst_44486 = (state_44508[(8)]);
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44508__$1,(18),to,inst_44486);
} else {
if((state_val_44510 === (21))){
var inst_44499 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
var statearr_44524_47670 = state_44508__$1;
(statearr_44524_47670[(2)] = inst_44499);

(statearr_44524_47670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (13))){
var inst_44501 = (state_44508[(2)]);
var state_44508__$1 = (function (){var statearr_44529 = state_44508;
(statearr_44529[(9)] = inst_44501);

return statearr_44529;
})();
var statearr_44533_47671 = state_44508__$1;
(statearr_44533_47671[(2)] = null);

(statearr_44533_47671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (6))){
var inst_44473 = (state_44508[(7)]);
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44508__$1,(11),inst_44473);
} else {
if((state_val_44510 === (17))){
var inst_44494 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
if(cljs.core.truth_(inst_44494)){
var statearr_44534_47672 = state_44508__$1;
(statearr_44534_47672[(1)] = (19));

} else {
var statearr_44535_47673 = state_44508__$1;
(statearr_44535_47673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (3))){
var inst_44506 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44508__$1,inst_44506);
} else {
if((state_val_44510 === (12))){
var inst_44483 = (state_44508[(10)]);
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44508__$1,(14),inst_44483);
} else {
if((state_val_44510 === (2))){
var state_44508__$1 = state_44508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44508__$1,(4),results);
} else {
if((state_val_44510 === (19))){
var state_44508__$1 = state_44508;
var statearr_44538_47674 = state_44508__$1;
(statearr_44538_47674[(2)] = null);

(statearr_44538_47674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (11))){
var inst_44483 = (state_44508[(2)]);
var state_44508__$1 = (function (){var statearr_44539 = state_44508;
(statearr_44539[(10)] = inst_44483);

return statearr_44539;
})();
var statearr_44540_47675 = state_44508__$1;
(statearr_44540_47675[(2)] = null);

(statearr_44540_47675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (9))){
var state_44508__$1 = state_44508;
var statearr_44541_47685 = state_44508__$1;
(statearr_44541_47685[(2)] = null);

(statearr_44541_47685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (5))){
var state_44508__$1 = state_44508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44542_47686 = state_44508__$1;
(statearr_44542_47686[(1)] = (8));

} else {
var statearr_44543_47687 = state_44508__$1;
(statearr_44543_47687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (14))){
var inst_44486 = (state_44508[(8)]);
var inst_44488 = (state_44508[(11)]);
var inst_44486__$1 = (state_44508[(2)]);
var inst_44487 = (inst_44486__$1 == null);
var inst_44488__$1 = cljs.core.not(inst_44487);
var state_44508__$1 = (function (){var statearr_44544 = state_44508;
(statearr_44544[(8)] = inst_44486__$1);

(statearr_44544[(11)] = inst_44488__$1);

return statearr_44544;
})();
if(inst_44488__$1){
var statearr_44553_47688 = state_44508__$1;
(statearr_44553_47688[(1)] = (15));

} else {
var statearr_44554_47689 = state_44508__$1;
(statearr_44554_47689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (16))){
var inst_44488 = (state_44508[(11)]);
var state_44508__$1 = state_44508;
var statearr_44555_47696 = state_44508__$1;
(statearr_44555_47696[(2)] = inst_44488);

(statearr_44555_47696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (10))){
var inst_44480 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
var statearr_44556_47697 = state_44508__$1;
(statearr_44556_47697[(2)] = inst_44480);

(statearr_44556_47697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (18))){
var inst_44491 = (state_44508[(2)]);
var state_44508__$1 = state_44508;
var statearr_44557_47704 = state_44508__$1;
(statearr_44557_47704[(2)] = inst_44491);

(statearr_44557_47704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44510 === (8))){
var inst_44477 = cljs.core.async.close_BANG_(to);
var state_44508__$1 = state_44508;
var statearr_44558_47705 = state_44508__$1;
(statearr_44558_47705[(2)] = inst_44477);

(statearr_44558_47705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_44559 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44559[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_44559[(1)] = (1));

return statearr_44559;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_44508){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44508);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44560){var ex__33424__auto__ = e44560;
var statearr_44561_47706 = state_44508;
(statearr_44561_47706[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44508[(4)]))){
var statearr_44564_47707 = state_44508;
(statearr_44564_47707[(1)] = cljs.core.first((state_44508[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47708 = state_44508;
state_44508 = G__47708;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_44508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_44508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44567 = f__33656__auto__();
(statearr_44567[(6)] = c__33655__auto__);

return statearr_44567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44569 = arguments.length;
switch (G__44569) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44579 = arguments.length;
switch (G__44579) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44592 = arguments.length;
switch (G__44592) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33655__auto___47716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44629){
var state_val_44630 = (state_44629[(1)]);
if((state_val_44630 === (7))){
var inst_44625 = (state_44629[(2)]);
var state_44629__$1 = state_44629;
var statearr_44633_47717 = state_44629__$1;
(statearr_44633_47717[(2)] = inst_44625);

(statearr_44633_47717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (1))){
var state_44629__$1 = state_44629;
var statearr_44635_47718 = state_44629__$1;
(statearr_44635_47718[(2)] = null);

(statearr_44635_47718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (4))){
var inst_44605 = (state_44629[(7)]);
var inst_44605__$1 = (state_44629[(2)]);
var inst_44607 = (inst_44605__$1 == null);
var state_44629__$1 = (function (){var statearr_44639 = state_44629;
(statearr_44639[(7)] = inst_44605__$1);

return statearr_44639;
})();
if(cljs.core.truth_(inst_44607)){
var statearr_44640_47719 = state_44629__$1;
(statearr_44640_47719[(1)] = (5));

} else {
var statearr_44641_47720 = state_44629__$1;
(statearr_44641_47720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (13))){
var state_44629__$1 = state_44629;
var statearr_44652_47721 = state_44629__$1;
(statearr_44652_47721[(2)] = null);

(statearr_44652_47721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (6))){
var inst_44605 = (state_44629[(7)]);
var inst_44612 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44605) : p.call(null,inst_44605));
var state_44629__$1 = state_44629;
if(cljs.core.truth_(inst_44612)){
var statearr_44656_47747 = state_44629__$1;
(statearr_44656_47747[(1)] = (9));

} else {
var statearr_44657_47748 = state_44629__$1;
(statearr_44657_47748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (3))){
var inst_44627 = (state_44629[(2)]);
var state_44629__$1 = state_44629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44629__$1,inst_44627);
} else {
if((state_val_44630 === (12))){
var state_44629__$1 = state_44629;
var statearr_44658_47754 = state_44629__$1;
(statearr_44658_47754[(2)] = null);

(statearr_44658_47754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (2))){
var state_44629__$1 = state_44629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44629__$1,(4),ch);
} else {
if((state_val_44630 === (11))){
var inst_44605 = (state_44629[(7)]);
var inst_44616 = (state_44629[(2)]);
var state_44629__$1 = state_44629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44629__$1,(8),inst_44616,inst_44605);
} else {
if((state_val_44630 === (9))){
var state_44629__$1 = state_44629;
var statearr_44659_47762 = state_44629__$1;
(statearr_44659_47762[(2)] = tc);

(statearr_44659_47762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (5))){
var inst_44609 = cljs.core.async.close_BANG_(tc);
var inst_44610 = cljs.core.async.close_BANG_(fc);
var state_44629__$1 = (function (){var statearr_44660 = state_44629;
(statearr_44660[(8)] = inst_44609);

return statearr_44660;
})();
var statearr_44662_47763 = state_44629__$1;
(statearr_44662_47763[(2)] = inst_44610);

(statearr_44662_47763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (14))){
var inst_44623 = (state_44629[(2)]);
var state_44629__$1 = state_44629;
var statearr_44665_47767 = state_44629__$1;
(statearr_44665_47767[(2)] = inst_44623);

(statearr_44665_47767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (10))){
var state_44629__$1 = state_44629;
var statearr_44666_47768 = state_44629__$1;
(statearr_44666_47768[(2)] = fc);

(statearr_44666_47768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44630 === (8))){
var inst_44618 = (state_44629[(2)]);
var state_44629__$1 = state_44629;
if(cljs.core.truth_(inst_44618)){
var statearr_44667_47769 = state_44629__$1;
(statearr_44667_47769[(1)] = (12));

} else {
var statearr_44668_47770 = state_44629__$1;
(statearr_44668_47770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_44669 = [null,null,null,null,null,null,null,null,null];
(statearr_44669[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_44669[(1)] = (1));

return statearr_44669;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_44629){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44629);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44670){var ex__33424__auto__ = e44670;
var statearr_44671_47771 = state_44629;
(statearr_44671_47771[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44629[(4)]))){
var statearr_44672_47772 = state_44629;
(statearr_44672_47772[(1)] = cljs.core.first((state_44629[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47773 = state_44629;
state_44629 = G__47773;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_44629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_44629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44675 = f__33656__auto__();
(statearr_44675[(6)] = c__33655__auto___47716);

return statearr_44675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44725){
var state_val_44726 = (state_44725[(1)]);
if((state_val_44726 === (7))){
var inst_44721 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
var statearr_44733_47774 = state_44725__$1;
(statearr_44733_47774[(2)] = inst_44721);

(statearr_44733_47774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (1))){
var inst_44702 = init;
var inst_44703 = inst_44702;
var state_44725__$1 = (function (){var statearr_44734 = state_44725;
(statearr_44734[(7)] = inst_44703);

return statearr_44734;
})();
var statearr_44735_47779 = state_44725__$1;
(statearr_44735_47779[(2)] = null);

(statearr_44735_47779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (4))){
var inst_44706 = (state_44725[(8)]);
var inst_44706__$1 = (state_44725[(2)]);
var inst_44707 = (inst_44706__$1 == null);
var state_44725__$1 = (function (){var statearr_44737 = state_44725;
(statearr_44737[(8)] = inst_44706__$1);

return statearr_44737;
})();
if(cljs.core.truth_(inst_44707)){
var statearr_44740_47785 = state_44725__$1;
(statearr_44740_47785[(1)] = (5));

} else {
var statearr_44741_47787 = state_44725__$1;
(statearr_44741_47787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (6))){
var inst_44712 = (state_44725[(9)]);
var inst_44706 = (state_44725[(8)]);
var inst_44703 = (state_44725[(7)]);
var inst_44712__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44703,inst_44706) : f.call(null,inst_44703,inst_44706));
var inst_44713 = cljs.core.reduced_QMARK_(inst_44712__$1);
var state_44725__$1 = (function (){var statearr_44747 = state_44725;
(statearr_44747[(9)] = inst_44712__$1);

return statearr_44747;
})();
if(inst_44713){
var statearr_44766_47796 = state_44725__$1;
(statearr_44766_47796[(1)] = (8));

} else {
var statearr_44767_47797 = state_44725__$1;
(statearr_44767_47797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (3))){
var inst_44723 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44725__$1,inst_44723);
} else {
if((state_val_44726 === (2))){
var state_44725__$1 = state_44725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44725__$1,(4),ch);
} else {
if((state_val_44726 === (9))){
var inst_44712 = (state_44725[(9)]);
var inst_44703 = inst_44712;
var state_44725__$1 = (function (){var statearr_44768 = state_44725;
(statearr_44768[(7)] = inst_44703);

return statearr_44768;
})();
var statearr_44769_47798 = state_44725__$1;
(statearr_44769_47798[(2)] = null);

(statearr_44769_47798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (5))){
var inst_44703 = (state_44725[(7)]);
var state_44725__$1 = state_44725;
var statearr_44770_47799 = state_44725__$1;
(statearr_44770_47799[(2)] = inst_44703);

(statearr_44770_47799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (10))){
var inst_44719 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
var statearr_44771_47802 = state_44725__$1;
(statearr_44771_47802[(2)] = inst_44719);

(statearr_44771_47802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (8))){
var inst_44712 = (state_44725[(9)]);
var inst_44715 = cljs.core.deref(inst_44712);
var state_44725__$1 = state_44725;
var statearr_44772_47804 = state_44725__$1;
(statearr_44772_47804[(2)] = inst_44715);

(statearr_44772_47804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33421__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33421__auto____0 = (function (){
var statearr_44773 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44773[(0)] = cljs$core$async$reduce_$_state_machine__33421__auto__);

(statearr_44773[(1)] = (1));

return statearr_44773;
});
var cljs$core$async$reduce_$_state_machine__33421__auto____1 = (function (state_44725){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44725);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44774){var ex__33424__auto__ = e44774;
var statearr_44775_47805 = state_44725;
(statearr_44775_47805[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44725[(4)]))){
var statearr_44776_47806 = state_44725;
(statearr_44776_47806[(1)] = cljs.core.first((state_44725[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47807 = state_44725;
state_44725 = G__47807;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33421__auto__ = function(state_44725){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33421__auto____1.call(this,state_44725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33421__auto____0;
cljs$core$async$reduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33421__auto____1;
return cljs$core$async$reduce_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44777 = f__33656__auto__();
(statearr_44777[(6)] = c__33655__auto__);

return statearr_44777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44791){
var state_val_44792 = (state_44791[(1)]);
if((state_val_44792 === (1))){
var inst_44778 = cljs.core.async.reduce(f__$1,init,ch);
var state_44791__$1 = state_44791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44791__$1,(2),inst_44778);
} else {
if((state_val_44792 === (2))){
var inst_44780 = (state_44791[(2)]);
var inst_44781 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44780) : f__$1.call(null,inst_44780));
var state_44791__$1 = state_44791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44791__$1,inst_44781);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33421__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33421__auto____0 = (function (){
var statearr_44795 = [null,null,null,null,null,null,null];
(statearr_44795[(0)] = cljs$core$async$transduce_$_state_machine__33421__auto__);

(statearr_44795[(1)] = (1));

return statearr_44795;
});
var cljs$core$async$transduce_$_state_machine__33421__auto____1 = (function (state_44791){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44791);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44800){var ex__33424__auto__ = e44800;
var statearr_44801_47808 = state_44791;
(statearr_44801_47808[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44791[(4)]))){
var statearr_44802_47809 = state_44791;
(statearr_44802_47809[(1)] = cljs.core.first((state_44791[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47810 = state_44791;
state_44791 = G__47810;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33421__auto__ = function(state_44791){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33421__auto____1.call(this,state_44791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33421__auto____0;
cljs$core$async$transduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33421__auto____1;
return cljs$core$async$transduce_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44803 = f__33656__auto__();
(statearr_44803[(6)] = c__33655__auto__);

return statearr_44803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44805 = arguments.length;
switch (G__44805) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_44845){
var state_val_44846 = (state_44845[(1)]);
if((state_val_44846 === (7))){
var inst_44827 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44847_47816 = state_44845__$1;
(statearr_44847_47816[(2)] = inst_44827);

(statearr_44847_47816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (1))){
var inst_44821 = cljs.core.seq(coll);
var inst_44822 = inst_44821;
var state_44845__$1 = (function (){var statearr_44848 = state_44845;
(statearr_44848[(7)] = inst_44822);

return statearr_44848;
})();
var statearr_44849_47817 = state_44845__$1;
(statearr_44849_47817[(2)] = null);

(statearr_44849_47817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (4))){
var inst_44822 = (state_44845[(7)]);
var inst_44825 = cljs.core.first(inst_44822);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44845__$1,(7),ch,inst_44825);
} else {
if((state_val_44846 === (13))){
var inst_44839 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44867_47818 = state_44845__$1;
(statearr_44867_47818[(2)] = inst_44839);

(statearr_44867_47818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (6))){
var inst_44830 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
if(cljs.core.truth_(inst_44830)){
var statearr_44868_47819 = state_44845__$1;
(statearr_44868_47819[(1)] = (8));

} else {
var statearr_44869_47820 = state_44845__$1;
(statearr_44869_47820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (3))){
var inst_44843 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44845__$1,inst_44843);
} else {
if((state_val_44846 === (12))){
var state_44845__$1 = state_44845;
var statearr_44870_47831 = state_44845__$1;
(statearr_44870_47831[(2)] = null);

(statearr_44870_47831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (2))){
var inst_44822 = (state_44845[(7)]);
var state_44845__$1 = state_44845;
if(cljs.core.truth_(inst_44822)){
var statearr_44871_47832 = state_44845__$1;
(statearr_44871_47832[(1)] = (4));

} else {
var statearr_44872_47833 = state_44845__$1;
(statearr_44872_47833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (11))){
var inst_44836 = cljs.core.async.close_BANG_(ch);
var state_44845__$1 = state_44845;
var statearr_44873_47838 = state_44845__$1;
(statearr_44873_47838[(2)] = inst_44836);

(statearr_44873_47838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (9))){
var state_44845__$1 = state_44845;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44874_47841 = state_44845__$1;
(statearr_44874_47841[(1)] = (11));

} else {
var statearr_44875_47844 = state_44845__$1;
(statearr_44875_47844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (5))){
var inst_44822 = (state_44845[(7)]);
var state_44845__$1 = state_44845;
var statearr_44876_47847 = state_44845__$1;
(statearr_44876_47847[(2)] = inst_44822);

(statearr_44876_47847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (10))){
var inst_44841 = (state_44845[(2)]);
var state_44845__$1 = state_44845;
var statearr_44878_47848 = state_44845__$1;
(statearr_44878_47848[(2)] = inst_44841);

(statearr_44878_47848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44846 === (8))){
var inst_44822 = (state_44845[(7)]);
var inst_44832 = cljs.core.next(inst_44822);
var inst_44822__$1 = inst_44832;
var state_44845__$1 = (function (){var statearr_44882 = state_44845;
(statearr_44882[(7)] = inst_44822__$1);

return statearr_44882;
})();
var statearr_44883_47849 = state_44845__$1;
(statearr_44883_47849[(2)] = null);

(statearr_44883_47849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_44886 = [null,null,null,null,null,null,null,null];
(statearr_44886[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_44886[(1)] = (1));

return statearr_44886;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_44845){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_44845);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e44887){var ex__33424__auto__ = e44887;
var statearr_44888_47850 = state_44845;
(statearr_44888_47850[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_44845[(4)]))){
var statearr_44889_47851 = state_44845;
(statearr_44889_47851[(1)] = cljs.core.first((state_44845[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47854 = state_44845;
state_44845 = G__47854;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_44845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_44845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_44904 = f__33656__auto__();
(statearr_44904[(6)] = c__33655__auto__);

return statearr_44904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44908 = arguments.length;
switch (G__44908) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47863 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47863(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47865 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47865(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47867 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47867(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47872 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47872(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44959 = (function (ch,cs,meta44960){
this.ch = ch;
this.cs = cs;
this.meta44960 = meta44960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44961,meta44960__$1){
var self__ = this;
var _44961__$1 = this;
return (new cljs.core.async.t_cljs$core$async44959(self__.ch,self__.cs,meta44960__$1));
}));

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44961){
var self__ = this;
var _44961__$1 = this;
return self__.meta44960;
}));

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44959.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44960","meta44960",404881052,null)], null);
}));

(cljs.core.async.t_cljs$core$async44959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44959");

(cljs.core.async.t_cljs$core$async44959.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44959.
 */
cljs.core.async.__GT_t_cljs$core$async44959 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44959(ch__$1,cs__$1,meta44960){
return (new cljs.core.async.t_cljs$core$async44959(ch__$1,cs__$1,meta44960));
});

}

return (new cljs.core.async.t_cljs$core$async44959(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33655__auto___47882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_45178){
var state_val_45179 = (state_45178[(1)]);
if((state_val_45179 === (7))){
var inst_45174 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45187_47883 = state_45178__$1;
(statearr_45187_47883[(2)] = inst_45174);

(statearr_45187_47883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (20))){
var inst_45035 = (state_45178[(7)]);
var inst_45052 = cljs.core.first(inst_45035);
var inst_45053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45052,(0),null);
var inst_45058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45052,(1),null);
var state_45178__$1 = (function (){var statearr_45188 = state_45178;
(statearr_45188[(8)] = inst_45053);

return statearr_45188;
})();
if(cljs.core.truth_(inst_45058)){
var statearr_45189_47884 = state_45178__$1;
(statearr_45189_47884[(1)] = (22));

} else {
var statearr_45191_47885 = state_45178__$1;
(statearr_45191_47885[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (27))){
var inst_44984 = (state_45178[(9)]);
var inst_45123 = (state_45178[(10)]);
var inst_45121 = (state_45178[(11)]);
var inst_45128 = (state_45178[(12)]);
var inst_45128__$1 = cljs.core._nth(inst_45121,inst_45123);
var inst_45129 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45128__$1,inst_44984,done);
var state_45178__$1 = (function (){var statearr_45193 = state_45178;
(statearr_45193[(12)] = inst_45128__$1);

return statearr_45193;
})();
if(cljs.core.truth_(inst_45129)){
var statearr_45197_47886 = state_45178__$1;
(statearr_45197_47886[(1)] = (30));

} else {
var statearr_45198_47887 = state_45178__$1;
(statearr_45198_47887[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (1))){
var state_45178__$1 = state_45178;
var statearr_45199_47912 = state_45178__$1;
(statearr_45199_47912[(2)] = null);

(statearr_45199_47912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (24))){
var inst_45035 = (state_45178[(7)]);
var inst_45063 = (state_45178[(2)]);
var inst_45064 = cljs.core.next(inst_45035);
var inst_44999 = inst_45064;
var inst_45000 = null;
var inst_45001 = (0);
var inst_45002 = (0);
var state_45178__$1 = (function (){var statearr_45201 = state_45178;
(statearr_45201[(13)] = inst_45000);

(statearr_45201[(14)] = inst_44999);

(statearr_45201[(15)] = inst_45001);

(statearr_45201[(16)] = inst_45063);

(statearr_45201[(17)] = inst_45002);

return statearr_45201;
})();
var statearr_45203_47920 = state_45178__$1;
(statearr_45203_47920[(2)] = null);

(statearr_45203_47920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (39))){
var state_45178__$1 = state_45178;
var statearr_45207_47924 = state_45178__$1;
(statearr_45207_47924[(2)] = null);

(statearr_45207_47924[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (4))){
var inst_44984 = (state_45178[(9)]);
var inst_44984__$1 = (state_45178[(2)]);
var inst_44989 = (inst_44984__$1 == null);
var state_45178__$1 = (function (){var statearr_45208 = state_45178;
(statearr_45208[(9)] = inst_44984__$1);

return statearr_45208;
})();
if(cljs.core.truth_(inst_44989)){
var statearr_45209_47928 = state_45178__$1;
(statearr_45209_47928[(1)] = (5));

} else {
var statearr_45210_47929 = state_45178__$1;
(statearr_45210_47929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (15))){
var inst_45000 = (state_45178[(13)]);
var inst_44999 = (state_45178[(14)]);
var inst_45001 = (state_45178[(15)]);
var inst_45002 = (state_45178[(17)]);
var inst_45027 = (state_45178[(2)]);
var inst_45028 = (inst_45002 + (1));
var tmp45204 = inst_45000;
var tmp45205 = inst_44999;
var tmp45206 = inst_45001;
var inst_44999__$1 = tmp45205;
var inst_45000__$1 = tmp45204;
var inst_45001__$1 = tmp45206;
var inst_45002__$1 = inst_45028;
var state_45178__$1 = (function (){var statearr_45212 = state_45178;
(statearr_45212[(13)] = inst_45000__$1);

(statearr_45212[(18)] = inst_45027);

(statearr_45212[(14)] = inst_44999__$1);

(statearr_45212[(15)] = inst_45001__$1);

(statearr_45212[(17)] = inst_45002__$1);

return statearr_45212;
})();
var statearr_45217_47933 = state_45178__$1;
(statearr_45217_47933[(2)] = null);

(statearr_45217_47933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (21))){
var inst_45068 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45221_47938 = state_45178__$1;
(statearr_45221_47938[(2)] = inst_45068);

(statearr_45221_47938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (31))){
var inst_45128 = (state_45178[(12)]);
var inst_45132 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45128);
var state_45178__$1 = state_45178;
var statearr_45237_47942 = state_45178__$1;
(statearr_45237_47942[(2)] = inst_45132);

(statearr_45237_47942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (32))){
var inst_45120 = (state_45178[(19)]);
var inst_45123 = (state_45178[(10)]);
var inst_45121 = (state_45178[(11)]);
var inst_45122 = (state_45178[(20)]);
var inst_45134 = (state_45178[(2)]);
var inst_45135 = (inst_45123 + (1));
var tmp45218 = inst_45120;
var tmp45219 = inst_45121;
var tmp45220 = inst_45122;
var inst_45120__$1 = tmp45218;
var inst_45121__$1 = tmp45219;
var inst_45122__$1 = tmp45220;
var inst_45123__$1 = inst_45135;
var state_45178__$1 = (function (){var statearr_45239 = state_45178;
(statearr_45239[(19)] = inst_45120__$1);

(statearr_45239[(10)] = inst_45123__$1);

(statearr_45239[(11)] = inst_45121__$1);

(statearr_45239[(20)] = inst_45122__$1);

(statearr_45239[(21)] = inst_45134);

return statearr_45239;
})();
var statearr_45247_47947 = state_45178__$1;
(statearr_45247_47947[(2)] = null);

(statearr_45247_47947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (40))){
var inst_45147 = (state_45178[(22)]);
var inst_45151 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45147);
var state_45178__$1 = state_45178;
var statearr_45251_47951 = state_45178__$1;
(statearr_45251_47951[(2)] = inst_45151);

(statearr_45251_47951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (33))){
var inst_45138 = (state_45178[(23)]);
var inst_45140 = cljs.core.chunked_seq_QMARK_(inst_45138);
var state_45178__$1 = state_45178;
if(inst_45140){
var statearr_45252_47952 = state_45178__$1;
(statearr_45252_47952[(1)] = (36));

} else {
var statearr_45256_47953 = state_45178__$1;
(statearr_45256_47953[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (13))){
var inst_45021 = (state_45178[(24)]);
var inst_45024 = cljs.core.async.close_BANG_(inst_45021);
var state_45178__$1 = state_45178;
var statearr_45260_47954 = state_45178__$1;
(statearr_45260_47954[(2)] = inst_45024);

(statearr_45260_47954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (22))){
var inst_45053 = (state_45178[(8)]);
var inst_45060 = cljs.core.async.close_BANG_(inst_45053);
var state_45178__$1 = state_45178;
var statearr_45265_47955 = state_45178__$1;
(statearr_45265_47955[(2)] = inst_45060);

(statearr_45265_47955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (36))){
var inst_45138 = (state_45178[(23)]);
var inst_45142 = cljs.core.chunk_first(inst_45138);
var inst_45143 = cljs.core.chunk_rest(inst_45138);
var inst_45144 = cljs.core.count(inst_45142);
var inst_45120 = inst_45143;
var inst_45121 = inst_45142;
var inst_45122 = inst_45144;
var inst_45123 = (0);
var state_45178__$1 = (function (){var statearr_45266 = state_45178;
(statearr_45266[(19)] = inst_45120);

(statearr_45266[(10)] = inst_45123);

(statearr_45266[(11)] = inst_45121);

(statearr_45266[(20)] = inst_45122);

return statearr_45266;
})();
var statearr_45267_47956 = state_45178__$1;
(statearr_45267_47956[(2)] = null);

(statearr_45267_47956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (41))){
var inst_45138 = (state_45178[(23)]);
var inst_45153 = (state_45178[(2)]);
var inst_45154 = cljs.core.next(inst_45138);
var inst_45120 = inst_45154;
var inst_45121 = null;
var inst_45122 = (0);
var inst_45123 = (0);
var state_45178__$1 = (function (){var statearr_45272 = state_45178;
(statearr_45272[(19)] = inst_45120);

(statearr_45272[(25)] = inst_45153);

(statearr_45272[(10)] = inst_45123);

(statearr_45272[(11)] = inst_45121);

(statearr_45272[(20)] = inst_45122);

return statearr_45272;
})();
var statearr_45273_47971 = state_45178__$1;
(statearr_45273_47971[(2)] = null);

(statearr_45273_47971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (43))){
var state_45178__$1 = state_45178;
var statearr_45276_47975 = state_45178__$1;
(statearr_45276_47975[(2)] = null);

(statearr_45276_47975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (29))){
var inst_45162 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45277_47979 = state_45178__$1;
(statearr_45277_47979[(2)] = inst_45162);

(statearr_45277_47979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (44))){
var inst_45171 = (state_45178[(2)]);
var state_45178__$1 = (function (){var statearr_45278 = state_45178;
(statearr_45278[(26)] = inst_45171);

return statearr_45278;
})();
var statearr_45279_47983 = state_45178__$1;
(statearr_45279_47983[(2)] = null);

(statearr_45279_47983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (6))){
var inst_45080 = (state_45178[(27)]);
var inst_45079 = cljs.core.deref(cs);
var inst_45080__$1 = cljs.core.keys(inst_45079);
var inst_45113 = cljs.core.count(inst_45080__$1);
var inst_45114 = cljs.core.reset_BANG_(dctr,inst_45113);
var inst_45119 = cljs.core.seq(inst_45080__$1);
var inst_45120 = inst_45119;
var inst_45121 = null;
var inst_45122 = (0);
var inst_45123 = (0);
var state_45178__$1 = (function (){var statearr_45281 = state_45178;
(statearr_45281[(19)] = inst_45120);

(statearr_45281[(10)] = inst_45123);

(statearr_45281[(11)] = inst_45121);

(statearr_45281[(20)] = inst_45122);

(statearr_45281[(27)] = inst_45080__$1);

(statearr_45281[(28)] = inst_45114);

return statearr_45281;
})();
var statearr_45282_47984 = state_45178__$1;
(statearr_45282_47984[(2)] = null);

(statearr_45282_47984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (28))){
var inst_45120 = (state_45178[(19)]);
var inst_45138 = (state_45178[(23)]);
var inst_45138__$1 = cljs.core.seq(inst_45120);
var state_45178__$1 = (function (){var statearr_45287 = state_45178;
(statearr_45287[(23)] = inst_45138__$1);

return statearr_45287;
})();
if(inst_45138__$1){
var statearr_45288_47985 = state_45178__$1;
(statearr_45288_47985[(1)] = (33));

} else {
var statearr_45289_47986 = state_45178__$1;
(statearr_45289_47986[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (25))){
var inst_45123 = (state_45178[(10)]);
var inst_45122 = (state_45178[(20)]);
var inst_45125 = (inst_45123 < inst_45122);
var inst_45126 = inst_45125;
var state_45178__$1 = state_45178;
if(cljs.core.truth_(inst_45126)){
var statearr_45291_47987 = state_45178__$1;
(statearr_45291_47987[(1)] = (27));

} else {
var statearr_45293_47988 = state_45178__$1;
(statearr_45293_47988[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (34))){
var state_45178__$1 = state_45178;
var statearr_45294_47994 = state_45178__$1;
(statearr_45294_47994[(2)] = null);

(statearr_45294_47994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (17))){
var state_45178__$1 = state_45178;
var statearr_45295_47995 = state_45178__$1;
(statearr_45295_47995[(2)] = null);

(statearr_45295_47995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (3))){
var inst_45176 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45178__$1,inst_45176);
} else {
if((state_val_45179 === (12))){
var inst_45073 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45302_47998 = state_45178__$1;
(statearr_45302_47998[(2)] = inst_45073);

(statearr_45302_47998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (2))){
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45178__$1,(4),ch);
} else {
if((state_val_45179 === (23))){
var state_45178__$1 = state_45178;
var statearr_45303_48000 = state_45178__$1;
(statearr_45303_48000[(2)] = null);

(statearr_45303_48000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (35))){
var inst_45160 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45304_48001 = state_45178__$1;
(statearr_45304_48001[(2)] = inst_45160);

(statearr_45304_48001[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (19))){
var inst_45035 = (state_45178[(7)]);
var inst_45043 = cljs.core.chunk_first(inst_45035);
var inst_45044 = cljs.core.chunk_rest(inst_45035);
var inst_45045 = cljs.core.count(inst_45043);
var inst_44999 = inst_45044;
var inst_45000 = inst_45043;
var inst_45001 = inst_45045;
var inst_45002 = (0);
var state_45178__$1 = (function (){var statearr_45306 = state_45178;
(statearr_45306[(13)] = inst_45000);

(statearr_45306[(14)] = inst_44999);

(statearr_45306[(15)] = inst_45001);

(statearr_45306[(17)] = inst_45002);

return statearr_45306;
})();
var statearr_45307_48006 = state_45178__$1;
(statearr_45307_48006[(2)] = null);

(statearr_45307_48006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (11))){
var inst_44999 = (state_45178[(14)]);
var inst_45035 = (state_45178[(7)]);
var inst_45035__$1 = cljs.core.seq(inst_44999);
var state_45178__$1 = (function (){var statearr_45308 = state_45178;
(statearr_45308[(7)] = inst_45035__$1);

return statearr_45308;
})();
if(inst_45035__$1){
var statearr_45309_48015 = state_45178__$1;
(statearr_45309_48015[(1)] = (16));

} else {
var statearr_45310_48016 = state_45178__$1;
(statearr_45310_48016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (9))){
var inst_45075 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45315_48017 = state_45178__$1;
(statearr_45315_48017[(2)] = inst_45075);

(statearr_45315_48017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (5))){
var inst_44996 = cljs.core.deref(cs);
var inst_44998 = cljs.core.seq(inst_44996);
var inst_44999 = inst_44998;
var inst_45000 = null;
var inst_45001 = (0);
var inst_45002 = (0);
var state_45178__$1 = (function (){var statearr_45316 = state_45178;
(statearr_45316[(13)] = inst_45000);

(statearr_45316[(14)] = inst_44999);

(statearr_45316[(15)] = inst_45001);

(statearr_45316[(17)] = inst_45002);

return statearr_45316;
})();
var statearr_45317_48019 = state_45178__$1;
(statearr_45317_48019[(2)] = null);

(statearr_45317_48019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (14))){
var state_45178__$1 = state_45178;
var statearr_45320_48023 = state_45178__$1;
(statearr_45320_48023[(2)] = null);

(statearr_45320_48023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (45))){
var inst_45168 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45321_48024 = state_45178__$1;
(statearr_45321_48024[(2)] = inst_45168);

(statearr_45321_48024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (26))){
var inst_45080 = (state_45178[(27)]);
var inst_45164 = (state_45178[(2)]);
var inst_45165 = cljs.core.seq(inst_45080);
var state_45178__$1 = (function (){var statearr_45323 = state_45178;
(statearr_45323[(29)] = inst_45164);

return statearr_45323;
})();
if(inst_45165){
var statearr_45324_48025 = state_45178__$1;
(statearr_45324_48025[(1)] = (42));

} else {
var statearr_45325_48026 = state_45178__$1;
(statearr_45325_48026[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (16))){
var inst_45035 = (state_45178[(7)]);
var inst_45037 = cljs.core.chunked_seq_QMARK_(inst_45035);
var state_45178__$1 = state_45178;
if(inst_45037){
var statearr_45326_48035 = state_45178__$1;
(statearr_45326_48035[(1)] = (19));

} else {
var statearr_45327_48036 = state_45178__$1;
(statearr_45327_48036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (38))){
var inst_45157 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45329_48044 = state_45178__$1;
(statearr_45329_48044[(2)] = inst_45157);

(statearr_45329_48044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (30))){
var state_45178__$1 = state_45178;
var statearr_45330_48045 = state_45178__$1;
(statearr_45330_48045[(2)] = null);

(statearr_45330_48045[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (10))){
var inst_45000 = (state_45178[(13)]);
var inst_45002 = (state_45178[(17)]);
var inst_45020 = cljs.core._nth(inst_45000,inst_45002);
var inst_45021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45020,(0),null);
var inst_45022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45020,(1),null);
var state_45178__$1 = (function (){var statearr_45331 = state_45178;
(statearr_45331[(24)] = inst_45021);

return statearr_45331;
})();
if(cljs.core.truth_(inst_45022)){
var statearr_45332_48049 = state_45178__$1;
(statearr_45332_48049[(1)] = (13));

} else {
var statearr_45333_48050 = state_45178__$1;
(statearr_45333_48050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (18))){
var inst_45071 = (state_45178[(2)]);
var state_45178__$1 = state_45178;
var statearr_45334_48055 = state_45178__$1;
(statearr_45334_48055[(2)] = inst_45071);

(statearr_45334_48055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (42))){
var state_45178__$1 = state_45178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45178__$1,(45),dchan);
} else {
if((state_val_45179 === (37))){
var inst_44984 = (state_45178[(9)]);
var inst_45138 = (state_45178[(23)]);
var inst_45147 = (state_45178[(22)]);
var inst_45147__$1 = cljs.core.first(inst_45138);
var inst_45148 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45147__$1,inst_44984,done);
var state_45178__$1 = (function (){var statearr_45337 = state_45178;
(statearr_45337[(22)] = inst_45147__$1);

return statearr_45337;
})();
if(cljs.core.truth_(inst_45148)){
var statearr_45338_48056 = state_45178__$1;
(statearr_45338_48056[(1)] = (39));

} else {
var statearr_45340_48057 = state_45178__$1;
(statearr_45340_48057[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45179 === (8))){
var inst_45001 = (state_45178[(15)]);
var inst_45002 = (state_45178[(17)]);
var inst_45014 = (inst_45002 < inst_45001);
var inst_45015 = inst_45014;
var state_45178__$1 = state_45178;
if(cljs.core.truth_(inst_45015)){
var statearr_45344_48058 = state_45178__$1;
(statearr_45344_48058[(1)] = (10));

} else {
var statearr_45345_48059 = state_45178__$1;
(statearr_45345_48059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33421__auto__ = null;
var cljs$core$async$mult_$_state_machine__33421__auto____0 = (function (){
var statearr_45350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45350[(0)] = cljs$core$async$mult_$_state_machine__33421__auto__);

(statearr_45350[(1)] = (1));

return statearr_45350;
});
var cljs$core$async$mult_$_state_machine__33421__auto____1 = (function (state_45178){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_45178);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e45351){var ex__33424__auto__ = e45351;
var statearr_45353_48066 = state_45178;
(statearr_45353_48066[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_45178[(4)]))){
var statearr_45354_48067 = state_45178;
(statearr_45354_48067[(1)] = cljs.core.first((state_45178[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48068 = state_45178;
state_45178 = G__48068;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33421__auto__ = function(state_45178){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33421__auto____1.call(this,state_45178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33421__auto____0;
cljs$core$async$mult_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33421__auto____1;
return cljs$core$async$mult_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_45355 = f__33656__auto__();
(statearr_45355[(6)] = c__33655__auto___47882);

return statearr_45355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45360 = arguments.length;
switch (G__45360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48071 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48071(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48073 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48073(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48077 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48077(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48078 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48078(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48141 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48141(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48142 = arguments.length;
var i__5770__auto___48143 = (0);
while(true){
if((i__5770__auto___48143 < len__5769__auto___48142)){
args__5775__auto__.push((arguments[i__5770__auto___48143]));

var G__48145 = (i__5770__auto___48143 + (1));
i__5770__auto___48143 = G__48145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45407){
var map__45408 = p__45407;
var map__45408__$1 = cljs.core.__destructure_map(map__45408);
var opts = map__45408__$1;
var statearr_45409_48150 = state;
(statearr_45409_48150[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45410_48151 = state;
(statearr_45410_48151[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_45425_48152 = state;
(statearr_45425_48152[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45402){
var G__45403 = cljs.core.first(seq45402);
var seq45402__$1 = cljs.core.next(seq45402);
var G__45404 = cljs.core.first(seq45402__$1);
var seq45402__$2 = cljs.core.next(seq45402__$1);
var G__45405 = cljs.core.first(seq45402__$2);
var seq45402__$3 = cljs.core.next(seq45402__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45403,G__45404,G__45405,seq45402__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45437 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45438){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45438 = meta45438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45439,meta45438__$1){
var self__ = this;
var _45439__$1 = this;
return (new cljs.core.async.t_cljs$core$async45437(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45438__$1));
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45439){
var self__ = this;
var _45439__$1 = this;
return self__.meta45438;
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45437.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45438","meta45438",-1052652666,null)], null);
}));

(cljs.core.async.t_cljs$core$async45437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45437");

(cljs.core.async.t_cljs$core$async45437.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45437.
 */
cljs.core.async.__GT_t_cljs$core$async45437 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45437(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45438){
return (new cljs.core.async.t_cljs$core$async45437(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45438));
});

}

return (new cljs.core.async.t_cljs$core$async45437(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___48177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_45536){
var state_val_45537 = (state_45536[(1)]);
if((state_val_45537 === (7))){
var inst_45495 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
if(cljs.core.truth_(inst_45495)){
var statearr_45538_48178 = state_45536__$1;
(statearr_45538_48178[(1)] = (8));

} else {
var statearr_45539_48179 = state_45536__$1;
(statearr_45539_48179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (20))){
var inst_45488 = (state_45536[(7)]);
var state_45536__$1 = state_45536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45536__$1,(23),out,inst_45488);
} else {
if((state_val_45537 === (1))){
var inst_45470 = calc_state();
var inst_45471 = cljs.core.__destructure_map(inst_45470);
var inst_45472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45471,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45471,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45471,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45475 = inst_45470;
var state_45536__$1 = (function (){var statearr_45552 = state_45536;
(statearr_45552[(8)] = inst_45475);

(statearr_45552[(9)] = inst_45474);

(statearr_45552[(10)] = inst_45473);

(statearr_45552[(11)] = inst_45472);

return statearr_45552;
})();
var statearr_45553_48196 = state_45536__$1;
(statearr_45553_48196[(2)] = null);

(statearr_45553_48196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (24))){
var inst_45478 = (state_45536[(12)]);
var inst_45475 = inst_45478;
var state_45536__$1 = (function (){var statearr_45557 = state_45536;
(statearr_45557[(8)] = inst_45475);

return statearr_45557;
})();
var statearr_45558_48197 = state_45536__$1;
(statearr_45558_48197[(2)] = null);

(statearr_45558_48197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (4))){
var inst_45490 = (state_45536[(13)]);
var inst_45488 = (state_45536[(7)]);
var inst_45487 = (state_45536[(2)]);
var inst_45488__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45487,(0),null);
var inst_45489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45487,(1),null);
var inst_45490__$1 = (inst_45488__$1 == null);
var state_45536__$1 = (function (){var statearr_45567 = state_45536;
(statearr_45567[(13)] = inst_45490__$1);

(statearr_45567[(14)] = inst_45489);

(statearr_45567[(7)] = inst_45488__$1);

return statearr_45567;
})();
if(cljs.core.truth_(inst_45490__$1)){
var statearr_45568_48200 = state_45536__$1;
(statearr_45568_48200[(1)] = (5));

} else {
var statearr_45570_48201 = state_45536__$1;
(statearr_45570_48201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (15))){
var inst_45479 = (state_45536[(15)]);
var inst_45510 = (state_45536[(16)]);
var inst_45510__$1 = cljs.core.empty_QMARK_(inst_45479);
var state_45536__$1 = (function (){var statearr_45574 = state_45536;
(statearr_45574[(16)] = inst_45510__$1);

return statearr_45574;
})();
if(inst_45510__$1){
var statearr_45578_48203 = state_45536__$1;
(statearr_45578_48203[(1)] = (17));

} else {
var statearr_45579_48204 = state_45536__$1;
(statearr_45579_48204[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (21))){
var inst_45478 = (state_45536[(12)]);
var inst_45475 = inst_45478;
var state_45536__$1 = (function (){var statearr_45580 = state_45536;
(statearr_45580[(8)] = inst_45475);

return statearr_45580;
})();
var statearr_45581_48205 = state_45536__$1;
(statearr_45581_48205[(2)] = null);

(statearr_45581_48205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (13))){
var inst_45503 = (state_45536[(2)]);
var inst_45504 = calc_state();
var inst_45475 = inst_45504;
var state_45536__$1 = (function (){var statearr_45586 = state_45536;
(statearr_45586[(8)] = inst_45475);

(statearr_45586[(17)] = inst_45503);

return statearr_45586;
})();
var statearr_45587_48207 = state_45536__$1;
(statearr_45587_48207[(2)] = null);

(statearr_45587_48207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (22))){
var inst_45530 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
var statearr_45588_48215 = state_45536__$1;
(statearr_45588_48215[(2)] = inst_45530);

(statearr_45588_48215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (6))){
var inst_45489 = (state_45536[(14)]);
var inst_45493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45489,change);
var state_45536__$1 = state_45536;
var statearr_45590_48220 = state_45536__$1;
(statearr_45590_48220[(2)] = inst_45493);

(statearr_45590_48220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (25))){
var state_45536__$1 = state_45536;
var statearr_45591_48221 = state_45536__$1;
(statearr_45591_48221[(2)] = null);

(statearr_45591_48221[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (17))){
var inst_45489 = (state_45536[(14)]);
var inst_45480 = (state_45536[(18)]);
var inst_45512 = (inst_45480.cljs$core$IFn$_invoke$arity$1 ? inst_45480.cljs$core$IFn$_invoke$arity$1(inst_45489) : inst_45480.call(null,inst_45489));
var inst_45513 = cljs.core.not(inst_45512);
var state_45536__$1 = state_45536;
var statearr_45592_48223 = state_45536__$1;
(statearr_45592_48223[(2)] = inst_45513);

(statearr_45592_48223[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (3))){
var inst_45534 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45536__$1,inst_45534);
} else {
if((state_val_45537 === (12))){
var state_45536__$1 = state_45536;
var statearr_45593_48224 = state_45536__$1;
(statearr_45593_48224[(2)] = null);

(statearr_45593_48224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (2))){
var inst_45475 = (state_45536[(8)]);
var inst_45478 = (state_45536[(12)]);
var inst_45478__$1 = cljs.core.__destructure_map(inst_45475);
var inst_45479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45478__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45478__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45478__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45536__$1 = (function (){var statearr_45605 = state_45536;
(statearr_45605[(15)] = inst_45479);

(statearr_45605[(12)] = inst_45478__$1);

(statearr_45605[(18)] = inst_45480);

return statearr_45605;
})();
return cljs.core.async.ioc_alts_BANG_(state_45536__$1,(4),inst_45481);
} else {
if((state_val_45537 === (23))){
var inst_45521 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
if(cljs.core.truth_(inst_45521)){
var statearr_45609_48228 = state_45536__$1;
(statearr_45609_48228[(1)] = (24));

} else {
var statearr_45610_48229 = state_45536__$1;
(statearr_45610_48229[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (19))){
var inst_45516 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
var statearr_45614_48231 = state_45536__$1;
(statearr_45614_48231[(2)] = inst_45516);

(statearr_45614_48231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (11))){
var inst_45489 = (state_45536[(14)]);
var inst_45500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45489);
var state_45536__$1 = state_45536;
var statearr_45615_48273 = state_45536__$1;
(statearr_45615_48273[(2)] = inst_45500);

(statearr_45615_48273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (9))){
var inst_45479 = (state_45536[(15)]);
var inst_45507 = (state_45536[(19)]);
var inst_45489 = (state_45536[(14)]);
var inst_45507__$1 = (inst_45479.cljs$core$IFn$_invoke$arity$1 ? inst_45479.cljs$core$IFn$_invoke$arity$1(inst_45489) : inst_45479.call(null,inst_45489));
var state_45536__$1 = (function (){var statearr_45619 = state_45536;
(statearr_45619[(19)] = inst_45507__$1);

return statearr_45619;
})();
if(cljs.core.truth_(inst_45507__$1)){
var statearr_45623_48274 = state_45536__$1;
(statearr_45623_48274[(1)] = (14));

} else {
var statearr_45625_48275 = state_45536__$1;
(statearr_45625_48275[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (5))){
var inst_45490 = (state_45536[(13)]);
var state_45536__$1 = state_45536;
var statearr_45626_48276 = state_45536__$1;
(statearr_45626_48276[(2)] = inst_45490);

(statearr_45626_48276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (14))){
var inst_45507 = (state_45536[(19)]);
var state_45536__$1 = state_45536;
var statearr_45629_48277 = state_45536__$1;
(statearr_45629_48277[(2)] = inst_45507);

(statearr_45629_48277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (26))){
var inst_45526 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
var statearr_45630_48278 = state_45536__$1;
(statearr_45630_48278[(2)] = inst_45526);

(statearr_45630_48278[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (16))){
var inst_45518 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
if(cljs.core.truth_(inst_45518)){
var statearr_45633_48279 = state_45536__$1;
(statearr_45633_48279[(1)] = (20));

} else {
var statearr_45634_48280 = state_45536__$1;
(statearr_45634_48280[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (10))){
var inst_45532 = (state_45536[(2)]);
var state_45536__$1 = state_45536;
var statearr_45635_48281 = state_45536__$1;
(statearr_45635_48281[(2)] = inst_45532);

(statearr_45635_48281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (18))){
var inst_45510 = (state_45536[(16)]);
var state_45536__$1 = state_45536;
var statearr_45636_48282 = state_45536__$1;
(statearr_45636_48282[(2)] = inst_45510);

(statearr_45636_48282[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45537 === (8))){
var inst_45488 = (state_45536[(7)]);
var inst_45497 = (inst_45488 == null);
var state_45536__$1 = state_45536;
if(cljs.core.truth_(inst_45497)){
var statearr_45637_48289 = state_45536__$1;
(statearr_45637_48289[(1)] = (11));

} else {
var statearr_45638_48290 = state_45536__$1;
(statearr_45638_48290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33421__auto__ = null;
var cljs$core$async$mix_$_state_machine__33421__auto____0 = (function (){
var statearr_45639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45639[(0)] = cljs$core$async$mix_$_state_machine__33421__auto__);

(statearr_45639[(1)] = (1));

return statearr_45639;
});
var cljs$core$async$mix_$_state_machine__33421__auto____1 = (function (state_45536){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_45536);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e45640){var ex__33424__auto__ = e45640;
var statearr_45641_48294 = state_45536;
(statearr_45641_48294[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_45536[(4)]))){
var statearr_45642_48295 = state_45536;
(statearr_45642_48295[(1)] = cljs.core.first((state_45536[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48296 = state_45536;
state_45536 = G__48296;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33421__auto__ = function(state_45536){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33421__auto____1.call(this,state_45536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33421__auto____0;
cljs$core$async$mix_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33421__auto____1;
return cljs$core$async$mix_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_45643 = f__33656__auto__();
(statearr_45643[(6)] = c__33655__auto___48177);

return statearr_45643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48298 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48298(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48299 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48299(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48341 = (function() {
var G__48342 = null;
var G__48342__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48342__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48342 = function(p,v){
switch(arguments.length){
case 1:
return G__48342__1.call(this,p);
case 2:
return G__48342__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48342.cljs$core$IFn$_invoke$arity$1 = G__48342__1;
G__48342.cljs$core$IFn$_invoke$arity$2 = G__48342__2;
return G__48342;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45709 = arguments.length;
switch (G__45709) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48341(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48341(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45720 = arguments.length;
switch (G__45720) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45717_SHARP_){
if(cljs.core.truth_((p1__45717_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45717_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45717_SHARP_.call(null,topic)))){
return p1__45717_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45717_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45735 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45736){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45736 = meta45736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45737,meta45736__$1){
var self__ = this;
var _45737__$1 = this;
return (new cljs.core.async.t_cljs$core$async45735(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45736__$1));
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45737){
var self__ = this;
var _45737__$1 = this;
return self__.meta45736;
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45736","meta45736",1809203887,null)], null);
}));

(cljs.core.async.t_cljs$core$async45735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45735");

(cljs.core.async.t_cljs$core$async45735.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45735.
 */
cljs.core.async.__GT_t_cljs$core$async45735 = (function cljs$core$async$__GT_t_cljs$core$async45735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45736){
return (new cljs.core.async.t_cljs$core$async45735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45736));
});

}

return (new cljs.core.async.t_cljs$core$async45735(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___48390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_45816){
var state_val_45817 = (state_45816[(1)]);
if((state_val_45817 === (7))){
var inst_45812 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45818_48394 = state_45816__$1;
(statearr_45818_48394[(2)] = inst_45812);

(statearr_45818_48394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (20))){
var state_45816__$1 = state_45816;
var statearr_45819_48396 = state_45816__$1;
(statearr_45819_48396[(2)] = null);

(statearr_45819_48396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (1))){
var state_45816__$1 = state_45816;
var statearr_45821_48399 = state_45816__$1;
(statearr_45821_48399[(2)] = null);

(statearr_45821_48399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (24))){
var inst_45795 = (state_45816[(7)]);
var inst_45804 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45795);
var state_45816__$1 = state_45816;
var statearr_45822_48400 = state_45816__$1;
(statearr_45822_48400[(2)] = inst_45804);

(statearr_45822_48400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (4))){
var inst_45745 = (state_45816[(8)]);
var inst_45745__$1 = (state_45816[(2)]);
var inst_45746 = (inst_45745__$1 == null);
var state_45816__$1 = (function (){var statearr_45823 = state_45816;
(statearr_45823[(8)] = inst_45745__$1);

return statearr_45823;
})();
if(cljs.core.truth_(inst_45746)){
var statearr_45824_48402 = state_45816__$1;
(statearr_45824_48402[(1)] = (5));

} else {
var statearr_45831_48403 = state_45816__$1;
(statearr_45831_48403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (15))){
var inst_45788 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45834_48417 = state_45816__$1;
(statearr_45834_48417[(2)] = inst_45788);

(statearr_45834_48417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (21))){
var inst_45809 = (state_45816[(2)]);
var state_45816__$1 = (function (){var statearr_45836 = state_45816;
(statearr_45836[(9)] = inst_45809);

return statearr_45836;
})();
var statearr_45837_48430 = state_45816__$1;
(statearr_45837_48430[(2)] = null);

(statearr_45837_48430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (13))){
var inst_45769 = (state_45816[(10)]);
var inst_45771 = cljs.core.chunked_seq_QMARK_(inst_45769);
var state_45816__$1 = state_45816;
if(inst_45771){
var statearr_45838_48439 = state_45816__$1;
(statearr_45838_48439[(1)] = (16));

} else {
var statearr_45839_48440 = state_45816__$1;
(statearr_45839_48440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (22))){
var inst_45801 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
if(cljs.core.truth_(inst_45801)){
var statearr_45841_48441 = state_45816__$1;
(statearr_45841_48441[(1)] = (23));

} else {
var statearr_45842_48442 = state_45816__$1;
(statearr_45842_48442[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (6))){
var inst_45797 = (state_45816[(11)]);
var inst_45795 = (state_45816[(7)]);
var inst_45745 = (state_45816[(8)]);
var inst_45795__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45745) : topic_fn.call(null,inst_45745));
var inst_45796 = cljs.core.deref(mults);
var inst_45797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45796,inst_45795__$1);
var state_45816__$1 = (function (){var statearr_45843 = state_45816;
(statearr_45843[(11)] = inst_45797__$1);

(statearr_45843[(7)] = inst_45795__$1);

return statearr_45843;
})();
if(cljs.core.truth_(inst_45797__$1)){
var statearr_45853_48443 = state_45816__$1;
(statearr_45853_48443[(1)] = (19));

} else {
var statearr_45854_48448 = state_45816__$1;
(statearr_45854_48448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (25))){
var inst_45806 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45855_48449 = state_45816__$1;
(statearr_45855_48449[(2)] = inst_45806);

(statearr_45855_48449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (17))){
var inst_45769 = (state_45816[(10)]);
var inst_45779 = cljs.core.first(inst_45769);
var inst_45780 = cljs.core.async.muxch_STAR_(inst_45779);
var inst_45781 = cljs.core.async.close_BANG_(inst_45780);
var inst_45782 = cljs.core.next(inst_45769);
var inst_45755 = inst_45782;
var inst_45756 = null;
var inst_45757 = (0);
var inst_45758 = (0);
var state_45816__$1 = (function (){var statearr_45856 = state_45816;
(statearr_45856[(12)] = inst_45758);

(statearr_45856[(13)] = inst_45755);

(statearr_45856[(14)] = inst_45757);

(statearr_45856[(15)] = inst_45781);

(statearr_45856[(16)] = inst_45756);

return statearr_45856;
})();
var statearr_45857_48454 = state_45816__$1;
(statearr_45857_48454[(2)] = null);

(statearr_45857_48454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (3))){
var inst_45814 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45816__$1,inst_45814);
} else {
if((state_val_45817 === (12))){
var inst_45790 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45858_48455 = state_45816__$1;
(statearr_45858_48455[(2)] = inst_45790);

(statearr_45858_48455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (2))){
var state_45816__$1 = state_45816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45816__$1,(4),ch);
} else {
if((state_val_45817 === (23))){
var state_45816__$1 = state_45816;
var statearr_45860_48456 = state_45816__$1;
(statearr_45860_48456[(2)] = null);

(statearr_45860_48456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (19))){
var inst_45797 = (state_45816[(11)]);
var inst_45745 = (state_45816[(8)]);
var inst_45799 = cljs.core.async.muxch_STAR_(inst_45797);
var state_45816__$1 = state_45816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45816__$1,(22),inst_45799,inst_45745);
} else {
if((state_val_45817 === (11))){
var inst_45769 = (state_45816[(10)]);
var inst_45755 = (state_45816[(13)]);
var inst_45769__$1 = cljs.core.seq(inst_45755);
var state_45816__$1 = (function (){var statearr_45862 = state_45816;
(statearr_45862[(10)] = inst_45769__$1);

return statearr_45862;
})();
if(inst_45769__$1){
var statearr_45863_48459 = state_45816__$1;
(statearr_45863_48459[(1)] = (13));

} else {
var statearr_45864_48460 = state_45816__$1;
(statearr_45864_48460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (9))){
var inst_45793 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45865_48462 = state_45816__$1;
(statearr_45865_48462[(2)] = inst_45793);

(statearr_45865_48462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (5))){
var inst_45752 = cljs.core.deref(mults);
var inst_45753 = cljs.core.vals(inst_45752);
var inst_45754 = cljs.core.seq(inst_45753);
var inst_45755 = inst_45754;
var inst_45756 = null;
var inst_45757 = (0);
var inst_45758 = (0);
var state_45816__$1 = (function (){var statearr_45866 = state_45816;
(statearr_45866[(12)] = inst_45758);

(statearr_45866[(13)] = inst_45755);

(statearr_45866[(14)] = inst_45757);

(statearr_45866[(16)] = inst_45756);

return statearr_45866;
})();
var statearr_45867_48463 = state_45816__$1;
(statearr_45867_48463[(2)] = null);

(statearr_45867_48463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (14))){
var state_45816__$1 = state_45816;
var statearr_45872_48464 = state_45816__$1;
(statearr_45872_48464[(2)] = null);

(statearr_45872_48464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (16))){
var inst_45769 = (state_45816[(10)]);
var inst_45774 = cljs.core.chunk_first(inst_45769);
var inst_45775 = cljs.core.chunk_rest(inst_45769);
var inst_45776 = cljs.core.count(inst_45774);
var inst_45755 = inst_45775;
var inst_45756 = inst_45774;
var inst_45757 = inst_45776;
var inst_45758 = (0);
var state_45816__$1 = (function (){var statearr_45882 = state_45816;
(statearr_45882[(12)] = inst_45758);

(statearr_45882[(13)] = inst_45755);

(statearr_45882[(14)] = inst_45757);

(statearr_45882[(16)] = inst_45756);

return statearr_45882;
})();
var statearr_45883_48473 = state_45816__$1;
(statearr_45883_48473[(2)] = null);

(statearr_45883_48473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (10))){
var inst_45758 = (state_45816[(12)]);
var inst_45755 = (state_45816[(13)]);
var inst_45757 = (state_45816[(14)]);
var inst_45756 = (state_45816[(16)]);
var inst_45763 = cljs.core._nth(inst_45756,inst_45758);
var inst_45764 = cljs.core.async.muxch_STAR_(inst_45763);
var inst_45765 = cljs.core.async.close_BANG_(inst_45764);
var inst_45766 = (inst_45758 + (1));
var tmp45868 = inst_45755;
var tmp45869 = inst_45757;
var tmp45870 = inst_45756;
var inst_45755__$1 = tmp45868;
var inst_45756__$1 = tmp45870;
var inst_45757__$1 = tmp45869;
var inst_45758__$1 = inst_45766;
var state_45816__$1 = (function (){var statearr_45884 = state_45816;
(statearr_45884[(12)] = inst_45758__$1);

(statearr_45884[(13)] = inst_45755__$1);

(statearr_45884[(14)] = inst_45757__$1);

(statearr_45884[(17)] = inst_45765);

(statearr_45884[(16)] = inst_45756__$1);

return statearr_45884;
})();
var statearr_45888_48474 = state_45816__$1;
(statearr_45888_48474[(2)] = null);

(statearr_45888_48474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (18))){
var inst_45785 = (state_45816[(2)]);
var state_45816__$1 = state_45816;
var statearr_45890_48475 = state_45816__$1;
(statearr_45890_48475[(2)] = inst_45785);

(statearr_45890_48475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45817 === (8))){
var inst_45758 = (state_45816[(12)]);
var inst_45757 = (state_45816[(14)]);
var inst_45760 = (inst_45758 < inst_45757);
var inst_45761 = inst_45760;
var state_45816__$1 = state_45816;
if(cljs.core.truth_(inst_45761)){
var statearr_45901_48478 = state_45816__$1;
(statearr_45901_48478[(1)] = (10));

} else {
var statearr_45902_48479 = state_45816__$1;
(statearr_45902_48479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_45904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45904[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_45904[(1)] = (1));

return statearr_45904;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_45816){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_45816);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e45905){var ex__33424__auto__ = e45905;
var statearr_45906_48486 = state_45816;
(statearr_45906_48486[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_45816[(4)]))){
var statearr_45907_48491 = state_45816;
(statearr_45907_48491[(1)] = cljs.core.first((state_45816[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48492 = state_45816;
state_45816 = G__48492;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_45816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_45816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_45908 = f__33656__auto__();
(statearr_45908[(6)] = c__33655__auto___48390);

return statearr_45908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45912 = arguments.length;
switch (G__45912) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45923 = arguments.length;
switch (G__45923) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45937 = arguments.length;
switch (G__45937) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33655__auto___48497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_45991){
var state_val_45992 = (state_45991[(1)]);
if((state_val_45992 === (7))){
var state_45991__$1 = state_45991;
var statearr_45995_48498 = state_45991__$1;
(statearr_45995_48498[(2)] = null);

(statearr_45995_48498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (1))){
var state_45991__$1 = state_45991;
var statearr_45996_48499 = state_45991__$1;
(statearr_45996_48499[(2)] = null);

(statearr_45996_48499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (4))){
var inst_45950 = (state_45991[(7)]);
var inst_45949 = (state_45991[(8)]);
var inst_45952 = (inst_45950 < inst_45949);
var state_45991__$1 = state_45991;
if(cljs.core.truth_(inst_45952)){
var statearr_46006_48504 = state_45991__$1;
(statearr_46006_48504[(1)] = (6));

} else {
var statearr_46007_48506 = state_45991__$1;
(statearr_46007_48506[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (15))){
var inst_45977 = (state_45991[(9)]);
var inst_45982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45977);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45991__$1,(17),out,inst_45982);
} else {
if((state_val_45992 === (13))){
var inst_45977 = (state_45991[(9)]);
var inst_45977__$1 = (state_45991[(2)]);
var inst_45978 = cljs.core.some(cljs.core.nil_QMARK_,inst_45977__$1);
var state_45991__$1 = (function (){var statearr_46010 = state_45991;
(statearr_46010[(9)] = inst_45977__$1);

return statearr_46010;
})();
if(cljs.core.truth_(inst_45978)){
var statearr_46011_48507 = state_45991__$1;
(statearr_46011_48507[(1)] = (14));

} else {
var statearr_46012_48508 = state_45991__$1;
(statearr_46012_48508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (6))){
var state_45991__$1 = state_45991;
var statearr_46013_48509 = state_45991__$1;
(statearr_46013_48509[(2)] = null);

(statearr_46013_48509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (17))){
var inst_45984 = (state_45991[(2)]);
var state_45991__$1 = (function (){var statearr_46025 = state_45991;
(statearr_46025[(10)] = inst_45984);

return statearr_46025;
})();
var statearr_46027_48510 = state_45991__$1;
(statearr_46027_48510[(2)] = null);

(statearr_46027_48510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (3))){
var inst_45989 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45991__$1,inst_45989);
} else {
if((state_val_45992 === (12))){
var _ = (function (){var statearr_46038 = state_45991;
(statearr_46038[(4)] = cljs.core.rest((state_45991[(4)])));

return statearr_46038;
})();
var state_45991__$1 = state_45991;
var ex46022 = (state_45991__$1[(2)]);
var statearr_46039_48542 = state_45991__$1;
(statearr_46039_48542[(5)] = ex46022);


if((ex46022 instanceof Object)){
var statearr_46040_48543 = state_45991__$1;
(statearr_46040_48543[(1)] = (11));

(statearr_46040_48543[(5)] = null);

} else {
throw ex46022;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (2))){
var inst_45948 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45949 = cnt;
var inst_45950 = (0);
var state_45991__$1 = (function (){var statearr_46045 = state_45991;
(statearr_46045[(7)] = inst_45950);

(statearr_46045[(11)] = inst_45948);

(statearr_46045[(8)] = inst_45949);

return statearr_46045;
})();
var statearr_46047_48551 = state_45991__$1;
(statearr_46047_48551[(2)] = null);

(statearr_46047_48551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (11))){
var inst_45954 = (state_45991[(2)]);
var inst_45955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45991__$1 = (function (){var statearr_46050 = state_45991;
(statearr_46050[(12)] = inst_45954);

return statearr_46050;
})();
var statearr_46051_48555 = state_45991__$1;
(statearr_46051_48555[(2)] = inst_45955);

(statearr_46051_48555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (9))){
var inst_45950 = (state_45991[(7)]);
var _ = (function (){var statearr_46055 = state_45991;
(statearr_46055[(4)] = cljs.core.cons((12),(state_45991[(4)])));

return statearr_46055;
})();
var inst_45961 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45950) : chs__$1.call(null,inst_45950));
var inst_45962 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45950) : done.call(null,inst_45950));
var inst_45963 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45961,inst_45962);
var ___$1 = (function (){var statearr_46065 = state_45991;
(statearr_46065[(4)] = cljs.core.rest((state_45991[(4)])));

return statearr_46065;
})();
var state_45991__$1 = state_45991;
var statearr_46067_48560 = state_45991__$1;
(statearr_46067_48560[(2)] = inst_45963);

(statearr_46067_48560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (5))){
var inst_45974 = (state_45991[(2)]);
var state_45991__$1 = (function (){var statearr_46079 = state_45991;
(statearr_46079[(13)] = inst_45974);

return statearr_46079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45991__$1,(13),dchan);
} else {
if((state_val_45992 === (14))){
var inst_45980 = cljs.core.async.close_BANG_(out);
var state_45991__$1 = state_45991;
var statearr_46081_48564 = state_45991__$1;
(statearr_46081_48564[(2)] = inst_45980);

(statearr_46081_48564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (16))){
var inst_45987 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46085_48566 = state_45991__$1;
(statearr_46085_48566[(2)] = inst_45987);

(statearr_46085_48566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (10))){
var inst_45950 = (state_45991[(7)]);
var inst_45966 = (state_45991[(2)]);
var inst_45968 = (inst_45950 + (1));
var inst_45950__$1 = inst_45968;
var state_45991__$1 = (function (){var statearr_46086 = state_45991;
(statearr_46086[(14)] = inst_45966);

(statearr_46086[(7)] = inst_45950__$1);

return statearr_46086;
})();
var statearr_46090_48591 = state_45991__$1;
(statearr_46090_48591[(2)] = null);

(statearr_46090_48591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (8))){
var inst_45972 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46123_48592 = state_45991__$1;
(statearr_46123_48592[(2)] = inst_45972);

(statearr_46123_48592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_46125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46125[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_46125[(1)] = (1));

return statearr_46125;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_45991){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_45991);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46126){var ex__33424__auto__ = e46126;
var statearr_46127_48594 = state_45991;
(statearr_46127_48594[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_45991[(4)]))){
var statearr_46128_48595 = state_45991;
(statearr_46128_48595[(1)] = cljs.core.first((state_45991[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48596 = state_45991;
state_45991 = G__48596;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_45991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_45991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46130 = f__33656__auto__();
(statearr_46130[(6)] = c__33655__auto___48497);

return statearr_46130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46137 = arguments.length;
switch (G__46137) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_46171){
var state_val_46172 = (state_46171[(1)]);
if((state_val_46172 === (7))){
var inst_46148 = (state_46171[(7)]);
var inst_46149 = (state_46171[(8)]);
var inst_46148__$1 = (state_46171[(2)]);
var inst_46149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46148__$1,(0),null);
var inst_46150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46148__$1,(1),null);
var inst_46151 = (inst_46149__$1 == null);
var state_46171__$1 = (function (){var statearr_46174 = state_46171;
(statearr_46174[(7)] = inst_46148__$1);

(statearr_46174[(9)] = inst_46150);

(statearr_46174[(8)] = inst_46149__$1);

return statearr_46174;
})();
if(cljs.core.truth_(inst_46151)){
var statearr_46176_48613 = state_46171__$1;
(statearr_46176_48613[(1)] = (8));

} else {
var statearr_46177_48614 = state_46171__$1;
(statearr_46177_48614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (1))){
var inst_46138 = cljs.core.vec(chs);
var inst_46139 = inst_46138;
var state_46171__$1 = (function (){var statearr_46179 = state_46171;
(statearr_46179[(10)] = inst_46139);

return statearr_46179;
})();
var statearr_46182_48618 = state_46171__$1;
(statearr_46182_48618[(2)] = null);

(statearr_46182_48618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (4))){
var inst_46139 = (state_46171[(10)]);
var state_46171__$1 = state_46171;
return cljs.core.async.ioc_alts_BANG_(state_46171__$1,(7),inst_46139);
} else {
if((state_val_46172 === (6))){
var inst_46165 = (state_46171[(2)]);
var state_46171__$1 = state_46171;
var statearr_46187_48619 = state_46171__$1;
(statearr_46187_48619[(2)] = inst_46165);

(statearr_46187_48619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (3))){
var inst_46167 = (state_46171[(2)]);
var state_46171__$1 = state_46171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46171__$1,inst_46167);
} else {
if((state_val_46172 === (2))){
var inst_46139 = (state_46171[(10)]);
var inst_46141 = cljs.core.count(inst_46139);
var inst_46142 = (inst_46141 > (0));
var state_46171__$1 = state_46171;
if(cljs.core.truth_(inst_46142)){
var statearr_46193_48626 = state_46171__$1;
(statearr_46193_48626[(1)] = (4));

} else {
var statearr_46194_48627 = state_46171__$1;
(statearr_46194_48627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (11))){
var inst_46139 = (state_46171[(10)]);
var inst_46158 = (state_46171[(2)]);
var tmp46189 = inst_46139;
var inst_46139__$1 = tmp46189;
var state_46171__$1 = (function (){var statearr_46198 = state_46171;
(statearr_46198[(11)] = inst_46158);

(statearr_46198[(10)] = inst_46139__$1);

return statearr_46198;
})();
var statearr_46199_48628 = state_46171__$1;
(statearr_46199_48628[(2)] = null);

(statearr_46199_48628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (9))){
var inst_46149 = (state_46171[(8)]);
var state_46171__$1 = state_46171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46171__$1,(11),out,inst_46149);
} else {
if((state_val_46172 === (5))){
var inst_46163 = cljs.core.async.close_BANG_(out);
var state_46171__$1 = state_46171;
var statearr_46203_48629 = state_46171__$1;
(statearr_46203_48629[(2)] = inst_46163);

(statearr_46203_48629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (10))){
var inst_46161 = (state_46171[(2)]);
var state_46171__$1 = state_46171;
var statearr_46204_48630 = state_46171__$1;
(statearr_46204_48630[(2)] = inst_46161);

(statearr_46204_48630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46172 === (8))){
var inst_46148 = (state_46171[(7)]);
var inst_46150 = (state_46171[(9)]);
var inst_46139 = (state_46171[(10)]);
var inst_46149 = (state_46171[(8)]);
var inst_46153 = (function (){var cs = inst_46139;
var vec__46144 = inst_46148;
var v = inst_46149;
var c = inst_46150;
return (function (p1__46134_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46134_SHARP_);
});
})();
var inst_46154 = cljs.core.filterv(inst_46153,inst_46139);
var inst_46139__$1 = inst_46154;
var state_46171__$1 = (function (){var statearr_46214 = state_46171;
(statearr_46214[(10)] = inst_46139__$1);

return statearr_46214;
})();
var statearr_46215_48650 = state_46171__$1;
(statearr_46215_48650[(2)] = null);

(statearr_46215_48650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_46216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46216[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_46216[(1)] = (1));

return statearr_46216;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_46171){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_46171);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46217){var ex__33424__auto__ = e46217;
var statearr_46218_48651 = state_46171;
(statearr_46218_48651[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_46171[(4)]))){
var statearr_46219_48652 = state_46171;
(statearr_46219_48652[(1)] = cljs.core.first((state_46171[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48653 = state_46171;
state_46171 = G__48653;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_46171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_46171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46223 = f__33656__auto__();
(statearr_46223[(6)] = c__33655__auto___48605);

return statearr_46223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46237 = arguments.length;
switch (G__46237) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_46277){
var state_val_46278 = (state_46277[(1)]);
if((state_val_46278 === (7))){
var inst_46259 = (state_46277[(7)]);
var inst_46259__$1 = (state_46277[(2)]);
var inst_46260 = (inst_46259__$1 == null);
var inst_46261 = cljs.core.not(inst_46260);
var state_46277__$1 = (function (){var statearr_46286 = state_46277;
(statearr_46286[(7)] = inst_46259__$1);

return statearr_46286;
})();
if(inst_46261){
var statearr_46288_48673 = state_46277__$1;
(statearr_46288_48673[(1)] = (8));

} else {
var statearr_46293_48674 = state_46277__$1;
(statearr_46293_48674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (1))){
var inst_46246 = (0);
var state_46277__$1 = (function (){var statearr_46296 = state_46277;
(statearr_46296[(8)] = inst_46246);

return statearr_46296;
})();
var statearr_46298_48676 = state_46277__$1;
(statearr_46298_48676[(2)] = null);

(statearr_46298_48676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (4))){
var state_46277__$1 = state_46277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46277__$1,(7),ch);
} else {
if((state_val_46278 === (6))){
var inst_46272 = (state_46277[(2)]);
var state_46277__$1 = state_46277;
var statearr_46305_48677 = state_46277__$1;
(statearr_46305_48677[(2)] = inst_46272);

(statearr_46305_48677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (3))){
var inst_46274 = (state_46277[(2)]);
var inst_46275 = cljs.core.async.close_BANG_(out);
var state_46277__$1 = (function (){var statearr_46308 = state_46277;
(statearr_46308[(9)] = inst_46274);

return statearr_46308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46277__$1,inst_46275);
} else {
if((state_val_46278 === (2))){
var inst_46246 = (state_46277[(8)]);
var inst_46255 = (inst_46246 < n);
var state_46277__$1 = state_46277;
if(cljs.core.truth_(inst_46255)){
var statearr_46310_48678 = state_46277__$1;
(statearr_46310_48678[(1)] = (4));

} else {
var statearr_46311_48679 = state_46277__$1;
(statearr_46311_48679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (11))){
var inst_46246 = (state_46277[(8)]);
var inst_46264 = (state_46277[(2)]);
var inst_46265 = (inst_46246 + (1));
var inst_46246__$1 = inst_46265;
var state_46277__$1 = (function (){var statearr_46313 = state_46277;
(statearr_46313[(8)] = inst_46246__$1);

(statearr_46313[(10)] = inst_46264);

return statearr_46313;
})();
var statearr_46315_48680 = state_46277__$1;
(statearr_46315_48680[(2)] = null);

(statearr_46315_48680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (9))){
var state_46277__$1 = state_46277;
var statearr_46320_48681 = state_46277__$1;
(statearr_46320_48681[(2)] = null);

(statearr_46320_48681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (5))){
var state_46277__$1 = state_46277;
var statearr_46322_48690 = state_46277__$1;
(statearr_46322_48690[(2)] = null);

(statearr_46322_48690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (10))){
var inst_46269 = (state_46277[(2)]);
var state_46277__$1 = state_46277;
var statearr_46327_48691 = state_46277__$1;
(statearr_46327_48691[(2)] = inst_46269);

(statearr_46327_48691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46278 === (8))){
var inst_46259 = (state_46277[(7)]);
var state_46277__$1 = state_46277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46277__$1,(11),out,inst_46259);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_46335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46335[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_46335[(1)] = (1));

return statearr_46335;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_46277){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_46277);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46347){var ex__33424__auto__ = e46347;
var statearr_46348_48702 = state_46277;
(statearr_46348_48702[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_46277[(4)]))){
var statearr_46350_48703 = state_46277;
(statearr_46350_48703[(1)] = cljs.core.first((state_46277[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48706 = state_46277;
state_46277 = G__48706;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_46277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_46277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46357 = f__33656__auto__();
(statearr_46357[(6)] = c__33655__auto___48666);

return statearr_46357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46364 = (function (f,ch,meta46365){
this.f = f;
this.ch = ch;
this.meta46365 = meta46365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46366,meta46365__$1){
var self__ = this;
var _46366__$1 = this;
return (new cljs.core.async.t_cljs$core$async46364(self__.f,self__.ch,meta46365__$1));
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46366){
var self__ = this;
var _46366__$1 = this;
return self__.meta46365;
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46401 = (function (f,ch,meta46365,_,fn1,meta46402){
this.f = f;
this.ch = ch;
this.meta46365 = meta46365;
this._ = _;
this.fn1 = fn1;
this.meta46402 = meta46402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46403,meta46402__$1){
var self__ = this;
var _46403__$1 = this;
return (new cljs.core.async.t_cljs$core$async46401(self__.f,self__.ch,self__.meta46365,self__._,self__.fn1,meta46402__$1));
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46403){
var self__ = this;
var _46403__$1 = this;
return self__.meta46402;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46363_SHARP_){
var G__46422 = (((p1__46363_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46363_SHARP_) : self__.f.call(null,p1__46363_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46422) : f1.call(null,G__46422));
});
}));

(cljs.core.async.t_cljs$core$async46401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46365","meta46365",1032659182,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46364","cljs.core.async/t_cljs$core$async46364",1411323260,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null)], null);
}));

(cljs.core.async.t_cljs$core$async46401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46401");

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46401.
 */
cljs.core.async.__GT_t_cljs$core$async46401 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46401(f__$1,ch__$1,meta46365__$1,___$2,fn1__$1,meta46402){
return (new cljs.core.async.t_cljs$core$async46401(f__$1,ch__$1,meta46365__$1,___$2,fn1__$1,meta46402));
});

}

return (new cljs.core.async.t_cljs$core$async46401(self__.f,self__.ch,self__.meta46365,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46442 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46442) : self__.f.call(null,G__46442));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46365","meta46365",1032659182,null)], null);
}));

(cljs.core.async.t_cljs$core$async46364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46364");

(cljs.core.async.t_cljs$core$async46364.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46364.
 */
cljs.core.async.__GT_t_cljs$core$async46364 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46364(f__$1,ch__$1,meta46365){
return (new cljs.core.async.t_cljs$core$async46364(f__$1,ch__$1,meta46365));
});

}

return (new cljs.core.async.t_cljs$core$async46364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46462 = (function (f,ch,meta46463){
this.f = f;
this.ch = ch;
this.meta46463 = meta46463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46464,meta46463__$1){
var self__ = this;
var _46464__$1 = this;
return (new cljs.core.async.t_cljs$core$async46462(self__.f,self__.ch,meta46463__$1));
}));

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46464){
var self__ = this;
var _46464__$1 = this;
return self__.meta46463;
}));

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46463","meta46463",1039789079,null)], null);
}));

(cljs.core.async.t_cljs$core$async46462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46462");

(cljs.core.async.t_cljs$core$async46462.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46462.
 */
cljs.core.async.__GT_t_cljs$core$async46462 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46462(f__$1,ch__$1,meta46463){
return (new cljs.core.async.t_cljs$core$async46462(f__$1,ch__$1,meta46463));
});

}

return (new cljs.core.async.t_cljs$core$async46462(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46485 = (function (p,ch,meta46486){
this.p = p;
this.ch = ch;
this.meta46486 = meta46486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46487,meta46486__$1){
var self__ = this;
var _46487__$1 = this;
return (new cljs.core.async.t_cljs$core$async46485(self__.p,self__.ch,meta46486__$1));
}));

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46487){
var self__ = this;
var _46487__$1 = this;
return self__.meta46486;
}));

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46486","meta46486",-602625622,null)], null);
}));

(cljs.core.async.t_cljs$core$async46485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46485");

(cljs.core.async.t_cljs$core$async46485.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46485.
 */
cljs.core.async.__GT_t_cljs$core$async46485 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46485(p__$1,ch__$1,meta46486){
return (new cljs.core.async.t_cljs$core$async46485(p__$1,ch__$1,meta46486));
});

}

return (new cljs.core.async.t_cljs$core$async46485(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46583 = arguments.length;
switch (G__46583) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_46611){
var state_val_46612 = (state_46611[(1)]);
if((state_val_46612 === (7))){
var inst_46607 = (state_46611[(2)]);
var state_46611__$1 = state_46611;
var statearr_46613_48750 = state_46611__$1;
(statearr_46613_48750[(2)] = inst_46607);

(statearr_46613_48750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (1))){
var state_46611__$1 = state_46611;
var statearr_46614_48751 = state_46611__$1;
(statearr_46614_48751[(2)] = null);

(statearr_46614_48751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (4))){
var inst_46592 = (state_46611[(7)]);
var inst_46592__$1 = (state_46611[(2)]);
var inst_46594 = (inst_46592__$1 == null);
var state_46611__$1 = (function (){var statearr_46619 = state_46611;
(statearr_46619[(7)] = inst_46592__$1);

return statearr_46619;
})();
if(cljs.core.truth_(inst_46594)){
var statearr_46620_48760 = state_46611__$1;
(statearr_46620_48760[(1)] = (5));

} else {
var statearr_46626_48761 = state_46611__$1;
(statearr_46626_48761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (6))){
var inst_46592 = (state_46611[(7)]);
var inst_46598 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46592) : p.call(null,inst_46592));
var state_46611__$1 = state_46611;
if(cljs.core.truth_(inst_46598)){
var statearr_46629_48764 = state_46611__$1;
(statearr_46629_48764[(1)] = (8));

} else {
var statearr_46630_48765 = state_46611__$1;
(statearr_46630_48765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (3))){
var inst_46609 = (state_46611[(2)]);
var state_46611__$1 = state_46611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46611__$1,inst_46609);
} else {
if((state_val_46612 === (2))){
var state_46611__$1 = state_46611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46611__$1,(4),ch);
} else {
if((state_val_46612 === (11))){
var inst_46601 = (state_46611[(2)]);
var state_46611__$1 = state_46611;
var statearr_46631_48766 = state_46611__$1;
(statearr_46631_48766[(2)] = inst_46601);

(statearr_46631_48766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (9))){
var state_46611__$1 = state_46611;
var statearr_46634_48767 = state_46611__$1;
(statearr_46634_48767[(2)] = null);

(statearr_46634_48767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (5))){
var inst_46596 = cljs.core.async.close_BANG_(out);
var state_46611__$1 = state_46611;
var statearr_46637_48768 = state_46611__$1;
(statearr_46637_48768[(2)] = inst_46596);

(statearr_46637_48768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (10))){
var inst_46604 = (state_46611[(2)]);
var state_46611__$1 = (function (){var statearr_46640 = state_46611;
(statearr_46640[(8)] = inst_46604);

return statearr_46640;
})();
var statearr_46643_48769 = state_46611__$1;
(statearr_46643_48769[(2)] = null);

(statearr_46643_48769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46612 === (8))){
var inst_46592 = (state_46611[(7)]);
var state_46611__$1 = state_46611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46611__$1,(11),out,inst_46592);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_46648 = [null,null,null,null,null,null,null,null,null];
(statearr_46648[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_46648[(1)] = (1));

return statearr_46648;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_46611){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_46611);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46650){var ex__33424__auto__ = e46650;
var statearr_46652_48770 = state_46611;
(statearr_46652_48770[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_46611[(4)]))){
var statearr_46653_48771 = state_46611;
(statearr_46653_48771[(1)] = cljs.core.first((state_46611[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48772 = state_46611;
state_46611 = G__48772;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_46611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_46611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46657 = f__33656__auto__();
(statearr_46657[(6)] = c__33655__auto___48749);

return statearr_46657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46669 = arguments.length;
switch (G__46669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_46747){
var state_val_46748 = (state_46747[(1)]);
if((state_val_46748 === (7))){
var inst_46743 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46750_48777 = state_46747__$1;
(statearr_46750_48777[(2)] = inst_46743);

(statearr_46750_48777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (20))){
var inst_46708 = (state_46747[(7)]);
var inst_46722 = (state_46747[(2)]);
var inst_46723 = cljs.core.next(inst_46708);
var inst_46690 = inst_46723;
var inst_46691 = null;
var inst_46692 = (0);
var inst_46693 = (0);
var state_46747__$1 = (function (){var statearr_46753 = state_46747;
(statearr_46753[(8)] = inst_46692);

(statearr_46753[(9)] = inst_46690);

(statearr_46753[(10)] = inst_46722);

(statearr_46753[(11)] = inst_46693);

(statearr_46753[(12)] = inst_46691);

return statearr_46753;
})();
var statearr_46755_48782 = state_46747__$1;
(statearr_46755_48782[(2)] = null);

(statearr_46755_48782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (1))){
var state_46747__$1 = state_46747;
var statearr_46756_48783 = state_46747__$1;
(statearr_46756_48783[(2)] = null);

(statearr_46756_48783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (4))){
var inst_46678 = (state_46747[(13)]);
var inst_46678__$1 = (state_46747[(2)]);
var inst_46679 = (inst_46678__$1 == null);
var state_46747__$1 = (function (){var statearr_46757 = state_46747;
(statearr_46757[(13)] = inst_46678__$1);

return statearr_46757;
})();
if(cljs.core.truth_(inst_46679)){
var statearr_46758_48800 = state_46747__$1;
(statearr_46758_48800[(1)] = (5));

} else {
var statearr_46759_48801 = state_46747__$1;
(statearr_46759_48801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (15))){
var state_46747__$1 = state_46747;
var statearr_46763_48802 = state_46747__$1;
(statearr_46763_48802[(2)] = null);

(statearr_46763_48802[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (21))){
var state_46747__$1 = state_46747;
var statearr_46764_48803 = state_46747__$1;
(statearr_46764_48803[(2)] = null);

(statearr_46764_48803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (13))){
var inst_46692 = (state_46747[(8)]);
var inst_46690 = (state_46747[(9)]);
var inst_46693 = (state_46747[(11)]);
var inst_46691 = (state_46747[(12)]);
var inst_46702 = (state_46747[(2)]);
var inst_46705 = (inst_46693 + (1));
var tmp46760 = inst_46692;
var tmp46761 = inst_46690;
var tmp46762 = inst_46691;
var inst_46690__$1 = tmp46761;
var inst_46691__$1 = tmp46762;
var inst_46692__$1 = tmp46760;
var inst_46693__$1 = inst_46705;
var state_46747__$1 = (function (){var statearr_46766 = state_46747;
(statearr_46766[(14)] = inst_46702);

(statearr_46766[(8)] = inst_46692__$1);

(statearr_46766[(9)] = inst_46690__$1);

(statearr_46766[(11)] = inst_46693__$1);

(statearr_46766[(12)] = inst_46691__$1);

return statearr_46766;
})();
var statearr_46770_48804 = state_46747__$1;
(statearr_46770_48804[(2)] = null);

(statearr_46770_48804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (22))){
var state_46747__$1 = state_46747;
var statearr_46774_48805 = state_46747__$1;
(statearr_46774_48805[(2)] = null);

(statearr_46774_48805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (6))){
var inst_46678 = (state_46747[(13)]);
var inst_46687 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46678) : f.call(null,inst_46678));
var inst_46688 = cljs.core.seq(inst_46687);
var inst_46690 = inst_46688;
var inst_46691 = null;
var inst_46692 = (0);
var inst_46693 = (0);
var state_46747__$1 = (function (){var statearr_46775 = state_46747;
(statearr_46775[(8)] = inst_46692);

(statearr_46775[(9)] = inst_46690);

(statearr_46775[(11)] = inst_46693);

(statearr_46775[(12)] = inst_46691);

return statearr_46775;
})();
var statearr_46777_48806 = state_46747__$1;
(statearr_46777_48806[(2)] = null);

(statearr_46777_48806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (17))){
var inst_46708 = (state_46747[(7)]);
var inst_46713 = cljs.core.chunk_first(inst_46708);
var inst_46714 = cljs.core.chunk_rest(inst_46708);
var inst_46715 = cljs.core.count(inst_46713);
var inst_46690 = inst_46714;
var inst_46691 = inst_46713;
var inst_46692 = inst_46715;
var inst_46693 = (0);
var state_46747__$1 = (function (){var statearr_46778 = state_46747;
(statearr_46778[(8)] = inst_46692);

(statearr_46778[(9)] = inst_46690);

(statearr_46778[(11)] = inst_46693);

(statearr_46778[(12)] = inst_46691);

return statearr_46778;
})();
var statearr_46779_48811 = state_46747__$1;
(statearr_46779_48811[(2)] = null);

(statearr_46779_48811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (3))){
var inst_46745 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46747__$1,inst_46745);
} else {
if((state_val_46748 === (12))){
var inst_46733 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46780_48818 = state_46747__$1;
(statearr_46780_48818[(2)] = inst_46733);

(statearr_46780_48818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (2))){
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46747__$1,(4),in$);
} else {
if((state_val_46748 === (23))){
var inst_46741 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46781_48819 = state_46747__$1;
(statearr_46781_48819[(2)] = inst_46741);

(statearr_46781_48819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (19))){
var inst_46727 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46782_48820 = state_46747__$1;
(statearr_46782_48820[(2)] = inst_46727);

(statearr_46782_48820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (11))){
var inst_46708 = (state_46747[(7)]);
var inst_46690 = (state_46747[(9)]);
var inst_46708__$1 = cljs.core.seq(inst_46690);
var state_46747__$1 = (function (){var statearr_46783 = state_46747;
(statearr_46783[(7)] = inst_46708__$1);

return statearr_46783;
})();
if(inst_46708__$1){
var statearr_46784_48821 = state_46747__$1;
(statearr_46784_48821[(1)] = (14));

} else {
var statearr_46785_48822 = state_46747__$1;
(statearr_46785_48822[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (9))){
var inst_46735 = (state_46747[(2)]);
var inst_46736 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46747__$1 = (function (){var statearr_46786 = state_46747;
(statearr_46786[(15)] = inst_46735);

return statearr_46786;
})();
if(cljs.core.truth_(inst_46736)){
var statearr_46787_48823 = state_46747__$1;
(statearr_46787_48823[(1)] = (21));

} else {
var statearr_46788_48824 = state_46747__$1;
(statearr_46788_48824[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (5))){
var inst_46681 = cljs.core.async.close_BANG_(out);
var state_46747__$1 = state_46747;
var statearr_46789_48825 = state_46747__$1;
(statearr_46789_48825[(2)] = inst_46681);

(statearr_46789_48825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (14))){
var inst_46708 = (state_46747[(7)]);
var inst_46711 = cljs.core.chunked_seq_QMARK_(inst_46708);
var state_46747__$1 = state_46747;
if(inst_46711){
var statearr_46805_48826 = state_46747__$1;
(statearr_46805_48826[(1)] = (17));

} else {
var statearr_46806_48827 = state_46747__$1;
(statearr_46806_48827[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (16))){
var inst_46731 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46808_48833 = state_46747__$1;
(statearr_46808_48833[(2)] = inst_46731);

(statearr_46808_48833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (10))){
var inst_46693 = (state_46747[(11)]);
var inst_46691 = (state_46747[(12)]);
var inst_46700 = cljs.core._nth(inst_46691,inst_46693);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46747__$1,(13),out,inst_46700);
} else {
if((state_val_46748 === (18))){
var inst_46708 = (state_46747[(7)]);
var inst_46720 = cljs.core.first(inst_46708);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46747__$1,(20),out,inst_46720);
} else {
if((state_val_46748 === (8))){
var inst_46692 = (state_46747[(8)]);
var inst_46693 = (state_46747[(11)]);
var inst_46697 = (inst_46693 < inst_46692);
var inst_46698 = inst_46697;
var state_46747__$1 = state_46747;
if(cljs.core.truth_(inst_46698)){
var statearr_46821_48834 = state_46747__$1;
(statearr_46821_48834[(1)] = (10));

} else {
var statearr_46822_48835 = state_46747__$1;
(statearr_46822_48835[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_46829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46829[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__);

(statearr_46829[(1)] = (1));

return statearr_46829;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1 = (function (state_46747){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_46747);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46832){var ex__33424__auto__ = e46832;
var statearr_46834_48837 = state_46747;
(statearr_46834_48837[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_46747[(4)]))){
var statearr_46839_48838 = state_46747;
(statearr_46839_48838[(1)] = cljs.core.first((state_46747[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48839 = state_46747;
state_46747 = G__48839;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__ = function(state_46747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1.call(this,state_46747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46841 = f__33656__auto__();
(statearr_46841[(6)] = c__33655__auto__);

return statearr_46841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46845 = arguments.length;
switch (G__46845) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46865 = arguments.length;
switch (G__46865) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46880 = arguments.length;
switch (G__46880) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_46913){
var state_val_46914 = (state_46913[(1)]);
if((state_val_46914 === (7))){
var inst_46908 = (state_46913[(2)]);
var state_46913__$1 = state_46913;
var statearr_46922_48849 = state_46913__$1;
(statearr_46922_48849[(2)] = inst_46908);

(statearr_46922_48849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (1))){
var inst_46890 = null;
var state_46913__$1 = (function (){var statearr_46923 = state_46913;
(statearr_46923[(7)] = inst_46890);

return statearr_46923;
})();
var statearr_46927_48856 = state_46913__$1;
(statearr_46927_48856[(2)] = null);

(statearr_46927_48856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (4))){
var inst_46893 = (state_46913[(8)]);
var inst_46893__$1 = (state_46913[(2)]);
var inst_46894 = (inst_46893__$1 == null);
var inst_46895 = cljs.core.not(inst_46894);
var state_46913__$1 = (function (){var statearr_46933 = state_46913;
(statearr_46933[(8)] = inst_46893__$1);

return statearr_46933;
})();
if(inst_46895){
var statearr_46937_48857 = state_46913__$1;
(statearr_46937_48857[(1)] = (5));

} else {
var statearr_46938_48858 = state_46913__$1;
(statearr_46938_48858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (6))){
var state_46913__$1 = state_46913;
var statearr_46939_48874 = state_46913__$1;
(statearr_46939_48874[(2)] = null);

(statearr_46939_48874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (3))){
var inst_46910 = (state_46913[(2)]);
var inst_46911 = cljs.core.async.close_BANG_(out);
var state_46913__$1 = (function (){var statearr_46940 = state_46913;
(statearr_46940[(9)] = inst_46910);

return statearr_46940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46913__$1,inst_46911);
} else {
if((state_val_46914 === (2))){
var state_46913__$1 = state_46913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46913__$1,(4),ch);
} else {
if((state_val_46914 === (11))){
var inst_46893 = (state_46913[(8)]);
var inst_46902 = (state_46913[(2)]);
var inst_46890 = inst_46893;
var state_46913__$1 = (function (){var statearr_46941 = state_46913;
(statearr_46941[(10)] = inst_46902);

(statearr_46941[(7)] = inst_46890);

return statearr_46941;
})();
var statearr_46942_48879 = state_46913__$1;
(statearr_46942_48879[(2)] = null);

(statearr_46942_48879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (9))){
var inst_46893 = (state_46913[(8)]);
var state_46913__$1 = state_46913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46913__$1,(11),out,inst_46893);
} else {
if((state_val_46914 === (5))){
var inst_46893 = (state_46913[(8)]);
var inst_46890 = (state_46913[(7)]);
var inst_46897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46893,inst_46890);
var state_46913__$1 = state_46913;
if(inst_46897){
var statearr_46952_48880 = state_46913__$1;
(statearr_46952_48880[(1)] = (8));

} else {
var statearr_46960_48881 = state_46913__$1;
(statearr_46960_48881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (10))){
var inst_46905 = (state_46913[(2)]);
var state_46913__$1 = state_46913;
var statearr_46967_48882 = state_46913__$1;
(statearr_46967_48882[(2)] = inst_46905);

(statearr_46967_48882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46914 === (8))){
var inst_46890 = (state_46913[(7)]);
var tmp46944 = inst_46890;
var inst_46890__$1 = tmp46944;
var state_46913__$1 = (function (){var statearr_46971 = state_46913;
(statearr_46971[(7)] = inst_46890__$1);

return statearr_46971;
})();
var statearr_46975_48885 = state_46913__$1;
(statearr_46975_48885[(2)] = null);

(statearr_46975_48885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_46976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46976[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_46976[(1)] = (1));

return statearr_46976;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_46913){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_46913);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e46977){var ex__33424__auto__ = e46977;
var statearr_46978_48886 = state_46913;
(statearr_46978_48886[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_46913[(4)]))){
var statearr_46979_48891 = state_46913;
(statearr_46979_48891[(1)] = cljs.core.first((state_46913[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48892 = state_46913;
state_46913 = G__48892;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_46913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_46913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_46980 = f__33656__auto__();
(statearr_46980[(6)] = c__33655__auto___48848);

return statearr_46980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46996 = arguments.length;
switch (G__46996) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_47039){
var state_val_47040 = (state_47039[(1)]);
if((state_val_47040 === (7))){
var inst_47034 = (state_47039[(2)]);
var state_47039__$1 = state_47039;
var statearr_47044_48910 = state_47039__$1;
(statearr_47044_48910[(2)] = inst_47034);

(statearr_47044_48910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (1))){
var inst_46997 = (new Array(n));
var inst_46998 = inst_46997;
var inst_46999 = (0);
var state_47039__$1 = (function (){var statearr_47045 = state_47039;
(statearr_47045[(7)] = inst_46999);

(statearr_47045[(8)] = inst_46998);

return statearr_47045;
})();
var statearr_47046_48916 = state_47039__$1;
(statearr_47046_48916[(2)] = null);

(statearr_47046_48916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (4))){
var inst_47002 = (state_47039[(9)]);
var inst_47002__$1 = (state_47039[(2)]);
var inst_47006 = (inst_47002__$1 == null);
var inst_47007 = cljs.core.not(inst_47006);
var state_47039__$1 = (function (){var statearr_47047 = state_47039;
(statearr_47047[(9)] = inst_47002__$1);

return statearr_47047;
})();
if(inst_47007){
var statearr_47048_48918 = state_47039__$1;
(statearr_47048_48918[(1)] = (5));

} else {
var statearr_47049_48919 = state_47039__$1;
(statearr_47049_48919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (15))){
var inst_47027 = (state_47039[(2)]);
var state_47039__$1 = state_47039;
var statearr_47050_48924 = state_47039__$1;
(statearr_47050_48924[(2)] = inst_47027);

(statearr_47050_48924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (13))){
var state_47039__$1 = state_47039;
var statearr_47051_48927 = state_47039__$1;
(statearr_47051_48927[(2)] = null);

(statearr_47051_48927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (6))){
var inst_46999 = (state_47039[(7)]);
var inst_47023 = (inst_46999 > (0));
var state_47039__$1 = state_47039;
if(cljs.core.truth_(inst_47023)){
var statearr_47053_48934 = state_47039__$1;
(statearr_47053_48934[(1)] = (12));

} else {
var statearr_47054_48936 = state_47039__$1;
(statearr_47054_48936[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (3))){
var inst_47036 = (state_47039[(2)]);
var state_47039__$1 = state_47039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47039__$1,inst_47036);
} else {
if((state_val_47040 === (12))){
var inst_46998 = (state_47039[(8)]);
var inst_47025 = cljs.core.vec(inst_46998);
var state_47039__$1 = state_47039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47039__$1,(15),out,inst_47025);
} else {
if((state_val_47040 === (2))){
var state_47039__$1 = state_47039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47039__$1,(4),ch);
} else {
if((state_val_47040 === (11))){
var inst_47017 = (state_47039[(2)]);
var inst_47018 = (new Array(n));
var inst_46998 = inst_47018;
var inst_46999 = (0);
var state_47039__$1 = (function (){var statearr_47071 = state_47039;
(statearr_47071[(7)] = inst_46999);

(statearr_47071[(10)] = inst_47017);

(statearr_47071[(8)] = inst_46998);

return statearr_47071;
})();
var statearr_47079_48967 = state_47039__$1;
(statearr_47079_48967[(2)] = null);

(statearr_47079_48967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (9))){
var inst_46998 = (state_47039[(8)]);
var inst_47015 = cljs.core.vec(inst_46998);
var state_47039__$1 = state_47039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47039__$1,(11),out,inst_47015);
} else {
if((state_val_47040 === (5))){
var inst_46999 = (state_47039[(7)]);
var inst_47002 = (state_47039[(9)]);
var inst_47010 = (state_47039[(11)]);
var inst_46998 = (state_47039[(8)]);
var inst_47009 = (inst_46998[inst_46999] = inst_47002);
var inst_47010__$1 = (inst_46999 + (1));
var inst_47011 = (inst_47010__$1 < n);
var state_47039__$1 = (function (){var statearr_47091 = state_47039;
(statearr_47091[(11)] = inst_47010__$1);

(statearr_47091[(12)] = inst_47009);

return statearr_47091;
})();
if(cljs.core.truth_(inst_47011)){
var statearr_47092_48968 = state_47039__$1;
(statearr_47092_48968[(1)] = (8));

} else {
var statearr_47100_48969 = state_47039__$1;
(statearr_47100_48969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (14))){
var inst_47030 = (state_47039[(2)]);
var inst_47031 = cljs.core.async.close_BANG_(out);
var state_47039__$1 = (function (){var statearr_47104 = state_47039;
(statearr_47104[(13)] = inst_47030);

return statearr_47104;
})();
var statearr_47105_48970 = state_47039__$1;
(statearr_47105_48970[(2)] = inst_47031);

(statearr_47105_48970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (10))){
var inst_47021 = (state_47039[(2)]);
var state_47039__$1 = state_47039;
var statearr_47108_48971 = state_47039__$1;
(statearr_47108_48971[(2)] = inst_47021);

(statearr_47108_48971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47040 === (8))){
var inst_47010 = (state_47039[(11)]);
var inst_46998 = (state_47039[(8)]);
var tmp47102 = inst_46998;
var inst_46998__$1 = tmp47102;
var inst_46999 = inst_47010;
var state_47039__$1 = (function (){var statearr_47123 = state_47039;
(statearr_47123[(7)] = inst_46999);

(statearr_47123[(8)] = inst_46998__$1);

return statearr_47123;
})();
var statearr_47124_48972 = state_47039__$1;
(statearr_47124_48972[(2)] = null);

(statearr_47124_48972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_47125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47125[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_47125[(1)] = (1));

return statearr_47125;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_47039){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_47039);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e47127){var ex__33424__auto__ = e47127;
var statearr_47128_48973 = state_47039;
(statearr_47128_48973[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_47039[(4)]))){
var statearr_47129_48974 = state_47039;
(statearr_47129_48974[(1)] = cljs.core.first((state_47039[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48975 = state_47039;
state_47039 = G__48975;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_47039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_47039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_47130 = f__33656__auto__();
(statearr_47130[(6)] = c__33655__auto___48902);

return statearr_47130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47139 = arguments.length;
switch (G__47139) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33655__auto___48985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_47197){
var state_val_47198 = (state_47197[(1)]);
if((state_val_47198 === (7))){
var inst_47191 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47203_48987 = state_47197__$1;
(statearr_47203_48987[(2)] = inst_47191);

(statearr_47203_48987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (1))){
var inst_47142 = [];
var inst_47143 = inst_47142;
var inst_47144 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47197__$1 = (function (){var statearr_47204 = state_47197;
(statearr_47204[(7)] = inst_47143);

(statearr_47204[(8)] = inst_47144);

return statearr_47204;
})();
var statearr_47205_48988 = state_47197__$1;
(statearr_47205_48988[(2)] = null);

(statearr_47205_48988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (4))){
var inst_47149 = (state_47197[(9)]);
var inst_47149__$1 = (state_47197[(2)]);
var inst_47150 = (inst_47149__$1 == null);
var inst_47151 = cljs.core.not(inst_47150);
var state_47197__$1 = (function (){var statearr_47207 = state_47197;
(statearr_47207[(9)] = inst_47149__$1);

return statearr_47207;
})();
if(inst_47151){
var statearr_47209_48992 = state_47197__$1;
(statearr_47209_48992[(1)] = (5));

} else {
var statearr_47210_48993 = state_47197__$1;
(statearr_47210_48993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (15))){
var inst_47143 = (state_47197[(7)]);
var inst_47183 = cljs.core.vec(inst_47143);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47197__$1,(18),out,inst_47183);
} else {
if((state_val_47198 === (13))){
var inst_47177 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47219_48998 = state_47197__$1;
(statearr_47219_48998[(2)] = inst_47177);

(statearr_47219_48998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (6))){
var inst_47143 = (state_47197[(7)]);
var inst_47179 = inst_47143.length;
var inst_47180 = (inst_47179 > (0));
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47180)){
var statearr_47221_48999 = state_47197__$1;
(statearr_47221_48999[(1)] = (15));

} else {
var statearr_47222_49000 = state_47197__$1;
(statearr_47222_49000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (17))){
var inst_47188 = (state_47197[(2)]);
var inst_47189 = cljs.core.async.close_BANG_(out);
var state_47197__$1 = (function (){var statearr_47227 = state_47197;
(statearr_47227[(10)] = inst_47188);

return statearr_47227;
})();
var statearr_47232_49002 = state_47197__$1;
(statearr_47232_49002[(2)] = inst_47189);

(statearr_47232_49002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (3))){
var inst_47193 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47197__$1,inst_47193);
} else {
if((state_val_47198 === (12))){
var inst_47143 = (state_47197[(7)]);
var inst_47167 = cljs.core.vec(inst_47143);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47197__$1,(14),out,inst_47167);
} else {
if((state_val_47198 === (2))){
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47197__$1,(4),ch);
} else {
if((state_val_47198 === (11))){
var inst_47149 = (state_47197[(9)]);
var inst_47153 = (state_47197[(11)]);
var inst_47143 = (state_47197[(7)]);
var inst_47164 = inst_47143.push(inst_47149);
var tmp47239 = inst_47143;
var inst_47143__$1 = tmp47239;
var inst_47144 = inst_47153;
var state_47197__$1 = (function (){var statearr_47243 = state_47197;
(statearr_47243[(7)] = inst_47143__$1);

(statearr_47243[(8)] = inst_47144);

(statearr_47243[(12)] = inst_47164);

return statearr_47243;
})();
var statearr_47244_49046 = state_47197__$1;
(statearr_47244_49046[(2)] = null);

(statearr_47244_49046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (9))){
var inst_47144 = (state_47197[(8)]);
var inst_47160 = cljs.core.keyword_identical_QMARK_(inst_47144,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47197__$1 = state_47197;
var statearr_47246_49047 = state_47197__$1;
(statearr_47246_49047[(2)] = inst_47160);

(statearr_47246_49047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (5))){
var inst_47149 = (state_47197[(9)]);
var inst_47156 = (state_47197[(13)]);
var inst_47153 = (state_47197[(11)]);
var inst_47144 = (state_47197[(8)]);
var inst_47153__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47149) : f.call(null,inst_47149));
var inst_47156__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47153__$1,inst_47144);
var state_47197__$1 = (function (){var statearr_47250 = state_47197;
(statearr_47250[(13)] = inst_47156__$1);

(statearr_47250[(11)] = inst_47153__$1);

return statearr_47250;
})();
if(inst_47156__$1){
var statearr_47251_49048 = state_47197__$1;
(statearr_47251_49048[(1)] = (8));

} else {
var statearr_47252_49049 = state_47197__$1;
(statearr_47252_49049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (14))){
var inst_47149 = (state_47197[(9)]);
var inst_47153 = (state_47197[(11)]);
var inst_47169 = (state_47197[(2)]);
var inst_47173 = [];
var inst_47174 = inst_47173.push(inst_47149);
var inst_47143 = inst_47173;
var inst_47144 = inst_47153;
var state_47197__$1 = (function (){var statearr_47253 = state_47197;
(statearr_47253[(14)] = inst_47174);

(statearr_47253[(7)] = inst_47143);

(statearr_47253[(15)] = inst_47169);

(statearr_47253[(8)] = inst_47144);

return statearr_47253;
})();
var statearr_47254_49066 = state_47197__$1;
(statearr_47254_49066[(2)] = null);

(statearr_47254_49066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (16))){
var state_47197__$1 = state_47197;
var statearr_47255_49068 = state_47197__$1;
(statearr_47255_49068[(2)] = null);

(statearr_47255_49068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (10))){
var inst_47162 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47162)){
var statearr_47257_49070 = state_47197__$1;
(statearr_47257_49070[(1)] = (11));

} else {
var statearr_47258_49075 = state_47197__$1;
(statearr_47258_49075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (18))){
var inst_47185 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47259_49078 = state_47197__$1;
(statearr_47259_49078[(2)] = inst_47185);

(statearr_47259_49078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (8))){
var inst_47156 = (state_47197[(13)]);
var state_47197__$1 = state_47197;
var statearr_47260_49083 = state_47197__$1;
(statearr_47260_49083[(2)] = inst_47156);

(statearr_47260_49083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33421__auto__ = null;
var cljs$core$async$state_machine__33421__auto____0 = (function (){
var statearr_47286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47286[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_47286[(1)] = (1));

return statearr_47286;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_47197){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_47197);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e47287){var ex__33424__auto__ = e47287;
var statearr_47288_49114 = state_47197;
(statearr_47288_49114[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_47197[(4)]))){
var statearr_47291_49115 = state_47197;
(statearr_47291_49115[(1)] = cljs.core.first((state_47197[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49116 = state_47197;
state_47197 = G__49116;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_47197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_47197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_47293 = f__33656__auto__();
(statearr_47293[(6)] = c__33655__auto___48985);

return statearr_47293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
