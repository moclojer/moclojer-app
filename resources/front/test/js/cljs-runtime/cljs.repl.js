goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56223){
var map__56224 = p__56223;
var map__56224__$1 = cljs.core.__destructure_map(map__56224);
var m = map__56224__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56225_56438 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56226_56439 = null;
var count__56227_56440 = (0);
var i__56228_56441 = (0);
while(true){
if((i__56228_56441 < count__56227_56440)){
var f_56442 = chunk__56226_56439.cljs$core$IIndexed$_nth$arity$2(null,i__56228_56441);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56442], 0));


var G__56443 = seq__56225_56438;
var G__56444 = chunk__56226_56439;
var G__56445 = count__56227_56440;
var G__56446 = (i__56228_56441 + (1));
seq__56225_56438 = G__56443;
chunk__56226_56439 = G__56444;
count__56227_56440 = G__56445;
i__56228_56441 = G__56446;
continue;
} else {
var temp__5804__auto___56447 = cljs.core.seq(seq__56225_56438);
if(temp__5804__auto___56447){
var seq__56225_56448__$1 = temp__5804__auto___56447;
if(cljs.core.chunked_seq_QMARK_(seq__56225_56448__$1)){
var c__5568__auto___56449 = cljs.core.chunk_first(seq__56225_56448__$1);
var G__56450 = cljs.core.chunk_rest(seq__56225_56448__$1);
var G__56451 = c__5568__auto___56449;
var G__56452 = cljs.core.count(c__5568__auto___56449);
var G__56453 = (0);
seq__56225_56438 = G__56450;
chunk__56226_56439 = G__56451;
count__56227_56440 = G__56452;
i__56228_56441 = G__56453;
continue;
} else {
var f_56454 = cljs.core.first(seq__56225_56448__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56454], 0));


var G__56455 = cljs.core.next(seq__56225_56448__$1);
var G__56456 = null;
var G__56457 = (0);
var G__56458 = (0);
seq__56225_56438 = G__56455;
chunk__56226_56439 = G__56456;
count__56227_56440 = G__56457;
i__56228_56441 = G__56458;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56460 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56460], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56460)))?cljs.core.second(arglists_56460):arglists_56460)], 0));
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
var seq__56232_56461 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56233_56462 = null;
var count__56234_56463 = (0);
var i__56235_56464 = (0);
while(true){
if((i__56235_56464 < count__56234_56463)){
var vec__56246_56465 = chunk__56233_56462.cljs$core$IIndexed$_nth$arity$2(null,i__56235_56464);
var name_56466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56246_56465,(0),null);
var map__56249_56467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56246_56465,(1),null);
var map__56249_56468__$1 = cljs.core.__destructure_map(map__56249_56467);
var doc_56469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249_56468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249_56468__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56466], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56470], 0));

if(cljs.core.truth_(doc_56469)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56469], 0));
} else {
}


var G__56471 = seq__56232_56461;
var G__56472 = chunk__56233_56462;
var G__56473 = count__56234_56463;
var G__56474 = (i__56235_56464 + (1));
seq__56232_56461 = G__56471;
chunk__56233_56462 = G__56472;
count__56234_56463 = G__56473;
i__56235_56464 = G__56474;
continue;
} else {
var temp__5804__auto___56475 = cljs.core.seq(seq__56232_56461);
if(temp__5804__auto___56475){
var seq__56232_56476__$1 = temp__5804__auto___56475;
if(cljs.core.chunked_seq_QMARK_(seq__56232_56476__$1)){
var c__5568__auto___56477 = cljs.core.chunk_first(seq__56232_56476__$1);
var G__56478 = cljs.core.chunk_rest(seq__56232_56476__$1);
var G__56479 = c__5568__auto___56477;
var G__56480 = cljs.core.count(c__5568__auto___56477);
var G__56481 = (0);
seq__56232_56461 = G__56478;
chunk__56233_56462 = G__56479;
count__56234_56463 = G__56480;
i__56235_56464 = G__56481;
continue;
} else {
var vec__56255_56482 = cljs.core.first(seq__56232_56476__$1);
var name_56483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56255_56482,(0),null);
var map__56258_56484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56255_56482,(1),null);
var map__56258_56485__$1 = cljs.core.__destructure_map(map__56258_56484);
var doc_56486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56258_56485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56258_56485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56483], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56487], 0));

if(cljs.core.truth_(doc_56486)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56486], 0));
} else {
}


var G__56488 = cljs.core.next(seq__56232_56476__$1);
var G__56489 = null;
var G__56490 = (0);
var G__56491 = (0);
seq__56232_56461 = G__56488;
chunk__56233_56462 = G__56489;
count__56234_56463 = G__56490;
i__56235_56464 = G__56491;
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

var seq__56260 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56261 = null;
var count__56262 = (0);
var i__56263 = (0);
while(true){
if((i__56263 < count__56262)){
var role = chunk__56261.cljs$core$IIndexed$_nth$arity$2(null,i__56263);
var temp__5804__auto___56492__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___56492__$1)){
var spec_56495 = temp__5804__auto___56492__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56495)], 0));
} else {
}


var G__56496 = seq__56260;
var G__56497 = chunk__56261;
var G__56498 = count__56262;
var G__56499 = (i__56263 + (1));
seq__56260 = G__56496;
chunk__56261 = G__56497;
count__56262 = G__56498;
i__56263 = G__56499;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__56260);
if(temp__5804__auto____$1){
var seq__56260__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56260__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56260__$1);
var G__56500 = cljs.core.chunk_rest(seq__56260__$1);
var G__56501 = c__5568__auto__;
var G__56502 = cljs.core.count(c__5568__auto__);
var G__56503 = (0);
seq__56260 = G__56500;
chunk__56261 = G__56501;
count__56262 = G__56502;
i__56263 = G__56503;
continue;
} else {
var role = cljs.core.first(seq__56260__$1);
var temp__5804__auto___56504__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___56504__$2)){
var spec_56505 = temp__5804__auto___56504__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56505)], 0));
} else {
}


var G__56508 = cljs.core.next(seq__56260__$1);
var G__56509 = null;
var G__56510 = (0);
var G__56511 = (0);
seq__56260 = G__56508;
chunk__56261 = G__56509;
count__56262 = G__56510;
i__56263 = G__56511;
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
var G__56512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56513 = cljs.core.ex_cause(t);
via = G__56512;
t = G__56513;
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
var map__56358 = datafied_throwable;
var map__56358__$1 = cljs.core.__destructure_map(map__56358);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56358__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56359 = cljs.core.last(via);
var map__56359__$1 = cljs.core.__destructure_map(map__56359);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56359__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56360 = data;
var map__56360__$1 = cljs.core.__destructure_map(map__56360);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56360__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56361 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56361__$1 = cljs.core.__destructure_map(map__56361);
var top_data = map__56361__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56366 = phase;
var G__56366__$1 = (((G__56366 instanceof cljs.core.Keyword))?G__56366.fqn:null);
switch (G__56366__$1) {
case "read-source":
var map__56368 = data;
var map__56368__$1 = cljs.core.__destructure_map(map__56368);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56368__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56370__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56370);
var G__56370__$2 = (cljs.core.truth_((function (){var fexpr__56374 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56374.cljs$core$IFn$_invoke$arity$1 ? fexpr__56374.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56374.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56370__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56370__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56370__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56370__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56375 = top_data;
var G__56375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56375);
var G__56375__$2 = (cljs.core.truth_((function (){var fexpr__56376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56376.cljs$core$IFn$_invoke$arity$1 ? fexpr__56376.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56376.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56375__$1);
var G__56375__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56375__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56375__$2);
var G__56375__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56375__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56375__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56375__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56375__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56377 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377,(3),null);
var G__56381 = top_data;
var G__56381__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56381,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56381);
var G__56381__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56381__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56381__$1);
var G__56381__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56381__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56381__$2);
var G__56381__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56381__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56381__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56381__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56381__$4;
}

break;
case "execution":
var vec__56382 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56349_SHARP_){
var or__5045__auto__ = (p1__56349_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__56385 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56385.cljs$core$IFn$_invoke$arity$1 ? fexpr__56385.cljs$core$IFn$_invoke$arity$1(p1__56349_SHARP_) : fexpr__56385.call(null,p1__56349_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__56386 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56386__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56386,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56386);
var G__56386__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56386__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56386__$1);
var G__56386__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56386__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56386__$2);
var G__56386__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56386__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56386__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56386__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56386__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56366__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56397){
var map__56398 = p__56397;
var map__56398__$1 = cljs.core.__destructure_map(map__56398);
var triage_data = map__56398__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56398__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56400 = phase;
var G__56400__$1 = (((G__56400 instanceof cljs.core.Keyword))?G__56400.fqn:null);
switch (G__56400__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56401 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56403 = loc;
var G__56404 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56405_56531 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56406_56532 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56407_56533 = true;
var _STAR_print_fn_STAR__temp_val__56408_56534 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56407_56533);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56408_56534);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56406_56532);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56405_56531);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56401,G__56402,G__56403,G__56404) : format.call(null,G__56401,G__56402,G__56403,G__56404));

break;
case "macroexpansion":
var G__56410 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56411 = cause_type;
var G__56412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56413 = loc;
var G__56414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56410,G__56411,G__56412,G__56413,G__56414) : format.call(null,G__56410,G__56411,G__56412,G__56413,G__56414));

break;
case "compile-syntax-check":
var G__56415 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56416 = cause_type;
var G__56417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56418 = loc;
var G__56419 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56415,G__56416,G__56417,G__56418,G__56419) : format.call(null,G__56415,G__56416,G__56417,G__56418,G__56419));

break;
case "compilation":
var G__56420 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56421 = cause_type;
var G__56422 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56423 = loc;
var G__56424 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56420,G__56421,G__56422,G__56423,G__56424) : format.call(null,G__56420,G__56421,G__56422,G__56423,G__56424));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56425 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56426 = symbol;
var G__56427 = loc;
var G__56428 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56429_56541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56430_56542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56431_56543 = true;
var _STAR_print_fn_STAR__temp_val__56432_56544 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56431_56543);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56432_56544);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56430_56542);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56429_56541);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56425,G__56426,G__56427,G__56428) : format.call(null,G__56425,G__56426,G__56427,G__56428));
} else {
var G__56433 = "Execution error%s at %s(%s).\n%s\n";
var G__56434 = cause_type;
var G__56435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56436 = loc;
var G__56437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56433,G__56434,G__56435,G__56436,G__56437) : format.call(null,G__56433,G__56434,G__56435,G__56436,G__56437));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56400__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
