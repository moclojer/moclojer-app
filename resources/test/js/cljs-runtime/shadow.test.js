goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59861){
var vec__59862 = p__59861;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59862,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59862,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__59866 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__59866__$1 = (((G__59866 instanceof cljs.core.Keyword))?G__59866.fqn:null);
switch (G__59866__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__59868 = (function (){
var seq__59869 = cljs.core.seq(vars__$1);
var chunk__59870 = null;
var count__59871 = (0);
var i__59872 = (0);
while(true){
if((i__59872 < count__59871)){
var v = chunk__59870.cljs$core$IIndexed$_nth$arity$2(null,i__59872);
var temp__5804__auto___60048 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___60048)){
var t_60049 = temp__5804__auto___60048;
var G__59884_60050 = ((function (seq__59869,chunk__59870,count__59871,i__59872,t_60049,temp__5804__auto___60048,v,each_fixture_fn,G__59866,G__59866__$1,env,once_fixtures,each_fixtures,vec__59862,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_60049)));
});})(seq__59869,chunk__59870,count__59871,i__59872,t_60049,temp__5804__auto___60048,v,each_fixture_fn,G__59866,G__59866__$1,env,once_fixtures,each_fixtures,vec__59862,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__59884_60050) : each_fixture_fn.call(null,G__59884_60050));
} else {
}


var G__60051 = seq__59869;
var G__60052 = chunk__59870;
var G__60053 = count__59871;
var G__60054 = (i__59872 + (1));
seq__59869 = G__60051;
chunk__59870 = G__60052;
count__59871 = G__60053;
i__59872 = G__60054;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__59869);
if(temp__5804__auto__){
var seq__59869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59869__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__59869__$1);
var G__60055 = cljs.core.chunk_rest(seq__59869__$1);
var G__60056 = c__5568__auto__;
var G__60057 = cljs.core.count(c__5568__auto__);
var G__60058 = (0);
seq__59869 = G__60055;
chunk__59870 = G__60056;
count__59871 = G__60057;
i__59872 = G__60058;
continue;
} else {
var v = cljs.core.first(seq__59869__$1);
var temp__5804__auto___60059__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___60059__$1)){
var t_60060 = temp__5804__auto___60059__$1;
var G__59889_60061 = ((function (seq__59869,chunk__59870,count__59871,i__59872,t_60060,temp__5804__auto___60059__$1,v,seq__59869__$1,temp__5804__auto__,each_fixture_fn,G__59866,G__59866__$1,env,once_fixtures,each_fixtures,vec__59862,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_60060)));
});})(seq__59869,chunk__59870,count__59871,i__59872,t_60060,temp__5804__auto___60059__$1,v,seq__59869__$1,temp__5804__auto__,each_fixture_fn,G__59866,G__59866__$1,env,once_fixtures,each_fixtures,vec__59862,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__59889_60061) : each_fixture_fn.call(null,G__59889_60061));
} else {
}


var G__60062 = cljs.core.next(seq__59869__$1);
var G__60063 = null;
var G__60064 = (0);
var G__60065 = (0);
seq__59869 = G__60062;
chunk__59870 = G__60063;
count__59871 = G__60064;
i__59872 = G__60065;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__59867 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__59867.cljs$core$IFn$_invoke$arity$1 ? fexpr__59867.cljs$core$IFn$_invoke$arity$1(G__59868) : fexpr__59867.call(null,G__59868));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59866__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__59859_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__59859_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__59899 = shadow.test.env.get_test_ns_info(ns);
var map__59899__$1 = cljs.core.__destructure_map(map__59899);
var test_ns = map__59899__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59899__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__59910,vars){
var map__59913 = p__59910;
var map__59913__$1 = cljs.core.__destructure_map(map__59913);
var env = map__59913__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59913__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__59915_60066 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__59917_60067 = null;
var count__59918_60068 = (0);
var i__59919_60069 = (0);
while(true){
if((i__59919_60069 < count__59918_60068)){
var vec__59944_60070 = chunk__59917_60067.cljs$core$IIndexed$_nth$arity$2(null,i__59919_60069);
var test_ns_60071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59944_60070,(0),null);
var ns_info_60072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59944_60070,(1),null);
var map__59947_60073 = ns_info_60072;
var map__59947_60074__$1 = cljs.core.__destructure_map(map__59947_60073);
var fixtures_60075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59947_60074__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___60076 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_60075);
if(cljs.core.truth_(temp__5804__auto___60076)){
var fix_60077 = temp__5804__auto___60076;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60071,fix_60077], 0));
} else {
}

var temp__5804__auto___60078 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_60075);
if(cljs.core.truth_(temp__5804__auto___60078)){
var fix_60079 = temp__5804__auto___60078;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60071,fix_60079], 0));
} else {
}


var G__60080 = seq__59915_60066;
var G__60081 = chunk__59917_60067;
var G__60082 = count__59918_60068;
var G__60083 = (i__59919_60069 + (1));
seq__59915_60066 = G__60080;
chunk__59917_60067 = G__60081;
count__59918_60068 = G__60082;
i__59919_60069 = G__60083;
continue;
} else {
var temp__5804__auto___60084 = cljs.core.seq(seq__59915_60066);
if(temp__5804__auto___60084){
var seq__59915_60085__$1 = temp__5804__auto___60084;
if(cljs.core.chunked_seq_QMARK_(seq__59915_60085__$1)){
var c__5568__auto___60086 = cljs.core.chunk_first(seq__59915_60085__$1);
var G__60087 = cljs.core.chunk_rest(seq__59915_60085__$1);
var G__60088 = c__5568__auto___60086;
var G__60089 = cljs.core.count(c__5568__auto___60086);
var G__60090 = (0);
seq__59915_60066 = G__60087;
chunk__59917_60067 = G__60088;
count__59918_60068 = G__60089;
i__59919_60069 = G__60090;
continue;
} else {
var vec__59953_60091 = cljs.core.first(seq__59915_60085__$1);
var test_ns_60092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59953_60091,(0),null);
var ns_info_60093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59953_60091,(1),null);
var map__59957_60094 = ns_info_60093;
var map__59957_60095__$1 = cljs.core.__destructure_map(map__59957_60094);
var fixtures_60096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59957_60095__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___60097__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_60096);
if(cljs.core.truth_(temp__5804__auto___60097__$1)){
var fix_60098 = temp__5804__auto___60097__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60092,fix_60098], 0));
} else {
}

var temp__5804__auto___60099__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_60096);
if(cljs.core.truth_(temp__5804__auto___60099__$1)){
var fix_60100 = temp__5804__auto___60099__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_60092,fix_60100], 0));
} else {
}


var G__60101 = cljs.core.next(seq__59915_60085__$1);
var G__60102 = null;
var G__60103 = (0);
var G__60104 = (0);
seq__59915_60066 = G__60101;
chunk__59917_60067 = G__60102;
count__59918_60068 = G__60103;
i__59919_60069 = G__60104;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59905_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__59905_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__59969 = cljs.test.get_current_env();
var map__59969__$1 = cljs.core.__destructure_map(map__59969);
var env = map__59969__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59969__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59969__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__59980 = arguments.length;
switch (G__59980) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__59982 = arguments.length;
switch (G__59982) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__59983 = shadow.test.env.get_test_ns_info(ns);
var map__59983__$1 = cljs.core.__destructure_map(map__59983);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59983__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__59987 = arguments.length;
switch (G__59987) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59984_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__59984_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__60028 = arguments.length;
switch (G__60028) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60019_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60019_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
