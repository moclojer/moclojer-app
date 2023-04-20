goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27891 = arguments.length;
var i__5770__auto___27892 = (0);
while(true){
if((i__5770__auto___27892 < len__5769__auto___27891)){
args__5775__auto__.push((arguments[i__5770__auto___27892]));

var G__27893 = (i__5770__auto___27892 + (1));
i__5770__auto___27892 = G__27893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.cons("refx:",args));
}));

(refx.log.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.debug.cljs$lang$applyTo = (function (seq27882){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27882));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27895 = arguments.length;
var i__5770__auto___27896 = (0);
while(true){
if((i__5770__auto___27896 < len__5769__auto___27895)){
args__5775__auto__.push((arguments[i__5770__auto___27896]));

var G__27897 = (i__5770__auto___27896 + (1));
i__5770__auto___27896 = G__27897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.info.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.cons("refx:",args));
}));

(refx.log.info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.info.cljs$lang$applyTo = (function (seq27885){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27885));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27898 = arguments.length;
var i__5770__auto___27899 = (0);
while(true){
if((i__5770__auto___27899 < len__5769__auto___27898)){
args__5775__auto__.push((arguments[i__5770__auto___27899]));

var G__27900 = (i__5770__auto___27899 + (1));
i__5770__auto___27899 = G__27900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.cons("refx:",args));
}));

(refx.log.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.warn.cljs$lang$applyTo = (function (seq27889){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27889));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27901 = arguments.length;
var i__5770__auto___27902 = (0);
while(true){
if((i__5770__auto___27902 < len__5769__auto___27901)){
args__5775__auto__.push((arguments[i__5770__auto___27902]));

var G__27903 = (i__5770__auto___27902 + (1));
i__5770__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.log.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.cons("refx:",args));
}));

(refx.log.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.error.cljs$lang$applyTo = (function (seq27890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27890));
}));


//# sourceMappingURL=refx.log.js.map
