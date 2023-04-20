goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__5523__auto__ = (function shadow$test$env$get_test_vars_$_iter__51158(s__51159){
return (new cljs.core.LazySeq(null,(function (){
var s__51159__$1 = s__51159;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51159__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__51164 = cljs.core.first(xs__6360__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51164,(1),null);
var iterys__5519__auto__ = ((function (s__51159__$1,vec__51164,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function shadow$test$env$get_test_vars_$_iter__51158_$_iter__51160(s__51161){
return (new cljs.core.LazySeq(null,((function (s__51159__$1,vec__51164,ns,ns_info,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__51161__$1 = s__51161;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51161__$1);
if(temp__5804__auto____$1){
var s__51161__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51161__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51161__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51163 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51162 = (0);
while(true){
if((i__51162 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__51162);
cljs.core.chunk_append(b__51163,var$);

var G__51231 = (i__51162 + (1));
i__51162 = G__51231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51163),shadow$test$env$get_test_vars_$_iter__51158_$_iter__51160(cljs.core.chunk_rest(s__51161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51163),null);
}
} else {
var var$ = cljs.core.first(s__51161__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__51158_$_iter__51160(cljs.core.rest(s__51161__$2)));
}
} else {
return null;
}
break;
}
});})(s__51159__$1,vec__51164,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__51159__$1,vec__51164,ns,ns_info,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$test$env$get_test_vars_$_iter__51158(cljs.core.rest(s__51159__$1)));
} else {
var G__51233 = cljs.core.rest(s__51159__$1);
s__51159__$1 = G__51233;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__5523__auto__ = (function shadow$test$env$get_test_count_$_iter__51168(s__51169){
return (new cljs.core.LazySeq(null,(function (){
var s__51169__$1 = s__51169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51169__$1);
if(temp__5804__auto__){
var s__51169__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51169__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51169__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51171 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51170 = (0);
while(true){
if((i__51170 < size__5522__auto__)){
var map__51186 = cljs.core._nth(c__5521__auto__,i__51170);
var map__51186__$1 = cljs.core.__destructure_map(map__51186);
var test_ns = map__51186__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__51171,cljs.core.count(vars));

var G__51247 = (i__51170 + (1));
i__51170 = G__51247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51171),shadow$test$env$get_test_count_$_iter__51168(cljs.core.chunk_rest(s__51169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51171),null);
}
} else {
var map__51188 = cljs.core.first(s__51169__$2);
var map__51188__$1 = cljs.core.__destructure_map(map__51188);
var test_ns = map__51188__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51188__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__51168(cljs.core.rest(s__51169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
