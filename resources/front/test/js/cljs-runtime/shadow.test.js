goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__54299){
var vec__54301 = p__54299;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54301,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54301,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__54304 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__54304__$1 = (((G__54304 instanceof cljs.core.Keyword))?G__54304.fqn:null);
switch (G__54304__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__54306 = (function (){
var seq__54307 = cljs.core.seq(vars__$1);
var chunk__54308 = null;
var count__54309 = (0);
var i__54310 = (0);
while(true){
if((i__54310 < count__54309)){
var v = chunk__54308.cljs$core$IIndexed$_nth$arity$2(null,i__54310);
var temp__5804__auto___54542 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___54542)){
var t_54543 = temp__5804__auto___54542;
var G__54329_54544 = ((function (seq__54307,chunk__54308,count__54309,i__54310,t_54543,temp__5804__auto___54542,v,each_fixture_fn,G__54304,G__54304__$1,env,once_fixtures,each_fixtures,vec__54301,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_54543)));
});})(seq__54307,chunk__54308,count__54309,i__54310,t_54543,temp__5804__auto___54542,v,each_fixture_fn,G__54304,G__54304__$1,env,once_fixtures,each_fixtures,vec__54301,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__54329_54544) : each_fixture_fn.call(null,G__54329_54544));
} else {
}


var G__54545 = seq__54307;
var G__54546 = chunk__54308;
var G__54547 = count__54309;
var G__54548 = (i__54310 + (1));
seq__54307 = G__54545;
chunk__54308 = G__54546;
count__54309 = G__54547;
i__54310 = G__54548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54307);
if(temp__5804__auto__){
var seq__54307__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54307__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54307__$1);
var G__54550 = cljs.core.chunk_rest(seq__54307__$1);
var G__54551 = c__5568__auto__;
var G__54552 = cljs.core.count(c__5568__auto__);
var G__54553 = (0);
seq__54307 = G__54550;
chunk__54308 = G__54551;
count__54309 = G__54552;
i__54310 = G__54553;
continue;
} else {
var v = cljs.core.first(seq__54307__$1);
var temp__5804__auto___54554__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___54554__$1)){
var t_54555 = temp__5804__auto___54554__$1;
var G__54332_54556 = ((function (seq__54307,chunk__54308,count__54309,i__54310,t_54555,temp__5804__auto___54554__$1,v,seq__54307__$1,temp__5804__auto__,each_fixture_fn,G__54304,G__54304__$1,env,once_fixtures,each_fixtures,vec__54301,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_54555)));
});})(seq__54307,chunk__54308,count__54309,i__54310,t_54555,temp__5804__auto___54554__$1,v,seq__54307__$1,temp__5804__auto__,each_fixture_fn,G__54304,G__54304__$1,env,once_fixtures,each_fixtures,vec__54301,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__54332_54556) : each_fixture_fn.call(null,G__54332_54556));
} else {
}


var G__54557 = cljs.core.next(seq__54307__$1);
var G__54558 = null;
var G__54559 = (0);
var G__54560 = (0);
seq__54307 = G__54557;
chunk__54308 = G__54558;
count__54309 = G__54559;
i__54310 = G__54560;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__54305 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__54305.cljs$core$IFn$_invoke$arity$1 ? fexpr__54305.cljs$core$IFn$_invoke$arity$1(G__54306) : fexpr__54305.call(null,G__54306));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54304__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__54295_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__54295_SHARP_));
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

var map__54335 = shadow.test.env.get_test_ns_info(ns);
var map__54335__$1 = cljs.core.__destructure_map(map__54335);
var test_ns = map__54335__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54335__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__54337,vars){
var map__54338 = p__54337;
var map__54338__$1 = cljs.core.__destructure_map(map__54338);
var env = map__54338__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54338__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__54342_54562 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__54344_54563 = null;
var count__54345_54564 = (0);
var i__54346_54565 = (0);
while(true){
if((i__54346_54565 < count__54345_54564)){
var vec__54396_54566 = chunk__54344_54563.cljs$core$IIndexed$_nth$arity$2(null,i__54346_54565);
var test_ns_54567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54396_54566,(0),null);
var ns_info_54568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54396_54566,(1),null);
var map__54399_54569 = ns_info_54568;
var map__54399_54570__$1 = cljs.core.__destructure_map(map__54399_54569);
var fixtures_54571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54399_54570__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___54572 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_54571);
if(cljs.core.truth_(temp__5804__auto___54572)){
var fix_54573 = temp__5804__auto___54572;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_54567,fix_54573], 0));
} else {
}

var temp__5804__auto___54577 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_54571);
if(cljs.core.truth_(temp__5804__auto___54577)){
var fix_54578 = temp__5804__auto___54577;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_54567,fix_54578], 0));
} else {
}


var G__54579 = seq__54342_54562;
var G__54580 = chunk__54344_54563;
var G__54581 = count__54345_54564;
var G__54582 = (i__54346_54565 + (1));
seq__54342_54562 = G__54579;
chunk__54344_54563 = G__54580;
count__54345_54564 = G__54581;
i__54346_54565 = G__54582;
continue;
} else {
var temp__5804__auto___54584 = cljs.core.seq(seq__54342_54562);
if(temp__5804__auto___54584){
var seq__54342_54585__$1 = temp__5804__auto___54584;
if(cljs.core.chunked_seq_QMARK_(seq__54342_54585__$1)){
var c__5568__auto___54586 = cljs.core.chunk_first(seq__54342_54585__$1);
var G__54587 = cljs.core.chunk_rest(seq__54342_54585__$1);
var G__54588 = c__5568__auto___54586;
var G__54589 = cljs.core.count(c__5568__auto___54586);
var G__54590 = (0);
seq__54342_54562 = G__54587;
chunk__54344_54563 = G__54588;
count__54345_54564 = G__54589;
i__54346_54565 = G__54590;
continue;
} else {
var vec__54419_54591 = cljs.core.first(seq__54342_54585__$1);
var test_ns_54592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419_54591,(0),null);
var ns_info_54593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54419_54591,(1),null);
var map__54422_54594 = ns_info_54593;
var map__54422_54595__$1 = cljs.core.__destructure_map(map__54422_54594);
var fixtures_54596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54422_54595__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___54597__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_54596);
if(cljs.core.truth_(temp__5804__auto___54597__$1)){
var fix_54598 = temp__5804__auto___54597__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_54592,fix_54598], 0));
} else {
}

var temp__5804__auto___54599__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_54596);
if(cljs.core.truth_(temp__5804__auto___54599__$1)){
var fix_54600 = temp__5804__auto___54599__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_54592,fix_54600], 0));
} else {
}


var G__54601 = cljs.core.next(seq__54342_54585__$1);
var G__54602 = null;
var G__54603 = (0);
var G__54604 = (0);
seq__54342_54562 = G__54601;
chunk__54344_54563 = G__54602;
count__54345_54564 = G__54603;
i__54346_54565 = G__54604;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54336_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__54336_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__54459 = cljs.test.get_current_env();
var map__54459__$1 = cljs.core.__destructure_map(map__54459);
var env = map__54459__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54459__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54459__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__54461 = arguments.length;
switch (G__54461) {
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
var G__54465 = arguments.length;
switch (G__54465) {
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
var map__54495 = shadow.test.env.get_test_ns_info(ns);
var map__54495__$1 = cljs.core.__destructure_map(map__54495);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54495__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__54500 = arguments.length;
switch (G__54500) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54498_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__54498_SHARP_)));
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
var G__54504 = arguments.length;
switch (G__54504) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54502_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54502_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
