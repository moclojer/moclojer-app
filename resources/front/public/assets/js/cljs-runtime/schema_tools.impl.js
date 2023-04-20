goog.provide('schema_tools.impl');
schema_tools.impl.unlift_keys = (function schema_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__33299){
var vec__33300 = p__33299;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33300,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33300,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});

/**
 * @interface
 */
schema_tools.impl.SchemaValue = function(){};

var schema_tools$impl$SchemaValue$schema_value$dyn_33428 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema_tools.impl.schema_value[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (schema_tools.impl.schema_value["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SchemaValue.schema-value",this$);
}
}
});
/**
 * Returns the sub-schema for given schema.
 */
schema_tools.impl.schema_value = (function schema_tools$impl$schema_value(this$){
if((((!((this$ == null)))) && ((!((this$.schema_tools$impl$SchemaValue$schema_value$arity$1 == null)))))){
return this$.schema_tools$impl$SchemaValue$schema_value$arity$1(this$);
} else {
return schema_tools$impl$SchemaValue$schema_value$dyn_33428(this$);
}
});

(schema_tools.impl.SchemaValue["null"] = true);

(schema_tools.impl.schema_value["null"] = (function (_){
return null;
}));

(schema.core.One.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.One.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.ConditionalSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,this$__$1.preds_and_schemas));
}));

(schema_tools.impl.SchemaValue["_"] = true);

(schema_tools.impl.schema_value["_"] = (function (this$){
return this$;
}));

(schema.core.Maybe.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.NamedSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.Either.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.CondPre.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.Both.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1.schemas);
}));

(schema.core.Constrained.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.schema;
}));

(schema.core.EnumSchema.prototype.schema_tools$impl$SchemaValue$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema_tools$impl$SchemaValue$schema_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.vs;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema_tools.impl.Default = (function (schema,value,__meta,__extmap,__hash){
this.schema = schema;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema_tools.impl.Default.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema_tools.impl.Default.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33347,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__33364 = k33347;
var G__33364__$1 = (((G__33364 instanceof cljs.core.Keyword))?G__33364.fqn:null);
switch (G__33364__$1) {
case "schema":
return self__.schema;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33347,else__5346__auto__);

}
}));

(schema_tools.impl.Default.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__33373){
var vec__33375 = p__33373;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema_tools.impl.Default.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema-tools.impl.Default{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33346){
var self__ = this;
var G__33346__$1 = this;
return (new cljs.core.RecordIter((0),G__33346__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema_tools.impl.Default.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema_tools.impl.Default.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema_tools.impl.Default.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1885477704 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema_tools.impl.Default.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33348,other33349){
var self__ = this;
var this33348__$1 = this;
return (((!((other33349 == null)))) && ((((this33348__$1.constructor === other33349.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33348__$1.schema,other33349.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33348__$1.value,other33349.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33348__$1.__extmap,other33349.__extmap)))))))));
}));

(schema_tools.impl.Default.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.impl.Default.prototype.schema$core$Schema$spec$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema_tools.impl.Default.prototype.schema$core$Schema$explain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"default","default",-347290801,null),(new cljs.core.List(null,schema.core.explain(self__.schema),(new cljs.core.List(null,self__.value,null,(1),null)),(2),null)),(3),null));
}));

(schema_tools.impl.Default.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema_tools.impl.Default.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33347){
var self__ = this;
var this__5350__auto____$1 = this;
var G__33394 = k33347;
var G__33394__$1 = (((G__33394 instanceof cljs.core.Keyword))?G__33394.fqn:null);
switch (G__33394__$1) {
case "schema":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33347);

}
}));

(schema_tools.impl.Default.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33346){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__33399 = cljs.core.keyword_identical_QMARK_;
var expr__33400 = k__5352__auto__;
if(cljs.core.truth_((pred__33399.cljs$core$IFn$_invoke$arity$2 ? pred__33399.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__33400) : pred__33399.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__33400)))){
return (new schema_tools.impl.Default(G__33346,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33399.cljs$core$IFn$_invoke$arity$2 ? pred__33399.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__33400) : pred__33399.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__33400)))){
return (new schema_tools.impl.Default(self__.schema,G__33346,self__.__meta,self__.__extmap,null));
} else {
return (new schema_tools.impl.Default(self__.schema,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33346),null));
}
}
}));

(schema_tools.impl.Default.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(schema_tools.impl.Default.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33346){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema_tools.impl.Default(self__.schema,self__.value,G__33346,self__.__extmap,self__.__hash));
}));

(schema_tools.impl.Default.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema_tools.impl.Default.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(schema_tools.impl.Default.cljs$lang$type = true);

(schema_tools.impl.Default.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema-tools.impl/Default",null,(1),null));
}));

(schema_tools.impl.Default.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema-tools.impl/Default");
}));

/**
 * Positional factory function for schema-tools.impl/Default.
 */
schema_tools.impl.__GT_Default = (function schema_tools$impl$__GT_Default(schema__$1,value){
return (new schema_tools.impl.Default(schema__$1,value,null,null,null));
});

/**
 * Factory function for schema-tools.impl/Default, taking a map of keywords to field values.
 */
schema_tools.impl.map__GT_Default = (function schema_tools$impl$map__GT_Default(G__33350){
var extmap__5385__auto__ = (function (){var G__33406 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33350,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__33350)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33406);
} else {
return G__33406;
}
})();
return (new schema_tools.impl.Default(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__33350),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__33350),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

schema_tools.impl.default_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,schema_tools.impl.Default);
schema_tools.impl.default$ = (function schema_tools$impl$default(schema__$1,value){
schema.core.validate(schema__$1,value);

return schema_tools.impl.__GT_Default(schema__$1,value);
});

//# sourceMappingURL=schema_tools.impl.js.map
