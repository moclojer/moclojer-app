goog.provide('schema_tools.swagger.core');
schema_tools.swagger.core.remove_empty_keys = (function schema_tools$swagger$core$remove_empty_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.nil_QMARK_,cljs.core.val),m));
});
schema_tools.swagger.core.record_schema = (function schema_tools$swagger$core$record_schema(x){
var temp__5802__auto__ = (function (){var G__33642 = x;
var G__33642__$1 = (((G__33642 == null))?null:schema.utils.class_schema(G__33642));
if((G__33642__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__33642__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var schema__$1 = temp__5802__auto__;
var name = (function (){var G__33643 = x;
var G__33643__$1 = (((G__33643 == null))?null:schema.utils.class_schema(G__33643));
var G__33643__$2 = (((G__33643__$1 == null))?null:new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__33643__$1));
var G__33643__$3 = (((G__33643__$2 == null))?null:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__33643__$2], 0)));
var G__33643__$4 = (((G__33643__$3 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__33643__$3,"/"));
if((G__33643__$4 == null)){
return null;
} else {
return cljs.core.last(G__33643__$4);
}
})();
return schema.core.named(schema__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"Record"].join(''));
} else {
return null;
}
});
schema_tools.swagger.core.plain_map_QMARK_ = (function schema_tools$swagger$core$plain_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
schema_tools.swagger.core.schema_name = (function schema_tools$swagger$core$schema_name(schema__$1,opts){
var temp__5802__auto__ = (function (){var G__33647 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = schema.core.schema_name(schema__$1);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if((schema__$1 instanceof schema__$1.core.NamedSchema)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(schema__$1);
} else {
return null;
}
}
}
})();
if((G__33647 == null)){
return null;
} else {
return cljs.core.name(G__33647);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var ns = schema.core.schema_ns(schema__$1);
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",name].join('');
} else {
return name;
}
} else {
return null;
}
});
schema_tools.swagger.core.key_name = (function schema_tools$swagger$core$key_name(x){
if((x instanceof cljs.core.Keyword)){
var n = cljs.core.namespace(x);
return [(cljs.core.truth_(n)?[n,"/"].join(''):null),cljs.core.name(x)].join('');
} else {
return x;
}
});
schema_tools.swagger.core.assoc_collection_format = (function schema_tools$swagger$core$assoc_collection_format(m,p__33648){
var map__33649 = p__33648;
var map__33649__$1 = cljs.core.__destructure_map(map__33649);
var options = map__33649__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33649__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var G__33650 = m;
if(cljs.core.truth_((function (){var fexpr__33651 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formData","formData",-1155796695),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null);
return (fexpr__33651.cljs$core$IFn$_invoke$arity$1 ? fexpr__33651.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__33651.call(null,in$));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33650,new cljs.core.Keyword(null,"collectionFormat","collectionFormat",1189846689),new cljs.core.Keyword(null,"collection-format","collection-format",-36559834).cljs$core$IFn$_invoke$arity$2(options,"multi"));
} else {
return G__33650;
}
});
schema_tools.swagger.core.not_supported_BANG_ = (function schema_tools$swagger$core$not_supported_BANG_(schema__$1){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["don't know how to convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema__$1)," into a Swagger Schema. "].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null));
});
schema_tools.swagger.core.maybe_QMARK_ = (function schema_tools$swagger$core$maybe_QMARK_(schema__$1){
return (schema__$1 instanceof schema__$1.core.Maybe);
});
schema_tools.swagger.core.collection_schema = (function schema_tools$swagger$core$collection_schema(e,options){
return schema_tools.swagger.core.assoc_collection_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),(function (){var G__33658 = cljs.core.first(e);
var G__33659 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("schema-tools.swagger.core","no-meta","schema-tools.swagger.core/no-meta",-131243633),true);
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(G__33658,G__33659) : schema_tools.swagger.core.transform.call(null,G__33658,G__33659));
})()], null),options);
});
schema_tools.swagger.core.properties = (function schema_tools$swagger$core$properties(schema__$1,opts){
var G__33663 = (function (){var iter__5523__auto__ = (function schema_tools$swagger$core$properties_$_iter__33664(s__33665){
return (new cljs.core.LazySeq(null,(function (){
var s__33665__$1 = s__33665;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33665__$1);
if(temp__5804__auto__){
var s__33665__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33665__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33665__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33667 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33666 = (0);
while(true){
if((i__33666 < size__5522__auto__)){
var vec__33672 = cljs.core._nth(c__5521__auto__,i__33666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33672,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var v__$1 = (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,opts) : schema_tools.swagger.core.transform.call(null,v,opts));
cljs.core.chunk_append(b__33667,(function (){var and__5043__auto__ = v__$1;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_tools.swagger.core.key_name(schema.core.explicit_schema_key(k)),v__$1], null);
} else {
return and__5043__auto__;
}
})());

var G__33802 = (i__33666 + (1));
i__33666 = G__33802;
continue;
} else {
var G__33803 = (i__33666 + (1));
i__33666 = G__33803;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33667),schema_tools$swagger$core$properties_$_iter__33664(cljs.core.chunk_rest(s__33665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33667),null);
}
} else {
var vec__33676 = cljs.core.first(s__33665__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33676,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33676,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var v__$1 = (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,opts) : schema_tools.swagger.core.transform.call(null,v,opts));
return cljs.core.cons((function (){var and__5043__auto__ = v__$1;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_tools.swagger.core.key_name(schema.core.explicit_schema_key(k)),v__$1], null);
} else {
return and__5043__auto__;
}
})(),schema_tools$swagger$core$properties_$_iter__33664(cljs.core.rest(s__33665__$2)));
} else {
var G__33807 = cljs.core.rest(s__33665__$2);
s__33665__$1 = G__33807;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(schema__$1);
})();
var G__33663__$1 = (((G__33663 == null))?null:cljs.core.seq(G__33663));
if((G__33663__$1 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(schema__$1),G__33663__$1);
}
});
schema_tools.swagger.core.additional_properties = (function schema_tools$swagger$core$additional_properties(schema__$1){
var temp__5802__auto__ = schema.core.find_extra_keys_schema(schema__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var extra_key = temp__5802__auto__;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema__$1,extra_key);
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(v,null) : schema_tools.swagger.core.transform.call(null,v,null));
} else {
return false;
}
});
schema_tools.swagger.core.object_schema = (function schema_tools$swagger$core$object_schema(this$,opts){
if(schema_tools.swagger.core.plain_map_QMARK_(this$)){
return schema_tools.swagger.core.remove_empty_keys(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"title","title",636505583),schema_tools.swagger.core.schema_name(this$,opts),new cljs.core.Keyword(null,"properties","properties",685819552),schema_tools.swagger.core.properties(this$,opts),new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),schema_tools.swagger.core.additional_properties(this$),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__33685 = cljs.core.filterv(schema.core.required_key_QMARK_,cljs.core.keys(this$));
var G__33685__$1 = (((G__33685 == null))?null:cljs.core.seq(G__33685));
if((G__33685__$1 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema_tools.swagger.core.key_name,G__33685__$1);
}
})()], null));
} else {
return null;
}
});
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.transform_pred !== 'undefined')){
} else {
schema_tools.swagger.core.transform_pred = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33689 = cljs.core.get_global_hierarchy;
return (fexpr__33689.cljs$core$IFn$_invoke$arity$0 ? fexpr__33689.cljs$core$IFn$_invoke$arity$0() : fexpr__33689.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","transform-pred"),(function (this$,_){
return this$;
}),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.string_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.integer_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int32"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_pred.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),(function (e,p__33694){
var map__33695 = p__33694;
var map__33695__$1 = cljs.core.__destructure_map(map__33695);
var ignore_missing_mappings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33695__$1,new cljs.core.Keyword(null,"ignore-missing-mappings?","ignore-missing-mappings?",1057840190));
if(cljs.core.not(ignore_missing_mappings_QMARK_)){
return schema_tools.swagger.core.not_supported_BANG_(e);
} else {
return null;
}
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.transform_type !== 'undefined')){
} else {
schema_tools.swagger.core.transform_type = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33697 = cljs.core.get_global_hierarchy;
return (fexpr__33697.cljs$core$IFn$_invoke$arity$0 ? fexpr__33697.cljs$core$IFn$_invoke$arity$0() : fexpr__33697.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","transform-type"),(function (c,_){
return c;
}),new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,schema.core.Regex,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"regex"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.Date,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,goog.date.UtcDateTime,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
schema_tools.swagger.core.transform_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","default","schema-tools.swagger.core/default",-855959910),(function (e,p__33699){
var map__33700 = p__33699;
var map__33700__$1 = cljs.core.__destructure_map(map__33700);
var ignore_missing_mappings_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33700__$1,new cljs.core.Keyword(null,"ignore-missing-mappings?","ignore-missing-mappings?",1057840190));
if(cljs.core.not(ignore_missing_mappings_QMARK_)){
return schema_tools.swagger.core.not_supported_BANG_(e);
} else {
return null;
}
}));

/**
 * @interface
 */
schema_tools.swagger.core.SwaggerSchema = function(){};

var schema_tools$swagger$core$SwaggerSchema$_transform$dyn_33839 = (function (this$,opts){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (schema_tools.swagger.core._transform[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5394__auto__.call(null,this$,opts));
} else {
var m__5392__auto__ = (schema_tools.swagger.core._transform["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5392__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("SwaggerSchema.-transform",this$);
}
}
});
schema_tools.swagger.core._transform = (function schema_tools$swagger$core$_transform(this$,opts){
if((((!((this$ == null)))) && ((!((this$.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 == null)))))){
return this$.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2(this$,opts);
} else {
return schema_tools$swagger$core$SwaggerSchema$_transform$dyn_33839(this$,opts);
}
});

schema_tools.swagger.core.transform = (function schema_tools$swagger$core$transform(schema__$1,opts){
if((((!((schema__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.schema_tools$swagger$core$SwaggerSchema$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(schema_tools.swagger.core.SwaggerSchema,schema__$1):false)):cljs.core.native_satisfies_QMARK_(schema_tools.swagger.core.SwaggerSchema,schema__$1))){
return schema_tools.swagger.core._transform(schema__$1,opts);
} else {
var temp__5802__auto__ = schema_tools.swagger.core.record_schema(schema__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var rschema = temp__5802__auto__;
return (schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2 ? schema_tools.swagger.core.transform.cljs$core$IFn$_invoke$arity$2(rschema,opts) : schema_tools.swagger.core.transform.call(null,rschema,opts));
} else {
return schema_tools.swagger.core.transform_type.cljs$core$IFn$_invoke$arity$2(schema__$1,opts);
}
}
});
(schema_tools.swagger.core.SwaggerSchema["null"] = true);

(schema_tools.swagger.core._transform["null"] = (function (_,___$1){
return null;
}));

(cljs.core.PersistentVector.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.collection_schema(this$__$1,options);
}));

(RegExp.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.source)], null);
}));

(schema.core.One.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.One.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(this$__$1.schema,opts);
}));

(schema.core.ConditionalSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x-oneOf","x-oneOf",-1060094993),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33705_SHARP_){
return schema_tools.swagger.core.transform(p1__33705_SHARP_,opts);
}),cljs.core.second),this$__$1.preds_and_schemas))], null);
}));

(schema_tools.core.Schema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema_tools.core.Schema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (p__33713,opts){
var map__33714 = p__33713;
var map__33714__$1 = cljs.core.__destructure_map(map__33714);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33714__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33718 = this;
var map__33718__$1 = cljs.core.__destructure_map(map__33718);
var schema__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33718__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33718__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema_tools.swagger.core.transform(schema__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,cljs.core.select_keys(data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null))], 0))),schema_tools.impl.unlift_keys(data__$1,"swagger")], 0));
}));

(schema.core.Maybe.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (e,p__33719){
var map__33720 = p__33719;
var map__33720__$1 = cljs.core.__destructure_map(map__33720);
var opts = map__33720__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33720__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var e__$1 = this;
var schema__$1 = schema_tools.swagger.core.transform(e__$1.schema,opts);
var pred__33721 = cljs.core.contains_QMARK_;
var expr__33722 = in$;
if(cljs.core.truth_((function (){var G__33724 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formData","formData",-1155796695),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null);
var G__33725 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : pred__33721.call(null,G__33724,G__33725));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890),true);
} else {
if(cljs.core.truth_((function (){var G__33726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null);
var G__33727 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33726,G__33727) : pred__33721.call(null,G__33726,G__33727));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema__$1,new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247),true);
} else {
return schema__$1;
}
}
}));

(schema.core.NamedSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (p__33728,opts){
var map__33729 = p__33728;
var map__33729__$1 = cljs.core.__destructure_map(map__33729);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33729__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__33731 = this;
var map__33731__$1 = cljs.core.__destructure_map(map__33731);
var schema__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33731__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return schema_tools.swagger.core.transform(schema__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name__$1));
}));

(cljs.core.List.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.collection_schema(this$__$1,options);
}));

(schema.core.Either.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.first(this$__$1.schemas),opts);
}));

(cljs.core.PersistentArrayMap.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.object_schema(this$__$1,opts);
}));

(schema.core.AnythingSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (_,p__33732){
var map__33733 = p__33732;
var map__33733__$1 = cljs.core.__destructure_map(map__33733);
var opts = map__33733__$1;
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33733__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5043__auto__ = in$;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),in$);
} else {
return and__5043__auto__;
}
})())){
return schema_tools.swagger.core.transform(schema.core.maybe(schema.core.Str),opts);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));

(cljs.core.PersistentHashSet.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.swagger.core.collection_schema(this$__$1,options),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true);
}));

(schema.core.Predicate.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.transform_pred.cljs$core$IFn$_invoke$arity$2(this$__$1.p_QMARK_,options);
}));

(cljs.core.PersistentHashMap.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.object_schema(this$__$1,opts);
}));

(schema.core.EqSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.type(this$__$1.v),opts);
}));

(schema.core.CondPre.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x-oneOf","x-oneOf",-1060094993),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33706_SHARP_){
return schema_tools.swagger.core.transform(p1__33706_SHARP_,opts);
}),this$__$1.schemas)], null);
}));

(schema.core.Both.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return schema_tools.swagger.core.transform(cljs.core.first(this$__$1.schemas),options);
}));

(schema.core.Constrained.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,opts){
var this$__$1 = this;
return schema_tools.swagger.core.transform(this$__$1.schema,opts);
}));

(schema.core.EnumSchema.prototype.schema_tools$swagger$core$SwaggerSchema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema_tools$swagger$core$SwaggerSchema$_transform$arity$2 = (function (this$,options){
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema_tools.swagger.core.transform(cljs.core.type(cljs.core.first(this$__$1.vs)),options),new cljs.core.Keyword(null,"enum","enum",1679018432),this$__$1.vs);
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.extract_parameter !== 'undefined')){
} else {
schema_tools.swagger.core.extract_parameter = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33736 = cljs.core.get_global_hierarchy;
return (fexpr__33736.cljs$core$IFn$_invoke$arity$0 ? fexpr__33736.cljs$core$IFn$_invoke$arity$0() : fexpr__33736.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","extract-parameter"),(function (in$,_){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
schema_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,schema__$1){
var swagger = schema_tools.swagger.core.transform(schema__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5045__auto__ = schema_tools.swagger.core.schema_name(schema__$1,null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "body";
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"required","required",1807647006),(!(schema_tools.swagger.core.maybe_QMARK_(schema__$1))),new cljs.core.Keyword(null,"schema","schema",-1582001791),swagger], null)], null);
}));
schema_tools.swagger.core.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,schema__$1){
var map__33739 = schema_tools.swagger.core.transform(schema__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__33739__$1 = cljs.core.__destructure_map(map__33739);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33739__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__33740){
var vec__33741 = p__33740;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(0),null);
var map__33744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(1),null);
var map__33744__$1 = cljs.core.__destructure_map(map__33744);
var swagger = map__33744__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33744__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),schema_tools.swagger.core.key_name(k),new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),swagger], 0));
}),properties);
}));
if((typeof schema_tools !== 'undefined') && (typeof schema_tools.swagger !== 'undefined') && (typeof schema_tools.swagger.core !== 'undefined') && (typeof schema_tools.swagger.core.expand !== 'undefined')){
} else {
schema_tools.swagger.core.expand = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33745 = cljs.core.get_global_hierarchy;
return (fexpr__33745.cljs$core$IFn$_invoke$arity$0 ? fexpr__33745.cljs$core$IFn$_invoke$arity$0() : fexpr__33745.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("schema-tools.swagger.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
schema_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","responses","schema-tools.swagger.core/responses",-2039250325),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5523__auto__ = (function schema_tools$swagger$core$iter__33747(s__33748){
return (new cljs.core.LazySeq(null,(function (){
var s__33748__$1 = s__33748;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__33748__$1);
if(temp__5804__auto__){
var s__33748__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33748__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__33748__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__33750 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__33749 = (0);
while(true){
if((i__33749 < size__5522__auto__)){
var vec__33751 = cljs.core._nth(c__5521__auto__,i__33749);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(1),null);
cljs.core.chunk_append(b__33750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,schema_tools.swagger.core.remove_empty_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,"")))], null));

var G__33859 = (i__33749 + (1));
i__33749 = G__33859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33750),schema_tools$swagger$core$iter__33747(cljs.core.chunk_rest(s__33748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33750),null);
}
} else {
var vec__33755 = cljs.core.first(s__33748__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,schema_tools.swagger.core.remove_empty_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(response,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_tools.swagger.core.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,"")))], null),schema_tools$swagger$core$iter__33747(cljs.core.rest(s__33748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(v);
})())], null);
}));
schema_tools.swagger.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("schema-tools.swagger.core","parameters","schema-tools.swagger.core/parameters",1714539482),(function (_,v,acc,___$1){
var old = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__33758){
var vec__33759 = p__33758;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(1),null);
return schema_tools.swagger.core.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33762,p){
var vec__33763 = p__33762;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33763,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33763,(1),null);
var acc__$1 = vec__33763;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null,c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
schema_tools.swagger.core.expand_qualified_keywords = (function schema_tools$swagger$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(schema_tools.swagger.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(schema_tools.swagger.core.plain_map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null,k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),schema_tools.swagger.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a swagger2 spec. Input data must conform
 *   to the Swagger2 Spec (http://swagger.io/specification/) with a
 *   exception that it can have any qualified keywords that are expanded
 *   with the `schema-tools.swagger.core/expand` multimethod.
 */
schema_tools.swagger.core.swagger_spec = (function schema_tools$swagger$core$swagger_spec(var_args){
var G__33768 = arguments.length;
switch (G__33768) {
case 1:
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(schema_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return schema_tools.swagger.core.expand_qualified_keywords(x,options);
}));

(schema_tools.swagger.core.swagger_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=schema_tools.swagger.core.js.map
