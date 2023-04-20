goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42278 = arguments.length;
switch (G__42278) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42281 = (function (f,blockable,meta42282){
this.f = f;
this.blockable = blockable;
this.meta42282 = meta42282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42283,meta42282__$1){
var self__ = this;
var _42283__$1 = this;
return (new cljs.core.async.t_cljs$core$async42281(self__.f,self__.blockable,meta42282__$1));
}));

(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42283){
var self__ = this;
var _42283__$1 = this;
return self__.meta42282;
}));

(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42282","meta42282",1463679847,null)], null);
}));

(cljs.core.async.t_cljs$core$async42281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42281");

(cljs.core.async.t_cljs$core$async42281.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42281.
 */
cljs.core.async.__GT_t_cljs$core$async42281 = (function cljs$core$async$__GT_t_cljs$core$async42281(f__$1,blockable__$1,meta42282){
return (new cljs.core.async.t_cljs$core$async42281(f__$1,blockable__$1,meta42282));
});

}

return (new cljs.core.async.t_cljs$core$async42281(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42303 = arguments.length;
switch (G__42303) {
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
var G__42306 = arguments.length;
switch (G__42306) {
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
var G__42334 = arguments.length;
switch (G__42334) {
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
var val_44484 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44484) : fn1.call(null,val_44484));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44484) : fn1.call(null,val_44484));
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
var G__42337 = arguments.length;
switch (G__42337) {
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
var n__5636__auto___44492 = n;
var x_44493 = (0);
while(true){
if((x_44493 < n__5636__auto___44492)){
(a[x_44493] = x_44493);

var G__44494 = (x_44493 + (1));
x_44493 = G__44494;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42359 = (function (flag,meta42360){
this.flag = flag;
this.meta42360 = meta42360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42361,meta42360__$1){
var self__ = this;
var _42361__$1 = this;
return (new cljs.core.async.t_cljs$core$async42359(self__.flag,meta42360__$1));
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42361){
var self__ = this;
var _42361__$1 = this;
return self__.meta42360;
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42360","meta42360",2052518135,null)], null);
}));

(cljs.core.async.t_cljs$core$async42359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42359");

(cljs.core.async.t_cljs$core$async42359.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42359.
 */
cljs.core.async.__GT_t_cljs$core$async42359 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42359(flag__$1,meta42360){
return (new cljs.core.async.t_cljs$core$async42359(flag__$1,meta42360));
});

}

return (new cljs.core.async.t_cljs$core$async42359(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42363 = (function (flag,cb,meta42364){
this.flag = flag;
this.cb = cb;
this.meta42364 = meta42364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42365,meta42364__$1){
var self__ = this;
var _42365__$1 = this;
return (new cljs.core.async.t_cljs$core$async42363(self__.flag,self__.cb,meta42364__$1));
}));

(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42365){
var self__ = this;
var _42365__$1 = this;
return self__.meta42364;
}));

(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42364","meta42364",-753521282,null)], null);
}));

(cljs.core.async.t_cljs$core$async42363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42363");

(cljs.core.async.t_cljs$core$async42363.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42363.
 */
cljs.core.async.__GT_t_cljs$core$async42363 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42363(flag__$1,cb__$1,meta42364){
return (new cljs.core.async.t_cljs$core$async42363(flag__$1,cb__$1,meta42364));
});

}

return (new cljs.core.async.t_cljs$core$async42363(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42367_SHARP_){
var G__42370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42367_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42370) : fret.call(null,G__42370));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42368_SHARP_){
var G__42371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42368_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42371) : fret.call(null,G__42371));
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
var G__44504 = (i + (1));
i = G__44504;
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
var len__5769__auto___44505 = arguments.length;
var i__5770__auto___44506 = (0);
while(true){
if((i__5770__auto___44506 < len__5769__auto___44505)){
args__5775__auto__.push((arguments[i__5770__auto___44506]));

var G__44507 = (i__5770__auto___44506 + (1));
i__5770__auto___44506 = G__44507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42375){
var map__42376 = p__42375;
var map__42376__$1 = cljs.core.__destructure_map(map__42376);
var opts = map__42376__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42373){
var G__42374 = cljs.core.first(seq42373);
var seq42373__$1 = cljs.core.next(seq42373);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42374,seq42373__$1);
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
var G__42380 = arguments.length;
switch (G__42380) {
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
var c__42198__auto___44510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42410){
var state_val_42411 = (state_42410[(1)]);
if((state_val_42411 === (7))){
var inst_42406 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
var statearr_42414_44511 = state_42410__$1;
(statearr_42414_44511[(2)] = inst_42406);

(statearr_42414_44511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (1))){
var state_42410__$1 = state_42410;
var statearr_42415_44512 = state_42410__$1;
(statearr_42415_44512[(2)] = null);

(statearr_42415_44512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (4))){
var inst_42387 = (state_42410[(7)]);
var inst_42387__$1 = (state_42410[(2)]);
var inst_42389 = (inst_42387__$1 == null);
var state_42410__$1 = (function (){var statearr_42417 = state_42410;
(statearr_42417[(7)] = inst_42387__$1);

return statearr_42417;
})();
if(cljs.core.truth_(inst_42389)){
var statearr_42418_44517 = state_42410__$1;
(statearr_42418_44517[(1)] = (5));

} else {
var statearr_42419_44518 = state_42410__$1;
(statearr_42419_44518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (13))){
var state_42410__$1 = state_42410;
var statearr_42420_44519 = state_42410__$1;
(statearr_42420_44519[(2)] = null);

(statearr_42420_44519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (6))){
var inst_42387 = (state_42410[(7)]);
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42410__$1,(11),to,inst_42387);
} else {
if((state_val_42411 === (3))){
var inst_42408 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42410__$1,inst_42408);
} else {
if((state_val_42411 === (12))){
var state_42410__$1 = state_42410;
var statearr_42422_44520 = state_42410__$1;
(statearr_42422_44520[(2)] = null);

(statearr_42422_44520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (2))){
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42410__$1,(4),from);
} else {
if((state_val_42411 === (11))){
var inst_42398 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
if(cljs.core.truth_(inst_42398)){
var statearr_42423_44521 = state_42410__$1;
(statearr_42423_44521[(1)] = (12));

} else {
var statearr_42424_44522 = state_42410__$1;
(statearr_42424_44522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (9))){
var state_42410__$1 = state_42410;
var statearr_42425_44523 = state_42410__$1;
(statearr_42425_44523[(2)] = null);

(statearr_42425_44523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (5))){
var state_42410__$1 = state_42410;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42426_44528 = state_42410__$1;
(statearr_42426_44528[(1)] = (8));

} else {
var statearr_42427_44529 = state_42410__$1;
(statearr_42427_44529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (14))){
var inst_42404 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
var statearr_42429_44530 = state_42410__$1;
(statearr_42429_44530[(2)] = inst_42404);

(statearr_42429_44530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (10))){
var inst_42395 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
var statearr_42430_44533 = state_42410__$1;
(statearr_42430_44533[(2)] = inst_42395);

(statearr_42430_44533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (8))){
var inst_42392 = cljs.core.async.close_BANG_(to);
var state_42410__$1 = state_42410;
var statearr_42431_44536 = state_42410__$1;
(statearr_42431_44536[(2)] = inst_42392);

(statearr_42431_44536[(1)] = (10));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_42432 = [null,null,null,null,null,null,null,null];
(statearr_42432[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_42432[(1)] = (1));

return statearr_42432;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_42410){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42410);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42433){var ex__41954__auto__ = e42433;
var statearr_42434_44537 = state_42410;
(statearr_42434_44537[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42410[(4)]))){
var statearr_42435_44538 = state_42410;
(statearr_42435_44538[(1)] = cljs.core.first((state_42410[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44539 = state_42410;
state_42410 = G__44539;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_42410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_42410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42436 = f__42199__auto__();
(statearr_42436[(6)] = c__42198__auto___44510);

return statearr_42436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var process__$1 = (function (p__42439){
var vec__42440 = p__42439;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42440,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42440,(1),null);
var job = vec__42440;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42198__auto___44540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42447){
var state_val_42448 = (state_42447[(1)]);
if((state_val_42448 === (1))){
var state_42447__$1 = state_42447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42447__$1,(2),res,v);
} else {
if((state_val_42448 === (2))){
var inst_42444 = (state_42447[(2)]);
var inst_42445 = cljs.core.async.close_BANG_(res);
var state_42447__$1 = (function (){var statearr_42449 = state_42447;
(statearr_42449[(7)] = inst_42444);

return statearr_42449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42447__$1,inst_42445);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_42450 = [null,null,null,null,null,null,null,null];
(statearr_42450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_42450[(1)] = (1));

return statearr_42450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_42447){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42447);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42451){var ex__41954__auto__ = e42451;
var statearr_42452_44541 = state_42447;
(statearr_42452_44541[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42447[(4)]))){
var statearr_42454_44542 = state_42447;
(statearr_42454_44542[(1)] = cljs.core.first((state_42447[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44543 = state_42447;
state_42447 = G__44543;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_42447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_42447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42455 = f__42199__auto__();
(statearr_42455[(6)] = c__42198__auto___44540);

return statearr_42455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42456){
var vec__42457 = p__42456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(1),null);
var job = vec__42457;
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
var n__5636__auto___44544 = n;
var __44545 = (0);
while(true){
if((__44545 < n__5636__auto___44544)){
var G__42460_44546 = type;
var G__42460_44547__$1 = (((G__42460_44546 instanceof cljs.core.Keyword))?G__42460_44546.fqn:null);
switch (G__42460_44547__$1) {
case "compute":
var c__42198__auto___44549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44545,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = ((function (__44545,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function (state_42474){
var state_val_42475 = (state_42474[(1)]);
if((state_val_42475 === (1))){
var state_42474__$1 = state_42474;
var statearr_42476_44550 = state_42474__$1;
(statearr_42476_44550[(2)] = null);

(statearr_42476_44550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (2))){
var state_42474__$1 = state_42474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42474__$1,(4),jobs);
} else {
if((state_val_42475 === (3))){
var inst_42472 = (state_42474[(2)]);
var state_42474__$1 = state_42474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42474__$1,inst_42472);
} else {
if((state_val_42475 === (4))){
var inst_42464 = (state_42474[(2)]);
var inst_42465 = process__$1(inst_42464);
var state_42474__$1 = state_42474;
if(cljs.core.truth_(inst_42465)){
var statearr_42478_44551 = state_42474__$1;
(statearr_42478_44551[(1)] = (5));

} else {
var statearr_42479_44552 = state_42474__$1;
(statearr_42479_44552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (5))){
var state_42474__$1 = state_42474;
var statearr_42480_44553 = state_42474__$1;
(statearr_42480_44553[(2)] = null);

(statearr_42480_44553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (6))){
var state_42474__$1 = state_42474;
var statearr_42481_44554 = state_42474__$1;
(statearr_42481_44554[(2)] = null);

(statearr_42481_44554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42475 === (7))){
var inst_42470 = (state_42474[(2)]);
var state_42474__$1 = state_42474;
var statearr_42482_44555 = state_42474__$1;
(statearr_42482_44555[(2)] = inst_42470);

(statearr_42482_44555[(1)] = (3));


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
});})(__44545,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
;
return ((function (__44545,switch__41950__auto__,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_42483 = [null,null,null,null,null,null,null];
(statearr_42483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_42483[(1)] = (1));

return statearr_42483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_42474){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42474);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42484){var ex__41954__auto__ = e42484;
var statearr_42485_44556 = state_42474;
(statearr_42485_44556[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42474[(4)]))){
var statearr_42487_44557 = state_42474;
(statearr_42487_44557[(1)] = cljs.core.first((state_42474[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44558 = state_42474;
state_42474 = G__44558;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_42474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_42474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
;})(__44545,switch__41950__auto__,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
})();
var state__42200__auto__ = (function (){var statearr_42488 = f__42199__auto__();
(statearr_42488[(6)] = c__42198__auto___44549);

return statearr_42488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
});})(__44545,c__42198__auto___44549,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
);


break;
case "async":
var c__42198__auto___44559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44545,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = ((function (__44545,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function (state_42501){
var state_val_42502 = (state_42501[(1)]);
if((state_val_42502 === (1))){
var state_42501__$1 = state_42501;
var statearr_42503_44560 = state_42501__$1;
(statearr_42503_44560[(2)] = null);

(statearr_42503_44560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42502 === (2))){
var state_42501__$1 = state_42501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42501__$1,(4),jobs);
} else {
if((state_val_42502 === (3))){
var inst_42499 = (state_42501[(2)]);
var state_42501__$1 = state_42501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42501__$1,inst_42499);
} else {
if((state_val_42502 === (4))){
var inst_42491 = (state_42501[(2)]);
var inst_42492 = async(inst_42491);
var state_42501__$1 = state_42501;
if(cljs.core.truth_(inst_42492)){
var statearr_42505_44561 = state_42501__$1;
(statearr_42505_44561[(1)] = (5));

} else {
var statearr_42506_44562 = state_42501__$1;
(statearr_42506_44562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42502 === (5))){
var state_42501__$1 = state_42501;
var statearr_42507_44563 = state_42501__$1;
(statearr_42507_44563[(2)] = null);

(statearr_42507_44563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42502 === (6))){
var state_42501__$1 = state_42501;
var statearr_42508_44564 = state_42501__$1;
(statearr_42508_44564[(2)] = null);

(statearr_42508_44564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42502 === (7))){
var inst_42497 = (state_42501[(2)]);
var state_42501__$1 = state_42501;
var statearr_42509_44566 = state_42501__$1;
(statearr_42509_44566[(2)] = inst_42497);

(statearr_42509_44566[(1)] = (3));


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
});})(__44545,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
;
return ((function (__44545,switch__41950__auto__,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_42510 = [null,null,null,null,null,null,null];
(statearr_42510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_42510[(1)] = (1));

return statearr_42510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_42501){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42501);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42512){var ex__41954__auto__ = e42512;
var statearr_42513_44567 = state_42501;
(statearr_42513_44567[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42501[(4)]))){
var statearr_42514_44568 = state_42501;
(statearr_42514_44568[(1)] = cljs.core.first((state_42501[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44569 = state_42501;
state_42501 = G__44569;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_42501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_42501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
;})(__44545,switch__41950__auto__,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
})();
var state__42200__auto__ = (function (){var statearr_42515 = f__42199__auto__();
(statearr_42515[(6)] = c__42198__auto___44559);

return statearr_42515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
});})(__44545,c__42198__auto___44559,G__42460_44546,G__42460_44547__$1,n__5636__auto___44544,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42460_44547__$1)].join('')));

}

var G__44570 = (__44545 + (1));
__44545 = G__44570;
continue;
} else {
}
break;
}

var c__42198__auto___44571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42538){
var state_val_42539 = (state_42538[(1)]);
if((state_val_42539 === (7))){
var inst_42534 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
var statearr_42541_44572 = state_42538__$1;
(statearr_42541_44572[(2)] = inst_42534);

(statearr_42541_44572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (1))){
var state_42538__$1 = state_42538;
var statearr_42542_44574 = state_42538__$1;
(statearr_42542_44574[(2)] = null);

(statearr_42542_44574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (4))){
var inst_42518 = (state_42538[(7)]);
var inst_42518__$1 = (state_42538[(2)]);
var inst_42519 = (inst_42518__$1 == null);
var state_42538__$1 = (function (){var statearr_42543 = state_42538;
(statearr_42543[(7)] = inst_42518__$1);

return statearr_42543;
})();
if(cljs.core.truth_(inst_42519)){
var statearr_42544_44575 = state_42538__$1;
(statearr_42544_44575[(1)] = (5));

} else {
var statearr_42545_44576 = state_42538__$1;
(statearr_42545_44576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (6))){
var inst_42518 = (state_42538[(7)]);
var inst_42523 = (state_42538[(8)]);
var inst_42523__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42526 = [inst_42518,inst_42523__$1];
var inst_42527 = (new cljs.core.PersistentVector(null,2,(5),inst_42525,inst_42526,null));
var state_42538__$1 = (function (){var statearr_42547 = state_42538;
(statearr_42547[(8)] = inst_42523__$1);

return statearr_42547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42538__$1,(8),jobs,inst_42527);
} else {
if((state_val_42539 === (3))){
var inst_42536 = (state_42538[(2)]);
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42538__$1,inst_42536);
} else {
if((state_val_42539 === (2))){
var state_42538__$1 = state_42538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42538__$1,(4),from);
} else {
if((state_val_42539 === (9))){
var inst_42531 = (state_42538[(2)]);
var state_42538__$1 = (function (){var statearr_42548 = state_42538;
(statearr_42548[(9)] = inst_42531);

return statearr_42548;
})();
var statearr_42549_44578 = state_42538__$1;
(statearr_42549_44578[(2)] = null);

(statearr_42549_44578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (5))){
var inst_42521 = cljs.core.async.close_BANG_(jobs);
var state_42538__$1 = state_42538;
var statearr_42550_44579 = state_42538__$1;
(statearr_42550_44579[(2)] = inst_42521);

(statearr_42550_44579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42539 === (8))){
var inst_42523 = (state_42538[(8)]);
var inst_42529 = (state_42538[(2)]);
var state_42538__$1 = (function (){var statearr_42551 = state_42538;
(statearr_42551[(10)] = inst_42529);

return statearr_42551;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42538__$1,(9),results,inst_42523);
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
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_42553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_42553[(1)] = (1));

return statearr_42553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_42538){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42538);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42554){var ex__41954__auto__ = e42554;
var statearr_42555_44580 = state_42538;
(statearr_42555_44580[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42538[(4)]))){
var statearr_42556_44582 = state_42538;
(statearr_42556_44582[(1)] = cljs.core.first((state_42538[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44584 = state_42538;
state_42538 = G__44584;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_42538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_42538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42557 = f__42199__auto__();
(statearr_42557[(6)] = c__42198__auto___44571);

return statearr_42557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42596){
var state_val_42597 = (state_42596[(1)]);
if((state_val_42597 === (7))){
var inst_42592 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42598_44585 = state_42596__$1;
(statearr_42598_44585[(2)] = inst_42592);

(statearr_42598_44585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (20))){
var state_42596__$1 = state_42596;
var statearr_42599_44586 = state_42596__$1;
(statearr_42599_44586[(2)] = null);

(statearr_42599_44586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (1))){
var state_42596__$1 = state_42596;
var statearr_42601_44587 = state_42596__$1;
(statearr_42601_44587[(2)] = null);

(statearr_42601_44587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (4))){
var inst_42560 = (state_42596[(7)]);
var inst_42560__$1 = (state_42596[(2)]);
var inst_42561 = (inst_42560__$1 == null);
var state_42596__$1 = (function (){var statearr_42602 = state_42596;
(statearr_42602[(7)] = inst_42560__$1);

return statearr_42602;
})();
if(cljs.core.truth_(inst_42561)){
var statearr_42603_44588 = state_42596__$1;
(statearr_42603_44588[(1)] = (5));

} else {
var statearr_42604_44589 = state_42596__$1;
(statearr_42604_44589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (15))){
var inst_42574 = (state_42596[(8)]);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42596__$1,(18),to,inst_42574);
} else {
if((state_val_42597 === (21))){
var inst_42587 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42605_44590 = state_42596__$1;
(statearr_42605_44590[(2)] = inst_42587);

(statearr_42605_44590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (13))){
var inst_42589 = (state_42596[(2)]);
var state_42596__$1 = (function (){var statearr_42606 = state_42596;
(statearr_42606[(9)] = inst_42589);

return statearr_42606;
})();
var statearr_42607_44591 = state_42596__$1;
(statearr_42607_44591[(2)] = null);

(statearr_42607_44591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (6))){
var inst_42560 = (state_42596[(7)]);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42596__$1,(11),inst_42560);
} else {
if((state_val_42597 === (17))){
var inst_42582 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
if(cljs.core.truth_(inst_42582)){
var statearr_42609_44592 = state_42596__$1;
(statearr_42609_44592[(1)] = (19));

} else {
var statearr_42610_44593 = state_42596__$1;
(statearr_42610_44593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (3))){
var inst_42594 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42596__$1,inst_42594);
} else {
if((state_val_42597 === (12))){
var inst_42571 = (state_42596[(10)]);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42596__$1,(14),inst_42571);
} else {
if((state_val_42597 === (2))){
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42596__$1,(4),results);
} else {
if((state_val_42597 === (19))){
var state_42596__$1 = state_42596;
var statearr_42611_44599 = state_42596__$1;
(statearr_42611_44599[(2)] = null);

(statearr_42611_44599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (11))){
var inst_42571 = (state_42596[(2)]);
var state_42596__$1 = (function (){var statearr_42612 = state_42596;
(statearr_42612[(10)] = inst_42571);

return statearr_42612;
})();
var statearr_42613_44601 = state_42596__$1;
(statearr_42613_44601[(2)] = null);

(statearr_42613_44601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (9))){
var state_42596__$1 = state_42596;
var statearr_42614_44602 = state_42596__$1;
(statearr_42614_44602[(2)] = null);

(statearr_42614_44602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (5))){
var state_42596__$1 = state_42596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42615_44603 = state_42596__$1;
(statearr_42615_44603[(1)] = (8));

} else {
var statearr_42616_44604 = state_42596__$1;
(statearr_42616_44604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (14))){
var inst_42576 = (state_42596[(11)]);
var inst_42574 = (state_42596[(8)]);
var inst_42574__$1 = (state_42596[(2)]);
var inst_42575 = (inst_42574__$1 == null);
var inst_42576__$1 = cljs.core.not(inst_42575);
var state_42596__$1 = (function (){var statearr_42618 = state_42596;
(statearr_42618[(11)] = inst_42576__$1);

(statearr_42618[(8)] = inst_42574__$1);

return statearr_42618;
})();
if(inst_42576__$1){
var statearr_42619_44608 = state_42596__$1;
(statearr_42619_44608[(1)] = (15));

} else {
var statearr_42620_44609 = state_42596__$1;
(statearr_42620_44609[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (16))){
var inst_42576 = (state_42596[(11)]);
var state_42596__$1 = state_42596;
var statearr_42621_44610 = state_42596__$1;
(statearr_42621_44610[(2)] = inst_42576);

(statearr_42621_44610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (10))){
var inst_42568 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42622_44611 = state_42596__$1;
(statearr_42622_44611[(2)] = inst_42568);

(statearr_42622_44611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (18))){
var inst_42579 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42623_44612 = state_42596__$1;
(statearr_42623_44612[(2)] = inst_42579);

(statearr_42623_44612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (8))){
var inst_42565 = cljs.core.async.close_BANG_(to);
var state_42596__$1 = state_42596;
var statearr_42624_44614 = state_42596__$1;
(statearr_42624_44614[(2)] = inst_42565);

(statearr_42624_44614[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_42626 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_42626[(1)] = (1));

return statearr_42626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_42596){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42596);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42627){var ex__41954__auto__ = e42627;
var statearr_42628_44616 = state_42596;
(statearr_42628_44616[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42596[(4)]))){
var statearr_42629_44617 = state_42596;
(statearr_42629_44617[(1)] = cljs.core.first((state_42596[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44618 = state_42596;
state_42596 = G__44618;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_42596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_42596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42630 = f__42199__auto__();
(statearr_42630[(6)] = c__42198__auto__);

return statearr_42630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
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
var G__42633 = arguments.length;
switch (G__42633) {
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
var G__42635 = arguments.length;
switch (G__42635) {
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
var G__42638 = arguments.length;
switch (G__42638) {
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
var c__42198__auto___44625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42664){
var state_val_42665 = (state_42664[(1)]);
if((state_val_42665 === (7))){
var inst_42660 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42667_44626 = state_42664__$1;
(statearr_42667_44626[(2)] = inst_42660);

(statearr_42667_44626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (1))){
var state_42664__$1 = state_42664;
var statearr_42668_44627 = state_42664__$1;
(statearr_42668_44627[(2)] = null);

(statearr_42668_44627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (4))){
var inst_42641 = (state_42664[(7)]);
var inst_42641__$1 = (state_42664[(2)]);
var inst_42642 = (inst_42641__$1 == null);
var state_42664__$1 = (function (){var statearr_42669 = state_42664;
(statearr_42669[(7)] = inst_42641__$1);

return statearr_42669;
})();
if(cljs.core.truth_(inst_42642)){
var statearr_42670_44628 = state_42664__$1;
(statearr_42670_44628[(1)] = (5));

} else {
var statearr_42671_44629 = state_42664__$1;
(statearr_42671_44629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (13))){
var state_42664__$1 = state_42664;
var statearr_42672_44630 = state_42664__$1;
(statearr_42672_44630[(2)] = null);

(statearr_42672_44630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (6))){
var inst_42641 = (state_42664[(7)]);
var inst_42647 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42641) : p.call(null,inst_42641));
var state_42664__$1 = state_42664;
if(cljs.core.truth_(inst_42647)){
var statearr_42673_44632 = state_42664__$1;
(statearr_42673_44632[(1)] = (9));

} else {
var statearr_42674_44633 = state_42664__$1;
(statearr_42674_44633[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (3))){
var inst_42662 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42664__$1,inst_42662);
} else {
if((state_val_42665 === (12))){
var state_42664__$1 = state_42664;
var statearr_42676_44635 = state_42664__$1;
(statearr_42676_44635[(2)] = null);

(statearr_42676_44635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (2))){
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42664__$1,(4),ch);
} else {
if((state_val_42665 === (11))){
var inst_42641 = (state_42664[(7)]);
var inst_42651 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42664__$1,(8),inst_42651,inst_42641);
} else {
if((state_val_42665 === (9))){
var state_42664__$1 = state_42664;
var statearr_42677_44636 = state_42664__$1;
(statearr_42677_44636[(2)] = tc);

(statearr_42677_44636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (5))){
var inst_42644 = cljs.core.async.close_BANG_(tc);
var inst_42645 = cljs.core.async.close_BANG_(fc);
var state_42664__$1 = (function (){var statearr_42678 = state_42664;
(statearr_42678[(8)] = inst_42644);

return statearr_42678;
})();
var statearr_42679_44637 = state_42664__$1;
(statearr_42679_44637[(2)] = inst_42645);

(statearr_42679_44637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (14))){
var inst_42658 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42680_44638 = state_42664__$1;
(statearr_42680_44638[(2)] = inst_42658);

(statearr_42680_44638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (10))){
var state_42664__$1 = state_42664;
var statearr_42681_44639 = state_42664__$1;
(statearr_42681_44639[(2)] = fc);

(statearr_42681_44639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (8))){
var inst_42653 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
if(cljs.core.truth_(inst_42653)){
var statearr_42682_44643 = state_42664__$1;
(statearr_42682_44643[(1)] = (12));

} else {
var statearr_42684_44644 = state_42664__$1;
(statearr_42684_44644[(1)] = (13));

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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_42685 = [null,null,null,null,null,null,null,null,null];
(statearr_42685[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_42685[(1)] = (1));

return statearr_42685;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_42664){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42664);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42686){var ex__41954__auto__ = e42686;
var statearr_42687_44645 = state_42664;
(statearr_42687_44645[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42664[(4)]))){
var statearr_42688_44646 = state_42664;
(statearr_42688_44646[(1)] = cljs.core.first((state_42664[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44647 = state_42664;
state_42664 = G__44647;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42689 = f__42199__auto__();
(statearr_42689[(6)] = c__42198__auto___44625);

return statearr_42689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42714){
var state_val_42715 = (state_42714[(1)]);
if((state_val_42715 === (7))){
var inst_42710 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42716_44649 = state_42714__$1;
(statearr_42716_44649[(2)] = inst_42710);

(statearr_42716_44649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (1))){
var inst_42691 = init;
var inst_42693 = inst_42691;
var state_42714__$1 = (function (){var statearr_42717 = state_42714;
(statearr_42717[(7)] = inst_42693);

return statearr_42717;
})();
var statearr_42718_44650 = state_42714__$1;
(statearr_42718_44650[(2)] = null);

(statearr_42718_44650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (4))){
var inst_42697 = (state_42714[(8)]);
var inst_42697__$1 = (state_42714[(2)]);
var inst_42698 = (inst_42697__$1 == null);
var state_42714__$1 = (function (){var statearr_42721 = state_42714;
(statearr_42721[(8)] = inst_42697__$1);

return statearr_42721;
})();
if(cljs.core.truth_(inst_42698)){
var statearr_42722_44651 = state_42714__$1;
(statearr_42722_44651[(1)] = (5));

} else {
var statearr_42723_44652 = state_42714__$1;
(statearr_42723_44652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (6))){
var inst_42697 = (state_42714[(8)]);
var inst_42693 = (state_42714[(7)]);
var inst_42701 = (state_42714[(9)]);
var inst_42701__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42693,inst_42697) : f.call(null,inst_42693,inst_42697));
var inst_42702 = cljs.core.reduced_QMARK_(inst_42701__$1);
var state_42714__$1 = (function (){var statearr_42724 = state_42714;
(statearr_42724[(9)] = inst_42701__$1);

return statearr_42724;
})();
if(inst_42702){
var statearr_42725_44653 = state_42714__$1;
(statearr_42725_44653[(1)] = (8));

} else {
var statearr_42726_44654 = state_42714__$1;
(statearr_42726_44654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (3))){
var inst_42712 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42714__$1,inst_42712);
} else {
if((state_val_42715 === (2))){
var state_42714__$1 = state_42714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42714__$1,(4),ch);
} else {
if((state_val_42715 === (9))){
var inst_42701 = (state_42714[(9)]);
var inst_42693 = inst_42701;
var state_42714__$1 = (function (){var statearr_42727 = state_42714;
(statearr_42727[(7)] = inst_42693);

return statearr_42727;
})();
var statearr_42728_44655 = state_42714__$1;
(statearr_42728_44655[(2)] = null);

(statearr_42728_44655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (5))){
var inst_42693 = (state_42714[(7)]);
var state_42714__$1 = state_42714;
var statearr_42729_44660 = state_42714__$1;
(statearr_42729_44660[(2)] = inst_42693);

(statearr_42729_44660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (10))){
var inst_42708 = (state_42714[(2)]);
var state_42714__$1 = state_42714;
var statearr_42730_44661 = state_42714__$1;
(statearr_42730_44661[(2)] = inst_42708);

(statearr_42730_44661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42715 === (8))){
var inst_42701 = (state_42714[(9)]);
var inst_42704 = cljs.core.deref(inst_42701);
var state_42714__$1 = state_42714;
var statearr_42731_44662 = state_42714__$1;
(statearr_42731_44662[(2)] = inst_42704);

(statearr_42731_44662[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__41951__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41951__auto____0 = (function (){
var statearr_42732 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42732[(0)] = cljs$core$async$reduce_$_state_machine__41951__auto__);

(statearr_42732[(1)] = (1));

return statearr_42732;
});
var cljs$core$async$reduce_$_state_machine__41951__auto____1 = (function (state_42714){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42714);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42733){var ex__41954__auto__ = e42733;
var statearr_42734_44663 = state_42714;
(statearr_42734_44663[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42714[(4)]))){
var statearr_42736_44664 = state_42714;
(statearr_42736_44664[(1)] = cljs.core.first((state_42714[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44665 = state_42714;
state_42714 = G__44665;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41951__auto__ = function(state_42714){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41951__auto____1.call(this,state_42714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41951__auto____0;
cljs$core$async$reduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41951__auto____1;
return cljs$core$async$reduce_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42738 = f__42199__auto__();
(statearr_42738[(6)] = c__42198__auto__);

return statearr_42738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42744){
var state_val_42745 = (state_42744[(1)]);
if((state_val_42745 === (1))){
var inst_42739 = cljs.core.async.reduce(f__$1,init,ch);
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42744__$1,(2),inst_42739);
} else {
if((state_val_42745 === (2))){
var inst_42741 = (state_42744[(2)]);
var inst_42742 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42741) : f__$1.call(null,inst_42741));
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42744__$1,inst_42742);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41951__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41951__auto____0 = (function (){
var statearr_42746 = [null,null,null,null,null,null,null];
(statearr_42746[(0)] = cljs$core$async$transduce_$_state_machine__41951__auto__);

(statearr_42746[(1)] = (1));

return statearr_42746;
});
var cljs$core$async$transduce_$_state_machine__41951__auto____1 = (function (state_42744){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42744);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42747){var ex__41954__auto__ = e42747;
var statearr_42748_44669 = state_42744;
(statearr_42748_44669[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42744[(4)]))){
var statearr_42749_44670 = state_42744;
(statearr_42749_44670[(1)] = cljs.core.first((state_42744[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44671 = state_42744;
state_42744 = G__44671;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41951__auto__ = function(state_42744){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41951__auto____1.call(this,state_42744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41951__auto____0;
cljs$core$async$transduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41951__auto____1;
return cljs$core$async$transduce_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42750 = f__42199__auto__();
(statearr_42750[(6)] = c__42198__auto__);

return statearr_42750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
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
var G__42758 = arguments.length;
switch (G__42758) {
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
var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_42787){
var state_val_42788 = (state_42787[(1)]);
if((state_val_42788 === (7))){
var inst_42768 = (state_42787[(2)]);
var state_42787__$1 = state_42787;
var statearr_42793_44673 = state_42787__$1;
(statearr_42793_44673[(2)] = inst_42768);

(statearr_42793_44673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (1))){
var inst_42762 = cljs.core.seq(coll);
var inst_42763 = inst_42762;
var state_42787__$1 = (function (){var statearr_42795 = state_42787;
(statearr_42795[(7)] = inst_42763);

return statearr_42795;
})();
var statearr_42798_44674 = state_42787__$1;
(statearr_42798_44674[(2)] = null);

(statearr_42798_44674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (4))){
var inst_42763 = (state_42787[(7)]);
var inst_42766 = cljs.core.first(inst_42763);
var state_42787__$1 = state_42787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42787__$1,(7),ch,inst_42766);
} else {
if((state_val_42788 === (13))){
var inst_42781 = (state_42787[(2)]);
var state_42787__$1 = state_42787;
var statearr_42800_44675 = state_42787__$1;
(statearr_42800_44675[(2)] = inst_42781);

(statearr_42800_44675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (6))){
var inst_42771 = (state_42787[(2)]);
var state_42787__$1 = state_42787;
if(cljs.core.truth_(inst_42771)){
var statearr_42804_44676 = state_42787__$1;
(statearr_42804_44676[(1)] = (8));

} else {
var statearr_42805_44677 = state_42787__$1;
(statearr_42805_44677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (3))){
var inst_42785 = (state_42787[(2)]);
var state_42787__$1 = state_42787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42787__$1,inst_42785);
} else {
if((state_val_42788 === (12))){
var state_42787__$1 = state_42787;
var statearr_42806_44678 = state_42787__$1;
(statearr_42806_44678[(2)] = null);

(statearr_42806_44678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (2))){
var inst_42763 = (state_42787[(7)]);
var state_42787__$1 = state_42787;
if(cljs.core.truth_(inst_42763)){
var statearr_42807_44679 = state_42787__$1;
(statearr_42807_44679[(1)] = (4));

} else {
var statearr_42809_44680 = state_42787__$1;
(statearr_42809_44680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (11))){
var inst_42778 = cljs.core.async.close_BANG_(ch);
var state_42787__$1 = state_42787;
var statearr_42810_44682 = state_42787__$1;
(statearr_42810_44682[(2)] = inst_42778);

(statearr_42810_44682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (9))){
var state_42787__$1 = state_42787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42811_44684 = state_42787__$1;
(statearr_42811_44684[(1)] = (11));

} else {
var statearr_42814_44685 = state_42787__$1;
(statearr_42814_44685[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (5))){
var inst_42763 = (state_42787[(7)]);
var state_42787__$1 = state_42787;
var statearr_42816_44686 = state_42787__$1;
(statearr_42816_44686[(2)] = inst_42763);

(statearr_42816_44686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (10))){
var inst_42783 = (state_42787[(2)]);
var state_42787__$1 = state_42787;
var statearr_42818_44687 = state_42787__$1;
(statearr_42818_44687[(2)] = inst_42783);

(statearr_42818_44687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42788 === (8))){
var inst_42763 = (state_42787[(7)]);
var inst_42773 = cljs.core.next(inst_42763);
var inst_42763__$1 = inst_42773;
var state_42787__$1 = (function (){var statearr_42820 = state_42787;
(statearr_42820[(7)] = inst_42763__$1);

return statearr_42820;
})();
var statearr_42823_44688 = state_42787__$1;
(statearr_42823_44688[(2)] = null);

(statearr_42823_44688[(1)] = (2));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_42825 = [null,null,null,null,null,null,null,null];
(statearr_42825[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_42825[(1)] = (1));

return statearr_42825;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_42787){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_42787);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e42828){var ex__41954__auto__ = e42828;
var statearr_42830_44689 = state_42787;
(statearr_42830_44689[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_42787[(4)]))){
var statearr_42831_44690 = state_42787;
(statearr_42831_44690[(1)] = cljs.core.first((state_42787[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44691 = state_42787;
state_42787 = G__44691;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_42787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_42787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_42833 = f__42199__auto__();
(statearr_42833[(6)] = c__42198__auto__);

return statearr_42833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
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
var G__42842 = arguments.length;
switch (G__42842) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44700 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_44700(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44704 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_44704(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44708 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_44708(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44712 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_44712(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42871 = (function (ch,cs,meta42872){
this.ch = ch;
this.cs = cs;
this.meta42872 = meta42872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42873,meta42872__$1){
var self__ = this;
var _42873__$1 = this;
return (new cljs.core.async.t_cljs$core$async42871(self__.ch,self__.cs,meta42872__$1));
}));

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42873){
var self__ = this;
var _42873__$1 = this;
return self__.meta42872;
}));

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42871.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42872","meta42872",-1991562641,null)], null);
}));

(cljs.core.async.t_cljs$core$async42871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42871");

(cljs.core.async.t_cljs$core$async42871.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42871.
 */
cljs.core.async.__GT_t_cljs$core$async42871 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42871(ch__$1,cs__$1,meta42872){
return (new cljs.core.async.t_cljs$core$async42871(ch__$1,cs__$1,meta42872));
});

}

return (new cljs.core.async.t_cljs$core$async42871(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42198__auto___44723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43051){
var state_val_43052 = (state_43051[(1)]);
if((state_val_43052 === (7))){
var inst_43044 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43057_44724 = state_43051__$1;
(statearr_43057_44724[(2)] = inst_43044);

(statearr_43057_44724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (20))){
var inst_42946 = (state_43051[(7)]);
var inst_42958 = cljs.core.first(inst_42946);
var inst_42959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42958,(0),null);
var inst_42960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42958,(1),null);
var state_43051__$1 = (function (){var statearr_43062 = state_43051;
(statearr_43062[(8)] = inst_42959);

return statearr_43062;
})();
if(cljs.core.truth_(inst_42960)){
var statearr_43063_44725 = state_43051__$1;
(statearr_43063_44725[(1)] = (22));

} else {
var statearr_43064_44726 = state_43051__$1;
(statearr_43064_44726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (27))){
var inst_42997 = (state_43051[(9)]);
var inst_42989 = (state_43051[(10)]);
var inst_42908 = (state_43051[(11)]);
var inst_42991 = (state_43051[(12)]);
var inst_42997__$1 = cljs.core._nth(inst_42989,inst_42991);
var inst_42998 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42997__$1,inst_42908,done);
var state_43051__$1 = (function (){var statearr_43066 = state_43051;
(statearr_43066[(9)] = inst_42997__$1);

return statearr_43066;
})();
if(cljs.core.truth_(inst_42998)){
var statearr_43069_44730 = state_43051__$1;
(statearr_43069_44730[(1)] = (30));

} else {
var statearr_43071_44731 = state_43051__$1;
(statearr_43071_44731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (1))){
var state_43051__$1 = state_43051;
var statearr_43074_44736 = state_43051__$1;
(statearr_43074_44736[(2)] = null);

(statearr_43074_44736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (24))){
var inst_42946 = (state_43051[(7)]);
var inst_42966 = (state_43051[(2)]);
var inst_42967 = cljs.core.next(inst_42946);
var inst_42921 = inst_42967;
var inst_42922 = null;
var inst_42923 = (0);
var inst_42924 = (0);
var state_43051__$1 = (function (){var statearr_43082 = state_43051;
(statearr_43082[(13)] = inst_42921);

(statearr_43082[(14)] = inst_42922);

(statearr_43082[(15)] = inst_42966);

(statearr_43082[(16)] = inst_42923);

(statearr_43082[(17)] = inst_42924);

return statearr_43082;
})();
var statearr_43089_44740 = state_43051__$1;
(statearr_43089_44740[(2)] = null);

(statearr_43089_44740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (39))){
var state_43051__$1 = state_43051;
var statearr_43100_44741 = state_43051__$1;
(statearr_43100_44741[(2)] = null);

(statearr_43100_44741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (4))){
var inst_42908 = (state_43051[(11)]);
var inst_42908__$1 = (state_43051[(2)]);
var inst_42912 = (inst_42908__$1 == null);
var state_43051__$1 = (function (){var statearr_43102 = state_43051;
(statearr_43102[(11)] = inst_42908__$1);

return statearr_43102;
})();
if(cljs.core.truth_(inst_42912)){
var statearr_43103_44742 = state_43051__$1;
(statearr_43103_44742[(1)] = (5));

} else {
var statearr_43106_44743 = state_43051__$1;
(statearr_43106_44743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (15))){
var inst_42921 = (state_43051[(13)]);
var inst_42922 = (state_43051[(14)]);
var inst_42923 = (state_43051[(16)]);
var inst_42924 = (state_43051[(17)]);
var inst_42942 = (state_43051[(2)]);
var inst_42943 = (inst_42924 + (1));
var tmp43097 = inst_42921;
var tmp43098 = inst_42922;
var tmp43099 = inst_42923;
var inst_42921__$1 = tmp43097;
var inst_42922__$1 = tmp43098;
var inst_42923__$1 = tmp43099;
var inst_42924__$1 = inst_42943;
var state_43051__$1 = (function (){var statearr_43109 = state_43051;
(statearr_43109[(13)] = inst_42921__$1);

(statearr_43109[(14)] = inst_42922__$1);

(statearr_43109[(18)] = inst_42942);

(statearr_43109[(16)] = inst_42923__$1);

(statearr_43109[(17)] = inst_42924__$1);

return statearr_43109;
})();
var statearr_43110_44744 = state_43051__$1;
(statearr_43110_44744[(2)] = null);

(statearr_43110_44744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (21))){
var inst_42970 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43114_44746 = state_43051__$1;
(statearr_43114_44746[(2)] = inst_42970);

(statearr_43114_44746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (31))){
var inst_42997 = (state_43051[(9)]);
var inst_43001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42997);
var state_43051__$1 = state_43051;
var statearr_43115_44751 = state_43051__$1;
(statearr_43115_44751[(2)] = inst_43001);

(statearr_43115_44751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (32))){
var inst_42989 = (state_43051[(10)]);
var inst_42990 = (state_43051[(19)]);
var inst_42988 = (state_43051[(20)]);
var inst_42991 = (state_43051[(12)]);
var inst_43004 = (state_43051[(2)]);
var inst_43005 = (inst_42991 + (1));
var tmp43111 = inst_42989;
var tmp43112 = inst_42990;
var tmp43113 = inst_42988;
var inst_42988__$1 = tmp43113;
var inst_42989__$1 = tmp43111;
var inst_42990__$1 = tmp43112;
var inst_42991__$1 = inst_43005;
var state_43051__$1 = (function (){var statearr_43117 = state_43051;
(statearr_43117[(10)] = inst_42989__$1);

(statearr_43117[(19)] = inst_42990__$1);

(statearr_43117[(21)] = inst_43004);

(statearr_43117[(20)] = inst_42988__$1);

(statearr_43117[(12)] = inst_42991__$1);

return statearr_43117;
})();
var statearr_43119_44752 = state_43051__$1;
(statearr_43119_44752[(2)] = null);

(statearr_43119_44752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (40))){
var inst_43017 = (state_43051[(22)]);
var inst_43021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43017);
var state_43051__$1 = state_43051;
var statearr_43120_44759 = state_43051__$1;
(statearr_43120_44759[(2)] = inst_43021);

(statearr_43120_44759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (33))){
var inst_43008 = (state_43051[(23)]);
var inst_43010 = cljs.core.chunked_seq_QMARK_(inst_43008);
var state_43051__$1 = state_43051;
if(inst_43010){
var statearr_43122_44760 = state_43051__$1;
(statearr_43122_44760[(1)] = (36));

} else {
var statearr_43123_44762 = state_43051__$1;
(statearr_43123_44762[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (13))){
var inst_42935 = (state_43051[(24)]);
var inst_42939 = cljs.core.async.close_BANG_(inst_42935);
var state_43051__$1 = state_43051;
var statearr_43124_44764 = state_43051__$1;
(statearr_43124_44764[(2)] = inst_42939);

(statearr_43124_44764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (22))){
var inst_42959 = (state_43051[(8)]);
var inst_42963 = cljs.core.async.close_BANG_(inst_42959);
var state_43051__$1 = state_43051;
var statearr_43125_44765 = state_43051__$1;
(statearr_43125_44765[(2)] = inst_42963);

(statearr_43125_44765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (36))){
var inst_43008 = (state_43051[(23)]);
var inst_43012 = cljs.core.chunk_first(inst_43008);
var inst_43013 = cljs.core.chunk_rest(inst_43008);
var inst_43014 = cljs.core.count(inst_43012);
var inst_42988 = inst_43013;
var inst_42989 = inst_43012;
var inst_42990 = inst_43014;
var inst_42991 = (0);
var state_43051__$1 = (function (){var statearr_43127 = state_43051;
(statearr_43127[(10)] = inst_42989);

(statearr_43127[(19)] = inst_42990);

(statearr_43127[(20)] = inst_42988);

(statearr_43127[(12)] = inst_42991);

return statearr_43127;
})();
var statearr_43130_44766 = state_43051__$1;
(statearr_43130_44766[(2)] = null);

(statearr_43130_44766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (41))){
var inst_43008 = (state_43051[(23)]);
var inst_43023 = (state_43051[(2)]);
var inst_43024 = cljs.core.next(inst_43008);
var inst_42988 = inst_43024;
var inst_42989 = null;
var inst_42990 = (0);
var inst_42991 = (0);
var state_43051__$1 = (function (){var statearr_43132 = state_43051;
(statearr_43132[(25)] = inst_43023);

(statearr_43132[(10)] = inst_42989);

(statearr_43132[(19)] = inst_42990);

(statearr_43132[(20)] = inst_42988);

(statearr_43132[(12)] = inst_42991);

return statearr_43132;
})();
var statearr_43134_44767 = state_43051__$1;
(statearr_43134_44767[(2)] = null);

(statearr_43134_44767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (43))){
var state_43051__$1 = state_43051;
var statearr_43137_44768 = state_43051__$1;
(statearr_43137_44768[(2)] = null);

(statearr_43137_44768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (29))){
var inst_43032 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43139_44770 = state_43051__$1;
(statearr_43139_44770[(2)] = inst_43032);

(statearr_43139_44770[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (44))){
var inst_43041 = (state_43051[(2)]);
var state_43051__$1 = (function (){var statearr_43141 = state_43051;
(statearr_43141[(26)] = inst_43041);

return statearr_43141;
})();
var statearr_43145_44774 = state_43051__$1;
(statearr_43145_44774[(2)] = null);

(statearr_43145_44774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (6))){
var inst_42980 = (state_43051[(27)]);
var inst_42979 = cljs.core.deref(cs);
var inst_42980__$1 = cljs.core.keys(inst_42979);
var inst_42981 = cljs.core.count(inst_42980__$1);
var inst_42982 = cljs.core.reset_BANG_(dctr,inst_42981);
var inst_42987 = cljs.core.seq(inst_42980__$1);
var inst_42988 = inst_42987;
var inst_42989 = null;
var inst_42990 = (0);
var inst_42991 = (0);
var state_43051__$1 = (function (){var statearr_43150 = state_43051;
(statearr_43150[(27)] = inst_42980__$1);

(statearr_43150[(10)] = inst_42989);

(statearr_43150[(28)] = inst_42982);

(statearr_43150[(19)] = inst_42990);

(statearr_43150[(20)] = inst_42988);

(statearr_43150[(12)] = inst_42991);

return statearr_43150;
})();
var statearr_43151_44779 = state_43051__$1;
(statearr_43151_44779[(2)] = null);

(statearr_43151_44779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (28))){
var inst_43008 = (state_43051[(23)]);
var inst_42988 = (state_43051[(20)]);
var inst_43008__$1 = cljs.core.seq(inst_42988);
var state_43051__$1 = (function (){var statearr_43153 = state_43051;
(statearr_43153[(23)] = inst_43008__$1);

return statearr_43153;
})();
if(inst_43008__$1){
var statearr_43154_44784 = state_43051__$1;
(statearr_43154_44784[(1)] = (33));

} else {
var statearr_43155_44785 = state_43051__$1;
(statearr_43155_44785[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (25))){
var inst_42990 = (state_43051[(19)]);
var inst_42991 = (state_43051[(12)]);
var inst_42994 = (inst_42991 < inst_42990);
var inst_42995 = inst_42994;
var state_43051__$1 = state_43051;
if(cljs.core.truth_(inst_42995)){
var statearr_43156_44791 = state_43051__$1;
(statearr_43156_44791[(1)] = (27));

} else {
var statearr_43157_44792 = state_43051__$1;
(statearr_43157_44792[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (34))){
var state_43051__$1 = state_43051;
var statearr_43169_44793 = state_43051__$1;
(statearr_43169_44793[(2)] = null);

(statearr_43169_44793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (17))){
var state_43051__$1 = state_43051;
var statearr_43170_44800 = state_43051__$1;
(statearr_43170_44800[(2)] = null);

(statearr_43170_44800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (3))){
var inst_43046 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43051__$1,inst_43046);
} else {
if((state_val_43052 === (12))){
var inst_42975 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43171_44805 = state_43051__$1;
(statearr_43171_44805[(2)] = inst_42975);

(statearr_43171_44805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (2))){
var state_43051__$1 = state_43051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43051__$1,(4),ch);
} else {
if((state_val_43052 === (23))){
var state_43051__$1 = state_43051;
var statearr_43178_44816 = state_43051__$1;
(statearr_43178_44816[(2)] = null);

(statearr_43178_44816[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (35))){
var inst_43030 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43185_44821 = state_43051__$1;
(statearr_43185_44821[(2)] = inst_43030);

(statearr_43185_44821[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (19))){
var inst_42946 = (state_43051[(7)]);
var inst_42950 = cljs.core.chunk_first(inst_42946);
var inst_42951 = cljs.core.chunk_rest(inst_42946);
var inst_42952 = cljs.core.count(inst_42950);
var inst_42921 = inst_42951;
var inst_42922 = inst_42950;
var inst_42923 = inst_42952;
var inst_42924 = (0);
var state_43051__$1 = (function (){var statearr_43192 = state_43051;
(statearr_43192[(13)] = inst_42921);

(statearr_43192[(14)] = inst_42922);

(statearr_43192[(16)] = inst_42923);

(statearr_43192[(17)] = inst_42924);

return statearr_43192;
})();
var statearr_43194_44822 = state_43051__$1;
(statearr_43194_44822[(2)] = null);

(statearr_43194_44822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (11))){
var inst_42946 = (state_43051[(7)]);
var inst_42921 = (state_43051[(13)]);
var inst_42946__$1 = cljs.core.seq(inst_42921);
var state_43051__$1 = (function (){var statearr_43196 = state_43051;
(statearr_43196[(7)] = inst_42946__$1);

return statearr_43196;
})();
if(inst_42946__$1){
var statearr_43201_44823 = state_43051__$1;
(statearr_43201_44823[(1)] = (16));

} else {
var statearr_43204_44824 = state_43051__$1;
(statearr_43204_44824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (9))){
var inst_42977 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43206_44829 = state_43051__$1;
(statearr_43206_44829[(2)] = inst_42977);

(statearr_43206_44829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (5))){
var inst_42918 = cljs.core.deref(cs);
var inst_42919 = cljs.core.seq(inst_42918);
var inst_42921 = inst_42919;
var inst_42922 = null;
var inst_42923 = (0);
var inst_42924 = (0);
var state_43051__$1 = (function (){var statearr_43210 = state_43051;
(statearr_43210[(13)] = inst_42921);

(statearr_43210[(14)] = inst_42922);

(statearr_43210[(16)] = inst_42923);

(statearr_43210[(17)] = inst_42924);

return statearr_43210;
})();
var statearr_43214_44830 = state_43051__$1;
(statearr_43214_44830[(2)] = null);

(statearr_43214_44830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (14))){
var state_43051__$1 = state_43051;
var statearr_43216_44831 = state_43051__$1;
(statearr_43216_44831[(2)] = null);

(statearr_43216_44831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (45))){
var inst_43038 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43217_44832 = state_43051__$1;
(statearr_43217_44832[(2)] = inst_43038);

(statearr_43217_44832[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (26))){
var inst_42980 = (state_43051[(27)]);
var inst_43034 = (state_43051[(2)]);
var inst_43035 = cljs.core.seq(inst_42980);
var state_43051__$1 = (function (){var statearr_43218 = state_43051;
(statearr_43218[(29)] = inst_43034);

return statearr_43218;
})();
if(inst_43035){
var statearr_43220_44833 = state_43051__$1;
(statearr_43220_44833[(1)] = (42));

} else {
var statearr_43221_44834 = state_43051__$1;
(statearr_43221_44834[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (16))){
var inst_42946 = (state_43051[(7)]);
var inst_42948 = cljs.core.chunked_seq_QMARK_(inst_42946);
var state_43051__$1 = state_43051;
if(inst_42948){
var statearr_43222_44835 = state_43051__$1;
(statearr_43222_44835[(1)] = (19));

} else {
var statearr_43223_44836 = state_43051__$1;
(statearr_43223_44836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (38))){
var inst_43027 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43224_44837 = state_43051__$1;
(statearr_43224_44837[(2)] = inst_43027);

(statearr_43224_44837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (30))){
var state_43051__$1 = state_43051;
var statearr_43229_44838 = state_43051__$1;
(statearr_43229_44838[(2)] = null);

(statearr_43229_44838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (10))){
var inst_42922 = (state_43051[(14)]);
var inst_42924 = (state_43051[(17)]);
var inst_42933 = cljs.core._nth(inst_42922,inst_42924);
var inst_42935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42933,(0),null);
var inst_42936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42933,(1),null);
var state_43051__$1 = (function (){var statearr_43234 = state_43051;
(statearr_43234[(24)] = inst_42935);

return statearr_43234;
})();
if(cljs.core.truth_(inst_42936)){
var statearr_43235_44843 = state_43051__$1;
(statearr_43235_44843[(1)] = (13));

} else {
var statearr_43236_44844 = state_43051__$1;
(statearr_43236_44844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (18))){
var inst_42973 = (state_43051[(2)]);
var state_43051__$1 = state_43051;
var statearr_43237_44845 = state_43051__$1;
(statearr_43237_44845[(2)] = inst_42973);

(statearr_43237_44845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (42))){
var state_43051__$1 = state_43051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43051__$1,(45),dchan);
} else {
if((state_val_43052 === (37))){
var inst_43017 = (state_43051[(22)]);
var inst_42908 = (state_43051[(11)]);
var inst_43008 = (state_43051[(23)]);
var inst_43017__$1 = cljs.core.first(inst_43008);
var inst_43018 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43017__$1,inst_42908,done);
var state_43051__$1 = (function (){var statearr_43242 = state_43051;
(statearr_43242[(22)] = inst_43017__$1);

return statearr_43242;
})();
if(cljs.core.truth_(inst_43018)){
var statearr_43243_44846 = state_43051__$1;
(statearr_43243_44846[(1)] = (39));

} else {
var statearr_43244_44847 = state_43051__$1;
(statearr_43244_44847[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43052 === (8))){
var inst_42923 = (state_43051[(16)]);
var inst_42924 = (state_43051[(17)]);
var inst_42926 = (inst_42924 < inst_42923);
var inst_42927 = inst_42926;
var state_43051__$1 = state_43051;
if(cljs.core.truth_(inst_42927)){
var statearr_43245_44852 = state_43051__$1;
(statearr_43245_44852[(1)] = (10));

} else {
var statearr_43249_44853 = state_43051__$1;
(statearr_43249_44853[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__41951__auto__ = null;
var cljs$core$async$mult_$_state_machine__41951__auto____0 = (function (){
var statearr_43254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43254[(0)] = cljs$core$async$mult_$_state_machine__41951__auto__);

(statearr_43254[(1)] = (1));

return statearr_43254;
});
var cljs$core$async$mult_$_state_machine__41951__auto____1 = (function (state_43051){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43051);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43256){var ex__41954__auto__ = e43256;
var statearr_43257_44855 = state_43051;
(statearr_43257_44855[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43051[(4)]))){
var statearr_43258_44856 = state_43051;
(statearr_43258_44856[(1)] = cljs.core.first((state_43051[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44857 = state_43051;
state_43051 = G__44857;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41951__auto__ = function(state_43051){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41951__auto____1.call(this,state_43051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41951__auto____0;
cljs$core$async$mult_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41951__auto____1;
return cljs$core$async$mult_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43260 = f__42199__auto__();
(statearr_43260[(6)] = c__42198__auto___44723);

return statearr_43260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var G__43262 = arguments.length;
switch (G__43262) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44865 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_44865(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44867 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_44867(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44869 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44869(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44870 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_44870(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44871 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44871(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44872 = arguments.length;
var i__5770__auto___44873 = (0);
while(true){
if((i__5770__auto___44873 < len__5769__auto___44872)){
args__5775__auto__.push((arguments[i__5770__auto___44873]));

var G__44874 = (i__5770__auto___44873 + (1));
i__5770__auto___44873 = G__44874;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43304){
var map__43305 = p__43304;
var map__43305__$1 = cljs.core.__destructure_map(map__43305);
var opts = map__43305__$1;
var statearr_43306_44882 = state;
(statearr_43306_44882[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43311_44883 = state;
(statearr_43311_44883[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_43312_44884 = state;
(statearr_43312_44884[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43296){
var G__43297 = cljs.core.first(seq43296);
var seq43296__$1 = cljs.core.next(seq43296);
var G__43298 = cljs.core.first(seq43296__$1);
var seq43296__$2 = cljs.core.next(seq43296__$1);
var G__43299 = cljs.core.first(seq43296__$2);
var seq43296__$3 = cljs.core.next(seq43296__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43297,G__43298,G__43299,seq43296__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43318 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43319){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43319 = meta43319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43320,meta43319__$1){
var self__ = this;
var _43320__$1 = this;
return (new cljs.core.async.t_cljs$core$async43318(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43319__$1));
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43320){
var self__ = this;
var _43320__$1 = this;
return self__.meta43319;
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43318.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43319","meta43319",1889029838,null)], null);
}));

(cljs.core.async.t_cljs$core$async43318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43318");

(cljs.core.async.t_cljs$core$async43318.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43318.
 */
cljs.core.async.__GT_t_cljs$core$async43318 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43318(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43319){
return (new cljs.core.async.t_cljs$core$async43318(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43319));
});

}

return (new cljs.core.async.t_cljs$core$async43318(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42198__auto___44889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43390){
var state_val_43391 = (state_43390[(1)]);
if((state_val_43391 === (7))){
var inst_43350 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
if(cljs.core.truth_(inst_43350)){
var statearr_43395_44890 = state_43390__$1;
(statearr_43395_44890[(1)] = (8));

} else {
var statearr_43397_44891 = state_43390__$1;
(statearr_43397_44891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (20))){
var inst_43343 = (state_43390[(7)]);
var state_43390__$1 = state_43390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43390__$1,(23),out,inst_43343);
} else {
if((state_val_43391 === (1))){
var inst_43326 = calc_state();
var inst_43327 = cljs.core.__destructure_map(inst_43326);
var inst_43328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43327,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43327,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43327,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43331 = inst_43326;
var state_43390__$1 = (function (){var statearr_43398 = state_43390;
(statearr_43398[(8)] = inst_43328);

(statearr_43398[(9)] = inst_43330);

(statearr_43398[(10)] = inst_43331);

(statearr_43398[(11)] = inst_43329);

return statearr_43398;
})();
var statearr_43399_44894 = state_43390__$1;
(statearr_43399_44894[(2)] = null);

(statearr_43399_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (24))){
var inst_43334 = (state_43390[(12)]);
var inst_43331 = inst_43334;
var state_43390__$1 = (function (){var statearr_43400 = state_43390;
(statearr_43400[(10)] = inst_43331);

return statearr_43400;
})();
var statearr_43401_44895 = state_43390__$1;
(statearr_43401_44895[(2)] = null);

(statearr_43401_44895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (4))){
var inst_43343 = (state_43390[(7)]);
var inst_43345 = (state_43390[(13)]);
var inst_43342 = (state_43390[(2)]);
var inst_43343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43342,(0),null);
var inst_43344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43342,(1),null);
var inst_43345__$1 = (inst_43343__$1 == null);
var state_43390__$1 = (function (){var statearr_43404 = state_43390;
(statearr_43404[(7)] = inst_43343__$1);

(statearr_43404[(14)] = inst_43344);

(statearr_43404[(13)] = inst_43345__$1);

return statearr_43404;
})();
if(cljs.core.truth_(inst_43345__$1)){
var statearr_43405_44896 = state_43390__$1;
(statearr_43405_44896[(1)] = (5));

} else {
var statearr_43406_44897 = state_43390__$1;
(statearr_43406_44897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (15))){
var inst_43335 = (state_43390[(15)]);
var inst_43364 = (state_43390[(16)]);
var inst_43364__$1 = cljs.core.empty_QMARK_(inst_43335);
var state_43390__$1 = (function (){var statearr_43407 = state_43390;
(statearr_43407[(16)] = inst_43364__$1);

return statearr_43407;
})();
if(inst_43364__$1){
var statearr_43408_44904 = state_43390__$1;
(statearr_43408_44904[(1)] = (17));

} else {
var statearr_43409_44905 = state_43390__$1;
(statearr_43409_44905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (21))){
var inst_43334 = (state_43390[(12)]);
var inst_43331 = inst_43334;
var state_43390__$1 = (function (){var statearr_43410 = state_43390;
(statearr_43410[(10)] = inst_43331);

return statearr_43410;
})();
var statearr_43411_44906 = state_43390__$1;
(statearr_43411_44906[(2)] = null);

(statearr_43411_44906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (13))){
var inst_43357 = (state_43390[(2)]);
var inst_43358 = calc_state();
var inst_43331 = inst_43358;
var state_43390__$1 = (function (){var statearr_43412 = state_43390;
(statearr_43412[(17)] = inst_43357);

(statearr_43412[(10)] = inst_43331);

return statearr_43412;
})();
var statearr_43413_44907 = state_43390__$1;
(statearr_43413_44907[(2)] = null);

(statearr_43413_44907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (22))){
var inst_43384 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
var statearr_43414_44908 = state_43390__$1;
(statearr_43414_44908[(2)] = inst_43384);

(statearr_43414_44908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (6))){
var inst_43344 = (state_43390[(14)]);
var inst_43348 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43344,change);
var state_43390__$1 = state_43390;
var statearr_43415_44909 = state_43390__$1;
(statearr_43415_44909[(2)] = inst_43348);

(statearr_43415_44909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (25))){
var state_43390__$1 = state_43390;
var statearr_43416_44910 = state_43390__$1;
(statearr_43416_44910[(2)] = null);

(statearr_43416_44910[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (17))){
var inst_43344 = (state_43390[(14)]);
var inst_43336 = (state_43390[(18)]);
var inst_43366 = (inst_43336.cljs$core$IFn$_invoke$arity$1 ? inst_43336.cljs$core$IFn$_invoke$arity$1(inst_43344) : inst_43336.call(null,inst_43344));
var inst_43367 = cljs.core.not(inst_43366);
var state_43390__$1 = state_43390;
var statearr_43417_44911 = state_43390__$1;
(statearr_43417_44911[(2)] = inst_43367);

(statearr_43417_44911[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (3))){
var inst_43388 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43390__$1,inst_43388);
} else {
if((state_val_43391 === (12))){
var state_43390__$1 = state_43390;
var statearr_43418_44912 = state_43390__$1;
(statearr_43418_44912[(2)] = null);

(statearr_43418_44912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (2))){
var inst_43334 = (state_43390[(12)]);
var inst_43331 = (state_43390[(10)]);
var inst_43334__$1 = cljs.core.__destructure_map(inst_43331);
var inst_43335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43334__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43334__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43334__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43390__$1 = (function (){var statearr_43421 = state_43390;
(statearr_43421[(15)] = inst_43335);

(statearr_43421[(12)] = inst_43334__$1);

(statearr_43421[(18)] = inst_43336);

return statearr_43421;
})();
return cljs.core.async.ioc_alts_BANG_(state_43390__$1,(4),inst_43337);
} else {
if((state_val_43391 === (23))){
var inst_43375 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
if(cljs.core.truth_(inst_43375)){
var statearr_43426_44913 = state_43390__$1;
(statearr_43426_44913[(1)] = (24));

} else {
var statearr_43427_44915 = state_43390__$1;
(statearr_43427_44915[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (19))){
var inst_43370 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
var statearr_43428_44922 = state_43390__$1;
(statearr_43428_44922[(2)] = inst_43370);

(statearr_43428_44922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (11))){
var inst_43344 = (state_43390[(14)]);
var inst_43354 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43344);
var state_43390__$1 = state_43390;
var statearr_43429_44924 = state_43390__$1;
(statearr_43429_44924[(2)] = inst_43354);

(statearr_43429_44924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (9))){
var inst_43335 = (state_43390[(15)]);
var inst_43344 = (state_43390[(14)]);
var inst_43361 = (state_43390[(19)]);
var inst_43361__$1 = (inst_43335.cljs$core$IFn$_invoke$arity$1 ? inst_43335.cljs$core$IFn$_invoke$arity$1(inst_43344) : inst_43335.call(null,inst_43344));
var state_43390__$1 = (function (){var statearr_43430 = state_43390;
(statearr_43430[(19)] = inst_43361__$1);

return statearr_43430;
})();
if(cljs.core.truth_(inst_43361__$1)){
var statearr_43432_44926 = state_43390__$1;
(statearr_43432_44926[(1)] = (14));

} else {
var statearr_43433_44927 = state_43390__$1;
(statearr_43433_44927[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (5))){
var inst_43345 = (state_43390[(13)]);
var state_43390__$1 = state_43390;
var statearr_43434_44929 = state_43390__$1;
(statearr_43434_44929[(2)] = inst_43345);

(statearr_43434_44929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (14))){
var inst_43361 = (state_43390[(19)]);
var state_43390__$1 = state_43390;
var statearr_43436_44931 = state_43390__$1;
(statearr_43436_44931[(2)] = inst_43361);

(statearr_43436_44931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (26))){
var inst_43380 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
var statearr_43437_44933 = state_43390__$1;
(statearr_43437_44933[(2)] = inst_43380);

(statearr_43437_44933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (16))){
var inst_43372 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
if(cljs.core.truth_(inst_43372)){
var statearr_43439_44934 = state_43390__$1;
(statearr_43439_44934[(1)] = (20));

} else {
var statearr_43440_44935 = state_43390__$1;
(statearr_43440_44935[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (10))){
var inst_43386 = (state_43390[(2)]);
var state_43390__$1 = state_43390;
var statearr_43441_44936 = state_43390__$1;
(statearr_43441_44936[(2)] = inst_43386);

(statearr_43441_44936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (18))){
var inst_43364 = (state_43390[(16)]);
var state_43390__$1 = state_43390;
var statearr_43442_44946 = state_43390__$1;
(statearr_43442_44946[(2)] = inst_43364);

(statearr_43442_44946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43391 === (8))){
var inst_43343 = (state_43390[(7)]);
var inst_43352 = (inst_43343 == null);
var state_43390__$1 = state_43390;
if(cljs.core.truth_(inst_43352)){
var statearr_43444_44952 = state_43390__$1;
(statearr_43444_44952[(1)] = (11));

} else {
var statearr_43446_44953 = state_43390__$1;
(statearr_43446_44953[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__41951__auto__ = null;
var cljs$core$async$mix_$_state_machine__41951__auto____0 = (function (){
var statearr_43447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43447[(0)] = cljs$core$async$mix_$_state_machine__41951__auto__);

(statearr_43447[(1)] = (1));

return statearr_43447;
});
var cljs$core$async$mix_$_state_machine__41951__auto____1 = (function (state_43390){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43390);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43448){var ex__41954__auto__ = e43448;
var statearr_43449_44954 = state_43390;
(statearr_43449_44954[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43390[(4)]))){
var statearr_43450_44955 = state_43390;
(statearr_43450_44955[(1)] = cljs.core.first((state_43390[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44956 = state_43390;
state_43390 = G__44956;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41951__auto__ = function(state_43390){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41951__auto____1.call(this,state_43390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41951__auto____0;
cljs$core$async$mix_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41951__auto____1;
return cljs$core$async$mix_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43454 = f__42199__auto__();
(statearr_43454[(6)] = c__42198__auto___44889);

return statearr_43454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44978 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_44978(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45018 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45018(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45019 = (function() {
var G__45020 = null;
var G__45020__1 = (function (p){
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
var G__45020__2 = (function (p,v){
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
G__45020 = function(p,v){
switch(arguments.length){
case 1:
return G__45020__1.call(this,p);
case 2:
return G__45020__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45020.cljs$core$IFn$_invoke$arity$1 = G__45020__1;
G__45020.cljs$core$IFn$_invoke$arity$2 = G__45020__2;
return G__45020;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43488 = arguments.length;
switch (G__43488) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45019(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45019(p,v);
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
var G__43503 = arguments.length;
switch (G__43503) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43498_SHARP_){
if(cljs.core.truth_((p1__43498_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43498_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43498_SHARP_.call(null,topic)))){
return p1__43498_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43498_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43504 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43505){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43505 = meta43505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43506,meta43505__$1){
var self__ = this;
var _43506__$1 = this;
return (new cljs.core.async.t_cljs$core$async43504(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43505__$1));
}));

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43506){
var self__ = this;
var _43506__$1 = this;
return self__.meta43505;
}));

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43505","meta43505",1636929153,null)], null);
}));

(cljs.core.async.t_cljs$core$async43504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43504");

(cljs.core.async.t_cljs$core$async43504.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43504.
 */
cljs.core.async.__GT_t_cljs$core$async43504 = (function cljs$core$async$__GT_t_cljs$core$async43504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43505){
return (new cljs.core.async.t_cljs$core$async43504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43505));
});

}

return (new cljs.core.async.t_cljs$core$async43504(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42198__auto___45110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43587){
var state_val_43590 = (state_43587[(1)]);
if((state_val_43590 === (7))){
var inst_43581 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43592_45127 = state_43587__$1;
(statearr_43592_45127[(2)] = inst_43581);

(statearr_43592_45127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (20))){
var state_43587__$1 = state_43587;
var statearr_43595_45131 = state_43587__$1;
(statearr_43595_45131[(2)] = null);

(statearr_43595_45131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (1))){
var state_43587__$1 = state_43587;
var statearr_43596_45132 = state_43587__$1;
(statearr_43596_45132[(2)] = null);

(statearr_43596_45132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (24))){
var inst_43564 = (state_43587[(7)]);
var inst_43573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43564);
var state_43587__$1 = state_43587;
var statearr_43597_45133 = state_43587__$1;
(statearr_43597_45133[(2)] = inst_43573);

(statearr_43597_45133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (4))){
var inst_43516 = (state_43587[(8)]);
var inst_43516__$1 = (state_43587[(2)]);
var inst_43517 = (inst_43516__$1 == null);
var state_43587__$1 = (function (){var statearr_43598 = state_43587;
(statearr_43598[(8)] = inst_43516__$1);

return statearr_43598;
})();
if(cljs.core.truth_(inst_43517)){
var statearr_43599_45145 = state_43587__$1;
(statearr_43599_45145[(1)] = (5));

} else {
var statearr_43600_45146 = state_43587__$1;
(statearr_43600_45146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (15))){
var inst_43558 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43602_45154 = state_43587__$1;
(statearr_43602_45154[(2)] = inst_43558);

(statearr_43602_45154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (21))){
var inst_43578 = (state_43587[(2)]);
var state_43587__$1 = (function (){var statearr_43604 = state_43587;
(statearr_43604[(9)] = inst_43578);

return statearr_43604;
})();
var statearr_43605_45159 = state_43587__$1;
(statearr_43605_45159[(2)] = null);

(statearr_43605_45159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (13))){
var inst_43540 = (state_43587[(10)]);
var inst_43542 = cljs.core.chunked_seq_QMARK_(inst_43540);
var state_43587__$1 = state_43587;
if(inst_43542){
var statearr_43609_45161 = state_43587__$1;
(statearr_43609_45161[(1)] = (16));

} else {
var statearr_43610_45162 = state_43587__$1;
(statearr_43610_45162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (22))){
var inst_43570 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
if(cljs.core.truth_(inst_43570)){
var statearr_43611_45168 = state_43587__$1;
(statearr_43611_45168[(1)] = (23));

} else {
var statearr_43612_45169 = state_43587__$1;
(statearr_43612_45169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (6))){
var inst_43516 = (state_43587[(8)]);
var inst_43566 = (state_43587[(11)]);
var inst_43564 = (state_43587[(7)]);
var inst_43564__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43516) : topic_fn.call(null,inst_43516));
var inst_43565 = cljs.core.deref(mults);
var inst_43566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43565,inst_43564__$1);
var state_43587__$1 = (function (){var statearr_43613 = state_43587;
(statearr_43613[(11)] = inst_43566__$1);

(statearr_43613[(7)] = inst_43564__$1);

return statearr_43613;
})();
if(cljs.core.truth_(inst_43566__$1)){
var statearr_43614_45176 = state_43587__$1;
(statearr_43614_45176[(1)] = (19));

} else {
var statearr_43615_45177 = state_43587__$1;
(statearr_43615_45177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (25))){
var inst_43575 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43616_45182 = state_43587__$1;
(statearr_43616_45182[(2)] = inst_43575);

(statearr_43616_45182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (17))){
var inst_43540 = (state_43587[(10)]);
var inst_43549 = cljs.core.first(inst_43540);
var inst_43550 = cljs.core.async.muxch_STAR_(inst_43549);
var inst_43551 = cljs.core.async.close_BANG_(inst_43550);
var inst_43552 = cljs.core.next(inst_43540);
var inst_43526 = inst_43552;
var inst_43527 = null;
var inst_43528 = (0);
var inst_43529 = (0);
var state_43587__$1 = (function (){var statearr_43617 = state_43587;
(statearr_43617[(12)] = inst_43526);

(statearr_43617[(13)] = inst_43527);

(statearr_43617[(14)] = inst_43551);

(statearr_43617[(15)] = inst_43528);

(statearr_43617[(16)] = inst_43529);

return statearr_43617;
})();
var statearr_43618_45183 = state_43587__$1;
(statearr_43618_45183[(2)] = null);

(statearr_43618_45183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (3))){
var inst_43583 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43587__$1,inst_43583);
} else {
if((state_val_43590 === (12))){
var inst_43560 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43619_45184 = state_43587__$1;
(statearr_43619_45184[(2)] = inst_43560);

(statearr_43619_45184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (2))){
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43587__$1,(4),ch);
} else {
if((state_val_43590 === (23))){
var state_43587__$1 = state_43587;
var statearr_43620_45185 = state_43587__$1;
(statearr_43620_45185[(2)] = null);

(statearr_43620_45185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (19))){
var inst_43516 = (state_43587[(8)]);
var inst_43566 = (state_43587[(11)]);
var inst_43568 = cljs.core.async.muxch_STAR_(inst_43566);
var state_43587__$1 = state_43587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43587__$1,(22),inst_43568,inst_43516);
} else {
if((state_val_43590 === (11))){
var inst_43526 = (state_43587[(12)]);
var inst_43540 = (state_43587[(10)]);
var inst_43540__$1 = cljs.core.seq(inst_43526);
var state_43587__$1 = (function (){var statearr_43621 = state_43587;
(statearr_43621[(10)] = inst_43540__$1);

return statearr_43621;
})();
if(inst_43540__$1){
var statearr_43622_45190 = state_43587__$1;
(statearr_43622_45190[(1)] = (13));

} else {
var statearr_43624_45191 = state_43587__$1;
(statearr_43624_45191[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (9))){
var inst_43562 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43628_45199 = state_43587__$1;
(statearr_43628_45199[(2)] = inst_43562);

(statearr_43628_45199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (5))){
var inst_43523 = cljs.core.deref(mults);
var inst_43524 = cljs.core.vals(inst_43523);
var inst_43525 = cljs.core.seq(inst_43524);
var inst_43526 = inst_43525;
var inst_43527 = null;
var inst_43528 = (0);
var inst_43529 = (0);
var state_43587__$1 = (function (){var statearr_43629 = state_43587;
(statearr_43629[(12)] = inst_43526);

(statearr_43629[(13)] = inst_43527);

(statearr_43629[(15)] = inst_43528);

(statearr_43629[(16)] = inst_43529);

return statearr_43629;
})();
var statearr_43630_45204 = state_43587__$1;
(statearr_43630_45204[(2)] = null);

(statearr_43630_45204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (14))){
var state_43587__$1 = state_43587;
var statearr_43634_45205 = state_43587__$1;
(statearr_43634_45205[(2)] = null);

(statearr_43634_45205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (16))){
var inst_43540 = (state_43587[(10)]);
var inst_43544 = cljs.core.chunk_first(inst_43540);
var inst_43545 = cljs.core.chunk_rest(inst_43540);
var inst_43546 = cljs.core.count(inst_43544);
var inst_43526 = inst_43545;
var inst_43527 = inst_43544;
var inst_43528 = inst_43546;
var inst_43529 = (0);
var state_43587__$1 = (function (){var statearr_43639 = state_43587;
(statearr_43639[(12)] = inst_43526);

(statearr_43639[(13)] = inst_43527);

(statearr_43639[(15)] = inst_43528);

(statearr_43639[(16)] = inst_43529);

return statearr_43639;
})();
var statearr_43640_45213 = state_43587__$1;
(statearr_43640_45213[(2)] = null);

(statearr_43640_45213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (10))){
var inst_43526 = (state_43587[(12)]);
var inst_43527 = (state_43587[(13)]);
var inst_43528 = (state_43587[(15)]);
var inst_43529 = (state_43587[(16)]);
var inst_43534 = cljs.core._nth(inst_43527,inst_43529);
var inst_43535 = cljs.core.async.muxch_STAR_(inst_43534);
var inst_43536 = cljs.core.async.close_BANG_(inst_43535);
var inst_43537 = (inst_43529 + (1));
var tmp43631 = inst_43526;
var tmp43632 = inst_43527;
var tmp43633 = inst_43528;
var inst_43526__$1 = tmp43631;
var inst_43527__$1 = tmp43632;
var inst_43528__$1 = tmp43633;
var inst_43529__$1 = inst_43537;
var state_43587__$1 = (function (){var statearr_43641 = state_43587;
(statearr_43641[(12)] = inst_43526__$1);

(statearr_43641[(13)] = inst_43527__$1);

(statearr_43641[(17)] = inst_43536);

(statearr_43641[(15)] = inst_43528__$1);

(statearr_43641[(16)] = inst_43529__$1);

return statearr_43641;
})();
var statearr_43642_45217 = state_43587__$1;
(statearr_43642_45217[(2)] = null);

(statearr_43642_45217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (18))){
var inst_43555 = (state_43587[(2)]);
var state_43587__$1 = state_43587;
var statearr_43643_45219 = state_43587__$1;
(statearr_43643_45219[(2)] = inst_43555);

(statearr_43643_45219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43590 === (8))){
var inst_43528 = (state_43587[(15)]);
var inst_43529 = (state_43587[(16)]);
var inst_43531 = (inst_43529 < inst_43528);
var inst_43532 = inst_43531;
var state_43587__$1 = state_43587;
if(cljs.core.truth_(inst_43532)){
var statearr_43644_45220 = state_43587__$1;
(statearr_43644_45220[(1)] = (10));

} else {
var statearr_43645_45224 = state_43587__$1;
(statearr_43645_45224[(1)] = (11));

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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_43646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43646[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_43646[(1)] = (1));

return statearr_43646;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_43587){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43587);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43647){var ex__41954__auto__ = e43647;
var statearr_43648_45225 = state_43587;
(statearr_43648_45225[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43587[(4)]))){
var statearr_43649_45226 = state_43587;
(statearr_43649_45226[(1)] = cljs.core.first((state_43587[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45228 = state_43587;
state_43587 = G__45228;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_43587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_43587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43650 = f__42199__auto__();
(statearr_43650[(6)] = c__42198__auto___45110);

return statearr_43650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var G__43654 = arguments.length;
switch (G__43654) {
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
var G__43659 = arguments.length;
switch (G__43659) {
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
var G__43661 = arguments.length;
switch (G__43661) {
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
var c__42198__auto___45240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43704){
var state_val_43705 = (state_43704[(1)]);
if((state_val_43705 === (7))){
var state_43704__$1 = state_43704;
var statearr_43707_45243 = state_43704__$1;
(statearr_43707_45243[(2)] = null);

(statearr_43707_45243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (1))){
var state_43704__$1 = state_43704;
var statearr_43708_45245 = state_43704__$1;
(statearr_43708_45245[(2)] = null);

(statearr_43708_45245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (4))){
var inst_43665 = (state_43704[(7)]);
var inst_43664 = (state_43704[(8)]);
var inst_43667 = (inst_43665 < inst_43664);
var state_43704__$1 = state_43704;
if(cljs.core.truth_(inst_43667)){
var statearr_43709_45250 = state_43704__$1;
(statearr_43709_45250[(1)] = (6));

} else {
var statearr_43710_45251 = state_43704__$1;
(statearr_43710_45251[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (15))){
var inst_43690 = (state_43704[(9)]);
var inst_43695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43690);
var state_43704__$1 = state_43704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43704__$1,(17),out,inst_43695);
} else {
if((state_val_43705 === (13))){
var inst_43690 = (state_43704[(9)]);
var inst_43690__$1 = (state_43704[(2)]);
var inst_43691 = cljs.core.some(cljs.core.nil_QMARK_,inst_43690__$1);
var state_43704__$1 = (function (){var statearr_43711 = state_43704;
(statearr_43711[(9)] = inst_43690__$1);

return statearr_43711;
})();
if(cljs.core.truth_(inst_43691)){
var statearr_43712_45253 = state_43704__$1;
(statearr_43712_45253[(1)] = (14));

} else {
var statearr_43713_45254 = state_43704__$1;
(statearr_43713_45254[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (6))){
var state_43704__$1 = state_43704;
var statearr_43717_45255 = state_43704__$1;
(statearr_43717_45255[(2)] = null);

(statearr_43717_45255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (17))){
var inst_43697 = (state_43704[(2)]);
var state_43704__$1 = (function (){var statearr_43719 = state_43704;
(statearr_43719[(10)] = inst_43697);

return statearr_43719;
})();
var statearr_43720_45256 = state_43704__$1;
(statearr_43720_45256[(2)] = null);

(statearr_43720_45256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (3))){
var inst_43702 = (state_43704[(2)]);
var state_43704__$1 = state_43704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43704__$1,inst_43702);
} else {
if((state_val_43705 === (12))){
var _ = (function (){var statearr_43721 = state_43704;
(statearr_43721[(4)] = cljs.core.rest((state_43704[(4)])));

return statearr_43721;
})();
var state_43704__$1 = state_43704;
var ex43718 = (state_43704__$1[(2)]);
var statearr_43722_45258 = state_43704__$1;
(statearr_43722_45258[(5)] = ex43718);


if((ex43718 instanceof Object)){
var statearr_43723_45259 = state_43704__$1;
(statearr_43723_45259[(1)] = (11));

(statearr_43723_45259[(5)] = null);

} else {
throw ex43718;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (2))){
var inst_43663 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43664 = cnt;
var inst_43665 = (0);
var state_43704__$1 = (function (){var statearr_43728 = state_43704;
(statearr_43728[(7)] = inst_43665);

(statearr_43728[(11)] = inst_43663);

(statearr_43728[(8)] = inst_43664);

return statearr_43728;
})();
var statearr_43729_45260 = state_43704__$1;
(statearr_43729_45260[(2)] = null);

(statearr_43729_45260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (11))){
var inst_43669 = (state_43704[(2)]);
var inst_43670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43704__$1 = (function (){var statearr_43730 = state_43704;
(statearr_43730[(12)] = inst_43669);

return statearr_43730;
})();
var statearr_43731_45261 = state_43704__$1;
(statearr_43731_45261[(2)] = inst_43670);

(statearr_43731_45261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (9))){
var inst_43665 = (state_43704[(7)]);
var _ = (function (){var statearr_43732 = state_43704;
(statearr_43732[(4)] = cljs.core.cons((12),(state_43704[(4)])));

return statearr_43732;
})();
var inst_43676 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43665) : chs__$1.call(null,inst_43665));
var inst_43677 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43665) : done.call(null,inst_43665));
var inst_43678 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43676,inst_43677);
var ___$1 = (function (){var statearr_43733 = state_43704;
(statearr_43733[(4)] = cljs.core.rest((state_43704[(4)])));

return statearr_43733;
})();
var state_43704__$1 = state_43704;
var statearr_43734_45263 = state_43704__$1;
(statearr_43734_45263[(2)] = inst_43678);

(statearr_43734_45263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (5))){
var inst_43688 = (state_43704[(2)]);
var state_43704__$1 = (function (){var statearr_43735 = state_43704;
(statearr_43735[(13)] = inst_43688);

return statearr_43735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43704__$1,(13),dchan);
} else {
if((state_val_43705 === (14))){
var inst_43693 = cljs.core.async.close_BANG_(out);
var state_43704__$1 = state_43704;
var statearr_43736_45270 = state_43704__$1;
(statearr_43736_45270[(2)] = inst_43693);

(statearr_43736_45270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (16))){
var inst_43700 = (state_43704[(2)]);
var state_43704__$1 = state_43704;
var statearr_43737_45273 = state_43704__$1;
(statearr_43737_45273[(2)] = inst_43700);

(statearr_43737_45273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (10))){
var inst_43665 = (state_43704[(7)]);
var inst_43681 = (state_43704[(2)]);
var inst_43682 = (inst_43665 + (1));
var inst_43665__$1 = inst_43682;
var state_43704__$1 = (function (){var statearr_43738 = state_43704;
(statearr_43738[(7)] = inst_43665__$1);

(statearr_43738[(14)] = inst_43681);

return statearr_43738;
})();
var statearr_43739_45278 = state_43704__$1;
(statearr_43739_45278[(2)] = null);

(statearr_43739_45278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43705 === (8))){
var inst_43686 = (state_43704[(2)]);
var state_43704__$1 = state_43704;
var statearr_43740_45279 = state_43704__$1;
(statearr_43740_45279[(2)] = inst_43686);

(statearr_43740_45279[(1)] = (5));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_43741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43741[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_43741[(1)] = (1));

return statearr_43741;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_43704){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43704);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43742){var ex__41954__auto__ = e43742;
var statearr_43743_45280 = state_43704;
(statearr_43743_45280[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43704[(4)]))){
var statearr_43744_45281 = state_43704;
(statearr_43744_45281[(1)] = cljs.core.first((state_43704[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45282 = state_43704;
state_43704 = G__45282;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_43704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_43704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43745 = f__42199__auto__();
(statearr_43745[(6)] = c__42198__auto___45240);

return statearr_43745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var G__43768 = arguments.length;
switch (G__43768) {
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
var c__42198__auto___45290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43823){
var state_val_43824 = (state_43823[(1)]);
if((state_val_43824 === (7))){
var inst_43799 = (state_43823[(7)]);
var inst_43800 = (state_43823[(8)]);
var inst_43799__$1 = (state_43823[(2)]);
var inst_43800__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43799__$1,(0),null);
var inst_43801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43799__$1,(1),null);
var inst_43802 = (inst_43800__$1 == null);
var state_43823__$1 = (function (){var statearr_43825 = state_43823;
(statearr_43825[(7)] = inst_43799__$1);

(statearr_43825[(9)] = inst_43801);

(statearr_43825[(8)] = inst_43800__$1);

return statearr_43825;
})();
if(cljs.core.truth_(inst_43802)){
var statearr_43829_45291 = state_43823__$1;
(statearr_43829_45291[(1)] = (8));

} else {
var statearr_43830_45292 = state_43823__$1;
(statearr_43830_45292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (1))){
var inst_43783 = cljs.core.vec(chs);
var inst_43784 = inst_43783;
var state_43823__$1 = (function (){var statearr_43831 = state_43823;
(statearr_43831[(10)] = inst_43784);

return statearr_43831;
})();
var statearr_43832_45293 = state_43823__$1;
(statearr_43832_45293[(2)] = null);

(statearr_43832_45293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (4))){
var inst_43784 = (state_43823[(10)]);
var state_43823__$1 = state_43823;
return cljs.core.async.ioc_alts_BANG_(state_43823__$1,(7),inst_43784);
} else {
if((state_val_43824 === (6))){
var inst_43818 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43833_45295 = state_43823__$1;
(statearr_43833_45295[(2)] = inst_43818);

(statearr_43833_45295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (3))){
var inst_43820 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43823__$1,inst_43820);
} else {
if((state_val_43824 === (2))){
var inst_43784 = (state_43823[(10)]);
var inst_43786 = cljs.core.count(inst_43784);
var inst_43787 = (inst_43786 > (0));
var state_43823__$1 = state_43823;
if(cljs.core.truth_(inst_43787)){
var statearr_43835_45296 = state_43823__$1;
(statearr_43835_45296[(1)] = (4));

} else {
var statearr_43836_45297 = state_43823__$1;
(statearr_43836_45297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (11))){
var inst_43784 = (state_43823[(10)]);
var inst_43811 = (state_43823[(2)]);
var tmp43834 = inst_43784;
var inst_43784__$1 = tmp43834;
var state_43823__$1 = (function (){var statearr_43837 = state_43823;
(statearr_43837[(10)] = inst_43784__$1);

(statearr_43837[(11)] = inst_43811);

return statearr_43837;
})();
var statearr_43838_45299 = state_43823__$1;
(statearr_43838_45299[(2)] = null);

(statearr_43838_45299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (9))){
var inst_43800 = (state_43823[(8)]);
var state_43823__$1 = state_43823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43823__$1,(11),out,inst_43800);
} else {
if((state_val_43824 === (5))){
var inst_43816 = cljs.core.async.close_BANG_(out);
var state_43823__$1 = state_43823;
var statearr_43839_45305 = state_43823__$1;
(statearr_43839_45305[(2)] = inst_43816);

(statearr_43839_45305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (10))){
var inst_43814 = (state_43823[(2)]);
var state_43823__$1 = state_43823;
var statearr_43840_45307 = state_43823__$1;
(statearr_43840_45307[(2)] = inst_43814);

(statearr_43840_45307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43824 === (8))){
var inst_43784 = (state_43823[(10)]);
var inst_43799 = (state_43823[(7)]);
var inst_43801 = (state_43823[(9)]);
var inst_43800 = (state_43823[(8)]);
var inst_43804 = (function (){var cs = inst_43784;
var vec__43789 = inst_43799;
var v = inst_43800;
var c = inst_43801;
return (function (p1__43760_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43760_SHARP_);
});
})();
var inst_43805 = cljs.core.filterv(inst_43804,inst_43784);
var inst_43784__$1 = inst_43805;
var state_43823__$1 = (function (){var statearr_43841 = state_43823;
(statearr_43841[(10)] = inst_43784__$1);

return statearr_43841;
})();
var statearr_43842_45310 = state_43823__$1;
(statearr_43842_45310[(2)] = null);

(statearr_43842_45310[(1)] = (2));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_43843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43843[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_43843[(1)] = (1));

return statearr_43843;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_43823){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43823);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43844){var ex__41954__auto__ = e43844;
var statearr_43845_45312 = state_43823;
(statearr_43845_45312[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43823[(4)]))){
var statearr_43846_45313 = state_43823;
(statearr_43846_45313[(1)] = cljs.core.first((state_43823[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45317 = state_43823;
state_43823 = G__45317;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_43823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_43823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43847 = f__42199__auto__();
(statearr_43847[(6)] = c__42198__auto___45290);

return statearr_43847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
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
var G__43849 = arguments.length;
switch (G__43849) {
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
var c__42198__auto___45323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43873){
var state_val_43874 = (state_43873[(1)]);
if((state_val_43874 === (7))){
var inst_43855 = (state_43873[(7)]);
var inst_43855__$1 = (state_43873[(2)]);
var inst_43856 = (inst_43855__$1 == null);
var inst_43857 = cljs.core.not(inst_43856);
var state_43873__$1 = (function (){var statearr_43875 = state_43873;
(statearr_43875[(7)] = inst_43855__$1);

return statearr_43875;
})();
if(inst_43857){
var statearr_43876_45325 = state_43873__$1;
(statearr_43876_45325[(1)] = (8));

} else {
var statearr_43877_45326 = state_43873__$1;
(statearr_43877_45326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (1))){
var inst_43850 = (0);
var state_43873__$1 = (function (){var statearr_43878 = state_43873;
(statearr_43878[(8)] = inst_43850);

return statearr_43878;
})();
var statearr_43879_45327 = state_43873__$1;
(statearr_43879_45327[(2)] = null);

(statearr_43879_45327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (4))){
var state_43873__$1 = state_43873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43873__$1,(7),ch);
} else {
if((state_val_43874 === (6))){
var inst_43868 = (state_43873[(2)]);
var state_43873__$1 = state_43873;
var statearr_43880_45329 = state_43873__$1;
(statearr_43880_45329[(2)] = inst_43868);

(statearr_43880_45329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (3))){
var inst_43870 = (state_43873[(2)]);
var inst_43871 = cljs.core.async.close_BANG_(out);
var state_43873__$1 = (function (){var statearr_43881 = state_43873;
(statearr_43881[(9)] = inst_43870);

return statearr_43881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43873__$1,inst_43871);
} else {
if((state_val_43874 === (2))){
var inst_43850 = (state_43873[(8)]);
var inst_43852 = (inst_43850 < n);
var state_43873__$1 = state_43873;
if(cljs.core.truth_(inst_43852)){
var statearr_43882_45333 = state_43873__$1;
(statearr_43882_45333[(1)] = (4));

} else {
var statearr_43883_45334 = state_43873__$1;
(statearr_43883_45334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (11))){
var inst_43850 = (state_43873[(8)]);
var inst_43860 = (state_43873[(2)]);
var inst_43861 = (inst_43850 + (1));
var inst_43850__$1 = inst_43861;
var state_43873__$1 = (function (){var statearr_43886 = state_43873;
(statearr_43886[(10)] = inst_43860);

(statearr_43886[(8)] = inst_43850__$1);

return statearr_43886;
})();
var statearr_43888_45335 = state_43873__$1;
(statearr_43888_45335[(2)] = null);

(statearr_43888_45335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (9))){
var state_43873__$1 = state_43873;
var statearr_43894_45336 = state_43873__$1;
(statearr_43894_45336[(2)] = null);

(statearr_43894_45336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (5))){
var state_43873__$1 = state_43873;
var statearr_43895_45337 = state_43873__$1;
(statearr_43895_45337[(2)] = null);

(statearr_43895_45337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (10))){
var inst_43865 = (state_43873[(2)]);
var state_43873__$1 = state_43873;
var statearr_43896_45338 = state_43873__$1;
(statearr_43896_45338[(2)] = inst_43865);

(statearr_43896_45338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43874 === (8))){
var inst_43855 = (state_43873[(7)]);
var state_43873__$1 = state_43873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43873__$1,(11),out,inst_43855);
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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_43900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43900[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_43900[(1)] = (1));

return statearr_43900;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_43873){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43873);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e43901){var ex__41954__auto__ = e43901;
var statearr_43902_45339 = state_43873;
(statearr_43902_45339[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43873[(4)]))){
var statearr_43903_45340 = state_43873;
(statearr_43903_45340[(1)] = cljs.core.first((state_43873[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45341 = state_43873;
state_43873 = G__45341;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_43873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_43873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_43904 = f__42199__auto__();
(statearr_43904[(6)] = c__42198__auto___45323);

return statearr_43904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43906 = (function (f,ch,meta43907){
this.f = f;
this.ch = ch;
this.meta43907 = meta43907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43908,meta43907__$1){
var self__ = this;
var _43908__$1 = this;
return (new cljs.core.async.t_cljs$core$async43906(self__.f,self__.ch,meta43907__$1));
}));

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43908){
var self__ = this;
var _43908__$1 = this;
return self__.meta43907;
}));

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43909 = (function (f,ch,meta43907,_,fn1,meta43910){
this.f = f;
this.ch = ch;
this.meta43907 = meta43907;
this._ = _;
this.fn1 = fn1;
this.meta43910 = meta43910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43911,meta43910__$1){
var self__ = this;
var _43911__$1 = this;
return (new cljs.core.async.t_cljs$core$async43909(self__.f,self__.ch,self__.meta43907,self__._,self__.fn1,meta43910__$1));
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43911){
var self__ = this;
var _43911__$1 = this;
return self__.meta43910;
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43905_SHARP_){
var G__43912 = (((p1__43905_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43905_SHARP_) : self__.f.call(null,p1__43905_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43912) : f1.call(null,G__43912));
});
}));

(cljs.core.async.t_cljs$core$async43909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43907","meta43907",1113136454,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43906","cljs.core.async/t_cljs$core$async43906",-1760576668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43910","meta43910",197068927,null)], null);
}));

(cljs.core.async.t_cljs$core$async43909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43909");

(cljs.core.async.t_cljs$core$async43909.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43909.
 */
cljs.core.async.__GT_t_cljs$core$async43909 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43909(f__$1,ch__$1,meta43907__$1,___$2,fn1__$1,meta43910){
return (new cljs.core.async.t_cljs$core$async43909(f__$1,ch__$1,meta43907__$1,___$2,fn1__$1,meta43910));
});

}

return (new cljs.core.async.t_cljs$core$async43909(self__.f,self__.ch,self__.meta43907,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43914 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43914) : self__.f.call(null,G__43914));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43907","meta43907",1113136454,null)], null);
}));

(cljs.core.async.t_cljs$core$async43906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43906");

(cljs.core.async.t_cljs$core$async43906.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43906.
 */
cljs.core.async.__GT_t_cljs$core$async43906 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43906(f__$1,ch__$1,meta43907){
return (new cljs.core.async.t_cljs$core$async43906(f__$1,ch__$1,meta43907));
});

}

return (new cljs.core.async.t_cljs$core$async43906(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43918 = (function (f,ch,meta43919){
this.f = f;
this.ch = ch;
this.meta43919 = meta43919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43920,meta43919__$1){
var self__ = this;
var _43920__$1 = this;
return (new cljs.core.async.t_cljs$core$async43918(self__.f,self__.ch,meta43919__$1));
}));

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43920){
var self__ = this;
var _43920__$1 = this;
return self__.meta43919;
}));

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43919","meta43919",-2106450674,null)], null);
}));

(cljs.core.async.t_cljs$core$async43918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43918");

(cljs.core.async.t_cljs$core$async43918.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43918.
 */
cljs.core.async.__GT_t_cljs$core$async43918 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43918(f__$1,ch__$1,meta43919){
return (new cljs.core.async.t_cljs$core$async43918(f__$1,ch__$1,meta43919));
});

}

return (new cljs.core.async.t_cljs$core$async43918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43925 = (function (p,ch,meta43926){
this.p = p;
this.ch = ch;
this.meta43926 = meta43926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43927,meta43926__$1){
var self__ = this;
var _43927__$1 = this;
return (new cljs.core.async.t_cljs$core$async43925(self__.p,self__.ch,meta43926__$1));
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43927){
var self__ = this;
var _43927__$1 = this;
return self__.meta43926;
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43926","meta43926",432788749,null)], null);
}));

(cljs.core.async.t_cljs$core$async43925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43925");

(cljs.core.async.t_cljs$core$async43925.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43925.
 */
cljs.core.async.__GT_t_cljs$core$async43925 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43925(p__$1,ch__$1,meta43926){
return (new cljs.core.async.t_cljs$core$async43925(p__$1,ch__$1,meta43926));
});

}

return (new cljs.core.async.t_cljs$core$async43925(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43945 = arguments.length;
switch (G__43945) {
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
var c__42198__auto___45363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_43979){
var state_val_43980 = (state_43979[(1)]);
if((state_val_43980 === (7))){
var inst_43972 = (state_43979[(2)]);
var state_43979__$1 = state_43979;
var statearr_43991_45364 = state_43979__$1;
(statearr_43991_45364[(2)] = inst_43972);

(statearr_43991_45364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (1))){
var state_43979__$1 = state_43979;
var statearr_43996_45365 = state_43979__$1;
(statearr_43996_45365[(2)] = null);

(statearr_43996_45365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (4))){
var inst_43958 = (state_43979[(7)]);
var inst_43958__$1 = (state_43979[(2)]);
var inst_43959 = (inst_43958__$1 == null);
var state_43979__$1 = (function (){var statearr_43997 = state_43979;
(statearr_43997[(7)] = inst_43958__$1);

return statearr_43997;
})();
if(cljs.core.truth_(inst_43959)){
var statearr_43998_45367 = state_43979__$1;
(statearr_43998_45367[(1)] = (5));

} else {
var statearr_43999_45368 = state_43979__$1;
(statearr_43999_45368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (6))){
var inst_43958 = (state_43979[(7)]);
var inst_43963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43958) : p.call(null,inst_43958));
var state_43979__$1 = state_43979;
if(cljs.core.truth_(inst_43963)){
var statearr_44000_45370 = state_43979__$1;
(statearr_44000_45370[(1)] = (8));

} else {
var statearr_44001_45371 = state_43979__$1;
(statearr_44001_45371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (3))){
var inst_43974 = (state_43979[(2)]);
var state_43979__$1 = state_43979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43979__$1,inst_43974);
} else {
if((state_val_43980 === (2))){
var state_43979__$1 = state_43979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43979__$1,(4),ch);
} else {
if((state_val_43980 === (11))){
var inst_43966 = (state_43979[(2)]);
var state_43979__$1 = state_43979;
var statearr_44004_45372 = state_43979__$1;
(statearr_44004_45372[(2)] = inst_43966);

(statearr_44004_45372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (9))){
var state_43979__$1 = state_43979;
var statearr_44005_45374 = state_43979__$1;
(statearr_44005_45374[(2)] = null);

(statearr_44005_45374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (5))){
var inst_43961 = cljs.core.async.close_BANG_(out);
var state_43979__$1 = state_43979;
var statearr_44006_45375 = state_43979__$1;
(statearr_44006_45375[(2)] = inst_43961);

(statearr_44006_45375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (10))){
var inst_43969 = (state_43979[(2)]);
var state_43979__$1 = (function (){var statearr_44007 = state_43979;
(statearr_44007[(8)] = inst_43969);

return statearr_44007;
})();
var statearr_44008_45376 = state_43979__$1;
(statearr_44008_45376[(2)] = null);

(statearr_44008_45376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43980 === (8))){
var inst_43958 = (state_43979[(7)]);
var state_43979__$1 = state_43979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43979__$1,(11),out,inst_43958);
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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_44009 = [null,null,null,null,null,null,null,null,null];
(statearr_44009[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_44009[(1)] = (1));

return statearr_44009;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_43979){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_43979);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e44010){var ex__41954__auto__ = e44010;
var statearr_44011_45377 = state_43979;
(statearr_44011_45377[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_43979[(4)]))){
var statearr_44012_45378 = state_43979;
(statearr_44012_45378[(1)] = cljs.core.first((state_43979[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45379 = state_43979;
state_43979 = G__45379;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_43979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_43979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_44013 = f__42199__auto__();
(statearr_44013[(6)] = c__42198__auto___45363);

return statearr_44013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44015 = arguments.length;
switch (G__44015) {
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
var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_44077){
var state_val_44078 = (state_44077[(1)]);
if((state_val_44078 === (7))){
var inst_44073 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44081_45387 = state_44077__$1;
(statearr_44081_45387[(2)] = inst_44073);

(statearr_44081_45387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (20))){
var inst_44043 = (state_44077[(7)]);
var inst_44054 = (state_44077[(2)]);
var inst_44055 = cljs.core.next(inst_44043);
var inst_44029 = inst_44055;
var inst_44030 = null;
var inst_44031 = (0);
var inst_44032 = (0);
var state_44077__$1 = (function (){var statearr_44082 = state_44077;
(statearr_44082[(8)] = inst_44029);

(statearr_44082[(9)] = inst_44031);

(statearr_44082[(10)] = inst_44054);

(statearr_44082[(11)] = inst_44032);

(statearr_44082[(12)] = inst_44030);

return statearr_44082;
})();
var statearr_44083_45390 = state_44077__$1;
(statearr_44083_45390[(2)] = null);

(statearr_44083_45390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (1))){
var state_44077__$1 = state_44077;
var statearr_44084_45391 = state_44077__$1;
(statearr_44084_45391[(2)] = null);

(statearr_44084_45391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (4))){
var inst_44018 = (state_44077[(13)]);
var inst_44018__$1 = (state_44077[(2)]);
var inst_44019 = (inst_44018__$1 == null);
var state_44077__$1 = (function (){var statearr_44086 = state_44077;
(statearr_44086[(13)] = inst_44018__$1);

return statearr_44086;
})();
if(cljs.core.truth_(inst_44019)){
var statearr_44091_45392 = state_44077__$1;
(statearr_44091_45392[(1)] = (5));

} else {
var statearr_44098_45393 = state_44077__$1;
(statearr_44098_45393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (15))){
var state_44077__$1 = state_44077;
var statearr_44102_45395 = state_44077__$1;
(statearr_44102_45395[(2)] = null);

(statearr_44102_45395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (21))){
var state_44077__$1 = state_44077;
var statearr_44103_45397 = state_44077__$1;
(statearr_44103_45397[(2)] = null);

(statearr_44103_45397[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (13))){
var inst_44029 = (state_44077[(8)]);
var inst_44031 = (state_44077[(9)]);
var inst_44032 = (state_44077[(11)]);
var inst_44030 = (state_44077[(12)]);
var inst_44039 = (state_44077[(2)]);
var inst_44040 = (inst_44032 + (1));
var tmp44099 = inst_44029;
var tmp44100 = inst_44031;
var tmp44101 = inst_44030;
var inst_44029__$1 = tmp44099;
var inst_44030__$1 = tmp44101;
var inst_44031__$1 = tmp44100;
var inst_44032__$1 = inst_44040;
var state_44077__$1 = (function (){var statearr_44105 = state_44077;
(statearr_44105[(8)] = inst_44029__$1);

(statearr_44105[(9)] = inst_44031__$1);

(statearr_44105[(11)] = inst_44032__$1);

(statearr_44105[(14)] = inst_44039);

(statearr_44105[(12)] = inst_44030__$1);

return statearr_44105;
})();
var statearr_44106_45405 = state_44077__$1;
(statearr_44106_45405[(2)] = null);

(statearr_44106_45405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (22))){
var state_44077__$1 = state_44077;
var statearr_44107_45410 = state_44077__$1;
(statearr_44107_45410[(2)] = null);

(statearr_44107_45410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (6))){
var inst_44018 = (state_44077[(13)]);
var inst_44027 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44018) : f.call(null,inst_44018));
var inst_44028 = cljs.core.seq(inst_44027);
var inst_44029 = inst_44028;
var inst_44030 = null;
var inst_44031 = (0);
var inst_44032 = (0);
var state_44077__$1 = (function (){var statearr_44109 = state_44077;
(statearr_44109[(8)] = inst_44029);

(statearr_44109[(9)] = inst_44031);

(statearr_44109[(11)] = inst_44032);

(statearr_44109[(12)] = inst_44030);

return statearr_44109;
})();
var statearr_44110_45415 = state_44077__$1;
(statearr_44110_45415[(2)] = null);

(statearr_44110_45415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (17))){
var inst_44043 = (state_44077[(7)]);
var inst_44047 = cljs.core.chunk_first(inst_44043);
var inst_44048 = cljs.core.chunk_rest(inst_44043);
var inst_44049 = cljs.core.count(inst_44047);
var inst_44029 = inst_44048;
var inst_44030 = inst_44047;
var inst_44031 = inst_44049;
var inst_44032 = (0);
var state_44077__$1 = (function (){var statearr_44111 = state_44077;
(statearr_44111[(8)] = inst_44029);

(statearr_44111[(9)] = inst_44031);

(statearr_44111[(11)] = inst_44032);

(statearr_44111[(12)] = inst_44030);

return statearr_44111;
})();
var statearr_44112_45416 = state_44077__$1;
(statearr_44112_45416[(2)] = null);

(statearr_44112_45416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (3))){
var inst_44075 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44077__$1,inst_44075);
} else {
if((state_val_44078 === (12))){
var inst_44063 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44113_45417 = state_44077__$1;
(statearr_44113_45417[(2)] = inst_44063);

(statearr_44113_45417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (2))){
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44077__$1,(4),in$);
} else {
if((state_val_44078 === (23))){
var inst_44071 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44114_45418 = state_44077__$1;
(statearr_44114_45418[(2)] = inst_44071);

(statearr_44114_45418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (19))){
var inst_44058 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44115_45419 = state_44077__$1;
(statearr_44115_45419[(2)] = inst_44058);

(statearr_44115_45419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (11))){
var inst_44029 = (state_44077[(8)]);
var inst_44043 = (state_44077[(7)]);
var inst_44043__$1 = cljs.core.seq(inst_44029);
var state_44077__$1 = (function (){var statearr_44116 = state_44077;
(statearr_44116[(7)] = inst_44043__$1);

return statearr_44116;
})();
if(inst_44043__$1){
var statearr_44117_45422 = state_44077__$1;
(statearr_44117_45422[(1)] = (14));

} else {
var statearr_44118_45423 = state_44077__$1;
(statearr_44118_45423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (9))){
var inst_44065 = (state_44077[(2)]);
var inst_44066 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44077__$1 = (function (){var statearr_44119 = state_44077;
(statearr_44119[(15)] = inst_44065);

return statearr_44119;
})();
if(cljs.core.truth_(inst_44066)){
var statearr_44120_45424 = state_44077__$1;
(statearr_44120_45424[(1)] = (21));

} else {
var statearr_44121_45425 = state_44077__$1;
(statearr_44121_45425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (5))){
var inst_44021 = cljs.core.async.close_BANG_(out);
var state_44077__$1 = state_44077;
var statearr_44122_45427 = state_44077__$1;
(statearr_44122_45427[(2)] = inst_44021);

(statearr_44122_45427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (14))){
var inst_44043 = (state_44077[(7)]);
var inst_44045 = cljs.core.chunked_seq_QMARK_(inst_44043);
var state_44077__$1 = state_44077;
if(inst_44045){
var statearr_44123_45428 = state_44077__$1;
(statearr_44123_45428[(1)] = (17));

} else {
var statearr_44125_45430 = state_44077__$1;
(statearr_44125_45430[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (16))){
var inst_44061 = (state_44077[(2)]);
var state_44077__$1 = state_44077;
var statearr_44127_45432 = state_44077__$1;
(statearr_44127_45432[(2)] = inst_44061);

(statearr_44127_45432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44078 === (10))){
var inst_44032 = (state_44077[(11)]);
var inst_44030 = (state_44077[(12)]);
var inst_44037 = cljs.core._nth(inst_44030,inst_44032);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44077__$1,(13),out,inst_44037);
} else {
if((state_val_44078 === (18))){
var inst_44043 = (state_44077[(7)]);
var inst_44052 = cljs.core.first(inst_44043);
var state_44077__$1 = state_44077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44077__$1,(20),out,inst_44052);
} else {
if((state_val_44078 === (8))){
var inst_44031 = (state_44077[(9)]);
var inst_44032 = (state_44077[(11)]);
var inst_44034 = (inst_44032 < inst_44031);
var inst_44035 = inst_44034;
var state_44077__$1 = state_44077;
if(cljs.core.truth_(inst_44035)){
var statearr_44129_45433 = state_44077__$1;
(statearr_44129_45433[(1)] = (10));

} else {
var statearr_44130_45434 = state_44077__$1;
(statearr_44130_45434[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_44131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44131[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__);

(statearr_44131[(1)] = (1));

return statearr_44131;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1 = (function (state_44077){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_44077);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e44132){var ex__41954__auto__ = e44132;
var statearr_44133_45436 = state_44077;
(statearr_44133_45436[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_44077[(4)]))){
var statearr_44134_45437 = state_44077;
(statearr_44134_45437[(1)] = cljs.core.first((state_44077[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45438 = state_44077;
state_44077 = G__45438;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__ = function(state_44077){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1.call(this,state_44077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_44144 = f__42199__auto__();
(statearr_44144[(6)] = c__42198__auto__);

return statearr_44144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44146 = arguments.length;
switch (G__44146) {
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
var G__44149 = arguments.length;
switch (G__44149) {
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
var G__44151 = arguments.length;
switch (G__44151) {
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
var c__42198__auto___45442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_44178){
var state_val_44179 = (state_44178[(1)]);
if((state_val_44179 === (7))){
var inst_44172 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44181_45443 = state_44178__$1;
(statearr_44181_45443[(2)] = inst_44172);

(statearr_44181_45443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (1))){
var inst_44154 = null;
var state_44178__$1 = (function (){var statearr_44182 = state_44178;
(statearr_44182[(7)] = inst_44154);

return statearr_44182;
})();
var statearr_44183_45444 = state_44178__$1;
(statearr_44183_45444[(2)] = null);

(statearr_44183_45444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (4))){
var inst_44157 = (state_44178[(8)]);
var inst_44157__$1 = (state_44178[(2)]);
var inst_44158 = (inst_44157__$1 == null);
var inst_44159 = cljs.core.not(inst_44158);
var state_44178__$1 = (function (){var statearr_44184 = state_44178;
(statearr_44184[(8)] = inst_44157__$1);

return statearr_44184;
})();
if(inst_44159){
var statearr_44185_45445 = state_44178__$1;
(statearr_44185_45445[(1)] = (5));

} else {
var statearr_44186_45446 = state_44178__$1;
(statearr_44186_45446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (6))){
var state_44178__$1 = state_44178;
var statearr_44187_45447 = state_44178__$1;
(statearr_44187_45447[(2)] = null);

(statearr_44187_45447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (3))){
var inst_44175 = (state_44178[(2)]);
var inst_44176 = cljs.core.async.close_BANG_(out);
var state_44178__$1 = (function (){var statearr_44188 = state_44178;
(statearr_44188[(9)] = inst_44175);

return statearr_44188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44178__$1,inst_44176);
} else {
if((state_val_44179 === (2))){
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44178__$1,(4),ch);
} else {
if((state_val_44179 === (11))){
var inst_44157 = (state_44178[(8)]);
var inst_44166 = (state_44178[(2)]);
var inst_44154 = inst_44157;
var state_44178__$1 = (function (){var statearr_44190 = state_44178;
(statearr_44190[(7)] = inst_44154);

(statearr_44190[(10)] = inst_44166);

return statearr_44190;
})();
var statearr_44197_45449 = state_44178__$1;
(statearr_44197_45449[(2)] = null);

(statearr_44197_45449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (9))){
var inst_44157 = (state_44178[(8)]);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44178__$1,(11),out,inst_44157);
} else {
if((state_val_44179 === (5))){
var inst_44157 = (state_44178[(8)]);
var inst_44154 = (state_44178[(7)]);
var inst_44161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44157,inst_44154);
var state_44178__$1 = state_44178;
if(inst_44161){
var statearr_44200_45450 = state_44178__$1;
(statearr_44200_45450[(1)] = (8));

} else {
var statearr_44201_45451 = state_44178__$1;
(statearr_44201_45451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (10))){
var inst_44169 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44202_45452 = state_44178__$1;
(statearr_44202_45452[(2)] = inst_44169);

(statearr_44202_45452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (8))){
var inst_44154 = (state_44178[(7)]);
var tmp44198 = inst_44154;
var inst_44154__$1 = tmp44198;
var state_44178__$1 = (function (){var statearr_44203 = state_44178;
(statearr_44203[(7)] = inst_44154__$1);

return statearr_44203;
})();
var statearr_44213_45453 = state_44178__$1;
(statearr_44213_45453[(2)] = null);

(statearr_44213_45453[(1)] = (2));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_44214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44214[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_44214[(1)] = (1));

return statearr_44214;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_44178){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_44178);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e44215){var ex__41954__auto__ = e44215;
var statearr_44216_45454 = state_44178;
(statearr_44216_45454[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_44178[(4)]))){
var statearr_44219_45455 = state_44178;
(statearr_44219_45455[(1)] = cljs.core.first((state_44178[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45456 = state_44178;
state_44178 = G__45456;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_44178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_44178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_44222 = f__42199__auto__();
(statearr_44222[(6)] = c__42198__auto___45442);

return statearr_44222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44232 = arguments.length;
switch (G__44232) {
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
var c__42198__auto___45472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_44295){
var state_val_44296 = (state_44295[(1)]);
if((state_val_44296 === (7))){
var inst_44291 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44297_45473 = state_44295__$1;
(statearr_44297_45473[(2)] = inst_44291);

(statearr_44297_45473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (1))){
var inst_44235 = (new Array(n));
var inst_44236 = inst_44235;
var inst_44237 = (0);
var state_44295__$1 = (function (){var statearr_44298 = state_44295;
(statearr_44298[(7)] = inst_44236);

(statearr_44298[(8)] = inst_44237);

return statearr_44298;
})();
var statearr_44299_45481 = state_44295__$1;
(statearr_44299_45481[(2)] = null);

(statearr_44299_45481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (4))){
var inst_44240 = (state_44295[(9)]);
var inst_44240__$1 = (state_44295[(2)]);
var inst_44244 = (inst_44240__$1 == null);
var inst_44245 = cljs.core.not(inst_44244);
var state_44295__$1 = (function (){var statearr_44300 = state_44295;
(statearr_44300[(9)] = inst_44240__$1);

return statearr_44300;
})();
if(inst_44245){
var statearr_44301_45482 = state_44295__$1;
(statearr_44301_45482[(1)] = (5));

} else {
var statearr_44302_45483 = state_44295__$1;
(statearr_44302_45483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (15))){
var inst_44283 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44303_45484 = state_44295__$1;
(statearr_44303_45484[(2)] = inst_44283);

(statearr_44303_45484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (13))){
var state_44295__$1 = state_44295;
var statearr_44304_45485 = state_44295__$1;
(statearr_44304_45485[(2)] = null);

(statearr_44304_45485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (6))){
var inst_44237 = (state_44295[(8)]);
var inst_44279 = (inst_44237 > (0));
var state_44295__$1 = state_44295;
if(cljs.core.truth_(inst_44279)){
var statearr_44305_45488 = state_44295__$1;
(statearr_44305_45488[(1)] = (12));

} else {
var statearr_44306_45489 = state_44295__$1;
(statearr_44306_45489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (3))){
var inst_44293 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44295__$1,inst_44293);
} else {
if((state_val_44296 === (12))){
var inst_44236 = (state_44295[(7)]);
var inst_44281 = cljs.core.vec(inst_44236);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44295__$1,(15),out,inst_44281);
} else {
if((state_val_44296 === (2))){
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44295__$1,(4),ch);
} else {
if((state_val_44296 === (11))){
var inst_44271 = (state_44295[(2)]);
var inst_44272 = (new Array(n));
var inst_44236 = inst_44272;
var inst_44237 = (0);
var state_44295__$1 = (function (){var statearr_44308 = state_44295;
(statearr_44308[(10)] = inst_44271);

(statearr_44308[(7)] = inst_44236);

(statearr_44308[(8)] = inst_44237);

return statearr_44308;
})();
var statearr_44309_45492 = state_44295__$1;
(statearr_44309_45492[(2)] = null);

(statearr_44309_45492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (9))){
var inst_44236 = (state_44295[(7)]);
var inst_44269 = cljs.core.vec(inst_44236);
var state_44295__$1 = state_44295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44295__$1,(11),out,inst_44269);
} else {
if((state_val_44296 === (5))){
var inst_44236 = (state_44295[(7)]);
var inst_44264 = (state_44295[(11)]);
var inst_44237 = (state_44295[(8)]);
var inst_44240 = (state_44295[(9)]);
var inst_44262 = (inst_44236[inst_44237] = inst_44240);
var inst_44264__$1 = (inst_44237 + (1));
var inst_44265 = (inst_44264__$1 < n);
var state_44295__$1 = (function (){var statearr_44311 = state_44295;
(statearr_44311[(11)] = inst_44264__$1);

(statearr_44311[(12)] = inst_44262);

return statearr_44311;
})();
if(cljs.core.truth_(inst_44265)){
var statearr_44312_45495 = state_44295__$1;
(statearr_44312_45495[(1)] = (8));

} else {
var statearr_44313_45496 = state_44295__$1;
(statearr_44313_45496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (14))){
var inst_44286 = (state_44295[(2)]);
var inst_44289 = cljs.core.async.close_BANG_(out);
var state_44295__$1 = (function (){var statearr_44315 = state_44295;
(statearr_44315[(13)] = inst_44286);

return statearr_44315;
})();
var statearr_44316_45497 = state_44295__$1;
(statearr_44316_45497[(2)] = inst_44289);

(statearr_44316_45497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (10))){
var inst_44277 = (state_44295[(2)]);
var state_44295__$1 = state_44295;
var statearr_44317_45498 = state_44295__$1;
(statearr_44317_45498[(2)] = inst_44277);

(statearr_44317_45498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44296 === (8))){
var inst_44236 = (state_44295[(7)]);
var inst_44264 = (state_44295[(11)]);
var tmp44314 = inst_44236;
var inst_44236__$1 = tmp44314;
var inst_44237 = inst_44264;
var state_44295__$1 = (function (){var statearr_44318 = state_44295;
(statearr_44318[(7)] = inst_44236__$1);

(statearr_44318[(8)] = inst_44237);

return statearr_44318;
})();
var statearr_44319_45499 = state_44295__$1;
(statearr_44319_45499[(2)] = null);

(statearr_44319_45499[(1)] = (2));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_44320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44320[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_44320[(1)] = (1));

return statearr_44320;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_44295){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_44295);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e44321){var ex__41954__auto__ = e44321;
var statearr_44322_45500 = state_44295;
(statearr_44322_45500[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_44295[(4)]))){
var statearr_44323_45501 = state_44295;
(statearr_44323_45501[(1)] = cljs.core.first((state_44295[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45502 = state_44295;
state_44295 = G__45502;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_44295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_44295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_44328 = f__42199__auto__();
(statearr_44328[(6)] = c__42198__auto___45472);

return statearr_44328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44331 = arguments.length;
switch (G__44331) {
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
var c__42198__auto___45504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_44395){
var state_val_44396 = (state_44395[(1)]);
if((state_val_44396 === (7))){
var inst_44391 = (state_44395[(2)]);
var state_44395__$1 = state_44395;
var statearr_44403_45505 = state_44395__$1;
(statearr_44403_45505[(2)] = inst_44391);

(statearr_44403_45505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (1))){
var inst_44342 = [];
var inst_44346 = inst_44342;
var inst_44347 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44395__$1 = (function (){var statearr_44404 = state_44395;
(statearr_44404[(7)] = inst_44347);

(statearr_44404[(8)] = inst_44346);

return statearr_44404;
})();
var statearr_44405_45506 = state_44395__$1;
(statearr_44405_45506[(2)] = null);

(statearr_44405_45506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (4))){
var inst_44350 = (state_44395[(9)]);
var inst_44350__$1 = (state_44395[(2)]);
var inst_44351 = (inst_44350__$1 == null);
var inst_44352 = cljs.core.not(inst_44351);
var state_44395__$1 = (function (){var statearr_44406 = state_44395;
(statearr_44406[(9)] = inst_44350__$1);

return statearr_44406;
})();
if(inst_44352){
var statearr_44407_45507 = state_44395__$1;
(statearr_44407_45507[(1)] = (5));

} else {
var statearr_44409_45508 = state_44395__$1;
(statearr_44409_45508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (15))){
var inst_44346 = (state_44395[(8)]);
var inst_44383 = cljs.core.vec(inst_44346);
var state_44395__$1 = state_44395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44395__$1,(18),out,inst_44383);
} else {
if((state_val_44396 === (13))){
var inst_44372 = (state_44395[(2)]);
var state_44395__$1 = state_44395;
var statearr_44411_45509 = state_44395__$1;
(statearr_44411_45509[(2)] = inst_44372);

(statearr_44411_45509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (6))){
var inst_44346 = (state_44395[(8)]);
var inst_44374 = inst_44346.length;
var inst_44375 = (inst_44374 > (0));
var state_44395__$1 = state_44395;
if(cljs.core.truth_(inst_44375)){
var statearr_44412_45510 = state_44395__$1;
(statearr_44412_45510[(1)] = (15));

} else {
var statearr_44413_45511 = state_44395__$1;
(statearr_44413_45511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (17))){
var inst_44388 = (state_44395[(2)]);
var inst_44389 = cljs.core.async.close_BANG_(out);
var state_44395__$1 = (function (){var statearr_44414 = state_44395;
(statearr_44414[(10)] = inst_44388);

return statearr_44414;
})();
var statearr_44415_45512 = state_44395__$1;
(statearr_44415_45512[(2)] = inst_44389);

(statearr_44415_45512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (3))){
var inst_44393 = (state_44395[(2)]);
var state_44395__$1 = state_44395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44395__$1,inst_44393);
} else {
if((state_val_44396 === (12))){
var inst_44346 = (state_44395[(8)]);
var inst_44365 = cljs.core.vec(inst_44346);
var state_44395__$1 = state_44395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44395__$1,(14),out,inst_44365);
} else {
if((state_val_44396 === (2))){
var state_44395__$1 = state_44395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44395__$1,(4),ch);
} else {
if((state_val_44396 === (11))){
var inst_44354 = (state_44395[(11)]);
var inst_44350 = (state_44395[(9)]);
var inst_44346 = (state_44395[(8)]);
var inst_44362 = inst_44346.push(inst_44350);
var tmp44416 = inst_44346;
var inst_44346__$1 = tmp44416;
var inst_44347 = inst_44354;
var state_44395__$1 = (function (){var statearr_44427 = state_44395;
(statearr_44427[(12)] = inst_44362);

(statearr_44427[(7)] = inst_44347);

(statearr_44427[(8)] = inst_44346__$1);

return statearr_44427;
})();
var statearr_44428_45513 = state_44395__$1;
(statearr_44428_45513[(2)] = null);

(statearr_44428_45513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (9))){
var inst_44347 = (state_44395[(7)]);
var inst_44358 = cljs.core.keyword_identical_QMARK_(inst_44347,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_44395__$1 = state_44395;
var statearr_44429_45514 = state_44395__$1;
(statearr_44429_45514[(2)] = inst_44358);

(statearr_44429_45514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (5))){
var inst_44354 = (state_44395[(11)]);
var inst_44355 = (state_44395[(13)]);
var inst_44347 = (state_44395[(7)]);
var inst_44350 = (state_44395[(9)]);
var inst_44354__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44350) : f.call(null,inst_44350));
var inst_44355__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44354__$1,inst_44347);
var state_44395__$1 = (function (){var statearr_44430 = state_44395;
(statearr_44430[(11)] = inst_44354__$1);

(statearr_44430[(13)] = inst_44355__$1);

return statearr_44430;
})();
if(inst_44355__$1){
var statearr_44431_45515 = state_44395__$1;
(statearr_44431_45515[(1)] = (8));

} else {
var statearr_44432_45516 = state_44395__$1;
(statearr_44432_45516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (14))){
var inst_44354 = (state_44395[(11)]);
var inst_44350 = (state_44395[(9)]);
var inst_44367 = (state_44395[(2)]);
var inst_44368 = [];
var inst_44369 = inst_44368.push(inst_44350);
var inst_44346 = inst_44368;
var inst_44347 = inst_44354;
var state_44395__$1 = (function (){var statearr_44434 = state_44395;
(statearr_44434[(7)] = inst_44347);

(statearr_44434[(14)] = inst_44367);

(statearr_44434[(15)] = inst_44369);

(statearr_44434[(8)] = inst_44346);

return statearr_44434;
})();
var statearr_44435_45517 = state_44395__$1;
(statearr_44435_45517[(2)] = null);

(statearr_44435_45517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (16))){
var state_44395__$1 = state_44395;
var statearr_44437_45518 = state_44395__$1;
(statearr_44437_45518[(2)] = null);

(statearr_44437_45518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (10))){
var inst_44360 = (state_44395[(2)]);
var state_44395__$1 = state_44395;
if(cljs.core.truth_(inst_44360)){
var statearr_44438_45519 = state_44395__$1;
(statearr_44438_45519[(1)] = (11));

} else {
var statearr_44439_45520 = state_44395__$1;
(statearr_44439_45520[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (18))){
var inst_44385 = (state_44395[(2)]);
var state_44395__$1 = state_44395;
var statearr_44440_45521 = state_44395__$1;
(statearr_44440_45521[(2)] = inst_44385);

(statearr_44440_45521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44396 === (8))){
var inst_44355 = (state_44395[(13)]);
var state_44395__$1 = state_44395;
var statearr_44446_45522 = state_44395__$1;
(statearr_44446_45522[(2)] = inst_44355);

(statearr_44446_45522[(1)] = (10));


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
var cljs$core$async$state_machine__41951__auto__ = null;
var cljs$core$async$state_machine__41951__auto____0 = (function (){
var statearr_44447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44447[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_44447[(1)] = (1));

return statearr_44447;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_44395){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_44395);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e44448){var ex__41954__auto__ = e44448;
var statearr_44449_45524 = state_44395;
(statearr_44449_45524[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_44395[(4)]))){
var statearr_44450_45525 = state_44395;
(statearr_44450_45525[(1)] = cljs.core.first((state_44395[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45526 = state_44395;
state_44395 = G__45526;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_44395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_44395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_44451 = f__42199__auto__();
(statearr_44451[(6)] = c__42198__auto___45504);

return statearr_44451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
