goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__51245){
var vec__51247 = p__51245;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51247,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51247,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__51250 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__51250__$1 = (((G__51250 instanceof cljs.core.Keyword))?G__51250.fqn:null);
switch (G__51250__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__51252 = (function (){
var seq__51253 = cljs.core.seq(vars__$1);
var chunk__51254 = null;
var count__51255 = (0);
var i__51256 = (0);
while(true){
if((i__51256 < count__51255)){
var v = chunk__51254.cljs$core$IIndexed$_nth$arity$2(null,i__51256);
var temp__5804__auto___51303 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___51303)){
var t_51304 = temp__5804__auto___51303;
var G__51259_51305 = ((function (seq__51253,chunk__51254,count__51255,i__51256,t_51304,temp__5804__auto___51303,v,each_fixture_fn,G__51250,G__51250__$1,env,once_fixtures,each_fixtures,vec__51247,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_51304)));
});})(seq__51253,chunk__51254,count__51255,i__51256,t_51304,temp__5804__auto___51303,v,each_fixture_fn,G__51250,G__51250__$1,env,once_fixtures,each_fixtures,vec__51247,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__51259_51305) : each_fixture_fn.call(null,G__51259_51305));
} else {
}


var G__51306 = seq__51253;
var G__51307 = chunk__51254;
var G__51308 = count__51255;
var G__51309 = (i__51256 + (1));
seq__51253 = G__51306;
chunk__51254 = G__51307;
count__51255 = G__51308;
i__51256 = G__51309;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51253);
if(temp__5804__auto__){
var seq__51253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51253__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51253__$1);
var G__51310 = cljs.core.chunk_rest(seq__51253__$1);
var G__51311 = c__5568__auto__;
var G__51312 = cljs.core.count(c__5568__auto__);
var G__51313 = (0);
seq__51253 = G__51310;
chunk__51254 = G__51311;
count__51255 = G__51312;
i__51256 = G__51313;
continue;
} else {
var v = cljs.core.first(seq__51253__$1);
var temp__5804__auto___51314__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___51314__$1)){
var t_51315 = temp__5804__auto___51314__$1;
var G__51260_51316 = ((function (seq__51253,chunk__51254,count__51255,i__51256,t_51315,temp__5804__auto___51314__$1,v,seq__51253__$1,temp__5804__auto__,each_fixture_fn,G__51250,G__51250__$1,env,once_fixtures,each_fixtures,vec__51247,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_51315)));
});})(seq__51253,chunk__51254,count__51255,i__51256,t_51315,temp__5804__auto___51314__$1,v,seq__51253__$1,temp__5804__auto__,each_fixture_fn,G__51250,G__51250__$1,env,once_fixtures,each_fixtures,vec__51247,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__51260_51316) : each_fixture_fn.call(null,G__51260_51316));
} else {
}


var G__51317 = cljs.core.next(seq__51253__$1);
var G__51318 = null;
var G__51319 = (0);
var G__51320 = (0);
seq__51253 = G__51317;
chunk__51254 = G__51318;
count__51255 = G__51319;
i__51256 = G__51320;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__51251 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__51251.cljs$core$IFn$_invoke$arity$1 ? fexpr__51251.cljs$core$IFn$_invoke$arity$1(G__51252) : fexpr__51251.call(null,G__51252));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51250__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__51241_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51241_SHARP_));
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

var map__51261 = shadow.test.env.get_test_ns_info(ns);
var map__51261__$1 = cljs.core.__destructure_map(map__51261);
var test_ns = map__51261__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51261__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__51265,vars){
var map__51266 = p__51265;
var map__51266__$1 = cljs.core.__destructure_map(map__51266);
var env = map__51266__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51266__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__51267_51321 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__51269_51322 = null;
var count__51270_51323 = (0);
var i__51271_51324 = (0);
while(true){
if((i__51271_51324 < count__51270_51323)){
var vec__51281_51325 = chunk__51269_51322.cljs$core$IIndexed$_nth$arity$2(null,i__51271_51324);
var test_ns_51326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51281_51325,(0),null);
var ns_info_51327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51281_51325,(1),null);
var map__51284_51328 = ns_info_51327;
var map__51284_51329__$1 = cljs.core.__destructure_map(map__51284_51328);
var fixtures_51330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51284_51329__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___51331 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_51330);
if(cljs.core.truth_(temp__5804__auto___51331)){
var fix_51332 = temp__5804__auto___51331;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51326,fix_51332], 0));
} else {
}

var temp__5804__auto___51333 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_51330);
if(cljs.core.truth_(temp__5804__auto___51333)){
var fix_51334 = temp__5804__auto___51333;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51326,fix_51334], 0));
} else {
}


var G__51335 = seq__51267_51321;
var G__51336 = chunk__51269_51322;
var G__51337 = count__51270_51323;
var G__51338 = (i__51271_51324 + (1));
seq__51267_51321 = G__51335;
chunk__51269_51322 = G__51336;
count__51270_51323 = G__51337;
i__51271_51324 = G__51338;
continue;
} else {
var temp__5804__auto___51339 = cljs.core.seq(seq__51267_51321);
if(temp__5804__auto___51339){
var seq__51267_51340__$1 = temp__5804__auto___51339;
if(cljs.core.chunked_seq_QMARK_(seq__51267_51340__$1)){
var c__5568__auto___51341 = cljs.core.chunk_first(seq__51267_51340__$1);
var G__51342 = cljs.core.chunk_rest(seq__51267_51340__$1);
var G__51343 = c__5568__auto___51341;
var G__51344 = cljs.core.count(c__5568__auto___51341);
var G__51345 = (0);
seq__51267_51321 = G__51342;
chunk__51269_51322 = G__51343;
count__51270_51323 = G__51344;
i__51271_51324 = G__51345;
continue;
} else {
var vec__51286_51346 = cljs.core.first(seq__51267_51340__$1);
var test_ns_51347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51286_51346,(0),null);
var ns_info_51348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51286_51346,(1),null);
var map__51289_51349 = ns_info_51348;
var map__51289_51350__$1 = cljs.core.__destructure_map(map__51289_51349);
var fixtures_51351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51289_51350__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___51352__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_51351);
if(cljs.core.truth_(temp__5804__auto___51352__$1)){
var fix_51353 = temp__5804__auto___51352__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51347,fix_51353], 0));
} else {
}

var temp__5804__auto___51354__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_51351);
if(cljs.core.truth_(temp__5804__auto___51354__$1)){
var fix_51355 = temp__5804__auto___51354__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_51347,fix_51355], 0));
} else {
}


var G__51356 = cljs.core.next(seq__51267_51340__$1);
var G__51357 = null;
var G__51358 = (0);
var G__51359 = (0);
seq__51267_51321 = G__51356;
chunk__51269_51322 = G__51357;
count__51270_51323 = G__51358;
i__51271_51324 = G__51359;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51264_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51264_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__51290 = cljs.test.get_current_env();
var map__51290__$1 = cljs.core.__destructure_map(map__51290);
var env = map__51290__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51290__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51290__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__51292 = arguments.length;
switch (G__51292) {
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
var G__51294 = arguments.length;
switch (G__51294) {
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
var map__51295 = shadow.test.env.get_test_ns_info(ns);
var map__51295__$1 = cljs.core.__destructure_map(map__51295);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51295__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__51298 = arguments.length;
switch (G__51298) {
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

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51296_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__51296_SHARP_)));
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
var G__51301 = arguments.length;
switch (G__51301) {
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
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51299_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51299_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
