goog.provide('promesa.exec');
goog.scope(function(){
  promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec._STAR_default_scheduler_STAR_ !== 'undefined')){
} else {
promesa.exec._STAR_default_scheduler_STAR_ = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_ScheduledExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_ScheduledExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_ScheduledExecutor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec._STAR_default_executor_STAR_ !== 'undefined')){
} else {
promesa.exec._STAR_default_executor_STAR_ = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_MicrotaskExecutor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.same_thread_executor !== 'undefined')){
} else {
promesa.exec.same_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_SameThreadExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_SameThreadExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_SameThreadExecutor.call(null));
}),null));
}
promesa.exec.vthreads_supported_QMARK_ = false;
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec._STAR_vthread_executor_STAR_ !== 'undefined')){
} else {
promesa.exec._STAR_vthread_executor_STAR_ = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_MicrotaskExecutor.call(null));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec._STAR_thread_executor_STAR_ !== 'undefined')){
} else {
promesa.exec._STAR_thread_executor_STAR_ = (new cljs.core.Delay((function (){
return (promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.__GT_MicrotaskExecutor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.__GT_MicrotaskExecutor.call(null));
}),null));
}
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__52093 = arguments.length;
switch (G__52093) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
var G__52095 = executor;
var G__52095__$1 = (((G__52095 instanceof cljs.core.Keyword))?G__52095.fqn:null);
switch (G__52095__$1) {
case "default":
return promesa.util.maybe_deref(promesa.exec._STAR_default_executor_STAR_);

break;
case "thread":
return promesa.util.maybe_deref(promesa.exec._STAR_thread_executor_STAR_);

break;
case "vthread":
return promesa.util.maybe_deref(promesa.exec._STAR_vthread_executor_STAR_);

break;
default:
return promesa.util.maybe_deref(executor);

}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__52103 = arguments.length;
switch (G__52103) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)){
return promesa.util.maybe_deref(promesa.exec._STAR_default_scheduler_STAR_);
} else {
return promesa.util.maybe_deref(scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
promesa.exec.noop = cljs.core.constantly(null);
/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__52108 = arguments.length;
switch (G__52108) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__52113 = arguments.length;
switch (G__52113) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0(),f);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__52115 = arguments.length;
switch (G__52115) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.MicrotaskExecutor = (function (){
});
(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.MicrotaskExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._mapErr(promesa.protocols._map(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})),(function (e){
setTimeout((function (){
throw e;
}));

return null;
}));
}));

(promesa.exec.MicrotaskExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.MicrotaskExecutor.cljs$lang$type = true);

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorStr = "promesa.exec/MicrotaskExecutor");

(promesa.exec.MicrotaskExecutor.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"promesa.exec/MicrotaskExecutor");
}));

/**
 * Positional factory function for promesa.exec/MicrotaskExecutor.
 */
promesa.exec.__GT_MicrotaskExecutor = (function promesa$exec$__GT_MicrotaskExecutor(){
return (new promesa.exec.MicrotaskExecutor());
});


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
*/
promesa.exec.SameThreadExecutor = (function (){
});
(promesa.exec.SameThreadExecutor.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.SameThreadExecutor.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(promesa.exec.SameThreadExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.SameThreadExecutor.cljs$lang$type = true);

(promesa.exec.SameThreadExecutor.cljs$lang$ctorStr = "promesa.exec/SameThreadExecutor");

(promesa.exec.SameThreadExecutor.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"promesa.exec/SameThreadExecutor");
}));

/**
 * Positional factory function for promesa.exec/SameThreadExecutor.
 */
promesa.exec.__GT_SameThreadExecutor = (function promesa$exec$__GT_SameThreadExecutor(){
return (new promesa.exec.SameThreadExecutor());
});


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {promesa.protocols.ICancellable}
*/
promesa.exec.ScheduledTask = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(promesa.exec.ScheduledTask.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var done_iref = promesa.exec.goog$module$goog$object.get(self__.state,"done");
return cljs.core.deref(done_iref);
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return promesa.exec.goog$module$goog$object.get(self__.state,"cancelled");
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
if(cljs.core.truth_(self__$1.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(null))){
return null;
} else {
var cancel_fn = promesa.exec.goog$module$goog$object.get(self__.state,"cancel-fn");
promesa.exec.goog$module$goog$object.set(self__.state,"cancelled",true);

return (cancel_fn.cljs$core$IFn$_invoke$arity$0 ? cancel_fn.cljs$core$IFn$_invoke$arity$0() : cancel_fn.call(null));
}
}));

(promesa.exec.ScheduledTask.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(promesa.exec.ScheduledTask.cljs$lang$type = true);

(promesa.exec.ScheduledTask.cljs$lang$ctorStr = "promesa.exec/ScheduledTask");

(promesa.exec.ScheduledTask.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"promesa.exec/ScheduledTask");
}));

/**
 * Positional factory function for promesa.exec/ScheduledTask.
 */
promesa.exec.__GT_ScheduledTask = (function promesa$exec$__GT_ScheduledTask(state){
return (new promesa.exec.ScheduledTask(state));
});


/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.ScheduledExecutor = (function (){
});
(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledExecutor.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var done = cljs.core.volatile_BANG_(false);
var task = (function (){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {cljs.core.vreset_BANG_(done,true);
}});
var tid = setTimeout(task,ms);
var cancel = (function (){
return clearTimeout(tid);
});
return promesa.exec.__GT_ScheduledTask(({"done": done, "cancelled": false, "cancel-fn": cancel}));
}));

(promesa.exec.ScheduledExecutor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.ScheduledExecutor.cljs$lang$type = true);

(promesa.exec.ScheduledExecutor.cljs$lang$ctorStr = "promesa.exec/ScheduledExecutor");

(promesa.exec.ScheduledExecutor.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"promesa.exec/ScheduledExecutor");
}));

/**
 * Positional factory function for promesa.exec/ScheduledExecutor.
 */
promesa.exec.__GT_ScheduledExecutor = (function promesa$exec$__GT_ScheduledExecutor(){
return (new promesa.exec.ScheduledExecutor());
});


//# sourceMappingURL=promesa.exec.js.map
