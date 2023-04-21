goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40819 = arguments.length;
switch (G__40819) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40829 = (function (f,blockable,meta40830){
this.f = f;
this.blockable = blockable;
this.meta40830 = meta40830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40831,meta40830__$1){
var self__ = this;
var _40831__$1 = this;
return (new cljs.core.async.t_cljs$core$async40829(self__.f,self__.blockable,meta40830__$1));
}));

(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40831){
var self__ = this;
var _40831__$1 = this;
return self__.meta40830;
}));

(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40830","meta40830",-500990412,null)], null);
}));

(cljs.core.async.t_cljs$core$async40829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40829");

(cljs.core.async.t_cljs$core$async40829.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40829.
 */
cljs.core.async.__GT_t_cljs$core$async40829 = (function cljs$core$async$__GT_t_cljs$core$async40829(f__$1,blockable__$1,meta40830){
return (new cljs.core.async.t_cljs$core$async40829(f__$1,blockable__$1,meta40830));
});

}

return (new cljs.core.async.t_cljs$core$async40829(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40860 = arguments.length;
switch (G__40860) {
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
var G__40869 = arguments.length;
switch (G__40869) {
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
var G__40877 = arguments.length;
switch (G__40877) {
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
var val_44190 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44190) : fn1.call(null,val_44190));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44190) : fn1.call(null,val_44190));
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
var G__40885 = arguments.length;
switch (G__40885) {
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
var n__5636__auto___44199 = n;
var x_44201 = (0);
while(true){
if((x_44201 < n__5636__auto___44199)){
(a[x_44201] = x_44201);

var G__44202 = (x_44201 + (1));
x_44201 = G__44202;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40890 = (function (flag,meta40891){
this.flag = flag;
this.meta40891 = meta40891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40892,meta40891__$1){
var self__ = this;
var _40892__$1 = this;
return (new cljs.core.async.t_cljs$core$async40890(self__.flag,meta40891__$1));
}));

(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40892){
var self__ = this;
var _40892__$1 = this;
return self__.meta40891;
}));

(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40891","meta40891",1924157531,null)], null);
}));

(cljs.core.async.t_cljs$core$async40890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40890");

(cljs.core.async.t_cljs$core$async40890.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40890.
 */
cljs.core.async.__GT_t_cljs$core$async40890 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40890(flag__$1,meta40891){
return (new cljs.core.async.t_cljs$core$async40890(flag__$1,meta40891));
});

}

return (new cljs.core.async.t_cljs$core$async40890(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40901 = (function (flag,cb,meta40902){
this.flag = flag;
this.cb = cb;
this.meta40902 = meta40902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40903,meta40902__$1){
var self__ = this;
var _40903__$1 = this;
return (new cljs.core.async.t_cljs$core$async40901(self__.flag,self__.cb,meta40902__$1));
}));

(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40903){
var self__ = this;
var _40903__$1 = this;
return self__.meta40902;
}));

(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40902","meta40902",-578318107,null)], null);
}));

(cljs.core.async.t_cljs$core$async40901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40901");

(cljs.core.async.t_cljs$core$async40901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40901.
 */
cljs.core.async.__GT_t_cljs$core$async40901 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40901(flag__$1,cb__$1,meta40902){
return (new cljs.core.async.t_cljs$core$async40901(flag__$1,cb__$1,meta40902));
});

}

return (new cljs.core.async.t_cljs$core$async40901(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40917_SHARP_){
var G__40930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40917_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40930) : fret.call(null,G__40930));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40918_SHARP_){
var G__40940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40918_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40940) : fret.call(null,G__40940));
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
var G__44218 = (i + (1));
i = G__44218;
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
var len__5769__auto___44223 = arguments.length;
var i__5770__auto___44224 = (0);
while(true){
if((i__5770__auto___44224 < len__5769__auto___44223)){
args__5775__auto__.push((arguments[i__5770__auto___44224]));

var G__44226 = (i__5770__auto___44224 + (1));
i__5770__auto___44224 = G__44226;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40956){
var map__40957 = p__40956;
var map__40957__$1 = cljs.core.__destructure_map(map__40957);
var opts = map__40957__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40946){
var G__40947 = cljs.core.first(seq40946);
var seq40946__$1 = cljs.core.next(seq40946);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40947,seq40946__$1);
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
var G__40967 = arguments.length;
switch (G__40967) {
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
var c__33523__auto___44232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_40999){
var state_val_41000 = (state_40999[(1)]);
if((state_val_41000 === (7))){
var inst_40995 = (state_40999[(2)]);
var state_40999__$1 = state_40999;
var statearr_41015_44233 = state_40999__$1;
(statearr_41015_44233[(2)] = inst_40995);

(statearr_41015_44233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (1))){
var state_40999__$1 = state_40999;
var statearr_41024_44234 = state_40999__$1;
(statearr_41024_44234[(2)] = null);

(statearr_41024_44234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (4))){
var inst_40978 = (state_40999[(7)]);
var inst_40978__$1 = (state_40999[(2)]);
var inst_40979 = (inst_40978__$1 == null);
var state_40999__$1 = (function (){var statearr_41026 = state_40999;
(statearr_41026[(7)] = inst_40978__$1);

return statearr_41026;
})();
if(cljs.core.truth_(inst_40979)){
var statearr_41027_44236 = state_40999__$1;
(statearr_41027_44236[(1)] = (5));

} else {
var statearr_41028_44238 = state_40999__$1;
(statearr_41028_44238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (13))){
var state_40999__$1 = state_40999;
var statearr_41030_44242 = state_40999__$1;
(statearr_41030_44242[(2)] = null);

(statearr_41030_44242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (6))){
var inst_40978 = (state_40999[(7)]);
var state_40999__$1 = state_40999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40999__$1,(11),to,inst_40978);
} else {
if((state_val_41000 === (3))){
var inst_40997 = (state_40999[(2)]);
var state_40999__$1 = state_40999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40999__$1,inst_40997);
} else {
if((state_val_41000 === (12))){
var state_40999__$1 = state_40999;
var statearr_41038_44252 = state_40999__$1;
(statearr_41038_44252[(2)] = null);

(statearr_41038_44252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (2))){
var state_40999__$1 = state_40999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40999__$1,(4),from);
} else {
if((state_val_41000 === (11))){
var inst_40988 = (state_40999[(2)]);
var state_40999__$1 = state_40999;
if(cljs.core.truth_(inst_40988)){
var statearr_41043_44256 = state_40999__$1;
(statearr_41043_44256[(1)] = (12));

} else {
var statearr_41045_44258 = state_40999__$1;
(statearr_41045_44258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (9))){
var state_40999__$1 = state_40999;
var statearr_41046_44259 = state_40999__$1;
(statearr_41046_44259[(2)] = null);

(statearr_41046_44259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (5))){
var state_40999__$1 = state_40999;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41048_44261 = state_40999__$1;
(statearr_41048_44261[(1)] = (8));

} else {
var statearr_41051_44262 = state_40999__$1;
(statearr_41051_44262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (14))){
var inst_40993 = (state_40999[(2)]);
var state_40999__$1 = state_40999;
var statearr_41052_44263 = state_40999__$1;
(statearr_41052_44263[(2)] = inst_40993);

(statearr_41052_44263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (10))){
var inst_40985 = (state_40999[(2)]);
var state_40999__$1 = state_40999;
var statearr_41053_44270 = state_40999__$1;
(statearr_41053_44270[(2)] = inst_40985);

(statearr_41053_44270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41000 === (8))){
var inst_40982 = cljs.core.async.close_BANG_(to);
var state_40999__$1 = state_40999;
var statearr_41056_44271 = state_40999__$1;
(statearr_41056_44271[(2)] = inst_40982);

(statearr_41056_44271[(1)] = (10));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_41059 = [null,null,null,null,null,null,null,null];
(statearr_41059[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_41059[(1)] = (1));

return statearr_41059;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_40999){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_40999);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41060){var ex__33261__auto__ = e41060;
var statearr_41061_44272 = state_40999;
(statearr_41061_44272[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_40999[(4)]))){
var statearr_41062_44274 = state_40999;
(statearr_41062_44274[(1)] = cljs.core.first((state_40999[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44275 = state_40999;
state_40999 = G__44275;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_40999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_40999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41080 = f__33524__auto__();
(statearr_41080[(6)] = c__33523__auto___44232);

return statearr_41080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var process__$1 = (function (p__41088){
var vec__41089 = p__41088;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41089,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41089,(1),null);
var job = vec__41089;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33523__auto___44277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41097){
var state_val_41098 = (state_41097[(1)]);
if((state_val_41098 === (1))){
var state_41097__$1 = state_41097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41097__$1,(2),res,v);
} else {
if((state_val_41098 === (2))){
var inst_41094 = (state_41097[(2)]);
var inst_41095 = cljs.core.async.close_BANG_(res);
var state_41097__$1 = (function (){var statearr_41100 = state_41097;
(statearr_41100[(7)] = inst_41094);

return statearr_41100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41097__$1,inst_41095);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_41101 = [null,null,null,null,null,null,null,null];
(statearr_41101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__);

(statearr_41101[(1)] = (1));

return statearr_41101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1 = (function (state_41097){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41097);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41102){var ex__33261__auto__ = e41102;
var statearr_41103_44290 = state_41097;
(statearr_41103_44290[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41097[(4)]))){
var statearr_41104_44291 = state_41097;
(statearr_41104_44291[(1)] = cljs.core.first((state_41097[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44292 = state_41097;
state_41097 = G__44292;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = function(state_41097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1.call(this,state_41097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41106 = f__33524__auto__();
(statearr_41106[(6)] = c__33523__auto___44277);

return statearr_41106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41108){
var vec__41109 = p__41108;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41109,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41109,(1),null);
var job = vec__41109;
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
var n__5636__auto___44298 = n;
var __44299 = (0);
while(true){
if((__44299 < n__5636__auto___44298)){
var G__41118_44300 = type;
var G__41118_44301__$1 = (((G__41118_44300 instanceof cljs.core.Keyword))?G__41118_44300.fqn:null);
switch (G__41118_44301__$1) {
case "compute":
var c__33523__auto___44303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44299,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = ((function (__44299,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function (state_41131){
var state_val_41132 = (state_41131[(1)]);
if((state_val_41132 === (1))){
var state_41131__$1 = state_41131;
var statearr_41133_44307 = state_41131__$1;
(statearr_41133_44307[(2)] = null);

(statearr_41133_44307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (2))){
var state_41131__$1 = state_41131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41131__$1,(4),jobs);
} else {
if((state_val_41132 === (3))){
var inst_41129 = (state_41131[(2)]);
var state_41131__$1 = state_41131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41131__$1,inst_41129);
} else {
if((state_val_41132 === (4))){
var inst_41121 = (state_41131[(2)]);
var inst_41122 = process__$1(inst_41121);
var state_41131__$1 = state_41131;
if(cljs.core.truth_(inst_41122)){
var statearr_41136_44312 = state_41131__$1;
(statearr_41136_44312[(1)] = (5));

} else {
var statearr_41137_44313 = state_41131__$1;
(statearr_41137_44313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (5))){
var state_41131__$1 = state_41131;
var statearr_41140_44314 = state_41131__$1;
(statearr_41140_44314[(2)] = null);

(statearr_41140_44314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (6))){
var state_41131__$1 = state_41131;
var statearr_41141_44315 = state_41131__$1;
(statearr_41141_44315[(2)] = null);

(statearr_41141_44315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41132 === (7))){
var inst_41127 = (state_41131[(2)]);
var state_41131__$1 = state_41131;
var statearr_41143_44317 = state_41131__$1;
(statearr_41143_44317[(2)] = inst_41127);

(statearr_41143_44317[(1)] = (3));


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
});})(__44299,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
;
return ((function (__44299,switch__33257__auto__,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_41144 = [null,null,null,null,null,null,null];
(statearr_41144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__);

(statearr_41144[(1)] = (1));

return statearr_41144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1 = (function (state_41131){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41131);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41145){var ex__33261__auto__ = e41145;
var statearr_41146_44334 = state_41131;
(statearr_41146_44334[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41131[(4)]))){
var statearr_41147_44335 = state_41131;
(statearr_41147_44335[(1)] = cljs.core.first((state_41131[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44340 = state_41131;
state_41131 = G__44340;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = function(state_41131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1.call(this,state_41131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__;
})()
;})(__44299,switch__33257__auto__,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
})();
var state__33525__auto__ = (function (){var statearr_41148 = f__33524__auto__();
(statearr_41148[(6)] = c__33523__auto___44303);

return statearr_41148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
});})(__44299,c__33523__auto___44303,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
);


break;
case "async":
var c__33523__auto___44342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44299,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = ((function (__44299,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function (state_41161){
var state_val_41162 = (state_41161[(1)]);
if((state_val_41162 === (1))){
var state_41161__$1 = state_41161;
var statearr_41163_44344 = state_41161__$1;
(statearr_41163_44344[(2)] = null);

(statearr_41163_44344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41162 === (2))){
var state_41161__$1 = state_41161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41161__$1,(4),jobs);
} else {
if((state_val_41162 === (3))){
var inst_41159 = (state_41161[(2)]);
var state_41161__$1 = state_41161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41161__$1,inst_41159);
} else {
if((state_val_41162 === (4))){
var inst_41151 = (state_41161[(2)]);
var inst_41152 = async(inst_41151);
var state_41161__$1 = state_41161;
if(cljs.core.truth_(inst_41152)){
var statearr_41169_44348 = state_41161__$1;
(statearr_41169_44348[(1)] = (5));

} else {
var statearr_41170_44349 = state_41161__$1;
(statearr_41170_44349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41162 === (5))){
var state_41161__$1 = state_41161;
var statearr_41176_44350 = state_41161__$1;
(statearr_41176_44350[(2)] = null);

(statearr_41176_44350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41162 === (6))){
var state_41161__$1 = state_41161;
var statearr_41180_44358 = state_41161__$1;
(statearr_41180_44358[(2)] = null);

(statearr_41180_44358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41162 === (7))){
var inst_41157 = (state_41161[(2)]);
var state_41161__$1 = state_41161;
var statearr_41181_44363 = state_41161__$1;
(statearr_41181_44363[(2)] = inst_41157);

(statearr_41181_44363[(1)] = (3));


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
});})(__44299,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
;
return ((function (__44299,switch__33257__auto__,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_41182 = [null,null,null,null,null,null,null];
(statearr_41182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__);

(statearr_41182[(1)] = (1));

return statearr_41182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1 = (function (state_41161){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41161);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41183){var ex__33261__auto__ = e41183;
var statearr_41184_44374 = state_41161;
(statearr_41184_44374[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41161[(4)]))){
var statearr_41185_44380 = state_41161;
(statearr_41185_44380[(1)] = cljs.core.first((state_41161[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44381 = state_41161;
state_41161 = G__44381;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = function(state_41161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1.call(this,state_41161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__;
})()
;})(__44299,switch__33257__auto__,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
})();
var state__33525__auto__ = (function (){var statearr_41188 = f__33524__auto__();
(statearr_41188[(6)] = c__33523__auto___44342);

return statearr_41188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
});})(__44299,c__33523__auto___44342,G__41118_44300,G__41118_44301__$1,n__5636__auto___44298,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41118_44301__$1)].join('')));

}

var G__44385 = (__44299 + (1));
__44299 = G__44385;
continue;
} else {
}
break;
}

var c__33523__auto___44386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41222){
var state_val_41223 = (state_41222[(1)]);
if((state_val_41223 === (7))){
var inst_41218 = (state_41222[(2)]);
var state_41222__$1 = state_41222;
var statearr_41225_44387 = state_41222__$1;
(statearr_41225_44387[(2)] = inst_41218);

(statearr_41225_44387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41223 === (1))){
var state_41222__$1 = state_41222;
var statearr_41226_44388 = state_41222__$1;
(statearr_41226_44388[(2)] = null);

(statearr_41226_44388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41223 === (4))){
var inst_41196 = (state_41222[(7)]);
var inst_41196__$1 = (state_41222[(2)]);
var inst_41197 = (inst_41196__$1 == null);
var state_41222__$1 = (function (){var statearr_41230 = state_41222;
(statearr_41230[(7)] = inst_41196__$1);

return statearr_41230;
})();
if(cljs.core.truth_(inst_41197)){
var statearr_41231_44391 = state_41222__$1;
(statearr_41231_44391[(1)] = (5));

} else {
var statearr_41233_44392 = state_41222__$1;
(statearr_41233_44392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41223 === (6))){
var inst_41196 = (state_41222[(7)]);
var inst_41203 = (state_41222[(8)]);
var inst_41203__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41207 = [inst_41196,inst_41203__$1];
var inst_41208 = (new cljs.core.PersistentVector(null,2,(5),inst_41206,inst_41207,null));
var state_41222__$1 = (function (){var statearr_41234 = state_41222;
(statearr_41234[(8)] = inst_41203__$1);

return statearr_41234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41222__$1,(8),jobs,inst_41208);
} else {
if((state_val_41223 === (3))){
var inst_41220 = (state_41222[(2)]);
var state_41222__$1 = state_41222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41222__$1,inst_41220);
} else {
if((state_val_41223 === (2))){
var state_41222__$1 = state_41222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41222__$1,(4),from);
} else {
if((state_val_41223 === (9))){
var inst_41212 = (state_41222[(2)]);
var state_41222__$1 = (function (){var statearr_41238 = state_41222;
(statearr_41238[(9)] = inst_41212);

return statearr_41238;
})();
var statearr_41242_44393 = state_41222__$1;
(statearr_41242_44393[(2)] = null);

(statearr_41242_44393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41223 === (5))){
var inst_41201 = cljs.core.async.close_BANG_(jobs);
var state_41222__$1 = state_41222;
var statearr_41244_44394 = state_41222__$1;
(statearr_41244_44394[(2)] = inst_41201);

(statearr_41244_44394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41223 === (8))){
var inst_41203 = (state_41222[(8)]);
var inst_41210 = (state_41222[(2)]);
var state_41222__$1 = (function (){var statearr_41245 = state_41222;
(statearr_41245[(10)] = inst_41210);

return statearr_41245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41222__$1,(9),results,inst_41203);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_41246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__);

(statearr_41246[(1)] = (1));

return statearr_41246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1 = (function (state_41222){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41222);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41249){var ex__33261__auto__ = e41249;
var statearr_41250_44404 = state_41222;
(statearr_41250_44404[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41222[(4)]))){
var statearr_41251_44405 = state_41222;
(statearr_41251_44405[(1)] = cljs.core.first((state_41222[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44406 = state_41222;
state_41222 = G__44406;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = function(state_41222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1.call(this,state_41222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41257 = f__33524__auto__();
(statearr_41257[(6)] = c__33523__auto___44386);

return statearr_41257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


var c__33523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41316){
var state_val_41317 = (state_41316[(1)]);
if((state_val_41317 === (7))){
var inst_41311 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41321_44407 = state_41316__$1;
(statearr_41321_44407[(2)] = inst_41311);

(statearr_41321_44407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (20))){
var state_41316__$1 = state_41316;
var statearr_41322_44408 = state_41316__$1;
(statearr_41322_44408[(2)] = null);

(statearr_41322_44408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (1))){
var state_41316__$1 = state_41316;
var statearr_41323_44412 = state_41316__$1;
(statearr_41323_44412[(2)] = null);

(statearr_41323_44412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (4))){
var inst_41278 = (state_41316[(7)]);
var inst_41278__$1 = (state_41316[(2)]);
var inst_41279 = (inst_41278__$1 == null);
var state_41316__$1 = (function (){var statearr_41325 = state_41316;
(statearr_41325[(7)] = inst_41278__$1);

return statearr_41325;
})();
if(cljs.core.truth_(inst_41279)){
var statearr_41326_44413 = state_41316__$1;
(statearr_41326_44413[(1)] = (5));

} else {
var statearr_41327_44414 = state_41316__$1;
(statearr_41327_44414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (15))){
var inst_41293 = (state_41316[(8)]);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41316__$1,(18),to,inst_41293);
} else {
if((state_val_41317 === (21))){
var inst_41306 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41329_44417 = state_41316__$1;
(statearr_41329_44417[(2)] = inst_41306);

(statearr_41329_44417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (13))){
var inst_41308 = (state_41316[(2)]);
var state_41316__$1 = (function (){var statearr_41330 = state_41316;
(statearr_41330[(9)] = inst_41308);

return statearr_41330;
})();
var statearr_41331_44421 = state_41316__$1;
(statearr_41331_44421[(2)] = null);

(statearr_41331_44421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (6))){
var inst_41278 = (state_41316[(7)]);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41316__$1,(11),inst_41278);
} else {
if((state_val_41317 === (17))){
var inst_41301 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
if(cljs.core.truth_(inst_41301)){
var statearr_41336_44422 = state_41316__$1;
(statearr_41336_44422[(1)] = (19));

} else {
var statearr_41338_44423 = state_41316__$1;
(statearr_41338_44423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (3))){
var inst_41313 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41316__$1,inst_41313);
} else {
if((state_val_41317 === (12))){
var inst_41290 = (state_41316[(10)]);
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41316__$1,(14),inst_41290);
} else {
if((state_val_41317 === (2))){
var state_41316__$1 = state_41316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41316__$1,(4),results);
} else {
if((state_val_41317 === (19))){
var state_41316__$1 = state_41316;
var statearr_41340_44434 = state_41316__$1;
(statearr_41340_44434[(2)] = null);

(statearr_41340_44434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (11))){
var inst_41290 = (state_41316[(2)]);
var state_41316__$1 = (function (){var statearr_41341 = state_41316;
(statearr_41341[(10)] = inst_41290);

return statearr_41341;
})();
var statearr_41342_44438 = state_41316__$1;
(statearr_41342_44438[(2)] = null);

(statearr_41342_44438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (9))){
var state_41316__$1 = state_41316;
var statearr_41344_44439 = state_41316__$1;
(statearr_41344_44439[(2)] = null);

(statearr_41344_44439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (5))){
var state_41316__$1 = state_41316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41345_44440 = state_41316__$1;
(statearr_41345_44440[(1)] = (8));

} else {
var statearr_41346_44441 = state_41316__$1;
(statearr_41346_44441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (14))){
var inst_41295 = (state_41316[(11)]);
var inst_41293 = (state_41316[(8)]);
var inst_41293__$1 = (state_41316[(2)]);
var inst_41294 = (inst_41293__$1 == null);
var inst_41295__$1 = cljs.core.not(inst_41294);
var state_41316__$1 = (function (){var statearr_41347 = state_41316;
(statearr_41347[(11)] = inst_41295__$1);

(statearr_41347[(8)] = inst_41293__$1);

return statearr_41347;
})();
if(inst_41295__$1){
var statearr_41348_44442 = state_41316__$1;
(statearr_41348_44442[(1)] = (15));

} else {
var statearr_41349_44443 = state_41316__$1;
(statearr_41349_44443[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (16))){
var inst_41295 = (state_41316[(11)]);
var state_41316__$1 = state_41316;
var statearr_41350_44448 = state_41316__$1;
(statearr_41350_44448[(2)] = inst_41295);

(statearr_41350_44448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (10))){
var inst_41286 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41351_44456 = state_41316__$1;
(statearr_41351_44456[(2)] = inst_41286);

(statearr_41351_44456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (18))){
var inst_41298 = (state_41316[(2)]);
var state_41316__$1 = state_41316;
var statearr_41352_44457 = state_41316__$1;
(statearr_41352_44457[(2)] = inst_41298);

(statearr_41352_44457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41317 === (8))){
var inst_41283 = cljs.core.async.close_BANG_(to);
var state_41316__$1 = state_41316;
var statearr_41355_44459 = state_41316__$1;
(statearr_41355_44459[(2)] = inst_41283);

(statearr_41355_44459[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_41358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__);

(statearr_41358[(1)] = (1));

return statearr_41358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1 = (function (state_41316){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41316);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41359){var ex__33261__auto__ = e41359;
var statearr_41360_44460 = state_41316;
(statearr_41360_44460[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41316[(4)]))){
var statearr_41361_44461 = state_41316;
(statearr_41361_44461[(1)] = cljs.core.first((state_41316[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44465 = state_41316;
state_41316 = G__44465;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__ = function(state_41316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1.call(this,state_41316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41364 = f__33524__auto__();
(statearr_41364[(6)] = c__33523__auto__);

return statearr_41364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

return c__33523__auto__;
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
var G__41366 = arguments.length;
switch (G__41366) {
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
var G__41377 = arguments.length;
switch (G__41377) {
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
var G__41386 = arguments.length;
switch (G__41386) {
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
var c__33523__auto___44477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41418){
var state_val_41419 = (state_41418[(1)]);
if((state_val_41419 === (7))){
var inst_41414 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41428_44478 = state_41418__$1;
(statearr_41428_44478[(2)] = inst_41414);

(statearr_41428_44478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (1))){
var state_41418__$1 = state_41418;
var statearr_41429_44479 = state_41418__$1;
(statearr_41429_44479[(2)] = null);

(statearr_41429_44479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (4))){
var inst_41393 = (state_41418[(7)]);
var inst_41393__$1 = (state_41418[(2)]);
var inst_41394 = (inst_41393__$1 == null);
var state_41418__$1 = (function (){var statearr_41430 = state_41418;
(statearr_41430[(7)] = inst_41393__$1);

return statearr_41430;
})();
if(cljs.core.truth_(inst_41394)){
var statearr_41432_44480 = state_41418__$1;
(statearr_41432_44480[(1)] = (5));

} else {
var statearr_41434_44481 = state_41418__$1;
(statearr_41434_44481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (13))){
var state_41418__$1 = state_41418;
var statearr_41436_44483 = state_41418__$1;
(statearr_41436_44483[(2)] = null);

(statearr_41436_44483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (6))){
var inst_41393 = (state_41418[(7)]);
var inst_41401 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41393) : p.call(null,inst_41393));
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41401)){
var statearr_41438_44484 = state_41418__$1;
(statearr_41438_44484[(1)] = (9));

} else {
var statearr_41441_44485 = state_41418__$1;
(statearr_41441_44485[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (3))){
var inst_41416 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41418__$1,inst_41416);
} else {
if((state_val_41419 === (12))){
var state_41418__$1 = state_41418;
var statearr_41450_44486 = state_41418__$1;
(statearr_41450_44486[(2)] = null);

(statearr_41450_44486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (2))){
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41418__$1,(4),ch);
} else {
if((state_val_41419 === (11))){
var inst_41393 = (state_41418[(7)]);
var inst_41405 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41418__$1,(8),inst_41405,inst_41393);
} else {
if((state_val_41419 === (9))){
var state_41418__$1 = state_41418;
var statearr_41451_44487 = state_41418__$1;
(statearr_41451_44487[(2)] = tc);

(statearr_41451_44487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (5))){
var inst_41397 = cljs.core.async.close_BANG_(tc);
var inst_41398 = cljs.core.async.close_BANG_(fc);
var state_41418__$1 = (function (){var statearr_41452 = state_41418;
(statearr_41452[(8)] = inst_41397);

return statearr_41452;
})();
var statearr_41453_44488 = state_41418__$1;
(statearr_41453_44488[(2)] = inst_41398);

(statearr_41453_44488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (14))){
var inst_41412 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41454_44489 = state_41418__$1;
(statearr_41454_44489[(2)] = inst_41412);

(statearr_41454_44489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (10))){
var state_41418__$1 = state_41418;
var statearr_41455_44491 = state_41418__$1;
(statearr_41455_44491[(2)] = fc);

(statearr_41455_44491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (8))){
var inst_41407 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41407)){
var statearr_41456_44492 = state_41418__$1;
(statearr_41456_44492[(1)] = (12));

} else {
var statearr_41458_44493 = state_41418__$1;
(statearr_41458_44493[(1)] = (13));

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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_41464 = [null,null,null,null,null,null,null,null,null];
(statearr_41464[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_41464[(1)] = (1));

return statearr_41464;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_41418){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41418);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41468){var ex__33261__auto__ = e41468;
var statearr_41469_44494 = state_41418;
(statearr_41469_44494[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41418[(4)]))){
var statearr_41470_44495 = state_41418;
(statearr_41470_44495[(1)] = cljs.core.first((state_41418[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44496 = state_41418;
state_41418 = G__44496;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_41418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_41418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41475 = f__33524__auto__();
(statearr_41475[(6)] = c__33523__auto___44477);

return statearr_41475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var c__33523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41548){
var state_val_41549 = (state_41548[(1)]);
if((state_val_41549 === (7))){
var inst_41543 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41554_44503 = state_41548__$1;
(statearr_41554_44503[(2)] = inst_41543);

(statearr_41554_44503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (1))){
var inst_41523 = init;
var inst_41524 = inst_41523;
var state_41548__$1 = (function (){var statearr_41555 = state_41548;
(statearr_41555[(7)] = inst_41524);

return statearr_41555;
})();
var statearr_41558_44504 = state_41548__$1;
(statearr_41558_44504[(2)] = null);

(statearr_41558_44504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (4))){
var inst_41527 = (state_41548[(8)]);
var inst_41527__$1 = (state_41548[(2)]);
var inst_41529 = (inst_41527__$1 == null);
var state_41548__$1 = (function (){var statearr_41561 = state_41548;
(statearr_41561[(8)] = inst_41527__$1);

return statearr_41561;
})();
if(cljs.core.truth_(inst_41529)){
var statearr_41563_44508 = state_41548__$1;
(statearr_41563_44508[(1)] = (5));

} else {
var statearr_41564_44509 = state_41548__$1;
(statearr_41564_44509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (6))){
var inst_41527 = (state_41548[(8)]);
var inst_41524 = (state_41548[(7)]);
var inst_41532 = (state_41548[(9)]);
var inst_41532__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41524,inst_41527) : f.call(null,inst_41524,inst_41527));
var inst_41533 = cljs.core.reduced_QMARK_(inst_41532__$1);
var state_41548__$1 = (function (){var statearr_41566 = state_41548;
(statearr_41566[(9)] = inst_41532__$1);

return statearr_41566;
})();
if(inst_41533){
var statearr_41567_44521 = state_41548__$1;
(statearr_41567_44521[(1)] = (8));

} else {
var statearr_41568_44522 = state_41548__$1;
(statearr_41568_44522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (3))){
var inst_41545 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41548__$1,inst_41545);
} else {
if((state_val_41549 === (2))){
var state_41548__$1 = state_41548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41548__$1,(4),ch);
} else {
if((state_val_41549 === (9))){
var inst_41532 = (state_41548[(9)]);
var inst_41524 = inst_41532;
var state_41548__$1 = (function (){var statearr_41570 = state_41548;
(statearr_41570[(7)] = inst_41524);

return statearr_41570;
})();
var statearr_41572_44526 = state_41548__$1;
(statearr_41572_44526[(2)] = null);

(statearr_41572_44526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (5))){
var inst_41524 = (state_41548[(7)]);
var state_41548__$1 = state_41548;
var statearr_41576_44527 = state_41548__$1;
(statearr_41576_44527[(2)] = inst_41524);

(statearr_41576_44527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (10))){
var inst_41541 = (state_41548[(2)]);
var state_41548__$1 = state_41548;
var statearr_41577_44532 = state_41548__$1;
(statearr_41577_44532[(2)] = inst_41541);

(statearr_41577_44532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41549 === (8))){
var inst_41532 = (state_41548[(9)]);
var inst_41537 = cljs.core.deref(inst_41532);
var state_41548__$1 = state_41548;
var statearr_41579_44535 = state_41548__$1;
(statearr_41579_44535[(2)] = inst_41537);

(statearr_41579_44535[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33258__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33258__auto____0 = (function (){
var statearr_41584 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41584[(0)] = cljs$core$async$reduce_$_state_machine__33258__auto__);

(statearr_41584[(1)] = (1));

return statearr_41584;
});
var cljs$core$async$reduce_$_state_machine__33258__auto____1 = (function (state_41548){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41548);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41587){var ex__33261__auto__ = e41587;
var statearr_41588_44540 = state_41548;
(statearr_41588_44540[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41548[(4)]))){
var statearr_41592_44541 = state_41548;
(statearr_41592_44541[(1)] = cljs.core.first((state_41548[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44543 = state_41548;
state_41548 = G__44543;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33258__auto__ = function(state_41548){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33258__auto____1.call(this,state_41548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33258__auto____0;
cljs$core$async$reduce_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33258__auto____1;
return cljs$core$async$reduce_$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41593 = f__33524__auto__();
(statearr_41593[(6)] = c__33523__auto__);

return statearr_41593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

return c__33523__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41607){
var state_val_41608 = (state_41607[(1)]);
if((state_val_41608 === (1))){
var inst_41601 = cljs.core.async.reduce(f__$1,init,ch);
var state_41607__$1 = state_41607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41607__$1,(2),inst_41601);
} else {
if((state_val_41608 === (2))){
var inst_41603 = (state_41607[(2)]);
var inst_41605 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41603) : f__$1.call(null,inst_41603));
var state_41607__$1 = state_41607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41607__$1,inst_41605);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33258__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33258__auto____0 = (function (){
var statearr_41622 = [null,null,null,null,null,null,null];
(statearr_41622[(0)] = cljs$core$async$transduce_$_state_machine__33258__auto__);

(statearr_41622[(1)] = (1));

return statearr_41622;
});
var cljs$core$async$transduce_$_state_machine__33258__auto____1 = (function (state_41607){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41607);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41626){var ex__33261__auto__ = e41626;
var statearr_41627_44550 = state_41607;
(statearr_41627_44550[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41607[(4)]))){
var statearr_41630_44551 = state_41607;
(statearr_41630_44551[(1)] = cljs.core.first((state_41607[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44552 = state_41607;
state_41607 = G__44552;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33258__auto__ = function(state_41607){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33258__auto____1.call(this,state_41607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33258__auto____0;
cljs$core$async$transduce_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33258__auto____1;
return cljs$core$async$transduce_$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41640 = f__33524__auto__();
(statearr_41640[(6)] = c__33523__auto__);

return statearr_41640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

return c__33523__auto__;
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
var G__41656 = arguments.length;
switch (G__41656) {
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
var c__33523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_41705){
var state_val_41706 = (state_41705[(1)]);
if((state_val_41706 === (7))){
var inst_41683 = (state_41705[(2)]);
var state_41705__$1 = state_41705;
var statearr_41707_44565 = state_41705__$1;
(statearr_41707_44565[(2)] = inst_41683);

(statearr_41707_44565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (1))){
var inst_41671 = cljs.core.seq(coll);
var inst_41672 = inst_41671;
var state_41705__$1 = (function (){var statearr_41708 = state_41705;
(statearr_41708[(7)] = inst_41672);

return statearr_41708;
})();
var statearr_41709_44572 = state_41705__$1;
(statearr_41709_44572[(2)] = null);

(statearr_41709_44572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (4))){
var inst_41672 = (state_41705[(7)]);
var inst_41680 = cljs.core.first(inst_41672);
var state_41705__$1 = state_41705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41705__$1,(7),ch,inst_41680);
} else {
if((state_val_41706 === (13))){
var inst_41699 = (state_41705[(2)]);
var state_41705__$1 = state_41705;
var statearr_41713_44573 = state_41705__$1;
(statearr_41713_44573[(2)] = inst_41699);

(statearr_41713_44573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (6))){
var inst_41686 = (state_41705[(2)]);
var state_41705__$1 = state_41705;
if(cljs.core.truth_(inst_41686)){
var statearr_41718_44577 = state_41705__$1;
(statearr_41718_44577[(1)] = (8));

} else {
var statearr_41719_44578 = state_41705__$1;
(statearr_41719_44578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (3))){
var inst_41703 = (state_41705[(2)]);
var state_41705__$1 = state_41705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41705__$1,inst_41703);
} else {
if((state_val_41706 === (12))){
var state_41705__$1 = state_41705;
var statearr_41720_44583 = state_41705__$1;
(statearr_41720_44583[(2)] = null);

(statearr_41720_44583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (2))){
var inst_41672 = (state_41705[(7)]);
var state_41705__$1 = state_41705;
if(cljs.core.truth_(inst_41672)){
var statearr_41721_44590 = state_41705__$1;
(statearr_41721_44590[(1)] = (4));

} else {
var statearr_41722_44591 = state_41705__$1;
(statearr_41722_44591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (11))){
var inst_41696 = cljs.core.async.close_BANG_(ch);
var state_41705__$1 = state_41705;
var statearr_41723_44592 = state_41705__$1;
(statearr_41723_44592[(2)] = inst_41696);

(statearr_41723_44592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (9))){
var state_41705__$1 = state_41705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41724_44593 = state_41705__$1;
(statearr_41724_44593[(1)] = (11));

} else {
var statearr_41728_44594 = state_41705__$1;
(statearr_41728_44594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (5))){
var inst_41672 = (state_41705[(7)]);
var state_41705__$1 = state_41705;
var statearr_41730_44595 = state_41705__$1;
(statearr_41730_44595[(2)] = inst_41672);

(statearr_41730_44595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (10))){
var inst_41701 = (state_41705[(2)]);
var state_41705__$1 = state_41705;
var statearr_41734_44602 = state_41705__$1;
(statearr_41734_44602[(2)] = inst_41701);

(statearr_41734_44602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41706 === (8))){
var inst_41672 = (state_41705[(7)]);
var inst_41689 = cljs.core.next(inst_41672);
var inst_41672__$1 = inst_41689;
var state_41705__$1 = (function (){var statearr_41737 = state_41705;
(statearr_41737[(7)] = inst_41672__$1);

return statearr_41737;
})();
var statearr_41738_44611 = state_41705__$1;
(statearr_41738_44611[(2)] = null);

(statearr_41738_44611[(1)] = (2));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_41745 = [null,null,null,null,null,null,null,null];
(statearr_41745[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_41745[(1)] = (1));

return statearr_41745;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_41705){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_41705);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e41746){var ex__33261__auto__ = e41746;
var statearr_41747_44622 = state_41705;
(statearr_41747_44622[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_41705[(4)]))){
var statearr_41749_44626 = state_41705;
(statearr_41749_44626[(1)] = cljs.core.first((state_41705[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44630 = state_41705;
state_41705 = G__44630;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_41705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_41705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_41757 = f__33524__auto__();
(statearr_41757[(6)] = c__33523__auto__);

return statearr_41757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

return c__33523__auto__;
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
var G__41763 = arguments.length;
switch (G__41763) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44632 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_44632(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44651 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_44651(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44668 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_44668(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44669 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_44669(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41804 = (function (ch,cs,meta41805){
this.ch = ch;
this.cs = cs;
this.meta41805 = meta41805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41806,meta41805__$1){
var self__ = this;
var _41806__$1 = this;
return (new cljs.core.async.t_cljs$core$async41804(self__.ch,self__.cs,meta41805__$1));
}));

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41806){
var self__ = this;
var _41806__$1 = this;
return self__.meta41805;
}));

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41804.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41805","meta41805",1138354104,null)], null);
}));

(cljs.core.async.t_cljs$core$async41804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41804");

(cljs.core.async.t_cljs$core$async41804.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async41804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41804.
 */
cljs.core.async.__GT_t_cljs$core$async41804 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41804(ch__$1,cs__$1,meta41805){
return (new cljs.core.async.t_cljs$core$async41804(ch__$1,cs__$1,meta41805));
});

}

return (new cljs.core.async.t_cljs$core$async41804(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33523__auto___44685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_42029){
var state_val_42030 = (state_42029[(1)]);
if((state_val_42030 === (7))){
var inst_42019 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42041_44686 = state_42029__$1;
(statearr_42041_44686[(2)] = inst_42019);

(statearr_42041_44686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (20))){
var inst_41891 = (state_42029[(7)]);
var inst_41905 = cljs.core.first(inst_41891);
var inst_41906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41905,(0),null);
var inst_41907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41905,(1),null);
var state_42029__$1 = (function (){var statearr_42053 = state_42029;
(statearr_42053[(8)] = inst_41906);

return statearr_42053;
})();
if(cljs.core.truth_(inst_41907)){
var statearr_42059_44691 = state_42029__$1;
(statearr_42059_44691[(1)] = (22));

} else {
var statearr_42060_44692 = state_42029__$1;
(statearr_42060_44692[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (27))){
var inst_41940 = (state_42029[(9)]);
var inst_41942 = (state_42029[(10)]);
var inst_41947 = (state_42029[(11)]);
var inst_41859 = (state_42029[(12)]);
var inst_41947__$1 = cljs.core._nth(inst_41940,inst_41942);
var inst_41948 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41947__$1,inst_41859,done);
var state_42029__$1 = (function (){var statearr_42061 = state_42029;
(statearr_42061[(11)] = inst_41947__$1);

return statearr_42061;
})();
if(cljs.core.truth_(inst_41948)){
var statearr_42062_44693 = state_42029__$1;
(statearr_42062_44693[(1)] = (30));

} else {
var statearr_42063_44694 = state_42029__$1;
(statearr_42063_44694[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (1))){
var state_42029__$1 = state_42029;
var statearr_42068_44695 = state_42029__$1;
(statearr_42068_44695[(2)] = null);

(statearr_42068_44695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (24))){
var inst_41891 = (state_42029[(7)]);
var inst_41915 = (state_42029[(2)]);
var inst_41916 = cljs.core.next(inst_41891);
var inst_41868 = inst_41916;
var inst_41869 = null;
var inst_41870 = (0);
var inst_41871 = (0);
var state_42029__$1 = (function (){var statearr_42077 = state_42029;
(statearr_42077[(13)] = inst_41869);

(statearr_42077[(14)] = inst_41870);

(statearr_42077[(15)] = inst_41915);

(statearr_42077[(16)] = inst_41871);

(statearr_42077[(17)] = inst_41868);

return statearr_42077;
})();
var statearr_42087_44696 = state_42029__$1;
(statearr_42087_44696[(2)] = null);

(statearr_42087_44696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (39))){
var state_42029__$1 = state_42029;
var statearr_42092_44701 = state_42029__$1;
(statearr_42092_44701[(2)] = null);

(statearr_42092_44701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (4))){
var inst_41859 = (state_42029[(12)]);
var inst_41859__$1 = (state_42029[(2)]);
var inst_41860 = (inst_41859__$1 == null);
var state_42029__$1 = (function (){var statearr_42099 = state_42029;
(statearr_42099[(12)] = inst_41859__$1);

return statearr_42099;
})();
if(cljs.core.truth_(inst_41860)){
var statearr_42101_44706 = state_42029__$1;
(statearr_42101_44706[(1)] = (5));

} else {
var statearr_42106_44707 = state_42029__$1;
(statearr_42106_44707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (15))){
var inst_41869 = (state_42029[(13)]);
var inst_41870 = (state_42029[(14)]);
var inst_41871 = (state_42029[(16)]);
var inst_41868 = (state_42029[(17)]);
var inst_41887 = (state_42029[(2)]);
var inst_41888 = (inst_41871 + (1));
var tmp42089 = inst_41869;
var tmp42090 = inst_41870;
var tmp42091 = inst_41868;
var inst_41868__$1 = tmp42091;
var inst_41869__$1 = tmp42089;
var inst_41870__$1 = tmp42090;
var inst_41871__$1 = inst_41888;
var state_42029__$1 = (function (){var statearr_42120 = state_42029;
(statearr_42120[(13)] = inst_41869__$1);

(statearr_42120[(14)] = inst_41870__$1);

(statearr_42120[(18)] = inst_41887);

(statearr_42120[(16)] = inst_41871__$1);

(statearr_42120[(17)] = inst_41868__$1);

return statearr_42120;
})();
var statearr_42121_44708 = state_42029__$1;
(statearr_42121_44708[(2)] = null);

(statearr_42121_44708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (21))){
var inst_41919 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42128_44709 = state_42029__$1;
(statearr_42128_44709[(2)] = inst_41919);

(statearr_42128_44709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (31))){
var inst_41947 = (state_42029[(11)]);
var inst_41953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41947);
var state_42029__$1 = state_42029;
var statearr_42131_44710 = state_42029__$1;
(statearr_42131_44710[(2)] = inst_41953);

(statearr_42131_44710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (32))){
var inst_41941 = (state_42029[(19)]);
var inst_41940 = (state_42029[(9)]);
var inst_41942 = (state_42029[(10)]);
var inst_41939 = (state_42029[(20)]);
var inst_41955 = (state_42029[(2)]);
var inst_41956 = (inst_41942 + (1));
var tmp42124 = inst_41941;
var tmp42125 = inst_41940;
var tmp42126 = inst_41939;
var inst_41939__$1 = tmp42126;
var inst_41940__$1 = tmp42125;
var inst_41941__$1 = tmp42124;
var inst_41942__$1 = inst_41956;
var state_42029__$1 = (function (){var statearr_42142 = state_42029;
(statearr_42142[(19)] = inst_41941__$1);

(statearr_42142[(9)] = inst_41940__$1);

(statearr_42142[(10)] = inst_41942__$1);

(statearr_42142[(20)] = inst_41939__$1);

(statearr_42142[(21)] = inst_41955);

return statearr_42142;
})();
var statearr_42143_44717 = state_42029__$1;
(statearr_42143_44717[(2)] = null);

(statearr_42143_44717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (40))){
var inst_41982 = (state_42029[(22)]);
var inst_41988 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41982);
var state_42029__$1 = state_42029;
var statearr_42145_44718 = state_42029__$1;
(statearr_42145_44718[(2)] = inst_41988);

(statearr_42145_44718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (33))){
var inst_41965 = (state_42029[(23)]);
var inst_41970 = cljs.core.chunked_seq_QMARK_(inst_41965);
var state_42029__$1 = state_42029;
if(inst_41970){
var statearr_42149_44719 = state_42029__$1;
(statearr_42149_44719[(1)] = (36));

} else {
var statearr_42150_44720 = state_42029__$1;
(statearr_42150_44720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (13))){
var inst_41881 = (state_42029[(24)]);
var inst_41884 = cljs.core.async.close_BANG_(inst_41881);
var state_42029__$1 = state_42029;
var statearr_42158_44721 = state_42029__$1;
(statearr_42158_44721[(2)] = inst_41884);

(statearr_42158_44721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (22))){
var inst_41906 = (state_42029[(8)]);
var inst_41911 = cljs.core.async.close_BANG_(inst_41906);
var state_42029__$1 = state_42029;
var statearr_42160_44724 = state_42029__$1;
(statearr_42160_44724[(2)] = inst_41911);

(statearr_42160_44724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (36))){
var inst_41965 = (state_42029[(23)]);
var inst_41972 = cljs.core.chunk_first(inst_41965);
var inst_41974 = cljs.core.chunk_rest(inst_41965);
var inst_41975 = cljs.core.count(inst_41972);
var inst_41939 = inst_41974;
var inst_41940 = inst_41972;
var inst_41941 = inst_41975;
var inst_41942 = (0);
var state_42029__$1 = (function (){var statearr_42162 = state_42029;
(statearr_42162[(19)] = inst_41941);

(statearr_42162[(9)] = inst_41940);

(statearr_42162[(10)] = inst_41942);

(statearr_42162[(20)] = inst_41939);

return statearr_42162;
})();
var statearr_42167_44726 = state_42029__$1;
(statearr_42167_44726[(2)] = null);

(statearr_42167_44726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (41))){
var inst_41965 = (state_42029[(23)]);
var inst_41991 = (state_42029[(2)]);
var inst_41992 = cljs.core.next(inst_41965);
var inst_41939 = inst_41992;
var inst_41940 = null;
var inst_41941 = (0);
var inst_41942 = (0);
var state_42029__$1 = (function (){var statearr_42168 = state_42029;
(statearr_42168[(19)] = inst_41941);

(statearr_42168[(25)] = inst_41991);

(statearr_42168[(9)] = inst_41940);

(statearr_42168[(10)] = inst_41942);

(statearr_42168[(20)] = inst_41939);

return statearr_42168;
})();
var statearr_42169_44729 = state_42029__$1;
(statearr_42169_44729[(2)] = null);

(statearr_42169_44729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (43))){
var state_42029__$1 = state_42029;
var statearr_42181_44730 = state_42029__$1;
(statearr_42181_44730[(2)] = null);

(statearr_42181_44730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (29))){
var inst_42004 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42186_44731 = state_42029__$1;
(statearr_42186_44731[(2)] = inst_42004);

(statearr_42186_44731[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (44))){
var inst_42016 = (state_42029[(2)]);
var state_42029__$1 = (function (){var statearr_42191 = state_42029;
(statearr_42191[(26)] = inst_42016);

return statearr_42191;
})();
var statearr_42192_44732 = state_42029__$1;
(statearr_42192_44732[(2)] = null);

(statearr_42192_44732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (6))){
var inst_41929 = (state_42029[(27)]);
var inst_41928 = cljs.core.deref(cs);
var inst_41929__$1 = cljs.core.keys(inst_41928);
var inst_41932 = cljs.core.count(inst_41929__$1);
var inst_41933 = cljs.core.reset_BANG_(dctr,inst_41932);
var inst_41938 = cljs.core.seq(inst_41929__$1);
var inst_41939 = inst_41938;
var inst_41940 = null;
var inst_41941 = (0);
var inst_41942 = (0);
var state_42029__$1 = (function (){var statearr_42194 = state_42029;
(statearr_42194[(27)] = inst_41929__$1);

(statearr_42194[(19)] = inst_41941);

(statearr_42194[(9)] = inst_41940);

(statearr_42194[(10)] = inst_41942);

(statearr_42194[(20)] = inst_41939);

(statearr_42194[(28)] = inst_41933);

return statearr_42194;
})();
var statearr_42195_44735 = state_42029__$1;
(statearr_42195_44735[(2)] = null);

(statearr_42195_44735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (28))){
var inst_41965 = (state_42029[(23)]);
var inst_41939 = (state_42029[(20)]);
var inst_41965__$1 = cljs.core.seq(inst_41939);
var state_42029__$1 = (function (){var statearr_42197 = state_42029;
(statearr_42197[(23)] = inst_41965__$1);

return statearr_42197;
})();
if(inst_41965__$1){
var statearr_42198_44736 = state_42029__$1;
(statearr_42198_44736[(1)] = (33));

} else {
var statearr_42200_44737 = state_42029__$1;
(statearr_42200_44737[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (25))){
var inst_41941 = (state_42029[(19)]);
var inst_41942 = (state_42029[(10)]);
var inst_41944 = (inst_41942 < inst_41941);
var inst_41945 = inst_41944;
var state_42029__$1 = state_42029;
if(cljs.core.truth_(inst_41945)){
var statearr_42201_44738 = state_42029__$1;
(statearr_42201_44738[(1)] = (27));

} else {
var statearr_42202_44739 = state_42029__$1;
(statearr_42202_44739[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (34))){
var state_42029__$1 = state_42029;
var statearr_42203_44740 = state_42029__$1;
(statearr_42203_44740[(2)] = null);

(statearr_42203_44740[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (17))){
var state_42029__$1 = state_42029;
var statearr_42204_44741 = state_42029__$1;
(statearr_42204_44741[(2)] = null);

(statearr_42204_44741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (3))){
var inst_42022 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42029__$1,inst_42022);
} else {
if((state_val_42030 === (12))){
var inst_41924 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42207_44746 = state_42029__$1;
(statearr_42207_44746[(2)] = inst_41924);

(statearr_42207_44746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (2))){
var state_42029__$1 = state_42029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42029__$1,(4),ch);
} else {
if((state_val_42030 === (23))){
var state_42029__$1 = state_42029;
var statearr_42208_44748 = state_42029__$1;
(statearr_42208_44748[(2)] = null);

(statearr_42208_44748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (35))){
var inst_42002 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42209_44749 = state_42029__$1;
(statearr_42209_44749[(2)] = inst_42002);

(statearr_42209_44749[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (19))){
var inst_41891 = (state_42029[(7)]);
var inst_41895 = cljs.core.chunk_first(inst_41891);
var inst_41896 = cljs.core.chunk_rest(inst_41891);
var inst_41897 = cljs.core.count(inst_41895);
var inst_41868 = inst_41896;
var inst_41869 = inst_41895;
var inst_41870 = inst_41897;
var inst_41871 = (0);
var state_42029__$1 = (function (){var statearr_42210 = state_42029;
(statearr_42210[(13)] = inst_41869);

(statearr_42210[(14)] = inst_41870);

(statearr_42210[(16)] = inst_41871);

(statearr_42210[(17)] = inst_41868);

return statearr_42210;
})();
var statearr_42212_44750 = state_42029__$1;
(statearr_42212_44750[(2)] = null);

(statearr_42212_44750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (11))){
var inst_41891 = (state_42029[(7)]);
var inst_41868 = (state_42029[(17)]);
var inst_41891__$1 = cljs.core.seq(inst_41868);
var state_42029__$1 = (function (){var statearr_42213 = state_42029;
(statearr_42213[(7)] = inst_41891__$1);

return statearr_42213;
})();
if(inst_41891__$1){
var statearr_42214_44751 = state_42029__$1;
(statearr_42214_44751[(1)] = (16));

} else {
var statearr_42216_44752 = state_42029__$1;
(statearr_42216_44752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (9))){
var inst_41926 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42217_44753 = state_42029__$1;
(statearr_42217_44753[(2)] = inst_41926);

(statearr_42217_44753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (5))){
var inst_41866 = cljs.core.deref(cs);
var inst_41867 = cljs.core.seq(inst_41866);
var inst_41868 = inst_41867;
var inst_41869 = null;
var inst_41870 = (0);
var inst_41871 = (0);
var state_42029__$1 = (function (){var statearr_42219 = state_42029;
(statearr_42219[(13)] = inst_41869);

(statearr_42219[(14)] = inst_41870);

(statearr_42219[(16)] = inst_41871);

(statearr_42219[(17)] = inst_41868);

return statearr_42219;
})();
var statearr_42224_44758 = state_42029__$1;
(statearr_42224_44758[(2)] = null);

(statearr_42224_44758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (14))){
var state_42029__$1 = state_42029;
var statearr_42226_44759 = state_42029__$1;
(statearr_42226_44759[(2)] = null);

(statearr_42226_44759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (45))){
var inst_42013 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42227_44760 = state_42029__$1;
(statearr_42227_44760[(2)] = inst_42013);

(statearr_42227_44760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (26))){
var inst_41929 = (state_42029[(27)]);
var inst_42006 = (state_42029[(2)]);
var inst_42010 = cljs.core.seq(inst_41929);
var state_42029__$1 = (function (){var statearr_42228 = state_42029;
(statearr_42228[(29)] = inst_42006);

return statearr_42228;
})();
if(inst_42010){
var statearr_42229_44763 = state_42029__$1;
(statearr_42229_44763[(1)] = (42));

} else {
var statearr_42230_44764 = state_42029__$1;
(statearr_42230_44764[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (16))){
var inst_41891 = (state_42029[(7)]);
var inst_41893 = cljs.core.chunked_seq_QMARK_(inst_41891);
var state_42029__$1 = state_42029;
if(inst_41893){
var statearr_42231_44765 = state_42029__$1;
(statearr_42231_44765[(1)] = (19));

} else {
var statearr_42232_44770 = state_42029__$1;
(statearr_42232_44770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (38))){
var inst_41995 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42233_44771 = state_42029__$1;
(statearr_42233_44771[(2)] = inst_41995);

(statearr_42233_44771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (30))){
var state_42029__$1 = state_42029;
var statearr_42235_44772 = state_42029__$1;
(statearr_42235_44772[(2)] = null);

(statearr_42235_44772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (10))){
var inst_41869 = (state_42029[(13)]);
var inst_41871 = (state_42029[(16)]);
var inst_41880 = cljs.core._nth(inst_41869,inst_41871);
var inst_41881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41880,(0),null);
var inst_41882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41880,(1),null);
var state_42029__$1 = (function (){var statearr_42236 = state_42029;
(statearr_42236[(24)] = inst_41881);

return statearr_42236;
})();
if(cljs.core.truth_(inst_41882)){
var statearr_42237_44775 = state_42029__$1;
(statearr_42237_44775[(1)] = (13));

} else {
var statearr_42238_44777 = state_42029__$1;
(statearr_42238_44777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (18))){
var inst_41922 = (state_42029[(2)]);
var state_42029__$1 = state_42029;
var statearr_42240_44779 = state_42029__$1;
(statearr_42240_44779[(2)] = inst_41922);

(statearr_42240_44779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (42))){
var state_42029__$1 = state_42029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42029__$1,(45),dchan);
} else {
if((state_val_42030 === (37))){
var inst_41965 = (state_42029[(23)]);
var inst_41859 = (state_42029[(12)]);
var inst_41982 = (state_42029[(22)]);
var inst_41982__$1 = cljs.core.first(inst_41965);
var inst_41984 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41982__$1,inst_41859,done);
var state_42029__$1 = (function (){var statearr_42242 = state_42029;
(statearr_42242[(22)] = inst_41982__$1);

return statearr_42242;
})();
if(cljs.core.truth_(inst_41984)){
var statearr_42243_44784 = state_42029__$1;
(statearr_42243_44784[(1)] = (39));

} else {
var statearr_42244_44785 = state_42029__$1;
(statearr_42244_44785[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42030 === (8))){
var inst_41870 = (state_42029[(14)]);
var inst_41871 = (state_42029[(16)]);
var inst_41874 = (inst_41871 < inst_41870);
var inst_41875 = inst_41874;
var state_42029__$1 = state_42029;
if(cljs.core.truth_(inst_41875)){
var statearr_42246_44786 = state_42029__$1;
(statearr_42246_44786[(1)] = (10));

} else {
var statearr_42247_44787 = state_42029__$1;
(statearr_42247_44787[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33258__auto__ = null;
var cljs$core$async$mult_$_state_machine__33258__auto____0 = (function (){
var statearr_42249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42249[(0)] = cljs$core$async$mult_$_state_machine__33258__auto__);

(statearr_42249[(1)] = (1));

return statearr_42249;
});
var cljs$core$async$mult_$_state_machine__33258__auto____1 = (function (state_42029){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_42029);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e42251){var ex__33261__auto__ = e42251;
var statearr_42252_44796 = state_42029;
(statearr_42252_44796[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_42029[(4)]))){
var statearr_42253_44800 = state_42029;
(statearr_42253_44800[(1)] = cljs.core.first((state_42029[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44801 = state_42029;
state_42029 = G__44801;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33258__auto__ = function(state_42029){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33258__auto____1.call(this,state_42029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33258__auto____0;
cljs$core$async$mult_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33258__auto____1;
return cljs$core$async$mult_$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_42256 = f__33524__auto__();
(statearr_42256[(6)] = c__33523__auto___44685);

return statearr_42256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var G__42259 = arguments.length;
switch (G__42259) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44806 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_44806(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44809 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_44809(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44812 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44812(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44814 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_44814(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44815 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44815(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44816 = arguments.length;
var i__5770__auto___44817 = (0);
while(true){
if((i__5770__auto___44817 < len__5769__auto___44816)){
args__5775__auto__.push((arguments[i__5770__auto___44817]));

var G__44822 = (i__5770__auto___44817 + (1));
i__5770__auto___44817 = G__44822;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42311){
var map__42312 = p__42311;
var map__42312__$1 = cljs.core.__destructure_map(map__42312);
var opts = map__42312__$1;
var statearr_42313_44827 = state;
(statearr_42313_44827[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42315_44832 = state;
(statearr_42315_44832[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_42316_44833 = state;
(statearr_42316_44833[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42304){
var G__42305 = cljs.core.first(seq42304);
var seq42304__$1 = cljs.core.next(seq42304);
var G__42306 = cljs.core.first(seq42304__$1);
var seq42304__$2 = cljs.core.next(seq42304__$1);
var G__42307 = cljs.core.first(seq42304__$2);
var seq42304__$3 = cljs.core.next(seq42304__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42305,G__42306,G__42307,seq42304__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42340 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42341){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42341 = meta42341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42342,meta42341__$1){
var self__ = this;
var _42342__$1 = this;
return (new cljs.core.async.t_cljs$core$async42340(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42341__$1));
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42342){
var self__ = this;
var _42342__$1 = this;
return self__.meta42341;
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42340.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42341","meta42341",402366931,null)], null);
}));

(cljs.core.async.t_cljs$core$async42340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42340");

(cljs.core.async.t_cljs$core$async42340.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42340.
 */
cljs.core.async.__GT_t_cljs$core$async42340 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42340(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42341){
return (new cljs.core.async.t_cljs$core$async42340(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42341));
});

}

return (new cljs.core.async.t_cljs$core$async42340(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33523__auto___44854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_42430){
var state_val_42431 = (state_42430[(1)]);
if((state_val_42431 === (7))){
var inst_42390 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42390)){
var statearr_42442_44859 = state_42430__$1;
(statearr_42442_44859[(1)] = (8));

} else {
var statearr_42444_44860 = state_42430__$1;
(statearr_42444_44860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (20))){
var inst_42383 = (state_42430[(7)]);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42430__$1,(23),out,inst_42383);
} else {
if((state_val_42431 === (1))){
var inst_42362 = calc_state();
var inst_42363 = cljs.core.__destructure_map(inst_42362);
var inst_42364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42367 = inst_42362;
var state_42430__$1 = (function (){var statearr_42449 = state_42430;
(statearr_42449[(8)] = inst_42364);

(statearr_42449[(9)] = inst_42365);

(statearr_42449[(10)] = inst_42367);

(statearr_42449[(11)] = inst_42366);

return statearr_42449;
})();
var statearr_42450_44870 = state_42430__$1;
(statearr_42450_44870[(2)] = null);

(statearr_42450_44870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (24))){
var inst_42374 = (state_42430[(12)]);
var inst_42367 = inst_42374;
var state_42430__$1 = (function (){var statearr_42451 = state_42430;
(statearr_42451[(10)] = inst_42367);

return statearr_42451;
})();
var statearr_42452_44872 = state_42430__$1;
(statearr_42452_44872[(2)] = null);

(statearr_42452_44872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (4))){
var inst_42385 = (state_42430[(13)]);
var inst_42383 = (state_42430[(7)]);
var inst_42382 = (state_42430[(2)]);
var inst_42383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42382,(0),null);
var inst_42384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42382,(1),null);
var inst_42385__$1 = (inst_42383__$1 == null);
var state_42430__$1 = (function (){var statearr_42454 = state_42430;
(statearr_42454[(13)] = inst_42385__$1);

(statearr_42454[(14)] = inst_42384);

(statearr_42454[(7)] = inst_42383__$1);

return statearr_42454;
})();
if(cljs.core.truth_(inst_42385__$1)){
var statearr_42455_44878 = state_42430__$1;
(statearr_42455_44878[(1)] = (5));

} else {
var statearr_42456_44879 = state_42430__$1;
(statearr_42456_44879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (15))){
var inst_42375 = (state_42430[(15)]);
var inst_42404 = (state_42430[(16)]);
var inst_42404__$1 = cljs.core.empty_QMARK_(inst_42375);
var state_42430__$1 = (function (){var statearr_42457 = state_42430;
(statearr_42457[(16)] = inst_42404__$1);

return statearr_42457;
})();
if(inst_42404__$1){
var statearr_42458_44886 = state_42430__$1;
(statearr_42458_44886[(1)] = (17));

} else {
var statearr_42459_44887 = state_42430__$1;
(statearr_42459_44887[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (21))){
var inst_42374 = (state_42430[(12)]);
var inst_42367 = inst_42374;
var state_42430__$1 = (function (){var statearr_42466 = state_42430;
(statearr_42466[(10)] = inst_42367);

return statearr_42466;
})();
var statearr_42467_44888 = state_42430__$1;
(statearr_42467_44888[(2)] = null);

(statearr_42467_44888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (13))){
var inst_42397 = (state_42430[(2)]);
var inst_42398 = calc_state();
var inst_42367 = inst_42398;
var state_42430__$1 = (function (){var statearr_42468 = state_42430;
(statearr_42468[(10)] = inst_42367);

(statearr_42468[(17)] = inst_42397);

return statearr_42468;
})();
var statearr_42469_44889 = state_42430__$1;
(statearr_42469_44889[(2)] = null);

(statearr_42469_44889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (22))){
var inst_42424 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42471_44890 = state_42430__$1;
(statearr_42471_44890[(2)] = inst_42424);

(statearr_42471_44890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (6))){
var inst_42384 = (state_42430[(14)]);
var inst_42388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42384,change);
var state_42430__$1 = state_42430;
var statearr_42472_44891 = state_42430__$1;
(statearr_42472_44891[(2)] = inst_42388);

(statearr_42472_44891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (25))){
var state_42430__$1 = state_42430;
var statearr_42473_44892 = state_42430__$1;
(statearr_42473_44892[(2)] = null);

(statearr_42473_44892[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (17))){
var inst_42376 = (state_42430[(18)]);
var inst_42384 = (state_42430[(14)]);
var inst_42406 = (inst_42376.cljs$core$IFn$_invoke$arity$1 ? inst_42376.cljs$core$IFn$_invoke$arity$1(inst_42384) : inst_42376.call(null,inst_42384));
var inst_42407 = cljs.core.not(inst_42406);
var state_42430__$1 = state_42430;
var statearr_42474_44896 = state_42430__$1;
(statearr_42474_44896[(2)] = inst_42407);

(statearr_42474_44896[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (3))){
var inst_42428 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42430__$1,inst_42428);
} else {
if((state_val_42431 === (12))){
var state_42430__$1 = state_42430;
var statearr_42475_44897 = state_42430__$1;
(statearr_42475_44897[(2)] = null);

(statearr_42475_44897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (2))){
var inst_42367 = (state_42430[(10)]);
var inst_42374 = (state_42430[(12)]);
var inst_42374__$1 = cljs.core.__destructure_map(inst_42367);
var inst_42375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42374__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42374__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42374__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42430__$1 = (function (){var statearr_42480 = state_42430;
(statearr_42480[(18)] = inst_42376);

(statearr_42480[(15)] = inst_42375);

(statearr_42480[(12)] = inst_42374__$1);

return statearr_42480;
})();
return cljs.core.async.ioc_alts_BANG_(state_42430__$1,(4),inst_42377);
} else {
if((state_val_42431 === (23))){
var inst_42415 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42415)){
var statearr_42481_44905 = state_42430__$1;
(statearr_42481_44905[(1)] = (24));

} else {
var statearr_42482_44910 = state_42430__$1;
(statearr_42482_44910[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (19))){
var inst_42410 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42486_44911 = state_42430__$1;
(statearr_42486_44911[(2)] = inst_42410);

(statearr_42486_44911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (11))){
var inst_42384 = (state_42430[(14)]);
var inst_42394 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42384);
var state_42430__$1 = state_42430;
var statearr_42490_44912 = state_42430__$1;
(statearr_42490_44912[(2)] = inst_42394);

(statearr_42490_44912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (9))){
var inst_42384 = (state_42430[(14)]);
var inst_42375 = (state_42430[(15)]);
var inst_42401 = (state_42430[(19)]);
var inst_42401__$1 = (inst_42375.cljs$core$IFn$_invoke$arity$1 ? inst_42375.cljs$core$IFn$_invoke$arity$1(inst_42384) : inst_42375.call(null,inst_42384));
var state_42430__$1 = (function (){var statearr_42492 = state_42430;
(statearr_42492[(19)] = inst_42401__$1);

return statearr_42492;
})();
if(cljs.core.truth_(inst_42401__$1)){
var statearr_42493_44913 = state_42430__$1;
(statearr_42493_44913[(1)] = (14));

} else {
var statearr_42494_44914 = state_42430__$1;
(statearr_42494_44914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (5))){
var inst_42385 = (state_42430[(13)]);
var state_42430__$1 = state_42430;
var statearr_42495_44919 = state_42430__$1;
(statearr_42495_44919[(2)] = inst_42385);

(statearr_42495_44919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (14))){
var inst_42401 = (state_42430[(19)]);
var state_42430__$1 = state_42430;
var statearr_42496_44923 = state_42430__$1;
(statearr_42496_44923[(2)] = inst_42401);

(statearr_42496_44923[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (26))){
var inst_42420 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42497_44926 = state_42430__$1;
(statearr_42497_44926[(2)] = inst_42420);

(statearr_42497_44926[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (16))){
var inst_42412 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42412)){
var statearr_42498_44927 = state_42430__$1;
(statearr_42498_44927[(1)] = (20));

} else {
var statearr_42499_44928 = state_42430__$1;
(statearr_42499_44928[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (10))){
var inst_42426 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42501_44930 = state_42430__$1;
(statearr_42501_44930[(2)] = inst_42426);

(statearr_42501_44930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (18))){
var inst_42404 = (state_42430[(16)]);
var state_42430__$1 = state_42430;
var statearr_42506_44934 = state_42430__$1;
(statearr_42506_44934[(2)] = inst_42404);

(statearr_42506_44934[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (8))){
var inst_42383 = (state_42430[(7)]);
var inst_42392 = (inst_42383 == null);
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42392)){
var statearr_42510_44936 = state_42430__$1;
(statearr_42510_44936[(1)] = (11));

} else {
var statearr_42511_44937 = state_42430__$1;
(statearr_42511_44937[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__33258__auto__ = null;
var cljs$core$async$mix_$_state_machine__33258__auto____0 = (function (){
var statearr_42512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42512[(0)] = cljs$core$async$mix_$_state_machine__33258__auto__);

(statearr_42512[(1)] = (1));

return statearr_42512;
});
var cljs$core$async$mix_$_state_machine__33258__auto____1 = (function (state_42430){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_42430);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e42513){var ex__33261__auto__ = e42513;
var statearr_42514_44944 = state_42430;
(statearr_42514_44944[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_42430[(4)]))){
var statearr_42515_44945 = state_42430;
(statearr_42515_44945[(1)] = cljs.core.first((state_42430[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44946 = state_42430;
state_42430 = G__44946;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33258__auto__ = function(state_42430){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33258__auto____1.call(this,state_42430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33258__auto____0;
cljs$core$async$mix_$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33258__auto____1;
return cljs$core$async$mix_$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_42517 = f__33524__auto__();
(statearr_42517[(6)] = c__33523__auto___44854);

return statearr_42517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44951 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_44951(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44952 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_44952(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44956 = (function() {
var G__44957 = null;
var G__44957__1 = (function (p){
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
var G__44957__2 = (function (p,v){
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
G__44957 = function(p,v){
switch(arguments.length){
case 1:
return G__44957__1.call(this,p);
case 2:
return G__44957__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44957.cljs$core$IFn$_invoke$arity$1 = G__44957__1;
G__44957.cljs$core$IFn$_invoke$arity$2 = G__44957__2;
return G__44957;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42542 = arguments.length;
switch (G__42542) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44956(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44956(p,v);
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
var G__42551 = arguments.length;
switch (G__42551) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42549_SHARP_){
if(cljs.core.truth_((p1__42549_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42549_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42549_SHARP_.call(null,topic)))){
return p1__42549_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42549_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42561 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42562){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42562 = meta42562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42563,meta42562__$1){
var self__ = this;
var _42563__$1 = this;
return (new cljs.core.async.t_cljs$core$async42561(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42562__$1));
}));

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42563){
var self__ = this;
var _42563__$1 = this;
return self__.meta42562;
}));

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42561.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42562","meta42562",-957484204,null)], null);
}));

(cljs.core.async.t_cljs$core$async42561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42561");

(cljs.core.async.t_cljs$core$async42561.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42561.
 */
cljs.core.async.__GT_t_cljs$core$async42561 = (function cljs$core$async$__GT_t_cljs$core$async42561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42562){
return (new cljs.core.async.t_cljs$core$async42561(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42562));
});

}

return (new cljs.core.async.t_cljs$core$async42561(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33523__auto___44988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_42675){
var state_val_42676 = (state_42675[(1)]);
if((state_val_42676 === (7))){
var inst_42671 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42680_44996 = state_42675__$1;
(statearr_42680_44996[(2)] = inst_42671);

(statearr_42680_44996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (20))){
var state_42675__$1 = state_42675;
var statearr_42684_44997 = state_42675__$1;
(statearr_42684_44997[(2)] = null);

(statearr_42684_44997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (1))){
var state_42675__$1 = state_42675;
var statearr_42694_44998 = state_42675__$1;
(statearr_42694_44998[(2)] = null);

(statearr_42694_44998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (24))){
var inst_42653 = (state_42675[(7)]);
var inst_42663 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42653);
var state_42675__$1 = state_42675;
var statearr_42697_45002 = state_42675__$1;
(statearr_42697_45002[(2)] = inst_42663);

(statearr_42697_45002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (4))){
var inst_42598 = (state_42675[(8)]);
var inst_42598__$1 = (state_42675[(2)]);
var inst_42600 = (inst_42598__$1 == null);
var state_42675__$1 = (function (){var statearr_42701 = state_42675;
(statearr_42701[(8)] = inst_42598__$1);

return statearr_42701;
})();
if(cljs.core.truth_(inst_42600)){
var statearr_42703_45009 = state_42675__$1;
(statearr_42703_45009[(1)] = (5));

} else {
var statearr_42704_45010 = state_42675__$1;
(statearr_42704_45010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (15))){
var inst_42645 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42706_45011 = state_42675__$1;
(statearr_42706_45011[(2)] = inst_42645);

(statearr_42706_45011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (21))){
var inst_42668 = (state_42675[(2)]);
var state_42675__$1 = (function (){var statearr_42710 = state_42675;
(statearr_42710[(9)] = inst_42668);

return statearr_42710;
})();
var statearr_42712_45013 = state_42675__$1;
(statearr_42712_45013[(2)] = null);

(statearr_42712_45013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (13))){
var inst_42625 = (state_42675[(10)]);
var inst_42627 = cljs.core.chunked_seq_QMARK_(inst_42625);
var state_42675__$1 = state_42675;
if(inst_42627){
var statearr_42716_45018 = state_42675__$1;
(statearr_42716_45018[(1)] = (16));

} else {
var statearr_42717_45019 = state_42675__$1;
(statearr_42717_45019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (22))){
var inst_42660 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
if(cljs.core.truth_(inst_42660)){
var statearr_42728_45020 = state_42675__$1;
(statearr_42728_45020[(1)] = (23));

} else {
var statearr_42730_45023 = state_42675__$1;
(statearr_42730_45023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (6))){
var inst_42598 = (state_42675[(8)]);
var inst_42655 = (state_42675[(11)]);
var inst_42653 = (state_42675[(7)]);
var inst_42653__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42598) : topic_fn.call(null,inst_42598));
var inst_42654 = cljs.core.deref(mults);
var inst_42655__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42654,inst_42653__$1);
var state_42675__$1 = (function (){var statearr_42735 = state_42675;
(statearr_42735[(11)] = inst_42655__$1);

(statearr_42735[(7)] = inst_42653__$1);

return statearr_42735;
})();
if(cljs.core.truth_(inst_42655__$1)){
var statearr_42736_45025 = state_42675__$1;
(statearr_42736_45025[(1)] = (19));

} else {
var statearr_42738_45027 = state_42675__$1;
(statearr_42738_45027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (25))){
var inst_42665 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42741_45028 = state_42675__$1;
(statearr_42741_45028[(2)] = inst_42665);

(statearr_42741_45028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (17))){
var inst_42625 = (state_42675[(10)]);
var inst_42636 = cljs.core.first(inst_42625);
var inst_42637 = cljs.core.async.muxch_STAR_(inst_42636);
var inst_42638 = cljs.core.async.close_BANG_(inst_42637);
var inst_42639 = cljs.core.next(inst_42625);
var inst_42609 = inst_42639;
var inst_42610 = null;
var inst_42611 = (0);
var inst_42612 = (0);
var state_42675__$1 = (function (){var statearr_42748 = state_42675;
(statearr_42748[(12)] = inst_42638);

(statearr_42748[(13)] = inst_42609);

(statearr_42748[(14)] = inst_42610);

(statearr_42748[(15)] = inst_42612);

(statearr_42748[(16)] = inst_42611);

return statearr_42748;
})();
var statearr_42749_45030 = state_42675__$1;
(statearr_42749_45030[(2)] = null);

(statearr_42749_45030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (3))){
var inst_42673 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42675__$1,inst_42673);
} else {
if((state_val_42676 === (12))){
var inst_42647 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42751_45031 = state_42675__$1;
(statearr_42751_45031[(2)] = inst_42647);

(statearr_42751_45031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (2))){
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42675__$1,(4),ch);
} else {
if((state_val_42676 === (23))){
var state_42675__$1 = state_42675;
var statearr_42754_45034 = state_42675__$1;
(statearr_42754_45034[(2)] = null);

(statearr_42754_45034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (19))){
var inst_42598 = (state_42675[(8)]);
var inst_42655 = (state_42675[(11)]);
var inst_42658 = cljs.core.async.muxch_STAR_(inst_42655);
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42675__$1,(22),inst_42658,inst_42598);
} else {
if((state_val_42676 === (11))){
var inst_42609 = (state_42675[(13)]);
var inst_42625 = (state_42675[(10)]);
var inst_42625__$1 = cljs.core.seq(inst_42609);
var state_42675__$1 = (function (){var statearr_42763 = state_42675;
(statearr_42763[(10)] = inst_42625__$1);

return statearr_42763;
})();
if(inst_42625__$1){
var statearr_42765_45035 = state_42675__$1;
(statearr_42765_45035[(1)] = (13));

} else {
var statearr_42766_45036 = state_42675__$1;
(statearr_42766_45036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (9))){
var inst_42649 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42768_45038 = state_42675__$1;
(statearr_42768_45038[(2)] = inst_42649);

(statearr_42768_45038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (5))){
var inst_42606 = cljs.core.deref(mults);
var inst_42607 = cljs.core.vals(inst_42606);
var inst_42608 = cljs.core.seq(inst_42607);
var inst_42609 = inst_42608;
var inst_42610 = null;
var inst_42611 = (0);
var inst_42612 = (0);
var state_42675__$1 = (function (){var statearr_42773 = state_42675;
(statearr_42773[(13)] = inst_42609);

(statearr_42773[(14)] = inst_42610);

(statearr_42773[(15)] = inst_42612);

(statearr_42773[(16)] = inst_42611);

return statearr_42773;
})();
var statearr_42775_45046 = state_42675__$1;
(statearr_42775_45046[(2)] = null);

(statearr_42775_45046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (14))){
var state_42675__$1 = state_42675;
var statearr_42784_45050 = state_42675__$1;
(statearr_42784_45050[(2)] = null);

(statearr_42784_45050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (16))){
var inst_42625 = (state_42675[(10)]);
var inst_42629 = cljs.core.chunk_first(inst_42625);
var inst_42631 = cljs.core.chunk_rest(inst_42625);
var inst_42632 = cljs.core.count(inst_42629);
var inst_42609 = inst_42631;
var inst_42610 = inst_42629;
var inst_42611 = inst_42632;
var inst_42612 = (0);
var state_42675__$1 = (function (){var statearr_42790 = state_42675;
(statearr_42790[(13)] = inst_42609);

(statearr_42790[(14)] = inst_42610);

(statearr_42790[(15)] = inst_42612);

(statearr_42790[(16)] = inst_42611);

return statearr_42790;
})();
var statearr_42791_45051 = state_42675__$1;
(statearr_42791_45051[(2)] = null);

(statearr_42791_45051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (10))){
var inst_42609 = (state_42675[(13)]);
var inst_42610 = (state_42675[(14)]);
var inst_42612 = (state_42675[(15)]);
var inst_42611 = (state_42675[(16)]);
var inst_42617 = cljs.core._nth(inst_42610,inst_42612);
var inst_42618 = cljs.core.async.muxch_STAR_(inst_42617);
var inst_42619 = cljs.core.async.close_BANG_(inst_42618);
var inst_42620 = (inst_42612 + (1));
var tmp42776 = inst_42609;
var tmp42777 = inst_42610;
var tmp42778 = inst_42611;
var inst_42609__$1 = tmp42776;
var inst_42610__$1 = tmp42777;
var inst_42611__$1 = tmp42778;
var inst_42612__$1 = inst_42620;
var state_42675__$1 = (function (){var statearr_42796 = state_42675;
(statearr_42796[(13)] = inst_42609__$1);

(statearr_42796[(14)] = inst_42610__$1);

(statearr_42796[(15)] = inst_42612__$1);

(statearr_42796[(17)] = inst_42619);

(statearr_42796[(16)] = inst_42611__$1);

return statearr_42796;
})();
var statearr_42800_45054 = state_42675__$1;
(statearr_42800_45054[(2)] = null);

(statearr_42800_45054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (18))){
var inst_42642 = (state_42675[(2)]);
var state_42675__$1 = state_42675;
var statearr_42802_45056 = state_42675__$1;
(statearr_42802_45056[(2)] = inst_42642);

(statearr_42802_45056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42676 === (8))){
var inst_42612 = (state_42675[(15)]);
var inst_42611 = (state_42675[(16)]);
var inst_42614 = (inst_42612 < inst_42611);
var inst_42615 = inst_42614;
var state_42675__$1 = state_42675;
if(cljs.core.truth_(inst_42615)){
var statearr_42803_45065 = state_42675__$1;
(statearr_42803_45065[(1)] = (10));

} else {
var statearr_42811_45067 = state_42675__$1;
(statearr_42811_45067[(1)] = (11));

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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_42813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42813[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_42813[(1)] = (1));

return statearr_42813;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_42675){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_42675);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e42814){var ex__33261__auto__ = e42814;
var statearr_42817_45073 = state_42675;
(statearr_42817_45073[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_42675[(4)]))){
var statearr_42819_45075 = state_42675;
(statearr_42819_45075[(1)] = cljs.core.first((state_42675[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45076 = state_42675;
state_42675 = G__45076;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_42675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_42675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_42822 = f__33524__auto__();
(statearr_42822[(6)] = c__33523__auto___44988);

return statearr_42822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var G__42824 = arguments.length;
switch (G__42824) {
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
var G__42839 = arguments.length;
switch (G__42839) {
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
var G__42852 = arguments.length;
switch (G__42852) {
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
var c__33523__auto___45087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_42908){
var state_val_42909 = (state_42908[(1)]);
if((state_val_42909 === (7))){
var state_42908__$1 = state_42908;
var statearr_42910_45090 = state_42908__$1;
(statearr_42910_45090[(2)] = null);

(statearr_42910_45090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (1))){
var state_42908__$1 = state_42908;
var statearr_42911_45092 = state_42908__$1;
(statearr_42911_45092[(2)] = null);

(statearr_42911_45092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (4))){
var inst_42865 = (state_42908[(7)]);
var inst_42863 = (state_42908[(8)]);
var inst_42867 = (inst_42865 < inst_42863);
var state_42908__$1 = state_42908;
if(cljs.core.truth_(inst_42867)){
var statearr_42912_45095 = state_42908__$1;
(statearr_42912_45095[(1)] = (6));

} else {
var statearr_42913_45096 = state_42908__$1;
(statearr_42913_45096[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (15))){
var inst_42893 = (state_42908[(9)]);
var inst_42898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42893);
var state_42908__$1 = state_42908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42908__$1,(17),out,inst_42898);
} else {
if((state_val_42909 === (13))){
var inst_42893 = (state_42908[(9)]);
var inst_42893__$1 = (state_42908[(2)]);
var inst_42894 = cljs.core.some(cljs.core.nil_QMARK_,inst_42893__$1);
var state_42908__$1 = (function (){var statearr_42917 = state_42908;
(statearr_42917[(9)] = inst_42893__$1);

return statearr_42917;
})();
if(cljs.core.truth_(inst_42894)){
var statearr_42918_45101 = state_42908__$1;
(statearr_42918_45101[(1)] = (14));

} else {
var statearr_42919_45102 = state_42908__$1;
(statearr_42919_45102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (6))){
var state_42908__$1 = state_42908;
var statearr_42920_45107 = state_42908__$1;
(statearr_42920_45107[(2)] = null);

(statearr_42920_45107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (17))){
var inst_42900 = (state_42908[(2)]);
var state_42908__$1 = (function (){var statearr_42926 = state_42908;
(statearr_42926[(10)] = inst_42900);

return statearr_42926;
})();
var statearr_42927_45110 = state_42908__$1;
(statearr_42927_45110[(2)] = null);

(statearr_42927_45110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (3))){
var inst_42905 = (state_42908[(2)]);
var state_42908__$1 = state_42908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42908__$1,inst_42905);
} else {
if((state_val_42909 === (12))){
var _ = (function (){var statearr_42935 = state_42908;
(statearr_42935[(4)] = cljs.core.rest((state_42908[(4)])));

return statearr_42935;
})();
var state_42908__$1 = state_42908;
var ex42924 = (state_42908__$1[(2)]);
var statearr_42937_45119 = state_42908__$1;
(statearr_42937_45119[(5)] = ex42924);


if((ex42924 instanceof Object)){
var statearr_42939_45122 = state_42908__$1;
(statearr_42939_45122[(1)] = (11));

(statearr_42939_45122[(5)] = null);

} else {
throw ex42924;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (2))){
var inst_42861 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42863 = cnt;
var inst_42865 = (0);
var state_42908__$1 = (function (){var statearr_42947 = state_42908;
(statearr_42947[(11)] = inst_42861);

(statearr_42947[(7)] = inst_42865);

(statearr_42947[(8)] = inst_42863);

return statearr_42947;
})();
var statearr_42948_45126 = state_42908__$1;
(statearr_42948_45126[(2)] = null);

(statearr_42948_45126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (11))){
var inst_42872 = (state_42908[(2)]);
var inst_42873 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42908__$1 = (function (){var statearr_42951 = state_42908;
(statearr_42951[(12)] = inst_42872);

return statearr_42951;
})();
var statearr_42952_45139 = state_42908__$1;
(statearr_42952_45139[(2)] = inst_42873);

(statearr_42952_45139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (9))){
var inst_42865 = (state_42908[(7)]);
var _ = (function (){var statearr_42953 = state_42908;
(statearr_42953[(4)] = cljs.core.cons((12),(state_42908[(4)])));

return statearr_42953;
})();
var inst_42879 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42865) : chs__$1.call(null,inst_42865));
var inst_42880 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42865) : done.call(null,inst_42865));
var inst_42881 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42879,inst_42880);
var ___$1 = (function (){var statearr_42958 = state_42908;
(statearr_42958[(4)] = cljs.core.rest((state_42908[(4)])));

return statearr_42958;
})();
var state_42908__$1 = state_42908;
var statearr_42959_45145 = state_42908__$1;
(statearr_42959_45145[(2)] = inst_42881);

(statearr_42959_45145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (5))){
var inst_42891 = (state_42908[(2)]);
var state_42908__$1 = (function (){var statearr_42962 = state_42908;
(statearr_42962[(13)] = inst_42891);

return statearr_42962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42908__$1,(13),dchan);
} else {
if((state_val_42909 === (14))){
var inst_42896 = cljs.core.async.close_BANG_(out);
var state_42908__$1 = state_42908;
var statearr_42965_45149 = state_42908__$1;
(statearr_42965_45149[(2)] = inst_42896);

(statearr_42965_45149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (16))){
var inst_42903 = (state_42908[(2)]);
var state_42908__$1 = state_42908;
var statearr_42968_45150 = state_42908__$1;
(statearr_42968_45150[(2)] = inst_42903);

(statearr_42968_45150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (10))){
var inst_42865 = (state_42908[(7)]);
var inst_42884 = (state_42908[(2)]);
var inst_42885 = (inst_42865 + (1));
var inst_42865__$1 = inst_42885;
var state_42908__$1 = (function (){var statearr_42969 = state_42908;
(statearr_42969[(14)] = inst_42884);

(statearr_42969[(7)] = inst_42865__$1);

return statearr_42969;
})();
var statearr_42970_45151 = state_42908__$1;
(statearr_42970_45151[(2)] = null);

(statearr_42970_45151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42909 === (8))){
var inst_42889 = (state_42908[(2)]);
var state_42908__$1 = state_42908;
var statearr_42971_45153 = state_42908__$1;
(statearr_42971_45153[(2)] = inst_42889);

(statearr_42971_45153[(1)] = (5));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_42978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42978[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_42978[(1)] = (1));

return statearr_42978;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_42908){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_42908);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e42981){var ex__33261__auto__ = e42981;
var statearr_42984_45157 = state_42908;
(statearr_42984_45157[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_42908[(4)]))){
var statearr_42985_45160 = state_42908;
(statearr_42985_45160[(1)] = cljs.core.first((state_42908[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45161 = state_42908;
state_42908 = G__45161;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_42908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_42908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_42992 = f__33524__auto__();
(statearr_42992[(6)] = c__33523__auto___45087);

return statearr_42992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var G__43002 = arguments.length;
switch (G__43002) {
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
var c__33523__auto___45165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43054){
var state_val_43055 = (state_43054[(1)]);
if((state_val_43055 === (7))){
var inst_43031 = (state_43054[(7)]);
var inst_43034 = (state_43054[(8)]);
var inst_43031__$1 = (state_43054[(2)]);
var inst_43034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43031__$1,(0),null);
var inst_43035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43031__$1,(1),null);
var inst_43036 = (inst_43034__$1 == null);
var state_43054__$1 = (function (){var statearr_43057 = state_43054;
(statearr_43057[(7)] = inst_43031__$1);

(statearr_43057[(9)] = inst_43035);

(statearr_43057[(8)] = inst_43034__$1);

return statearr_43057;
})();
if(cljs.core.truth_(inst_43036)){
var statearr_43058_45169 = state_43054__$1;
(statearr_43058_45169[(1)] = (8));

} else {
var statearr_43059_45170 = state_43054__$1;
(statearr_43059_45170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (1))){
var inst_43007 = cljs.core.vec(chs);
var inst_43009 = inst_43007;
var state_43054__$1 = (function (){var statearr_43064 = state_43054;
(statearr_43064[(10)] = inst_43009);

return statearr_43064;
})();
var statearr_43067_45175 = state_43054__$1;
(statearr_43067_45175[(2)] = null);

(statearr_43067_45175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (4))){
var inst_43009 = (state_43054[(10)]);
var state_43054__$1 = state_43054;
return cljs.core.async.ioc_alts_BANG_(state_43054__$1,(7),inst_43009);
} else {
if((state_val_43055 === (6))){
var inst_43050 = (state_43054[(2)]);
var state_43054__$1 = state_43054;
var statearr_43069_45183 = state_43054__$1;
(statearr_43069_45183[(2)] = inst_43050);

(statearr_43069_45183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (3))){
var inst_43052 = (state_43054[(2)]);
var state_43054__$1 = state_43054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43054__$1,inst_43052);
} else {
if((state_val_43055 === (2))){
var inst_43009 = (state_43054[(10)]);
var inst_43012 = cljs.core.count(inst_43009);
var inst_43013 = (inst_43012 > (0));
var state_43054__$1 = state_43054;
if(cljs.core.truth_(inst_43013)){
var statearr_43077_45193 = state_43054__$1;
(statearr_43077_45193[(1)] = (4));

} else {
var statearr_43078_45194 = state_43054__$1;
(statearr_43078_45194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (11))){
var inst_43009 = (state_43054[(10)]);
var inst_43043 = (state_43054[(2)]);
var tmp43070 = inst_43009;
var inst_43009__$1 = tmp43070;
var state_43054__$1 = (function (){var statearr_43080 = state_43054;
(statearr_43080[(10)] = inst_43009__$1);

(statearr_43080[(11)] = inst_43043);

return statearr_43080;
})();
var statearr_43081_45197 = state_43054__$1;
(statearr_43081_45197[(2)] = null);

(statearr_43081_45197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (9))){
var inst_43034 = (state_43054[(8)]);
var state_43054__$1 = state_43054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43054__$1,(11),out,inst_43034);
} else {
if((state_val_43055 === (5))){
var inst_43048 = cljs.core.async.close_BANG_(out);
var state_43054__$1 = state_43054;
var statearr_43086_45200 = state_43054__$1;
(statearr_43086_45200[(2)] = inst_43048);

(statearr_43086_45200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (10))){
var inst_43046 = (state_43054[(2)]);
var state_43054__$1 = state_43054;
var statearr_43088_45201 = state_43054__$1;
(statearr_43088_45201[(2)] = inst_43046);

(statearr_43088_45201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43055 === (8))){
var inst_43009 = (state_43054[(10)]);
var inst_43031 = (state_43054[(7)]);
var inst_43035 = (state_43054[(9)]);
var inst_43034 = (state_43054[(8)]);
var inst_43038 = (function (){var cs = inst_43009;
var vec__43027 = inst_43031;
var v = inst_43034;
var c = inst_43035;
return (function (p1__42997_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42997_SHARP_);
});
})();
var inst_43039 = cljs.core.filterv(inst_43038,inst_43009);
var inst_43009__$1 = inst_43039;
var state_43054__$1 = (function (){var statearr_43095 = state_43054;
(statearr_43095[(10)] = inst_43009__$1);

return statearr_43095;
})();
var statearr_43098_45207 = state_43054__$1;
(statearr_43098_45207[(2)] = null);

(statearr_43098_45207[(1)] = (2));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_43103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43103[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_43103[(1)] = (1));

return statearr_43103;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_43054){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43054);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43107){var ex__33261__auto__ = e43107;
var statearr_43109_45212 = state_43054;
(statearr_43109_45212[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43054[(4)]))){
var statearr_43114_45213 = state_43054;
(statearr_43114_45213[(1)] = cljs.core.first((state_43054[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45214 = state_43054;
state_43054 = G__45214;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_43054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_43054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43121 = f__33524__auto__();
(statearr_43121[(6)] = c__33523__auto___45165);

return statearr_43121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
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
var G__43137 = arguments.length;
switch (G__43137) {
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
var c__33523__auto___45224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43176){
var state_val_43177 = (state_43176[(1)]);
if((state_val_43177 === (7))){
var inst_43153 = (state_43176[(7)]);
var inst_43153__$1 = (state_43176[(2)]);
var inst_43154 = (inst_43153__$1 == null);
var inst_43155 = cljs.core.not(inst_43154);
var state_43176__$1 = (function (){var statearr_43184 = state_43176;
(statearr_43184[(7)] = inst_43153__$1);

return statearr_43184;
})();
if(inst_43155){
var statearr_43186_45228 = state_43176__$1;
(statearr_43186_45228[(1)] = (8));

} else {
var statearr_43190_45229 = state_43176__$1;
(statearr_43190_45229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (1))){
var inst_43146 = (0);
var state_43176__$1 = (function (){var statearr_43192 = state_43176;
(statearr_43192[(8)] = inst_43146);

return statearr_43192;
})();
var statearr_43193_45232 = state_43176__$1;
(statearr_43193_45232[(2)] = null);

(statearr_43193_45232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (4))){
var state_43176__$1 = state_43176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43176__$1,(7),ch);
} else {
if((state_val_43177 === (6))){
var inst_43169 = (state_43176[(2)]);
var state_43176__$1 = state_43176;
var statearr_43200_45235 = state_43176__$1;
(statearr_43200_45235[(2)] = inst_43169);

(statearr_43200_45235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (3))){
var inst_43171 = (state_43176[(2)]);
var inst_43172 = cljs.core.async.close_BANG_(out);
var state_43176__$1 = (function (){var statearr_43202 = state_43176;
(statearr_43202[(9)] = inst_43171);

return statearr_43202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43176__$1,inst_43172);
} else {
if((state_val_43177 === (2))){
var inst_43146 = (state_43176[(8)]);
var inst_43149 = (inst_43146 < n);
var state_43176__$1 = state_43176;
if(cljs.core.truth_(inst_43149)){
var statearr_43209_45241 = state_43176__$1;
(statearr_43209_45241[(1)] = (4));

} else {
var statearr_43210_45245 = state_43176__$1;
(statearr_43210_45245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (11))){
var inst_43146 = (state_43176[(8)]);
var inst_43161 = (state_43176[(2)]);
var inst_43162 = (inst_43146 + (1));
var inst_43146__$1 = inst_43162;
var state_43176__$1 = (function (){var statearr_43214 = state_43176;
(statearr_43214[(8)] = inst_43146__$1);

(statearr_43214[(10)] = inst_43161);

return statearr_43214;
})();
var statearr_43217_45246 = state_43176__$1;
(statearr_43217_45246[(2)] = null);

(statearr_43217_45246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (9))){
var state_43176__$1 = state_43176;
var statearr_43219_45249 = state_43176__$1;
(statearr_43219_45249[(2)] = null);

(statearr_43219_45249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (5))){
var state_43176__$1 = state_43176;
var statearr_43223_45250 = state_43176__$1;
(statearr_43223_45250[(2)] = null);

(statearr_43223_45250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (10))){
var inst_43166 = (state_43176[(2)]);
var state_43176__$1 = state_43176;
var statearr_43229_45252 = state_43176__$1;
(statearr_43229_45252[(2)] = inst_43166);

(statearr_43229_45252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (8))){
var inst_43153 = (state_43176[(7)]);
var state_43176__$1 = state_43176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43176__$1,(11),out,inst_43153);
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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_43234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43234[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_43234[(1)] = (1));

return statearr_43234;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_43176){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43176);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43238){var ex__33261__auto__ = e43238;
var statearr_43241_45257 = state_43176;
(statearr_43241_45257[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43176[(4)]))){
var statearr_43242_45258 = state_43176;
(statearr_43242_45258[(1)] = cljs.core.first((state_43176[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45259 = state_43176;
state_43176 = G__45259;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_43176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_43176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43247 = f__33524__auto__();
(statearr_43247[(6)] = c__33523__auto___45224);

return statearr_43247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43256 = (function (f,ch,meta43257){
this.f = f;
this.ch = ch;
this.meta43257 = meta43257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43258,meta43257__$1){
var self__ = this;
var _43258__$1 = this;
return (new cljs.core.async.t_cljs$core$async43256(self__.f,self__.ch,meta43257__$1));
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43258){
var self__ = this;
var _43258__$1 = this;
return self__.meta43257;
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43278 = (function (f,ch,meta43257,_,fn1,meta43279){
this.f = f;
this.ch = ch;
this.meta43257 = meta43257;
this._ = _;
this.fn1 = fn1;
this.meta43279 = meta43279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43280,meta43279__$1){
var self__ = this;
var _43280__$1 = this;
return (new cljs.core.async.t_cljs$core$async43278(self__.f,self__.ch,self__.meta43257,self__._,self__.fn1,meta43279__$1));
}));

(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43280){
var self__ = this;
var _43280__$1 = this;
return self__.meta43279;
}));

(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43253_SHARP_){
var G__43299 = (((p1__43253_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43253_SHARP_) : self__.f.call(null,p1__43253_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43299) : f1.call(null,G__43299));
});
}));

(cljs.core.async.t_cljs$core$async43278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43257","meta43257",1981607943,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43256","cljs.core.async/t_cljs$core$async43256",883970531,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43279","meta43279",-157610256,null)], null);
}));

(cljs.core.async.t_cljs$core$async43278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43278");

(cljs.core.async.t_cljs$core$async43278.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43278.
 */
cljs.core.async.__GT_t_cljs$core$async43278 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43278(f__$1,ch__$1,meta43257__$1,___$2,fn1__$1,meta43279){
return (new cljs.core.async.t_cljs$core$async43278(f__$1,ch__$1,meta43257__$1,___$2,fn1__$1,meta43279));
});

}

return (new cljs.core.async.t_cljs$core$async43278(self__.f,self__.ch,self__.meta43257,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43315 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43315) : self__.f.call(null,G__43315));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43257","meta43257",1981607943,null)], null);
}));

(cljs.core.async.t_cljs$core$async43256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43256");

(cljs.core.async.t_cljs$core$async43256.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43256.
 */
cljs.core.async.__GT_t_cljs$core$async43256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43256(f__$1,ch__$1,meta43257){
return (new cljs.core.async.t_cljs$core$async43256(f__$1,ch__$1,meta43257));
});

}

return (new cljs.core.async.t_cljs$core$async43256(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43332 = (function (f,ch,meta43333){
this.f = f;
this.ch = ch;
this.meta43333 = meta43333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43334,meta43333__$1){
var self__ = this;
var _43334__$1 = this;
return (new cljs.core.async.t_cljs$core$async43332(self__.f,self__.ch,meta43333__$1));
}));

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43334){
var self__ = this;
var _43334__$1 = this;
return self__.meta43333;
}));

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43333","meta43333",-684387546,null)], null);
}));

(cljs.core.async.t_cljs$core$async43332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43332");

(cljs.core.async.t_cljs$core$async43332.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43332.
 */
cljs.core.async.__GT_t_cljs$core$async43332 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43332(f__$1,ch__$1,meta43333){
return (new cljs.core.async.t_cljs$core$async43332(f__$1,ch__$1,meta43333));
});

}

return (new cljs.core.async.t_cljs$core$async43332(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43363 = (function (p,ch,meta43364){
this.p = p;
this.ch = ch;
this.meta43364 = meta43364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43365,meta43364__$1){
var self__ = this;
var _43365__$1 = this;
return (new cljs.core.async.t_cljs$core$async43363(self__.p,self__.ch,meta43364__$1));
}));

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43365){
var self__ = this;
var _43365__$1 = this;
return self__.meta43364;
}));

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43364","meta43364",-2122934947,null)], null);
}));

(cljs.core.async.t_cljs$core$async43363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43363");

(cljs.core.async.t_cljs$core$async43363.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async43363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43363.
 */
cljs.core.async.__GT_t_cljs$core$async43363 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43363(p__$1,ch__$1,meta43364){
return (new cljs.core.async.t_cljs$core$async43363(p__$1,ch__$1,meta43364));
});

}

return (new cljs.core.async.t_cljs$core$async43363(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43395 = arguments.length;
switch (G__43395) {
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
var c__33523__auto___45336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43428){
var state_val_43429 = (state_43428[(1)]);
if((state_val_43429 === (7))){
var inst_43424 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
var statearr_43436_45340 = state_43428__$1;
(statearr_43436_45340[(2)] = inst_43424);

(statearr_43436_45340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (1))){
var state_43428__$1 = state_43428;
var statearr_43445_45350 = state_43428__$1;
(statearr_43445_45350[(2)] = null);

(statearr_43445_45350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (4))){
var inst_43406 = (state_43428[(7)]);
var inst_43406__$1 = (state_43428[(2)]);
var inst_43407 = (inst_43406__$1 == null);
var state_43428__$1 = (function (){var statearr_43448 = state_43428;
(statearr_43448[(7)] = inst_43406__$1);

return statearr_43448;
})();
if(cljs.core.truth_(inst_43407)){
var statearr_43450_45361 = state_43428__$1;
(statearr_43450_45361[(1)] = (5));

} else {
var statearr_43451_45367 = state_43428__$1;
(statearr_43451_45367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (6))){
var inst_43406 = (state_43428[(7)]);
var inst_43414 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43406) : p.call(null,inst_43406));
var state_43428__$1 = state_43428;
if(cljs.core.truth_(inst_43414)){
var statearr_43455_45368 = state_43428__$1;
(statearr_43455_45368[(1)] = (8));

} else {
var statearr_43457_45369 = state_43428__$1;
(statearr_43457_45369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (3))){
var inst_43426 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43428__$1,inst_43426);
} else {
if((state_val_43429 === (2))){
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43428__$1,(4),ch);
} else {
if((state_val_43429 === (11))){
var inst_43418 = (state_43428[(2)]);
var state_43428__$1 = state_43428;
var statearr_43465_45372 = state_43428__$1;
(statearr_43465_45372[(2)] = inst_43418);

(statearr_43465_45372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (9))){
var state_43428__$1 = state_43428;
var statearr_43468_45373 = state_43428__$1;
(statearr_43468_45373[(2)] = null);

(statearr_43468_45373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (5))){
var inst_43409 = cljs.core.async.close_BANG_(out);
var state_43428__$1 = state_43428;
var statearr_43478_45376 = state_43428__$1;
(statearr_43478_45376[(2)] = inst_43409);

(statearr_43478_45376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (10))){
var inst_43421 = (state_43428[(2)]);
var state_43428__$1 = (function (){var statearr_43491 = state_43428;
(statearr_43491[(8)] = inst_43421);

return statearr_43491;
})();
var statearr_43499_45377 = state_43428__$1;
(statearr_43499_45377[(2)] = null);

(statearr_43499_45377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43429 === (8))){
var inst_43406 = (state_43428[(7)]);
var state_43428__$1 = state_43428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43428__$1,(11),out,inst_43406);
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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_43526 = [null,null,null,null,null,null,null,null,null];
(statearr_43526[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_43526[(1)] = (1));

return statearr_43526;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_43428){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43428);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43530){var ex__33261__auto__ = e43530;
var statearr_43534_45379 = state_43428;
(statearr_43534_45379[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43428[(4)]))){
var statearr_43535_45380 = state_43428;
(statearr_43535_45380[(1)] = cljs.core.first((state_43428[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45381 = state_43428;
state_43428 = G__45381;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_43428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_43428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43540 = f__33524__auto__();
(statearr_43540[(6)] = c__33523__auto___45336);

return statearr_43540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43553 = arguments.length;
switch (G__43553) {
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
var c__33523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43632){
var state_val_43633 = (state_43632[(1)]);
if((state_val_43633 === (7))){
var inst_43627 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
var statearr_43644_45415 = state_43632__$1;
(statearr_43644_45415[(2)] = inst_43627);

(statearr_43644_45415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (20))){
var inst_43594 = (state_43632[(7)]);
var inst_43608 = (state_43632[(2)]);
var inst_43609 = cljs.core.next(inst_43594);
var inst_43578 = inst_43609;
var inst_43579 = null;
var inst_43580 = (0);
var inst_43581 = (0);
var state_43632__$1 = (function (){var statearr_43646 = state_43632;
(statearr_43646[(8)] = inst_43579);

(statearr_43646[(9)] = inst_43580);

(statearr_43646[(10)] = inst_43581);

(statearr_43646[(11)] = inst_43578);

(statearr_43646[(12)] = inst_43608);

return statearr_43646;
})();
var statearr_43647_45416 = state_43632__$1;
(statearr_43647_45416[(2)] = null);

(statearr_43647_45416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (1))){
var state_43632__$1 = state_43632;
var statearr_43651_45421 = state_43632__$1;
(statearr_43651_45421[(2)] = null);

(statearr_43651_45421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (4))){
var inst_43564 = (state_43632[(13)]);
var inst_43564__$1 = (state_43632[(2)]);
var inst_43565 = (inst_43564__$1 == null);
var state_43632__$1 = (function (){var statearr_43653 = state_43632;
(statearr_43653[(13)] = inst_43564__$1);

return statearr_43653;
})();
if(cljs.core.truth_(inst_43565)){
var statearr_43654_45424 = state_43632__$1;
(statearr_43654_45424[(1)] = (5));

} else {
var statearr_43655_45428 = state_43632__$1;
(statearr_43655_45428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (15))){
var state_43632__$1 = state_43632;
var statearr_43662_45430 = state_43632__$1;
(statearr_43662_45430[(2)] = null);

(statearr_43662_45430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (21))){
var state_43632__$1 = state_43632;
var statearr_43664_45434 = state_43632__$1;
(statearr_43664_45434[(2)] = null);

(statearr_43664_45434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (13))){
var inst_43579 = (state_43632[(8)]);
var inst_43580 = (state_43632[(9)]);
var inst_43581 = (state_43632[(10)]);
var inst_43578 = (state_43632[(11)]);
var inst_43589 = (state_43632[(2)]);
var inst_43590 = (inst_43581 + (1));
var tmp43656 = inst_43579;
var tmp43657 = inst_43580;
var tmp43658 = inst_43578;
var inst_43578__$1 = tmp43658;
var inst_43579__$1 = tmp43656;
var inst_43580__$1 = tmp43657;
var inst_43581__$1 = inst_43590;
var state_43632__$1 = (function (){var statearr_43667 = state_43632;
(statearr_43667[(8)] = inst_43579__$1);

(statearr_43667[(9)] = inst_43580__$1);

(statearr_43667[(14)] = inst_43589);

(statearr_43667[(10)] = inst_43581__$1);

(statearr_43667[(11)] = inst_43578__$1);

return statearr_43667;
})();
var statearr_43671_45461 = state_43632__$1;
(statearr_43671_45461[(2)] = null);

(statearr_43671_45461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (22))){
var state_43632__$1 = state_43632;
var statearr_43675_45462 = state_43632__$1;
(statearr_43675_45462[(2)] = null);

(statearr_43675_45462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (6))){
var inst_43564 = (state_43632[(13)]);
var inst_43573 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43564) : f.call(null,inst_43564));
var inst_43574 = cljs.core.seq(inst_43573);
var inst_43578 = inst_43574;
var inst_43579 = null;
var inst_43580 = (0);
var inst_43581 = (0);
var state_43632__$1 = (function (){var statearr_43679 = state_43632;
(statearr_43679[(8)] = inst_43579);

(statearr_43679[(9)] = inst_43580);

(statearr_43679[(10)] = inst_43581);

(statearr_43679[(11)] = inst_43578);

return statearr_43679;
})();
var statearr_43680_45473 = state_43632__$1;
(statearr_43680_45473[(2)] = null);

(statearr_43680_45473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (17))){
var inst_43594 = (state_43632[(7)]);
var inst_43598 = cljs.core.chunk_first(inst_43594);
var inst_43599 = cljs.core.chunk_rest(inst_43594);
var inst_43601 = cljs.core.count(inst_43598);
var inst_43578 = inst_43599;
var inst_43579 = inst_43598;
var inst_43580 = inst_43601;
var inst_43581 = (0);
var state_43632__$1 = (function (){var statearr_43681 = state_43632;
(statearr_43681[(8)] = inst_43579);

(statearr_43681[(9)] = inst_43580);

(statearr_43681[(10)] = inst_43581);

(statearr_43681[(11)] = inst_43578);

return statearr_43681;
})();
var statearr_43682_45477 = state_43632__$1;
(statearr_43682_45477[(2)] = null);

(statearr_43682_45477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (3))){
var inst_43629 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43632__$1,inst_43629);
} else {
if((state_val_43633 === (12))){
var inst_43617 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
var statearr_43687_45479 = state_43632__$1;
(statearr_43687_45479[(2)] = inst_43617);

(statearr_43687_45479[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (2))){
var state_43632__$1 = state_43632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43632__$1,(4),in$);
} else {
if((state_val_43633 === (23))){
var inst_43625 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
var statearr_43691_45481 = state_43632__$1;
(statearr_43691_45481[(2)] = inst_43625);

(statearr_43691_45481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (19))){
var inst_43612 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
var statearr_43693_45482 = state_43632__$1;
(statearr_43693_45482[(2)] = inst_43612);

(statearr_43693_45482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (11))){
var inst_43594 = (state_43632[(7)]);
var inst_43578 = (state_43632[(11)]);
var inst_43594__$1 = cljs.core.seq(inst_43578);
var state_43632__$1 = (function (){var statearr_43695 = state_43632;
(statearr_43695[(7)] = inst_43594__$1);

return statearr_43695;
})();
if(inst_43594__$1){
var statearr_43699_45485 = state_43632__$1;
(statearr_43699_45485[(1)] = (14));

} else {
var statearr_43701_45486 = state_43632__$1;
(statearr_43701_45486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (9))){
var inst_43619 = (state_43632[(2)]);
var inst_43620 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43632__$1 = (function (){var statearr_43702 = state_43632;
(statearr_43702[(15)] = inst_43619);

return statearr_43702;
})();
if(cljs.core.truth_(inst_43620)){
var statearr_43703_45487 = state_43632__$1;
(statearr_43703_45487[(1)] = (21));

} else {
var statearr_43710_45488 = state_43632__$1;
(statearr_43710_45488[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (5))){
var inst_43567 = cljs.core.async.close_BANG_(out);
var state_43632__$1 = state_43632;
var statearr_43712_45494 = state_43632__$1;
(statearr_43712_45494[(2)] = inst_43567);

(statearr_43712_45494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (14))){
var inst_43594 = (state_43632[(7)]);
var inst_43596 = cljs.core.chunked_seq_QMARK_(inst_43594);
var state_43632__$1 = state_43632;
if(inst_43596){
var statearr_43717_45497 = state_43632__$1;
(statearr_43717_45497[(1)] = (17));

} else {
var statearr_43718_45498 = state_43632__$1;
(statearr_43718_45498[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (16))){
var inst_43615 = (state_43632[(2)]);
var state_43632__$1 = state_43632;
var statearr_43724_45499 = state_43632__$1;
(statearr_43724_45499[(2)] = inst_43615);

(statearr_43724_45499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43633 === (10))){
var inst_43579 = (state_43632[(8)]);
var inst_43581 = (state_43632[(10)]);
var inst_43586 = cljs.core._nth(inst_43579,inst_43581);
var state_43632__$1 = state_43632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43632__$1,(13),out,inst_43586);
} else {
if((state_val_43633 === (18))){
var inst_43594 = (state_43632[(7)]);
var inst_43605 = cljs.core.first(inst_43594);
var state_43632__$1 = state_43632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43632__$1,(20),out,inst_43605);
} else {
if((state_val_43633 === (8))){
var inst_43580 = (state_43632[(9)]);
var inst_43581 = (state_43632[(10)]);
var inst_43583 = (inst_43581 < inst_43580);
var inst_43584 = inst_43583;
var state_43632__$1 = state_43632;
if(cljs.core.truth_(inst_43584)){
var statearr_43736_45500 = state_43632__$1;
(statearr_43736_45500[(1)] = (10));

} else {
var statearr_43737_45501 = state_43632__$1;
(statearr_43737_45501[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____0 = (function (){
var statearr_43738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43738[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__);

(statearr_43738[(1)] = (1));

return statearr_43738;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____1 = (function (state_43632){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43632);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43743){var ex__33261__auto__ = e43743;
var statearr_43747_45503 = state_43632;
(statearr_43747_45503[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43632[(4)]))){
var statearr_43749_45504 = state_43632;
(statearr_43749_45504[(1)] = cljs.core.first((state_43632[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45510 = state_43632;
state_43632 = G__45510;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__ = function(state_43632){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____1.call(this,state_43632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33258__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43750 = f__33524__auto__();
(statearr_43750[(6)] = c__33523__auto__);

return statearr_43750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

return c__33523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43759 = arguments.length;
switch (G__43759) {
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
var G__43770 = arguments.length;
switch (G__43770) {
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
var G__43775 = arguments.length;
switch (G__43775) {
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
var c__33523__auto___45527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43810){
var state_val_43811 = (state_43810[(1)]);
if((state_val_43811 === (7))){
var inst_43805 = (state_43810[(2)]);
var state_43810__$1 = state_43810;
var statearr_43815_45529 = state_43810__$1;
(statearr_43815_45529[(2)] = inst_43805);

(statearr_43815_45529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (1))){
var inst_43787 = null;
var state_43810__$1 = (function (){var statearr_43816 = state_43810;
(statearr_43816[(7)] = inst_43787);

return statearr_43816;
})();
var statearr_43819_45531 = state_43810__$1;
(statearr_43819_45531[(2)] = null);

(statearr_43819_45531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (4))){
var inst_43790 = (state_43810[(8)]);
var inst_43790__$1 = (state_43810[(2)]);
var inst_43791 = (inst_43790__$1 == null);
var inst_43792 = cljs.core.not(inst_43791);
var state_43810__$1 = (function (){var statearr_43821 = state_43810;
(statearr_43821[(8)] = inst_43790__$1);

return statearr_43821;
})();
if(inst_43792){
var statearr_43823_45533 = state_43810__$1;
(statearr_43823_45533[(1)] = (5));

} else {
var statearr_43827_45537 = state_43810__$1;
(statearr_43827_45537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (6))){
var state_43810__$1 = state_43810;
var statearr_43829_45538 = state_43810__$1;
(statearr_43829_45538[(2)] = null);

(statearr_43829_45538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (3))){
var inst_43807 = (state_43810[(2)]);
var inst_43808 = cljs.core.async.close_BANG_(out);
var state_43810__$1 = (function (){var statearr_43831 = state_43810;
(statearr_43831[(9)] = inst_43807);

return statearr_43831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43810__$1,inst_43808);
} else {
if((state_val_43811 === (2))){
var state_43810__$1 = state_43810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43810__$1,(4),ch);
} else {
if((state_val_43811 === (11))){
var inst_43790 = (state_43810[(8)]);
var inst_43799 = (state_43810[(2)]);
var inst_43787 = inst_43790;
var state_43810__$1 = (function (){var statearr_43833 = state_43810;
(statearr_43833[(10)] = inst_43799);

(statearr_43833[(7)] = inst_43787);

return statearr_43833;
})();
var statearr_43835_45545 = state_43810__$1;
(statearr_43835_45545[(2)] = null);

(statearr_43835_45545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (9))){
var inst_43790 = (state_43810[(8)]);
var state_43810__$1 = state_43810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43810__$1,(11),out,inst_43790);
} else {
if((state_val_43811 === (5))){
var inst_43790 = (state_43810[(8)]);
var inst_43787 = (state_43810[(7)]);
var inst_43794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43790,inst_43787);
var state_43810__$1 = state_43810;
if(inst_43794){
var statearr_43837_45546 = state_43810__$1;
(statearr_43837_45546[(1)] = (8));

} else {
var statearr_43838_45547 = state_43810__$1;
(statearr_43838_45547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (10))){
var inst_43802 = (state_43810[(2)]);
var state_43810__$1 = state_43810;
var statearr_43839_45548 = state_43810__$1;
(statearr_43839_45548[(2)] = inst_43802);

(statearr_43839_45548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43811 === (8))){
var inst_43787 = (state_43810[(7)]);
var tmp43836 = inst_43787;
var inst_43787__$1 = tmp43836;
var state_43810__$1 = (function (){var statearr_43841 = state_43810;
(statearr_43841[(7)] = inst_43787__$1);

return statearr_43841;
})();
var statearr_43845_45549 = state_43810__$1;
(statearr_43845_45549[(2)] = null);

(statearr_43845_45549[(1)] = (2));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_43846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43846[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_43846[(1)] = (1));

return statearr_43846;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_43810){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43810);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43847){var ex__33261__auto__ = e43847;
var statearr_43848_45558 = state_43810;
(statearr_43848_45558[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43810[(4)]))){
var statearr_43849_45565 = state_43810;
(statearr_43849_45565[(1)] = cljs.core.first((state_43810[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45575 = state_43810;
state_43810 = G__45575;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_43810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_43810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43851 = f__33524__auto__();
(statearr_43851[(6)] = c__33523__auto___45527);

return statearr_43851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43857 = arguments.length;
switch (G__43857) {
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
var c__33523__auto___45595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_43900){
var state_val_43901 = (state_43900[(1)]);
if((state_val_43901 === (7))){
var inst_43896 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43907_45597 = state_43900__$1;
(statearr_43907_45597[(2)] = inst_43896);

(statearr_43907_45597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (1))){
var inst_43860 = (new Array(n));
var inst_43861 = inst_43860;
var inst_43862 = (0);
var state_43900__$1 = (function (){var statearr_43908 = state_43900;
(statearr_43908[(7)] = inst_43862);

(statearr_43908[(8)] = inst_43861);

return statearr_43908;
})();
var statearr_43909_45599 = state_43900__$1;
(statearr_43909_45599[(2)] = null);

(statearr_43909_45599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (4))){
var inst_43865 = (state_43900[(9)]);
var inst_43865__$1 = (state_43900[(2)]);
var inst_43866 = (inst_43865__$1 == null);
var inst_43867 = cljs.core.not(inst_43866);
var state_43900__$1 = (function (){var statearr_43910 = state_43900;
(statearr_43910[(9)] = inst_43865__$1);

return statearr_43910;
})();
if(inst_43867){
var statearr_43911_45603 = state_43900__$1;
(statearr_43911_45603[(1)] = (5));

} else {
var statearr_43912_45604 = state_43900__$1;
(statearr_43912_45604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (15))){
var inst_43890 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43915_45605 = state_43900__$1;
(statearr_43915_45605[(2)] = inst_43890);

(statearr_43915_45605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (13))){
var state_43900__$1 = state_43900;
var statearr_43916_45606 = state_43900__$1;
(statearr_43916_45606[(2)] = null);

(statearr_43916_45606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (6))){
var inst_43862 = (state_43900[(7)]);
var inst_43886 = (inst_43862 > (0));
var state_43900__$1 = state_43900;
if(cljs.core.truth_(inst_43886)){
var statearr_43921_45608 = state_43900__$1;
(statearr_43921_45608[(1)] = (12));

} else {
var statearr_43922_45609 = state_43900__$1;
(statearr_43922_45609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (3))){
var inst_43898 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43900__$1,inst_43898);
} else {
if((state_val_43901 === (12))){
var inst_43861 = (state_43900[(8)]);
var inst_43888 = cljs.core.vec(inst_43861);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43900__$1,(15),out,inst_43888);
} else {
if((state_val_43901 === (2))){
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43900__$1,(4),ch);
} else {
if((state_val_43901 === (11))){
var inst_43880 = (state_43900[(2)]);
var inst_43881 = (new Array(n));
var inst_43861 = inst_43881;
var inst_43862 = (0);
var state_43900__$1 = (function (){var statearr_43936 = state_43900;
(statearr_43936[(10)] = inst_43880);

(statearr_43936[(7)] = inst_43862);

(statearr_43936[(8)] = inst_43861);

return statearr_43936;
})();
var statearr_43938_45618 = state_43900__$1;
(statearr_43938_45618[(2)] = null);

(statearr_43938_45618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (9))){
var inst_43861 = (state_43900[(8)]);
var inst_43875 = cljs.core.vec(inst_43861);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43900__$1,(11),out,inst_43875);
} else {
if((state_val_43901 === (5))){
var inst_43870 = (state_43900[(11)]);
var inst_43862 = (state_43900[(7)]);
var inst_43865 = (state_43900[(9)]);
var inst_43861 = (state_43900[(8)]);
var inst_43869 = (inst_43861[inst_43862] = inst_43865);
var inst_43870__$1 = (inst_43862 + (1));
var inst_43871 = (inst_43870__$1 < n);
var state_43900__$1 = (function (){var statearr_43940 = state_43900;
(statearr_43940[(11)] = inst_43870__$1);

(statearr_43940[(12)] = inst_43869);

return statearr_43940;
})();
if(cljs.core.truth_(inst_43871)){
var statearr_43947_45628 = state_43900__$1;
(statearr_43947_45628[(1)] = (8));

} else {
var statearr_43948_45629 = state_43900__$1;
(statearr_43948_45629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (14))){
var inst_43893 = (state_43900[(2)]);
var inst_43894 = cljs.core.async.close_BANG_(out);
var state_43900__$1 = (function (){var statearr_43962 = state_43900;
(statearr_43962[(13)] = inst_43893);

return statearr_43962;
})();
var statearr_43963_45636 = state_43900__$1;
(statearr_43963_45636[(2)] = inst_43894);

(statearr_43963_45636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (10))){
var inst_43884 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43965_45638 = state_43900__$1;
(statearr_43965_45638[(2)] = inst_43884);

(statearr_43965_45638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (8))){
var inst_43870 = (state_43900[(11)]);
var inst_43861 = (state_43900[(8)]);
var tmp43949 = inst_43861;
var inst_43861__$1 = tmp43949;
var inst_43862 = inst_43870;
var state_43900__$1 = (function (){var statearr_43967 = state_43900;
(statearr_43967[(7)] = inst_43862);

(statearr_43967[(8)] = inst_43861__$1);

return statearr_43967;
})();
var statearr_43968_45639 = state_43900__$1;
(statearr_43968_45639[(2)] = null);

(statearr_43968_45639[(1)] = (2));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_43970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43970[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_43970[(1)] = (1));

return statearr_43970;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_43900){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_43900);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e43971){var ex__33261__auto__ = e43971;
var statearr_43974_45640 = state_43900;
(statearr_43974_45640[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_43900[(4)]))){
var statearr_43975_45641 = state_43900;
(statearr_43975_45641[(1)] = cljs.core.first((state_43900[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45642 = state_43900;
state_43900 = G__45642;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_43900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_43900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_43976 = f__33524__auto__();
(statearr_43976[(6)] = c__33523__auto___45595);

return statearr_43976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43978 = arguments.length;
switch (G__43978) {
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
var c__33523__auto___45664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_44029){
var state_val_44030 = (state_44029[(1)]);
if((state_val_44030 === (7))){
var inst_44024 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44035_45666 = state_44029__$1;
(statearr_44035_45666[(2)] = inst_44024);

(statearr_44035_45666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (1))){
var inst_43979 = [];
var inst_43980 = inst_43979;
var inst_43981 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44029__$1 = (function (){var statearr_44036 = state_44029;
(statearr_44036[(7)] = inst_43980);

(statearr_44036[(8)] = inst_43981);

return statearr_44036;
})();
var statearr_44037_45667 = state_44029__$1;
(statearr_44037_45667[(2)] = null);

(statearr_44037_45667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (4))){
var inst_43985 = (state_44029[(9)]);
var inst_43985__$1 = (state_44029[(2)]);
var inst_43986 = (inst_43985__$1 == null);
var inst_43987 = cljs.core.not(inst_43986);
var state_44029__$1 = (function (){var statearr_44039 = state_44029;
(statearr_44039[(9)] = inst_43985__$1);

return statearr_44039;
})();
if(inst_43987){
var statearr_44042_45670 = state_44029__$1;
(statearr_44042_45670[(1)] = (5));

} else {
var statearr_44043_45671 = state_44029__$1;
(statearr_44043_45671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (15))){
var inst_43980 = (state_44029[(7)]);
var inst_44016 = cljs.core.vec(inst_43980);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44029__$1,(18),out,inst_44016);
} else {
if((state_val_44030 === (13))){
var inst_44011 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44049_45686 = state_44029__$1;
(statearr_44049_45686[(2)] = inst_44011);

(statearr_44049_45686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (6))){
var inst_43980 = (state_44029[(7)]);
var inst_44013 = inst_43980.length;
var inst_44014 = (inst_44013 > (0));
var state_44029__$1 = state_44029;
if(cljs.core.truth_(inst_44014)){
var statearr_44057_45693 = state_44029__$1;
(statearr_44057_45693[(1)] = (15));

} else {
var statearr_44058_45694 = state_44029__$1;
(statearr_44058_45694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (17))){
var inst_44021 = (state_44029[(2)]);
var inst_44022 = cljs.core.async.close_BANG_(out);
var state_44029__$1 = (function (){var statearr_44061 = state_44029;
(statearr_44061[(10)] = inst_44021);

return statearr_44061;
})();
var statearr_44062_45701 = state_44029__$1;
(statearr_44062_45701[(2)] = inst_44022);

(statearr_44062_45701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (3))){
var inst_44027 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44029__$1,inst_44027);
} else {
if((state_val_44030 === (12))){
var inst_43980 = (state_44029[(7)]);
var inst_44004 = cljs.core.vec(inst_43980);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44029__$1,(14),out,inst_44004);
} else {
if((state_val_44030 === (2))){
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44029__$1,(4),ch);
} else {
if((state_val_44030 === (11))){
var inst_43980 = (state_44029[(7)]);
var inst_43985 = (state_44029[(9)]);
var inst_43989 = (state_44029[(11)]);
var inst_43998 = inst_43980.push(inst_43985);
var tmp44063 = inst_43980;
var inst_43980__$1 = tmp44063;
var inst_43981 = inst_43989;
var state_44029__$1 = (function (){var statearr_44066 = state_44029;
(statearr_44066[(12)] = inst_43998);

(statearr_44066[(7)] = inst_43980__$1);

(statearr_44066[(8)] = inst_43981);

return statearr_44066;
})();
var statearr_44070_45705 = state_44029__$1;
(statearr_44070_45705[(2)] = null);

(statearr_44070_45705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (9))){
var inst_43981 = (state_44029[(8)]);
var inst_43994 = cljs.core.keyword_identical_QMARK_(inst_43981,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_44029__$1 = state_44029;
var statearr_44071_45709 = state_44029__$1;
(statearr_44071_45709[(2)] = inst_43994);

(statearr_44071_45709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (5))){
var inst_43991 = (state_44029[(13)]);
var inst_43985 = (state_44029[(9)]);
var inst_43989 = (state_44029[(11)]);
var inst_43981 = (state_44029[(8)]);
var inst_43989__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43985) : f.call(null,inst_43985));
var inst_43991__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43989__$1,inst_43981);
var state_44029__$1 = (function (){var statearr_44072 = state_44029;
(statearr_44072[(13)] = inst_43991__$1);

(statearr_44072[(11)] = inst_43989__$1);

return statearr_44072;
})();
if(inst_43991__$1){
var statearr_44073_45716 = state_44029__$1;
(statearr_44073_45716[(1)] = (8));

} else {
var statearr_44074_45717 = state_44029__$1;
(statearr_44074_45717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (14))){
var inst_43985 = (state_44029[(9)]);
var inst_43989 = (state_44029[(11)]);
var inst_44006 = (state_44029[(2)]);
var inst_44007 = [];
var inst_44008 = inst_44007.push(inst_43985);
var inst_43980 = inst_44007;
var inst_43981 = inst_43989;
var state_44029__$1 = (function (){var statearr_44075 = state_44029;
(statearr_44075[(14)] = inst_44008);

(statearr_44075[(7)] = inst_43980);

(statearr_44075[(15)] = inst_44006);

(statearr_44075[(8)] = inst_43981);

return statearr_44075;
})();
var statearr_44076_45720 = state_44029__$1;
(statearr_44076_45720[(2)] = null);

(statearr_44076_45720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (16))){
var state_44029__$1 = state_44029;
var statearr_44079_45721 = state_44029__$1;
(statearr_44079_45721[(2)] = null);

(statearr_44079_45721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (10))){
var inst_43996 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
if(cljs.core.truth_(inst_43996)){
var statearr_44080_45728 = state_44029__$1;
(statearr_44080_45728[(1)] = (11));

} else {
var statearr_44082_45729 = state_44029__$1;
(statearr_44082_45729[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (18))){
var inst_44018 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
var statearr_44093_45730 = state_44029__$1;
(statearr_44093_45730[(2)] = inst_44018);

(statearr_44093_45730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (8))){
var inst_43991 = (state_44029[(13)]);
var state_44029__$1 = state_44029;
var statearr_44100_45731 = state_44029__$1;
(statearr_44100_45731[(2)] = inst_43991);

(statearr_44100_45731[(1)] = (10));


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
var cljs$core$async$state_machine__33258__auto__ = null;
var cljs$core$async$state_machine__33258__auto____0 = (function (){
var statearr_44107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44107[(0)] = cljs$core$async$state_machine__33258__auto__);

(statearr_44107[(1)] = (1));

return statearr_44107;
});
var cljs$core$async$state_machine__33258__auto____1 = (function (state_44029){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_44029);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e44108){var ex__33261__auto__ = e44108;
var statearr_44109_45733 = state_44029;
(statearr_44109_45733[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_44029[(4)]))){
var statearr_44110_45734 = state_44029;
(statearr_44110_45734[(1)] = cljs.core.first((state_44029[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45735 = state_44029;
state_44029 = G__45735;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
cljs$core$async$state_machine__33258__auto__ = function(state_44029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33258__auto____1.call(this,state_44029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33258__auto____0;
cljs$core$async$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33258__auto____1;
return cljs$core$async$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_44116 = f__33524__auto__();
(statearr_44116[(6)] = c__33523__auto___45664);

return statearr_44116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
