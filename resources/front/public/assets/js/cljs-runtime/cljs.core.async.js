goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33733 = arguments.length;
switch (G__33733) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33739 = (function (f,blockable,meta33740){
this.f = f;
this.blockable = blockable;
this.meta33740 = meta33740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33741,meta33740__$1){
var self__ = this;
var _33741__$1 = this;
return (new cljs.core.async.t_cljs$core$async33739(self__.f,self__.blockable,meta33740__$1));
}));

(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33741){
var self__ = this;
var _33741__$1 = this;
return self__.meta33740;
}));

(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33740","meta33740",-1611844519,null)], null);
}));

(cljs.core.async.t_cljs$core$async33739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33739");

(cljs.core.async.t_cljs$core$async33739.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33739.
 */
cljs.core.async.__GT_t_cljs$core$async33739 = (function cljs$core$async$__GT_t_cljs$core$async33739(f__$1,blockable__$1,meta33740){
return (new cljs.core.async.t_cljs$core$async33739(f__$1,blockable__$1,meta33740));
});

}

return (new cljs.core.async.t_cljs$core$async33739(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33765 = arguments.length;
switch (G__33765) {
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
var G__33767 = arguments.length;
switch (G__33767) {
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
var G__33770 = arguments.length;
switch (G__33770) {
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
var val_35894 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35894) : fn1.call(null,val_35894));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35894) : fn1.call(null,val_35894));
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
var G__33774 = arguments.length;
switch (G__33774) {
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
var n__5636__auto___35900 = n;
var x_35901 = (0);
while(true){
if((x_35901 < n__5636__auto___35900)){
(a[x_35901] = x_35901);

var G__35902 = (x_35901 + (1));
x_35901 = G__35902;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33778 = (function (flag,meta33779){
this.flag = flag;
this.meta33779 = meta33779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33780,meta33779__$1){
var self__ = this;
var _33780__$1 = this;
return (new cljs.core.async.t_cljs$core$async33778(self__.flag,meta33779__$1));
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33780){
var self__ = this;
var _33780__$1 = this;
return self__.meta33779;
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33779","meta33779",1666470495,null)], null);
}));

(cljs.core.async.t_cljs$core$async33778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33778");

(cljs.core.async.t_cljs$core$async33778.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33778.
 */
cljs.core.async.__GT_t_cljs$core$async33778 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33778(flag__$1,meta33779){
return (new cljs.core.async.t_cljs$core$async33778(flag__$1,meta33779));
});

}

return (new cljs.core.async.t_cljs$core$async33778(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33781 = (function (flag,cb,meta33782){
this.flag = flag;
this.cb = cb;
this.meta33782 = meta33782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33783,meta33782__$1){
var self__ = this;
var _33783__$1 = this;
return (new cljs.core.async.t_cljs$core$async33781(self__.flag,self__.cb,meta33782__$1));
}));

(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33783){
var self__ = this;
var _33783__$1 = this;
return self__.meta33782;
}));

(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33782","meta33782",1537588107,null)], null);
}));

(cljs.core.async.t_cljs$core$async33781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33781");

(cljs.core.async.t_cljs$core$async33781.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33781.
 */
cljs.core.async.__GT_t_cljs$core$async33781 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33781(flag__$1,cb__$1,meta33782){
return (new cljs.core.async.t_cljs$core$async33781(flag__$1,cb__$1,meta33782));
});

}

return (new cljs.core.async.t_cljs$core$async33781(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33785_SHARP_){
var G__33787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33787) : fret.call(null,G__33787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33786_SHARP_){
var G__33788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33788) : fret.call(null,G__33788));
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
var G__35908 = (i + (1));
i = G__35908;
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
var len__5769__auto___35909 = arguments.length;
var i__5770__auto___35910 = (0);
while(true){
if((i__5770__auto___35910 < len__5769__auto___35909)){
args__5775__auto__.push((arguments[i__5770__auto___35910]));

var G__35911 = (i__5770__auto___35910 + (1));
i__5770__auto___35910 = G__35911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33793){
var map__33794 = p__33793;
var map__33794__$1 = cljs.core.__destructure_map(map__33794);
var opts = map__33794__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33791){
var G__33792 = cljs.core.first(seq33791);
var seq33791__$1 = cljs.core.next(seq33791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33792,seq33791__$1);
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
var G__33797 = arguments.length;
switch (G__33797) {
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
var c__33655__auto___35919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_33824){
var state_val_33825 = (state_33824[(1)]);
if((state_val_33825 === (7))){
var inst_33819 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33826_35926 = state_33824__$1;
(statearr_33826_35926[(2)] = inst_33819);

(statearr_33826_35926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (1))){
var state_33824__$1 = state_33824;
var statearr_33827_35927 = state_33824__$1;
(statearr_33827_35927[(2)] = null);

(statearr_33827_35927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (4))){
var inst_33801 = (state_33824[(7)]);
var inst_33801__$1 = (state_33824[(2)]);
var inst_33802 = (inst_33801__$1 == null);
var state_33824__$1 = (function (){var statearr_33829 = state_33824;
(statearr_33829[(7)] = inst_33801__$1);

return statearr_33829;
})();
if(cljs.core.truth_(inst_33802)){
var statearr_33830_35929 = state_33824__$1;
(statearr_33830_35929[(1)] = (5));

} else {
var statearr_33831_35930 = state_33824__$1;
(statearr_33831_35930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (13))){
var state_33824__$1 = state_33824;
var statearr_33832_35932 = state_33824__$1;
(statearr_33832_35932[(2)] = null);

(statearr_33832_35932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (6))){
var inst_33801 = (state_33824[(7)]);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33824__$1,(11),to,inst_33801);
} else {
if((state_val_33825 === (3))){
var inst_33821 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33824__$1,inst_33821);
} else {
if((state_val_33825 === (12))){
var state_33824__$1 = state_33824;
var statearr_33833_35933 = state_33824__$1;
(statearr_33833_35933[(2)] = null);

(statearr_33833_35933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (2))){
var state_33824__$1 = state_33824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33824__$1,(4),from);
} else {
if((state_val_33825 === (11))){
var inst_33811 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
if(cljs.core.truth_(inst_33811)){
var statearr_33835_35938 = state_33824__$1;
(statearr_33835_35938[(1)] = (12));

} else {
var statearr_33836_35939 = state_33824__$1;
(statearr_33836_35939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (9))){
var state_33824__$1 = state_33824;
var statearr_33837_35940 = state_33824__$1;
(statearr_33837_35940[(2)] = null);

(statearr_33837_35940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (5))){
var state_33824__$1 = state_33824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33838_35941 = state_33824__$1;
(statearr_33838_35941[(1)] = (8));

} else {
var statearr_33839_35942 = state_33824__$1;
(statearr_33839_35942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (14))){
var inst_33817 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33840_35943 = state_33824__$1;
(statearr_33840_35943[(2)] = inst_33817);

(statearr_33840_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (10))){
var inst_33808 = (state_33824[(2)]);
var state_33824__$1 = state_33824;
var statearr_33841_35944 = state_33824__$1;
(statearr_33841_35944[(2)] = inst_33808);

(statearr_33841_35944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33825 === (8))){
var inst_33805 = cljs.core.async.close_BANG_(to);
var state_33824__$1 = state_33824;
var statearr_33842_35945 = state_33824__$1;
(statearr_33842_35945[(2)] = inst_33805);

(statearr_33842_35945[(1)] = (10));


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
var statearr_33844 = [null,null,null,null,null,null,null,null];
(statearr_33844[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_33844[(1)] = (1));

return statearr_33844;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_33824){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_33824);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e33845){var ex__33424__auto__ = e33845;
var statearr_33846_35948 = state_33824;
(statearr_33846_35948[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_33824[(4)]))){
var statearr_33847_35949 = state_33824;
(statearr_33847_35949[(1)] = cljs.core.first((state_33824[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35950 = state_33824;
state_33824 = G__35950;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_33824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_33824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_33848 = f__33656__auto__();
(statearr_33848[(6)] = c__33655__auto___35919);

return statearr_33848;
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
var process__$1 = (function (p__33850){
var vec__33851 = p__33850;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33851,(1),null);
var job = vec__33851;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33655__auto___35954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (1))){
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33859__$1,(2),res,v);
} else {
if((state_val_33860 === (2))){
var inst_33856 = (state_33859[(2)]);
var inst_33857 = cljs.core.async.close_BANG_(res);
var state_33859__$1 = (function (){var statearr_33861 = state_33859;
(statearr_33861[(7)] = inst_33856);

return statearr_33861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33859__$1,inst_33857);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_33859){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_33859);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e33864){var ex__33424__auto__ = e33864;
var statearr_33865_35956 = state_33859;
(statearr_33865_35956[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_33859[(4)]))){
var statearr_33866_35957 = state_33859;
(statearr_33866_35957[(1)] = cljs.core.first((state_33859[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35958 = state_33859;
state_33859 = G__35958;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_33867 = f__33656__auto__();
(statearr_33867[(6)] = c__33655__auto___35954);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33869){
var vec__33870 = p__33869;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33870,(1),null);
var job = vec__33870;
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
var n__5636__auto___35959 = n;
var __35960 = (0);
while(true){
if((__35960 < n__5636__auto___35959)){
var G__33873_35961 = type;
var G__33873_35962__$1 = (((G__33873_35961 instanceof cljs.core.Keyword))?G__33873_35961.fqn:null);
switch (G__33873_35962__$1) {
case "compute":
var c__33655__auto___35964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35960,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = ((function (__35960,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function (state_33886){
var state_val_33887 = (state_33886[(1)]);
if((state_val_33887 === (1))){
var state_33886__$1 = state_33886;
var statearr_33888_35965 = state_33886__$1;
(statearr_33888_35965[(2)] = null);

(statearr_33888_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (2))){
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33886__$1,(4),jobs);
} else {
if((state_val_33887 === (3))){
var inst_33884 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33886__$1,inst_33884);
} else {
if((state_val_33887 === (4))){
var inst_33876 = (state_33886[(2)]);
var inst_33877 = process__$1(inst_33876);
var state_33886__$1 = state_33886;
if(cljs.core.truth_(inst_33877)){
var statearr_33890_35967 = state_33886__$1;
(statearr_33890_35967[(1)] = (5));

} else {
var statearr_33891_35968 = state_33886__$1;
(statearr_33891_35968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (5))){
var state_33886__$1 = state_33886;
var statearr_33892_35969 = state_33886__$1;
(statearr_33892_35969[(2)] = null);

(statearr_33892_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (6))){
var state_33886__$1 = state_33886;
var statearr_33893_35970 = state_33886__$1;
(statearr_33893_35970[(2)] = null);

(statearr_33893_35970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33887 === (7))){
var inst_33882 = (state_33886[(2)]);
var state_33886__$1 = state_33886;
var statearr_33894_35971 = state_33886__$1;
(statearr_33894_35971[(2)] = inst_33882);

(statearr_33894_35971[(1)] = (3));


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
});})(__35960,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
;
return ((function (__35960,switch__33420__auto__,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_33895 = [null,null,null,null,null,null,null];
(statearr_33895[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_33895[(1)] = (1));

return statearr_33895;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_33886){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_33886);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e33896){var ex__33424__auto__ = e33896;
var statearr_33898_35972 = state_33886;
(statearr_33898_35972[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_33886[(4)]))){
var statearr_33899_35973 = state_33886;
(statearr_33899_35973[(1)] = cljs.core.first((state_33886[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35974 = state_33886;
state_33886 = G__35974;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_33886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_33886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
;})(__35960,switch__33420__auto__,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
})();
var state__33657__auto__ = (function (){var statearr_33900 = f__33656__auto__();
(statearr_33900[(6)] = c__33655__auto___35964);

return statearr_33900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__35960,c__33655__auto___35964,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
);


break;
case "async":
var c__33655__auto___35975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35960,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = ((function (__35960,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function (state_33913){
var state_val_33914 = (state_33913[(1)]);
if((state_val_33914 === (1))){
var state_33913__$1 = state_33913;
var statearr_33915_35976 = state_33913__$1;
(statearr_33915_35976[(2)] = null);

(statearr_33915_35976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (2))){
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33913__$1,(4),jobs);
} else {
if((state_val_33914 === (3))){
var inst_33911 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33913__$1,inst_33911);
} else {
if((state_val_33914 === (4))){
var inst_33903 = (state_33913[(2)]);
var inst_33904 = async(inst_33903);
var state_33913__$1 = state_33913;
if(cljs.core.truth_(inst_33904)){
var statearr_33917_35981 = state_33913__$1;
(statearr_33917_35981[(1)] = (5));

} else {
var statearr_33918_35982 = state_33913__$1;
(statearr_33918_35982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (5))){
var state_33913__$1 = state_33913;
var statearr_33919_35983 = state_33913__$1;
(statearr_33919_35983[(2)] = null);

(statearr_33919_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (6))){
var state_33913__$1 = state_33913;
var statearr_33920_35988 = state_33913__$1;
(statearr_33920_35988[(2)] = null);

(statearr_33920_35988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33914 === (7))){
var inst_33909 = (state_33913[(2)]);
var state_33913__$1 = state_33913;
var statearr_33921_35989 = state_33913__$1;
(statearr_33921_35989[(2)] = inst_33909);

(statearr_33921_35989[(1)] = (3));


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
});})(__35960,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
;
return ((function (__35960,switch__33420__auto__,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0 = (function (){
var statearr_33922 = [null,null,null,null,null,null,null];
(statearr_33922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_33922[(1)] = (1));

return statearr_33922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_33913){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_33913);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e33923){var ex__33424__auto__ = e33923;
var statearr_33924_35993 = state_33913;
(statearr_33924_35993[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_33913[(4)]))){
var statearr_33926_35994 = state_33913;
(statearr_33926_35994[(1)] = cljs.core.first((state_33913[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35995 = state_33913;
state_33913 = G__35995;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_33913){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_33913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
;})(__35960,switch__33420__auto__,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
})();
var state__33657__auto__ = (function (){var statearr_33927 = f__33656__auto__();
(statearr_33927[(6)] = c__33655__auto___35975);

return statearr_33927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
});})(__35960,c__33655__auto___35975,G__33873_35961,G__33873_35962__$1,n__5636__auto___35959,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33873_35962__$1)].join('')));

}

var G__35996 = (__35960 + (1));
__35960 = G__35996;
continue;
} else {
}
break;
}

var c__33655__auto___35997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_33950){
var state_val_33951 = (state_33950[(1)]);
if((state_val_33951 === (7))){
var inst_33945 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33952_35998 = state_33950__$1;
(statearr_33952_35998[(2)] = inst_33945);

(statearr_33952_35998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (1))){
var state_33950__$1 = state_33950;
var statearr_33953_35999 = state_33950__$1;
(statearr_33953_35999[(2)] = null);

(statearr_33953_35999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (4))){
var inst_33930 = (state_33950[(7)]);
var inst_33930__$1 = (state_33950[(2)]);
var inst_33931 = (inst_33930__$1 == null);
var state_33950__$1 = (function (){var statearr_33954 = state_33950;
(statearr_33954[(7)] = inst_33930__$1);

return statearr_33954;
})();
if(cljs.core.truth_(inst_33931)){
var statearr_33955_36002 = state_33950__$1;
(statearr_33955_36002[(1)] = (5));

} else {
var statearr_33956_36003 = state_33950__$1;
(statearr_33956_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (6))){
var inst_33930 = (state_33950[(7)]);
var inst_33935 = (state_33950[(8)]);
var inst_33935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33937 = [inst_33930,inst_33935__$1];
var inst_33938 = (new cljs.core.PersistentVector(null,2,(5),inst_33936,inst_33937,null));
var state_33950__$1 = (function (){var statearr_33958 = state_33950;
(statearr_33958[(8)] = inst_33935__$1);

return statearr_33958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33950__$1,(8),jobs,inst_33938);
} else {
if((state_val_33951 === (3))){
var inst_33947 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33950__$1,inst_33947);
} else {
if((state_val_33951 === (2))){
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33950__$1,(4),from);
} else {
if((state_val_33951 === (9))){
var inst_33942 = (state_33950[(2)]);
var state_33950__$1 = (function (){var statearr_33959 = state_33950;
(statearr_33959[(9)] = inst_33942);

return statearr_33959;
})();
var statearr_33960_36005 = state_33950__$1;
(statearr_33960_36005[(2)] = null);

(statearr_33960_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (5))){
var inst_33933 = cljs.core.async.close_BANG_(jobs);
var state_33950__$1 = state_33950;
var statearr_33961_36006 = state_33950__$1;
(statearr_33961_36006[(2)] = inst_33933);

(statearr_33961_36006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (8))){
var inst_33935 = (state_33950[(8)]);
var inst_33940 = (state_33950[(2)]);
var state_33950__$1 = (function (){var statearr_33962 = state_33950;
(statearr_33962[(10)] = inst_33940);

return statearr_33962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33950__$1,(9),results,inst_33935);
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
var statearr_33964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_33964[(1)] = (1));

return statearr_33964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_33950){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_33950);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e33965){var ex__33424__auto__ = e33965;
var statearr_33966_36014 = state_33950;
(statearr_33966_36014[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_33950[(4)]))){
var statearr_33967_36015 = state_33950;
(statearr_33967_36015[(1)] = cljs.core.first((state_33950[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36016 = state_33950;
state_33950 = G__36016;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_33950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_33950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_33968 = f__33656__auto__();
(statearr_33968[(6)] = c__33655__auto___35997);

return statearr_33968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


var c__33655__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34007){
var state_val_34008 = (state_34007[(1)]);
if((state_val_34008 === (7))){
var inst_34003 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34009_36017 = state_34007__$1;
(statearr_34009_36017[(2)] = inst_34003);

(statearr_34009_36017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (20))){
var state_34007__$1 = state_34007;
var statearr_34010_36024 = state_34007__$1;
(statearr_34010_36024[(2)] = null);

(statearr_34010_36024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (1))){
var state_34007__$1 = state_34007;
var statearr_34011_36025 = state_34007__$1;
(statearr_34011_36025[(2)] = null);

(statearr_34011_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (4))){
var inst_33971 = (state_34007[(7)]);
var inst_33971__$1 = (state_34007[(2)]);
var inst_33972 = (inst_33971__$1 == null);
var state_34007__$1 = (function (){var statearr_34013 = state_34007;
(statearr_34013[(7)] = inst_33971__$1);

return statearr_34013;
})();
if(cljs.core.truth_(inst_33972)){
var statearr_34014_36029 = state_34007__$1;
(statearr_34014_36029[(1)] = (5));

} else {
var statearr_34015_36030 = state_34007__$1;
(statearr_34015_36030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (15))){
var inst_33984 = (state_34007[(8)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34007__$1,(18),to,inst_33984);
} else {
if((state_val_34008 === (21))){
var inst_33998 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34016_36034 = state_34007__$1;
(statearr_34016_36034[(2)] = inst_33998);

(statearr_34016_36034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (13))){
var inst_34000 = (state_34007[(2)]);
var state_34007__$1 = (function (){var statearr_34017 = state_34007;
(statearr_34017[(9)] = inst_34000);

return statearr_34017;
})();
var statearr_34018_36035 = state_34007__$1;
(statearr_34018_36035[(2)] = null);

(statearr_34018_36035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (6))){
var inst_33971 = (state_34007[(7)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34007__$1,(11),inst_33971);
} else {
if((state_val_34008 === (17))){
var inst_33993 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
if(cljs.core.truth_(inst_33993)){
var statearr_34021_36036 = state_34007__$1;
(statearr_34021_36036[(1)] = (19));

} else {
var statearr_34022_36037 = state_34007__$1;
(statearr_34022_36037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (3))){
var inst_34005 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34007__$1,inst_34005);
} else {
if((state_val_34008 === (12))){
var inst_33981 = (state_34007[(10)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34007__$1,(14),inst_33981);
} else {
if((state_val_34008 === (2))){
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34007__$1,(4),results);
} else {
if((state_val_34008 === (19))){
var state_34007__$1 = state_34007;
var statearr_34023_36042 = state_34007__$1;
(statearr_34023_36042[(2)] = null);

(statearr_34023_36042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (11))){
var inst_33981 = (state_34007[(2)]);
var state_34007__$1 = (function (){var statearr_34024 = state_34007;
(statearr_34024[(10)] = inst_33981);

return statearr_34024;
})();
var statearr_34025_36046 = state_34007__$1;
(statearr_34025_36046[(2)] = null);

(statearr_34025_36046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (9))){
var state_34007__$1 = state_34007;
var statearr_34026_36047 = state_34007__$1;
(statearr_34026_36047[(2)] = null);

(statearr_34026_36047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (5))){
var state_34007__$1 = state_34007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34027_36048 = state_34007__$1;
(statearr_34027_36048[(1)] = (8));

} else {
var statearr_34028_36049 = state_34007__$1;
(statearr_34028_36049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (14))){
var inst_33987 = (state_34007[(11)]);
var inst_33984 = (state_34007[(8)]);
var inst_33984__$1 = (state_34007[(2)]);
var inst_33986 = (inst_33984__$1 == null);
var inst_33987__$1 = cljs.core.not(inst_33986);
var state_34007__$1 = (function (){var statearr_34031 = state_34007;
(statearr_34031[(11)] = inst_33987__$1);

(statearr_34031[(8)] = inst_33984__$1);

return statearr_34031;
})();
if(inst_33987__$1){
var statearr_34032_36053 = state_34007__$1;
(statearr_34032_36053[(1)] = (15));

} else {
var statearr_34033_36054 = state_34007__$1;
(statearr_34033_36054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (16))){
var inst_33987 = (state_34007[(11)]);
var state_34007__$1 = state_34007;
var statearr_34034_36055 = state_34007__$1;
(statearr_34034_36055[(2)] = inst_33987);

(statearr_34034_36055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (10))){
var inst_33978 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34035_36056 = state_34007__$1;
(statearr_34035_36056[(2)] = inst_33978);

(statearr_34035_36056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (18))){
var inst_33990 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34036_36057 = state_34007__$1;
(statearr_34036_36057[(2)] = inst_33990);

(statearr_34036_36057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (8))){
var inst_33975 = cljs.core.async.close_BANG_(to);
var state_34007__$1 = state_34007;
var statearr_34037_36058 = state_34007__$1;
(statearr_34037_36058[(2)] = inst_33975);

(statearr_34037_36058[(1)] = (10));


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
var statearr_34038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__);

(statearr_34038[(1)] = (1));

return statearr_34038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1 = (function (state_34007){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34007);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34039){var ex__33424__auto__ = e34039;
var statearr_34040_36059 = state_34007;
(statearr_34040_36059[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34007[(4)]))){
var statearr_34041_36060 = state_34007;
(statearr_34041_36060[(1)] = cljs.core.first((state_34007[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36064 = state_34007;
state_34007 = G__36064;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__ = function(state_34007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1.call(this,state_34007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34042 = f__33656__auto__();
(statearr_34042[(6)] = c__33655__auto__);

return statearr_34042;
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
var G__34044 = arguments.length;
switch (G__34044) {
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
var G__34048 = arguments.length;
switch (G__34048) {
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
var G__34053 = arguments.length;
switch (G__34053) {
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
var c__33655__auto___36071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (7))){
var inst_34081 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34087_36074 = state_34085__$1;
(statearr_34087_36074[(2)] = inst_34081);

(statearr_34087_36074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (1))){
var state_34085__$1 = state_34085;
var statearr_34089_36077 = state_34085__$1;
(statearr_34089_36077[(2)] = null);

(statearr_34089_36077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (4))){
var inst_34059 = (state_34085[(7)]);
var inst_34059__$1 = (state_34085[(2)]);
var inst_34060 = (inst_34059__$1 == null);
var state_34085__$1 = (function (){var statearr_34093 = state_34085;
(statearr_34093[(7)] = inst_34059__$1);

return statearr_34093;
})();
if(cljs.core.truth_(inst_34060)){
var statearr_34094_36078 = state_34085__$1;
(statearr_34094_36078[(1)] = (5));

} else {
var statearr_34095_36079 = state_34085__$1;
(statearr_34095_36079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (13))){
var state_34085__$1 = state_34085;
var statearr_34100_36080 = state_34085__$1;
(statearr_34100_36080[(2)] = null);

(statearr_34100_36080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (6))){
var inst_34059 = (state_34085[(7)]);
var inst_34068 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34059) : p.call(null,inst_34059));
var state_34085__$1 = state_34085;
if(cljs.core.truth_(inst_34068)){
var statearr_34101_36081 = state_34085__$1;
(statearr_34101_36081[(1)] = (9));

} else {
var statearr_34102_36082 = state_34085__$1;
(statearr_34102_36082[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (3))){
var inst_34083 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34085__$1,inst_34083);
} else {
if((state_val_34086 === (12))){
var state_34085__$1 = state_34085;
var statearr_34103_36083 = state_34085__$1;
(statearr_34103_36083[(2)] = null);

(statearr_34103_36083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (2))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34085__$1,(4),ch);
} else {
if((state_val_34086 === (11))){
var inst_34059 = (state_34085[(7)]);
var inst_34072 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34085__$1,(8),inst_34072,inst_34059);
} else {
if((state_val_34086 === (9))){
var state_34085__$1 = state_34085;
var statearr_34108_36084 = state_34085__$1;
(statearr_34108_36084[(2)] = tc);

(statearr_34108_36084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (5))){
var inst_34062 = cljs.core.async.close_BANG_(tc);
var inst_34066 = cljs.core.async.close_BANG_(fc);
var state_34085__$1 = (function (){var statearr_34113 = state_34085;
(statearr_34113[(8)] = inst_34062);

return statearr_34113;
})();
var statearr_34114_36085 = state_34085__$1;
(statearr_34114_36085[(2)] = inst_34066);

(statearr_34114_36085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (14))){
var inst_34079 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34115_36086 = state_34085__$1;
(statearr_34115_36086[(2)] = inst_34079);

(statearr_34115_36086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (10))){
var state_34085__$1 = state_34085;
var statearr_34116_36087 = state_34085__$1;
(statearr_34116_36087[(2)] = fc);

(statearr_34116_36087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (8))){
var inst_34074 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
if(cljs.core.truth_(inst_34074)){
var statearr_34117_36088 = state_34085__$1;
(statearr_34117_36088[(1)] = (12));

} else {
var statearr_34118_36089 = state_34085__$1;
(statearr_34118_36089[(1)] = (13));

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
var statearr_34119 = [null,null,null,null,null,null,null,null,null];
(statearr_34119[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_34119[(1)] = (1));

return statearr_34119;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_34085){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34085);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34120){var ex__33424__auto__ = e34120;
var statearr_34121_36090 = state_34085;
(statearr_34121_36090[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34085[(4)]))){
var statearr_34123_36091 = state_34085;
(statearr_34123_36091[(1)] = cljs.core.first((state_34085[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36092 = state_34085;
state_34085 = G__36092;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34127 = f__33656__auto__();
(statearr_34127[(6)] = c__33655__auto___36071);

return statearr_34127;
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
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34154){
var state_val_34155 = (state_34154[(1)]);
if((state_val_34155 === (7))){
var inst_34150 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34162_36093 = state_34154__$1;
(statearr_34162_36093[(2)] = inst_34150);

(statearr_34162_36093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (1))){
var inst_34130 = init;
var inst_34131 = inst_34130;
var state_34154__$1 = (function (){var statearr_34163 = state_34154;
(statearr_34163[(7)] = inst_34131);

return statearr_34163;
})();
var statearr_34164_36094 = state_34154__$1;
(statearr_34164_36094[(2)] = null);

(statearr_34164_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (4))){
var inst_34134 = (state_34154[(8)]);
var inst_34134__$1 = (state_34154[(2)]);
var inst_34135 = (inst_34134__$1 == null);
var state_34154__$1 = (function (){var statearr_34165 = state_34154;
(statearr_34165[(8)] = inst_34134__$1);

return statearr_34165;
})();
if(cljs.core.truth_(inst_34135)){
var statearr_34166_36095 = state_34154__$1;
(statearr_34166_36095[(1)] = (5));

} else {
var statearr_34167_36096 = state_34154__$1;
(statearr_34167_36096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (6))){
var inst_34139 = (state_34154[(9)]);
var inst_34134 = (state_34154[(8)]);
var inst_34131 = (state_34154[(7)]);
var inst_34139__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34131,inst_34134) : f.call(null,inst_34131,inst_34134));
var inst_34141 = cljs.core.reduced_QMARK_(inst_34139__$1);
var state_34154__$1 = (function (){var statearr_34169 = state_34154;
(statearr_34169[(9)] = inst_34139__$1);

return statearr_34169;
})();
if(inst_34141){
var statearr_34170_36097 = state_34154__$1;
(statearr_34170_36097[(1)] = (8));

} else {
var statearr_34171_36098 = state_34154__$1;
(statearr_34171_36098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (3))){
var inst_34152 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34154__$1,inst_34152);
} else {
if((state_val_34155 === (2))){
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34154__$1,(4),ch);
} else {
if((state_val_34155 === (9))){
var inst_34139 = (state_34154[(9)]);
var inst_34131 = inst_34139;
var state_34154__$1 = (function (){var statearr_34184 = state_34154;
(statearr_34184[(7)] = inst_34131);

return statearr_34184;
})();
var statearr_34185_36104 = state_34154__$1;
(statearr_34185_36104[(2)] = null);

(statearr_34185_36104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (5))){
var inst_34131 = (state_34154[(7)]);
var state_34154__$1 = state_34154;
var statearr_34190_36105 = state_34154__$1;
(statearr_34190_36105[(2)] = inst_34131);

(statearr_34190_36105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (10))){
var inst_34148 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34191_36106 = state_34154__$1;
(statearr_34191_36106[(2)] = inst_34148);

(statearr_34191_36106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (8))){
var inst_34139 = (state_34154[(9)]);
var inst_34144 = cljs.core.deref(inst_34139);
var state_34154__$1 = state_34154;
var statearr_34195_36112 = state_34154__$1;
(statearr_34195_36112[(2)] = inst_34144);

(statearr_34195_36112[(1)] = (10));


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
var statearr_34197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34197[(0)] = cljs$core$async$reduce_$_state_machine__33421__auto__);

(statearr_34197[(1)] = (1));

return statearr_34197;
});
var cljs$core$async$reduce_$_state_machine__33421__auto____1 = (function (state_34154){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34154);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34199){var ex__33424__auto__ = e34199;
var statearr_34200_36113 = state_34154;
(statearr_34200_36113[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34154[(4)]))){
var statearr_34205_36114 = state_34154;
(statearr_34205_36114[(1)] = cljs.core.first((state_34154[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36115 = state_34154;
state_34154 = G__36115;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33421__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33421__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33421__auto____0;
cljs$core$async$reduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33421__auto____1;
return cljs$core$async$reduce_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34207 = f__33656__auto__();
(statearr_34207[(6)] = c__33655__auto__);

return statearr_34207;
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
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34216){
var state_val_34217 = (state_34216[(1)]);
if((state_val_34217 === (1))){
var inst_34211 = cljs.core.async.reduce(f__$1,init,ch);
var state_34216__$1 = state_34216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34216__$1,(2),inst_34211);
} else {
if((state_val_34217 === (2))){
var inst_34213 = (state_34216[(2)]);
var inst_34214 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34213) : f__$1.call(null,inst_34213));
var state_34216__$1 = state_34216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34216__$1,inst_34214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33421__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33421__auto____0 = (function (){
var statearr_34222 = [null,null,null,null,null,null,null];
(statearr_34222[(0)] = cljs$core$async$transduce_$_state_machine__33421__auto__);

(statearr_34222[(1)] = (1));

return statearr_34222;
});
var cljs$core$async$transduce_$_state_machine__33421__auto____1 = (function (state_34216){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34216);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34224){var ex__33424__auto__ = e34224;
var statearr_34225_36122 = state_34216;
(statearr_34225_36122[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34216[(4)]))){
var statearr_34228_36123 = state_34216;
(statearr_34228_36123[(1)] = cljs.core.first((state_34216[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36124 = state_34216;
state_34216 = G__36124;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33421__auto__ = function(state_34216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33421__auto____1.call(this,state_34216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33421__auto____0;
cljs$core$async$transduce_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33421__auto____1;
return cljs$core$async$transduce_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34230 = f__33656__auto__();
(statearr_34230[(6)] = c__33655__auto__);

return statearr_34230;
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
var G__34236 = arguments.length;
switch (G__34236) {
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
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34266){
var state_val_34267 = (state_34266[(1)]);
if((state_val_34267 === (7))){
var inst_34247 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34273_36126 = state_34266__$1;
(statearr_34273_36126[(2)] = inst_34247);

(statearr_34273_36126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (1))){
var inst_34241 = cljs.core.seq(coll);
var inst_34242 = inst_34241;
var state_34266__$1 = (function (){var statearr_34275 = state_34266;
(statearr_34275[(7)] = inst_34242);

return statearr_34275;
})();
var statearr_34276_36128 = state_34266__$1;
(statearr_34276_36128[(2)] = null);

(statearr_34276_36128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (4))){
var inst_34242 = (state_34266[(7)]);
var inst_34245 = cljs.core.first(inst_34242);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34266__$1,(7),ch,inst_34245);
} else {
if((state_val_34267 === (13))){
var inst_34260 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34281_36132 = state_34266__$1;
(statearr_34281_36132[(2)] = inst_34260);

(statearr_34281_36132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (6))){
var inst_34250 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34250)){
var statearr_34282_36134 = state_34266__$1;
(statearr_34282_36134[(1)] = (8));

} else {
var statearr_34285_36136 = state_34266__$1;
(statearr_34285_36136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (3))){
var inst_34264 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34266__$1,inst_34264);
} else {
if((state_val_34267 === (12))){
var state_34266__$1 = state_34266;
var statearr_34288_36139 = state_34266__$1;
(statearr_34288_36139[(2)] = null);

(statearr_34288_36139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (2))){
var inst_34242 = (state_34266[(7)]);
var state_34266__$1 = state_34266;
if(cljs.core.truth_(inst_34242)){
var statearr_34289_36140 = state_34266__$1;
(statearr_34289_36140[(1)] = (4));

} else {
var statearr_34291_36141 = state_34266__$1;
(statearr_34291_36141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (11))){
var inst_34256 = cljs.core.async.close_BANG_(ch);
var state_34266__$1 = state_34266;
var statearr_34294_36146 = state_34266__$1;
(statearr_34294_36146[(2)] = inst_34256);

(statearr_34294_36146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (9))){
var state_34266__$1 = state_34266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34295_36147 = state_34266__$1;
(statearr_34295_36147[(1)] = (11));

} else {
var statearr_34297_36148 = state_34266__$1;
(statearr_34297_36148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (5))){
var inst_34242 = (state_34266[(7)]);
var state_34266__$1 = state_34266;
var statearr_34301_36149 = state_34266__$1;
(statearr_34301_36149[(2)] = inst_34242);

(statearr_34301_36149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (10))){
var inst_34262 = (state_34266[(2)]);
var state_34266__$1 = state_34266;
var statearr_34302_36152 = state_34266__$1;
(statearr_34302_36152[(2)] = inst_34262);

(statearr_34302_36152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34267 === (8))){
var inst_34242 = (state_34266[(7)]);
var inst_34252 = cljs.core.next(inst_34242);
var inst_34242__$1 = inst_34252;
var state_34266__$1 = (function (){var statearr_34304 = state_34266;
(statearr_34304[(7)] = inst_34242__$1);

return statearr_34304;
})();
var statearr_34305_36153 = state_34266__$1;
(statearr_34305_36153[(2)] = null);

(statearr_34305_36153[(1)] = (2));


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
var statearr_34308 = [null,null,null,null,null,null,null,null];
(statearr_34308[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_34308[(1)] = (1));

return statearr_34308;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_34266){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34266);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34310){var ex__33424__auto__ = e34310;
var statearr_34311_36172 = state_34266;
(statearr_34311_36172[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34266[(4)]))){
var statearr_34313_36177 = state_34266;
(statearr_34313_36177[(1)] = cljs.core.first((state_34266[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36178 = state_34266;
state_34266 = G__36178;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_34266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_34266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34317 = f__33656__auto__();
(statearr_34317[(6)] = c__33655__auto__);

return statearr_34317;
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
var G__34324 = arguments.length;
switch (G__34324) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36198 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36198(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36200 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36200(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36203 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36203(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36204 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36204(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34391 = (function (ch,cs,meta34392){
this.ch = ch;
this.cs = cs;
this.meta34392 = meta34392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34393,meta34392__$1){
var self__ = this;
var _34393__$1 = this;
return (new cljs.core.async.t_cljs$core$async34391(self__.ch,self__.cs,meta34392__$1));
}));

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34393){
var self__ = this;
var _34393__$1 = this;
return self__.meta34392;
}));

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34392","meta34392",-175801403,null)], null);
}));

(cljs.core.async.t_cljs$core$async34391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34391");

(cljs.core.async.t_cljs$core$async34391.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34391.
 */
cljs.core.async.__GT_t_cljs$core$async34391 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34391(ch__$1,cs__$1,meta34392){
return (new cljs.core.async.t_cljs$core$async34391(ch__$1,cs__$1,meta34392));
});

}

return (new cljs.core.async.t_cljs$core$async34391(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33655__auto___36212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34574){
var state_val_34575 = (state_34574[(1)]);
if((state_val_34575 === (7))){
var inst_34570 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34580_36213 = state_34574__$1;
(statearr_34580_36213[(2)] = inst_34570);

(statearr_34580_36213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (20))){
var inst_34460 = (state_34574[(7)]);
var inst_34475 = cljs.core.first(inst_34460);
var inst_34476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(0),null);
var inst_34477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34475,(1),null);
var state_34574__$1 = (function (){var statearr_34582 = state_34574;
(statearr_34582[(8)] = inst_34476);

return statearr_34582;
})();
if(cljs.core.truth_(inst_34477)){
var statearr_34583_36214 = state_34574__$1;
(statearr_34583_36214[(1)] = (22));

} else {
var statearr_34584_36215 = state_34574__$1;
(statearr_34584_36215[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (27))){
var inst_34507 = (state_34574[(9)]);
var inst_34509 = (state_34574[(10)]);
var inst_34517 = (state_34574[(11)]);
var inst_34423 = (state_34574[(12)]);
var inst_34517__$1 = cljs.core._nth(inst_34507,inst_34509);
var inst_34519 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34517__$1,inst_34423,done);
var state_34574__$1 = (function (){var statearr_34585 = state_34574;
(statearr_34585[(11)] = inst_34517__$1);

return statearr_34585;
})();
if(cljs.core.truth_(inst_34519)){
var statearr_34586_36216 = state_34574__$1;
(statearr_34586_36216[(1)] = (30));

} else {
var statearr_34587_36217 = state_34574__$1;
(statearr_34587_36217[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (1))){
var state_34574__$1 = state_34574;
var statearr_34588_36218 = state_34574__$1;
(statearr_34588_36218[(2)] = null);

(statearr_34588_36218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (24))){
var inst_34460 = (state_34574[(7)]);
var inst_34483 = (state_34574[(2)]);
var inst_34484 = cljs.core.next(inst_34460);
var inst_34434 = inst_34484;
var inst_34435 = null;
var inst_34436 = (0);
var inst_34437 = (0);
var state_34574__$1 = (function (){var statearr_34596 = state_34574;
(statearr_34596[(13)] = inst_34434);

(statearr_34596[(14)] = inst_34435);

(statearr_34596[(15)] = inst_34436);

(statearr_34596[(16)] = inst_34437);

(statearr_34596[(17)] = inst_34483);

return statearr_34596;
})();
var statearr_34598_36227 = state_34574__$1;
(statearr_34598_36227[(2)] = null);

(statearr_34598_36227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (39))){
var state_34574__$1 = state_34574;
var statearr_34605_36228 = state_34574__$1;
(statearr_34605_36228[(2)] = null);

(statearr_34605_36228[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (4))){
var inst_34423 = (state_34574[(12)]);
var inst_34423__$1 = (state_34574[(2)]);
var inst_34425 = (inst_34423__$1 == null);
var state_34574__$1 = (function (){var statearr_34607 = state_34574;
(statearr_34607[(12)] = inst_34423__$1);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34425)){
var statearr_34611_36229 = state_34574__$1;
(statearr_34611_36229[(1)] = (5));

} else {
var statearr_34612_36230 = state_34574__$1;
(statearr_34612_36230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (15))){
var inst_34434 = (state_34574[(13)]);
var inst_34435 = (state_34574[(14)]);
var inst_34436 = (state_34574[(15)]);
var inst_34437 = (state_34574[(16)]);
var inst_34453 = (state_34574[(2)]);
var inst_34454 = (inst_34437 + (1));
var tmp34599 = inst_34434;
var tmp34600 = inst_34435;
var tmp34601 = inst_34436;
var inst_34434__$1 = tmp34599;
var inst_34435__$1 = tmp34600;
var inst_34436__$1 = tmp34601;
var inst_34437__$1 = inst_34454;
var state_34574__$1 = (function (){var statearr_34614 = state_34574;
(statearr_34614[(18)] = inst_34453);

(statearr_34614[(13)] = inst_34434__$1);

(statearr_34614[(14)] = inst_34435__$1);

(statearr_34614[(15)] = inst_34436__$1);

(statearr_34614[(16)] = inst_34437__$1);

return statearr_34614;
})();
var statearr_34615_36237 = state_34574__$1;
(statearr_34615_36237[(2)] = null);

(statearr_34615_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (21))){
var inst_34487 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34622_36241 = state_34574__$1;
(statearr_34622_36241[(2)] = inst_34487);

(statearr_34622_36241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (31))){
var inst_34517 = (state_34574[(11)]);
var inst_34524 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34517);
var state_34574__$1 = state_34574;
var statearr_34624_36243 = state_34574__$1;
(statearr_34624_36243[(2)] = inst_34524);

(statearr_34624_36243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (32))){
var inst_34507 = (state_34574[(9)]);
var inst_34509 = (state_34574[(10)]);
var inst_34506 = (state_34574[(19)]);
var inst_34508 = (state_34574[(20)]);
var inst_34526 = (state_34574[(2)]);
var inst_34528 = (inst_34509 + (1));
var tmp34619 = inst_34507;
var tmp34620 = inst_34506;
var tmp34621 = inst_34508;
var inst_34506__$1 = tmp34620;
var inst_34507__$1 = tmp34619;
var inst_34508__$1 = tmp34621;
var inst_34509__$1 = inst_34528;
var state_34574__$1 = (function (){var statearr_34626 = state_34574;
(statearr_34626[(9)] = inst_34507__$1);

(statearr_34626[(10)] = inst_34509__$1);

(statearr_34626[(19)] = inst_34506__$1);

(statearr_34626[(21)] = inst_34526);

(statearr_34626[(20)] = inst_34508__$1);

return statearr_34626;
})();
var statearr_34627_36247 = state_34574__$1;
(statearr_34627_36247[(2)] = null);

(statearr_34627_36247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (40))){
var inst_34543 = (state_34574[(22)]);
var inst_34547 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34543);
var state_34574__$1 = state_34574;
var statearr_34628_36251 = state_34574__$1;
(statearr_34628_36251[(2)] = inst_34547);

(statearr_34628_36251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (33))){
var inst_34531 = (state_34574[(23)]);
var inst_34533 = cljs.core.chunked_seq_QMARK_(inst_34531);
var state_34574__$1 = state_34574;
if(inst_34533){
var statearr_34629_36253 = state_34574__$1;
(statearr_34629_36253[(1)] = (36));

} else {
var statearr_34630_36254 = state_34574__$1;
(statearr_34630_36254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (13))){
var inst_34446 = (state_34574[(24)]);
var inst_34450 = cljs.core.async.close_BANG_(inst_34446);
var state_34574__$1 = state_34574;
var statearr_34638_36255 = state_34574__$1;
(statearr_34638_36255[(2)] = inst_34450);

(statearr_34638_36255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (22))){
var inst_34476 = (state_34574[(8)]);
var inst_34480 = cljs.core.async.close_BANG_(inst_34476);
var state_34574__$1 = state_34574;
var statearr_34640_36265 = state_34574__$1;
(statearr_34640_36265[(2)] = inst_34480);

(statearr_34640_36265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (36))){
var inst_34531 = (state_34574[(23)]);
var inst_34536 = cljs.core.chunk_first(inst_34531);
var inst_34538 = cljs.core.chunk_rest(inst_34531);
var inst_34539 = cljs.core.count(inst_34536);
var inst_34506 = inst_34538;
var inst_34507 = inst_34536;
var inst_34508 = inst_34539;
var inst_34509 = (0);
var state_34574__$1 = (function (){var statearr_34641 = state_34574;
(statearr_34641[(9)] = inst_34507);

(statearr_34641[(10)] = inst_34509);

(statearr_34641[(19)] = inst_34506);

(statearr_34641[(20)] = inst_34508);

return statearr_34641;
})();
var statearr_34645_36269 = state_34574__$1;
(statearr_34645_36269[(2)] = null);

(statearr_34645_36269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (41))){
var inst_34531 = (state_34574[(23)]);
var inst_34549 = (state_34574[(2)]);
var inst_34550 = cljs.core.next(inst_34531);
var inst_34506 = inst_34550;
var inst_34507 = null;
var inst_34508 = (0);
var inst_34509 = (0);
var state_34574__$1 = (function (){var statearr_34647 = state_34574;
(statearr_34647[(9)] = inst_34507);

(statearr_34647[(10)] = inst_34509);

(statearr_34647[(19)] = inst_34506);

(statearr_34647[(25)] = inst_34549);

(statearr_34647[(20)] = inst_34508);

return statearr_34647;
})();
var statearr_34651_36271 = state_34574__$1;
(statearr_34651_36271[(2)] = null);

(statearr_34651_36271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (43))){
var state_34574__$1 = state_34574;
var statearr_34653_36272 = state_34574__$1;
(statearr_34653_36272[(2)] = null);

(statearr_34653_36272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (29))){
var inst_34558 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34654_36273 = state_34574__$1;
(statearr_34654_36273[(2)] = inst_34558);

(statearr_34654_36273[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (44))){
var inst_34567 = (state_34574[(2)]);
var state_34574__$1 = (function (){var statearr_34658 = state_34574;
(statearr_34658[(26)] = inst_34567);

return statearr_34658;
})();
var statearr_34659_36274 = state_34574__$1;
(statearr_34659_36274[(2)] = null);

(statearr_34659_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (6))){
var inst_34497 = (state_34574[(27)]);
var inst_34496 = cljs.core.deref(cs);
var inst_34497__$1 = cljs.core.keys(inst_34496);
var inst_34498 = cljs.core.count(inst_34497__$1);
var inst_34499 = cljs.core.reset_BANG_(dctr,inst_34498);
var inst_34504 = cljs.core.seq(inst_34497__$1);
var inst_34506 = inst_34504;
var inst_34507 = null;
var inst_34508 = (0);
var inst_34509 = (0);
var state_34574__$1 = (function (){var statearr_34661 = state_34574;
(statearr_34661[(9)] = inst_34507);

(statearr_34661[(10)] = inst_34509);

(statearr_34661[(28)] = inst_34499);

(statearr_34661[(27)] = inst_34497__$1);

(statearr_34661[(19)] = inst_34506);

(statearr_34661[(20)] = inst_34508);

return statearr_34661;
})();
var statearr_34662_36279 = state_34574__$1;
(statearr_34662_36279[(2)] = null);

(statearr_34662_36279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (28))){
var inst_34506 = (state_34574[(19)]);
var inst_34531 = (state_34574[(23)]);
var inst_34531__$1 = cljs.core.seq(inst_34506);
var state_34574__$1 = (function (){var statearr_34663 = state_34574;
(statearr_34663[(23)] = inst_34531__$1);

return statearr_34663;
})();
if(inst_34531__$1){
var statearr_34664_36280 = state_34574__$1;
(statearr_34664_36280[(1)] = (33));

} else {
var statearr_34665_36281 = state_34574__$1;
(statearr_34665_36281[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (25))){
var inst_34509 = (state_34574[(10)]);
var inst_34508 = (state_34574[(20)]);
var inst_34511 = (inst_34509 < inst_34508);
var inst_34515 = inst_34511;
var state_34574__$1 = state_34574;
if(cljs.core.truth_(inst_34515)){
var statearr_34666_36282 = state_34574__$1;
(statearr_34666_36282[(1)] = (27));

} else {
var statearr_34667_36283 = state_34574__$1;
(statearr_34667_36283[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (34))){
var state_34574__$1 = state_34574;
var statearr_34672_36284 = state_34574__$1;
(statearr_34672_36284[(2)] = null);

(statearr_34672_36284[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (17))){
var state_34574__$1 = state_34574;
var statearr_34673_36286 = state_34574__$1;
(statearr_34673_36286[(2)] = null);

(statearr_34673_36286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (3))){
var inst_34572 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34574__$1,inst_34572);
} else {
if((state_val_34575 === (12))){
var inst_34492 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34674_36312 = state_34574__$1;
(statearr_34674_36312[(2)] = inst_34492);

(statearr_34674_36312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (2))){
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34574__$1,(4),ch);
} else {
if((state_val_34575 === (23))){
var state_34574__$1 = state_34574;
var statearr_34676_36317 = state_34574__$1;
(statearr_34676_36317[(2)] = null);

(statearr_34676_36317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (35))){
var inst_34556 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34677_36326 = state_34574__$1;
(statearr_34677_36326[(2)] = inst_34556);

(statearr_34677_36326[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (19))){
var inst_34460 = (state_34574[(7)]);
var inst_34465 = cljs.core.chunk_first(inst_34460);
var inst_34466 = cljs.core.chunk_rest(inst_34460);
var inst_34467 = cljs.core.count(inst_34465);
var inst_34434 = inst_34466;
var inst_34435 = inst_34465;
var inst_34436 = inst_34467;
var inst_34437 = (0);
var state_34574__$1 = (function (){var statearr_34678 = state_34574;
(statearr_34678[(13)] = inst_34434);

(statearr_34678[(14)] = inst_34435);

(statearr_34678[(15)] = inst_34436);

(statearr_34678[(16)] = inst_34437);

return statearr_34678;
})();
var statearr_34679_36344 = state_34574__$1;
(statearr_34679_36344[(2)] = null);

(statearr_34679_36344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (11))){
var inst_34460 = (state_34574[(7)]);
var inst_34434 = (state_34574[(13)]);
var inst_34460__$1 = cljs.core.seq(inst_34434);
var state_34574__$1 = (function (){var statearr_34680 = state_34574;
(statearr_34680[(7)] = inst_34460__$1);

return statearr_34680;
})();
if(inst_34460__$1){
var statearr_34681_36361 = state_34574__$1;
(statearr_34681_36361[(1)] = (16));

} else {
var statearr_34682_36362 = state_34574__$1;
(statearr_34682_36362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (9))){
var inst_34494 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34683_36378 = state_34574__$1;
(statearr_34683_36378[(2)] = inst_34494);

(statearr_34683_36378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (5))){
var inst_34432 = cljs.core.deref(cs);
var inst_34433 = cljs.core.seq(inst_34432);
var inst_34434 = inst_34433;
var inst_34435 = null;
var inst_34436 = (0);
var inst_34437 = (0);
var state_34574__$1 = (function (){var statearr_34686 = state_34574;
(statearr_34686[(13)] = inst_34434);

(statearr_34686[(14)] = inst_34435);

(statearr_34686[(15)] = inst_34436);

(statearr_34686[(16)] = inst_34437);

return statearr_34686;
})();
var statearr_34687_36397 = state_34574__$1;
(statearr_34687_36397[(2)] = null);

(statearr_34687_36397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (14))){
var state_34574__$1 = state_34574;
var statearr_34688_36398 = state_34574__$1;
(statearr_34688_36398[(2)] = null);

(statearr_34688_36398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (45))){
var inst_34564 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34689_36403 = state_34574__$1;
(statearr_34689_36403[(2)] = inst_34564);

(statearr_34689_36403[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (26))){
var inst_34497 = (state_34574[(27)]);
var inst_34560 = (state_34574[(2)]);
var inst_34561 = cljs.core.seq(inst_34497);
var state_34574__$1 = (function (){var statearr_34690 = state_34574;
(statearr_34690[(29)] = inst_34560);

return statearr_34690;
})();
if(inst_34561){
var statearr_34691_36412 = state_34574__$1;
(statearr_34691_36412[(1)] = (42));

} else {
var statearr_34692_36414 = state_34574__$1;
(statearr_34692_36414[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (16))){
var inst_34460 = (state_34574[(7)]);
var inst_34463 = cljs.core.chunked_seq_QMARK_(inst_34460);
var state_34574__$1 = state_34574;
if(inst_34463){
var statearr_34693_36435 = state_34574__$1;
(statearr_34693_36435[(1)] = (19));

} else {
var statearr_34694_36436 = state_34574__$1;
(statearr_34694_36436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (38))){
var inst_34553 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34695_36437 = state_34574__$1;
(statearr_34695_36437[(2)] = inst_34553);

(statearr_34695_36437[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (30))){
var state_34574__$1 = state_34574;
var statearr_34696_36438 = state_34574__$1;
(statearr_34696_36438[(2)] = null);

(statearr_34696_36438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (10))){
var inst_34435 = (state_34574[(14)]);
var inst_34437 = (state_34574[(16)]);
var inst_34445 = cljs.core._nth(inst_34435,inst_34437);
var inst_34446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34445,(0),null);
var inst_34448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34445,(1),null);
var state_34574__$1 = (function (){var statearr_34697 = state_34574;
(statearr_34697[(24)] = inst_34446);

return statearr_34697;
})();
if(cljs.core.truth_(inst_34448)){
var statearr_34698_36439 = state_34574__$1;
(statearr_34698_36439[(1)] = (13));

} else {
var statearr_34699_36441 = state_34574__$1;
(statearr_34699_36441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (18))){
var inst_34490 = (state_34574[(2)]);
var state_34574__$1 = state_34574;
var statearr_34700_36446 = state_34574__$1;
(statearr_34700_36446[(2)] = inst_34490);

(statearr_34700_36446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (42))){
var state_34574__$1 = state_34574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34574__$1,(45),dchan);
} else {
if((state_val_34575 === (37))){
var inst_34543 = (state_34574[(22)]);
var inst_34531 = (state_34574[(23)]);
var inst_34423 = (state_34574[(12)]);
var inst_34543__$1 = cljs.core.first(inst_34531);
var inst_34544 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34543__$1,inst_34423,done);
var state_34574__$1 = (function (){var statearr_34701 = state_34574;
(statearr_34701[(22)] = inst_34543__$1);

return statearr_34701;
})();
if(cljs.core.truth_(inst_34544)){
var statearr_34702_36466 = state_34574__$1;
(statearr_34702_36466[(1)] = (39));

} else {
var statearr_34703_36467 = state_34574__$1;
(statearr_34703_36467[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34575 === (8))){
var inst_34436 = (state_34574[(15)]);
var inst_34437 = (state_34574[(16)]);
var inst_34439 = (inst_34437 < inst_34436);
var inst_34440 = inst_34439;
var state_34574__$1 = state_34574;
if(cljs.core.truth_(inst_34440)){
var statearr_34704_36468 = state_34574__$1;
(statearr_34704_36468[(1)] = (10));

} else {
var statearr_34705_36469 = state_34574__$1;
(statearr_34705_36469[(1)] = (11));

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
var statearr_34706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = cljs$core$async$mult_$_state_machine__33421__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var cljs$core$async$mult_$_state_machine__33421__auto____1 = (function (state_34574){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34574);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34707){var ex__33424__auto__ = e34707;
var statearr_34708_36478 = state_34574;
(statearr_34708_36478[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34574[(4)]))){
var statearr_34709_36485 = state_34574;
(statearr_34709_36485[(1)] = cljs.core.first((state_34574[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36488 = state_34574;
state_34574 = G__36488;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33421__auto__ = function(state_34574){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33421__auto____1.call(this,state_34574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33421__auto____0;
cljs$core$async$mult_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33421__auto____1;
return cljs$core$async$mult_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34710 = f__33656__auto__();
(statearr_34710[(6)] = c__33655__auto___36212);

return statearr_34710;
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
var G__34713 = arguments.length;
switch (G__34713) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36510 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36510(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36520 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36520(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36529 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36529(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36540 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36540(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36544 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36544(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36547 = arguments.length;
var i__5770__auto___36548 = (0);
while(true){
if((i__5770__auto___36548 < len__5769__auto___36547)){
args__5775__auto__.push((arguments[i__5770__auto___36548]));

var G__36549 = (i__5770__auto___36548 + (1));
i__5770__auto___36548 = G__36549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34731){
var map__34732 = p__34731;
var map__34732__$1 = cljs.core.__destructure_map(map__34732);
var opts = map__34732__$1;
var statearr_34733_36555 = state;
(statearr_34733_36555[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34734_36556 = state;
(statearr_34734_36556[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34736_36557 = state;
(statearr_34736_36557[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34725){
var G__34726 = cljs.core.first(seq34725);
var seq34725__$1 = cljs.core.next(seq34725);
var G__34727 = cljs.core.first(seq34725__$1);
var seq34725__$2 = cljs.core.next(seq34725__$1);
var G__34728 = cljs.core.first(seq34725__$2);
var seq34725__$3 = cljs.core.next(seq34725__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34726,G__34727,G__34728,seq34725__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34749 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34750){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34750 = meta34750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34751,meta34750__$1){
var self__ = this;
var _34751__$1 = this;
return (new cljs.core.async.t_cljs$core$async34749(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34750__$1));
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34751){
var self__ = this;
var _34751__$1 = this;
return self__.meta34750;
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34750","meta34750",532765765,null)], null);
}));

(cljs.core.async.t_cljs$core$async34749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34749");

(cljs.core.async.t_cljs$core$async34749.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34749.
 */
cljs.core.async.__GT_t_cljs$core$async34749 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34750){
return (new cljs.core.async.t_cljs$core$async34749(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34750));
});

}

return (new cljs.core.async.t_cljs$core$async34749(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___36568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_34848){
var state_val_34849 = (state_34848[(1)]);
if((state_val_34849 === (7))){
var inst_34805 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34805)){
var statearr_34850_36573 = state_34848__$1;
(statearr_34850_36573[(1)] = (8));

} else {
var statearr_34851_36574 = state_34848__$1;
(statearr_34851_36574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (20))){
var inst_34797 = (state_34848[(7)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34848__$1,(23),out,inst_34797);
} else {
if((state_val_34849 === (1))){
var inst_34780 = calc_state();
var inst_34781 = cljs.core.__destructure_map(inst_34780);
var inst_34782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34781,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34781,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34781,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34785 = inst_34780;
var state_34848__$1 = (function (){var statearr_34852 = state_34848;
(statearr_34852[(8)] = inst_34784);

(statearr_34852[(9)] = inst_34782);

(statearr_34852[(10)] = inst_34785);

(statearr_34852[(11)] = inst_34783);

return statearr_34852;
})();
var statearr_34853_36578 = state_34848__$1;
(statearr_34853_36578[(2)] = null);

(statearr_34853_36578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (24))){
var inst_34788 = (state_34848[(12)]);
var inst_34785 = inst_34788;
var state_34848__$1 = (function (){var statearr_34854 = state_34848;
(statearr_34854[(10)] = inst_34785);

return statearr_34854;
})();
var statearr_34855_36587 = state_34848__$1;
(statearr_34855_36587[(2)] = null);

(statearr_34855_36587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (4))){
var inst_34797 = (state_34848[(7)]);
var inst_34799 = (state_34848[(13)]);
var inst_34796 = (state_34848[(2)]);
var inst_34797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34796,(0),null);
var inst_34798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34796,(1),null);
var inst_34799__$1 = (inst_34797__$1 == null);
var state_34848__$1 = (function (){var statearr_34860 = state_34848;
(statearr_34860[(14)] = inst_34798);

(statearr_34860[(7)] = inst_34797__$1);

(statearr_34860[(13)] = inst_34799__$1);

return statearr_34860;
})();
if(cljs.core.truth_(inst_34799__$1)){
var statearr_34861_36591 = state_34848__$1;
(statearr_34861_36591[(1)] = (5));

} else {
var statearr_34862_36592 = state_34848__$1;
(statearr_34862_36592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (15))){
var inst_34789 = (state_34848[(15)]);
var inst_34822 = (state_34848[(16)]);
var inst_34822__$1 = cljs.core.empty_QMARK_(inst_34789);
var state_34848__$1 = (function (){var statearr_34865 = state_34848;
(statearr_34865[(16)] = inst_34822__$1);

return statearr_34865;
})();
if(inst_34822__$1){
var statearr_34866_36593 = state_34848__$1;
(statearr_34866_36593[(1)] = (17));

} else {
var statearr_34867_36594 = state_34848__$1;
(statearr_34867_36594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (21))){
var inst_34788 = (state_34848[(12)]);
var inst_34785 = inst_34788;
var state_34848__$1 = (function (){var statearr_34869 = state_34848;
(statearr_34869[(10)] = inst_34785);

return statearr_34869;
})();
var statearr_34870_36610 = state_34848__$1;
(statearr_34870_36610[(2)] = null);

(statearr_34870_36610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (13))){
var inst_34815 = (state_34848[(2)]);
var inst_34816 = calc_state();
var inst_34785 = inst_34816;
var state_34848__$1 = (function (){var statearr_34871 = state_34848;
(statearr_34871[(10)] = inst_34785);

(statearr_34871[(17)] = inst_34815);

return statearr_34871;
})();
var statearr_34872_36615 = state_34848__$1;
(statearr_34872_36615[(2)] = null);

(statearr_34872_36615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (22))){
var inst_34842 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34874_36616 = state_34848__$1;
(statearr_34874_36616[(2)] = inst_34842);

(statearr_34874_36616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (6))){
var inst_34798 = (state_34848[(14)]);
var inst_34803 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34798,change);
var state_34848__$1 = state_34848;
var statearr_34875_36621 = state_34848__$1;
(statearr_34875_36621[(2)] = inst_34803);

(statearr_34875_36621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (25))){
var state_34848__$1 = state_34848;
var statearr_34876_36622 = state_34848__$1;
(statearr_34876_36622[(2)] = null);

(statearr_34876_36622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (17))){
var inst_34798 = (state_34848[(14)]);
var inst_34790 = (state_34848[(18)]);
var inst_34824 = (inst_34790.cljs$core$IFn$_invoke$arity$1 ? inst_34790.cljs$core$IFn$_invoke$arity$1(inst_34798) : inst_34790.call(null,inst_34798));
var inst_34825 = cljs.core.not(inst_34824);
var state_34848__$1 = state_34848;
var statearr_34877_36627 = state_34848__$1;
(statearr_34877_36627[(2)] = inst_34825);

(statearr_34877_36627[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (3))){
var inst_34846 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34848__$1,inst_34846);
} else {
if((state_val_34849 === (12))){
var state_34848__$1 = state_34848;
var statearr_34878_36630 = state_34848__$1;
(statearr_34878_36630[(2)] = null);

(statearr_34878_36630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (2))){
var inst_34788 = (state_34848[(12)]);
var inst_34785 = (state_34848[(10)]);
var inst_34788__$1 = cljs.core.__destructure_map(inst_34785);
var inst_34789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34788__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34788__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34788__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34848__$1 = (function (){var statearr_34881 = state_34848;
(statearr_34881[(15)] = inst_34789);

(statearr_34881[(18)] = inst_34790);

(statearr_34881[(12)] = inst_34788__$1);

return statearr_34881;
})();
return cljs.core.async.ioc_alts_BANG_(state_34848__$1,(4),inst_34791);
} else {
if((state_val_34849 === (23))){
var inst_34833 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34833)){
var statearr_34882_36635 = state_34848__$1;
(statearr_34882_36635[(1)] = (24));

} else {
var statearr_34883_36636 = state_34848__$1;
(statearr_34883_36636[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (19))){
var inst_34828 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34884_36637 = state_34848__$1;
(statearr_34884_36637[(2)] = inst_34828);

(statearr_34884_36637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (11))){
var inst_34798 = (state_34848[(14)]);
var inst_34812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34798);
var state_34848__$1 = state_34848;
var statearr_34885_36640 = state_34848__$1;
(statearr_34885_36640[(2)] = inst_34812);

(statearr_34885_36640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (9))){
var inst_34798 = (state_34848[(14)]);
var inst_34789 = (state_34848[(15)]);
var inst_34819 = (state_34848[(19)]);
var inst_34819__$1 = (inst_34789.cljs$core$IFn$_invoke$arity$1 ? inst_34789.cljs$core$IFn$_invoke$arity$1(inst_34798) : inst_34789.call(null,inst_34798));
var state_34848__$1 = (function (){var statearr_34887 = state_34848;
(statearr_34887[(19)] = inst_34819__$1);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34819__$1)){
var statearr_34888_36642 = state_34848__$1;
(statearr_34888_36642[(1)] = (14));

} else {
var statearr_34889_36644 = state_34848__$1;
(statearr_34889_36644[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (5))){
var inst_34799 = (state_34848[(13)]);
var state_34848__$1 = state_34848;
var statearr_34890_36645 = state_34848__$1;
(statearr_34890_36645[(2)] = inst_34799);

(statearr_34890_36645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (14))){
var inst_34819 = (state_34848[(19)]);
var state_34848__$1 = state_34848;
var statearr_34891_36646 = state_34848__$1;
(statearr_34891_36646[(2)] = inst_34819);

(statearr_34891_36646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (26))){
var inst_34838 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34892_36647 = state_34848__$1;
(statearr_34892_36647[(2)] = inst_34838);

(statearr_34892_36647[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (16))){
var inst_34830 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34830)){
var statearr_34894_36649 = state_34848__$1;
(statearr_34894_36649[(1)] = (20));

} else {
var statearr_34898_36651 = state_34848__$1;
(statearr_34898_36651[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (10))){
var inst_34844 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34899_36652 = state_34848__$1;
(statearr_34899_36652[(2)] = inst_34844);

(statearr_34899_36652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (18))){
var inst_34822 = (state_34848[(16)]);
var state_34848__$1 = state_34848;
var statearr_34900_36655 = state_34848__$1;
(statearr_34900_36655[(2)] = inst_34822);

(statearr_34900_36655[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (8))){
var inst_34797 = (state_34848[(7)]);
var inst_34810 = (inst_34797 == null);
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34810)){
var statearr_34901_36657 = state_34848__$1;
(statearr_34901_36657[(1)] = (11));

} else {
var statearr_34902_36658 = state_34848__$1;
(statearr_34902_36658[(1)] = (12));

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
var statearr_34903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34903[(0)] = cljs$core$async$mix_$_state_machine__33421__auto__);

(statearr_34903[(1)] = (1));

return statearr_34903;
});
var cljs$core$async$mix_$_state_machine__33421__auto____1 = (function (state_34848){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_34848);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e34904){var ex__33424__auto__ = e34904;
var statearr_34905_36661 = state_34848;
(statearr_34905_36661[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_34848[(4)]))){
var statearr_34906_36662 = state_34848;
(statearr_34906_36662[(1)] = cljs.core.first((state_34848[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36663 = state_34848;
state_34848 = G__36663;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33421__auto__ = function(state_34848){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33421__auto____1.call(this,state_34848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33421__auto____0;
cljs$core$async$mix_$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33421__auto____1;
return cljs$core$async$mix_$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_34907 = f__33656__auto__();
(statearr_34907[(6)] = c__33655__auto___36568);

return statearr_34907;
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

var cljs$core$async$Pub$sub_STAR_$dyn_36668 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36668(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36671 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36671(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36676 = (function() {
var G__36677 = null;
var G__36677__1 = (function (p){
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
var G__36677__2 = (function (p,v){
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
G__36677 = function(p,v){
switch(arguments.length){
case 1:
return G__36677__1.call(this,p);
case 2:
return G__36677__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36677.cljs$core$IFn$_invoke$arity$1 = G__36677__1;
G__36677.cljs$core$IFn$_invoke$arity$2 = G__36677__2;
return G__36677;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34921 = arguments.length;
switch (G__34921) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36676(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36676(p,v);
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
var G__34924 = arguments.length;
switch (G__34924) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34922_SHARP_){
if(cljs.core.truth_((p1__34922_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34922_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34922_SHARP_.call(null,topic)))){
return p1__34922_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34922_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34933 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34934){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34934 = meta34934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34935,meta34934__$1){
var self__ = this;
var _34935__$1 = this;
return (new cljs.core.async.t_cljs$core$async34933(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34934__$1));
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34935){
var self__ = this;
var _34935__$1 = this;
return self__.meta34934;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34934","meta34934",549643707,null)], null);
}));

(cljs.core.async.t_cljs$core$async34933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34933");

(cljs.core.async.t_cljs$core$async34933.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34933.
 */
cljs.core.async.__GT_t_cljs$core$async34933 = (function cljs$core$async$__GT_t_cljs$core$async34933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34934){
return (new cljs.core.async.t_cljs$core$async34933(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34934));
});

}

return (new cljs.core.async.t_cljs$core$async34933(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33655__auto___36701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35012){
var state_val_35013 = (state_35012[(1)]);
if((state_val_35013 === (7))){
var inst_35008 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35014_36702 = state_35012__$1;
(statearr_35014_36702[(2)] = inst_35008);

(statearr_35014_36702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (20))){
var state_35012__$1 = state_35012;
var statearr_35015_36703 = state_35012__$1;
(statearr_35015_36703[(2)] = null);

(statearr_35015_36703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (1))){
var state_35012__$1 = state_35012;
var statearr_35016_36704 = state_35012__$1;
(statearr_35016_36704[(2)] = null);

(statearr_35016_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (24))){
var inst_34991 = (state_35012[(7)]);
var inst_35000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34991);
var state_35012__$1 = state_35012;
var statearr_35017_36705 = state_35012__$1;
(statearr_35017_36705[(2)] = inst_35000);

(statearr_35017_36705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (4))){
var inst_34940 = (state_35012[(8)]);
var inst_34940__$1 = (state_35012[(2)]);
var inst_34941 = (inst_34940__$1 == null);
var state_35012__$1 = (function (){var statearr_35018 = state_35012;
(statearr_35018[(8)] = inst_34940__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34941)){
var statearr_35019_36707 = state_35012__$1;
(statearr_35019_36707[(1)] = (5));

} else {
var statearr_35020_36708 = state_35012__$1;
(statearr_35020_36708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (15))){
var inst_34985 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35021_36709 = state_35012__$1;
(statearr_35021_36709[(2)] = inst_34985);

(statearr_35021_36709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (21))){
var inst_35005 = (state_35012[(2)]);
var state_35012__$1 = (function (){var statearr_35022 = state_35012;
(statearr_35022[(9)] = inst_35005);

return statearr_35022;
})();
var statearr_35023_36710 = state_35012__$1;
(statearr_35023_36710[(2)] = null);

(statearr_35023_36710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (13))){
var inst_34964 = (state_35012[(10)]);
var inst_34966 = cljs.core.chunked_seq_QMARK_(inst_34964);
var state_35012__$1 = state_35012;
if(inst_34966){
var statearr_35024_36713 = state_35012__$1;
(statearr_35024_36713[(1)] = (16));

} else {
var statearr_35025_36715 = state_35012__$1;
(statearr_35025_36715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (22))){
var inst_34997 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
if(cljs.core.truth_(inst_34997)){
var statearr_35026_36716 = state_35012__$1;
(statearr_35026_36716[(1)] = (23));

} else {
var statearr_35027_36717 = state_35012__$1;
(statearr_35027_36717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (6))){
var inst_34993 = (state_35012[(11)]);
var inst_34991 = (state_35012[(7)]);
var inst_34940 = (state_35012[(8)]);
var inst_34991__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34940) : topic_fn.call(null,inst_34940));
var inst_34992 = cljs.core.deref(mults);
var inst_34993__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34992,inst_34991__$1);
var state_35012__$1 = (function (){var statearr_35028 = state_35012;
(statearr_35028[(11)] = inst_34993__$1);

(statearr_35028[(7)] = inst_34991__$1);

return statearr_35028;
})();
if(cljs.core.truth_(inst_34993__$1)){
var statearr_35029_36720 = state_35012__$1;
(statearr_35029_36720[(1)] = (19));

} else {
var statearr_35030_36721 = state_35012__$1;
(statearr_35030_36721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (25))){
var inst_35002 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35031_36722 = state_35012__$1;
(statearr_35031_36722[(2)] = inst_35002);

(statearr_35031_36722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (17))){
var inst_34964 = (state_35012[(10)]);
var inst_34976 = cljs.core.first(inst_34964);
var inst_34977 = cljs.core.async.muxch_STAR_(inst_34976);
var inst_34978 = cljs.core.async.close_BANG_(inst_34977);
var inst_34979 = cljs.core.next(inst_34964);
var inst_34950 = inst_34979;
var inst_34951 = null;
var inst_34952 = (0);
var inst_34953 = (0);
var state_35012__$1 = (function (){var statearr_35032 = state_35012;
(statearr_35032[(12)] = inst_34951);

(statearr_35032[(13)] = inst_34952);

(statearr_35032[(14)] = inst_34950);

(statearr_35032[(15)] = inst_34953);

(statearr_35032[(16)] = inst_34978);

return statearr_35032;
})();
var statearr_35033_36725 = state_35012__$1;
(statearr_35033_36725[(2)] = null);

(statearr_35033_36725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (3))){
var inst_35010 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35012__$1,inst_35010);
} else {
if((state_val_35013 === (12))){
var inst_34987 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35034_36727 = state_35012__$1;
(statearr_35034_36727[(2)] = inst_34987);

(statearr_35034_36727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (2))){
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35012__$1,(4),ch);
} else {
if((state_val_35013 === (23))){
var state_35012__$1 = state_35012;
var statearr_35035_36731 = state_35012__$1;
(statearr_35035_36731[(2)] = null);

(statearr_35035_36731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (19))){
var inst_34993 = (state_35012[(11)]);
var inst_34940 = (state_35012[(8)]);
var inst_34995 = cljs.core.async.muxch_STAR_(inst_34993);
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35012__$1,(22),inst_34995,inst_34940);
} else {
if((state_val_35013 === (11))){
var inst_34950 = (state_35012[(14)]);
var inst_34964 = (state_35012[(10)]);
var inst_34964__$1 = cljs.core.seq(inst_34950);
var state_35012__$1 = (function (){var statearr_35036 = state_35012;
(statearr_35036[(10)] = inst_34964__$1);

return statearr_35036;
})();
if(inst_34964__$1){
var statearr_35037_36732 = state_35012__$1;
(statearr_35037_36732[(1)] = (13));

} else {
var statearr_35038_36733 = state_35012__$1;
(statearr_35038_36733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (9))){
var inst_34989 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35039_36734 = state_35012__$1;
(statearr_35039_36734[(2)] = inst_34989);

(statearr_35039_36734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (5))){
var inst_34947 = cljs.core.deref(mults);
var inst_34948 = cljs.core.vals(inst_34947);
var inst_34949 = cljs.core.seq(inst_34948);
var inst_34950 = inst_34949;
var inst_34951 = null;
var inst_34952 = (0);
var inst_34953 = (0);
var state_35012__$1 = (function (){var statearr_35040 = state_35012;
(statearr_35040[(12)] = inst_34951);

(statearr_35040[(13)] = inst_34952);

(statearr_35040[(14)] = inst_34950);

(statearr_35040[(15)] = inst_34953);

return statearr_35040;
})();
var statearr_35041_36743 = state_35012__$1;
(statearr_35041_36743[(2)] = null);

(statearr_35041_36743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (14))){
var state_35012__$1 = state_35012;
var statearr_35045_36744 = state_35012__$1;
(statearr_35045_36744[(2)] = null);

(statearr_35045_36744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (16))){
var inst_34964 = (state_35012[(10)]);
var inst_34968 = cljs.core.chunk_first(inst_34964);
var inst_34972 = cljs.core.chunk_rest(inst_34964);
var inst_34973 = cljs.core.count(inst_34968);
var inst_34950 = inst_34972;
var inst_34951 = inst_34968;
var inst_34952 = inst_34973;
var inst_34953 = (0);
var state_35012__$1 = (function (){var statearr_35046 = state_35012;
(statearr_35046[(12)] = inst_34951);

(statearr_35046[(13)] = inst_34952);

(statearr_35046[(14)] = inst_34950);

(statearr_35046[(15)] = inst_34953);

return statearr_35046;
})();
var statearr_35047_36746 = state_35012__$1;
(statearr_35047_36746[(2)] = null);

(statearr_35047_36746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (10))){
var inst_34951 = (state_35012[(12)]);
var inst_34952 = (state_35012[(13)]);
var inst_34950 = (state_35012[(14)]);
var inst_34953 = (state_35012[(15)]);
var inst_34958 = cljs.core._nth(inst_34951,inst_34953);
var inst_34959 = cljs.core.async.muxch_STAR_(inst_34958);
var inst_34960 = cljs.core.async.close_BANG_(inst_34959);
var inst_34961 = (inst_34953 + (1));
var tmp35042 = inst_34951;
var tmp35043 = inst_34952;
var tmp35044 = inst_34950;
var inst_34950__$1 = tmp35044;
var inst_34951__$1 = tmp35042;
var inst_34952__$1 = tmp35043;
var inst_34953__$1 = inst_34961;
var state_35012__$1 = (function (){var statearr_35049 = state_35012;
(statearr_35049[(12)] = inst_34951__$1);

(statearr_35049[(13)] = inst_34952__$1);

(statearr_35049[(14)] = inst_34950__$1);

(statearr_35049[(17)] = inst_34960);

(statearr_35049[(15)] = inst_34953__$1);

return statearr_35049;
})();
var statearr_35050_36748 = state_35012__$1;
(statearr_35050_36748[(2)] = null);

(statearr_35050_36748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (18))){
var inst_34982 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35051_36749 = state_35012__$1;
(statearr_35051_36749[(2)] = inst_34982);

(statearr_35051_36749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (8))){
var inst_34952 = (state_35012[(13)]);
var inst_34953 = (state_35012[(15)]);
var inst_34955 = (inst_34953 < inst_34952);
var inst_34956 = inst_34955;
var state_35012__$1 = state_35012;
if(cljs.core.truth_(inst_34956)){
var statearr_35055_36750 = state_35012__$1;
(statearr_35055_36750[(1)] = (10));

} else {
var statearr_35056_36751 = state_35012__$1;
(statearr_35056_36751[(1)] = (11));

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
var statearr_35057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35057[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35057[(1)] = (1));

return statearr_35057;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35012){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35012);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35058){var ex__33424__auto__ = e35058;
var statearr_35059_36752 = state_35012;
(statearr_35059_36752[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35012[(4)]))){
var statearr_35060_36753 = state_35012;
(statearr_35060_36753[(1)] = cljs.core.first((state_35012[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36758 = state_35012;
state_35012 = G__36758;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35065 = f__33656__auto__();
(statearr_35065[(6)] = c__33655__auto___36701);

return statearr_35065;
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
var G__35067 = arguments.length;
switch (G__35067) {
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
var G__35069 = arguments.length;
switch (G__35069) {
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
var G__35085 = arguments.length;
switch (G__35085) {
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
var c__33655__auto___36775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35154){
var state_val_35155 = (state_35154[(1)]);
if((state_val_35155 === (7))){
var state_35154__$1 = state_35154;
var statearr_35158_36778 = state_35154__$1;
(statearr_35158_36778[(2)] = null);

(statearr_35158_36778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (1))){
var state_35154__$1 = state_35154;
var statearr_35159_36779 = state_35154__$1;
(statearr_35159_36779[(2)] = null);

(statearr_35159_36779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (4))){
var inst_35109 = (state_35154[(7)]);
var inst_35108 = (state_35154[(8)]);
var inst_35117 = (inst_35109 < inst_35108);
var state_35154__$1 = state_35154;
if(cljs.core.truth_(inst_35117)){
var statearr_35161_36783 = state_35154__$1;
(statearr_35161_36783[(1)] = (6));

} else {
var statearr_35162_36784 = state_35154__$1;
(statearr_35162_36784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (15))){
var inst_35140 = (state_35154[(9)]);
var inst_35145 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35140);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35154__$1,(17),out,inst_35145);
} else {
if((state_val_35155 === (13))){
var inst_35140 = (state_35154[(9)]);
var inst_35140__$1 = (state_35154[(2)]);
var inst_35141 = cljs.core.some(cljs.core.nil_QMARK_,inst_35140__$1);
var state_35154__$1 = (function (){var statearr_35163 = state_35154;
(statearr_35163[(9)] = inst_35140__$1);

return statearr_35163;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35164_36787 = state_35154__$1;
(statearr_35164_36787[(1)] = (14));

} else {
var statearr_35165_36788 = state_35154__$1;
(statearr_35165_36788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (6))){
var state_35154__$1 = state_35154;
var statearr_35166_36789 = state_35154__$1;
(statearr_35166_36789[(2)] = null);

(statearr_35166_36789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (17))){
var inst_35147 = (state_35154[(2)]);
var state_35154__$1 = (function (){var statearr_35171 = state_35154;
(statearr_35171[(10)] = inst_35147);

return statearr_35171;
})();
var statearr_35172_36790 = state_35154__$1;
(statearr_35172_36790[(2)] = null);

(statearr_35172_36790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (3))){
var inst_35152 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35154__$1,inst_35152);
} else {
if((state_val_35155 === (12))){
var _ = (function (){var statearr_35173 = state_35154;
(statearr_35173[(4)] = cljs.core.rest((state_35154[(4)])));

return statearr_35173;
})();
var state_35154__$1 = state_35154;
var ex35170 = (state_35154__$1[(2)]);
var statearr_35174_36794 = state_35154__$1;
(statearr_35174_36794[(5)] = ex35170);


if((ex35170 instanceof Object)){
var statearr_35175_36795 = state_35154__$1;
(statearr_35175_36795[(1)] = (11));

(statearr_35175_36795[(5)] = null);

} else {
throw ex35170;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (2))){
var inst_35107 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35108 = cnt;
var inst_35109 = (0);
var state_35154__$1 = (function (){var statearr_35176 = state_35154;
(statearr_35176[(7)] = inst_35109);

(statearr_35176[(11)] = inst_35107);

(statearr_35176[(8)] = inst_35108);

return statearr_35176;
})();
var statearr_35177_36798 = state_35154__$1;
(statearr_35177_36798[(2)] = null);

(statearr_35177_36798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (11))){
var inst_35119 = (state_35154[(2)]);
var inst_35120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35154__$1 = (function (){var statearr_35178 = state_35154;
(statearr_35178[(12)] = inst_35119);

return statearr_35178;
})();
var statearr_35179_36802 = state_35154__$1;
(statearr_35179_36802[(2)] = inst_35120);

(statearr_35179_36802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (9))){
var inst_35109 = (state_35154[(7)]);
var _ = (function (){var statearr_35180 = state_35154;
(statearr_35180[(4)] = cljs.core.cons((12),(state_35154[(4)])));

return statearr_35180;
})();
var inst_35126 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35109) : chs__$1.call(null,inst_35109));
var inst_35127 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35109) : done.call(null,inst_35109));
var inst_35128 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35126,inst_35127);
var ___$1 = (function (){var statearr_35181 = state_35154;
(statearr_35181[(4)] = cljs.core.rest((state_35154[(4)])));

return statearr_35181;
})();
var state_35154__$1 = state_35154;
var statearr_35182_36803 = state_35154__$1;
(statearr_35182_36803[(2)] = inst_35128);

(statearr_35182_36803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (5))){
var inst_35138 = (state_35154[(2)]);
var state_35154__$1 = (function (){var statearr_35183 = state_35154;
(statearr_35183[(13)] = inst_35138);

return statearr_35183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35154__$1,(13),dchan);
} else {
if((state_val_35155 === (14))){
var inst_35143 = cljs.core.async.close_BANG_(out);
var state_35154__$1 = state_35154;
var statearr_35184_36804 = state_35154__$1;
(statearr_35184_36804[(2)] = inst_35143);

(statearr_35184_36804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (16))){
var inst_35150 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
var statearr_35185_36806 = state_35154__$1;
(statearr_35185_36806[(2)] = inst_35150);

(statearr_35185_36806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (10))){
var inst_35109 = (state_35154[(7)]);
var inst_35131 = (state_35154[(2)]);
var inst_35132 = (inst_35109 + (1));
var inst_35109__$1 = inst_35132;
var state_35154__$1 = (function (){var statearr_35186 = state_35154;
(statearr_35186[(14)] = inst_35131);

(statearr_35186[(7)] = inst_35109__$1);

return statearr_35186;
})();
var statearr_35187_36812 = state_35154__$1;
(statearr_35187_36812[(2)] = null);

(statearr_35187_36812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (8))){
var inst_35136 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
var statearr_35188_36813 = state_35154__$1;
(statearr_35188_36813[(2)] = inst_35136);

(statearr_35188_36813[(1)] = (5));


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
var statearr_35189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35189[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35189[(1)] = (1));

return statearr_35189;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35154){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35154);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35190){var ex__33424__auto__ = e35190;
var statearr_35191_36818 = state_35154;
(statearr_35191_36818[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35154[(4)]))){
var statearr_35192_36819 = state_35154;
(statearr_35192_36819[(1)] = cljs.core.first((state_35154[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36822 = state_35154;
state_35154 = G__36822;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35193 = f__33656__auto__();
(statearr_35193[(6)] = c__33655__auto___36775);

return statearr_35193;
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
var G__35196 = arguments.length;
switch (G__35196) {
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
var c__33655__auto___36827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35234){
var state_val_35235 = (state_35234[(1)]);
if((state_val_35235 === (7))){
var inst_35212 = (state_35234[(7)]);
var inst_35213 = (state_35234[(8)]);
var inst_35212__$1 = (state_35234[(2)]);
var inst_35213__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35212__$1,(0),null);
var inst_35214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35212__$1,(1),null);
var inst_35216 = (inst_35213__$1 == null);
var state_35234__$1 = (function (){var statearr_35241 = state_35234;
(statearr_35241[(7)] = inst_35212__$1);

(statearr_35241[(8)] = inst_35213__$1);

(statearr_35241[(9)] = inst_35214);

return statearr_35241;
})();
if(cljs.core.truth_(inst_35216)){
var statearr_35242_36829 = state_35234__$1;
(statearr_35242_36829[(1)] = (8));

} else {
var statearr_35243_36830 = state_35234__$1;
(statearr_35243_36830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (1))){
var inst_35199 = cljs.core.vec(chs);
var inst_35200 = inst_35199;
var state_35234__$1 = (function (){var statearr_35244 = state_35234;
(statearr_35244[(10)] = inst_35200);

return statearr_35244;
})();
var statearr_35245_36835 = state_35234__$1;
(statearr_35245_36835[(2)] = null);

(statearr_35245_36835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (4))){
var inst_35200 = (state_35234[(10)]);
var state_35234__$1 = state_35234;
return cljs.core.async.ioc_alts_BANG_(state_35234__$1,(7),inst_35200);
} else {
if((state_val_35235 === (6))){
var inst_35230 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35246_36836 = state_35234__$1;
(statearr_35246_36836[(2)] = inst_35230);

(statearr_35246_36836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (3))){
var inst_35232 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35234__$1,inst_35232);
} else {
if((state_val_35235 === (2))){
var inst_35200 = (state_35234[(10)]);
var inst_35203 = cljs.core.count(inst_35200);
var inst_35204 = (inst_35203 > (0));
var state_35234__$1 = state_35234;
if(cljs.core.truth_(inst_35204)){
var statearr_35248_36837 = state_35234__$1;
(statearr_35248_36837[(1)] = (4));

} else {
var statearr_35249_36838 = state_35234__$1;
(statearr_35249_36838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (11))){
var inst_35200 = (state_35234[(10)]);
var inst_35223 = (state_35234[(2)]);
var tmp35247 = inst_35200;
var inst_35200__$1 = tmp35247;
var state_35234__$1 = (function (){var statearr_35250 = state_35234;
(statearr_35250[(10)] = inst_35200__$1);

(statearr_35250[(11)] = inst_35223);

return statearr_35250;
})();
var statearr_35251_36839 = state_35234__$1;
(statearr_35251_36839[(2)] = null);

(statearr_35251_36839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (9))){
var inst_35213 = (state_35234[(8)]);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35234__$1,(11),out,inst_35213);
} else {
if((state_val_35235 === (5))){
var inst_35228 = cljs.core.async.close_BANG_(out);
var state_35234__$1 = state_35234;
var statearr_35252_36842 = state_35234__$1;
(statearr_35252_36842[(2)] = inst_35228);

(statearr_35252_36842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (10))){
var inst_35226 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35253_36843 = state_35234__$1;
(statearr_35253_36843[(2)] = inst_35226);

(statearr_35253_36843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (8))){
var inst_35212 = (state_35234[(7)]);
var inst_35213 = (state_35234[(8)]);
var inst_35200 = (state_35234[(10)]);
var inst_35214 = (state_35234[(9)]);
var inst_35218 = (function (){var cs = inst_35200;
var vec__35208 = inst_35212;
var v = inst_35213;
var c = inst_35214;
return (function (p1__35194_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35194_SHARP_);
});
})();
var inst_35219 = cljs.core.filterv(inst_35218,inst_35200);
var inst_35200__$1 = inst_35219;
var state_35234__$1 = (function (){var statearr_35254 = state_35234;
(statearr_35254[(10)] = inst_35200__$1);

return statearr_35254;
})();
var statearr_35255_36844 = state_35234__$1;
(statearr_35255_36844[(2)] = null);

(statearr_35255_36844[(1)] = (2));


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
var statearr_35256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35256[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35256[(1)] = (1));

return statearr_35256;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35234){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35234);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35257){var ex__33424__auto__ = e35257;
var statearr_35258_36849 = state_35234;
(statearr_35258_36849[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35234[(4)]))){
var statearr_35259_36850 = state_35234;
(statearr_35259_36850[(1)] = cljs.core.first((state_35234[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36851 = state_35234;
state_35234 = G__36851;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35260 = f__33656__auto__();
(statearr_35260[(6)] = c__33655__auto___36827);

return statearr_35260;
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
var G__35263 = arguments.length;
switch (G__35263) {
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
var c__33655__auto___36856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35288){
var state_val_35289 = (state_35288[(1)]);
if((state_val_35289 === (7))){
var inst_35270 = (state_35288[(7)]);
var inst_35270__$1 = (state_35288[(2)]);
var inst_35271 = (inst_35270__$1 == null);
var inst_35272 = cljs.core.not(inst_35271);
var state_35288__$1 = (function (){var statearr_35292 = state_35288;
(statearr_35292[(7)] = inst_35270__$1);

return statearr_35292;
})();
if(inst_35272){
var statearr_35294_36861 = state_35288__$1;
(statearr_35294_36861[(1)] = (8));

} else {
var statearr_35295_36862 = state_35288__$1;
(statearr_35295_36862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (1))){
var inst_35265 = (0);
var state_35288__$1 = (function (){var statearr_35297 = state_35288;
(statearr_35297[(8)] = inst_35265);

return statearr_35297;
})();
var statearr_35298_36864 = state_35288__$1;
(statearr_35298_36864[(2)] = null);

(statearr_35298_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (4))){
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35288__$1,(7),ch);
} else {
if((state_val_35289 === (6))){
var inst_35283 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
var statearr_35299_36870 = state_35288__$1;
(statearr_35299_36870[(2)] = inst_35283);

(statearr_35299_36870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (3))){
var inst_35285 = (state_35288[(2)]);
var inst_35286 = cljs.core.async.close_BANG_(out);
var state_35288__$1 = (function (){var statearr_35300 = state_35288;
(statearr_35300[(9)] = inst_35285);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35288__$1,inst_35286);
} else {
if((state_val_35289 === (2))){
var inst_35265 = (state_35288[(8)]);
var inst_35267 = (inst_35265 < n);
var state_35288__$1 = state_35288;
if(cljs.core.truth_(inst_35267)){
var statearr_35303_36872 = state_35288__$1;
(statearr_35303_36872[(1)] = (4));

} else {
var statearr_35304_36874 = state_35288__$1;
(statearr_35304_36874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (11))){
var inst_35265 = (state_35288[(8)]);
var inst_35275 = (state_35288[(2)]);
var inst_35276 = (inst_35265 + (1));
var inst_35265__$1 = inst_35276;
var state_35288__$1 = (function (){var statearr_35305 = state_35288;
(statearr_35305[(8)] = inst_35265__$1);

(statearr_35305[(10)] = inst_35275);

return statearr_35305;
})();
var statearr_35306_36877 = state_35288__$1;
(statearr_35306_36877[(2)] = null);

(statearr_35306_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (9))){
var state_35288__$1 = state_35288;
var statearr_35307_36878 = state_35288__$1;
(statearr_35307_36878[(2)] = null);

(statearr_35307_36878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (5))){
var state_35288__$1 = state_35288;
var statearr_35308_36879 = state_35288__$1;
(statearr_35308_36879[(2)] = null);

(statearr_35308_36879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (10))){
var inst_35280 = (state_35288[(2)]);
var state_35288__$1 = state_35288;
var statearr_35309_36880 = state_35288__$1;
(statearr_35309_36880[(2)] = inst_35280);

(statearr_35309_36880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35289 === (8))){
var inst_35270 = (state_35288[(7)]);
var state_35288__$1 = state_35288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35288__$1,(11),out,inst_35270);
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
var statearr_35310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35310[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35310[(1)] = (1));

return statearr_35310;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35288){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35288);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35311){var ex__33424__auto__ = e35311;
var statearr_35312_36882 = state_35288;
(statearr_35312_36882[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35288[(4)]))){
var statearr_35313_36885 = state_35288;
(statearr_35313_36885[(1)] = cljs.core.first((state_35288[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36888 = state_35288;
state_35288 = G__36888;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35314 = f__33656__auto__();
(statearr_35314[(6)] = c__33655__auto___36856);

return statearr_35314;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35316 = (function (f,ch,meta35317){
this.f = f;
this.ch = ch;
this.meta35317 = meta35317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35318,meta35317__$1){
var self__ = this;
var _35318__$1 = this;
return (new cljs.core.async.t_cljs$core$async35316(self__.f,self__.ch,meta35317__$1));
}));

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35318){
var self__ = this;
var _35318__$1 = this;
return self__.meta35317;
}));

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35322 = (function (f,ch,meta35317,_,fn1,meta35323){
this.f = f;
this.ch = ch;
this.meta35317 = meta35317;
this._ = _;
this.fn1 = fn1;
this.meta35323 = meta35323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35324,meta35323__$1){
var self__ = this;
var _35324__$1 = this;
return (new cljs.core.async.t_cljs$core$async35322(self__.f,self__.ch,self__.meta35317,self__._,self__.fn1,meta35323__$1));
}));

(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35324){
var self__ = this;
var _35324__$1 = this;
return self__.meta35323;
}));

(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35315_SHARP_){
var G__35338 = (((p1__35315_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35315_SHARP_) : self__.f.call(null,p1__35315_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35338) : f1.call(null,G__35338));
});
}));

(cljs.core.async.t_cljs$core$async35322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35317","meta35317",-1283920355,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35316","cljs.core.async/t_cljs$core$async35316",-1164086760,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35323","meta35323",-1812639572,null)], null);
}));

(cljs.core.async.t_cljs$core$async35322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35322");

(cljs.core.async.t_cljs$core$async35322.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35322.
 */
cljs.core.async.__GT_t_cljs$core$async35322 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35322(f__$1,ch__$1,meta35317__$1,___$2,fn1__$1,meta35323){
return (new cljs.core.async.t_cljs$core$async35322(f__$1,ch__$1,meta35317__$1,___$2,fn1__$1,meta35323));
});

}

return (new cljs.core.async.t_cljs$core$async35322(self__.f,self__.ch,self__.meta35317,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35346 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35346) : self__.f.call(null,G__35346));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35317","meta35317",-1283920355,null)], null);
}));

(cljs.core.async.t_cljs$core$async35316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35316");

(cljs.core.async.t_cljs$core$async35316.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35316.
 */
cljs.core.async.__GT_t_cljs$core$async35316 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35316(f__$1,ch__$1,meta35317){
return (new cljs.core.async.t_cljs$core$async35316(f__$1,ch__$1,meta35317));
});

}

return (new cljs.core.async.t_cljs$core$async35316(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35360 = (function (f,ch,meta35361){
this.f = f;
this.ch = ch;
this.meta35361 = meta35361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35362,meta35361__$1){
var self__ = this;
var _35362__$1 = this;
return (new cljs.core.async.t_cljs$core$async35360(self__.f,self__.ch,meta35361__$1));
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35362){
var self__ = this;
var _35362__$1 = this;
return self__.meta35361;
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35361","meta35361",-2113700927,null)], null);
}));

(cljs.core.async.t_cljs$core$async35360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35360");

(cljs.core.async.t_cljs$core$async35360.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35360.
 */
cljs.core.async.__GT_t_cljs$core$async35360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35360(f__$1,ch__$1,meta35361){
return (new cljs.core.async.t_cljs$core$async35360(f__$1,ch__$1,meta35361));
});

}

return (new cljs.core.async.t_cljs$core$async35360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35372 = (function (p,ch,meta35373){
this.p = p;
this.ch = ch;
this.meta35373 = meta35373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35374,meta35373__$1){
var self__ = this;
var _35374__$1 = this;
return (new cljs.core.async.t_cljs$core$async35372(self__.p,self__.ch,meta35373__$1));
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35374){
var self__ = this;
var _35374__$1 = this;
return self__.meta35373;
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35373","meta35373",-274045623,null)], null);
}));

(cljs.core.async.t_cljs$core$async35372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35372");

(cljs.core.async.t_cljs$core$async35372.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35372.
 */
cljs.core.async.__GT_t_cljs$core$async35372 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35372(p__$1,ch__$1,meta35373){
return (new cljs.core.async.t_cljs$core$async35372(p__$1,ch__$1,meta35373));
});

}

return (new cljs.core.async.t_cljs$core$async35372(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35378 = arguments.length;
switch (G__35378) {
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
var c__33655__auto___36975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35410){
var state_val_35411 = (state_35410[(1)]);
if((state_val_35411 === (7))){
var inst_35400 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35412_36976 = state_35410__$1;
(statearr_35412_36976[(2)] = inst_35400);

(statearr_35412_36976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (1))){
var state_35410__$1 = state_35410;
var statearr_35414_36980 = state_35410__$1;
(statearr_35414_36980[(2)] = null);

(statearr_35414_36980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (4))){
var inst_35382 = (state_35410[(7)]);
var inst_35382__$1 = (state_35410[(2)]);
var inst_35383 = (inst_35382__$1 == null);
var state_35410__$1 = (function (){var statearr_35415 = state_35410;
(statearr_35415[(7)] = inst_35382__$1);

return statearr_35415;
})();
if(cljs.core.truth_(inst_35383)){
var statearr_35417_36981 = state_35410__$1;
(statearr_35417_36981[(1)] = (5));

} else {
var statearr_35418_36982 = state_35410__$1;
(statearr_35418_36982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (6))){
var inst_35382 = (state_35410[(7)]);
var inst_35387 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35382) : p.call(null,inst_35382));
var state_35410__$1 = state_35410;
if(cljs.core.truth_(inst_35387)){
var statearr_35419_36983 = state_35410__$1;
(statearr_35419_36983[(1)] = (8));

} else {
var statearr_35420_36984 = state_35410__$1;
(statearr_35420_36984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (3))){
var inst_35405 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35410__$1,inst_35405);
} else {
if((state_val_35411 === (2))){
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35410__$1,(4),ch);
} else {
if((state_val_35411 === (11))){
var inst_35390 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35421_36990 = state_35410__$1;
(statearr_35421_36990[(2)] = inst_35390);

(statearr_35421_36990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (9))){
var state_35410__$1 = state_35410;
var statearr_35422_36991 = state_35410__$1;
(statearr_35422_36991[(2)] = null);

(statearr_35422_36991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (5))){
var inst_35385 = cljs.core.async.close_BANG_(out);
var state_35410__$1 = state_35410;
var statearr_35423_36995 = state_35410__$1;
(statearr_35423_36995[(2)] = inst_35385);

(statearr_35423_36995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (10))){
var inst_35393 = (state_35410[(2)]);
var state_35410__$1 = (function (){var statearr_35424 = state_35410;
(statearr_35424[(8)] = inst_35393);

return statearr_35424;
})();
var statearr_35425_36996 = state_35410__$1;
(statearr_35425_36996[(2)] = null);

(statearr_35425_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (8))){
var inst_35382 = (state_35410[(7)]);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35410__$1,(11),out,inst_35382);
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
var statearr_35426 = [null,null,null,null,null,null,null,null,null];
(statearr_35426[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35426[(1)] = (1));

return statearr_35426;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35410){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35410);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35427){var ex__33424__auto__ = e35427;
var statearr_35428_36997 = state_35410;
(statearr_35428_36997[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35410[(4)]))){
var statearr_35429_36998 = state_35410;
(statearr_35429_36998[(1)] = cljs.core.first((state_35410[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36999 = state_35410;
state_35410 = G__36999;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35430 = f__33656__auto__();
(statearr_35430[(6)] = c__33655__auto___36975);

return statearr_35430;
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
var G__35434 = arguments.length;
switch (G__35434) {
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
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35506){
var state_val_35507 = (state_35506[(1)]);
if((state_val_35507 === (7))){
var inst_35502 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35508_37006 = state_35506__$1;
(statearr_35508_37006[(2)] = inst_35502);

(statearr_35508_37006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (20))){
var inst_35463 = (state_35506[(7)]);
var inst_35474 = (state_35506[(2)]);
var inst_35475 = cljs.core.next(inst_35463);
var inst_35449 = inst_35475;
var inst_35450 = null;
var inst_35451 = (0);
var inst_35452 = (0);
var state_35506__$1 = (function (){var statearr_35509 = state_35506;
(statearr_35509[(8)] = inst_35474);

(statearr_35509[(9)] = inst_35450);

(statearr_35509[(10)] = inst_35452);

(statearr_35509[(11)] = inst_35451);

(statearr_35509[(12)] = inst_35449);

return statearr_35509;
})();
var statearr_35510_37018 = state_35506__$1;
(statearr_35510_37018[(2)] = null);

(statearr_35510_37018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (1))){
var state_35506__$1 = state_35506;
var statearr_35512_37019 = state_35506__$1;
(statearr_35512_37019[(2)] = null);

(statearr_35512_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (4))){
var inst_35438 = (state_35506[(13)]);
var inst_35438__$1 = (state_35506[(2)]);
var inst_35439 = (inst_35438__$1 == null);
var state_35506__$1 = (function (){var statearr_35513 = state_35506;
(statearr_35513[(13)] = inst_35438__$1);

return statearr_35513;
})();
if(cljs.core.truth_(inst_35439)){
var statearr_35514_37021 = state_35506__$1;
(statearr_35514_37021[(1)] = (5));

} else {
var statearr_35515_37022 = state_35506__$1;
(statearr_35515_37022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (15))){
var state_35506__$1 = state_35506;
var statearr_35519_37023 = state_35506__$1;
(statearr_35519_37023[(2)] = null);

(statearr_35519_37023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (21))){
var state_35506__$1 = state_35506;
var statearr_35520_37024 = state_35506__$1;
(statearr_35520_37024[(2)] = null);

(statearr_35520_37024[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (13))){
var inst_35450 = (state_35506[(9)]);
var inst_35452 = (state_35506[(10)]);
var inst_35451 = (state_35506[(11)]);
var inst_35449 = (state_35506[(12)]);
var inst_35459 = (state_35506[(2)]);
var inst_35460 = (inst_35452 + (1));
var tmp35516 = inst_35450;
var tmp35517 = inst_35451;
var tmp35518 = inst_35449;
var inst_35449__$1 = tmp35518;
var inst_35450__$1 = tmp35516;
var inst_35451__$1 = tmp35517;
var inst_35452__$1 = inst_35460;
var state_35506__$1 = (function (){var statearr_35521 = state_35506;
(statearr_35521[(9)] = inst_35450__$1);

(statearr_35521[(10)] = inst_35452__$1);

(statearr_35521[(14)] = inst_35459);

(statearr_35521[(11)] = inst_35451__$1);

(statearr_35521[(12)] = inst_35449__$1);

return statearr_35521;
})();
var statearr_35522_37031 = state_35506__$1;
(statearr_35522_37031[(2)] = null);

(statearr_35522_37031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (22))){
var state_35506__$1 = state_35506;
var statearr_35523_37032 = state_35506__$1;
(statearr_35523_37032[(2)] = null);

(statearr_35523_37032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (6))){
var inst_35438 = (state_35506[(13)]);
var inst_35447 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35438) : f.call(null,inst_35438));
var inst_35448 = cljs.core.seq(inst_35447);
var inst_35449 = inst_35448;
var inst_35450 = null;
var inst_35451 = (0);
var inst_35452 = (0);
var state_35506__$1 = (function (){var statearr_35524 = state_35506;
(statearr_35524[(9)] = inst_35450);

(statearr_35524[(10)] = inst_35452);

(statearr_35524[(11)] = inst_35451);

(statearr_35524[(12)] = inst_35449);

return statearr_35524;
})();
var statearr_35525_37034 = state_35506__$1;
(statearr_35525_37034[(2)] = null);

(statearr_35525_37034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (17))){
var inst_35463 = (state_35506[(7)]);
var inst_35467 = cljs.core.chunk_first(inst_35463);
var inst_35468 = cljs.core.chunk_rest(inst_35463);
var inst_35469 = cljs.core.count(inst_35467);
var inst_35449 = inst_35468;
var inst_35450 = inst_35467;
var inst_35451 = inst_35469;
var inst_35452 = (0);
var state_35506__$1 = (function (){var statearr_35526 = state_35506;
(statearr_35526[(9)] = inst_35450);

(statearr_35526[(10)] = inst_35452);

(statearr_35526[(11)] = inst_35451);

(statearr_35526[(12)] = inst_35449);

return statearr_35526;
})();
var statearr_35527_37044 = state_35506__$1;
(statearr_35527_37044[(2)] = null);

(statearr_35527_37044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (3))){
var inst_35504 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35506__$1,inst_35504);
} else {
if((state_val_35507 === (12))){
var inst_35483 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35530_37046 = state_35506__$1;
(statearr_35530_37046[(2)] = inst_35483);

(statearr_35530_37046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (2))){
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35506__$1,(4),in$);
} else {
if((state_val_35507 === (23))){
var inst_35500 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35531_37049 = state_35506__$1;
(statearr_35531_37049[(2)] = inst_35500);

(statearr_35531_37049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (19))){
var inst_35478 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35532_37050 = state_35506__$1;
(statearr_35532_37050[(2)] = inst_35478);

(statearr_35532_37050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (11))){
var inst_35449 = (state_35506[(12)]);
var inst_35463 = (state_35506[(7)]);
var inst_35463__$1 = cljs.core.seq(inst_35449);
var state_35506__$1 = (function (){var statearr_35534 = state_35506;
(statearr_35534[(7)] = inst_35463__$1);

return statearr_35534;
})();
if(inst_35463__$1){
var statearr_35535_37054 = state_35506__$1;
(statearr_35535_37054[(1)] = (14));

} else {
var statearr_35536_37055 = state_35506__$1;
(statearr_35536_37055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (9))){
var inst_35485 = (state_35506[(2)]);
var inst_35486 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35506__$1 = (function (){var statearr_35538 = state_35506;
(statearr_35538[(15)] = inst_35485);

return statearr_35538;
})();
if(cljs.core.truth_(inst_35486)){
var statearr_35539_37057 = state_35506__$1;
(statearr_35539_37057[(1)] = (21));

} else {
var statearr_35540_37058 = state_35506__$1;
(statearr_35540_37058[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (5))){
var inst_35441 = cljs.core.async.close_BANG_(out);
var state_35506__$1 = state_35506;
var statearr_35541_37059 = state_35506__$1;
(statearr_35541_37059[(2)] = inst_35441);

(statearr_35541_37059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (14))){
var inst_35463 = (state_35506[(7)]);
var inst_35465 = cljs.core.chunked_seq_QMARK_(inst_35463);
var state_35506__$1 = state_35506;
if(inst_35465){
var statearr_35542_37060 = state_35506__$1;
(statearr_35542_37060[(1)] = (17));

} else {
var statearr_35543_37061 = state_35506__$1;
(statearr_35543_37061[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (16))){
var inst_35481 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35544_37062 = state_35506__$1;
(statearr_35544_37062[(2)] = inst_35481);

(statearr_35544_37062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (10))){
var inst_35450 = (state_35506[(9)]);
var inst_35452 = (state_35506[(10)]);
var inst_35457 = cljs.core._nth(inst_35450,inst_35452);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35506__$1,(13),out,inst_35457);
} else {
if((state_val_35507 === (18))){
var inst_35463 = (state_35506[(7)]);
var inst_35472 = cljs.core.first(inst_35463);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35506__$1,(20),out,inst_35472);
} else {
if((state_val_35507 === (8))){
var inst_35452 = (state_35506[(10)]);
var inst_35451 = (state_35506[(11)]);
var inst_35454 = (inst_35452 < inst_35451);
var inst_35455 = inst_35454;
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35455)){
var statearr_35552_37068 = state_35506__$1;
(statearr_35552_37068[(1)] = (10));

} else {
var statearr_35553_37069 = state_35506__$1;
(statearr_35553_37069[(1)] = (11));

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
var statearr_35555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35555[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__);

(statearr_35555[(1)] = (1));

return statearr_35555;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1 = (function (state_35506){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35506);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35556){var ex__33424__auto__ = e35556;
var statearr_35557_37079 = state_35506;
(statearr_35557_37079[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35506[(4)]))){
var statearr_35558_37080 = state_35506;
(statearr_35558_37080[(1)] = cljs.core.first((state_35506[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37081 = state_35506;
state_35506 = G__37081;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__ = function(state_35506){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1.call(this,state_35506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33421__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35568 = f__33656__auto__();
(statearr_35568[(6)] = c__33655__auto__);

return statearr_35568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

return c__33655__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35572 = arguments.length;
switch (G__35572) {
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
var G__35584 = arguments.length;
switch (G__35584) {
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
var G__35593 = arguments.length;
switch (G__35593) {
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
var c__33655__auto___37092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35621){
var state_val_35622 = (state_35621[(1)]);
if((state_val_35622 === (7))){
var inst_35616 = (state_35621[(2)]);
var state_35621__$1 = state_35621;
var statearr_35624_37093 = state_35621__$1;
(statearr_35624_37093[(2)] = inst_35616);

(statearr_35624_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (1))){
var inst_35595 = null;
var state_35621__$1 = (function (){var statearr_35625 = state_35621;
(statearr_35625[(7)] = inst_35595);

return statearr_35625;
})();
var statearr_35626_37094 = state_35621__$1;
(statearr_35626_37094[(2)] = null);

(statearr_35626_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (4))){
var inst_35598 = (state_35621[(8)]);
var inst_35598__$1 = (state_35621[(2)]);
var inst_35599 = (inst_35598__$1 == null);
var inst_35600 = cljs.core.not(inst_35599);
var state_35621__$1 = (function (){var statearr_35627 = state_35621;
(statearr_35627[(8)] = inst_35598__$1);

return statearr_35627;
})();
if(inst_35600){
var statearr_35628_37095 = state_35621__$1;
(statearr_35628_37095[(1)] = (5));

} else {
var statearr_35629_37099 = state_35621__$1;
(statearr_35629_37099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (6))){
var state_35621__$1 = state_35621;
var statearr_35630_37100 = state_35621__$1;
(statearr_35630_37100[(2)] = null);

(statearr_35630_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (3))){
var inst_35618 = (state_35621[(2)]);
var inst_35619 = cljs.core.async.close_BANG_(out);
var state_35621__$1 = (function (){var statearr_35631 = state_35621;
(statearr_35631[(9)] = inst_35618);

return statearr_35631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35621__$1,inst_35619);
} else {
if((state_val_35622 === (2))){
var state_35621__$1 = state_35621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35621__$1,(4),ch);
} else {
if((state_val_35622 === (11))){
var inst_35598 = (state_35621[(8)]);
var inst_35607 = (state_35621[(2)]);
var inst_35595 = inst_35598;
var state_35621__$1 = (function (){var statearr_35632 = state_35621;
(statearr_35632[(7)] = inst_35595);

(statearr_35632[(10)] = inst_35607);

return statearr_35632;
})();
var statearr_35633_37107 = state_35621__$1;
(statearr_35633_37107[(2)] = null);

(statearr_35633_37107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (9))){
var inst_35598 = (state_35621[(8)]);
var state_35621__$1 = state_35621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35621__$1,(11),out,inst_35598);
} else {
if((state_val_35622 === (5))){
var inst_35598 = (state_35621[(8)]);
var inst_35595 = (state_35621[(7)]);
var inst_35602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35598,inst_35595);
var state_35621__$1 = state_35621;
if(inst_35602){
var statearr_35636_37108 = state_35621__$1;
(statearr_35636_37108[(1)] = (8));

} else {
var statearr_35637_37109 = state_35621__$1;
(statearr_35637_37109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (10))){
var inst_35610 = (state_35621[(2)]);
var state_35621__$1 = state_35621;
var statearr_35638_37114 = state_35621__$1;
(statearr_35638_37114[(2)] = inst_35610);

(statearr_35638_37114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35622 === (8))){
var inst_35595 = (state_35621[(7)]);
var tmp35635 = inst_35595;
var inst_35595__$1 = tmp35635;
var state_35621__$1 = (function (){var statearr_35646 = state_35621;
(statearr_35646[(7)] = inst_35595__$1);

return statearr_35646;
})();
var statearr_35647_37115 = state_35621__$1;
(statearr_35647_37115[(2)] = null);

(statearr_35647_37115[(1)] = (2));


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
var statearr_35649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35649[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35649[(1)] = (1));

return statearr_35649;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35621){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35621);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35650){var ex__33424__auto__ = e35650;
var statearr_35651_37116 = state_35621;
(statearr_35651_37116[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35621[(4)]))){
var statearr_35652_37117 = state_35621;
(statearr_35652_37117[(1)] = cljs.core.first((state_35621[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37119 = state_35621;
state_35621 = G__37119;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35655 = f__33656__auto__();
(statearr_35655[(6)] = c__33655__auto___37092);

return statearr_35655;
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
var G__35659 = arguments.length;
switch (G__35659) {
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
var c__33655__auto___37121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35699){
var state_val_35700 = (state_35699[(1)]);
if((state_val_35700 === (7))){
var inst_35695 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
var statearr_35701_37123 = state_35699__$1;
(statearr_35701_37123[(2)] = inst_35695);

(statearr_35701_37123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (1))){
var inst_35661 = (new Array(n));
var inst_35662 = inst_35661;
var inst_35663 = (0);
var state_35699__$1 = (function (){var statearr_35702 = state_35699;
(statearr_35702[(7)] = inst_35662);

(statearr_35702[(8)] = inst_35663);

return statearr_35702;
})();
var statearr_35703_37124 = state_35699__$1;
(statearr_35703_37124[(2)] = null);

(statearr_35703_37124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (4))){
var inst_35667 = (state_35699[(9)]);
var inst_35667__$1 = (state_35699[(2)]);
var inst_35668 = (inst_35667__$1 == null);
var inst_35669 = cljs.core.not(inst_35668);
var state_35699__$1 = (function (){var statearr_35704 = state_35699;
(statearr_35704[(9)] = inst_35667__$1);

return statearr_35704;
})();
if(inst_35669){
var statearr_35705_37125 = state_35699__$1;
(statearr_35705_37125[(1)] = (5));

} else {
var statearr_35706_37128 = state_35699__$1;
(statearr_35706_37128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (15))){
var inst_35689 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
var statearr_35707_37129 = state_35699__$1;
(statearr_35707_37129[(2)] = inst_35689);

(statearr_35707_37129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (13))){
var state_35699__$1 = state_35699;
var statearr_35708_37130 = state_35699__$1;
(statearr_35708_37130[(2)] = null);

(statearr_35708_37130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (6))){
var inst_35663 = (state_35699[(8)]);
var inst_35685 = (inst_35663 > (0));
var state_35699__$1 = state_35699;
if(cljs.core.truth_(inst_35685)){
var statearr_35709_37131 = state_35699__$1;
(statearr_35709_37131[(1)] = (12));

} else {
var statearr_35710_37132 = state_35699__$1;
(statearr_35710_37132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (3))){
var inst_35697 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35699__$1,inst_35697);
} else {
if((state_val_35700 === (12))){
var inst_35662 = (state_35699[(7)]);
var inst_35687 = cljs.core.vec(inst_35662);
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35699__$1,(15),out,inst_35687);
} else {
if((state_val_35700 === (2))){
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35699__$1,(4),ch);
} else {
if((state_val_35700 === (11))){
var inst_35679 = (state_35699[(2)]);
var inst_35680 = (new Array(n));
var inst_35662 = inst_35680;
var inst_35663 = (0);
var state_35699__$1 = (function (){var statearr_35715 = state_35699;
(statearr_35715[(10)] = inst_35679);

(statearr_35715[(7)] = inst_35662);

(statearr_35715[(8)] = inst_35663);

return statearr_35715;
})();
var statearr_35716_37134 = state_35699__$1;
(statearr_35716_37134[(2)] = null);

(statearr_35716_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (9))){
var inst_35662 = (state_35699[(7)]);
var inst_35677 = cljs.core.vec(inst_35662);
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35699__$1,(11),out,inst_35677);
} else {
if((state_val_35700 === (5))){
var inst_35662 = (state_35699[(7)]);
var inst_35667 = (state_35699[(9)]);
var inst_35663 = (state_35699[(8)]);
var inst_35672 = (state_35699[(11)]);
var inst_35671 = (inst_35662[inst_35663] = inst_35667);
var inst_35672__$1 = (inst_35663 + (1));
var inst_35673 = (inst_35672__$1 < n);
var state_35699__$1 = (function (){var statearr_35718 = state_35699;
(statearr_35718[(12)] = inst_35671);

(statearr_35718[(11)] = inst_35672__$1);

return statearr_35718;
})();
if(cljs.core.truth_(inst_35673)){
var statearr_35725_37135 = state_35699__$1;
(statearr_35725_37135[(1)] = (8));

} else {
var statearr_35726_37136 = state_35699__$1;
(statearr_35726_37136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (14))){
var inst_35692 = (state_35699[(2)]);
var inst_35693 = cljs.core.async.close_BANG_(out);
var state_35699__$1 = (function (){var statearr_35731 = state_35699;
(statearr_35731[(13)] = inst_35692);

return statearr_35731;
})();
var statearr_35732_37137 = state_35699__$1;
(statearr_35732_37137[(2)] = inst_35693);

(statearr_35732_37137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (10))){
var inst_35683 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
var statearr_35733_37138 = state_35699__$1;
(statearr_35733_37138[(2)] = inst_35683);

(statearr_35733_37138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (8))){
var inst_35662 = (state_35699[(7)]);
var inst_35672 = (state_35699[(11)]);
var tmp35727 = inst_35662;
var inst_35662__$1 = tmp35727;
var inst_35663 = inst_35672;
var state_35699__$1 = (function (){var statearr_35734 = state_35699;
(statearr_35734[(7)] = inst_35662__$1);

(statearr_35734[(8)] = inst_35663);

return statearr_35734;
})();
var statearr_35739_37139 = state_35699__$1;
(statearr_35739_37139[(2)] = null);

(statearr_35739_37139[(1)] = (2));


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
var statearr_35740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35740[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35740[(1)] = (1));

return statearr_35740;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35699){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35699);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35741){var ex__33424__auto__ = e35741;
var statearr_35742_37140 = state_35699;
(statearr_35742_37140[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35699[(4)]))){
var statearr_35743_37141 = state_35699;
(statearr_35743_37141[(1)] = cljs.core.first((state_35699[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37144 = state_35699;
state_35699 = G__37144;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35750 = f__33656__auto__();
(statearr_35750[(6)] = c__33655__auto___37121);

return statearr_35750;
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
var G__35758 = arguments.length;
switch (G__35758) {
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
var c__33655__auto___37151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_35805){
var state_val_35806 = (state_35805[(1)]);
if((state_val_35806 === (7))){
var inst_35801 = (state_35805[(2)]);
var state_35805__$1 = state_35805;
var statearr_35807_37152 = state_35805__$1;
(statearr_35807_37152[(2)] = inst_35801);

(statearr_35807_37152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (1))){
var inst_35760 = [];
var inst_35761 = inst_35760;
var inst_35762 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35805__$1 = (function (){var statearr_35813 = state_35805;
(statearr_35813[(7)] = inst_35762);

(statearr_35813[(8)] = inst_35761);

return statearr_35813;
})();
var statearr_35814_37153 = state_35805__$1;
(statearr_35814_37153[(2)] = null);

(statearr_35814_37153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (4))){
var inst_35765 = (state_35805[(9)]);
var inst_35765__$1 = (state_35805[(2)]);
var inst_35766 = (inst_35765__$1 == null);
var inst_35767 = cljs.core.not(inst_35766);
var state_35805__$1 = (function (){var statearr_35820 = state_35805;
(statearr_35820[(9)] = inst_35765__$1);

return statearr_35820;
})();
if(inst_35767){
var statearr_35821_37154 = state_35805__$1;
(statearr_35821_37154[(1)] = (5));

} else {
var statearr_35822_37155 = state_35805__$1;
(statearr_35822_37155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (15))){
var inst_35761 = (state_35805[(8)]);
var inst_35793 = cljs.core.vec(inst_35761);
var state_35805__$1 = state_35805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35805__$1,(18),out,inst_35793);
} else {
if((state_val_35806 === (13))){
var inst_35788 = (state_35805[(2)]);
var state_35805__$1 = state_35805;
var statearr_35823_37156 = state_35805__$1;
(statearr_35823_37156[(2)] = inst_35788);

(statearr_35823_37156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (6))){
var inst_35761 = (state_35805[(8)]);
var inst_35790 = inst_35761.length;
var inst_35791 = (inst_35790 > (0));
var state_35805__$1 = state_35805;
if(cljs.core.truth_(inst_35791)){
var statearr_35824_37163 = state_35805__$1;
(statearr_35824_37163[(1)] = (15));

} else {
var statearr_35825_37164 = state_35805__$1;
(statearr_35825_37164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (17))){
var inst_35798 = (state_35805[(2)]);
var inst_35799 = cljs.core.async.close_BANG_(out);
var state_35805__$1 = (function (){var statearr_35827 = state_35805;
(statearr_35827[(10)] = inst_35798);

return statearr_35827;
})();
var statearr_35828_37176 = state_35805__$1;
(statearr_35828_37176[(2)] = inst_35799);

(statearr_35828_37176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (3))){
var inst_35803 = (state_35805[(2)]);
var state_35805__$1 = state_35805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35805__$1,inst_35803);
} else {
if((state_val_35806 === (12))){
var inst_35761 = (state_35805[(8)]);
var inst_35781 = cljs.core.vec(inst_35761);
var state_35805__$1 = state_35805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35805__$1,(14),out,inst_35781);
} else {
if((state_val_35806 === (2))){
var state_35805__$1 = state_35805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35805__$1,(4),ch);
} else {
if((state_val_35806 === (11))){
var inst_35769 = (state_35805[(11)]);
var inst_35765 = (state_35805[(9)]);
var inst_35761 = (state_35805[(8)]);
var inst_35778 = inst_35761.push(inst_35765);
var tmp35830 = inst_35761;
var inst_35761__$1 = tmp35830;
var inst_35762 = inst_35769;
var state_35805__$1 = (function (){var statearr_35836 = state_35805;
(statearr_35836[(7)] = inst_35762);

(statearr_35836[(12)] = inst_35778);

(statearr_35836[(8)] = inst_35761__$1);

return statearr_35836;
})();
var statearr_35837_37177 = state_35805__$1;
(statearr_35837_37177[(2)] = null);

(statearr_35837_37177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (9))){
var inst_35762 = (state_35805[(7)]);
var inst_35774 = cljs.core.keyword_identical_QMARK_(inst_35762,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35805__$1 = state_35805;
var statearr_35838_37178 = state_35805__$1;
(statearr_35838_37178[(2)] = inst_35774);

(statearr_35838_37178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (5))){
var inst_35762 = (state_35805[(7)]);
var inst_35769 = (state_35805[(11)]);
var inst_35765 = (state_35805[(9)]);
var inst_35770 = (state_35805[(13)]);
var inst_35769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35765) : f.call(null,inst_35765));
var inst_35770__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35769__$1,inst_35762);
var state_35805__$1 = (function (){var statearr_35839 = state_35805;
(statearr_35839[(11)] = inst_35769__$1);

(statearr_35839[(13)] = inst_35770__$1);

return statearr_35839;
})();
if(inst_35770__$1){
var statearr_35840_37179 = state_35805__$1;
(statearr_35840_37179[(1)] = (8));

} else {
var statearr_35841_37180 = state_35805__$1;
(statearr_35841_37180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (14))){
var inst_35769 = (state_35805[(11)]);
var inst_35765 = (state_35805[(9)]);
var inst_35783 = (state_35805[(2)]);
var inst_35784 = [];
var inst_35785 = inst_35784.push(inst_35765);
var inst_35761 = inst_35784;
var inst_35762 = inst_35769;
var state_35805__$1 = (function (){var statearr_35842 = state_35805;
(statearr_35842[(7)] = inst_35762);

(statearr_35842[(14)] = inst_35783);

(statearr_35842[(8)] = inst_35761);

(statearr_35842[(15)] = inst_35785);

return statearr_35842;
})();
var statearr_35844_37181 = state_35805__$1;
(statearr_35844_37181[(2)] = null);

(statearr_35844_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (16))){
var state_35805__$1 = state_35805;
var statearr_35848_37182 = state_35805__$1;
(statearr_35848_37182[(2)] = null);

(statearr_35848_37182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (10))){
var inst_35776 = (state_35805[(2)]);
var state_35805__$1 = state_35805;
if(cljs.core.truth_(inst_35776)){
var statearr_35849_37183 = state_35805__$1;
(statearr_35849_37183[(1)] = (11));

} else {
var statearr_35850_37184 = state_35805__$1;
(statearr_35850_37184[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (18))){
var inst_35795 = (state_35805[(2)]);
var state_35805__$1 = state_35805;
var statearr_35851_37185 = state_35805__$1;
(statearr_35851_37185[(2)] = inst_35795);

(statearr_35851_37185[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35806 === (8))){
var inst_35770 = (state_35805[(13)]);
var state_35805__$1 = state_35805;
var statearr_35852_37186 = state_35805__$1;
(statearr_35852_37186[(2)] = inst_35770);

(statearr_35852_37186[(1)] = (10));


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
var statearr_35860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35860[(0)] = cljs$core$async$state_machine__33421__auto__);

(statearr_35860[(1)] = (1));

return statearr_35860;
});
var cljs$core$async$state_machine__33421__auto____1 = (function (state_35805){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_35805);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e35861){var ex__33424__auto__ = e35861;
var statearr_35862_37187 = state_35805;
(statearr_35862_37187[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_35805[(4)]))){
var statearr_35866_37188 = state_35805;
(statearr_35866_37188[(1)] = cljs.core.first((state_35805[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37189 = state_35805;
state_35805 = G__37189;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
cljs$core$async$state_machine__33421__auto__ = function(state_35805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33421__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33421__auto____1.call(this,state_35805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33421__auto____0;
cljs$core$async$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33421__auto____1;
return cljs$core$async$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_35867 = f__33656__auto__();
(statearr_35867[(6)] = c__33655__auto___37151);

return statearr_35867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
