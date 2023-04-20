goog.provide('schema.spec.leaf');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36670,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36687 = k36670;
var G__36687__$1 = (((G__36687 instanceof cljs.core.Keyword))?G__36687.fqn:null);
switch (G__36687__$1) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36670,else__5346__auto__);

}
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36691){
var vec__36692 = p__36691;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36692,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return (function (x){
var or__5045__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return x;
}
});
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36669){
var self__ = this;
var G__36669__$1 = this;
return (new cljs.core.RecordIter((0),G__36669__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1595767002 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36671,other36672){
var self__ = this;
var this36671__$1 = this;
return (((!((other36672 == null)))) && ((((this36671__$1.constructor === other36672.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36671__$1.pre,other36672.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36671__$1.__extmap,other36672.__extmap)))))));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36670){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36728 = k36670;
var G__36728__$1 = (((G__36728 instanceof cljs.core.Keyword))?G__36728.fqn:null);
switch (G__36728__$1) {
case "pre":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36670);

}
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36669){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36732 = cljs.core.keyword_identical_QMARK_;
var expr__36733 = k__5352__auto__;
if(cljs.core.truth_((pred__36732.cljs$core$IFn$_invoke$arity$2 ? pred__36732.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pre","pre",2118456869),expr__36733) : pred__36732.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__36733)))){
return (new schema.spec.leaf.LeafSpec(G__36669,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36669),null));
}
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null))], null),self__.__extmap));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36669){
var self__ = this;
var this__5342__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__36669,self__.__extmap,self__.__hash));
}));

(schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
}));

(schema.spec.leaf.LeafSpec.cljs$lang$type = true);

(schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"schema.spec.leaf/LeafSpec",null,(1),null));
}));

(schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"schema.spec.leaf/LeafSpec");
}));

/**
 * Positional factory function for schema.spec.leaf/LeafSpec.
 */
schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

/**
 * Factory function for schema.spec.leaf/LeafSpec, taking a map of keywords to field values.
 */
schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__36673){
var extmap__5385__auto__ = (function (){var G__36744 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36673,new cljs.core.Keyword(null,"pre","pre",2118456869));
if(cljs.core.record_QMARK_(G__36673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36744);
} else {
return G__36744;
}
})();
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__36673),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});

//# sourceMappingURL=schema.spec.leaf.js.map
