goog.provide('schema.coerce');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__31003__31004__auto__){
if((!((p1__31003__31004__auto__ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__31003__31004__auto__.schema$core$Schema$)))){
return true;
} else {
if((!p1__31003__31004__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__31003__31004__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__31003__31004__auto__);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv33293_33407 = schema.utils.use_fn_validation;
var output_schema33292_33408 = schema.core.Any;
var input_schema33294_33409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker33295_33410 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema33294_33409);
}),null));
var output_checker33296_33411 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema33292_33408);
}),null));
var ret__32154__auto___33413 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Produce a function that simultaneously coerces and validates a datum.  Returns
 * a coerced value, or a schema.utils.ErrorContainer describing the error.
 */
schema.coerce.coercer = (function schema$coerce$coercer(G__33297,G__33298){
var validate__29872__auto__ = cljs.core.deref(ufv33293_33407);
if(cljs.core.truth_(validate__29872__auto__)){
var args__29873__auto___33414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33297,G__33298], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33303_33415 = new cljs.core.Keyword(null,"input","input",556931961);
var G__33304_33416 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__33305_33417 = input_schema33294_33409;
var G__33306_33418 = cljs.core.deref(input_checker33295_33410);
var G__33307_33419 = args__29873__auto___33414;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33303_33415,G__33304_33416,G__33305_33417,G__33306_33418,G__33307_33419) : schema.core.fn_validator.call(null,G__33303_33415,G__33304_33416,G__33305_33417,G__33306_33418,G__33307_33419));
} else {
var temp__5804__auto___33420 = (function (){var fexpr__33308 = cljs.core.deref(input_checker33295_33410);
return (fexpr__33308.cljs$core$IFn$_invoke$arity$1 ? fexpr__33308.cljs$core$IFn$_invoke$arity$1(args__29873__auto___33414) : fexpr__33308.call(null,args__29873__auto___33414));
})();
if(cljs.core.truth_(temp__5804__auto___33420)){
var error__29874__auto___33421 = temp__5804__auto___33420;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33421], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33294_33409,new cljs.core.Keyword(null,"value","value",305978217),args__29873__auto___33414,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33421], null));
} else {
}
}
} else {
}

var o__29875__auto__ = (function (){var schema__$1 = G__33297;
var coercion_matcher = G__33298;
while(true){
return schema.spec.core.run_checker(((function (validate__29872__auto__,ufv33293_33407,output_schema33292_33408,input_schema33294_33409,input_checker33295_33410,output_checker33296_33411){
return (function (s,params){
var c = schema.spec.core.checker(schema.core.spec(s),params);
var temp__5802__auto__ = (coercion_matcher.cljs$core$IFn$_invoke$arity$1 ? coercion_matcher.cljs$core$IFn$_invoke$arity$1(s) : coercion_matcher.call(null,s));
if(cljs.core.truth_(temp__5802__auto__)){
var coercer = temp__5802__auto__;
return (function (x){
try{var v = (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(x) : coercer.call(null,x));
if(schema.utils.error_QMARK_(v)){
return v;
} else {
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(v) : c.call(null,v));
}
}catch (e33310){if((e33310 instanceof Object)){
var t = e33310;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay((function (){
return t;
}),null)),null));
} else {
throw e33310;

}
}});
} else {
return c;
}
});})(validate__29872__auto__,ufv33293_33407,output_schema33292_33408,input_schema33294_33409,input_checker33295_33410,output_checker33296_33411))
,true,schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__29872__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33311_33423 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__33312_33424 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__33313_33425 = output_schema33292_33408;
var G__33314_33426 = cljs.core.deref(output_checker33296_33411);
var G__33315_33427 = o__29875__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33311_33423,G__33312_33424,G__33313_33425,G__33314_33426,G__33315_33427) : schema.core.fn_validator.call(null,G__33311_33423,G__33312_33424,G__33313_33425,G__33314_33426,G__33315_33427));
} else {
var temp__5804__auto___33429 = (function (){var fexpr__33317 = cljs.core.deref(output_checker33296_33411);
return (fexpr__33317.cljs$core$IFn$_invoke$arity$1 ? fexpr__33317.cljs$core$IFn$_invoke$arity$1(o__29875__auto__) : fexpr__33317.call(null,o__29875__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___33429)){
var error__29874__auto___33430 = temp__5804__auto___33429;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33430], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33292_33408,new cljs.core.Keyword(null,"value","value",305978217),o__29875__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33430], null));
} else {
}
}
} else {
}

return o__29875__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.__GT_FnSchema(output_schema33292_33408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33294_33409], null)));

var ufv33320_33432 = schema.utils.use_fn_validation;
var output_schema33319_33433 = schema.core.Any;
var input_schema33321_33434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker33322_33435 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema33321_33434);
}),null));
var output_checker33323_33436 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema33319_33433);
}),null));
var ret__32154__auto___33437 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw).
 */
schema.coerce.coercer_BANG_ = (function schema$coerce$coercer_BANG_(G__33324,G__33325){
var validate__29872__auto__ = cljs.core.deref(ufv33320_33432);
if(cljs.core.truth_(validate__29872__auto__)){
var args__29873__auto___33438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33324,G__33325], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33328_33439 = new cljs.core.Keyword(null,"input","input",556931961);
var G__33329_33440 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__33330_33441 = input_schema33321_33434;
var G__33331_33442 = cljs.core.deref(input_checker33322_33435);
var G__33332_33443 = args__29873__auto___33438;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33328_33439,G__33329_33440,G__33330_33441,G__33331_33442,G__33332_33443) : schema.core.fn_validator.call(null,G__33328_33439,G__33329_33440,G__33330_33441,G__33331_33442,G__33332_33443));
} else {
var temp__5804__auto___33444 = (function (){var fexpr__33333 = cljs.core.deref(input_checker33322_33435);
return (fexpr__33333.cljs$core$IFn$_invoke$arity$1 ? fexpr__33333.cljs$core$IFn$_invoke$arity$1(args__29873__auto___33438) : fexpr__33333.call(null,args__29873__auto___33438));
})();
if(cljs.core.truth_(temp__5804__auto___33444)){
var error__29874__auto___33445 = temp__5804__auto___33444;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33445], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33321_33434,new cljs.core.Keyword(null,"value","value",305978217),args__29873__auto___33438,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33445], null));
} else {
}
}
} else {
}

var o__29875__auto__ = (function (){var schema__$1 = G__33324;
var coercion_matcher = G__33325;
while(true){
var c = schema.coerce.coercer(schema__$1,coercion_matcher);
return ((function (c,validate__29872__auto__,ufv33320_33432,output_schema33319_33433,input_schema33321_33434,input_checker33322_33435,output_checker33323_33436){
return (function (value){
var coerced = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
var temp__5804__auto___33455 = schema.utils.error_val(coerced);
if(cljs.core.truth_(temp__5804__auto___33455)){
var error_33456 = temp__5804__auto___33455;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value cannot be coerced to match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_33456], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_33456], null));
} else {
}

return coerced;
});
;})(c,validate__29872__auto__,ufv33320_33432,output_schema33319_33433,input_schema33321_33434,input_checker33322_33435,output_checker33323_33436))
break;
}
})();
if(cljs.core.truth_(validate__29872__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33335_33457 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__33336_33458 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__33337_33459 = output_schema33319_33433;
var G__33338_33460 = cljs.core.deref(output_checker33323_33436);
var G__33339_33461 = o__29875__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33335_33457,G__33336_33458,G__33337_33459,G__33338_33460,G__33339_33461) : schema.core.fn_validator.call(null,G__33335_33457,G__33336_33458,G__33337_33459,G__33338_33460,G__33339_33461));
} else {
var temp__5804__auto___33463 = (function (){var fexpr__33345 = cljs.core.deref(output_checker33323_33436);
return (fexpr__33345.cljs$core$IFn$_invoke$arity$1 ? fexpr__33345.cljs$core$IFn$_invoke$arity$1(o__29875__auto__) : fexpr__33345.call(null,o__29875__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___33463)){
var error__29874__auto___33464 = temp__5804__auto___33463;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33464], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33319_33433,new cljs.core.Keyword(null,"value","value",305978217),o__29875__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33464], null));
} else {
}
}
} else {
}

return o__29875__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer_BANG_),schema.core.__GT_FnSchema(output_schema33319_33433,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33321_33434], null)));

var ufv33356_33466 = schema.utils.use_fn_validation;
var output_schema33355_33467 = schema.coerce.CoercionMatcher;
var input_schema33357_33468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),cljs.core.with_meta(new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)], null)))], null);
var input_checker33358_33469 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema33357_33468);
}),null));
var output_checker33359_33470 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema33355_33467);
}),null));
var ret__32154__auto___33471 = /**
 * Inputs: [matchers :- [CoercionMatcher]]
 *   Returns: CoercionMatcher
 * 
 *   A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = (function schema$coerce$first_matcher(G__33360){
var validate__29872__auto__ = cljs.core.deref(ufv33356_33466);
if(cljs.core.truth_(validate__29872__auto__)){
var args__29873__auto___33472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33360], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33365_33473 = new cljs.core.Keyword(null,"input","input",556931961);
var G__33366_33474 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__33367_33475 = input_schema33357_33468;
var G__33368_33476 = cljs.core.deref(input_checker33358_33469);
var G__33369_33477 = args__29873__auto___33472;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33365_33473,G__33366_33474,G__33367_33475,G__33368_33476,G__33369_33477) : schema.core.fn_validator.call(null,G__33365_33473,G__33366_33474,G__33367_33475,G__33368_33476,G__33369_33477));
} else {
var temp__5804__auto___33478 = (function (){var fexpr__33372 = cljs.core.deref(input_checker33358_33469);
return (fexpr__33372.cljs$core$IFn$_invoke$arity$1 ? fexpr__33372.cljs$core$IFn$_invoke$arity$1(args__29873__auto___33472) : fexpr__33372.call(null,args__29873__auto___33472));
})();
if(cljs.core.truth_(temp__5804__auto___33478)){
var error__29874__auto___33479 = temp__5804__auto___33478;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33479], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33357_33468,new cljs.core.Keyword(null,"value","value",305978217),args__29873__auto___33472,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33479], null));
} else {
}
}
} else {
}

var o__29875__auto__ = (function (){var matchers = G__33360;
while(true){
return ((function (validate__29872__auto__,ufv33356_33466,output_schema33355_33467,input_schema33357_33468,input_checker33358_33469,output_checker33359_33470){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__33351_SHARP_){
return (p1__33351_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33351_SHARP_.cljs$core$IFn$_invoke$arity$1(schema__$1) : p1__33351_SHARP_.call(null,schema__$1));
}),matchers));
});
;})(validate__29872__auto__,ufv33356_33466,output_schema33355_33467,input_schema33357_33468,input_checker33358_33469,output_checker33359_33470))
break;
}
})();
if(cljs.core.truth_(validate__29872__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__33380_33481 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__33381_33482 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__33382_33483 = output_schema33355_33467;
var G__33383_33484 = cljs.core.deref(output_checker33359_33470);
var G__33384_33485 = o__29875__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__33380_33481,G__33381_33482,G__33382_33483,G__33383_33484,G__33384_33485) : schema.core.fn_validator.call(null,G__33380_33481,G__33381_33482,G__33382_33483,G__33383_33484,G__33384_33485));
} else {
var temp__5804__auto___33488 = (function (){var fexpr__33386 = cljs.core.deref(output_checker33359_33470);
return (fexpr__33386.cljs$core$IFn$_invoke$arity$1 ? fexpr__33386.cljs$core$IFn$_invoke$arity$1(o__29875__auto__) : fexpr__33386.call(null,o__29875__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___33488)){
var error__29874__auto___33489 = temp__5804__auto___33488;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__29874__auto___33489], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33355_33467,new cljs.core.Keyword(null,"value","value",305978217),o__29875__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__29874__auto___33489], null));
} else {
}
}
} else {
}

return o__29875__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.__GT_FnSchema(output_schema33355_33467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33357_33468], null)));

schema.coerce.string__GT_keyword = (function schema$coerce$string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
});
/**
 * returns true for strings that are equal, ignoring case, to the string 'true'
 * (following java.lang.Boolean/parseBoolean semantics)
 */
schema.coerce.string__GT_boolean = (function schema$coerce$string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function schema$coerce$keyword_enum_matcher(schema__$1){
if((((((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,schema__$1.vs)))) || ((((schema__$1 instanceof schema.core.EqSchema)) && ((schema__$1.v instanceof cljs.core.Keyword)))))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function schema$coerce$set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
 * Take a single-arg function f, and return a single-arg function that acts as identity
 * if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
 * guarded for exceptions, and failing to coerce will generally produce a more useful error
 * in this case.
 */
schema.coerce.safe = (function schema$coerce$safe(f){
return (function (x){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}catch (e33393){if((e33393 instanceof Object)){
var e = e33393;
return x;
} else {
throw e33393;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 *       similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__33396_SHARP_){
if(typeof p1__33396_SHARP_ === 'string'){
return cljs.core.uuid(p1__33396_SHARP_);
} else {
return p1__33396_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid])], 0));
/**
 * A matcher that coerces keywords and keyword eq/enums from strings, and longs and doubles
 *   from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__5045__auto__ = (schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_json_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.coerce._PLUS_json_coercions_PLUS_.call(null,schema__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});
/**
 * Reads one object from a string. Returns nil when string is nil or empty
 */
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.coerce._PLUS_json_coercions_PLUS_,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.coerce.safe(schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe(schema.coerce.edn_read_string)])], 0));
/**
 * A matcher that coerces keywords, keyword eq/enums, s/Num and s/Int,
 *   and long and doubles (JVM only) from strings.
 */
schema.coerce.string_coercion_matcher = (function schema$coerce$string_coercion_matcher(schema__$1){
var or__5045__auto__ = (schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1 ? schema.coerce._PLUS_string_coercions_PLUS_.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.coerce._PLUS_string_coercions_PLUS_.call(null,schema__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = schema.coerce.keyword_enum_matcher(schema__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return schema.coerce.set_matcher(schema__$1);
}
}
});

//# sourceMappingURL=schema.coerce.js.map
