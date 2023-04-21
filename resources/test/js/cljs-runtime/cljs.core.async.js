goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50414 = arguments.length;
switch (G__50414) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50423 = (function (f,blockable,meta50424){
this.f = f;
this.blockable = blockable;
this.meta50424 = meta50424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50425,meta50424__$1){
var self__ = this;
var _50425__$1 = this;
return (new cljs.core.async.t_cljs$core$async50423(self__.f,self__.blockable,meta50424__$1));
}));

(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50425){
var self__ = this;
var _50425__$1 = this;
return self__.meta50424;
}));

(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50424","meta50424",-1151936928,null)], null);
}));

(cljs.core.async.t_cljs$core$async50423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50423");

(cljs.core.async.t_cljs$core$async50423.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50423.
 */
cljs.core.async.__GT_t_cljs$core$async50423 = (function cljs$core$async$__GT_t_cljs$core$async50423(f__$1,blockable__$1,meta50424){
return (new cljs.core.async.t_cljs$core$async50423(f__$1,blockable__$1,meta50424));
});

}

return (new cljs.core.async.t_cljs$core$async50423(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__50531 = arguments.length;
switch (G__50531) {
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
var G__50543 = arguments.length;
switch (G__50543) {
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
var G__50552 = arguments.length;
switch (G__50552) {
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
var val_53562 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53562) : fn1.call(null,val_53562));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_53562) : fn1.call(null,val_53562));
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
var G__50558 = arguments.length;
switch (G__50558) {
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
var n__5636__auto___53565 = n;
var x_53566 = (0);
while(true){
if((x_53566 < n__5636__auto___53565)){
(a[x_53566] = x_53566);

var G__53567 = (x_53566 + (1));
x_53566 = G__53567;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50603 = (function (flag,meta50604){
this.flag = flag;
this.meta50604 = meta50604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50605,meta50604__$1){
var self__ = this;
var _50605__$1 = this;
return (new cljs.core.async.t_cljs$core$async50603(self__.flag,meta50604__$1));
}));

(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50605){
var self__ = this;
var _50605__$1 = this;
return self__.meta50604;
}));

(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50604","meta50604",-1340167656,null)], null);
}));

(cljs.core.async.t_cljs$core$async50603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50603");

(cljs.core.async.t_cljs$core$async50603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50603.
 */
cljs.core.async.__GT_t_cljs$core$async50603 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50603(flag__$1,meta50604){
return (new cljs.core.async.t_cljs$core$async50603(flag__$1,meta50604));
});

}

return (new cljs.core.async.t_cljs$core$async50603(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50610 = (function (flag,cb,meta50611){
this.flag = flag;
this.cb = cb;
this.meta50611 = meta50611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50612,meta50611__$1){
var self__ = this;
var _50612__$1 = this;
return (new cljs.core.async.t_cljs$core$async50610(self__.flag,self__.cb,meta50611__$1));
}));

(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50612){
var self__ = this;
var _50612__$1 = this;
return self__.meta50611;
}));

(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50611","meta50611",-1233052002,null)], null);
}));

(cljs.core.async.t_cljs$core$async50610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50610");

(cljs.core.async.t_cljs$core$async50610.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50610.
 */
cljs.core.async.__GT_t_cljs$core$async50610 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50610(flag__$1,cb__$1,meta50611){
return (new cljs.core.async.t_cljs$core$async50610(flag__$1,cb__$1,meta50611));
});

}

return (new cljs.core.async.t_cljs$core$async50610(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50635_SHARP_){
var G__50646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50635_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50646) : fret.call(null,G__50646));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50636_SHARP_){
var G__50647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50636_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50647) : fret.call(null,G__50647));
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
var G__53568 = (i + (1));
i = G__53568;
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
var len__5769__auto___53570 = arguments.length;
var i__5770__auto___53571 = (0);
while(true){
if((i__5770__auto___53571 < len__5769__auto___53570)){
args__5775__auto__.push((arguments[i__5770__auto___53571]));

var G__53572 = (i__5770__auto___53571 + (1));
i__5770__auto___53571 = G__53572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50656){
var map__50660 = p__50656;
var map__50660__$1 = cljs.core.__destructure_map(map__50660);
var opts = map__50660__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50650){
var G__50651 = cljs.core.first(seq50650);
var seq50650__$1 = cljs.core.next(seq50650);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50651,seq50650__$1);
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
var G__50676 = arguments.length;
switch (G__50676) {
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
var c__42198__auto___53577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_50719){
var state_val_50720 = (state_50719[(1)]);
if((state_val_50720 === (7))){
var inst_50715 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
var statearr_50721_53578 = state_50719__$1;
(statearr_50721_53578[(2)] = inst_50715);

(statearr_50721_53578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (1))){
var state_50719__$1 = state_50719;
var statearr_50722_53579 = state_50719__$1;
(statearr_50722_53579[(2)] = null);

(statearr_50722_53579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (4))){
var inst_50698 = (state_50719[(7)]);
var inst_50698__$1 = (state_50719[(2)]);
var inst_50699 = (inst_50698__$1 == null);
var state_50719__$1 = (function (){var statearr_50723 = state_50719;
(statearr_50723[(7)] = inst_50698__$1);

return statearr_50723;
})();
if(cljs.core.truth_(inst_50699)){
var statearr_50724_53583 = state_50719__$1;
(statearr_50724_53583[(1)] = (5));

} else {
var statearr_50725_53584 = state_50719__$1;
(statearr_50725_53584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (13))){
var state_50719__$1 = state_50719;
var statearr_50726_53585 = state_50719__$1;
(statearr_50726_53585[(2)] = null);

(statearr_50726_53585[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (6))){
var inst_50698 = (state_50719[(7)]);
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50719__$1,(11),to,inst_50698);
} else {
if((state_val_50720 === (3))){
var inst_50717 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50719__$1,inst_50717);
} else {
if((state_val_50720 === (12))){
var state_50719__$1 = state_50719;
var statearr_50727_53588 = state_50719__$1;
(statearr_50727_53588[(2)] = null);

(statearr_50727_53588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (2))){
var state_50719__$1 = state_50719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50719__$1,(4),from);
} else {
if((state_val_50720 === (11))){
var inst_50708 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
if(cljs.core.truth_(inst_50708)){
var statearr_50729_53590 = state_50719__$1;
(statearr_50729_53590[(1)] = (12));

} else {
var statearr_50730_53591 = state_50719__$1;
(statearr_50730_53591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (9))){
var state_50719__$1 = state_50719;
var statearr_50731_53596 = state_50719__$1;
(statearr_50731_53596[(2)] = null);

(statearr_50731_53596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (5))){
var state_50719__$1 = state_50719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50732_53598 = state_50719__$1;
(statearr_50732_53598[(1)] = (8));

} else {
var statearr_50733_53600 = state_50719__$1;
(statearr_50733_53600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (14))){
var inst_50713 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
var statearr_50734_53601 = state_50719__$1;
(statearr_50734_53601[(2)] = inst_50713);

(statearr_50734_53601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (10))){
var inst_50705 = (state_50719[(2)]);
var state_50719__$1 = state_50719;
var statearr_50735_53602 = state_50719__$1;
(statearr_50735_53602[(2)] = inst_50705);

(statearr_50735_53602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50720 === (8))){
var inst_50702 = cljs.core.async.close_BANG_(to);
var state_50719__$1 = state_50719;
var statearr_50736_53603 = state_50719__$1;
(statearr_50736_53603[(2)] = inst_50702);

(statearr_50736_53603[(1)] = (10));


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
var statearr_50740 = [null,null,null,null,null,null,null,null];
(statearr_50740[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_50740[(1)] = (1));

return statearr_50740;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_50719){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50719);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e50745){var ex__41954__auto__ = e50745;
var statearr_50749_53608 = state_50719;
(statearr_50749_53608[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50719[(4)]))){
var statearr_50750_53613 = state_50719;
(statearr_50750_53613[(1)] = cljs.core.first((state_50719[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53614 = state_50719;
state_50719 = G__53614;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_50719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_50719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_50757 = f__42199__auto__();
(statearr_50757[(6)] = c__42198__auto___53577);

return statearr_50757;
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
var process__$1 = (function (p__50759){
var vec__50760 = p__50759;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50760,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50760,(1),null);
var job = vec__50760;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42198__auto___53615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_50767){
var state_val_50768 = (state_50767[(1)]);
if((state_val_50768 === (1))){
var state_50767__$1 = state_50767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50767__$1,(2),res,v);
} else {
if((state_val_50768 === (2))){
var inst_50764 = (state_50767[(2)]);
var inst_50765 = cljs.core.async.close_BANG_(res);
var state_50767__$1 = (function (){var statearr_50769 = state_50767;
(statearr_50769[(7)] = inst_50764);

return statearr_50769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50767__$1,inst_50765);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_50770 = [null,null,null,null,null,null,null,null];
(statearr_50770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_50770[(1)] = (1));

return statearr_50770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_50767){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50767);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e50781){var ex__41954__auto__ = e50781;
var statearr_50782_53616 = state_50767;
(statearr_50782_53616[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50767[(4)]))){
var statearr_50783_53617 = state_50767;
(statearr_50783_53617[(1)] = cljs.core.first((state_50767[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53618 = state_50767;
state_50767 = G__53618;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_50767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_50767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_50784 = f__42199__auto__();
(statearr_50784[(6)] = c__42198__auto___53615);

return statearr_50784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50785){
var vec__50786 = p__50785;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(1),null);
var job = vec__50786;
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
var n__5636__auto___53620 = n;
var __53621 = (0);
while(true){
if((__53621 < n__5636__auto___53620)){
var G__50789_53622 = type;
var G__50789_53623__$1 = (((G__50789_53622 instanceof cljs.core.Keyword))?G__50789_53622.fqn:null);
switch (G__50789_53623__$1) {
case "compute":
var c__42198__auto___53625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53621,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = ((function (__53621,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function (state_50802){
var state_val_50803 = (state_50802[(1)]);
if((state_val_50803 === (1))){
var state_50802__$1 = state_50802;
var statearr_50813_53626 = state_50802__$1;
(statearr_50813_53626[(2)] = null);

(statearr_50813_53626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (2))){
var state_50802__$1 = state_50802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50802__$1,(4),jobs);
} else {
if((state_val_50803 === (3))){
var inst_50800 = (state_50802[(2)]);
var state_50802__$1 = state_50802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50802__$1,inst_50800);
} else {
if((state_val_50803 === (4))){
var inst_50792 = (state_50802[(2)]);
var inst_50793 = process__$1(inst_50792);
var state_50802__$1 = state_50802;
if(cljs.core.truth_(inst_50793)){
var statearr_50814_53627 = state_50802__$1;
(statearr_50814_53627[(1)] = (5));

} else {
var statearr_50815_53628 = state_50802__$1;
(statearr_50815_53628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (5))){
var state_50802__$1 = state_50802;
var statearr_50816_53629 = state_50802__$1;
(statearr_50816_53629[(2)] = null);

(statearr_50816_53629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (6))){
var state_50802__$1 = state_50802;
var statearr_50817_53630 = state_50802__$1;
(statearr_50817_53630[(2)] = null);

(statearr_50817_53630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50803 === (7))){
var inst_50798 = (state_50802[(2)]);
var state_50802__$1 = state_50802;
var statearr_50818_53631 = state_50802__$1;
(statearr_50818_53631[(2)] = inst_50798);

(statearr_50818_53631[(1)] = (3));


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
});})(__53621,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
;
return ((function (__53621,switch__41950__auto__,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_50819 = [null,null,null,null,null,null,null];
(statearr_50819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_50819[(1)] = (1));

return statearr_50819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_50802){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50802);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e50820){var ex__41954__auto__ = e50820;
var statearr_50821_53632 = state_50802;
(statearr_50821_53632[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50802[(4)]))){
var statearr_50822_53634 = state_50802;
(statearr_50822_53634[(1)] = cljs.core.first((state_50802[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53635 = state_50802;
state_50802 = G__53635;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_50802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_50802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
;})(__53621,switch__41950__auto__,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
})();
var state__42200__auto__ = (function (){var statearr_50826 = f__42199__auto__();
(statearr_50826[(6)] = c__42198__auto___53625);

return statearr_50826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
});})(__53621,c__42198__auto___53625,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
);


break;
case "async":
var c__42198__auto___53637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__53621,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = ((function (__53621,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function (state_50839){
var state_val_50840 = (state_50839[(1)]);
if((state_val_50840 === (1))){
var state_50839__$1 = state_50839;
var statearr_50841_53638 = state_50839__$1;
(statearr_50841_53638[(2)] = null);

(statearr_50841_53638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50840 === (2))){
var state_50839__$1 = state_50839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50839__$1,(4),jobs);
} else {
if((state_val_50840 === (3))){
var inst_50837 = (state_50839[(2)]);
var state_50839__$1 = state_50839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50839__$1,inst_50837);
} else {
if((state_val_50840 === (4))){
var inst_50829 = (state_50839[(2)]);
var inst_50830 = async(inst_50829);
var state_50839__$1 = state_50839;
if(cljs.core.truth_(inst_50830)){
var statearr_50842_53639 = state_50839__$1;
(statearr_50842_53639[(1)] = (5));

} else {
var statearr_50843_53640 = state_50839__$1;
(statearr_50843_53640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50840 === (5))){
var state_50839__$1 = state_50839;
var statearr_50844_53641 = state_50839__$1;
(statearr_50844_53641[(2)] = null);

(statearr_50844_53641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50840 === (6))){
var state_50839__$1 = state_50839;
var statearr_50845_53642 = state_50839__$1;
(statearr_50845_53642[(2)] = null);

(statearr_50845_53642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50840 === (7))){
var inst_50835 = (state_50839[(2)]);
var state_50839__$1 = state_50839;
var statearr_50846_53644 = state_50839__$1;
(statearr_50846_53644[(2)] = inst_50835);

(statearr_50846_53644[(1)] = (3));


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
});})(__53621,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
;
return ((function (__53621,switch__41950__auto__,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0 = (function (){
var statearr_50847 = [null,null,null,null,null,null,null];
(statearr_50847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_50847[(1)] = (1));

return statearr_50847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_50839){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50839);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e50848){var ex__41954__auto__ = e50848;
var statearr_50849_53645 = state_50839;
(statearr_50849_53645[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50839[(4)]))){
var statearr_50850_53647 = state_50839;
(statearr_50850_53647[(1)] = cljs.core.first((state_50839[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53648 = state_50839;
state_50839 = G__53648;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_50839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_50839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
;})(__53621,switch__41950__auto__,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
})();
var state__42200__auto__ = (function (){var statearr_50851 = f__42199__auto__();
(statearr_50851[(6)] = c__42198__auto___53637);

return statearr_50851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
});})(__53621,c__42198__auto___53637,G__50789_53622,G__50789_53623__$1,n__5636__auto___53620,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50789_53623__$1)].join('')));

}

var G__53649 = (__53621 + (1));
__53621 = G__53649;
continue;
} else {
}
break;
}

var c__42198__auto___53652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_50873){
var state_val_50874 = (state_50873[(1)]);
if((state_val_50874 === (7))){
var inst_50869 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
var statearr_50875_53653 = state_50873__$1;
(statearr_50875_53653[(2)] = inst_50869);

(statearr_50875_53653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (1))){
var state_50873__$1 = state_50873;
var statearr_50876_53654 = state_50873__$1;
(statearr_50876_53654[(2)] = null);

(statearr_50876_53654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (4))){
var inst_50854 = (state_50873[(7)]);
var inst_50854__$1 = (state_50873[(2)]);
var inst_50855 = (inst_50854__$1 == null);
var state_50873__$1 = (function (){var statearr_50877 = state_50873;
(statearr_50877[(7)] = inst_50854__$1);

return statearr_50877;
})();
if(cljs.core.truth_(inst_50855)){
var statearr_50878_53655 = state_50873__$1;
(statearr_50878_53655[(1)] = (5));

} else {
var statearr_50879_53656 = state_50873__$1;
(statearr_50879_53656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (6))){
var inst_50854 = (state_50873[(7)]);
var inst_50859 = (state_50873[(8)]);
var inst_50859__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50861 = [inst_50854,inst_50859__$1];
var inst_50862 = (new cljs.core.PersistentVector(null,2,(5),inst_50860,inst_50861,null));
var state_50873__$1 = (function (){var statearr_50880 = state_50873;
(statearr_50880[(8)] = inst_50859__$1);

return statearr_50880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50873__$1,(8),jobs,inst_50862);
} else {
if((state_val_50874 === (3))){
var inst_50871 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50873__$1,inst_50871);
} else {
if((state_val_50874 === (2))){
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50873__$1,(4),from);
} else {
if((state_val_50874 === (9))){
var inst_50866 = (state_50873[(2)]);
var state_50873__$1 = (function (){var statearr_50891 = state_50873;
(statearr_50891[(9)] = inst_50866);

return statearr_50891;
})();
var statearr_50892_53661 = state_50873__$1;
(statearr_50892_53661[(2)] = null);

(statearr_50892_53661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (5))){
var inst_50857 = cljs.core.async.close_BANG_(jobs);
var state_50873__$1 = state_50873;
var statearr_50893_53662 = state_50873__$1;
(statearr_50893_53662[(2)] = inst_50857);

(statearr_50893_53662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (8))){
var inst_50859 = (state_50873[(8)]);
var inst_50864 = (state_50873[(2)]);
var state_50873__$1 = (function (){var statearr_50900 = state_50873;
(statearr_50900[(10)] = inst_50864);

return statearr_50900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50873__$1,(9),results,inst_50859);
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
var statearr_50902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_50902[(1)] = (1));

return statearr_50902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_50873){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50873);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e50908){var ex__41954__auto__ = e50908;
var statearr_50910_53663 = state_50873;
(statearr_50910_53663[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50873[(4)]))){
var statearr_50911_53664 = state_50873;
(statearr_50911_53664[(1)] = cljs.core.first((state_50873[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53665 = state_50873;
state_50873 = G__53665;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_50873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_50873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_50922 = f__42199__auto__();
(statearr_50922[(6)] = c__42198__auto___53652);

return statearr_50922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


var c__42198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_50963){
var state_val_50966 = (state_50963[(1)]);
if((state_val_50966 === (7))){
var inst_50959 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_50970_53668 = state_50963__$1;
(statearr_50970_53668[(2)] = inst_50959);

(statearr_50970_53668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (20))){
var state_50963__$1 = state_50963;
var statearr_50971_53671 = state_50963__$1;
(statearr_50971_53671[(2)] = null);

(statearr_50971_53671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (1))){
var state_50963__$1 = state_50963;
var statearr_50972_53672 = state_50963__$1;
(statearr_50972_53672[(2)] = null);

(statearr_50972_53672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (4))){
var inst_50925 = (state_50963[(7)]);
var inst_50925__$1 = (state_50963[(2)]);
var inst_50926 = (inst_50925__$1 == null);
var state_50963__$1 = (function (){var statearr_50976 = state_50963;
(statearr_50976[(7)] = inst_50925__$1);

return statearr_50976;
})();
if(cljs.core.truth_(inst_50926)){
var statearr_50977_53673 = state_50963__$1;
(statearr_50977_53673[(1)] = (5));

} else {
var statearr_50978_53674 = state_50963__$1;
(statearr_50978_53674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (15))){
var inst_50938 = (state_50963[(8)]);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50963__$1,(18),to,inst_50938);
} else {
if((state_val_50966 === (21))){
var inst_50954 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_50979_53676 = state_50963__$1;
(statearr_50979_53676[(2)] = inst_50954);

(statearr_50979_53676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (13))){
var inst_50956 = (state_50963[(2)]);
var state_50963__$1 = (function (){var statearr_50983 = state_50963;
(statearr_50983[(9)] = inst_50956);

return statearr_50983;
})();
var statearr_50984_53677 = state_50963__$1;
(statearr_50984_53677[(2)] = null);

(statearr_50984_53677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (6))){
var inst_50925 = (state_50963[(7)]);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50963__$1,(11),inst_50925);
} else {
if((state_val_50966 === (17))){
var inst_50949 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
if(cljs.core.truth_(inst_50949)){
var statearr_50985_53678 = state_50963__$1;
(statearr_50985_53678[(1)] = (19));

} else {
var statearr_50986_53679 = state_50963__$1;
(statearr_50986_53679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (3))){
var inst_50961 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50963__$1,inst_50961);
} else {
if((state_val_50966 === (12))){
var inst_50935 = (state_50963[(10)]);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50963__$1,(14),inst_50935);
} else {
if((state_val_50966 === (2))){
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50963__$1,(4),results);
} else {
if((state_val_50966 === (19))){
var state_50963__$1 = state_50963;
var statearr_50987_53680 = state_50963__$1;
(statearr_50987_53680[(2)] = null);

(statearr_50987_53680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (11))){
var inst_50935 = (state_50963[(2)]);
var state_50963__$1 = (function (){var statearr_50993 = state_50963;
(statearr_50993[(10)] = inst_50935);

return statearr_50993;
})();
var statearr_50997_53681 = state_50963__$1;
(statearr_50997_53681[(2)] = null);

(statearr_50997_53681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (9))){
var state_50963__$1 = state_50963;
var statearr_50998_53682 = state_50963__$1;
(statearr_50998_53682[(2)] = null);

(statearr_50998_53682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (5))){
var state_50963__$1 = state_50963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51000_53683 = state_50963__$1;
(statearr_51000_53683[(1)] = (8));

} else {
var statearr_51002_53684 = state_50963__$1;
(statearr_51002_53684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (14))){
var inst_50938 = (state_50963[(8)]);
var inst_50943 = (state_50963[(11)]);
var inst_50938__$1 = (state_50963[(2)]);
var inst_50942 = (inst_50938__$1 == null);
var inst_50943__$1 = cljs.core.not(inst_50942);
var state_50963__$1 = (function (){var statearr_51003 = state_50963;
(statearr_51003[(8)] = inst_50938__$1);

(statearr_51003[(11)] = inst_50943__$1);

return statearr_51003;
})();
if(inst_50943__$1){
var statearr_51004_53685 = state_50963__$1;
(statearr_51004_53685[(1)] = (15));

} else {
var statearr_51005_53686 = state_50963__$1;
(statearr_51005_53686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (16))){
var inst_50943 = (state_50963[(11)]);
var state_50963__$1 = state_50963;
var statearr_51006_53687 = state_50963__$1;
(statearr_51006_53687[(2)] = inst_50943);

(statearr_51006_53687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (10))){
var inst_50932 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_51007_53688 = state_50963__$1;
(statearr_51007_53688[(2)] = inst_50932);

(statearr_51007_53688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (18))){
var inst_50946 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_51008_53689 = state_50963__$1;
(statearr_51008_53689[(2)] = inst_50946);

(statearr_51008_53689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50966 === (8))){
var inst_50929 = cljs.core.async.close_BANG_(to);
var state_50963__$1 = state_50963;
var statearr_51009_53690 = state_50963__$1;
(statearr_51009_53690[(2)] = inst_50929);

(statearr_51009_53690[(1)] = (10));


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
var statearr_51010 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__);

(statearr_51010[(1)] = (1));

return statearr_51010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1 = (function (state_50963){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_50963);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51012){var ex__41954__auto__ = e51012;
var statearr_51013_53691 = state_50963;
(statearr_51013_53691[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_50963[(4)]))){
var statearr_51014_53692 = state_50963;
(statearr_51014_53692[(1)] = cljs.core.first((state_50963[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53693 = state_50963;
state_50963 = G__53693;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__ = function(state_50963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1.call(this,state_50963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51015 = f__42199__auto__();
(statearr_51015[(6)] = c__42198__auto__);

return statearr_51015;
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
var G__51017 = arguments.length;
switch (G__51017) {
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
var G__51032 = arguments.length;
switch (G__51032) {
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
var G__51051 = arguments.length;
switch (G__51051) {
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
var c__42198__auto___53706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51098){
var state_val_51102 = (state_51098[(1)]);
if((state_val_51102 === (7))){
var inst_51091 = (state_51098[(2)]);
var state_51098__$1 = state_51098;
var statearr_51103_53707 = state_51098__$1;
(statearr_51103_53707[(2)] = inst_51091);

(statearr_51103_53707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (1))){
var state_51098__$1 = state_51098;
var statearr_51104_53708 = state_51098__$1;
(statearr_51104_53708[(2)] = null);

(statearr_51104_53708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (4))){
var inst_51072 = (state_51098[(7)]);
var inst_51072__$1 = (state_51098[(2)]);
var inst_51073 = (inst_51072__$1 == null);
var state_51098__$1 = (function (){var statearr_51105 = state_51098;
(statearr_51105[(7)] = inst_51072__$1);

return statearr_51105;
})();
if(cljs.core.truth_(inst_51073)){
var statearr_51106_53709 = state_51098__$1;
(statearr_51106_53709[(1)] = (5));

} else {
var statearr_51107_53710 = state_51098__$1;
(statearr_51107_53710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (13))){
var state_51098__$1 = state_51098;
var statearr_51108_53711 = state_51098__$1;
(statearr_51108_53711[(2)] = null);

(statearr_51108_53711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (6))){
var inst_51072 = (state_51098[(7)]);
var inst_51078 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51072) : p.call(null,inst_51072));
var state_51098__$1 = state_51098;
if(cljs.core.truth_(inst_51078)){
var statearr_51114_53712 = state_51098__$1;
(statearr_51114_53712[(1)] = (9));

} else {
var statearr_51115_53713 = state_51098__$1;
(statearr_51115_53713[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (3))){
var inst_51093 = (state_51098[(2)]);
var state_51098__$1 = state_51098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51098__$1,inst_51093);
} else {
if((state_val_51102 === (12))){
var state_51098__$1 = state_51098;
var statearr_51118_53717 = state_51098__$1;
(statearr_51118_53717[(2)] = null);

(statearr_51118_53717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (2))){
var state_51098__$1 = state_51098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51098__$1,(4),ch);
} else {
if((state_val_51102 === (11))){
var inst_51072 = (state_51098[(7)]);
var inst_51082 = (state_51098[(2)]);
var state_51098__$1 = state_51098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51098__$1,(8),inst_51082,inst_51072);
} else {
if((state_val_51102 === (9))){
var state_51098__$1 = state_51098;
var statearr_51122_53718 = state_51098__$1;
(statearr_51122_53718[(2)] = tc);

(statearr_51122_53718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (5))){
var inst_51075 = cljs.core.async.close_BANG_(tc);
var inst_51076 = cljs.core.async.close_BANG_(fc);
var state_51098__$1 = (function (){var statearr_51123 = state_51098;
(statearr_51123[(8)] = inst_51075);

return statearr_51123;
})();
var statearr_51125_53720 = state_51098__$1;
(statearr_51125_53720[(2)] = inst_51076);

(statearr_51125_53720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (14))){
var inst_51089 = (state_51098[(2)]);
var state_51098__$1 = state_51098;
var statearr_51133_53726 = state_51098__$1;
(statearr_51133_53726[(2)] = inst_51089);

(statearr_51133_53726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (10))){
var state_51098__$1 = state_51098;
var statearr_51134_53727 = state_51098__$1;
(statearr_51134_53727[(2)] = fc);

(statearr_51134_53727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51102 === (8))){
var inst_51084 = (state_51098[(2)]);
var state_51098__$1 = state_51098;
if(cljs.core.truth_(inst_51084)){
var statearr_51141_53731 = state_51098__$1;
(statearr_51141_53731[(1)] = (12));

} else {
var statearr_51142_53732 = state_51098__$1;
(statearr_51142_53732[(1)] = (13));

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
var statearr_51143 = [null,null,null,null,null,null,null,null,null];
(statearr_51143[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_51143[(1)] = (1));

return statearr_51143;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_51098){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51098);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51144){var ex__41954__auto__ = e51144;
var statearr_51145_53733 = state_51098;
(statearr_51145_53733[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51098[(4)]))){
var statearr_51149_53734 = state_51098;
(statearr_51149_53734[(1)] = cljs.core.first((state_51098[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53738 = state_51098;
state_51098 = G__53738;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_51098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_51098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51150 = f__42199__auto__();
(statearr_51150[(6)] = c__42198__auto___53706);

return statearr_51150;
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
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51172){
var state_val_51173 = (state_51172[(1)]);
if((state_val_51173 === (7))){
var inst_51168 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51177_53739 = state_51172__$1;
(statearr_51177_53739[(2)] = inst_51168);

(statearr_51177_53739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (1))){
var inst_51151 = init;
var inst_51152 = inst_51151;
var state_51172__$1 = (function (){var statearr_51186 = state_51172;
(statearr_51186[(7)] = inst_51152);

return statearr_51186;
})();
var statearr_51187_53741 = state_51172__$1;
(statearr_51187_53741[(2)] = null);

(statearr_51187_53741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (4))){
var inst_51155 = (state_51172[(8)]);
var inst_51155__$1 = (state_51172[(2)]);
var inst_51156 = (inst_51155__$1 == null);
var state_51172__$1 = (function (){var statearr_51192 = state_51172;
(statearr_51192[(8)] = inst_51155__$1);

return statearr_51192;
})();
if(cljs.core.truth_(inst_51156)){
var statearr_51193_53746 = state_51172__$1;
(statearr_51193_53746[(1)] = (5));

} else {
var statearr_51194_53747 = state_51172__$1;
(statearr_51194_53747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (6))){
var inst_51152 = (state_51172[(7)]);
var inst_51159 = (state_51172[(9)]);
var inst_51155 = (state_51172[(8)]);
var inst_51159__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51152,inst_51155) : f.call(null,inst_51152,inst_51155));
var inst_51160 = cljs.core.reduced_QMARK_(inst_51159__$1);
var state_51172__$1 = (function (){var statearr_51198 = state_51172;
(statearr_51198[(9)] = inst_51159__$1);

return statearr_51198;
})();
if(inst_51160){
var statearr_51203_53751 = state_51172__$1;
(statearr_51203_53751[(1)] = (8));

} else {
var statearr_51207_53752 = state_51172__$1;
(statearr_51207_53752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (3))){
var inst_51170 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51172__$1,inst_51170);
} else {
if((state_val_51173 === (2))){
var state_51172__$1 = state_51172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51172__$1,(4),ch);
} else {
if((state_val_51173 === (9))){
var inst_51159 = (state_51172[(9)]);
var inst_51152 = inst_51159;
var state_51172__$1 = (function (){var statearr_51211 = state_51172;
(statearr_51211[(7)] = inst_51152);

return statearr_51211;
})();
var statearr_51212_53753 = state_51172__$1;
(statearr_51212_53753[(2)] = null);

(statearr_51212_53753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (5))){
var inst_51152 = (state_51172[(7)]);
var state_51172__$1 = state_51172;
var statearr_51213_53757 = state_51172__$1;
(statearr_51213_53757[(2)] = inst_51152);

(statearr_51213_53757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (10))){
var inst_51166 = (state_51172[(2)]);
var state_51172__$1 = state_51172;
var statearr_51214_53758 = state_51172__$1;
(statearr_51214_53758[(2)] = inst_51166);

(statearr_51214_53758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51173 === (8))){
var inst_51159 = (state_51172[(9)]);
var inst_51162 = cljs.core.deref(inst_51159);
var state_51172__$1 = state_51172;
var statearr_51215_53759 = state_51172__$1;
(statearr_51215_53759[(2)] = inst_51162);

(statearr_51215_53759[(1)] = (10));


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
var statearr_51218 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51218[(0)] = cljs$core$async$reduce_$_state_machine__41951__auto__);

(statearr_51218[(1)] = (1));

return statearr_51218;
});
var cljs$core$async$reduce_$_state_machine__41951__auto____1 = (function (state_51172){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51172);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51219){var ex__41954__auto__ = e51219;
var statearr_51220_53763 = state_51172;
(statearr_51220_53763[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51172[(4)]))){
var statearr_51221_53764 = state_51172;
(statearr_51221_53764[(1)] = cljs.core.first((state_51172[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53765 = state_51172;
state_51172 = G__53765;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41951__auto__ = function(state_51172){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41951__auto____1.call(this,state_51172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41951__auto____0;
cljs$core$async$reduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41951__auto____1;
return cljs$core$async$reduce_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51223 = f__42199__auto__();
(statearr_51223[(6)] = c__42198__auto__);

return statearr_51223;
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
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51230){
var state_val_51231 = (state_51230[(1)]);
if((state_val_51231 === (1))){
var inst_51224 = cljs.core.async.reduce(f__$1,init,ch);
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51230__$1,(2),inst_51224);
} else {
if((state_val_51231 === (2))){
var inst_51226 = (state_51230[(2)]);
var inst_51227 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51226) : f__$1.call(null,inst_51226));
var state_51230__$1 = state_51230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51230__$1,inst_51227);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41951__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41951__auto____0 = (function (){
var statearr_51237 = [null,null,null,null,null,null,null];
(statearr_51237[(0)] = cljs$core$async$transduce_$_state_machine__41951__auto__);

(statearr_51237[(1)] = (1));

return statearr_51237;
});
var cljs$core$async$transduce_$_state_machine__41951__auto____1 = (function (state_51230){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51230);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51238){var ex__41954__auto__ = e51238;
var statearr_51239_53773 = state_51230;
(statearr_51239_53773[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51230[(4)]))){
var statearr_51240_53774 = state_51230;
(statearr_51240_53774[(1)] = cljs.core.first((state_51230[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53776 = state_51230;
state_51230 = G__53776;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41951__auto__ = function(state_51230){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41951__auto____1.call(this,state_51230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41951__auto____0;
cljs$core$async$transduce_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41951__auto____1;
return cljs$core$async$transduce_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51241 = f__42199__auto__();
(statearr_51241[(6)] = c__42198__auto__);

return statearr_51241;
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
var G__51243 = arguments.length;
switch (G__51243) {
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
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51271){
var state_val_51272 = (state_51271[(1)]);
if((state_val_51272 === (7))){
var inst_51253 = (state_51271[(2)]);
var state_51271__$1 = state_51271;
var statearr_51273_53802 = state_51271__$1;
(statearr_51273_53802[(2)] = inst_51253);

(statearr_51273_53802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (1))){
var inst_51247 = cljs.core.seq(coll);
var inst_51248 = inst_51247;
var state_51271__$1 = (function (){var statearr_51274 = state_51271;
(statearr_51274[(7)] = inst_51248);

return statearr_51274;
})();
var statearr_51275_53804 = state_51271__$1;
(statearr_51275_53804[(2)] = null);

(statearr_51275_53804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (4))){
var inst_51248 = (state_51271[(7)]);
var inst_51251 = cljs.core.first(inst_51248);
var state_51271__$1 = state_51271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51271__$1,(7),ch,inst_51251);
} else {
if((state_val_51272 === (13))){
var inst_51265 = (state_51271[(2)]);
var state_51271__$1 = state_51271;
var statearr_51276_53805 = state_51271__$1;
(statearr_51276_53805[(2)] = inst_51265);

(statearr_51276_53805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (6))){
var inst_51256 = (state_51271[(2)]);
var state_51271__$1 = state_51271;
if(cljs.core.truth_(inst_51256)){
var statearr_51277_53806 = state_51271__$1;
(statearr_51277_53806[(1)] = (8));

} else {
var statearr_51278_53807 = state_51271__$1;
(statearr_51278_53807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (3))){
var inst_51269 = (state_51271[(2)]);
var state_51271__$1 = state_51271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51271__$1,inst_51269);
} else {
if((state_val_51272 === (12))){
var state_51271__$1 = state_51271;
var statearr_51279_53809 = state_51271__$1;
(statearr_51279_53809[(2)] = null);

(statearr_51279_53809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (2))){
var inst_51248 = (state_51271[(7)]);
var state_51271__$1 = state_51271;
if(cljs.core.truth_(inst_51248)){
var statearr_51280_53810 = state_51271__$1;
(statearr_51280_53810[(1)] = (4));

} else {
var statearr_51281_53811 = state_51271__$1;
(statearr_51281_53811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (11))){
var inst_51262 = cljs.core.async.close_BANG_(ch);
var state_51271__$1 = state_51271;
var statearr_51286_53812 = state_51271__$1;
(statearr_51286_53812[(2)] = inst_51262);

(statearr_51286_53812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (9))){
var state_51271__$1 = state_51271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51287_53813 = state_51271__$1;
(statearr_51287_53813[(1)] = (11));

} else {
var statearr_51288_53814 = state_51271__$1;
(statearr_51288_53814[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (5))){
var inst_51248 = (state_51271[(7)]);
var state_51271__$1 = state_51271;
var statearr_51289_53815 = state_51271__$1;
(statearr_51289_53815[(2)] = inst_51248);

(statearr_51289_53815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (10))){
var inst_51267 = (state_51271[(2)]);
var state_51271__$1 = state_51271;
var statearr_51290_53816 = state_51271__$1;
(statearr_51290_53816[(2)] = inst_51267);

(statearr_51290_53816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51272 === (8))){
var inst_51248 = (state_51271[(7)]);
var inst_51258 = cljs.core.next(inst_51248);
var inst_51248__$1 = inst_51258;
var state_51271__$1 = (function (){var statearr_51291 = state_51271;
(statearr_51291[(7)] = inst_51248__$1);

return statearr_51291;
})();
var statearr_51292_53817 = state_51271__$1;
(statearr_51292_53817[(2)] = null);

(statearr_51292_53817[(1)] = (2));


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
var statearr_51306 = [null,null,null,null,null,null,null,null];
(statearr_51306[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_51306[(1)] = (1));

return statearr_51306;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_51271){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51271);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51316){var ex__41954__auto__ = e51316;
var statearr_51331_53818 = state_51271;
(statearr_51331_53818[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51271[(4)]))){
var statearr_51332_53819 = state_51271;
(statearr_51332_53819[(1)] = cljs.core.first((state_51271[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53820 = state_51271;
state_51271 = G__53820;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_51271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_51271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51333 = f__42199__auto__();
(statearr_51333[(6)] = c__42198__auto__);

return statearr_51333;
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
var G__51370 = arguments.length;
switch (G__51370) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_53829 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_53829(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53830 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_53830(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53833 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_53833(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53837 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_53837(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51504 = (function (ch,cs,meta51505){
this.ch = ch;
this.cs = cs;
this.meta51505 = meta51505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51506,meta51505__$1){
var self__ = this;
var _51506__$1 = this;
return (new cljs.core.async.t_cljs$core$async51504(self__.ch,self__.cs,meta51505__$1));
}));

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51506){
var self__ = this;
var _51506__$1 = this;
return self__.meta51505;
}));

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51505","meta51505",181223057,null)], null);
}));

(cljs.core.async.t_cljs$core$async51504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51504");

(cljs.core.async.t_cljs$core$async51504.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51504.
 */
cljs.core.async.__GT_t_cljs$core$async51504 = (function cljs$core$async$mult_$___GT_t_cljs$core$async51504(ch__$1,cs__$1,meta51505){
return (new cljs.core.async.t_cljs$core$async51504(ch__$1,cs__$1,meta51505));
});

}

return (new cljs.core.async.t_cljs$core$async51504(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42198__auto___53840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51642){
var state_val_51643 = (state_51642[(1)]);
if((state_val_51643 === (7))){
var inst_51638 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51644_53841 = state_51642__$1;
(statearr_51644_53841[(2)] = inst_51638);

(statearr_51644_53841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (20))){
var inst_51542 = (state_51642[(7)]);
var inst_51554 = cljs.core.first(inst_51542);
var inst_51555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51554,(0),null);
var inst_51556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51554,(1),null);
var state_51642__$1 = (function (){var statearr_51645 = state_51642;
(statearr_51645[(8)] = inst_51555);

return statearr_51645;
})();
if(cljs.core.truth_(inst_51556)){
var statearr_51646_53842 = state_51642__$1;
(statearr_51646_53842[(1)] = (22));

} else {
var statearr_51647_53843 = state_51642__$1;
(statearr_51647_53843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (27))){
var inst_51585 = (state_51642[(9)]);
var inst_51511 = (state_51642[(10)]);
var inst_51592 = (state_51642[(11)]);
var inst_51587 = (state_51642[(12)]);
var inst_51592__$1 = cljs.core._nth(inst_51585,inst_51587);
var inst_51593 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51592__$1,inst_51511,done);
var state_51642__$1 = (function (){var statearr_51648 = state_51642;
(statearr_51648[(11)] = inst_51592__$1);

return statearr_51648;
})();
if(cljs.core.truth_(inst_51593)){
var statearr_51649_53847 = state_51642__$1;
(statearr_51649_53847[(1)] = (30));

} else {
var statearr_51650_53848 = state_51642__$1;
(statearr_51650_53848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (1))){
var state_51642__$1 = state_51642;
var statearr_51651_53852 = state_51642__$1;
(statearr_51651_53852[(2)] = null);

(statearr_51651_53852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (24))){
var inst_51542 = (state_51642[(7)]);
var inst_51561 = (state_51642[(2)]);
var inst_51562 = cljs.core.next(inst_51542);
var inst_51520 = inst_51562;
var inst_51521 = null;
var inst_51522 = (0);
var inst_51523 = (0);
var state_51642__$1 = (function (){var statearr_51652 = state_51642;
(statearr_51652[(13)] = inst_51522);

(statearr_51652[(14)] = inst_51521);

(statearr_51652[(15)] = inst_51523);

(statearr_51652[(16)] = inst_51520);

(statearr_51652[(17)] = inst_51561);

return statearr_51652;
})();
var statearr_51653_53854 = state_51642__$1;
(statearr_51653_53854[(2)] = null);

(statearr_51653_53854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (39))){
var state_51642__$1 = state_51642;
var statearr_51657_53859 = state_51642__$1;
(statearr_51657_53859[(2)] = null);

(statearr_51657_53859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (4))){
var inst_51511 = (state_51642[(10)]);
var inst_51511__$1 = (state_51642[(2)]);
var inst_51512 = (inst_51511__$1 == null);
var state_51642__$1 = (function (){var statearr_51658 = state_51642;
(statearr_51658[(10)] = inst_51511__$1);

return statearr_51658;
})();
if(cljs.core.truth_(inst_51512)){
var statearr_51659_53864 = state_51642__$1;
(statearr_51659_53864[(1)] = (5));

} else {
var statearr_51660_53865 = state_51642__$1;
(statearr_51660_53865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (15))){
var inst_51522 = (state_51642[(13)]);
var inst_51521 = (state_51642[(14)]);
var inst_51523 = (state_51642[(15)]);
var inst_51520 = (state_51642[(16)]);
var inst_51538 = (state_51642[(2)]);
var inst_51539 = (inst_51523 + (1));
var tmp51654 = inst_51522;
var tmp51655 = inst_51521;
var tmp51656 = inst_51520;
var inst_51520__$1 = tmp51656;
var inst_51521__$1 = tmp51655;
var inst_51522__$1 = tmp51654;
var inst_51523__$1 = inst_51539;
var state_51642__$1 = (function (){var statearr_51661 = state_51642;
(statearr_51661[(13)] = inst_51522__$1);

(statearr_51661[(14)] = inst_51521__$1);

(statearr_51661[(18)] = inst_51538);

(statearr_51661[(15)] = inst_51523__$1);

(statearr_51661[(16)] = inst_51520__$1);

return statearr_51661;
})();
var statearr_51662_53882 = state_51642__$1;
(statearr_51662_53882[(2)] = null);

(statearr_51662_53882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (21))){
var inst_51565 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51666_53883 = state_51642__$1;
(statearr_51666_53883[(2)] = inst_51565);

(statearr_51666_53883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (31))){
var inst_51592 = (state_51642[(11)]);
var inst_51596 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51592);
var state_51642__$1 = state_51642;
var statearr_51667_53885 = state_51642__$1;
(statearr_51667_53885[(2)] = inst_51596);

(statearr_51667_53885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (32))){
var inst_51585 = (state_51642[(9)]);
var inst_51586 = (state_51642[(19)]);
var inst_51587 = (state_51642[(12)]);
var inst_51584 = (state_51642[(20)]);
var inst_51598 = (state_51642[(2)]);
var inst_51599 = (inst_51587 + (1));
var tmp51663 = inst_51585;
var tmp51664 = inst_51586;
var tmp51665 = inst_51584;
var inst_51584__$1 = tmp51665;
var inst_51585__$1 = tmp51663;
var inst_51586__$1 = tmp51664;
var inst_51587__$1 = inst_51599;
var state_51642__$1 = (function (){var statearr_51668 = state_51642;
(statearr_51668[(21)] = inst_51598);

(statearr_51668[(9)] = inst_51585__$1);

(statearr_51668[(19)] = inst_51586__$1);

(statearr_51668[(12)] = inst_51587__$1);

(statearr_51668[(20)] = inst_51584__$1);

return statearr_51668;
})();
var statearr_51669_53886 = state_51642__$1;
(statearr_51669_53886[(2)] = null);

(statearr_51669_53886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (40))){
var inst_51611 = (state_51642[(22)]);
var inst_51615 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51611);
var state_51642__$1 = state_51642;
var statearr_51671_53888 = state_51642__$1;
(statearr_51671_53888[(2)] = inst_51615);

(statearr_51671_53888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (33))){
var inst_51602 = (state_51642[(23)]);
var inst_51604 = cljs.core.chunked_seq_QMARK_(inst_51602);
var state_51642__$1 = state_51642;
if(inst_51604){
var statearr_51679_53889 = state_51642__$1;
(statearr_51679_53889[(1)] = (36));

} else {
var statearr_51680_53890 = state_51642__$1;
(statearr_51680_53890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (13))){
var inst_51532 = (state_51642[(24)]);
var inst_51535 = cljs.core.async.close_BANG_(inst_51532);
var state_51642__$1 = state_51642;
var statearr_51681_53891 = state_51642__$1;
(statearr_51681_53891[(2)] = inst_51535);

(statearr_51681_53891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (22))){
var inst_51555 = (state_51642[(8)]);
var inst_51558 = cljs.core.async.close_BANG_(inst_51555);
var state_51642__$1 = state_51642;
var statearr_51682_53893 = state_51642__$1;
(statearr_51682_53893[(2)] = inst_51558);

(statearr_51682_53893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (36))){
var inst_51602 = (state_51642[(23)]);
var inst_51606 = cljs.core.chunk_first(inst_51602);
var inst_51607 = cljs.core.chunk_rest(inst_51602);
var inst_51608 = cljs.core.count(inst_51606);
var inst_51584 = inst_51607;
var inst_51585 = inst_51606;
var inst_51586 = inst_51608;
var inst_51587 = (0);
var state_51642__$1 = (function (){var statearr_51689 = state_51642;
(statearr_51689[(9)] = inst_51585);

(statearr_51689[(19)] = inst_51586);

(statearr_51689[(12)] = inst_51587);

(statearr_51689[(20)] = inst_51584);

return statearr_51689;
})();
var statearr_51690_53897 = state_51642__$1;
(statearr_51690_53897[(2)] = null);

(statearr_51690_53897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (41))){
var inst_51602 = (state_51642[(23)]);
var inst_51617 = (state_51642[(2)]);
var inst_51618 = cljs.core.next(inst_51602);
var inst_51584 = inst_51618;
var inst_51585 = null;
var inst_51586 = (0);
var inst_51587 = (0);
var state_51642__$1 = (function (){var statearr_51691 = state_51642;
(statearr_51691[(9)] = inst_51585);

(statearr_51691[(19)] = inst_51586);

(statearr_51691[(12)] = inst_51587);

(statearr_51691[(25)] = inst_51617);

(statearr_51691[(20)] = inst_51584);

return statearr_51691;
})();
var statearr_51692_53898 = state_51642__$1;
(statearr_51692_53898[(2)] = null);

(statearr_51692_53898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (43))){
var state_51642__$1 = state_51642;
var statearr_51694_53899 = state_51642__$1;
(statearr_51694_53899[(2)] = null);

(statearr_51694_53899[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (29))){
var inst_51626 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51695_53902 = state_51642__$1;
(statearr_51695_53902[(2)] = inst_51626);

(statearr_51695_53902[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (44))){
var inst_51635 = (state_51642[(2)]);
var state_51642__$1 = (function (){var statearr_51696 = state_51642;
(statearr_51696[(26)] = inst_51635);

return statearr_51696;
})();
var statearr_51697_53903 = state_51642__$1;
(statearr_51697_53903[(2)] = null);

(statearr_51697_53903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (6))){
var inst_51576 = (state_51642[(27)]);
var inst_51575 = cljs.core.deref(cs);
var inst_51576__$1 = cljs.core.keys(inst_51575);
var inst_51577 = cljs.core.count(inst_51576__$1);
var inst_51578 = cljs.core.reset_BANG_(dctr,inst_51577);
var inst_51583 = cljs.core.seq(inst_51576__$1);
var inst_51584 = inst_51583;
var inst_51585 = null;
var inst_51586 = (0);
var inst_51587 = (0);
var state_51642__$1 = (function (){var statearr_51698 = state_51642;
(statearr_51698[(9)] = inst_51585);

(statearr_51698[(28)] = inst_51578);

(statearr_51698[(27)] = inst_51576__$1);

(statearr_51698[(19)] = inst_51586);

(statearr_51698[(12)] = inst_51587);

(statearr_51698[(20)] = inst_51584);

return statearr_51698;
})();
var statearr_51699_53904 = state_51642__$1;
(statearr_51699_53904[(2)] = null);

(statearr_51699_53904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (28))){
var inst_51602 = (state_51642[(23)]);
var inst_51584 = (state_51642[(20)]);
var inst_51602__$1 = cljs.core.seq(inst_51584);
var state_51642__$1 = (function (){var statearr_51700 = state_51642;
(statearr_51700[(23)] = inst_51602__$1);

return statearr_51700;
})();
if(inst_51602__$1){
var statearr_51701_53905 = state_51642__$1;
(statearr_51701_53905[(1)] = (33));

} else {
var statearr_51702_53906 = state_51642__$1;
(statearr_51702_53906[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (25))){
var inst_51586 = (state_51642[(19)]);
var inst_51587 = (state_51642[(12)]);
var inst_51589 = (inst_51587 < inst_51586);
var inst_51590 = inst_51589;
var state_51642__$1 = state_51642;
if(cljs.core.truth_(inst_51590)){
var statearr_51703_53910 = state_51642__$1;
(statearr_51703_53910[(1)] = (27));

} else {
var statearr_51704_53911 = state_51642__$1;
(statearr_51704_53911[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (34))){
var state_51642__$1 = state_51642;
var statearr_51705_53912 = state_51642__$1;
(statearr_51705_53912[(2)] = null);

(statearr_51705_53912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (17))){
var state_51642__$1 = state_51642;
var statearr_51706_53913 = state_51642__$1;
(statearr_51706_53913[(2)] = null);

(statearr_51706_53913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (3))){
var inst_51640 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51642__$1,inst_51640);
} else {
if((state_val_51643 === (12))){
var inst_51570 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51707_53914 = state_51642__$1;
(statearr_51707_53914[(2)] = inst_51570);

(statearr_51707_53914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (2))){
var state_51642__$1 = state_51642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51642__$1,(4),ch);
} else {
if((state_val_51643 === (23))){
var state_51642__$1 = state_51642;
var statearr_51709_53915 = state_51642__$1;
(statearr_51709_53915[(2)] = null);

(statearr_51709_53915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (35))){
var inst_51624 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51711_53916 = state_51642__$1;
(statearr_51711_53916[(2)] = inst_51624);

(statearr_51711_53916[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (19))){
var inst_51542 = (state_51642[(7)]);
var inst_51546 = cljs.core.chunk_first(inst_51542);
var inst_51547 = cljs.core.chunk_rest(inst_51542);
var inst_51548 = cljs.core.count(inst_51546);
var inst_51520 = inst_51547;
var inst_51521 = inst_51546;
var inst_51522 = inst_51548;
var inst_51523 = (0);
var state_51642__$1 = (function (){var statearr_51712 = state_51642;
(statearr_51712[(13)] = inst_51522);

(statearr_51712[(14)] = inst_51521);

(statearr_51712[(15)] = inst_51523);

(statearr_51712[(16)] = inst_51520);

return statearr_51712;
})();
var statearr_51713_53917 = state_51642__$1;
(statearr_51713_53917[(2)] = null);

(statearr_51713_53917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (11))){
var inst_51520 = (state_51642[(16)]);
var inst_51542 = (state_51642[(7)]);
var inst_51542__$1 = cljs.core.seq(inst_51520);
var state_51642__$1 = (function (){var statearr_51714 = state_51642;
(statearr_51714[(7)] = inst_51542__$1);

return statearr_51714;
})();
if(inst_51542__$1){
var statearr_51715_53918 = state_51642__$1;
(statearr_51715_53918[(1)] = (16));

} else {
var statearr_51716_53919 = state_51642__$1;
(statearr_51716_53919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (9))){
var inst_51572 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51717_53924 = state_51642__$1;
(statearr_51717_53924[(2)] = inst_51572);

(statearr_51717_53924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (5))){
var inst_51518 = cljs.core.deref(cs);
var inst_51519 = cljs.core.seq(inst_51518);
var inst_51520 = inst_51519;
var inst_51521 = null;
var inst_51522 = (0);
var inst_51523 = (0);
var state_51642__$1 = (function (){var statearr_51718 = state_51642;
(statearr_51718[(13)] = inst_51522);

(statearr_51718[(14)] = inst_51521);

(statearr_51718[(15)] = inst_51523);

(statearr_51718[(16)] = inst_51520);

return statearr_51718;
})();
var statearr_51719_53925 = state_51642__$1;
(statearr_51719_53925[(2)] = null);

(statearr_51719_53925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (14))){
var state_51642__$1 = state_51642;
var statearr_51720_53930 = state_51642__$1;
(statearr_51720_53930[(2)] = null);

(statearr_51720_53930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (45))){
var inst_51632 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51729_53937 = state_51642__$1;
(statearr_51729_53937[(2)] = inst_51632);

(statearr_51729_53937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (26))){
var inst_51576 = (state_51642[(27)]);
var inst_51628 = (state_51642[(2)]);
var inst_51629 = cljs.core.seq(inst_51576);
var state_51642__$1 = (function (){var statearr_51734 = state_51642;
(statearr_51734[(29)] = inst_51628);

return statearr_51734;
})();
if(inst_51629){
var statearr_51735_53939 = state_51642__$1;
(statearr_51735_53939[(1)] = (42));

} else {
var statearr_51736_53940 = state_51642__$1;
(statearr_51736_53940[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (16))){
var inst_51542 = (state_51642[(7)]);
var inst_51544 = cljs.core.chunked_seq_QMARK_(inst_51542);
var state_51642__$1 = state_51642;
if(inst_51544){
var statearr_51737_53941 = state_51642__$1;
(statearr_51737_53941[(1)] = (19));

} else {
var statearr_51738_53949 = state_51642__$1;
(statearr_51738_53949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (38))){
var inst_51621 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51739_53950 = state_51642__$1;
(statearr_51739_53950[(2)] = inst_51621);

(statearr_51739_53950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (30))){
var state_51642__$1 = state_51642;
var statearr_51740_53951 = state_51642__$1;
(statearr_51740_53951[(2)] = null);

(statearr_51740_53951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (10))){
var inst_51521 = (state_51642[(14)]);
var inst_51523 = (state_51642[(15)]);
var inst_51531 = cljs.core._nth(inst_51521,inst_51523);
var inst_51532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51531,(0),null);
var inst_51533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51531,(1),null);
var state_51642__$1 = (function (){var statearr_51741 = state_51642;
(statearr_51741[(24)] = inst_51532);

return statearr_51741;
})();
if(cljs.core.truth_(inst_51533)){
var statearr_51742_53953 = state_51642__$1;
(statearr_51742_53953[(1)] = (13));

} else {
var statearr_51743_53954 = state_51642__$1;
(statearr_51743_53954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (18))){
var inst_51568 = (state_51642[(2)]);
var state_51642__$1 = state_51642;
var statearr_51744_53955 = state_51642__$1;
(statearr_51744_53955[(2)] = inst_51568);

(statearr_51744_53955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (42))){
var state_51642__$1 = state_51642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51642__$1,(45),dchan);
} else {
if((state_val_51643 === (37))){
var inst_51602 = (state_51642[(23)]);
var inst_51511 = (state_51642[(10)]);
var inst_51611 = (state_51642[(22)]);
var inst_51611__$1 = cljs.core.first(inst_51602);
var inst_51612 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51611__$1,inst_51511,done);
var state_51642__$1 = (function (){var statearr_51745 = state_51642;
(statearr_51745[(22)] = inst_51611__$1);

return statearr_51745;
})();
if(cljs.core.truth_(inst_51612)){
var statearr_51746_53962 = state_51642__$1;
(statearr_51746_53962[(1)] = (39));

} else {
var statearr_51747_53963 = state_51642__$1;
(statearr_51747_53963[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51643 === (8))){
var inst_51522 = (state_51642[(13)]);
var inst_51523 = (state_51642[(15)]);
var inst_51525 = (inst_51523 < inst_51522);
var inst_51526 = inst_51525;
var state_51642__$1 = state_51642;
if(cljs.core.truth_(inst_51526)){
var statearr_51748_53965 = state_51642__$1;
(statearr_51748_53965[(1)] = (10));

} else {
var statearr_51749_53966 = state_51642__$1;
(statearr_51749_53966[(1)] = (11));

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
var statearr_51750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51750[(0)] = cljs$core$async$mult_$_state_machine__41951__auto__);

(statearr_51750[(1)] = (1));

return statearr_51750;
});
var cljs$core$async$mult_$_state_machine__41951__auto____1 = (function (state_51642){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51642);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e51751){var ex__41954__auto__ = e51751;
var statearr_51752_53967 = state_51642;
(statearr_51752_53967[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51642[(4)]))){
var statearr_51753_53968 = state_51642;
(statearr_51753_53968[(1)] = cljs.core.first((state_51642[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53969 = state_51642;
state_51642 = G__53969;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41951__auto__ = function(state_51642){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41951__auto____1.call(this,state_51642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41951__auto____0;
cljs$core$async$mult_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41951__auto____1;
return cljs$core$async$mult_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_51756 = f__42199__auto__();
(statearr_51756[(6)] = c__42198__auto___53840);

return statearr_51756;
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
var G__51759 = arguments.length;
switch (G__51759) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_53981 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_53981(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53987 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_53987(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53992 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53992(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53998 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_53998(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53999 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53999(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54000 = arguments.length;
var i__5770__auto___54001 = (0);
while(true){
if((i__5770__auto___54001 < len__5769__auto___54000)){
args__5775__auto__.push((arguments[i__5770__auto___54001]));

var G__54002 = (i__5770__auto___54001 + (1));
i__5770__auto___54001 = G__54002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51836){
var map__51837 = p__51836;
var map__51837__$1 = cljs.core.__destructure_map(map__51837);
var opts = map__51837__$1;
var statearr_51838_54004 = state;
(statearr_51838_54004[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51839_54005 = state;
(statearr_51839_54005[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_51840_54006 = state;
(statearr_51840_54006[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51829){
var G__51830 = cljs.core.first(seq51829);
var seq51829__$1 = cljs.core.next(seq51829);
var G__51831 = cljs.core.first(seq51829__$1);
var seq51829__$2 = cljs.core.next(seq51829__$1);
var G__51832 = cljs.core.first(seq51829__$2);
var seq51829__$3 = cljs.core.next(seq51829__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51830,G__51831,G__51832,seq51829__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51850 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51851){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51851 = meta51851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51852,meta51851__$1){
var self__ = this;
var _51852__$1 = this;
return (new cljs.core.async.t_cljs$core$async51850(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51851__$1));
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51852){
var self__ = this;
var _51852__$1 = this;
return self__.meta51851;
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51851","meta51851",-204561896,null)], null);
}));

(cljs.core.async.t_cljs$core$async51850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51850");

(cljs.core.async.t_cljs$core$async51850.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51850.
 */
cljs.core.async.__GT_t_cljs$core$async51850 = (function cljs$core$async$mix_$___GT_t_cljs$core$async51850(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51851){
return (new cljs.core.async.t_cljs$core$async51850(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51851));
});

}

return (new cljs.core.async.t_cljs$core$async51850(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42198__auto___54010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_51993){
var state_val_51994 = (state_51993[(1)]);
if((state_val_51994 === (7))){
var inst_51912 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
if(cljs.core.truth_(inst_51912)){
var statearr_52001_54011 = state_51993__$1;
(statearr_52001_54011[(1)] = (8));

} else {
var statearr_52002_54013 = state_51993__$1;
(statearr_52002_54013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (20))){
var inst_51886 = (state_51993[(7)]);
var state_51993__$1 = state_51993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51993__$1,(23),out,inst_51886);
} else {
if((state_val_51994 === (1))){
var inst_51865 = calc_state();
var inst_51866 = cljs.core.__destructure_map(inst_51865);
var inst_51867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51866,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51866,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51866,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51870 = inst_51865;
var state_51993__$1 = (function (){var statearr_52003 = state_51993;
(statearr_52003[(8)] = inst_51868);

(statearr_52003[(9)] = inst_51867);

(statearr_52003[(10)] = inst_51869);

(statearr_52003[(11)] = inst_51870);

return statearr_52003;
})();
var statearr_52004_54016 = state_51993__$1;
(statearr_52004_54016[(2)] = null);

(statearr_52004_54016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (24))){
var inst_51873 = (state_51993[(12)]);
var inst_51870 = inst_51873;
var state_51993__$1 = (function (){var statearr_52005 = state_51993;
(statearr_52005[(11)] = inst_51870);

return statearr_52005;
})();
var statearr_52006_54018 = state_51993__$1;
(statearr_52006_54018[(2)] = null);

(statearr_52006_54018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (4))){
var inst_51886 = (state_51993[(7)]);
var inst_51900 = (state_51993[(13)]);
var inst_51885 = (state_51993[(2)]);
var inst_51886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51885,(0),null);
var inst_51896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51885,(1),null);
var inst_51900__$1 = (inst_51886__$1 == null);
var state_51993__$1 = (function (){var statearr_52007 = state_51993;
(statearr_52007[(14)] = inst_51896);

(statearr_52007[(7)] = inst_51886__$1);

(statearr_52007[(13)] = inst_51900__$1);

return statearr_52007;
})();
if(cljs.core.truth_(inst_51900__$1)){
var statearr_52010_54022 = state_51993__$1;
(statearr_52010_54022[(1)] = (5));

} else {
var statearr_52011_54025 = state_51993__$1;
(statearr_52011_54025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (15))){
var inst_51875 = (state_51993[(15)]);
var inst_51966 = (state_51993[(16)]);
var inst_51966__$1 = cljs.core.empty_QMARK_(inst_51875);
var state_51993__$1 = (function (){var statearr_52012 = state_51993;
(statearr_52012[(16)] = inst_51966__$1);

return statearr_52012;
})();
if(inst_51966__$1){
var statearr_52017_54027 = state_51993__$1;
(statearr_52017_54027[(1)] = (17));

} else {
var statearr_52018_54028 = state_51993__$1;
(statearr_52018_54028[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (21))){
var inst_51873 = (state_51993[(12)]);
var inst_51870 = inst_51873;
var state_51993__$1 = (function (){var statearr_52020 = state_51993;
(statearr_52020[(11)] = inst_51870);

return statearr_52020;
})();
var statearr_52021_54030 = state_51993__$1;
(statearr_52021_54030[(2)] = null);

(statearr_52021_54030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (13))){
var inst_51919 = (state_51993[(2)]);
var inst_51920 = calc_state();
var inst_51870 = inst_51920;
var state_51993__$1 = (function (){var statearr_52022 = state_51993;
(statearr_52022[(17)] = inst_51919);

(statearr_52022[(11)] = inst_51870);

return statearr_52022;
})();
var statearr_52023_54033 = state_51993__$1;
(statearr_52023_54033[(2)] = null);

(statearr_52023_54033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (22))){
var inst_51986 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
var statearr_52024_54034 = state_51993__$1;
(statearr_52024_54034[(2)] = inst_51986);

(statearr_52024_54034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (6))){
var inst_51896 = (state_51993[(14)]);
var inst_51910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51896,change);
var state_51993__$1 = state_51993;
var statearr_52029_54036 = state_51993__$1;
(statearr_52029_54036[(2)] = inst_51910);

(statearr_52029_54036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (25))){
var state_51993__$1 = state_51993;
var statearr_52034_54037 = state_51993__$1;
(statearr_52034_54037[(2)] = null);

(statearr_52034_54037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (17))){
var inst_51896 = (state_51993[(14)]);
var inst_51876 = (state_51993[(18)]);
var inst_51968 = (inst_51876.cljs$core$IFn$_invoke$arity$1 ? inst_51876.cljs$core$IFn$_invoke$arity$1(inst_51896) : inst_51876.call(null,inst_51896));
var inst_51969 = cljs.core.not(inst_51968);
var state_51993__$1 = state_51993;
var statearr_52035_54044 = state_51993__$1;
(statearr_52035_54044[(2)] = inst_51969);

(statearr_52035_54044[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (3))){
var inst_51990 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51993__$1,inst_51990);
} else {
if((state_val_51994 === (12))){
var state_51993__$1 = state_51993;
var statearr_52036_54046 = state_51993__$1;
(statearr_52036_54046[(2)] = null);

(statearr_52036_54046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (2))){
var inst_51870 = (state_51993[(11)]);
var inst_51873 = (state_51993[(12)]);
var inst_51873__$1 = cljs.core.__destructure_map(inst_51870);
var inst_51875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51993__$1 = (function (){var statearr_52046 = state_51993;
(statearr_52046[(15)] = inst_51875);

(statearr_52046[(12)] = inst_51873__$1);

(statearr_52046[(18)] = inst_51876);

return statearr_52046;
})();
return cljs.core.async.ioc_alts_BANG_(state_51993__$1,(4),inst_51877);
} else {
if((state_val_51994 === (23))){
var inst_51977 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
if(cljs.core.truth_(inst_51977)){
var statearr_52047_54047 = state_51993__$1;
(statearr_52047_54047[(1)] = (24));

} else {
var statearr_52048_54048 = state_51993__$1;
(statearr_52048_54048[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (19))){
var inst_51972 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
var statearr_52049_54049 = state_51993__$1;
(statearr_52049_54049[(2)] = inst_51972);

(statearr_52049_54049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (11))){
var inst_51896 = (state_51993[(14)]);
var inst_51916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51896);
var state_51993__$1 = state_51993;
var statearr_52051_54050 = state_51993__$1;
(statearr_52051_54050[(2)] = inst_51916);

(statearr_52051_54050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (9))){
var inst_51896 = (state_51993[(14)]);
var inst_51875 = (state_51993[(15)]);
var inst_51963 = (state_51993[(19)]);
var inst_51963__$1 = (inst_51875.cljs$core$IFn$_invoke$arity$1 ? inst_51875.cljs$core$IFn$_invoke$arity$1(inst_51896) : inst_51875.call(null,inst_51896));
var state_51993__$1 = (function (){var statearr_52052 = state_51993;
(statearr_52052[(19)] = inst_51963__$1);

return statearr_52052;
})();
if(cljs.core.truth_(inst_51963__$1)){
var statearr_52053_54051 = state_51993__$1;
(statearr_52053_54051[(1)] = (14));

} else {
var statearr_52054_54052 = state_51993__$1;
(statearr_52054_54052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (5))){
var inst_51900 = (state_51993[(13)]);
var state_51993__$1 = state_51993;
var statearr_52055_54053 = state_51993__$1;
(statearr_52055_54053[(2)] = inst_51900);

(statearr_52055_54053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (14))){
var inst_51963 = (state_51993[(19)]);
var state_51993__$1 = state_51993;
var statearr_52056_54055 = state_51993__$1;
(statearr_52056_54055[(2)] = inst_51963);

(statearr_52056_54055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (26))){
var inst_51982 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
var statearr_52057_54056 = state_51993__$1;
(statearr_52057_54056[(2)] = inst_51982);

(statearr_52057_54056[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (16))){
var inst_51974 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
if(cljs.core.truth_(inst_51974)){
var statearr_52058_54057 = state_51993__$1;
(statearr_52058_54057[(1)] = (20));

} else {
var statearr_52059_54058 = state_51993__$1;
(statearr_52059_54058[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (10))){
var inst_51988 = (state_51993[(2)]);
var state_51993__$1 = state_51993;
var statearr_52063_54059 = state_51993__$1;
(statearr_52063_54059[(2)] = inst_51988);

(statearr_52063_54059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (18))){
var inst_51966 = (state_51993[(16)]);
var state_51993__$1 = state_51993;
var statearr_52064_54060 = state_51993__$1;
(statearr_52064_54060[(2)] = inst_51966);

(statearr_52064_54060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51994 === (8))){
var inst_51886 = (state_51993[(7)]);
var inst_51914 = (inst_51886 == null);
var state_51993__$1 = state_51993;
if(cljs.core.truth_(inst_51914)){
var statearr_52066_54061 = state_51993__$1;
(statearr_52066_54061[(1)] = (11));

} else {
var statearr_52067_54062 = state_51993__$1;
(statearr_52067_54062[(1)] = (12));

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
var statearr_52074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52074[(0)] = cljs$core$async$mix_$_state_machine__41951__auto__);

(statearr_52074[(1)] = (1));

return statearr_52074;
});
var cljs$core$async$mix_$_state_machine__41951__auto____1 = (function (state_51993){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_51993);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52077){var ex__41954__auto__ = e52077;
var statearr_52079_54063 = state_51993;
(statearr_52079_54063[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_51993[(4)]))){
var statearr_52080_54064 = state_51993;
(statearr_52080_54064[(1)] = cljs.core.first((state_51993[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54065 = state_51993;
state_51993 = G__54065;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41951__auto__ = function(state_51993){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41951__auto____1.call(this,state_51993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41951__auto____0;
cljs$core$async$mix_$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41951__auto____1;
return cljs$core$async$mix_$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52082 = f__42199__auto__();
(statearr_52082[(6)] = c__42198__auto___54010);

return statearr_52082;
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

var cljs$core$async$Pub$sub_STAR_$dyn_54066 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_54066(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_54068 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_54068(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_54073 = (function() {
var G__54074 = null;
var G__54074__1 = (function (p){
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
var G__54074__2 = (function (p,v){
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
G__54074 = function(p,v){
switch(arguments.length){
case 1:
return G__54074__1.call(this,p);
case 2:
return G__54074__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54074.cljs$core$IFn$_invoke$arity$1 = G__54074__1;
G__54074.cljs$core$IFn$_invoke$arity$2 = G__54074__2;
return G__54074;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52097 = arguments.length;
switch (G__52097) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54073(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_54073(p,v);
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
var G__52110 = arguments.length;
switch (G__52110) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52104_SHARP_){
if(cljs.core.truth_((p1__52104_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52104_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52104_SHARP_.call(null,topic)))){
return p1__52104_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52104_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52120 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52121){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52121 = meta52121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52122,meta52121__$1){
var self__ = this;
var _52122__$1 = this;
return (new cljs.core.async.t_cljs$core$async52120(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52121__$1));
}));

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52122){
var self__ = this;
var _52122__$1 = this;
return self__.meta52121;
}));

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52120.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52121","meta52121",108669925,null)], null);
}));

(cljs.core.async.t_cljs$core$async52120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52120");

(cljs.core.async.t_cljs$core$async52120.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52120.
 */
cljs.core.async.__GT_t_cljs$core$async52120 = (function cljs$core$async$__GT_t_cljs$core$async52120(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52121){
return (new cljs.core.async.t_cljs$core$async52120(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52121));
});

}

return (new cljs.core.async.t_cljs$core$async52120(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42198__auto___54085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52248){
var state_val_52249 = (state_52248[(1)]);
if((state_val_52249 === (7))){
var inst_52244 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52254_54086 = state_52248__$1;
(statearr_52254_54086[(2)] = inst_52244);

(statearr_52254_54086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (20))){
var state_52248__$1 = state_52248;
var statearr_52265_54087 = state_52248__$1;
(statearr_52265_54087[(2)] = null);

(statearr_52265_54087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (1))){
var state_52248__$1 = state_52248;
var statearr_52271_54088 = state_52248__$1;
(statearr_52271_54088[(2)] = null);

(statearr_52271_54088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (24))){
var inst_52224 = (state_52248[(7)]);
var inst_52236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52224);
var state_52248__$1 = state_52248;
var statearr_52275_54089 = state_52248__$1;
(statearr_52275_54089[(2)] = inst_52236);

(statearr_52275_54089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (4))){
var inst_52167 = (state_52248[(8)]);
var inst_52167__$1 = (state_52248[(2)]);
var inst_52168 = (inst_52167__$1 == null);
var state_52248__$1 = (function (){var statearr_52276 = state_52248;
(statearr_52276[(8)] = inst_52167__$1);

return statearr_52276;
})();
if(cljs.core.truth_(inst_52168)){
var statearr_52277_54090 = state_52248__$1;
(statearr_52277_54090[(1)] = (5));

} else {
var statearr_52278_54091 = state_52248__$1;
(statearr_52278_54091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (15))){
var inst_52215 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52279_54093 = state_52248__$1;
(statearr_52279_54093[(2)] = inst_52215);

(statearr_52279_54093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (21))){
var inst_52241 = (state_52248[(2)]);
var state_52248__$1 = (function (){var statearr_52281 = state_52248;
(statearr_52281[(9)] = inst_52241);

return statearr_52281;
})();
var statearr_52282_54094 = state_52248__$1;
(statearr_52282_54094[(2)] = null);

(statearr_52282_54094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (13))){
var inst_52193 = (state_52248[(10)]);
var inst_52195 = cljs.core.chunked_seq_QMARK_(inst_52193);
var state_52248__$1 = state_52248;
if(inst_52195){
var statearr_52283_54095 = state_52248__$1;
(statearr_52283_54095[(1)] = (16));

} else {
var statearr_52284_54096 = state_52248__$1;
(statearr_52284_54096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (22))){
var inst_52232 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52232)){
var statearr_52285_54097 = state_52248__$1;
(statearr_52285_54097[(1)] = (23));

} else {
var statearr_52286_54098 = state_52248__$1;
(statearr_52286_54098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (6))){
var inst_52224 = (state_52248[(7)]);
var inst_52227 = (state_52248[(11)]);
var inst_52167 = (state_52248[(8)]);
var inst_52224__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52167) : topic_fn.call(null,inst_52167));
var inst_52225 = cljs.core.deref(mults);
var inst_52227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52225,inst_52224__$1);
var state_52248__$1 = (function (){var statearr_52287 = state_52248;
(statearr_52287[(7)] = inst_52224__$1);

(statearr_52287[(11)] = inst_52227__$1);

return statearr_52287;
})();
if(cljs.core.truth_(inst_52227__$1)){
var statearr_52288_54102 = state_52248__$1;
(statearr_52288_54102[(1)] = (19));

} else {
var statearr_52289_54103 = state_52248__$1;
(statearr_52289_54103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (25))){
var inst_52238 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52290_54104 = state_52248__$1;
(statearr_52290_54104[(2)] = inst_52238);

(statearr_52290_54104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (17))){
var inst_52193 = (state_52248[(10)]);
var inst_52205 = cljs.core.first(inst_52193);
var inst_52206 = cljs.core.async.muxch_STAR_(inst_52205);
var inst_52207 = cljs.core.async.close_BANG_(inst_52206);
var inst_52208 = cljs.core.next(inst_52193);
var inst_52177 = inst_52208;
var inst_52178 = null;
var inst_52179 = (0);
var inst_52180 = (0);
var state_52248__$1 = (function (){var statearr_52291 = state_52248;
(statearr_52291[(12)] = inst_52207);

(statearr_52291[(13)] = inst_52179);

(statearr_52291[(14)] = inst_52178);

(statearr_52291[(15)] = inst_52177);

(statearr_52291[(16)] = inst_52180);

return statearr_52291;
})();
var statearr_52292_54108 = state_52248__$1;
(statearr_52292_54108[(2)] = null);

(statearr_52292_54108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (3))){
var inst_52246 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52248__$1,inst_52246);
} else {
if((state_val_52249 === (12))){
var inst_52220 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52293_54109 = state_52248__$1;
(statearr_52293_54109[(2)] = inst_52220);

(statearr_52293_54109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (2))){
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52248__$1,(4),ch);
} else {
if((state_val_52249 === (23))){
var state_52248__$1 = state_52248;
var statearr_52294_54114 = state_52248__$1;
(statearr_52294_54114[(2)] = null);

(statearr_52294_54114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (19))){
var inst_52227 = (state_52248[(11)]);
var inst_52167 = (state_52248[(8)]);
var inst_52230 = cljs.core.async.muxch_STAR_(inst_52227);
var state_52248__$1 = state_52248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52248__$1,(22),inst_52230,inst_52167);
} else {
if((state_val_52249 === (11))){
var inst_52193 = (state_52248[(10)]);
var inst_52177 = (state_52248[(15)]);
var inst_52193__$1 = cljs.core.seq(inst_52177);
var state_52248__$1 = (function (){var statearr_52295 = state_52248;
(statearr_52295[(10)] = inst_52193__$1);

return statearr_52295;
})();
if(inst_52193__$1){
var statearr_52296_54116 = state_52248__$1;
(statearr_52296_54116[(1)] = (13));

} else {
var statearr_52297_54117 = state_52248__$1;
(statearr_52297_54117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (9))){
var inst_52222 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52298_54118 = state_52248__$1;
(statearr_52298_54118[(2)] = inst_52222);

(statearr_52298_54118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (5))){
var inst_52174 = cljs.core.deref(mults);
var inst_52175 = cljs.core.vals(inst_52174);
var inst_52176 = cljs.core.seq(inst_52175);
var inst_52177 = inst_52176;
var inst_52178 = null;
var inst_52179 = (0);
var inst_52180 = (0);
var state_52248__$1 = (function (){var statearr_52300 = state_52248;
(statearr_52300[(13)] = inst_52179);

(statearr_52300[(14)] = inst_52178);

(statearr_52300[(15)] = inst_52177);

(statearr_52300[(16)] = inst_52180);

return statearr_52300;
})();
var statearr_52301_54119 = state_52248__$1;
(statearr_52301_54119[(2)] = null);

(statearr_52301_54119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (14))){
var state_52248__$1 = state_52248;
var statearr_52315_54120 = state_52248__$1;
(statearr_52315_54120[(2)] = null);

(statearr_52315_54120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (16))){
var inst_52193 = (state_52248[(10)]);
var inst_52200 = cljs.core.chunk_first(inst_52193);
var inst_52201 = cljs.core.chunk_rest(inst_52193);
var inst_52202 = cljs.core.count(inst_52200);
var inst_52177 = inst_52201;
var inst_52178 = inst_52200;
var inst_52179 = inst_52202;
var inst_52180 = (0);
var state_52248__$1 = (function (){var statearr_52316 = state_52248;
(statearr_52316[(13)] = inst_52179);

(statearr_52316[(14)] = inst_52178);

(statearr_52316[(15)] = inst_52177);

(statearr_52316[(16)] = inst_52180);

return statearr_52316;
})();
var statearr_52321_54121 = state_52248__$1;
(statearr_52321_54121[(2)] = null);

(statearr_52321_54121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (10))){
var inst_52179 = (state_52248[(13)]);
var inst_52178 = (state_52248[(14)]);
var inst_52177 = (state_52248[(15)]);
var inst_52180 = (state_52248[(16)]);
var inst_52187 = cljs.core._nth(inst_52178,inst_52180);
var inst_52188 = cljs.core.async.muxch_STAR_(inst_52187);
var inst_52189 = cljs.core.async.close_BANG_(inst_52188);
var inst_52190 = (inst_52180 + (1));
var tmp52303 = inst_52179;
var tmp52304 = inst_52178;
var tmp52305 = inst_52177;
var inst_52177__$1 = tmp52305;
var inst_52178__$1 = tmp52304;
var inst_52179__$1 = tmp52303;
var inst_52180__$1 = inst_52190;
var state_52248__$1 = (function (){var statearr_52324 = state_52248;
(statearr_52324[(13)] = inst_52179__$1);

(statearr_52324[(17)] = inst_52189);

(statearr_52324[(14)] = inst_52178__$1);

(statearr_52324[(15)] = inst_52177__$1);

(statearr_52324[(16)] = inst_52180__$1);

return statearr_52324;
})();
var statearr_52325_54123 = state_52248__$1;
(statearr_52325_54123[(2)] = null);

(statearr_52325_54123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (18))){
var inst_52212 = (state_52248[(2)]);
var state_52248__$1 = state_52248;
var statearr_52326_54124 = state_52248__$1;
(statearr_52326_54124[(2)] = inst_52212);

(statearr_52326_54124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52249 === (8))){
var inst_52179 = (state_52248[(13)]);
var inst_52180 = (state_52248[(16)]);
var inst_52184 = (inst_52180 < inst_52179);
var inst_52185 = inst_52184;
var state_52248__$1 = state_52248;
if(cljs.core.truth_(inst_52185)){
var statearr_52327_54125 = state_52248__$1;
(statearr_52327_54125[(1)] = (10));

} else {
var statearr_52328_54126 = state_52248__$1;
(statearr_52328_54126[(1)] = (11));

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
var statearr_52329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52329[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_52329[(1)] = (1));

return statearr_52329;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_52248){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52248);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52331){var ex__41954__auto__ = e52331;
var statearr_52332_54129 = state_52248;
(statearr_52332_54129[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52248[(4)]))){
var statearr_52334_54130 = state_52248;
(statearr_52334_54130[(1)] = cljs.core.first((state_52248[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54131 = state_52248;
state_52248 = G__54131;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_52248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_52248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52339 = f__42199__auto__();
(statearr_52339[(6)] = c__42198__auto___54085);

return statearr_52339;
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
var G__52343 = arguments.length;
switch (G__52343) {
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
var G__52361 = arguments.length;
switch (G__52361) {
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
var G__52379 = arguments.length;
switch (G__52379) {
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
var c__42198__auto___54135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52436){
var state_val_52438 = (state_52436[(1)]);
if((state_val_52438 === (7))){
var state_52436__$1 = state_52436;
var statearr_52446_54136 = state_52436__$1;
(statearr_52446_54136[(2)] = null);

(statearr_52446_54136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (1))){
var state_52436__$1 = state_52436;
var statearr_52454_54137 = state_52436__$1;
(statearr_52454_54137[(2)] = null);

(statearr_52454_54137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (4))){
var inst_52396 = (state_52436[(7)]);
var inst_52395 = (state_52436[(8)]);
var inst_52398 = (inst_52396 < inst_52395);
var state_52436__$1 = state_52436;
if(cljs.core.truth_(inst_52398)){
var statearr_52459_54138 = state_52436__$1;
(statearr_52459_54138[(1)] = (6));

} else {
var statearr_52460_54139 = state_52436__$1;
(statearr_52460_54139[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (15))){
var inst_52421 = (state_52436[(9)]);
var inst_52427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52421);
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52436__$1,(17),out,inst_52427);
} else {
if((state_val_52438 === (13))){
var inst_52421 = (state_52436[(9)]);
var inst_52421__$1 = (state_52436[(2)]);
var inst_52422 = cljs.core.some(cljs.core.nil_QMARK_,inst_52421__$1);
var state_52436__$1 = (function (){var statearr_52466 = state_52436;
(statearr_52466[(9)] = inst_52421__$1);

return statearr_52466;
})();
if(cljs.core.truth_(inst_52422)){
var statearr_52467_54140 = state_52436__$1;
(statearr_52467_54140[(1)] = (14));

} else {
var statearr_52468_54141 = state_52436__$1;
(statearr_52468_54141[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (6))){
var state_52436__$1 = state_52436;
var statearr_52469_54142 = state_52436__$1;
(statearr_52469_54142[(2)] = null);

(statearr_52469_54142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (17))){
var inst_52429 = (state_52436[(2)]);
var state_52436__$1 = (function (){var statearr_52471 = state_52436;
(statearr_52471[(10)] = inst_52429);

return statearr_52471;
})();
var statearr_52472_54143 = state_52436__$1;
(statearr_52472_54143[(2)] = null);

(statearr_52472_54143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (3))){
var inst_52434 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52436__$1,inst_52434);
} else {
if((state_val_52438 === (12))){
var _ = (function (){var statearr_52476 = state_52436;
(statearr_52476[(4)] = cljs.core.rest((state_52436[(4)])));

return statearr_52476;
})();
var state_52436__$1 = state_52436;
var ex52470 = (state_52436__$1[(2)]);
var statearr_52479_54144 = state_52436__$1;
(statearr_52479_54144[(5)] = ex52470);


if((ex52470 instanceof Object)){
var statearr_52483_54147 = state_52436__$1;
(statearr_52483_54147[(1)] = (11));

(statearr_52483_54147[(5)] = null);

} else {
throw ex52470;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (2))){
var inst_52391 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52395 = cnt;
var inst_52396 = (0);
var state_52436__$1 = (function (){var statearr_52488 = state_52436;
(statearr_52488[(11)] = inst_52391);

(statearr_52488[(7)] = inst_52396);

(statearr_52488[(8)] = inst_52395);

return statearr_52488;
})();
var statearr_52492_54148 = state_52436__$1;
(statearr_52492_54148[(2)] = null);

(statearr_52492_54148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (11))){
var inst_52400 = (state_52436[(2)]);
var inst_52401 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52436__$1 = (function (){var statearr_52493 = state_52436;
(statearr_52493[(12)] = inst_52400);

return statearr_52493;
})();
var statearr_52496_54149 = state_52436__$1;
(statearr_52496_54149[(2)] = inst_52401);

(statearr_52496_54149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (9))){
var inst_52396 = (state_52436[(7)]);
var _ = (function (){var statearr_52501 = state_52436;
(statearr_52501[(4)] = cljs.core.cons((12),(state_52436[(4)])));

return statearr_52501;
})();
var inst_52407 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52396) : chs__$1.call(null,inst_52396));
var inst_52408 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52396) : done.call(null,inst_52396));
var inst_52409 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52407,inst_52408);
var ___$1 = (function (){var statearr_52502 = state_52436;
(statearr_52502[(4)] = cljs.core.rest((state_52436[(4)])));

return statearr_52502;
})();
var state_52436__$1 = state_52436;
var statearr_52503_54150 = state_52436__$1;
(statearr_52503_54150[(2)] = inst_52409);

(statearr_52503_54150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (5))){
var inst_52419 = (state_52436[(2)]);
var state_52436__$1 = (function (){var statearr_52508 = state_52436;
(statearr_52508[(13)] = inst_52419);

return statearr_52508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52436__$1,(13),dchan);
} else {
if((state_val_52438 === (14))){
var inst_52424 = cljs.core.async.close_BANG_(out);
var state_52436__$1 = state_52436;
var statearr_52509_54151 = state_52436__$1;
(statearr_52509_54151[(2)] = inst_52424);

(statearr_52509_54151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (16))){
var inst_52432 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
var statearr_52514_54152 = state_52436__$1;
(statearr_52514_54152[(2)] = inst_52432);

(statearr_52514_54152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (10))){
var inst_52396 = (state_52436[(7)]);
var inst_52412 = (state_52436[(2)]);
var inst_52413 = (inst_52396 + (1));
var inst_52396__$1 = inst_52413;
var state_52436__$1 = (function (){var statearr_52519 = state_52436;
(statearr_52519[(7)] = inst_52396__$1);

(statearr_52519[(14)] = inst_52412);

return statearr_52519;
})();
var statearr_52520_54153 = state_52436__$1;
(statearr_52520_54153[(2)] = null);

(statearr_52520_54153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52438 === (8))){
var inst_52417 = (state_52436[(2)]);
var state_52436__$1 = state_52436;
var statearr_52522_54154 = state_52436__$1;
(statearr_52522_54154[(2)] = inst_52417);

(statearr_52522_54154[(1)] = (5));


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
var statearr_52523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52523[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_52523[(1)] = (1));

return statearr_52523;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_52436){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52436);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52524){var ex__41954__auto__ = e52524;
var statearr_52525_54159 = state_52436;
(statearr_52525_54159[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52436[(4)]))){
var statearr_52526_54160 = state_52436;
(statearr_52526_54160[(1)] = cljs.core.first((state_52436[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54163 = state_52436;
state_52436 = G__54163;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_52436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_52436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52527 = f__42199__auto__();
(statearr_52527[(6)] = c__42198__auto___54135);

return statearr_52527;
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
var G__52538 = arguments.length;
switch (G__52538) {
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
var c__42198__auto___54171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52588){
var state_val_52589 = (state_52588[(1)]);
if((state_val_52589 === (7))){
var inst_52566 = (state_52588[(7)]);
var inst_52567 = (state_52588[(8)]);
var inst_52566__$1 = (state_52588[(2)]);
var inst_52567__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52566__$1,(0),null);
var inst_52568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52566__$1,(1),null);
var inst_52569 = (inst_52567__$1 == null);
var state_52588__$1 = (function (){var statearr_52599 = state_52588;
(statearr_52599[(9)] = inst_52568);

(statearr_52599[(7)] = inst_52566__$1);

(statearr_52599[(8)] = inst_52567__$1);

return statearr_52599;
})();
if(cljs.core.truth_(inst_52569)){
var statearr_52601_54174 = state_52588__$1;
(statearr_52601_54174[(1)] = (8));

} else {
var statearr_52602_54175 = state_52588__$1;
(statearr_52602_54175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (1))){
var inst_52556 = cljs.core.vec(chs);
var inst_52557 = inst_52556;
var state_52588__$1 = (function (){var statearr_52604 = state_52588;
(statearr_52604[(10)] = inst_52557);

return statearr_52604;
})();
var statearr_52606_54176 = state_52588__$1;
(statearr_52606_54176[(2)] = null);

(statearr_52606_54176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (4))){
var inst_52557 = (state_52588[(10)]);
var state_52588__$1 = state_52588;
return cljs.core.async.ioc_alts_BANG_(state_52588__$1,(7),inst_52557);
} else {
if((state_val_52589 === (6))){
var inst_52584 = (state_52588[(2)]);
var state_52588__$1 = state_52588;
var statearr_52610_54178 = state_52588__$1;
(statearr_52610_54178[(2)] = inst_52584);

(statearr_52610_54178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (3))){
var inst_52586 = (state_52588[(2)]);
var state_52588__$1 = state_52588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52588__$1,inst_52586);
} else {
if((state_val_52589 === (2))){
var inst_52557 = (state_52588[(10)]);
var inst_52559 = cljs.core.count(inst_52557);
var inst_52560 = (inst_52559 > (0));
var state_52588__$1 = state_52588;
if(cljs.core.truth_(inst_52560)){
var statearr_52612_54182 = state_52588__$1;
(statearr_52612_54182[(1)] = (4));

} else {
var statearr_52613_54183 = state_52588__$1;
(statearr_52613_54183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (11))){
var inst_52557 = (state_52588[(10)]);
var inst_52576 = (state_52588[(2)]);
var tmp52611 = inst_52557;
var inst_52557__$1 = tmp52611;
var state_52588__$1 = (function (){var statearr_52614 = state_52588;
(statearr_52614[(11)] = inst_52576);

(statearr_52614[(10)] = inst_52557__$1);

return statearr_52614;
})();
var statearr_52616_54184 = state_52588__$1;
(statearr_52616_54184[(2)] = null);

(statearr_52616_54184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (9))){
var inst_52567 = (state_52588[(8)]);
var state_52588__$1 = state_52588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52588__$1,(11),out,inst_52567);
} else {
if((state_val_52589 === (5))){
var inst_52582 = cljs.core.async.close_BANG_(out);
var state_52588__$1 = state_52588;
var statearr_52619_54185 = state_52588__$1;
(statearr_52619_54185[(2)] = inst_52582);

(statearr_52619_54185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (10))){
var inst_52579 = (state_52588[(2)]);
var state_52588__$1 = state_52588;
var statearr_52620_54186 = state_52588__$1;
(statearr_52620_54186[(2)] = inst_52579);

(statearr_52620_54186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52589 === (8))){
var inst_52568 = (state_52588[(9)]);
var inst_52566 = (state_52588[(7)]);
var inst_52557 = (state_52588[(10)]);
var inst_52567 = (state_52588[(8)]);
var inst_52571 = (function (){var cs = inst_52557;
var vec__52562 = inst_52566;
var v = inst_52567;
var c = inst_52568;
return (function (p1__52532_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52532_SHARP_);
});
})();
var inst_52572 = cljs.core.filterv(inst_52571,inst_52557);
var inst_52557__$1 = inst_52572;
var state_52588__$1 = (function (){var statearr_52624 = state_52588;
(statearr_52624[(10)] = inst_52557__$1);

return statearr_52624;
})();
var statearr_52625_54187 = state_52588__$1;
(statearr_52625_54187[(2)] = null);

(statearr_52625_54187[(1)] = (2));


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
var statearr_52630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52630[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_52630[(1)] = (1));

return statearr_52630;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_52588){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52588);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52633){var ex__41954__auto__ = e52633;
var statearr_52634_54188 = state_52588;
(statearr_52634_54188[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52588[(4)]))){
var statearr_52637_54189 = state_52588;
(statearr_52637_54189[(1)] = cljs.core.first((state_52588[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54190 = state_52588;
state_52588 = G__54190;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_52588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_52588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52638 = f__42199__auto__();
(statearr_52638[(6)] = c__42198__auto___54171);

return statearr_52638;
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
var G__52649 = arguments.length;
switch (G__52649) {
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
var c__42198__auto___54192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52690){
var state_val_52691 = (state_52690[(1)]);
if((state_val_52691 === (7))){
var inst_52669 = (state_52690[(7)]);
var inst_52669__$1 = (state_52690[(2)]);
var inst_52670 = (inst_52669__$1 == null);
var inst_52671 = cljs.core.not(inst_52670);
var state_52690__$1 = (function (){var statearr_52695 = state_52690;
(statearr_52695[(7)] = inst_52669__$1);

return statearr_52695;
})();
if(inst_52671){
var statearr_52696_54193 = state_52690__$1;
(statearr_52696_54193[(1)] = (8));

} else {
var statearr_52697_54194 = state_52690__$1;
(statearr_52697_54194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (1))){
var inst_52664 = (0);
var state_52690__$1 = (function (){var statearr_52698 = state_52690;
(statearr_52698[(8)] = inst_52664);

return statearr_52698;
})();
var statearr_52699_54195 = state_52690__$1;
(statearr_52699_54195[(2)] = null);

(statearr_52699_54195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (4))){
var state_52690__$1 = state_52690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52690__$1,(7),ch);
} else {
if((state_val_52691 === (6))){
var inst_52685 = (state_52690[(2)]);
var state_52690__$1 = state_52690;
var statearr_52704_54196 = state_52690__$1;
(statearr_52704_54196[(2)] = inst_52685);

(statearr_52704_54196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (3))){
var inst_52687 = (state_52690[(2)]);
var inst_52688 = cljs.core.async.close_BANG_(out);
var state_52690__$1 = (function (){var statearr_52705 = state_52690;
(statearr_52705[(9)] = inst_52687);

return statearr_52705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52690__$1,inst_52688);
} else {
if((state_val_52691 === (2))){
var inst_52664 = (state_52690[(8)]);
var inst_52666 = (inst_52664 < n);
var state_52690__$1 = state_52690;
if(cljs.core.truth_(inst_52666)){
var statearr_52706_54197 = state_52690__$1;
(statearr_52706_54197[(1)] = (4));

} else {
var statearr_52707_54200 = state_52690__$1;
(statearr_52707_54200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (11))){
var inst_52664 = (state_52690[(8)]);
var inst_52674 = (state_52690[(2)]);
var inst_52675 = (inst_52664 + (1));
var inst_52664__$1 = inst_52675;
var state_52690__$1 = (function (){var statearr_52708 = state_52690;
(statearr_52708[(8)] = inst_52664__$1);

(statearr_52708[(10)] = inst_52674);

return statearr_52708;
})();
var statearr_52709_54201 = state_52690__$1;
(statearr_52709_54201[(2)] = null);

(statearr_52709_54201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (9))){
var state_52690__$1 = state_52690;
var statearr_52710_54202 = state_52690__$1;
(statearr_52710_54202[(2)] = null);

(statearr_52710_54202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (5))){
var state_52690__$1 = state_52690;
var statearr_52711_54203 = state_52690__$1;
(statearr_52711_54203[(2)] = null);

(statearr_52711_54203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (10))){
var inst_52679 = (state_52690[(2)]);
var state_52690__$1 = state_52690;
var statearr_52712_54204 = state_52690__$1;
(statearr_52712_54204[(2)] = inst_52679);

(statearr_52712_54204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52691 === (8))){
var inst_52669 = (state_52690[(7)]);
var state_52690__$1 = state_52690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52690__$1,(11),out,inst_52669);
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
var statearr_52713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52713[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_52713[(1)] = (1));

return statearr_52713;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_52690){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52690);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52714){var ex__41954__auto__ = e52714;
var statearr_52715_54205 = state_52690;
(statearr_52715_54205[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52690[(4)]))){
var statearr_52716_54206 = state_52690;
(statearr_52716_54206[(1)] = cljs.core.first((state_52690[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54207 = state_52690;
state_52690 = G__54207;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_52690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_52690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52717 = f__42199__auto__();
(statearr_52717[(6)] = c__42198__auto___54192);

return statearr_52717;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52719 = (function (f,ch,meta52720){
this.f = f;
this.ch = ch;
this.meta52720 = meta52720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52721,meta52720__$1){
var self__ = this;
var _52721__$1 = this;
return (new cljs.core.async.t_cljs$core$async52719(self__.f,self__.ch,meta52720__$1));
}));

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52721){
var self__ = this;
var _52721__$1 = this;
return self__.meta52720;
}));

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52722 = (function (f,ch,meta52720,_,fn1,meta52723){
this.f = f;
this.ch = ch;
this.meta52720 = meta52720;
this._ = _;
this.fn1 = fn1;
this.meta52723 = meta52723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52724,meta52723__$1){
var self__ = this;
var _52724__$1 = this;
return (new cljs.core.async.t_cljs$core$async52722(self__.f,self__.ch,self__.meta52720,self__._,self__.fn1,meta52723__$1));
}));

(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52724){
var self__ = this;
var _52724__$1 = this;
return self__.meta52723;
}));

(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52718_SHARP_){
var G__52725 = (((p1__52718_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52718_SHARP_) : self__.f.call(null,p1__52718_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52725) : f1.call(null,G__52725));
});
}));

(cljs.core.async.t_cljs$core$async52722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52720","meta52720",-1234387386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52719","cljs.core.async/t_cljs$core$async52719",-2125234843,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52723","meta52723",-868789393,null)], null);
}));

(cljs.core.async.t_cljs$core$async52722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52722");

(cljs.core.async.t_cljs$core$async52722.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52722.
 */
cljs.core.async.__GT_t_cljs$core$async52722 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52722(f__$1,ch__$1,meta52720__$1,___$2,fn1__$1,meta52723){
return (new cljs.core.async.t_cljs$core$async52722(f__$1,ch__$1,meta52720__$1,___$2,fn1__$1,meta52723));
});

}

return (new cljs.core.async.t_cljs$core$async52722(self__.f,self__.ch,self__.meta52720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52727 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52727) : self__.f.call(null,G__52727));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52720","meta52720",-1234387386,null)], null);
}));

(cljs.core.async.t_cljs$core$async52719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52719");

(cljs.core.async.t_cljs$core$async52719.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52719.
 */
cljs.core.async.__GT_t_cljs$core$async52719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52719(f__$1,ch__$1,meta52720){
return (new cljs.core.async.t_cljs$core$async52719(f__$1,ch__$1,meta52720));
});

}

return (new cljs.core.async.t_cljs$core$async52719(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52728 = (function (f,ch,meta52729){
this.f = f;
this.ch = ch;
this.meta52729 = meta52729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52730,meta52729__$1){
var self__ = this;
var _52730__$1 = this;
return (new cljs.core.async.t_cljs$core$async52728(self__.f,self__.ch,meta52729__$1));
}));

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52730){
var self__ = this;
var _52730__$1 = this;
return self__.meta52729;
}));

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52729","meta52729",1428703163,null)], null);
}));

(cljs.core.async.t_cljs$core$async52728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52728");

(cljs.core.async.t_cljs$core$async52728.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52728.
 */
cljs.core.async.__GT_t_cljs$core$async52728 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52728(f__$1,ch__$1,meta52729){
return (new cljs.core.async.t_cljs$core$async52728(f__$1,ch__$1,meta52729));
});

}

return (new cljs.core.async.t_cljs$core$async52728(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52735 = (function (p,ch,meta52736){
this.p = p;
this.ch = ch;
this.meta52736 = meta52736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52737,meta52736__$1){
var self__ = this;
var _52737__$1 = this;
return (new cljs.core.async.t_cljs$core$async52735(self__.p,self__.ch,meta52736__$1));
}));

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52737){
var self__ = this;
var _52737__$1 = this;
return self__.meta52736;
}));

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52736","meta52736",1317748826,null)], null);
}));

(cljs.core.async.t_cljs$core$async52735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52735");

(cljs.core.async.t_cljs$core$async52735.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52735.
 */
cljs.core.async.__GT_t_cljs$core$async52735 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52735(p__$1,ch__$1,meta52736){
return (new cljs.core.async.t_cljs$core$async52735(p__$1,ch__$1,meta52736));
});

}

return (new cljs.core.async.t_cljs$core$async52735(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__52761 = arguments.length;
switch (G__52761) {
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
var c__42198__auto___54227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52795){
var state_val_52796 = (state_52795[(1)]);
if((state_val_52796 === (7))){
var inst_52791 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52798_54230 = state_52795__$1;
(statearr_52798_54230[(2)] = inst_52791);

(statearr_52798_54230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (1))){
var state_52795__$1 = state_52795;
var statearr_52800_54234 = state_52795__$1;
(statearr_52800_54234[(2)] = null);

(statearr_52800_54234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (4))){
var inst_52776 = (state_52795[(7)]);
var inst_52776__$1 = (state_52795[(2)]);
var inst_52777 = (inst_52776__$1 == null);
var state_52795__$1 = (function (){var statearr_52802 = state_52795;
(statearr_52802[(7)] = inst_52776__$1);

return statearr_52802;
})();
if(cljs.core.truth_(inst_52777)){
var statearr_52803_54236 = state_52795__$1;
(statearr_52803_54236[(1)] = (5));

} else {
var statearr_52804_54237 = state_52795__$1;
(statearr_52804_54237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (6))){
var inst_52776 = (state_52795[(7)]);
var inst_52781 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52776) : p.call(null,inst_52776));
var state_52795__$1 = state_52795;
if(cljs.core.truth_(inst_52781)){
var statearr_52806_54238 = state_52795__$1;
(statearr_52806_54238[(1)] = (8));

} else {
var statearr_52808_54239 = state_52795__$1;
(statearr_52808_54239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (3))){
var inst_52793 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52795__$1,inst_52793);
} else {
if((state_val_52796 === (2))){
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52795__$1,(4),ch);
} else {
if((state_val_52796 === (11))){
var inst_52784 = (state_52795[(2)]);
var state_52795__$1 = state_52795;
var statearr_52813_54240 = state_52795__$1;
(statearr_52813_54240[(2)] = inst_52784);

(statearr_52813_54240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (9))){
var state_52795__$1 = state_52795;
var statearr_52814_54241 = state_52795__$1;
(statearr_52814_54241[(2)] = null);

(statearr_52814_54241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (5))){
var inst_52779 = cljs.core.async.close_BANG_(out);
var state_52795__$1 = state_52795;
var statearr_52817_54244 = state_52795__$1;
(statearr_52817_54244[(2)] = inst_52779);

(statearr_52817_54244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (10))){
var inst_52788 = (state_52795[(2)]);
var state_52795__$1 = (function (){var statearr_52820 = state_52795;
(statearr_52820[(8)] = inst_52788);

return statearr_52820;
})();
var statearr_52821_54245 = state_52795__$1;
(statearr_52821_54245[(2)] = null);

(statearr_52821_54245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52796 === (8))){
var inst_52776 = (state_52795[(7)]);
var state_52795__$1 = state_52795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52795__$1,(11),out,inst_52776);
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
var statearr_52824 = [null,null,null,null,null,null,null,null,null];
(statearr_52824[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_52824[(1)] = (1));

return statearr_52824;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_52795){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52795);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e52830){var ex__41954__auto__ = e52830;
var statearr_52831_54259 = state_52795;
(statearr_52831_54259[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52795[(4)]))){
var statearr_52833_54262 = state_52795;
(statearr_52833_54262[(1)] = cljs.core.first((state_52795[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54265 = state_52795;
state_52795 = G__54265;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_52795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_52795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_52835 = f__42199__auto__();
(statearr_52835[(6)] = c__42198__auto___54227);

return statearr_52835;
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
var G__52845 = arguments.length;
switch (G__52845) {
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
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_52973){
var state_val_52974 = (state_52973[(1)]);
if((state_val_52974 === (7))){
var inst_52969 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_52985_54275 = state_52973__$1;
(statearr_52985_54275[(2)] = inst_52969);

(statearr_52985_54275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (20))){
var inst_52896 = (state_52973[(7)]);
var inst_52950 = (state_52973[(2)]);
var inst_52951 = cljs.core.next(inst_52896);
var inst_52873 = inst_52951;
var inst_52874 = null;
var inst_52875 = (0);
var inst_52876 = (0);
var state_52973__$1 = (function (){var statearr_52989 = state_52973;
(statearr_52989[(8)] = inst_52875);

(statearr_52989[(9)] = inst_52876);

(statearr_52989[(10)] = inst_52874);

(statearr_52989[(11)] = inst_52950);

(statearr_52989[(12)] = inst_52873);

return statearr_52989;
})();
var statearr_52990_54280 = state_52973__$1;
(statearr_52990_54280[(2)] = null);

(statearr_52990_54280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (1))){
var state_52973__$1 = state_52973;
var statearr_52991_54283 = state_52973__$1;
(statearr_52991_54283[(2)] = null);

(statearr_52991_54283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (4))){
var inst_52860 = (state_52973[(13)]);
var inst_52860__$1 = (state_52973[(2)]);
var inst_52862 = (inst_52860__$1 == null);
var state_52973__$1 = (function (){var statearr_52996 = state_52973;
(statearr_52996[(13)] = inst_52860__$1);

return statearr_52996;
})();
if(cljs.core.truth_(inst_52862)){
var statearr_52999_54286 = state_52973__$1;
(statearr_52999_54286[(1)] = (5));

} else {
var statearr_53002_54288 = state_52973__$1;
(statearr_53002_54288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (15))){
var state_52973__$1 = state_52973;
var statearr_53009_54291 = state_52973__$1;
(statearr_53009_54291[(2)] = null);

(statearr_53009_54291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (21))){
var state_52973__$1 = state_52973;
var statearr_53011_54292 = state_52973__$1;
(statearr_53011_54292[(2)] = null);

(statearr_53011_54292[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (13))){
var inst_52875 = (state_52973[(8)]);
var inst_52876 = (state_52973[(9)]);
var inst_52874 = (state_52973[(10)]);
var inst_52873 = (state_52973[(12)]);
var inst_52887 = (state_52973[(2)]);
var inst_52888 = (inst_52876 + (1));
var tmp53005 = inst_52875;
var tmp53006 = inst_52874;
var tmp53007 = inst_52873;
var inst_52873__$1 = tmp53007;
var inst_52874__$1 = tmp53006;
var inst_52875__$1 = tmp53005;
var inst_52876__$1 = inst_52888;
var state_52973__$1 = (function (){var statearr_53016 = state_52973;
(statearr_53016[(8)] = inst_52875__$1);

(statearr_53016[(9)] = inst_52876__$1);

(statearr_53016[(10)] = inst_52874__$1);

(statearr_53016[(12)] = inst_52873__$1);

(statearr_53016[(14)] = inst_52887);

return statearr_53016;
})();
var statearr_53017_54295 = state_52973__$1;
(statearr_53017_54295[(2)] = null);

(statearr_53017_54295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (22))){
var state_52973__$1 = state_52973;
var statearr_53018_54300 = state_52973__$1;
(statearr_53018_54300[(2)] = null);

(statearr_53018_54300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (6))){
var inst_52860 = (state_52973[(13)]);
var inst_52870 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52860) : f.call(null,inst_52860));
var inst_52871 = cljs.core.seq(inst_52870);
var inst_52873 = inst_52871;
var inst_52874 = null;
var inst_52875 = (0);
var inst_52876 = (0);
var state_52973__$1 = (function (){var statearr_53019 = state_52973;
(statearr_53019[(8)] = inst_52875);

(statearr_53019[(9)] = inst_52876);

(statearr_53019[(10)] = inst_52874);

(statearr_53019[(12)] = inst_52873);

return statearr_53019;
})();
var statearr_53020_54306 = state_52973__$1;
(statearr_53020_54306[(2)] = null);

(statearr_53020_54306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (17))){
var inst_52896 = (state_52973[(7)]);
var inst_52939 = cljs.core.chunk_first(inst_52896);
var inst_52940 = cljs.core.chunk_rest(inst_52896);
var inst_52941 = cljs.core.count(inst_52939);
var inst_52873 = inst_52940;
var inst_52874 = inst_52939;
var inst_52875 = inst_52941;
var inst_52876 = (0);
var state_52973__$1 = (function (){var statearr_53024 = state_52973;
(statearr_53024[(8)] = inst_52875);

(statearr_53024[(9)] = inst_52876);

(statearr_53024[(10)] = inst_52874);

(statearr_53024[(12)] = inst_52873);

return statearr_53024;
})();
var statearr_53027_54315 = state_52973__$1;
(statearr_53027_54315[(2)] = null);

(statearr_53027_54315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (3))){
var inst_52971 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52973__$1,inst_52971);
} else {
if((state_val_52974 === (12))){
var inst_52959 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_53037_54319 = state_52973__$1;
(statearr_53037_54319[(2)] = inst_52959);

(statearr_53037_54319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (2))){
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52973__$1,(4),in$);
} else {
if((state_val_52974 === (23))){
var inst_52967 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_53041_54325 = state_52973__$1;
(statearr_53041_54325[(2)] = inst_52967);

(statearr_53041_54325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (19))){
var inst_52954 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_53043_54328 = state_52973__$1;
(statearr_53043_54328[(2)] = inst_52954);

(statearr_53043_54328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (11))){
var inst_52896 = (state_52973[(7)]);
var inst_52873 = (state_52973[(12)]);
var inst_52896__$1 = cljs.core.seq(inst_52873);
var state_52973__$1 = (function (){var statearr_53045 = state_52973;
(statearr_53045[(7)] = inst_52896__$1);

return statearr_53045;
})();
if(inst_52896__$1){
var statearr_53046_54334 = state_52973__$1;
(statearr_53046_54334[(1)] = (14));

} else {
var statearr_53048_54336 = state_52973__$1;
(statearr_53048_54336[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (9))){
var inst_52961 = (state_52973[(2)]);
var inst_52962 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52973__$1 = (function (){var statearr_53050 = state_52973;
(statearr_53050[(15)] = inst_52961);

return statearr_53050;
})();
if(cljs.core.truth_(inst_52962)){
var statearr_53052_54341 = state_52973__$1;
(statearr_53052_54341[(1)] = (21));

} else {
var statearr_53053_54345 = state_52973__$1;
(statearr_53053_54345[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (5))){
var inst_52864 = cljs.core.async.close_BANG_(out);
var state_52973__$1 = state_52973;
var statearr_53054_54351 = state_52973__$1;
(statearr_53054_54351[(2)] = inst_52864);

(statearr_53054_54351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (14))){
var inst_52896 = (state_52973[(7)]);
var inst_52936 = cljs.core.chunked_seq_QMARK_(inst_52896);
var state_52973__$1 = state_52973;
if(inst_52936){
var statearr_53057_54352 = state_52973__$1;
(statearr_53057_54352[(1)] = (17));

} else {
var statearr_53058_54359 = state_52973__$1;
(statearr_53058_54359[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (16))){
var inst_52957 = (state_52973[(2)]);
var state_52973__$1 = state_52973;
var statearr_53059_54361 = state_52973__$1;
(statearr_53059_54361[(2)] = inst_52957);

(statearr_53059_54361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52974 === (10))){
var inst_52876 = (state_52973[(9)]);
var inst_52874 = (state_52973[(10)]);
var inst_52885 = cljs.core._nth(inst_52874,inst_52876);
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52973__$1,(13),out,inst_52885);
} else {
if((state_val_52974 === (18))){
var inst_52896 = (state_52973[(7)]);
var inst_52948 = cljs.core.first(inst_52896);
var state_52973__$1 = state_52973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52973__$1,(20),out,inst_52948);
} else {
if((state_val_52974 === (8))){
var inst_52875 = (state_52973[(8)]);
var inst_52876 = (state_52973[(9)]);
var inst_52879 = (inst_52876 < inst_52875);
var inst_52880 = inst_52879;
var state_52973__$1 = state_52973;
if(cljs.core.truth_(inst_52880)){
var statearr_53065_54376 = state_52973__$1;
(statearr_53065_54376[(1)] = (10));

} else {
var statearr_53068_54378 = state_52973__$1;
(statearr_53068_54378[(1)] = (11));

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
var statearr_53070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53070[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__);

(statearr_53070[(1)] = (1));

return statearr_53070;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1 = (function (state_52973){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_52973);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e53071){var ex__41954__auto__ = e53071;
var statearr_53072_54383 = state_52973;
(statearr_53072_54383[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_52973[(4)]))){
var statearr_53073_54384 = state_52973;
(statearr_53073_54384[(1)] = cljs.core.first((state_52973[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54385 = state_52973;
state_52973 = G__54385;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__ = function(state_52973){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1.call(this,state_52973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41951__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_53076 = f__42199__auto__();
(statearr_53076[(6)] = c__42198__auto__);

return statearr_53076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

return c__42198__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53081 = arguments.length;
switch (G__53081) {
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
var G__53085 = arguments.length;
switch (G__53085) {
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
var G__53112 = arguments.length;
switch (G__53112) {
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
var c__42198__auto___54427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_53145){
var state_val_53146 = (state_53145[(1)]);
if((state_val_53146 === (7))){
var inst_53140 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53152_54436 = state_53145__$1;
(statearr_53152_54436[(2)] = inst_53140);

(statearr_53152_54436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (1))){
var inst_53119 = null;
var state_53145__$1 = (function (){var statearr_53153 = state_53145;
(statearr_53153[(7)] = inst_53119);

return statearr_53153;
})();
var statearr_53154_54445 = state_53145__$1;
(statearr_53154_54445[(2)] = null);

(statearr_53154_54445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (4))){
var inst_53123 = (state_53145[(8)]);
var inst_53123__$1 = (state_53145[(2)]);
var inst_53124 = (inst_53123__$1 == null);
var inst_53125 = cljs.core.not(inst_53124);
var state_53145__$1 = (function (){var statearr_53155 = state_53145;
(statearr_53155[(8)] = inst_53123__$1);

return statearr_53155;
})();
if(inst_53125){
var statearr_53156_54452 = state_53145__$1;
(statearr_53156_54452[(1)] = (5));

} else {
var statearr_53157_54454 = state_53145__$1;
(statearr_53157_54454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (6))){
var state_53145__$1 = state_53145;
var statearr_53158_54459 = state_53145__$1;
(statearr_53158_54459[(2)] = null);

(statearr_53158_54459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (3))){
var inst_53142 = (state_53145[(2)]);
var inst_53143 = cljs.core.async.close_BANG_(out);
var state_53145__$1 = (function (){var statearr_53159 = state_53145;
(statearr_53159[(9)] = inst_53142);

return statearr_53159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53145__$1,inst_53143);
} else {
if((state_val_53146 === (2))){
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53145__$1,(4),ch);
} else {
if((state_val_53146 === (11))){
var inst_53123 = (state_53145[(8)]);
var inst_53133 = (state_53145[(2)]);
var inst_53119 = inst_53123;
var state_53145__$1 = (function (){var statearr_53162 = state_53145;
(statearr_53162[(7)] = inst_53119);

(statearr_53162[(10)] = inst_53133);

return statearr_53162;
})();
var statearr_53164_54463 = state_53145__$1;
(statearr_53164_54463[(2)] = null);

(statearr_53164_54463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (9))){
var inst_53123 = (state_53145[(8)]);
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53145__$1,(11),out,inst_53123);
} else {
if((state_val_53146 === (5))){
var inst_53119 = (state_53145[(7)]);
var inst_53123 = (state_53145[(8)]);
var inst_53128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53123,inst_53119);
var state_53145__$1 = state_53145;
if(inst_53128){
var statearr_53166_54465 = state_53145__$1;
(statearr_53166_54465[(1)] = (8));

} else {
var statearr_53167_54466 = state_53145__$1;
(statearr_53167_54466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (10))){
var inst_53137 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53168_54470 = state_53145__$1;
(statearr_53168_54470[(2)] = inst_53137);

(statearr_53168_54470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (8))){
var inst_53119 = (state_53145[(7)]);
var tmp53165 = inst_53119;
var inst_53119__$1 = tmp53165;
var state_53145__$1 = (function (){var statearr_53169 = state_53145;
(statearr_53169[(7)] = inst_53119__$1);

return statearr_53169;
})();
var statearr_53170_54472 = state_53145__$1;
(statearr_53170_54472[(2)] = null);

(statearr_53170_54472[(1)] = (2));


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
var statearr_53172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53172[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_53172[(1)] = (1));

return statearr_53172;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_53145){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_53145);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e53173){var ex__41954__auto__ = e53173;
var statearr_53174_54477 = state_53145;
(statearr_53174_54477[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_53145[(4)]))){
var statearr_53175_54479 = state_53145;
(statearr_53175_54479[(1)] = cljs.core.first((state_53145[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54482 = state_53145;
state_53145 = G__54482;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_53145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_53145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_53176 = f__42199__auto__();
(statearr_53176[(6)] = c__42198__auto___54427);

return statearr_53176;
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
var G__53207 = arguments.length;
switch (G__53207) {
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
var c__42198__auto___54490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_53268){
var state_val_53270 = (state_53268[(1)]);
if((state_val_53270 === (7))){
var inst_53251 = (state_53268[(2)]);
var state_53268__$1 = state_53268;
var statearr_53282_54491 = state_53268__$1;
(statearr_53282_54491[(2)] = inst_53251);

(statearr_53282_54491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (1))){
var inst_53217 = (new Array(n));
var inst_53218 = inst_53217;
var inst_53219 = (0);
var state_53268__$1 = (function (){var statearr_53283 = state_53268;
(statearr_53283[(7)] = inst_53218);

(statearr_53283[(8)] = inst_53219);

return statearr_53283;
})();
var statearr_53284_54497 = state_53268__$1;
(statearr_53284_54497[(2)] = null);

(statearr_53284_54497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (4))){
var inst_53223 = (state_53268[(9)]);
var inst_53223__$1 = (state_53268[(2)]);
var inst_53224 = (inst_53223__$1 == null);
var inst_53225 = cljs.core.not(inst_53224);
var state_53268__$1 = (function (){var statearr_53287 = state_53268;
(statearr_53287[(9)] = inst_53223__$1);

return statearr_53287;
})();
if(inst_53225){
var statearr_53289_54505 = state_53268__$1;
(statearr_53289_54505[(1)] = (5));

} else {
var statearr_53291_54506 = state_53268__$1;
(statearr_53291_54506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (15))){
var inst_53245 = (state_53268[(2)]);
var state_53268__$1 = state_53268;
var statearr_53294_54515 = state_53268__$1;
(statearr_53294_54515[(2)] = inst_53245);

(statearr_53294_54515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (13))){
var state_53268__$1 = state_53268;
var statearr_53296_54520 = state_53268__$1;
(statearr_53296_54520[(2)] = null);

(statearr_53296_54520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (6))){
var inst_53219 = (state_53268[(8)]);
var inst_53241 = (inst_53219 > (0));
var state_53268__$1 = state_53268;
if(cljs.core.truth_(inst_53241)){
var statearr_53309_54528 = state_53268__$1;
(statearr_53309_54528[(1)] = (12));

} else {
var statearr_53318_54530 = state_53268__$1;
(statearr_53318_54530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (3))){
var inst_53253 = (state_53268[(2)]);
var state_53268__$1 = state_53268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53268__$1,inst_53253);
} else {
if((state_val_53270 === (12))){
var inst_53218 = (state_53268[(7)]);
var inst_53243 = cljs.core.vec(inst_53218);
var state_53268__$1 = state_53268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53268__$1,(15),out,inst_53243);
} else {
if((state_val_53270 === (2))){
var state_53268__$1 = state_53268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53268__$1,(4),ch);
} else {
if((state_val_53270 === (11))){
var inst_53235 = (state_53268[(2)]);
var inst_53236 = (new Array(n));
var inst_53218 = inst_53236;
var inst_53219 = (0);
var state_53268__$1 = (function (){var statearr_53347 = state_53268;
(statearr_53347[(7)] = inst_53218);

(statearr_53347[(8)] = inst_53219);

(statearr_53347[(10)] = inst_53235);

return statearr_53347;
})();
var statearr_53348_54550 = state_53268__$1;
(statearr_53348_54550[(2)] = null);

(statearr_53348_54550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (9))){
var inst_53218 = (state_53268[(7)]);
var inst_53233 = cljs.core.vec(inst_53218);
var state_53268__$1 = state_53268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53268__$1,(11),out,inst_53233);
} else {
if((state_val_53270 === (5))){
var inst_53228 = (state_53268[(11)]);
var inst_53218 = (state_53268[(7)]);
var inst_53219 = (state_53268[(8)]);
var inst_53223 = (state_53268[(9)]);
var inst_53227 = (inst_53218[inst_53219] = inst_53223);
var inst_53228__$1 = (inst_53219 + (1));
var inst_53229 = (inst_53228__$1 < n);
var state_53268__$1 = (function (){var statearr_53349 = state_53268;
(statearr_53349[(11)] = inst_53228__$1);

(statearr_53349[(12)] = inst_53227);

return statearr_53349;
})();
if(cljs.core.truth_(inst_53229)){
var statearr_53350_54560 = state_53268__$1;
(statearr_53350_54560[(1)] = (8));

} else {
var statearr_53351_54561 = state_53268__$1;
(statearr_53351_54561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (14))){
var inst_53248 = (state_53268[(2)]);
var inst_53249 = cljs.core.async.close_BANG_(out);
var state_53268__$1 = (function (){var statearr_53353 = state_53268;
(statearr_53353[(13)] = inst_53248);

return statearr_53353;
})();
var statearr_53354_54569 = state_53268__$1;
(statearr_53354_54569[(2)] = inst_53249);

(statearr_53354_54569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (10))){
var inst_53239 = (state_53268[(2)]);
var state_53268__$1 = state_53268;
var statearr_53357_54576 = state_53268__$1;
(statearr_53357_54576[(2)] = inst_53239);

(statearr_53357_54576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53270 === (8))){
var inst_53228 = (state_53268[(11)]);
var inst_53218 = (state_53268[(7)]);
var tmp53352 = inst_53218;
var inst_53218__$1 = tmp53352;
var inst_53219 = inst_53228;
var state_53268__$1 = (function (){var statearr_53371 = state_53268;
(statearr_53371[(7)] = inst_53218__$1);

(statearr_53371[(8)] = inst_53219);

return statearr_53371;
})();
var statearr_53373_54592 = state_53268__$1;
(statearr_53373_54592[(2)] = null);

(statearr_53373_54592[(1)] = (2));


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
var statearr_53384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53384[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_53384[(1)] = (1));

return statearr_53384;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_53268){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_53268);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e53385){var ex__41954__auto__ = e53385;
var statearr_53386_54630 = state_53268;
(statearr_53386_54630[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_53268[(4)]))){
var statearr_53387_54631 = state_53268;
(statearr_53387_54631[(1)] = cljs.core.first((state_53268[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54633 = state_53268;
state_53268 = G__54633;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_53268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_53268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_53388 = f__42199__auto__();
(statearr_53388[(6)] = c__42198__auto___54490);

return statearr_53388;
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
var G__53390 = arguments.length;
switch (G__53390) {
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
var c__42198__auto___54645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_53435){
var state_val_53436 = (state_53435[(1)]);
if((state_val_53436 === (7))){
var inst_53431 = (state_53435[(2)]);
var state_53435__$1 = state_53435;
var statearr_53440_54663 = state_53435__$1;
(statearr_53440_54663[(2)] = inst_53431);

(statearr_53440_54663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (1))){
var inst_53391 = [];
var inst_53392 = inst_53391;
var inst_53393 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53435__$1 = (function (){var statearr_53441 = state_53435;
(statearr_53441[(7)] = inst_53393);

(statearr_53441[(8)] = inst_53392);

return statearr_53441;
})();
var statearr_53442_54668 = state_53435__$1;
(statearr_53442_54668[(2)] = null);

(statearr_53442_54668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (4))){
var inst_53396 = (state_53435[(9)]);
var inst_53396__$1 = (state_53435[(2)]);
var inst_53397 = (inst_53396__$1 == null);
var inst_53398 = cljs.core.not(inst_53397);
var state_53435__$1 = (function (){var statearr_53443 = state_53435;
(statearr_53443[(9)] = inst_53396__$1);

return statearr_53443;
})();
if(inst_53398){
var statearr_53444_54672 = state_53435__$1;
(statearr_53444_54672[(1)] = (5));

} else {
var statearr_53445_54673 = state_53435__$1;
(statearr_53445_54673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (15))){
var inst_53392 = (state_53435[(8)]);
var inst_53423 = cljs.core.vec(inst_53392);
var state_53435__$1 = state_53435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53435__$1,(18),out,inst_53423);
} else {
if((state_val_53436 === (13))){
var inst_53418 = (state_53435[(2)]);
var state_53435__$1 = state_53435;
var statearr_53446_54675 = state_53435__$1;
(statearr_53446_54675[(2)] = inst_53418);

(statearr_53446_54675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (6))){
var inst_53392 = (state_53435[(8)]);
var inst_53420 = inst_53392.length;
var inst_53421 = (inst_53420 > (0));
var state_53435__$1 = state_53435;
if(cljs.core.truth_(inst_53421)){
var statearr_53447_54676 = state_53435__$1;
(statearr_53447_54676[(1)] = (15));

} else {
var statearr_53448_54677 = state_53435__$1;
(statearr_53448_54677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (17))){
var inst_53428 = (state_53435[(2)]);
var inst_53429 = cljs.core.async.close_BANG_(out);
var state_53435__$1 = (function (){var statearr_53449 = state_53435;
(statearr_53449[(10)] = inst_53428);

return statearr_53449;
})();
var statearr_53450_54678 = state_53435__$1;
(statearr_53450_54678[(2)] = inst_53429);

(statearr_53450_54678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (3))){
var inst_53433 = (state_53435[(2)]);
var state_53435__$1 = state_53435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53435__$1,inst_53433);
} else {
if((state_val_53436 === (12))){
var inst_53392 = (state_53435[(8)]);
var inst_53411 = cljs.core.vec(inst_53392);
var state_53435__$1 = state_53435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53435__$1,(14),out,inst_53411);
} else {
if((state_val_53436 === (2))){
var state_53435__$1 = state_53435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53435__$1,(4),ch);
} else {
if((state_val_53436 === (11))){
var inst_53400 = (state_53435[(11)]);
var inst_53396 = (state_53435[(9)]);
var inst_53392 = (state_53435[(8)]);
var inst_53408 = inst_53392.push(inst_53396);
var tmp53455 = inst_53392;
var inst_53392__$1 = tmp53455;
var inst_53393 = inst_53400;
var state_53435__$1 = (function (){var statearr_53456 = state_53435;
(statearr_53456[(7)] = inst_53393);

(statearr_53456[(12)] = inst_53408);

(statearr_53456[(8)] = inst_53392__$1);

return statearr_53456;
})();
var statearr_53457_54681 = state_53435__$1;
(statearr_53457_54681[(2)] = null);

(statearr_53457_54681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (9))){
var inst_53393 = (state_53435[(7)]);
var inst_53404 = cljs.core.keyword_identical_QMARK_(inst_53393,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_53435__$1 = state_53435;
var statearr_53458_54683 = state_53435__$1;
(statearr_53458_54683[(2)] = inst_53404);

(statearr_53458_54683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (5))){
var inst_53400 = (state_53435[(11)]);
var inst_53396 = (state_53435[(9)]);
var inst_53393 = (state_53435[(7)]);
var inst_53401 = (state_53435[(13)]);
var inst_53400__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_53396) : f.call(null,inst_53396));
var inst_53401__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53400__$1,inst_53393);
var state_53435__$1 = (function (){var statearr_53461 = state_53435;
(statearr_53461[(11)] = inst_53400__$1);

(statearr_53461[(13)] = inst_53401__$1);

return statearr_53461;
})();
if(inst_53401__$1){
var statearr_53462_54684 = state_53435__$1;
(statearr_53462_54684[(1)] = (8));

} else {
var statearr_53463_54685 = state_53435__$1;
(statearr_53463_54685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (14))){
var inst_53400 = (state_53435[(11)]);
var inst_53396 = (state_53435[(9)]);
var inst_53413 = (state_53435[(2)]);
var inst_53414 = [];
var inst_53415 = inst_53414.push(inst_53396);
var inst_53392 = inst_53414;
var inst_53393 = inst_53400;
var state_53435__$1 = (function (){var statearr_53464 = state_53435;
(statearr_53464[(14)] = inst_53413);

(statearr_53464[(7)] = inst_53393);

(statearr_53464[(8)] = inst_53392);

(statearr_53464[(15)] = inst_53415);

return statearr_53464;
})();
var statearr_53465_54686 = state_53435__$1;
(statearr_53465_54686[(2)] = null);

(statearr_53465_54686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (16))){
var state_53435__$1 = state_53435;
var statearr_53467_54687 = state_53435__$1;
(statearr_53467_54687[(2)] = null);

(statearr_53467_54687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (10))){
var inst_53406 = (state_53435[(2)]);
var state_53435__$1 = state_53435;
if(cljs.core.truth_(inst_53406)){
var statearr_53468_54689 = state_53435__$1;
(statearr_53468_54689[(1)] = (11));

} else {
var statearr_53469_54690 = state_53435__$1;
(statearr_53469_54690[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (18))){
var inst_53425 = (state_53435[(2)]);
var state_53435__$1 = state_53435;
var statearr_53470_54691 = state_53435__$1;
(statearr_53470_54691[(2)] = inst_53425);

(statearr_53470_54691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53436 === (8))){
var inst_53401 = (state_53435[(13)]);
var state_53435__$1 = state_53435;
var statearr_53471_54695 = state_53435__$1;
(statearr_53471_54695[(2)] = inst_53401);

(statearr_53471_54695[(1)] = (10));


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
var statearr_53472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53472[(0)] = cljs$core$async$state_machine__41951__auto__);

(statearr_53472[(1)] = (1));

return statearr_53472;
});
var cljs$core$async$state_machine__41951__auto____1 = (function (state_53435){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_53435);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e53473){var ex__41954__auto__ = e53473;
var statearr_53474_54699 = state_53435;
(statearr_53474_54699[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_53435[(4)]))){
var statearr_53478_54701 = state_53435;
(statearr_53478_54701[(1)] = cljs.core.first((state_53435[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54702 = state_53435;
state_53435 = G__54702;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
cljs$core$async$state_machine__41951__auto__ = function(state_53435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41951__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41951__auto____1.call(this,state_53435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41951__auto____0;
cljs$core$async$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41951__auto____1;
return cljs$core$async$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_53483 = f__42199__auto__();
(statearr_53483[(6)] = c__42198__auto___54645);

return statearr_53483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
