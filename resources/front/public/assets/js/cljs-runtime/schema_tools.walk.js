goog.provide('schema_tools.walk');

/**
 * @interface
 */
schema_tools.walk.WalkableSchema = function(){};

var schema_tools$walk$WalkableSchema$_walk$dyn_33392 = (function (this$,inner,outer){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema_tools.walk._walk[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,inner,outer) : m__5394__auto__.call(null,this$,inner,outer));
} else {
var m__5392__auto__ = (schema_tools.walk._walk["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,inner,outer) : m__5392__auto__.call(null,this$,inner,outer));
} else {
throw cljs.core.missing_protocol("WalkableSchema.-walk",this$);
}
}
});
schema_tools.walk._walk = (function schema_tools$walk$_walk(this$,inner,outer){
if((((!((this$ == null)))) && ((!((this$.schema_tools$walk$WalkableSchema$_walk$arity$3 == null)))))){
return this$.schema_tools$walk$WalkableSchema$_walk$arity$3(this$,inner,outer);
} else {
return schema_tools$walk$WalkableSchema$_walk$dyn_33392(this$,inner,outer);
}
});

/**
 * Tests if the parameter is Schema record. I.e. not vector, map or other
 *   collection but implements Schema protocol.
 */
schema_tools.walk.schema_record_QMARK_ = (function schema_tools$walk$schema_record_QMARK_(x){
var and__5043__auto__ = cljs.core.record_QMARK_(x);
if(and__5043__auto__){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.schema$core$Schema$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,x);
}
} else {
return and__5043__auto__;
}
});
/**
 * Calls `inner` for sub-schemas of this schema, creating new Schema of the same
 *   type as given and preserving the metadata. Calls `outer` with the created
 *   Schema.
 */
schema_tools.walk.walk = (function schema_tools$walk$walk(inner,outer,this$){
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.schema_tools$walk$WalkableSchema$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(schema_tools.walk.WalkableSchema,this$):false)):cljs.core.native_satisfies_QMARK_(schema_tools.walk.WalkableSchema,this$))){
return schema_tools.walk._walk(this$,inner,outer);
} else {
if(schema_tools.walk.schema_record_QMARK_(this$)){
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$) : outer.call(null,this$));
} else {
if(cljs.core.record_QMARK_(this$)){
var G__33318 = cljs.core.with_meta(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),this$,this$),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33318) : outer.call(null,G__33318));
} else {
if(cljs.core.seq_QMARK_(this$)){
var G__33326 = cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$)),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33326) : outer.call(null,G__33326));
} else {
if(cljs.core.coll_QMARK_(this$)){
var G__33327 = cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(this$),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$)),cljs.core.meta(this$));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33327) : outer.call(null,G__33327));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$) : outer.call(null,this$));

}
}
}
}
}
});
/**
 * Performs a depth-first, post-order traversal of `schema`.  Calls `f` on
 *   each sub-form, uses f's return value in place of the original.
 *   Works with Schemas implementing schema-tools.walk/WalkableSchema,
 *   implementation is provided for built-in schemas.
 *   Consumes seqs as with doall.
 */
schema_tools.walk.postwalk = (function schema_tools$walk$postwalk(f,schema__$1){
return schema_tools.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema_tools.walk.postwalk,f),f,schema__$1);
});
/**
 * Like postwalk, but does pre-order traversal.
 */
schema_tools.walk.prewalk = (function schema_tools$walk$prewalk(f,schema__$1){
return schema_tools.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema_tools.walk.prewalk,f),cljs.core.identity,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema__$1) : f.call(null,schema__$1)));
});
(cljs.core.MapEntry.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33334 = cljs.core.with_meta(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33334) : outer.call(null,G__33334));
}));

(schema.core.ConditionalSchema.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33340 = cljs.core.with_meta(schema.core.__GT_ConditionalSchema(cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function schema_tools$walk$iter__33341(s__33342){
return (new cljs.core.LazySeq(null,(function (){
var s__33342__$1 = s__33342;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33342__$1);
if(temp__5804__auto__){
var s__33342__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33342__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33342__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33344 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33343 = (0);
while(true){
if((i__33343 < size__5522__auto__)){
var vec__33352 = cljs.core._nth(c__5521__auto__,i__33343);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(1),null);
cljs.core.chunk_append(b__33344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(schema__$1) : inner.call(null,schema__$1))], null));

var G__33404 = (i__33343 + (1));
i__33343 = G__33404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33344),schema_tools$walk$iter__33341(cljs.core.chunk_rest(s__33342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33344),null);
}
} else {
var vec__33361 = cljs.core.first(s__33342__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(schema__$1) : inner.call(null,schema__$1))], null),schema_tools$walk$iter__33341(cljs.core.rest(s__33342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(this$__$1.preds_and_schemas);
})()),this$__$1.error_symbol),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33340) : outer.call(null,G__33340));
}));

(schema.core.Maybe.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33370 = cljs.core.with_meta(schema.core.maybe((function (){var G__33371 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__33371) : inner.call(null,G__33371));
})()),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33370) : outer.call(null,G__33370));
}));

(schema.core.NamedSchema.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33378 = cljs.core.with_meta(schema.core.named((function (){var G__33379 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__33379) : inner.call(null,G__33379));
})(),this$__$1.name),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33378) : outer.call(null,G__33378));
}));

(schema.core.Either.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33385 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33385) : outer.call(null,G__33385));
}));

(schema.core.Predicate.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,_,outer){
var this$__$1 = this;
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(this$__$1) : outer.call(null,this$__$1));
}));

(schema.core.CondPre.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33387 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.cond_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33387) : outer.call(null,G__33387));
}));

(schema.core.Both.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33388 = cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,this$__$1.schemas)),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33388) : outer.call(null,G__33388));
}));

(schema.core.Constrained.prototype.schema_tools$walk$WalkableSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$walk$WalkableSchema$_walk$arity$3 = (function (this$,inner,outer){
var this$__$1 = this;
var G__33389 = cljs.core.with_meta(schema.core.constrained.cljs$core$IFn$_invoke$arity$3((function (){var G__33390 = this$__$1.schema;
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__33390) : inner.call(null,G__33390));
})(),this$__$1.postcondition,this$__$1.post_name),cljs.core.meta(this$__$1));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__33389) : outer.call(null,G__33389));
}));

//# sourceMappingURL=schema_tools.walk.js.map
