goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_52072 = (function() {
var G__52073 = null;
var G__52073__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._bind[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__52073__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._bind[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__52073 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52073__2.call(this,_,f);
case 3:
return G__52073__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52073.cljs$core$IFn$_invoke$arity$2 = G__52073__2;
G__52073.cljs$core$IFn$_invoke$arity$3 = G__52073__3;
return G__52073;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__51884 = arguments.length;
switch (G__51884) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_52072(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_52072(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_52109 = (function() {
var G__52110 = null;
var G__52110__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._map[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._map["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__52110__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._map[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._map["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__52110 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52110__2.call(this,_,f);
case 3:
return G__52110__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52110.cljs$core$IFn$_invoke$arity$2 = G__52110__2;
G__52110.cljs$core$IFn$_invoke$arity$3 = G__52110__3;
return G__52110;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__51891 = arguments.length;
switch (G__51891) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_52109(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_52109(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_52124 = (function() {
var G__52125 = null;
var G__52125__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._then[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._then["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
var G__52125__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._then[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._then["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
G__52125 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52125__2.call(this,_,f);
case 3:
return G__52125__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52125.cljs$core$IFn$_invoke$arity$2 = G__52125__2;
G__52125.cljs$core$IFn$_invoke$arity$3 = G__52125__3;
return G__52125;
})()
;
/**
 * Apply function to a computation and flatten if promise found.
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__51910 = arguments.length;
switch (G__51910) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_then$dyn_52124(_,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_52124(_,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mapErr$dyn_52131 = (function() {
var G__52132 = null;
var G__52132__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
var G__52132__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
G__52132 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52132__2.call(this,_,f);
case 3:
return G__52132__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52132.cljs$core$IFn$_invoke$arity$2 = G__52132__2;
G__52132.cljs$core$IFn$_invoke$arity$3 = G__52132__3;
return G__52132;
})()
;
/**
 * Apply function to a failed computation.
 */
promesa.protocols._mapErr = (function promesa$protocols$_mapErr(var_args){
var G__51935 = arguments.length;
switch (G__51935) {
case 2:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_52131(_,f);
}
}));

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_52131(_,f,executor);
}
}));

(promesa.protocols._mapErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_thenErr$dyn_52134 = (function() {
var G__52135 = null;
var G__52135__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
var G__52135__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
G__52135 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52135__2.call(this,_,f);
case 3:
return G__52135__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52135.cljs$core$IFn$_invoke$arity$2 = G__52135__2;
G__52135.cljs$core$IFn$_invoke$arity$3 = G__52135__3;
return G__52135;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._thenErr = (function promesa$protocols$_thenErr(var_args){
var G__51944 = arguments.length;
switch (G__51944) {
case 2:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_52134(_,f);
}
}));

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_52134(_,f,executor);
}
}));

(promesa.protocols._thenErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_52141 = (function() {
var G__52142 = null;
var G__52142__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._handle[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__52142__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._handle[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__52142 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52142__2.call(this,_,f);
case 3:
return G__52142__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52142.cljs$core$IFn$_invoke$arity$2 = G__52142__2;
G__52142.cljs$core$IFn$_invoke$arity$3 = G__52142__3;
return G__52142;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__51961 = arguments.length;
switch (G__51961) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_52141(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_52141(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_52149 = (function() {
var G__52150 = null;
var G__52150__2 = (function (_,f){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._finally[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5394__auto__.call(null,_,f));
} else {
var m__5392__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5392__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__52150__3 = (function (_,f,executor){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._finally[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5394__auto__.call(null,_,f,executor));
} else {
var m__5392__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5392__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__52150 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__52150__2.call(this,_,f);
case 3:
return G__52150__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52150.cljs$core$IFn$_invoke$arity$2 = G__52150__2;
G__52150.cljs$core$IFn$_invoke$arity$3 = G__52150__3;
return G__52150;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__51975 = arguments.length;
switch (G__51975) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_52149(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_52149(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_52156 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._promise[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (promesa.protocols._promise["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_52156(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_52172 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_52172(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_52181 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_52181(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_52182 = (function (_,v){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5394__auto__.call(null,_,v));
} else {
var m__5392__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5392__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_52182(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_52187 = (function (_,e){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5394__auto__.call(null,_,e));
} else {
var m__5392__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5392__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_52187(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_submit_BANG_$dyn_52213 = (function (_,task){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5394__auto__.call(null,_,task));
} else {
var m__5392__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5392__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_52213(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_52242 = (function (_,ms,func){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5394__auto__.call(null,_,ms,func));
} else {
var m__5392__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5392__auto__.call(null,_,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_52242(_,ms,func);
}
});


//# sourceMappingURL=promesa.protocols.js.map
