goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49296){
var map__49297 = p__49296;
var map__49297__$1 = cljs.core.__destructure_map(map__49297);
var m = map__49297__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49303_49569 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49304_49570 = null;
var count__49305_49571 = (0);
var i__49306_49572 = (0);
while(true){
if((i__49306_49572 < count__49305_49571)){
var f_49577 = chunk__49304_49570.cljs$core$IIndexed$_nth$arity$2(null,i__49306_49572);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49577], 0));


var G__49578 = seq__49303_49569;
var G__49579 = chunk__49304_49570;
var G__49580 = count__49305_49571;
var G__49581 = (i__49306_49572 + (1));
seq__49303_49569 = G__49578;
chunk__49304_49570 = G__49579;
count__49305_49571 = G__49580;
i__49306_49572 = G__49581;
continue;
} else {
var temp__5804__auto___49582 = cljs.core.seq(seq__49303_49569);
if(temp__5804__auto___49582){
var seq__49303_49584__$1 = temp__5804__auto___49582;
if(cljs.core.chunked_seq_QMARK_(seq__49303_49584__$1)){
var c__5568__auto___49585 = cljs.core.chunk_first(seq__49303_49584__$1);
var G__49587 = cljs.core.chunk_rest(seq__49303_49584__$1);
var G__49588 = c__5568__auto___49585;
var G__49589 = cljs.core.count(c__5568__auto___49585);
var G__49590 = (0);
seq__49303_49569 = G__49587;
chunk__49304_49570 = G__49588;
count__49305_49571 = G__49589;
i__49306_49572 = G__49590;
continue;
} else {
var f_49592 = cljs.core.first(seq__49303_49584__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49592], 0));


var G__49594 = cljs.core.next(seq__49303_49584__$1);
var G__49595 = null;
var G__49596 = (0);
var G__49597 = (0);
seq__49303_49569 = G__49594;
chunk__49304_49570 = G__49595;
count__49305_49571 = G__49596;
i__49306_49572 = G__49597;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49599 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49599], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49599)))?cljs.core.second(arglists_49599):arglists_49599)], 0));
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
var seq__49307_49606 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49308_49607 = null;
var count__49309_49608 = (0);
var i__49310_49609 = (0);
while(true){
if((i__49310_49609 < count__49309_49608)){
var vec__49319_49610 = chunk__49308_49607.cljs$core$IIndexed$_nth$arity$2(null,i__49310_49609);
var name_49611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49319_49610,(0),null);
var map__49322_49612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49319_49610,(1),null);
var map__49322_49613__$1 = cljs.core.__destructure_map(map__49322_49612);
var doc_49614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49322_49613__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49322_49613__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49611], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49615], 0));

if(cljs.core.truth_(doc_49614)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49614], 0));
} else {
}


var G__49620 = seq__49307_49606;
var G__49621 = chunk__49308_49607;
var G__49622 = count__49309_49608;
var G__49623 = (i__49310_49609 + (1));
seq__49307_49606 = G__49620;
chunk__49308_49607 = G__49621;
count__49309_49608 = G__49622;
i__49310_49609 = G__49623;
continue;
} else {
var temp__5804__auto___49624 = cljs.core.seq(seq__49307_49606);
if(temp__5804__auto___49624){
var seq__49307_49625__$1 = temp__5804__auto___49624;
if(cljs.core.chunked_seq_QMARK_(seq__49307_49625__$1)){
var c__5568__auto___49626 = cljs.core.chunk_first(seq__49307_49625__$1);
var G__49627 = cljs.core.chunk_rest(seq__49307_49625__$1);
var G__49628 = c__5568__auto___49626;
var G__49629 = cljs.core.count(c__5568__auto___49626);
var G__49630 = (0);
seq__49307_49606 = G__49627;
chunk__49308_49607 = G__49628;
count__49309_49608 = G__49629;
i__49310_49609 = G__49630;
continue;
} else {
var vec__49323_49631 = cljs.core.first(seq__49307_49625__$1);
var name_49632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49323_49631,(0),null);
var map__49326_49633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49323_49631,(1),null);
var map__49326_49634__$1 = cljs.core.__destructure_map(map__49326_49633);
var doc_49635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326_49634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49326_49634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49636], 0));

if(cljs.core.truth_(doc_49635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49635], 0));
} else {
}


var G__49637 = cljs.core.next(seq__49307_49625__$1);
var G__49638 = null;
var G__49639 = (0);
var G__49640 = (0);
seq__49307_49606 = G__49637;
chunk__49308_49607 = G__49638;
count__49309_49608 = G__49639;
i__49310_49609 = G__49640;
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

var seq__49332 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49333 = null;
var count__49334 = (0);
var i__49335 = (0);
while(true){
if((i__49335 < count__49334)){
var role = chunk__49333.cljs$core$IIndexed$_nth$arity$2(null,i__49335);
var temp__5804__auto___49653__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___49653__$1)){
var spec_49655 = temp__5804__auto___49653__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49655)], 0));
} else {
}


var G__49656 = seq__49332;
var G__49657 = chunk__49333;
var G__49658 = count__49334;
var G__49659 = (i__49335 + (1));
seq__49332 = G__49656;
chunk__49333 = G__49657;
count__49334 = G__49658;
i__49335 = G__49659;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__49332);
if(temp__5804__auto____$1){
var seq__49332__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49332__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49332__$1);
var G__49662 = cljs.core.chunk_rest(seq__49332__$1);
var G__49663 = c__5568__auto__;
var G__49664 = cljs.core.count(c__5568__auto__);
var G__49665 = (0);
seq__49332 = G__49662;
chunk__49333 = G__49663;
count__49334 = G__49664;
i__49335 = G__49665;
continue;
} else {
var role = cljs.core.first(seq__49332__$1);
var temp__5804__auto___49667__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___49667__$2)){
var spec_49669 = temp__5804__auto___49667__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49669)], 0));
} else {
}


var G__49671 = cljs.core.next(seq__49332__$1);
var G__49672 = null;
var G__49673 = (0);
var G__49674 = (0);
seq__49332 = G__49671;
chunk__49333 = G__49672;
count__49334 = G__49673;
i__49335 = G__49674;
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
var G__49675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49676 = cljs.core.ex_cause(t);
via = G__49675;
t = G__49676;
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
var map__49346 = datafied_throwable;
var map__49346__$1 = cljs.core.__destructure_map(map__49346);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49346__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49346__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49346__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49347 = cljs.core.last(via);
var map__49347__$1 = cljs.core.__destructure_map(map__49347);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49347__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49347__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49347__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49348 = data;
var map__49348__$1 = cljs.core.__destructure_map(map__49348);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49348__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49348__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49348__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49349 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49349__$1 = cljs.core.__destructure_map(map__49349);
var top_data = map__49349__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49349__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49350 = phase;
var G__49350__$1 = (((G__49350 instanceof cljs.core.Keyword))?G__49350.fqn:null);
switch (G__49350__$1) {
case "read-source":
var map__49351 = data;
var map__49351__$1 = cljs.core.__destructure_map(map__49351);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49351__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49351__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49352 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49352__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49352,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49352);
var G__49352__$2 = (cljs.core.truth_((function (){var fexpr__49353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49353.cljs$core$IFn$_invoke$arity$1 ? fexpr__49353.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49353.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49352__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49352__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49352__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49358 = top_data;
var G__49358__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49358,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49358);
var G__49358__$2 = (cljs.core.truth_((function (){var fexpr__49363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49363.cljs$core$IFn$_invoke$arity$1 ? fexpr__49363.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49363.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49358__$1);
var G__49358__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49358__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49358__$2);
var G__49358__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49358__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49358__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49358__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49358__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49365 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49365,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49365,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49365,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49365,(3),null);
var G__49368 = top_data;
var G__49368__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49368,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49368);
var G__49368__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49368__$1);
var G__49368__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49368__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49368__$2);
var G__49368__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49368__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49368__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49368__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49368__$4;
}

break;
case "execution":
var vec__49369 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49369,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49369,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49369,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49369,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49345_SHARP_){
var or__5045__auto__ = (p1__49345_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__49378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49378.cljs$core$IFn$_invoke$arity$1 ? fexpr__49378.cljs$core$IFn$_invoke$arity$1(p1__49345_SHARP_) : fexpr__49378.call(null,p1__49345_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__49379 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49379__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49379,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49379);
var G__49379__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49379__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49379__$1);
var G__49379__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49379__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49379__$2);
var G__49379__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49379__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49379__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49379__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49379__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49350__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49384){
var map__49385 = p__49384;
var map__49385__$1 = cljs.core.__destructure_map(map__49385);
var triage_data = map__49385__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49385__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49416 = phase;
var G__49416__$1 = (((G__49416 instanceof cljs.core.Keyword))?G__49416.fqn:null);
switch (G__49416__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49417 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49419 = loc;
var G__49420 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49421_49806 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49422_49807 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49423_49808 = true;
var _STAR_print_fn_STAR__temp_val__49424_49809 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49423_49808);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49424_49809);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49381_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49381_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49422_49807);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49421_49806);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49417,G__49418,G__49419,G__49420) : format.call(null,G__49417,G__49418,G__49419,G__49420));

break;
case "macroexpansion":
var G__49427 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49428 = cause_type;
var G__49429 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49430 = loc;
var G__49431 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49427,G__49428,G__49429,G__49430,G__49431) : format.call(null,G__49427,G__49428,G__49429,G__49430,G__49431));

break;
case "compile-syntax-check":
var G__49432 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49433 = cause_type;
var G__49434 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49435 = loc;
var G__49436 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49432,G__49433,G__49434,G__49435,G__49436) : format.call(null,G__49432,G__49433,G__49434,G__49435,G__49436));

break;
case "compilation":
var G__49437 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49438 = cause_type;
var G__49439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49440 = loc;
var G__49441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49437,G__49438,G__49439,G__49440,G__49441) : format.call(null,G__49437,G__49438,G__49439,G__49440,G__49441));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49447 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49448 = symbol;
var G__49449 = loc;
var G__49450 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49527_49815 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49528_49816 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49529_49817 = true;
var _STAR_print_fn_STAR__temp_val__49530_49819 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49529_49817);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49530_49819);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49382_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49382_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49528_49816);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49527_49815);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49447,G__49448,G__49449,G__49450) : format.call(null,G__49447,G__49448,G__49449,G__49450));
} else {
var G__49553 = "Execution error%s at %s(%s).\n%s\n";
var G__49554 = cause_type;
var G__49555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49556 = loc;
var G__49557 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49553,G__49554,G__49555,G__49556,G__49557) : format.call(null,G__49553,G__49554,G__49555,G__49556,G__49557));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49416__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
