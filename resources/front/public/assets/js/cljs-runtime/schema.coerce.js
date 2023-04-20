goog.provide('schema.coerce');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__37778__37779__auto__){
if((!((p1__37778__37779__auto__ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__37778__37779__auto__.schema$core$Schema$)))){
return true;
} else {
if((!p1__37778__37779__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__37778__37779__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,p1__37778__37779__auto__);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema(schema.core.maybe(schema.core.make_fn_schema(schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv39844_39955 = schema.utils.use_fn_validation;
var output_schema39843_39956 = schema.core.Any;
var input_schema39845_39957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker39846_39958 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema39845_39957);
}),null));
var output_checker39847_39959 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema39843_39956);
}),null));
var ret__39131__auto___39964 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Produce a function that simultaneously coerces and validates a datum.  Returns
 * a coerced value, or a schema.utils.ErrorContainer describing the error.
 */
schema.coerce.coercer = (function schema$coerce$coercer(G__39848,G__39849){
var validate__36464__auto__ = cljs.core.deref(ufv39844_39955);
if(cljs.core.truth_(validate__36464__auto__)){
var args__36465__auto___39965 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39848,G__39849], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39850_39967 = new cljs.core.Keyword(null,"input","input",556931961);
var G__39851_39968 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__39852_39969 = input_schema39845_39957;
var G__39853_39970 = cljs.core.deref(input_checker39846_39958);
var G__39854_39971 = args__36465__auto___39965;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39850_39967,G__39851_39968,G__39852_39969,G__39853_39970,G__39854_39971) : schema.core.fn_validator.call(null,G__39850_39967,G__39851_39968,G__39852_39969,G__39853_39970,G__39854_39971));
} else {
var temp__5804__auto___39974 = (function (){var fexpr__39856 = cljs.core.deref(input_checker39846_39958);
return (fexpr__39856.cljs$core$IFn$_invoke$arity$1 ? fexpr__39856.cljs$core$IFn$_invoke$arity$1(args__36465__auto___39965) : fexpr__39856.call(null,args__36465__auto___39965));
})();
if(cljs.core.truth_(temp__5804__auto___39974)){
var error__36466__auto___39975 = temp__5804__auto___39974;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___39975], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39845_39957,new cljs.core.Keyword(null,"value","value",305978217),args__36465__auto___39965,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___39975], null));
} else {
}
}
} else {
}

var o__36467__auto__ = (function (){var schema__$1 = G__39848;
var coercion_matcher = G__39849;
while(true){
return schema.spec.core.run_checker(((function (validate__36464__auto__,ufv39844_39955,output_schema39843_39956,input_schema39845_39957,input_checker39846_39958,output_checker39847_39959){
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
}catch (e39858){if((e39858 instanceof Object)){
var t = e39858;
return schema.utils.error(schema.utils.make_ValidationError(s,x,(new cljs.core.Delay((function (){
return t;
}),null)),null));
} else {
throw e39858;

}
}});
} else {
return c;
}
});})(validate__36464__auto__,ufv39844_39955,output_schema39843_39956,input_schema39845_39957,input_checker39846_39958,output_checker39847_39959))
,true,schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__36464__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39863_39976 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__39864_39977 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null));
var G__39865_39978 = output_schema39843_39956;
var G__39866_39979 = cljs.core.deref(output_checker39847_39959);
var G__39867_39980 = o__36467__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39863_39976,G__39864_39977,G__39865_39978,G__39866_39979,G__39867_39980) : schema.core.fn_validator.call(null,G__39863_39976,G__39864_39977,G__39865_39978,G__39866_39979,G__39867_39980));
} else {
var temp__5804__auto___39981 = (function (){var fexpr__39868 = cljs.core.deref(output_checker39847_39959);
return (fexpr__39868.cljs$core$IFn$_invoke$arity$1 ? fexpr__39868.cljs$core$IFn$_invoke$arity$1(o__36467__auto__) : fexpr__39868.call(null,o__36467__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___39981)){
var error__36466__auto___39982 = temp__5804__auto___39981;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___39982], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39843_39956,new cljs.core.Keyword(null,"value","value",305978217),o__36467__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___39982], null));
} else {
}
}
} else {
}

return o__36467__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer),schema.core.__GT_FnSchema(output_schema39843_39956,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39845_39957], null)));

var ufv39872_39990 = schema.utils.use_fn_validation;
var output_schema39871_39991 = schema.core.Any;
var input_schema39873_39992 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one(schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker39874_39993 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema39873_39992);
}),null));
var output_checker39875_39994 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema39871_39991);
}),null));
var ret__39131__auto___39995 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw).
 */
schema.coerce.coercer_BANG_ = (function schema$coerce$coercer_BANG_(G__39876,G__39877){
var validate__36464__auto__ = cljs.core.deref(ufv39872_39990);
if(cljs.core.truth_(validate__36464__auto__)){
var args__36465__auto___39997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39876,G__39877], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39879_39998 = new cljs.core.Keyword(null,"input","input",556931961);
var G__39880_39999 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__39881_40000 = input_schema39873_39992;
var G__39882_40001 = cljs.core.deref(input_checker39874_39993);
var G__39883_40002 = args__36465__auto___39997;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39879_39998,G__39880_39999,G__39881_40000,G__39882_40001,G__39883_40002) : schema.core.fn_validator.call(null,G__39879_39998,G__39880_39999,G__39881_40000,G__39882_40001,G__39883_40002));
} else {
var temp__5804__auto___40004 = (function (){var fexpr__39885 = cljs.core.deref(input_checker39874_39993);
return (fexpr__39885.cljs$core$IFn$_invoke$arity$1 ? fexpr__39885.cljs$core$IFn$_invoke$arity$1(args__36465__auto___39997) : fexpr__39885.call(null,args__36465__auto___39997));
})();
if(cljs.core.truth_(temp__5804__auto___40004)){
var error__36466__auto___40005 = temp__5804__auto___40004;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___40005], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39873_39992,new cljs.core.Keyword(null,"value","value",305978217),args__36465__auto___39997,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___40005], null));
} else {
}
}
} else {
}

var o__36467__auto__ = (function (){var schema__$1 = G__39876;
var coercion_matcher = G__39877;
while(true){
var c = schema.coerce.coercer(schema__$1,coercion_matcher);
return ((function (c,validate__36464__auto__,ufv39872_39990,output_schema39871_39991,input_schema39873_39992,input_checker39874_39993,output_checker39875_39994){
return (function (value){
var coerced = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
var temp__5804__auto___40006 = schema.utils.error_val(coerced);
if(cljs.core.truth_(temp__5804__auto___40006)){
var error_40007 = temp__5804__auto___40006;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value cannot be coerced to match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_40007], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_40007], null));
} else {
}

return coerced;
});
;})(c,validate__36464__auto__,ufv39872_39990,output_schema39871_39991,input_schema39873_39992,input_checker39874_39993,output_checker39875_39994))
break;
}
})();
if(cljs.core.truth_(validate__36464__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39886_40008 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__39887_40009 = cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null));
var G__39888_40010 = output_schema39871_39991;
var G__39889_40011 = cljs.core.deref(output_checker39875_39994);
var G__39890_40012 = o__36467__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39886_40008,G__39887_40009,G__39888_40010,G__39889_40011,G__39890_40012) : schema.core.fn_validator.call(null,G__39886_40008,G__39887_40009,G__39888_40010,G__39889_40011,G__39890_40012));
} else {
var temp__5804__auto___40013 = (function (){var fexpr__39895 = cljs.core.deref(output_checker39875_39994);
return (fexpr__39895.cljs$core$IFn$_invoke$arity$1 ? fexpr__39895.cljs$core$IFn$_invoke$arity$1(o__36467__auto__) : fexpr__39895.call(null,o__36467__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___40013)){
var error__36466__auto___40014 = temp__5804__auto___40013;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___40014], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39871_39991,new cljs.core.Keyword(null,"value","value",305978217),o__36467__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___40014], null));
} else {
}
}
} else {
}

return o__36467__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.coercer_BANG_),schema.core.__GT_FnSchema(output_schema39871_39991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39873_39992], null)));

var ufv39900_40016 = schema.utils.use_fn_validation;
var output_schema39899_40017 = schema.coerce.CoercionMatcher;
var input_schema39901_40018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),cljs.core.with_meta(new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)], null)))], null);
var input_checker39902_40019 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema39901_40018);
}),null));
var output_checker39903_40020 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema39899_40017);
}),null));
var ret__39131__auto___40021 = /**
 * Inputs: [matchers :- [CoercionMatcher]]
 *   Returns: CoercionMatcher
 * 
 *   A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = (function schema$coerce$first_matcher(G__39904){
var validate__36464__auto__ = cljs.core.deref(ufv39900_40016);
if(cljs.core.truth_(validate__36464__auto__)){
var args__36465__auto___40022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39904], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39910_40023 = new cljs.core.Keyword(null,"input","input",556931961);
var G__39911_40024 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__39912_40025 = input_schema39901_40018;
var G__39913_40026 = cljs.core.deref(input_checker39902_40019);
var G__39914_40027 = args__36465__auto___40022;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39910_40023,G__39911_40024,G__39912_40025,G__39913_40026,G__39914_40027) : schema.core.fn_validator.call(null,G__39910_40023,G__39911_40024,G__39912_40025,G__39913_40026,G__39914_40027));
} else {
var temp__5804__auto___40028 = (function (){var fexpr__39915 = cljs.core.deref(input_checker39902_40019);
return (fexpr__39915.cljs$core$IFn$_invoke$arity$1 ? fexpr__39915.cljs$core$IFn$_invoke$arity$1(args__36465__auto___40022) : fexpr__39915.call(null,args__36465__auto___40022));
})();
if(cljs.core.truth_(temp__5804__auto___40028)){
var error__36466__auto___40029 = temp__5804__auto___40028;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___40029], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39901_40018,new cljs.core.Keyword(null,"value","value",305978217),args__36465__auto___40022,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___40029], null));
} else {
}
}
} else {
}

var o__36467__auto__ = (function (){var matchers = G__39904;
while(true){
return ((function (validate__36464__auto__,ufv39900_40016,output_schema39899_40017,input_schema39901_40018,input_checker39902_40019,output_checker39903_40020){
return (function (schema__$1){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__39898_SHARP_){
return (p1__39898_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39898_SHARP_.cljs$core$IFn$_invoke$arity$1(schema__$1) : p1__39898_SHARP_.call(null,schema__$1));
}),matchers));
});
;})(validate__36464__auto__,ufv39900_40016,output_schema39899_40017,input_schema39901_40018,input_checker39902_40019,output_checker39903_40020))
break;
}
})();
if(cljs.core.truth_(validate__36464__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__39916_40030 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__39917_40031 = cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null));
var G__39918_40032 = output_schema39899_40017;
var G__39919_40033 = cljs.core.deref(output_checker39903_40020);
var G__39920_40034 = o__36467__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__39916_40030,G__39917_40031,G__39918_40032,G__39919_40033,G__39920_40034) : schema.core.fn_validator.call(null,G__39916_40030,G__39917_40031,G__39918_40032,G__39919_40033,G__39920_40034));
} else {
var temp__5804__auto___40035 = (function (){var fexpr__39921 = cljs.core.deref(output_checker39903_40020);
return (fexpr__39921.cljs$core$IFn$_invoke$arity$1 ? fexpr__39921.cljs$core$IFn$_invoke$arity$1(o__36467__auto__) : fexpr__39921.call(null,o__36467__auto__));
})();
if(cljs.core.truth_(temp__5804__auto___40035)){
var error__36466__auto___40036 = temp__5804__auto___40035;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__36466__auto___40036], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39899_40017,new cljs.core.Keyword(null,"value","value",305978217),o__36467__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__36466__auto___40036], null));
} else {
}
}
} else {
}

return o__36467__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(schema.coerce.first_matcher),schema.core.__GT_FnSchema(output_schema39899_40017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39901_40018], null)));

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
}catch (e39937){if((e39937 instanceof Object)){
var e = e39937;
return x;
} else {
throw e39937;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 *       similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__39941_SHARP_){
if(typeof p1__39941_SHARP_ === 'string'){
return cljs.core.uuid(p1__39941_SHARP_);
} else {
return p1__39941_SHARP_;
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
