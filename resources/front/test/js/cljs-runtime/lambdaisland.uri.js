goog.provide('lambdaisland.uri');
lambdaisland.uri.uri_regex = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)?(\?([^#]*))?(#(.*))?$/;
lambdaisland.uri.authority_regex = /^(([^:]*)(:(.*))?@)?([^:]*)(:(\d*))?$/;
lambdaisland.uri.authority_string = (function lambdaisland$uri$authority_string(user,password,host,port){
if(cljs.core.truth_(host)){
var G__51668 = user;
var G__51668__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = user;
if(cljs.core.truth_(and__5043__auto__)){
return password;
} else {
return and__5043__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51668),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join(''):G__51668);
var G__51668__$2 = (cljs.core.truth_(user)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51668__$1),"@"].join(''):G__51668__$1);
var G__51668__$3 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51668__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host)].join('')
;
if(cljs.core.truth_(port)){
return [G__51668__$3,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return G__51668__$3;
}
} else {
return null;
}
});
/**
 * Convert the URI instance back to a string
 */
lambdaisland.uri.uri_str = (function lambdaisland$uri$uri_str(p__51669){
var map__51692 = p__51669;
var map__51692__$1 = cljs.core.__destructure_map(map__51692);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"password","password",417022471));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51692__$1,new cljs.core.Keyword(null,"fragment","fragment",826775688));
var authority = lambdaisland.uri.authority_string(user,password,host,port);
var G__51697 = "";
var G__51697__$1 = (cljs.core.truth_(scheme)?[G__51697,cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme),":"].join(''):G__51697);
var G__51697__$2 = (cljs.core.truth_(authority)?[G__51697__$1,"//",authority].join(''):G__51697__$1);
var G__51697__$3 = [G__51697__$2,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')
;
var G__51697__$4 = (cljs.core.truth_(query)?[G__51697__$3,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''):G__51697__$3);
if(cljs.core.truth_(fragment)){
return [G__51697__$4,"#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
} else {
return G__51697__$4;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
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
lambdaisland.uri.URI = (function (scheme,user,password,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.uri.URI.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return lambdaisland.uri.uri_str(this$);
}));

(lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(lambdaisland.uri.URI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51706,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51752 = k51706;
var G__51752__$1 = (((G__51752 instanceof cljs.core.Keyword))?G__51752.fqn:null);
switch (G__51752__$1) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51706,else__5346__auto__);

}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51760){
var vec__51761 = p__51760;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51761,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#lambdaisland.uri.URI{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51705){
var self__ = this;
var G__51705__$1 = this;
return (new cljs.core.RecordIter((0),G__51705__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-701916260 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51707,other51708){
var self__ = this;
var this51707__$1 = this;
return (((!((other51708 == null)))) && ((((this51707__$1.constructor === other51708.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.scheme,other51708.scheme)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.user,other51708.user)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.password,other51708.password)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.host,other51708.host)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.port,other51708.port)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.path,other51708.path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.query,other51708.query)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.fragment,other51708.fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51707__$1.__extmap,other51708.__extmap)))))))))))))))))))));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"fragment","fragment",826775688),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"scheme","scheme",90199613),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51706){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51814 = k51706;
var G__51814__$1 = (((G__51814 instanceof cljs.core.Keyword))?G__51814.fqn:null);
switch (G__51814__$1) {
case "scheme":
case "user":
case "password":
case "host":
case "port":
case "path":
case "query":
case "fragment":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51706);

}
}));

(lambdaisland.uri.URI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51705){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51821 = cljs.core.keyword_identical_QMARK_;
var expr__51822 = k__5352__auto__;
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scheme","scheme",90199613),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613),expr__51822)))){
return (new lambdaisland.uri.URI(G__51705,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,G__51705,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,G__51705,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"host","host",-1558485167),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,G__51705,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"port","port",1534937262),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,G__51705,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,G__51705,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,G__51705,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51821.cljs$core$IFn$_invoke$arity$2 ? pred__51821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fragment","fragment",826775688),expr__51822) : pred__51821.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),expr__51822)))){
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,G__51705,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51705),null));
}
}
}
}
}
}
}
}
}));

(lambdaisland.uri.URI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user","user",1532431356),self__.user,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"password","password",417022471),self__.password,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"host","host",-1558485167),self__.host,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"port","port",1534937262),self__.port,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment,null))], null),self__.__extmap));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51705){
var self__ = this;
var this__5342__auto____$1 = this;
return (new lambdaisland.uri.URI(self__.scheme,self__.user,self__.password,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__51705,self__.__extmap,self__.__hash));
}));

(lambdaisland.uri.URI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(lambdaisland.uri.URI.prototype.call = (function (unused__11783__auto__){
var self__ = this;
var self__ = this;
var G__51838 = (arguments.length - (1));
switch (G__51838) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(lambdaisland.uri.URI.prototype.apply = (function (self__,args51750){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args51750)));
}));

(lambdaisland.uri.URI.prototype.cljs$core$IFn$_invoke$arity$1 = (function (kw){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,kw);
}));

(lambdaisland.uri.URI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",1730731140,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"fragment","fragment",-1827660081,null)], null);
}));

(lambdaisland.uri.URI.cljs$lang$type = true);

(lambdaisland.uri.URI.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"lambdaisland.uri/URI",null,(1),null));
}));

(lambdaisland.uri.URI.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"lambdaisland.uri/URI");
}));

/**
 * Positional factory function for lambdaisland.uri/URI.
 */
lambdaisland.uri.__GT_URI = (function lambdaisland$uri$__GT_URI(scheme,user,password,host,port,path,query,fragment){
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
});

/**
 * Factory function for lambdaisland.uri/URI, taking a map of keywords to field values.
 */
lambdaisland.uri.map__GT_URI = (function lambdaisland$uri$map__GT_URI(G__51712){
var extmap__5385__auto__ = (function (){var G__51858 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51712,new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], 0));
if(cljs.core.record_QMARK_(G__51712)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51858);
} else {
return G__51858;
}
})();
return (new lambdaisland.uri.URI(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__51712),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(G__51712),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

lambdaisland.uri.match_uri = (function lambdaisland$uri$match_uri(uri){
var matches = cljs.core.re_matches(lambdaisland.uri.uri_regex,uri);
var vec__51859 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(1),null);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(3),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(4),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(6),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(7),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(8),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(9),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scheme,authority,((cljs.core.seq(path))?path:null),query,fragment], null);
});
lambdaisland.uri.match_authority = (function lambdaisland$uri$match_authority(authority){
var matches = cljs.core.re_matches(lambdaisland.uri.authority_regex,authority);
var vec__51862 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(1),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(3),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(4),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(6),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51862,(7),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [user,password,host,port], null);
});
/**
 * Parse a URI string into a lambadisland.uri.URI record.
 */
lambdaisland.uri.parse = (function lambdaisland$uri$parse(uri){
var vec__51865 = lambdaisland.uri.match_uri(uri);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(0),null);
var authority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(3),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(4),null);
if(cljs.core.truth_(authority)){
var vec__51868 = lambdaisland.uri.match_authority(authority);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(1),null);
var host = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(2),null);
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51868,(3),null);
return (new lambdaisland.uri.URI(scheme,user,password,host,port,path,query,fragment,null,null,null));
} else {
return (new lambdaisland.uri.URI(scheme,null,null,null,null,path,query,fragment,null,null,null));
}
});
/**
 * Turn the given value into a lambdaisland.uri.URI record, if it isn't one
 *   already. Supports String, java.net.URI, and other URI-like objects that return
 *   a valid URI string with `str`.
 */
lambdaisland.uri.uri = (function lambdaisland$uri$uri(uri_like){
if((uri_like instanceof lambdaisland.uri.URI)){
return uri_like;
} else {
return lambdaisland.uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri_like));
}
});
lambdaisland.uri.absolute_path_QMARK_ = (function lambdaisland$uri$absolute_path_QMARK_(path){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),"/");
});
/**
 * As per RFC 3986 section 5.2.4
 */
lambdaisland.uri.remove_dot_segments = (function lambdaisland$uri$remove_dot_segments(path){
if(cljs.core.truth_(path)){
var in$ = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/(?=\/)/);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var G__51875 = cljs.core.first(in$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/.",G__51875)){
if(cljs.core.next(in$)){
var G__52047 = cljs.core.next(in$);
var G__52048 = out;
in$ = G__52047;
out = G__52048;
continue;
} else {
var G__52049 = null;
var G__52050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,"/");
in$ = G__52049;
out = G__52050;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/..",G__51875)){
if(cljs.core.next(in$)){
var G__52052 = cljs.core.next(in$);
var G__52053 = cljs.core.vec(cljs.core.butlast(out));
in$ = G__52052;
out = G__52053;
continue;
} else {
var G__52055 = null;
var G__52056 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(out)),"/");
in$ = G__52055;
out = G__52056;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51875)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(out);
} else {
var G__52057 = cljs.core.next(in$);
var G__52058 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(in$));
in$ = G__52057;
out = G__52058;
continue;

}
}
}
break;
}
} else {
return null;
}
});
lambdaisland.uri.merge_paths = (function lambdaisland$uri$merge_paths(a,b){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["/",null], null), null),a))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/^.*\//,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
if(lambdaisland.uri.absolute_path_QMARK_(b)){
return b;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
}
}
});
/**
 * Join two URI records as per RFC 3986. Handles relative URIs.
 */
lambdaisland.uri.join_STAR_ = (function lambdaisland$uri$join_STAR_(base,ref){
if(cljs.core.truth_(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ref,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(ref))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(base),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)], 0)):(((new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.some(new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,base], null))):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"path","path",-188191168),lambdaisland.uri.remove_dot_segments(((lambdaisland.uri.absolute_path_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))?new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref):lambdaisland.uri.merge_paths(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ref)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(ref)], 0)))),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(ref));
}
});
/**
 * Joins any number of URIs as per RFC3986. Arguments can be strings, they will
 *   be coerced to URI records.
 */
lambdaisland.uri.join = (function lambdaisland$uri$join(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52069 = arguments.length;
var i__5770__auto___52070 = (0);
while(true){
if((i__5770__auto___52070 < len__5769__auto___52069)){
args__5775__auto__.push((arguments[i__5770__auto___52070]));

var G__52071 = (i__5770__auto___52070 + (1));
i__5770__auto___52070 = G__52071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic = (function (uris){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.join_STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.uri,uris));
}));

(lambdaisland.uri.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lambdaisland.uri.join.cljs$lang$applyTo = (function (seq51898){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51898));
}));

lambdaisland.uri.decode_param_pair = (function lambdaisland$uri$decode_param_pair(param){
var vec__51899 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51899,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(k)?lambdaisland.uri.normalize.percent_decode(k):""),(cljs.core.truth_(v)?lambdaisland.uri.normalize.percent_decode(clojure.string.replace(v,/\+/," ")):"")], null);
});
/**
 * Parse a query string, consisting of key=value pairs, separated by "&". Takes
 *   the following options:
 * 
 *   - `:keywordize?` whether to turn return keys as keywords. Defaults to `true`.
 *   - `:multikeys` how to handle the same key occuring multiple times, defaults to
 *  `:duplicates`
 * 
 *   The possible values for `:multikeys` are
 * 
 *   - `:never` always return a single value for a key. The rightmost value
 *  "wins"
 *   - `:always` return a map with vectors as values, with successive
 *  values of the same key in order
 *   - `:duplicates` return a vector for keys that occur multiple times, or a
 *  string otherwise
 */
lambdaisland.uri.query_string__GT_map = (function lambdaisland$uri$query_string__GT_map(var_args){
var G__51904 = arguments.length;
switch (G__51904) {
case 1:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$1 = (function (q){
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2(q,null);
}));

(lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (q,p__51906){
var map__51907 = p__51906;
var map__51907__$1 = cljs.core.__destructure_map(map__51907);
var multikeys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51907__$1,new cljs.core.Keyword(null,"multikeys","multikeys",-695183366),new cljs.core.Keyword(null,"duplicates","duplicates",1265485699));
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51907__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),true);
if((!(clojure.string.blank_QMARK_(q)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__51911){
var vec__51913 = p__51911;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(1),null);
var k__$1 = (cljs.core.truth_(keywordize_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k):k);
var G__51916 = multikeys;
var G__51916__$1 = (((G__51916 instanceof cljs.core.Keyword))?G__51916.fqn:null);
switch (G__51916__$1) {
case "never":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);

break;
case "always":
if(cljs.core.contains_QMARK_(m,k__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}

break;
case "duplicates":
if(cljs.core.contains_QMARK_(m,k__$1)){
if(cljs.core.vector_QMARK_((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k__$1) : m.call(null,k__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,k__$1,cljs.core.conj,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k__$1) : m.call(null,k__$1)),v], null));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51916__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.decode_param_pair,clojure.string.split.cljs$core$IFn$_invoke$arity$2(q,/&/)));
} else {
return null;
}
}));

(lambdaisland.uri.query_string__GT_map.cljs$lang$maxFixedArity = 2);

/**
 * Return the query section of a URI as a map. Will coerce its argument
 *   with [[uri]]. Takes an options map, see [[query-string->map]] for options.
 */
lambdaisland.uri.query_map = (function lambdaisland$uri$query_map(var_args){
var G__51940 = arguments.length;
switch (G__51940) {
case 1:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2(uri,null);
}));

(lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$2 = (function (u,opts){
return lambdaisland.uri.query_string__GT_map.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.uri(u).query,opts);
}));

(lambdaisland.uri.query_map.cljs$lang$maxFixedArity = 2);

/**
 * Percent encoding for query strings. Will percent-encode values that are
 *   reserved in query strings only. Encodes spaces as +.
 */
lambdaisland.uri.query_encode = (function lambdaisland$uri$query_encode(s){
var encode_char = (function (p1__51941_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__51941_SHARP_)){
return "+";
} else {
if(cljs.core.truth_(cljs.core.re_find(/[^a-zA-Z0-9\-\._~@\\/]/,p1__51941_SHARP_))){
return lambdaisland.uri.normalize.percent_encode.cljs$core$IFn$_invoke$arity$1(p1__51941_SHARP_);
} else {
return p1__51941_SHARP_;

}
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_char,lambdaisland.uri.normalize.char_seq.cljs$core$IFn$_invoke$arity$1(s)));
});
lambdaisland.uri.encode_param_pair = (function lambdaisland$uri$encode_param_pair(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode(((cljs.core.simple_ident_QMARK_(k))?cljs.core.name(k):((cljs.core.qualified_ident_QMARK_(k))?[cljs.core.namespace(k),"/",cljs.core.name(k)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)
)))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.query_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
});
/**
 * Convert a map into a query string, consisting of key=value pairs separated by
 *   `&`. The result is percent-encoded so it is always safe to use. Keys can be
 *   strings or keywords. If values are collections then this results in multiple
 *   entries for the same key. `nil` values are ignored. Values are stringified.
 */
lambdaisland.uri.map__GT_query_string = (function lambdaisland$uri$map__GT_query_string(m){
if(cljs.core.seq(m)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__51945){
var vec__51947 = p__51945;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51947,(1),null);
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lambdaisland.uri.encode_param_pair,k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambdaisland.uri.encode_param_pair(k,v)], null);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))));
} else {
return null;
}
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI) and
 *   a map of query params.
 */
lambdaisland.uri.assoc_query_STAR_ = (function lambdaisland$uri$assoc_query_STAR_(u,m){
var u__$1 = lambdaisland.uri.uri(u);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,new cljs.core.Keyword(null,"query","query",-1288509510),lambdaisland.uri.map__GT_query_string(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lambdaisland.uri.query_map.cljs$core$IFn$_invoke$arity$1(u__$1),m], 0))));
});
/**
 * Add additional query parameters to a URI. Takes a URI (or coercible to URI)
 *   followed key value pairs.
 * 
 *   (assoc-query "http://example.com?id=1&name=John" :name "Jack" :style "goth")
 *   ;;=> #lambdaisland/uri "http://example.com?id=1&name=Jack&style=goth" 
 */
lambdaisland.uri.assoc_query = (function lambdaisland$uri$assoc_query(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52086 = arguments.length;
var i__5770__auto___52087 = (0);
while(true){
if((i__5770__auto___52087 < len__5769__auto___52086)){
args__5775__auto__.push((arguments[i__5770__auto___52087]));

var G__52088 = (i__5770__auto___52087 + (1));
i__5770__auto___52087 = G__52088;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(lambdaisland.uri.assoc_query.cljs$core$IFn$_invoke$arity$variadic = (function (u,p__51964){
var map__51965 = p__51964;
var map__51965__$1 = cljs.core.__destructure_map(map__51965);
var kvs = map__51965__$1;
return lambdaisland.uri.assoc_query_STAR_(u,kvs);
}));

(lambdaisland.uri.assoc_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lambdaisland.uri.assoc_query.cljs$lang$applyTo = (function (seq51958){
var G__51959 = cljs.core.first(seq51958);
var seq51958__$1 = cljs.core.next(seq51958);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51959,seq51958__$1);
}));

/**
 * Is the URI relative? Returns true if the URI does not have a scheme (protocol).
 */
lambdaisland.uri.relative_QMARK_ = (function lambdaisland$uri$relative_QMARK_(uri){
return (new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(uri) == null);
});
/**
 * Is the URI absolute? Returns true if the URI has a scheme (protocol), and hence also an origin.
 */
lambdaisland.uri.absolute_QMARK_ = cljs.core.complement(lambdaisland.uri.relative_QMARK_);
/**
 * Check if `o` is URI instance.
 */
lambdaisland.uri.uri_QMARK_ = (function lambdaisland$uri$uri_QMARK_(o){
return (o instanceof lambdaisland.uri.URI);
});
lambdaisland.uri.edn_tag = new cljs.core.Symbol("lambdaisland","uri","lambdaisland/uri",-75335492,null);
(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.uri.URI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lambdaisland.uri.edn_tag)," ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1.toString()], 0))], 0));
}));
/**
 * A map that can be passed to clojure.edn/read, so tagged URI literals are
 *   read back correctly.
 */
lambdaisland.uri.edn_readers = cljs.core.PersistentArrayMap.createAsIfByAssoc([lambdaisland.uri.edn_tag,lambdaisland.uri.parse]);

//# sourceMappingURL=lambdaisland.uri.js.map
