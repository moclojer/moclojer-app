goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21159 = arguments.length;
var i__5770__auto___21160 = (0);
while(true){
if((i__5770__auto___21160 < len__5769__auto___21159)){
args__5775__auto__.push((arguments[i__5770__auto___21160]));

var G__21161 = (i__5770__auto___21160 + (1));
i__5770__auto___21160 = G__21161;
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
(refx.log.debug.cljs$lang$applyTo = (function (seq21149){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21149));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21163 = arguments.length;
var i__5770__auto___21164 = (0);
while(true){
if((i__5770__auto___21164 < len__5769__auto___21163)){
args__5775__auto__.push((arguments[i__5770__auto___21164]));

var G__21165 = (i__5770__auto___21164 + (1));
i__5770__auto___21164 = G__21165;
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
(refx.log.info.cljs$lang$applyTo = (function (seq21151){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21151));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21166 = arguments.length;
var i__5770__auto___21167 = (0);
while(true){
if((i__5770__auto___21167 < len__5769__auto___21166)){
args__5775__auto__.push((arguments[i__5770__auto___21167]));

var G__21168 = (i__5770__auto___21167 + (1));
i__5770__auto___21167 = G__21168;
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
(refx.log.warn.cljs$lang$applyTo = (function (seq21153){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21153));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21181 = arguments.length;
var i__5770__auto___21182 = (0);
while(true){
if((i__5770__auto___21182 < len__5769__auto___21181)){
args__5775__auto__.push((arguments[i__5770__auto___21182]));

var G__21183 = (i__5770__auto___21182 + (1));
i__5770__auto___21182 = G__21183;
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
(refx.log.error.cljs$lang$applyTo = (function (seq21155){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21155));
}));


//# sourceMappingURL=refx.log.js.map
