goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46515){
var map__46516 = p__46515;
var map__46516__$1 = cljs.core.__destructure_map(map__46516);
var m = map__46516__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__46524_46912 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46525_46913 = null;
var count__46526_46914 = (0);
var i__46527_46915 = (0);
while(true){
if((i__46527_46915 < count__46526_46914)){
var f_46917 = chunk__46525_46913.cljs$core$IIndexed$_nth$arity$2(null,i__46527_46915);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46917], 0));


var G__46918 = seq__46524_46912;
var G__46919 = chunk__46525_46913;
var G__46920 = count__46526_46914;
var G__46921 = (i__46527_46915 + (1));
seq__46524_46912 = G__46918;
chunk__46525_46913 = G__46919;
count__46526_46914 = G__46920;
i__46527_46915 = G__46921;
continue;
} else {
var temp__5804__auto___46922 = cljs.core.seq(seq__46524_46912);
if(temp__5804__auto___46922){
var seq__46524_46923__$1 = temp__5804__auto___46922;
if(cljs.core.chunked_seq_QMARK_(seq__46524_46923__$1)){
var c__5568__auto___46924 = cljs.core.chunk_first(seq__46524_46923__$1);
var G__46925 = cljs.core.chunk_rest(seq__46524_46923__$1);
var G__46926 = c__5568__auto___46924;
var G__46927 = cljs.core.count(c__5568__auto___46924);
var G__46928 = (0);
seq__46524_46912 = G__46925;
chunk__46525_46913 = G__46926;
count__46526_46914 = G__46927;
i__46527_46915 = G__46928;
continue;
} else {
var f_46929 = cljs.core.first(seq__46524_46923__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46929], 0));


var G__46930 = cljs.core.next(seq__46524_46923__$1);
var G__46931 = null;
var G__46932 = (0);
var G__46933 = (0);
seq__46524_46912 = G__46930;
chunk__46525_46913 = G__46931;
count__46526_46914 = G__46932;
i__46527_46915 = G__46933;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46934 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46934], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46934)))?cljs.core.second(arglists_46934):arglists_46934)], 0));
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
var seq__46549_46936 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46550_46937 = null;
var count__46551_46938 = (0);
var i__46552_46939 = (0);
while(true){
if((i__46552_46939 < count__46551_46938)){
var vec__46576_46940 = chunk__46550_46937.cljs$core$IIndexed$_nth$arity$2(null,i__46552_46939);
var name_46941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46576_46940,(0),null);
var map__46579_46942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46576_46940,(1),null);
var map__46579_46943__$1 = cljs.core.__destructure_map(map__46579_46942);
var doc_46944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46579_46943__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46579_46943__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46941], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46945], 0));

if(cljs.core.truth_(doc_46944)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46944], 0));
} else {
}


var G__46946 = seq__46549_46936;
var G__46947 = chunk__46550_46937;
var G__46948 = count__46551_46938;
var G__46949 = (i__46552_46939 + (1));
seq__46549_46936 = G__46946;
chunk__46550_46937 = G__46947;
count__46551_46938 = G__46948;
i__46552_46939 = G__46949;
continue;
} else {
var temp__5804__auto___46950 = cljs.core.seq(seq__46549_46936);
if(temp__5804__auto___46950){
var seq__46549_46951__$1 = temp__5804__auto___46950;
if(cljs.core.chunked_seq_QMARK_(seq__46549_46951__$1)){
var c__5568__auto___46953 = cljs.core.chunk_first(seq__46549_46951__$1);
var G__46954 = cljs.core.chunk_rest(seq__46549_46951__$1);
var G__46955 = c__5568__auto___46953;
var G__46956 = cljs.core.count(c__5568__auto___46953);
var G__46957 = (0);
seq__46549_46936 = G__46954;
chunk__46550_46937 = G__46955;
count__46551_46938 = G__46956;
i__46552_46939 = G__46957;
continue;
} else {
var vec__46584_46958 = cljs.core.first(seq__46549_46951__$1);
var name_46959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584_46958,(0),null);
var map__46587_46960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584_46958,(1),null);
var map__46587_46961__$1 = cljs.core.__destructure_map(map__46587_46960);
var doc_46962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46587_46961__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46587_46961__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46959], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46963], 0));

if(cljs.core.truth_(doc_46962)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46962], 0));
} else {
}


var G__46964 = cljs.core.next(seq__46549_46951__$1);
var G__46965 = null;
var G__46966 = (0);
var G__46967 = (0);
seq__46549_46936 = G__46964;
chunk__46550_46937 = G__46965;
count__46551_46938 = G__46966;
i__46552_46939 = G__46967;
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

var seq__46599 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46600 = null;
var count__46601 = (0);
var i__46602 = (0);
while(true){
if((i__46602 < count__46601)){
var role = chunk__46600.cljs$core$IIndexed$_nth$arity$2(null,i__46602);
var temp__5804__auto___46968__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46968__$1)){
var spec_46969 = temp__5804__auto___46968__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46969)], 0));
} else {
}


var G__46975 = seq__46599;
var G__46976 = chunk__46600;
var G__46977 = count__46601;
var G__46978 = (i__46602 + (1));
seq__46599 = G__46975;
chunk__46600 = G__46976;
count__46601 = G__46977;
i__46602 = G__46978;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__46599);
if(temp__5804__auto____$1){
var seq__46599__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46599__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46599__$1);
var G__46979 = cljs.core.chunk_rest(seq__46599__$1);
var G__46980 = c__5568__auto__;
var G__46981 = cljs.core.count(c__5568__auto__);
var G__46982 = (0);
seq__46599 = G__46979;
chunk__46600 = G__46980;
count__46601 = G__46981;
i__46602 = G__46982;
continue;
} else {
var role = cljs.core.first(seq__46599__$1);
var temp__5804__auto___46984__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46984__$2)){
var spec_46985 = temp__5804__auto___46984__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46985)], 0));
} else {
}


var G__46987 = cljs.core.next(seq__46599__$1);
var G__46988 = null;
var G__46989 = (0);
var G__46990 = (0);
seq__46599 = G__46987;
chunk__46600 = G__46988;
count__46601 = G__46989;
i__46602 = G__46990;
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
var G__46991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46992 = cljs.core.ex_cause(t);
via = G__46991;
t = G__46992;
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
var map__46722 = datafied_throwable;
var map__46722__$1 = cljs.core.__destructure_map(map__46722);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46722__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46722__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46722__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46727 = cljs.core.last(via);
var map__46727__$1 = cljs.core.__destructure_map(map__46727);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46727__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46727__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46727__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46728 = data;
var map__46728__$1 = cljs.core.__destructure_map(map__46728);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46728__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46728__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46728__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46729 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46729__$1 = cljs.core.__destructure_map(map__46729);
var top_data = map__46729__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46761 = phase;
var G__46761__$1 = (((G__46761 instanceof cljs.core.Keyword))?G__46761.fqn:null);
switch (G__46761__$1) {
case "read-source":
var map__46781 = data;
var map__46781__$1 = cljs.core.__destructure_map(map__46781);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46781__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46781__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46787 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46787__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46787,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46787);
var G__46787__$2 = (cljs.core.truth_((function (){var fexpr__46794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46794.cljs$core$IFn$_invoke$arity$1 ? fexpr__46794.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46794.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46787__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46787__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46787__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46795 = top_data;
var G__46795__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46795,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46795);
var G__46795__$2 = (cljs.core.truth_((function (){var fexpr__46796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46796.cljs$core$IFn$_invoke$arity$1 ? fexpr__46796.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46796.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46795__$1);
var G__46795__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46795__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46795__$2);
var G__46795__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46795__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46795__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46795__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46795__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46806 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(3),null);
var G__46811 = top_data;
var G__46811__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46811,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46811);
var G__46811__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46811__$1);
var G__46811__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46811__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46811__$2);
var G__46811__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46811__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46811__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46811__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46811__$4;
}

break;
case "execution":
var vec__46814 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46814,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46694_SHARP_){
var or__5045__auto__ = (p1__46694_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__46821 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46821.cljs$core$IFn$_invoke$arity$1 ? fexpr__46821.cljs$core$IFn$_invoke$arity$1(p1__46694_SHARP_) : fexpr__46821.call(null,p1__46694_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__46830 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46830__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46830,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46830);
var G__46830__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46830__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46830__$1);
var G__46830__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46830__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46830__$2);
var G__46830__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46830__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46830__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46830__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46830__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46761__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46839){
var map__46840 = p__46839;
var map__46840__$1 = cljs.core.__destructure_map(map__46840);
var triage_data = map__46840__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__46855 = phase;
var G__46855__$1 = (((G__46855 instanceof cljs.core.Keyword))?G__46855.fqn:null);
switch (G__46855__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46857 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46858 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46859 = loc;
var G__46860 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46862_47024 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46863_47025 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46864_47026 = true;
var _STAR_print_fn_STAR__temp_val__46865_47027 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46864_47026);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46865_47027);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46834_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46834_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46863_47025);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46862_47024);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46857,G__46858,G__46859,G__46860) : format.call(null,G__46857,G__46858,G__46859,G__46860));

break;
case "macroexpansion":
var G__46876 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46877 = cause_type;
var G__46878 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46879 = loc;
var G__46880 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46876,G__46877,G__46878,G__46879,G__46880) : format.call(null,G__46876,G__46877,G__46878,G__46879,G__46880));

break;
case "compile-syntax-check":
var G__46885 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46886 = cause_type;
var G__46887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46888 = loc;
var G__46889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46885,G__46886,G__46887,G__46888,G__46889) : format.call(null,G__46885,G__46886,G__46887,G__46888,G__46889));

break;
case "compilation":
var G__46890 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46891 = cause_type;
var G__46892 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46893 = loc;
var G__46894 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46890,G__46891,G__46892,G__46893,G__46894) : format.call(null,G__46890,G__46891,G__46892,G__46893,G__46894));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46895 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46896 = symbol;
var G__46897 = loc;
var G__46898 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46899_47034 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46900_47035 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46901_47036 = true;
var _STAR_print_fn_STAR__temp_val__46902_47037 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46901_47036);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46902_47037);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46835_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46835_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46900_47035);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46899_47034);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46895,G__46896,G__46897,G__46898) : format.call(null,G__46895,G__46896,G__46897,G__46898));
} else {
var G__46903 = "Execution error%s at %s(%s).\n%s\n";
var G__46904 = cause_type;
var G__46905 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46906 = loc;
var G__46907 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46903,G__46904,G__46905,G__46906,G__46907) : format.call(null,G__46903,G__46904,G__46905,G__46906,G__46907));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46855__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
