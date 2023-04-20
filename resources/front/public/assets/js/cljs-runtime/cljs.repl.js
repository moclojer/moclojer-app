goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44783){
var map__44786 = p__44783;
var map__44786__$1 = cljs.core.__destructure_map(map__44786);
var m = map__44786__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44786__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44801_45032 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44802_45033 = null;
var count__44803_45034 = (0);
var i__44804_45035 = (0);
while(true){
if((i__44804_45035 < count__44803_45034)){
var f_45036 = chunk__44802_45033.cljs$core$IIndexed$_nth$arity$2(null,i__44804_45035);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45036], 0));


var G__45037 = seq__44801_45032;
var G__45038 = chunk__44802_45033;
var G__45039 = count__44803_45034;
var G__45040 = (i__44804_45035 + (1));
seq__44801_45032 = G__45037;
chunk__44802_45033 = G__45038;
count__44803_45034 = G__45039;
i__44804_45035 = G__45040;
continue;
} else {
var temp__5804__auto___45041 = cljs.core.seq(seq__44801_45032);
if(temp__5804__auto___45041){
var seq__44801_45042__$1 = temp__5804__auto___45041;
if(cljs.core.chunked_seq_QMARK_(seq__44801_45042__$1)){
var c__5568__auto___45043 = cljs.core.chunk_first(seq__44801_45042__$1);
var G__45044 = cljs.core.chunk_rest(seq__44801_45042__$1);
var G__45045 = c__5568__auto___45043;
var G__45046 = cljs.core.count(c__5568__auto___45043);
var G__45047 = (0);
seq__44801_45032 = G__45044;
chunk__44802_45033 = G__45045;
count__44803_45034 = G__45046;
i__44804_45035 = G__45047;
continue;
} else {
var f_45048 = cljs.core.first(seq__44801_45042__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45048], 0));


var G__45049 = cljs.core.next(seq__44801_45042__$1);
var G__45050 = null;
var G__45051 = (0);
var G__45052 = (0);
seq__44801_45032 = G__45049;
chunk__44802_45033 = G__45050;
count__44803_45034 = G__45051;
i__44804_45035 = G__45052;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45053 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45053], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45053)))?cljs.core.second(arglists_45053):arglists_45053)], 0));
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
var seq__44812_45094 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44813_45095 = null;
var count__44814_45096 = (0);
var i__44815_45097 = (0);
while(true){
if((i__44815_45097 < count__44814_45096)){
var vec__44839_45098 = chunk__44813_45095.cljs$core$IIndexed$_nth$arity$2(null,i__44815_45097);
var name_45099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45098,(0),null);
var map__44842_45100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839_45098,(1),null);
var map__44842_45101__$1 = cljs.core.__destructure_map(map__44842_45100);
var doc_45102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44842_45101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44842_45101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45099], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45103], 0));

if(cljs.core.truth_(doc_45102)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45102], 0));
} else {
}


var G__45104 = seq__44812_45094;
var G__45105 = chunk__44813_45095;
var G__45106 = count__44814_45096;
var G__45107 = (i__44815_45097 + (1));
seq__44812_45094 = G__45104;
chunk__44813_45095 = G__45105;
count__44814_45096 = G__45106;
i__44815_45097 = G__45107;
continue;
} else {
var temp__5804__auto___45108 = cljs.core.seq(seq__44812_45094);
if(temp__5804__auto___45108){
var seq__44812_45109__$1 = temp__5804__auto___45108;
if(cljs.core.chunked_seq_QMARK_(seq__44812_45109__$1)){
var c__5568__auto___45111 = cljs.core.chunk_first(seq__44812_45109__$1);
var G__45112 = cljs.core.chunk_rest(seq__44812_45109__$1);
var G__45113 = c__5568__auto___45111;
var G__45114 = cljs.core.count(c__5568__auto___45111);
var G__45115 = (0);
seq__44812_45094 = G__45112;
chunk__44813_45095 = G__45113;
count__44814_45096 = G__45114;
i__44815_45097 = G__45115;
continue;
} else {
var vec__44848_45117 = cljs.core.first(seq__44812_45109__$1);
var name_45118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848_45117,(0),null);
var map__44851_45119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848_45117,(1),null);
var map__44851_45120__$1 = cljs.core.__destructure_map(map__44851_45119);
var doc_45121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44851_45120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44851_45120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45118], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45122], 0));

if(cljs.core.truth_(doc_45121)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45121], 0));
} else {
}


var G__45150 = cljs.core.next(seq__44812_45109__$1);
var G__45151 = null;
var G__45152 = (0);
var G__45153 = (0);
seq__44812_45094 = G__45150;
chunk__44813_45095 = G__45151;
count__44814_45096 = G__45152;
i__44815_45097 = G__45153;
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

var seq__44859 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44860 = null;
var count__44861 = (0);
var i__44862 = (0);
while(true){
if((i__44862 < count__44861)){
var role = chunk__44860.cljs$core$IIndexed$_nth$arity$2(null,i__44862);
var temp__5804__auto___45160__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___45160__$1)){
var spec_45163 = temp__5804__auto___45160__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45163)], 0));
} else {
}


var G__45164 = seq__44859;
var G__45165 = chunk__44860;
var G__45166 = count__44861;
var G__45167 = (i__44862 + (1));
seq__44859 = G__45164;
chunk__44860 = G__45165;
count__44861 = G__45166;
i__44862 = G__45167;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__44859);
if(temp__5804__auto____$1){
var seq__44859__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44859__$1);
var G__45170 = cljs.core.chunk_rest(seq__44859__$1);
var G__45171 = c__5568__auto__;
var G__45172 = cljs.core.count(c__5568__auto__);
var G__45173 = (0);
seq__44859 = G__45170;
chunk__44860 = G__45171;
count__44861 = G__45172;
i__44862 = G__45173;
continue;
} else {
var role = cljs.core.first(seq__44859__$1);
var temp__5804__auto___45174__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___45174__$2)){
var spec_45175 = temp__5804__auto___45174__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45175)], 0));
} else {
}


var G__45178 = cljs.core.next(seq__44859__$1);
var G__45179 = null;
var G__45180 = (0);
var G__45181 = (0);
seq__44859 = G__45178;
chunk__44860 = G__45179;
count__44861 = G__45180;
i__44862 = G__45181;
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
var G__45221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45222 = cljs.core.ex_cause(t);
via = G__45221;
t = G__45222;
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
var map__44917 = datafied_throwable;
var map__44917__$1 = cljs.core.__destructure_map(map__44917);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44917__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44917__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44918 = cljs.core.last(via);
var map__44918__$1 = cljs.core.__destructure_map(map__44918);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44918__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44918__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44919 = data;
var map__44919__$1 = cljs.core.__destructure_map(map__44919);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44919__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44919__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44919__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44920 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44920__$1 = cljs.core.__destructure_map(map__44920);
var top_data = map__44920__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44921 = phase;
var G__44921__$1 = (((G__44921 instanceof cljs.core.Keyword))?G__44921.fqn:null);
switch (G__44921__$1) {
case "read-source":
var map__44923 = data;
var map__44923__$1 = cljs.core.__destructure_map(map__44923);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44923__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44923__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44925 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44925__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44925,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44925);
var G__44925__$2 = (cljs.core.truth_((function (){var fexpr__44928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44928.cljs$core$IFn$_invoke$arity$1 ? fexpr__44928.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44928.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44925__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44925__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44925__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44930 = top_data;
var G__44930__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44930,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44930);
var G__44930__$2 = (cljs.core.truth_((function (){var fexpr__44932 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44932.cljs$core$IFn$_invoke$arity$1 ? fexpr__44932.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44932.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44930__$1);
var G__44930__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44930__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44930__$2);
var G__44930__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44930__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44930__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44930__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44930__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44937 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44937,(3),null);
var G__44940 = top_data;
var G__44940__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44940);
var G__44940__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44940__$1);
var G__44940__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44940__$2);
var G__44940__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44940__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44940__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44940__$4;
}

break;
case "execution":
var vec__44941 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44916_SHARP_){
var or__5045__auto__ = (p1__44916_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__44944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44944.cljs$core$IFn$_invoke$arity$1 ? fexpr__44944.cljs$core$IFn$_invoke$arity$1(p1__44916_SHARP_) : fexpr__44944.call(null,p1__44916_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__44945 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44945__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44945);
var G__44945__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44945__$1);
var G__44945__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44945__$2);
var G__44945__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44945__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44945__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44921__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44959){
var map__44960 = p__44959;
var map__44960__$1 = cljs.core.__destructure_map(map__44960);
var triage_data = map__44960__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__44979 = phase;
var G__44979__$1 = (((G__44979 instanceof cljs.core.Keyword))?G__44979.fqn:null);
switch (G__44979__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44984 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44985 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44986 = loc;
var G__44987 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44991_45301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44992_45302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44993_45303 = true;
var _STAR_print_fn_STAR__temp_val__44994_45304 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44993_45303);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44994_45304);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44957_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44957_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44992_45302);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44991_45301);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44984,G__44985,G__44986,G__44987) : format.call(null,G__44984,G__44985,G__44986,G__44987));

break;
case "macroexpansion":
var G__44995 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44996 = cause_type;
var G__44997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44998 = loc;
var G__44999 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44995,G__44996,G__44997,G__44998,G__44999) : format.call(null,G__44995,G__44996,G__44997,G__44998,G__44999));

break;
case "compile-syntax-check":
var G__45000 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45001 = cause_type;
var G__45002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45003 = loc;
var G__45004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45000,G__45001,G__45002,G__45003,G__45004) : format.call(null,G__45000,G__45001,G__45002,G__45003,G__45004));

break;
case "compilation":
var G__45005 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45006 = cause_type;
var G__45007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45008 = loc;
var G__45009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45005,G__45006,G__45007,G__45008,G__45009) : format.call(null,G__45005,G__45006,G__45007,G__45008,G__45009));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45010 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45011 = symbol;
var G__45012 = loc;
var G__45013 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45014_45319 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45015_45320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45016_45321 = true;
var _STAR_print_fn_STAR__temp_val__45017_45322 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45016_45321);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45017_45322);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44958_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44958_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45015_45320);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45014_45319);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45010,G__45011,G__45012,G__45013) : format.call(null,G__45010,G__45011,G__45012,G__45013));
} else {
var G__45021 = "Execution error%s at %s(%s).\n%s\n";
var G__45022 = cause_type;
var G__45023 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45024 = loc;
var G__45025 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45021,G__45022,G__45023,G__45024,G__45025) : format.call(null,G__45021,G__45022,G__45023,G__45024,G__45025));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44979__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
