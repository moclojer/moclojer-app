goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49288 = arguments.length;
var i__5770__auto___49289 = (0);
while(true){
if((i__5770__auto___49289 < len__5769__auto___49288)){
args__5775__auto__.push((arguments[i__5770__auto___49289]));

var G__49290 = (i__5770__auto___49289 + (1));
i__5770__auto___49289 = G__49290;
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
(refx.log.debug.cljs$lang$applyTo = (function (seq49221){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49221));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49293 = arguments.length;
var i__5770__auto___49294 = (0);
while(true){
if((i__5770__auto___49294 < len__5769__auto___49293)){
args__5775__auto__.push((arguments[i__5770__auto___49294]));

var G__49295 = (i__5770__auto___49294 + (1));
i__5770__auto___49294 = G__49295;
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
(refx.log.info.cljs$lang$applyTo = (function (seq49222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49222));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49307 = arguments.length;
var i__5770__auto___49308 = (0);
while(true){
if((i__5770__auto___49308 < len__5769__auto___49307)){
args__5775__auto__.push((arguments[i__5770__auto___49308]));

var G__49309 = (i__5770__auto___49308 + (1));
i__5770__auto___49308 = G__49309;
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
(refx.log.warn.cljs$lang$applyTo = (function (seq49230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49230));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49310 = arguments.length;
var i__5770__auto___49311 = (0);
while(true){
if((i__5770__auto___49311 < len__5769__auto___49310)){
args__5775__auto__.push((arguments[i__5770__auto___49311]));

var G__49312 = (i__5770__auto___49311 + (1));
i__5770__auto___49311 = G__49312;
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
(refx.log.error.cljs$lang$applyTo = (function (seq49283){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49283));
}));


//# sourceMappingURL=refx.log.js.map
