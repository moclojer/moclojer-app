goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36133){
var map__36135 = p__36133;
var map__36135__$1 = cljs.core.__destructure_map(map__36135);
var m = map__36135__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36142_36442 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36143_36443 = null;
var count__36144_36444 = (0);
var i__36145_36445 = (0);
while(true){
if((i__36145_36445 < count__36144_36444)){
var f_36447 = chunk__36143_36443.cljs$core$IIndexed$_nth$arity$2(null,i__36145_36445);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36447], 0));


var G__36449 = seq__36142_36442;
var G__36450 = chunk__36143_36443;
var G__36451 = count__36144_36444;
var G__36452 = (i__36145_36445 + (1));
seq__36142_36442 = G__36449;
chunk__36143_36443 = G__36450;
count__36144_36444 = G__36451;
i__36145_36445 = G__36452;
continue;
} else {
var temp__5804__auto___36453 = cljs.core.seq(seq__36142_36442);
if(temp__5804__auto___36453){
var seq__36142_36454__$1 = temp__5804__auto___36453;
if(cljs.core.chunked_seq_QMARK_(seq__36142_36454__$1)){
var c__5568__auto___36455 = cljs.core.chunk_first(seq__36142_36454__$1);
var G__36456 = cljs.core.chunk_rest(seq__36142_36454__$1);
var G__36457 = c__5568__auto___36455;
var G__36458 = cljs.core.count(c__5568__auto___36455);
var G__36459 = (0);
seq__36142_36442 = G__36456;
chunk__36143_36443 = G__36457;
count__36144_36444 = G__36458;
i__36145_36445 = G__36459;
continue;
} else {
var f_36460 = cljs.core.first(seq__36142_36454__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36460], 0));


var G__36461 = cljs.core.next(seq__36142_36454__$1);
var G__36462 = null;
var G__36463 = (0);
var G__36464 = (0);
seq__36142_36442 = G__36461;
chunk__36143_36443 = G__36462;
count__36144_36444 = G__36463;
i__36145_36445 = G__36464;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36465 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36465], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36465)))?cljs.core.second(arglists_36465):arglists_36465)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36168_36474 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36169_36475 = null;
var count__36170_36476 = (0);
var i__36171_36477 = (0);
while(true){
if((i__36171_36477 < count__36170_36476)){
var vec__36183_36479 = chunk__36169_36475.cljs$core$IIndexed$_nth$arity$2(null,i__36171_36477);
var name_36480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36183_36479,(0),null);
var map__36186_36481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36183_36479,(1),null);
var map__36186_36482__$1 = cljs.core.__destructure_map(map__36186_36481);
var doc_36483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186_36482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186_36482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36480], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36484], 0));

if(cljs.core.truth_(doc_36483)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36483], 0));
} else {
}


var G__36492 = seq__36168_36474;
var G__36493 = chunk__36169_36475;
var G__36494 = count__36170_36476;
var G__36495 = (i__36171_36477 + (1));
seq__36168_36474 = G__36492;
chunk__36169_36475 = G__36493;
count__36170_36476 = G__36494;
i__36171_36477 = G__36495;
continue;
} else {
var temp__5804__auto___36497 = cljs.core.seq(seq__36168_36474);
if(temp__5804__auto___36497){
var seq__36168_36498__$1 = temp__5804__auto___36497;
if(cljs.core.chunked_seq_QMARK_(seq__36168_36498__$1)){
var c__5568__auto___36499 = cljs.core.chunk_first(seq__36168_36498__$1);
var G__36500 = cljs.core.chunk_rest(seq__36168_36498__$1);
var G__36501 = c__5568__auto___36499;
var G__36502 = cljs.core.count(c__5568__auto___36499);
var G__36503 = (0);
seq__36168_36474 = G__36500;
chunk__36169_36475 = G__36501;
count__36170_36476 = G__36502;
i__36171_36477 = G__36503;
continue;
} else {
var vec__36187_36504 = cljs.core.first(seq__36168_36498__$1);
var name_36505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187_36504,(0),null);
var map__36190_36506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187_36504,(1),null);
var map__36190_36507__$1 = cljs.core.__destructure_map(map__36190_36506);
var doc_36508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36190_36507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36190_36507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36505], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36509], 0));

if(cljs.core.truth_(doc_36508)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36508], 0));
} else {
}


var G__36512 = cljs.core.next(seq__36168_36498__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__36168_36474 = G__36512;
chunk__36169_36475 = G__36513;
count__36170_36476 = G__36514;
i__36171_36477 = G__36515;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36194 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36195 = null;
var count__36196 = (0);
var i__36197 = (0);
while(true){
if((i__36197 < count__36196)){
var role = chunk__36195.cljs$core$IIndexed$_nth$arity$2(null,i__36197);
var temp__5804__auto___36521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36521__$1)){
var spec_36522 = temp__5804__auto___36521__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36522)], 0));
} else {
}


var G__36525 = seq__36194;
var G__36526 = chunk__36195;
var G__36527 = count__36196;
var G__36528 = (i__36197 + (1));
seq__36194 = G__36525;
chunk__36195 = G__36526;
count__36196 = G__36527;
i__36197 = G__36528;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36194);
if(temp__5804__auto____$1){
var seq__36194__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36194__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36194__$1);
var G__36530 = cljs.core.chunk_rest(seq__36194__$1);
var G__36531 = c__5568__auto__;
var G__36532 = cljs.core.count(c__5568__auto__);
var G__36533 = (0);
seq__36194 = G__36530;
chunk__36195 = G__36531;
count__36196 = G__36532;
i__36197 = G__36533;
continue;
} else {
var role = cljs.core.first(seq__36194__$1);
var temp__5804__auto___36534__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36534__$2)){
var spec_36535 = temp__5804__auto___36534__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36535)], 0));
} else {
}


var G__36536 = cljs.core.next(seq__36194__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__36194 = G__36536;
chunk__36195 = G__36537;
count__36196 = G__36538;
i__36197 = G__36539;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36543 = cljs.core.ex_cause(t);
via = G__36542;
t = G__36543;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36231 = datafied_throwable;
var map__36231__$1 = cljs.core.__destructure_map(map__36231);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36231__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36232 = cljs.core.last(via);
var map__36232__$1 = cljs.core.__destructure_map(map__36232);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36232__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36233 = data;
var map__36233__$1 = cljs.core.__destructure_map(map__36233);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36234 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36234__$1 = cljs.core.__destructure_map(map__36234);
var top_data = map__36234__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36238 = phase;
var G__36238__$1 = (((G__36238 instanceof cljs.core.Keyword))?G__36238.fqn:null);
switch (G__36238__$1) {
case "read-source":
var map__36239 = data;
var map__36239__$1 = cljs.core.__destructure_map(map__36239);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36240 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36240__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36240,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36240);
var G__36240__$2 = (cljs.core.truth_((function (){var fexpr__36242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36242.cljs$core$IFn$_invoke$arity$1 ? fexpr__36242.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36242.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36240__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36240__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36240__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36245 = top_data;
var G__36245__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36245,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36245);
var G__36245__$2 = (cljs.core.truth_((function (){var fexpr__36246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36246.cljs$core$IFn$_invoke$arity$1 ? fexpr__36246.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36246.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36245__$1);
var G__36245__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36245__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36245__$2);
var G__36245__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36245__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36245__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36245__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36245__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36248 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(3),null);
var G__36252 = top_data;
var G__36252__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36252);
var G__36252__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36252__$1);
var G__36252__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36252__$2);
var G__36252__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36252__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36252__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36252__$4;
}

break;
case "execution":
var vec__36262 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36262,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36226_SHARP_){
var or__5045__auto__ = (p1__36226_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36267.cljs$core$IFn$_invoke$arity$1 ? fexpr__36267.cljs$core$IFn$_invoke$arity$1(p1__36226_SHARP_) : fexpr__36267.call(null,p1__36226_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36268__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36268);
var G__36268__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36268__$1);
var G__36268__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36268__$2);
var G__36268__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36268__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36238__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36277){
var map__36278 = p__36277;
var map__36278__$1 = cljs.core.__destructure_map(map__36278);
var triage_data = map__36278__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36285 = phase;
var G__36285__$1 = (((G__36285 instanceof cljs.core.Keyword))?G__36285.fqn:null);
switch (G__36285__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36291 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36292 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36293 = loc;
var G__36294 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36308_36595 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36309_36596 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36310_36597 = true;
var _STAR_print_fn_STAR__temp_val__36311_36598 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36310_36597);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36311_36598);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36275_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36275_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36309_36596);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36308_36595);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36291,G__36292,G__36293,G__36294) : format.call(null,G__36291,G__36292,G__36293,G__36294));

break;
case "macroexpansion":
var G__36321 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36322 = cause_type;
var G__36323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36324 = loc;
var G__36325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36321,G__36322,G__36323,G__36324,G__36325) : format.call(null,G__36321,G__36322,G__36323,G__36324,G__36325));

break;
case "compile-syntax-check":
var G__36327 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36328 = cause_type;
var G__36329 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36330 = loc;
var G__36331 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36327,G__36328,G__36329,G__36330,G__36331) : format.call(null,G__36327,G__36328,G__36329,G__36330,G__36331));

break;
case "compilation":
var G__36337 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36338 = cause_type;
var G__36339 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36340 = loc;
var G__36341 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36337,G__36338,G__36339,G__36340,G__36341) : format.call(null,G__36337,G__36338,G__36339,G__36340,G__36341));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36354 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36355 = symbol;
var G__36356 = loc;
var G__36357 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36363_36623 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36364_36624 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36365_36625 = true;
var _STAR_print_fn_STAR__temp_val__36366_36626 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36365_36625);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36366_36626);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36276_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36276_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36364_36624);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36363_36623);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36354,G__36355,G__36356,G__36357) : format.call(null,G__36354,G__36355,G__36356,G__36357));
} else {
var G__36392 = "Execution error%s at %s(%s).\n%s\n";
var G__36393 = cause_type;
var G__36394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36395 = loc;
var G__36396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36392,G__36393,G__36394,G__36395,G__36396) : format.call(null,G__36392,G__36393,G__36394,G__36395,G__36396));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36285__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
