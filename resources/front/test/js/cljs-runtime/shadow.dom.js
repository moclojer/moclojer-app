goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48828 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48828(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48829 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48829(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47315 = coll;
var G__47316 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47315,G__47316) : shadow.dom.lazy_native_coll_seq.call(null,G__47315,G__47316));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47325 = arguments.length;
switch (G__47325) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47328 = arguments.length;
switch (G__47328) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47336 = arguments.length;
switch (G__47336) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47349 = arguments.length;
switch (G__47349) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47360 = arguments.length;
switch (G__47360) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47366 = arguments.length;
switch (G__47366) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47373){if((e47373 instanceof Object)){
var e = e47373;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47373;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47380 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47381 = null;
var count__47382 = (0);
var i__47383 = (0);
while(true){
if((i__47383 < count__47382)){
var el = chunk__47381.cljs$core$IIndexed$_nth$arity$2(null,i__47383);
var handler_48897__$1 = ((function (seq__47380,chunk__47381,count__47382,i__47383,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47380,chunk__47381,count__47382,i__47383,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48897__$1);


var G__48898 = seq__47380;
var G__48899 = chunk__47381;
var G__48900 = count__47382;
var G__48901 = (i__47383 + (1));
seq__47380 = G__48898;
chunk__47381 = G__48899;
count__47382 = G__48900;
i__47383 = G__48901;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47380);
if(temp__5804__auto__){
var seq__47380__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47380__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47380__$1);
var G__48905 = cljs.core.chunk_rest(seq__47380__$1);
var G__48906 = c__5568__auto__;
var G__48907 = cljs.core.count(c__5568__auto__);
var G__48908 = (0);
seq__47380 = G__48905;
chunk__47381 = G__48906;
count__47382 = G__48907;
i__47383 = G__48908;
continue;
} else {
var el = cljs.core.first(seq__47380__$1);
var handler_48909__$1 = ((function (seq__47380,chunk__47381,count__47382,i__47383,el,seq__47380__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47380,chunk__47381,count__47382,i__47383,el,seq__47380__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48909__$1);


var G__48911 = cljs.core.next(seq__47380__$1);
var G__48912 = null;
var G__48913 = (0);
var G__48914 = (0);
seq__47380 = G__48911;
chunk__47381 = G__48912;
count__47382 = G__48913;
i__47383 = G__48914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47400 = arguments.length;
switch (G__47400) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47405 = cljs.core.seq(events);
var chunk__47406 = null;
var count__47407 = (0);
var i__47408 = (0);
while(true){
if((i__47408 < count__47407)){
var vec__47426 = chunk__47406.cljs$core$IIndexed$_nth$arity$2(null,i__47408);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47426,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48937 = seq__47405;
var G__48938 = chunk__47406;
var G__48939 = count__47407;
var G__48940 = (i__47408 + (1));
seq__47405 = G__48937;
chunk__47406 = G__48938;
count__47407 = G__48939;
i__47408 = G__48940;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47405);
if(temp__5804__auto__){
var seq__47405__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47405__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47405__$1);
var G__48942 = cljs.core.chunk_rest(seq__47405__$1);
var G__48943 = c__5568__auto__;
var G__48944 = cljs.core.count(c__5568__auto__);
var G__48945 = (0);
seq__47405 = G__48942;
chunk__47406 = G__48943;
count__47407 = G__48944;
i__47408 = G__48945;
continue;
} else {
var vec__47431 = cljs.core.first(seq__47405__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47431,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47431,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48947 = cljs.core.next(seq__47405__$1);
var G__48948 = null;
var G__48949 = (0);
var G__48950 = (0);
seq__47405 = G__48947;
chunk__47406 = G__48948;
count__47407 = G__48949;
i__47408 = G__48950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47441 = cljs.core.seq(styles);
var chunk__47442 = null;
var count__47443 = (0);
var i__47444 = (0);
while(true){
if((i__47444 < count__47443)){
var vec__47464 = chunk__47442.cljs$core$IIndexed$_nth$arity$2(null,i__47444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48955 = seq__47441;
var G__48956 = chunk__47442;
var G__48957 = count__47443;
var G__48958 = (i__47444 + (1));
seq__47441 = G__48955;
chunk__47442 = G__48956;
count__47443 = G__48957;
i__47444 = G__48958;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47441);
if(temp__5804__auto__){
var seq__47441__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47441__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47441__$1);
var G__48959 = cljs.core.chunk_rest(seq__47441__$1);
var G__48960 = c__5568__auto__;
var G__48961 = cljs.core.count(c__5568__auto__);
var G__48962 = (0);
seq__47441 = G__48959;
chunk__47442 = G__48960;
count__47443 = G__48961;
i__47444 = G__48962;
continue;
} else {
var vec__47468 = cljs.core.first(seq__47441__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47468,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48963 = cljs.core.next(seq__47441__$1);
var G__48964 = null;
var G__48965 = (0);
var G__48966 = (0);
seq__47441 = G__48963;
chunk__47442 = G__48964;
count__47443 = G__48965;
i__47444 = G__48966;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47487_48980 = key;
var G__47487_48981__$1 = (((G__47487_48980 instanceof cljs.core.Keyword))?G__47487_48980.fqn:null);
switch (G__47487_48981__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48983 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48983,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48983,"aria-");
}
})())){
el.setAttribute(ks_48983,value);
} else {
(el[ks_48983] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47562){
var map__47564 = p__47562;
var map__47564__$1 = cljs.core.__destructure_map(map__47564);
var props = map__47564__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47564__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47579 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47579,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47579,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47579,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47590 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47590,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47590;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47604 = arguments.length;
switch (G__47604) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47625){
var vec__47626 = p__47625;
var seq__47627 = cljs.core.seq(vec__47626);
var first__47628 = cljs.core.first(seq__47627);
var seq__47627__$1 = cljs.core.next(seq__47627);
var nn = first__47628;
var first__47628__$1 = cljs.core.first(seq__47627__$1);
var seq__47627__$2 = cljs.core.next(seq__47627__$1);
var np = first__47628__$1;
var nc = seq__47627__$2;
var node = vec__47626;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47630 = nn;
var G__47631 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47630,G__47631) : create_fn.call(null,G__47630,G__47631));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47632 = nn;
var G__47633 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47632,G__47633) : create_fn.call(null,G__47632,G__47633));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47634 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47634,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47634,(1),null);
var seq__47637_49012 = cljs.core.seq(node_children);
var chunk__47638_49013 = null;
var count__47639_49014 = (0);
var i__47640_49015 = (0);
while(true){
if((i__47640_49015 < count__47639_49014)){
var child_struct_49016 = chunk__47638_49013.cljs$core$IIndexed$_nth$arity$2(null,i__47640_49015);
var children_49017 = shadow.dom.dom_node(child_struct_49016);
if(cljs.core.seq_QMARK_(children_49017)){
var seq__47698_49018 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49017));
var chunk__47700_49019 = null;
var count__47701_49020 = (0);
var i__47702_49021 = (0);
while(true){
if((i__47702_49021 < count__47701_49020)){
var child_49022 = chunk__47700_49019.cljs$core$IIndexed$_nth$arity$2(null,i__47702_49021);
if(cljs.core.truth_(child_49022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49022);


var G__49023 = seq__47698_49018;
var G__49024 = chunk__47700_49019;
var G__49025 = count__47701_49020;
var G__49026 = (i__47702_49021 + (1));
seq__47698_49018 = G__49023;
chunk__47700_49019 = G__49024;
count__47701_49020 = G__49025;
i__47702_49021 = G__49026;
continue;
} else {
var G__49027 = seq__47698_49018;
var G__49028 = chunk__47700_49019;
var G__49029 = count__47701_49020;
var G__49030 = (i__47702_49021 + (1));
seq__47698_49018 = G__49027;
chunk__47700_49019 = G__49028;
count__47701_49020 = G__49029;
i__47702_49021 = G__49030;
continue;
}
} else {
var temp__5804__auto___49032 = cljs.core.seq(seq__47698_49018);
if(temp__5804__auto___49032){
var seq__47698_49033__$1 = temp__5804__auto___49032;
if(cljs.core.chunked_seq_QMARK_(seq__47698_49033__$1)){
var c__5568__auto___49034 = cljs.core.chunk_first(seq__47698_49033__$1);
var G__49035 = cljs.core.chunk_rest(seq__47698_49033__$1);
var G__49036 = c__5568__auto___49034;
var G__49037 = cljs.core.count(c__5568__auto___49034);
var G__49038 = (0);
seq__47698_49018 = G__49035;
chunk__47700_49019 = G__49036;
count__47701_49020 = G__49037;
i__47702_49021 = G__49038;
continue;
} else {
var child_49039 = cljs.core.first(seq__47698_49033__$1);
if(cljs.core.truth_(child_49039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49039);


var G__49040 = cljs.core.next(seq__47698_49033__$1);
var G__49041 = null;
var G__49042 = (0);
var G__49043 = (0);
seq__47698_49018 = G__49040;
chunk__47700_49019 = G__49041;
count__47701_49020 = G__49042;
i__47702_49021 = G__49043;
continue;
} else {
var G__49057 = cljs.core.next(seq__47698_49033__$1);
var G__49058 = null;
var G__49059 = (0);
var G__49060 = (0);
seq__47698_49018 = G__49057;
chunk__47700_49019 = G__49058;
count__47701_49020 = G__49059;
i__47702_49021 = G__49060;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49017);
}


var G__49061 = seq__47637_49012;
var G__49062 = chunk__47638_49013;
var G__49063 = count__47639_49014;
var G__49064 = (i__47640_49015 + (1));
seq__47637_49012 = G__49061;
chunk__47638_49013 = G__49062;
count__47639_49014 = G__49063;
i__47640_49015 = G__49064;
continue;
} else {
var temp__5804__auto___49065 = cljs.core.seq(seq__47637_49012);
if(temp__5804__auto___49065){
var seq__47637_49067__$1 = temp__5804__auto___49065;
if(cljs.core.chunked_seq_QMARK_(seq__47637_49067__$1)){
var c__5568__auto___49069 = cljs.core.chunk_first(seq__47637_49067__$1);
var G__49071 = cljs.core.chunk_rest(seq__47637_49067__$1);
var G__49072 = c__5568__auto___49069;
var G__49073 = cljs.core.count(c__5568__auto___49069);
var G__49074 = (0);
seq__47637_49012 = G__49071;
chunk__47638_49013 = G__49072;
count__47639_49014 = G__49073;
i__47640_49015 = G__49074;
continue;
} else {
var child_struct_49076 = cljs.core.first(seq__47637_49067__$1);
var children_49077 = shadow.dom.dom_node(child_struct_49076);
if(cljs.core.seq_QMARK_(children_49077)){
var seq__47741_49079 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49077));
var chunk__47743_49080 = null;
var count__47744_49081 = (0);
var i__47745_49082 = (0);
while(true){
if((i__47745_49082 < count__47744_49081)){
var child_49084 = chunk__47743_49080.cljs$core$IIndexed$_nth$arity$2(null,i__47745_49082);
if(cljs.core.truth_(child_49084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49084);


var G__49089 = seq__47741_49079;
var G__49090 = chunk__47743_49080;
var G__49091 = count__47744_49081;
var G__49092 = (i__47745_49082 + (1));
seq__47741_49079 = G__49089;
chunk__47743_49080 = G__49090;
count__47744_49081 = G__49091;
i__47745_49082 = G__49092;
continue;
} else {
var G__49095 = seq__47741_49079;
var G__49096 = chunk__47743_49080;
var G__49097 = count__47744_49081;
var G__49098 = (i__47745_49082 + (1));
seq__47741_49079 = G__49095;
chunk__47743_49080 = G__49096;
count__47744_49081 = G__49097;
i__47745_49082 = G__49098;
continue;
}
} else {
var temp__5804__auto___49099__$1 = cljs.core.seq(seq__47741_49079);
if(temp__5804__auto___49099__$1){
var seq__47741_49117__$1 = temp__5804__auto___49099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47741_49117__$1)){
var c__5568__auto___49118 = cljs.core.chunk_first(seq__47741_49117__$1);
var G__49119 = cljs.core.chunk_rest(seq__47741_49117__$1);
var G__49120 = c__5568__auto___49118;
var G__49121 = cljs.core.count(c__5568__auto___49118);
var G__49122 = (0);
seq__47741_49079 = G__49119;
chunk__47743_49080 = G__49120;
count__47744_49081 = G__49121;
i__47745_49082 = G__49122;
continue;
} else {
var child_49123 = cljs.core.first(seq__47741_49117__$1);
if(cljs.core.truth_(child_49123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49123);


var G__49124 = cljs.core.next(seq__47741_49117__$1);
var G__49125 = null;
var G__49126 = (0);
var G__49127 = (0);
seq__47741_49079 = G__49124;
chunk__47743_49080 = G__49125;
count__47744_49081 = G__49126;
i__47745_49082 = G__49127;
continue;
} else {
var G__49129 = cljs.core.next(seq__47741_49117__$1);
var G__49130 = null;
var G__49131 = (0);
var G__49132 = (0);
seq__47741_49079 = G__49129;
chunk__47743_49080 = G__49130;
count__47744_49081 = G__49131;
i__47745_49082 = G__49132;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49077);
}


var G__49133 = cljs.core.next(seq__47637_49067__$1);
var G__49134 = null;
var G__49135 = (0);
var G__49136 = (0);
seq__47637_49012 = G__49133;
chunk__47638_49013 = G__49134;
count__47639_49014 = G__49135;
i__47640_49015 = G__49136;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47792 = cljs.core.seq(node);
var chunk__47793 = null;
var count__47794 = (0);
var i__47795 = (0);
while(true){
if((i__47795 < count__47794)){
var n = chunk__47793.cljs$core$IIndexed$_nth$arity$2(null,i__47795);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49143 = seq__47792;
var G__49144 = chunk__47793;
var G__49145 = count__47794;
var G__49146 = (i__47795 + (1));
seq__47792 = G__49143;
chunk__47793 = G__49144;
count__47794 = G__49145;
i__47795 = G__49146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47792);
if(temp__5804__auto__){
var seq__47792__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47792__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47792__$1);
var G__49150 = cljs.core.chunk_rest(seq__47792__$1);
var G__49151 = c__5568__auto__;
var G__49152 = cljs.core.count(c__5568__auto__);
var G__49153 = (0);
seq__47792 = G__49150;
chunk__47793 = G__49151;
count__47794 = G__49152;
i__47795 = G__49153;
continue;
} else {
var n = cljs.core.first(seq__47792__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49154 = cljs.core.next(seq__47792__$1);
var G__49155 = null;
var G__49156 = (0);
var G__49157 = (0);
seq__47792 = G__49154;
chunk__47793 = G__49155;
count__47794 = G__49156;
i__47795 = G__49157;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47825 = arguments.length;
switch (G__47825) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47843 = arguments.length;
switch (G__47843) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47856 = arguments.length;
switch (G__47856) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49173 = arguments.length;
var i__5770__auto___49174 = (0);
while(true){
if((i__5770__auto___49174 < len__5769__auto___49173)){
args__5775__auto__.push((arguments[i__5770__auto___49174]));

var G__49177 = (i__5770__auto___49174 + (1));
i__5770__auto___49174 = G__49177;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47888_49178 = cljs.core.seq(nodes);
var chunk__47889_49179 = null;
var count__47890_49180 = (0);
var i__47891_49181 = (0);
while(true){
if((i__47891_49181 < count__47890_49180)){
var node_49182 = chunk__47889_49179.cljs$core$IIndexed$_nth$arity$2(null,i__47891_49181);
fragment.appendChild(shadow.dom._to_dom(node_49182));


var G__49186 = seq__47888_49178;
var G__49187 = chunk__47889_49179;
var G__49188 = count__47890_49180;
var G__49189 = (i__47891_49181 + (1));
seq__47888_49178 = G__49186;
chunk__47889_49179 = G__49187;
count__47890_49180 = G__49188;
i__47891_49181 = G__49189;
continue;
} else {
var temp__5804__auto___49190 = cljs.core.seq(seq__47888_49178);
if(temp__5804__auto___49190){
var seq__47888_49191__$1 = temp__5804__auto___49190;
if(cljs.core.chunked_seq_QMARK_(seq__47888_49191__$1)){
var c__5568__auto___49192 = cljs.core.chunk_first(seq__47888_49191__$1);
var G__49193 = cljs.core.chunk_rest(seq__47888_49191__$1);
var G__49194 = c__5568__auto___49192;
var G__49195 = cljs.core.count(c__5568__auto___49192);
var G__49196 = (0);
seq__47888_49178 = G__49193;
chunk__47889_49179 = G__49194;
count__47890_49180 = G__49195;
i__47891_49181 = G__49196;
continue;
} else {
var node_49197 = cljs.core.first(seq__47888_49191__$1);
fragment.appendChild(shadow.dom._to_dom(node_49197));


var G__49198 = cljs.core.next(seq__47888_49191__$1);
var G__49199 = null;
var G__49200 = (0);
var G__49201 = (0);
seq__47888_49178 = G__49198;
chunk__47889_49179 = G__49199;
count__47890_49180 = G__49200;
i__47891_49181 = G__49201;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47881){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47881));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47934_49202 = cljs.core.seq(scripts);
var chunk__47935_49203 = null;
var count__47936_49204 = (0);
var i__47937_49205 = (0);
while(true){
if((i__47937_49205 < count__47936_49204)){
var vec__47968_49206 = chunk__47935_49203.cljs$core$IIndexed$_nth$arity$2(null,i__47937_49205);
var script_tag_49207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968_49206,(0),null);
var script_body_49208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968_49206,(1),null);
eval(script_body_49208);


var G__49209 = seq__47934_49202;
var G__49210 = chunk__47935_49203;
var G__49211 = count__47936_49204;
var G__49212 = (i__47937_49205 + (1));
seq__47934_49202 = G__49209;
chunk__47935_49203 = G__49210;
count__47936_49204 = G__49211;
i__47937_49205 = G__49212;
continue;
} else {
var temp__5804__auto___49213 = cljs.core.seq(seq__47934_49202);
if(temp__5804__auto___49213){
var seq__47934_49214__$1 = temp__5804__auto___49213;
if(cljs.core.chunked_seq_QMARK_(seq__47934_49214__$1)){
var c__5568__auto___49215 = cljs.core.chunk_first(seq__47934_49214__$1);
var G__49216 = cljs.core.chunk_rest(seq__47934_49214__$1);
var G__49217 = c__5568__auto___49215;
var G__49218 = cljs.core.count(c__5568__auto___49215);
var G__49219 = (0);
seq__47934_49202 = G__49216;
chunk__47935_49203 = G__49217;
count__47936_49204 = G__49218;
i__47937_49205 = G__49219;
continue;
} else {
var vec__47972_49220 = cljs.core.first(seq__47934_49214__$1);
var script_tag_49221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47972_49220,(0),null);
var script_body_49222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47972_49220,(1),null);
eval(script_body_49222);


var G__49223 = cljs.core.next(seq__47934_49214__$1);
var G__49224 = null;
var G__49225 = (0);
var G__49226 = (0);
seq__47934_49202 = G__49223;
chunk__47935_49203 = G__49224;
count__47936_49204 = G__49225;
i__47937_49205 = G__49226;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47978){
var vec__47980 = p__47978;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47980,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47993 = arguments.length;
switch (G__47993) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48027 = cljs.core.seq(style_keys);
var chunk__48028 = null;
var count__48029 = (0);
var i__48030 = (0);
while(true){
if((i__48030 < count__48029)){
var it = chunk__48028.cljs$core$IIndexed$_nth$arity$2(null,i__48030);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49243 = seq__48027;
var G__49244 = chunk__48028;
var G__49245 = count__48029;
var G__49246 = (i__48030 + (1));
seq__48027 = G__49243;
chunk__48028 = G__49244;
count__48029 = G__49245;
i__48030 = G__49246;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__48027);
if(temp__5804__auto__){
var seq__48027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48027__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48027__$1);
var G__49247 = cljs.core.chunk_rest(seq__48027__$1);
var G__49248 = c__5568__auto__;
var G__49249 = cljs.core.count(c__5568__auto__);
var G__49250 = (0);
seq__48027 = G__49247;
chunk__48028 = G__49248;
count__48029 = G__49249;
i__48030 = G__49250;
continue;
} else {
var it = cljs.core.first(seq__48027__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49251 = cljs.core.next(seq__48027__$1);
var G__49252 = null;
var G__49253 = (0);
var G__49254 = (0);
seq__48027 = G__49251;
chunk__48028 = G__49252;
count__48029 = G__49253;
i__48030 = G__49254;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48061,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48070 = k48061;
var G__48070__$1 = (((G__48070 instanceof cljs.core.Keyword))?G__48070.fqn:null);
switch (G__48070__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48061,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48072){
var vec__48115 = p__48072;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48115,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48060){
var self__ = this;
var G__48060__$1 = this;
return (new cljs.core.RecordIter((0),G__48060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48062,other48063){
var self__ = this;
var this48062__$1 = this;
return (((!((other48063 == null)))) && ((((this48062__$1.constructor === other48063.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.x,other48063.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.y,other48063.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48062__$1.__extmap,other48063.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48061){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48153 = k48061;
var G__48153__$1 = (((G__48153 instanceof cljs.core.Keyword))?G__48153.fqn:null);
switch (G__48153__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48061);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48060){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48155 = cljs.core.keyword_identical_QMARK_;
var expr__48156 = k__5352__auto__;
if(cljs.core.truth_((pred__48155.cljs$core$IFn$_invoke$arity$2 ? pred__48155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48156) : pred__48155.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48156)))){
return (new shadow.dom.Coordinate(G__48060,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48155.cljs$core$IFn$_invoke$arity$2 ? pred__48155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48156) : pred__48155.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48156)))){
return (new shadow.dom.Coordinate(self__.x,G__48060,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48060),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48060){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48060,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48065){
var extmap__5385__auto__ = (function (){var G__48181 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48065,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48065)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48181);
} else {
return G__48181;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48065),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48065),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48217,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48258 = k48217;
var G__48258__$1 = (((G__48258 instanceof cljs.core.Keyword))?G__48258.fqn:null);
switch (G__48258__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48217,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48263){
var vec__48266 = p__48263;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48266,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48266,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48216){
var self__ = this;
var G__48216__$1 = this;
return (new cljs.core.RecordIter((0),G__48216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48218,other48219){
var self__ = this;
var this48218__$1 = this;
return (((!((other48219 == null)))) && ((((this48218__$1.constructor === other48219.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48218__$1.w,other48219.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48218__$1.h,other48219.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48218__$1.__extmap,other48219.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48217){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48329 = k48217;
var G__48329__$1 = (((G__48329 instanceof cljs.core.Keyword))?G__48329.fqn:null);
switch (G__48329__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48217);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48216){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48350 = cljs.core.keyword_identical_QMARK_;
var expr__48351 = k__5352__auto__;
if(cljs.core.truth_((pred__48350.cljs$core$IFn$_invoke$arity$2 ? pred__48350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48351) : pred__48350.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48351)))){
return (new shadow.dom.Size(G__48216,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48350.cljs$core$IFn$_invoke$arity$2 ? pred__48350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48351) : pred__48350.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48351)))){
return (new shadow.dom.Size(self__.w,G__48216,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48216),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48216){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48216,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48249){
var extmap__5385__auto__ = (function (){var G__48380 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48249,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48380);
} else {
return G__48380;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48249),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48249),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__49356 = (i + (1));
var G__49357 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49356;
ret = G__49357;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48450){
var vec__48451 = p__48450;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48451,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48458 = arguments.length;
switch (G__48458) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49372 = ps;
var G__49373 = (i + (1));
el__$1 = G__49372;
i = G__49373;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48511 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48514_49386 = cljs.core.seq(props);
var chunk__48515_49387 = null;
var count__48516_49388 = (0);
var i__48517_49389 = (0);
while(true){
if((i__48517_49389 < count__48516_49388)){
var vec__48561_49392 = chunk__48515_49387.cljs$core$IIndexed$_nth$arity$2(null,i__48517_49389);
var k_49393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561_49392,(0),null);
var v_49394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48561_49392,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_49393);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49393),v_49394);


var G__49396 = seq__48514_49386;
var G__49397 = chunk__48515_49387;
var G__49398 = count__48516_49388;
var G__49399 = (i__48517_49389 + (1));
seq__48514_49386 = G__49396;
chunk__48515_49387 = G__49397;
count__48516_49388 = G__49398;
i__48517_49389 = G__49399;
continue;
} else {
var temp__5804__auto___49400 = cljs.core.seq(seq__48514_49386);
if(temp__5804__auto___49400){
var seq__48514_49401__$1 = temp__5804__auto___49400;
if(cljs.core.chunked_seq_QMARK_(seq__48514_49401__$1)){
var c__5568__auto___49402 = cljs.core.chunk_first(seq__48514_49401__$1);
var G__49403 = cljs.core.chunk_rest(seq__48514_49401__$1);
var G__49404 = c__5568__auto___49402;
var G__49405 = cljs.core.count(c__5568__auto___49402);
var G__49406 = (0);
seq__48514_49386 = G__49403;
chunk__48515_49387 = G__49404;
count__48516_49388 = G__49405;
i__48517_49389 = G__49406;
continue;
} else {
var vec__48574_49408 = cljs.core.first(seq__48514_49401__$1);
var k_49409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48574_49408,(0),null);
var v_49410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48574_49408,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_49409);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49409),v_49410);


var G__49412 = cljs.core.next(seq__48514_49401__$1);
var G__49413 = null;
var G__49414 = (0);
var G__49415 = (0);
seq__48514_49386 = G__49412;
chunk__48515_49387 = G__49413;
count__48516_49388 = G__49414;
i__48517_49389 = G__49415;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48615 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(1),null);
var seq__48620_49443 = cljs.core.seq(node_children);
var chunk__48622_49444 = null;
var count__48623_49445 = (0);
var i__48624_49446 = (0);
while(true){
if((i__48624_49446 < count__48623_49445)){
var child_struct_49451 = chunk__48622_49444.cljs$core$IIndexed$_nth$arity$2(null,i__48624_49446);
if((!((child_struct_49451 == null)))){
if(typeof child_struct_49451 === 'string'){
var text_49452 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49452),child_struct_49451].join(''));
} else {
var children_49453 = shadow.dom.svg_node(child_struct_49451);
if(cljs.core.seq_QMARK_(children_49453)){
var seq__48682_49454 = cljs.core.seq(children_49453);
var chunk__48684_49455 = null;
var count__48685_49456 = (0);
var i__48686_49457 = (0);
while(true){
if((i__48686_49457 < count__48685_49456)){
var child_49459 = chunk__48684_49455.cljs$core$IIndexed$_nth$arity$2(null,i__48686_49457);
if(cljs.core.truth_(child_49459)){
node.appendChild(child_49459);


var G__49460 = seq__48682_49454;
var G__49461 = chunk__48684_49455;
var G__49462 = count__48685_49456;
var G__49463 = (i__48686_49457 + (1));
seq__48682_49454 = G__49460;
chunk__48684_49455 = G__49461;
count__48685_49456 = G__49462;
i__48686_49457 = G__49463;
continue;
} else {
var G__49464 = seq__48682_49454;
var G__49465 = chunk__48684_49455;
var G__49466 = count__48685_49456;
var G__49467 = (i__48686_49457 + (1));
seq__48682_49454 = G__49464;
chunk__48684_49455 = G__49465;
count__48685_49456 = G__49466;
i__48686_49457 = G__49467;
continue;
}
} else {
var temp__5804__auto___49468 = cljs.core.seq(seq__48682_49454);
if(temp__5804__auto___49468){
var seq__48682_49469__$1 = temp__5804__auto___49468;
if(cljs.core.chunked_seq_QMARK_(seq__48682_49469__$1)){
var c__5568__auto___49470 = cljs.core.chunk_first(seq__48682_49469__$1);
var G__49471 = cljs.core.chunk_rest(seq__48682_49469__$1);
var G__49472 = c__5568__auto___49470;
var G__49473 = cljs.core.count(c__5568__auto___49470);
var G__49474 = (0);
seq__48682_49454 = G__49471;
chunk__48684_49455 = G__49472;
count__48685_49456 = G__49473;
i__48686_49457 = G__49474;
continue;
} else {
var child_49475 = cljs.core.first(seq__48682_49469__$1);
if(cljs.core.truth_(child_49475)){
node.appendChild(child_49475);


var G__49476 = cljs.core.next(seq__48682_49469__$1);
var G__49477 = null;
var G__49478 = (0);
var G__49479 = (0);
seq__48682_49454 = G__49476;
chunk__48684_49455 = G__49477;
count__48685_49456 = G__49478;
i__48686_49457 = G__49479;
continue;
} else {
var G__49480 = cljs.core.next(seq__48682_49469__$1);
var G__49481 = null;
var G__49482 = (0);
var G__49483 = (0);
seq__48682_49454 = G__49480;
chunk__48684_49455 = G__49481;
count__48685_49456 = G__49482;
i__48686_49457 = G__49483;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49453);
}
}


var G__49484 = seq__48620_49443;
var G__49485 = chunk__48622_49444;
var G__49486 = count__48623_49445;
var G__49487 = (i__48624_49446 + (1));
seq__48620_49443 = G__49484;
chunk__48622_49444 = G__49485;
count__48623_49445 = G__49486;
i__48624_49446 = G__49487;
continue;
} else {
var G__49488 = seq__48620_49443;
var G__49489 = chunk__48622_49444;
var G__49490 = count__48623_49445;
var G__49491 = (i__48624_49446 + (1));
seq__48620_49443 = G__49488;
chunk__48622_49444 = G__49489;
count__48623_49445 = G__49490;
i__48624_49446 = G__49491;
continue;
}
} else {
var temp__5804__auto___49492 = cljs.core.seq(seq__48620_49443);
if(temp__5804__auto___49492){
var seq__48620_49493__$1 = temp__5804__auto___49492;
if(cljs.core.chunked_seq_QMARK_(seq__48620_49493__$1)){
var c__5568__auto___49494 = cljs.core.chunk_first(seq__48620_49493__$1);
var G__49495 = cljs.core.chunk_rest(seq__48620_49493__$1);
var G__49496 = c__5568__auto___49494;
var G__49497 = cljs.core.count(c__5568__auto___49494);
var G__49498 = (0);
seq__48620_49443 = G__49495;
chunk__48622_49444 = G__49496;
count__48623_49445 = G__49497;
i__48624_49446 = G__49498;
continue;
} else {
var child_struct_49499 = cljs.core.first(seq__48620_49493__$1);
if((!((child_struct_49499 == null)))){
if(typeof child_struct_49499 === 'string'){
var text_49501 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49501),child_struct_49499].join(''));
} else {
var children_49503 = shadow.dom.svg_node(child_struct_49499);
if(cljs.core.seq_QMARK_(children_49503)){
var seq__48722_49504 = cljs.core.seq(children_49503);
var chunk__48724_49505 = null;
var count__48725_49506 = (0);
var i__48726_49507 = (0);
while(true){
if((i__48726_49507 < count__48725_49506)){
var child_49509 = chunk__48724_49505.cljs$core$IIndexed$_nth$arity$2(null,i__48726_49507);
if(cljs.core.truth_(child_49509)){
node.appendChild(child_49509);


var G__49510 = seq__48722_49504;
var G__49511 = chunk__48724_49505;
var G__49512 = count__48725_49506;
var G__49513 = (i__48726_49507 + (1));
seq__48722_49504 = G__49510;
chunk__48724_49505 = G__49511;
count__48725_49506 = G__49512;
i__48726_49507 = G__49513;
continue;
} else {
var G__49514 = seq__48722_49504;
var G__49515 = chunk__48724_49505;
var G__49516 = count__48725_49506;
var G__49517 = (i__48726_49507 + (1));
seq__48722_49504 = G__49514;
chunk__48724_49505 = G__49515;
count__48725_49506 = G__49516;
i__48726_49507 = G__49517;
continue;
}
} else {
var temp__5804__auto___49518__$1 = cljs.core.seq(seq__48722_49504);
if(temp__5804__auto___49518__$1){
var seq__48722_49519__$1 = temp__5804__auto___49518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48722_49519__$1)){
var c__5568__auto___49520 = cljs.core.chunk_first(seq__48722_49519__$1);
var G__49521 = cljs.core.chunk_rest(seq__48722_49519__$1);
var G__49522 = c__5568__auto___49520;
var G__49523 = cljs.core.count(c__5568__auto___49520);
var G__49526 = (0);
seq__48722_49504 = G__49521;
chunk__48724_49505 = G__49522;
count__48725_49506 = G__49523;
i__48726_49507 = G__49526;
continue;
} else {
var child_49531 = cljs.core.first(seq__48722_49519__$1);
if(cljs.core.truth_(child_49531)){
node.appendChild(child_49531);


var G__49532 = cljs.core.next(seq__48722_49519__$1);
var G__49533 = null;
var G__49534 = (0);
var G__49535 = (0);
seq__48722_49504 = G__49532;
chunk__48724_49505 = G__49533;
count__48725_49506 = G__49534;
i__48726_49507 = G__49535;
continue;
} else {
var G__49536 = cljs.core.next(seq__48722_49519__$1);
var G__49537 = null;
var G__49538 = (0);
var G__49539 = (0);
seq__48722_49504 = G__49536;
chunk__48724_49505 = G__49537;
count__48725_49506 = G__49538;
i__48726_49507 = G__49539;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49503);
}
}


var G__49540 = cljs.core.next(seq__48620_49493__$1);
var G__49541 = null;
var G__49542 = (0);
var G__49543 = (0);
seq__48620_49443 = G__49540;
chunk__48622_49444 = G__49541;
count__48623_49445 = G__49542;
i__48624_49446 = G__49543;
continue;
} else {
var G__49544 = cljs.core.next(seq__48620_49493__$1);
var G__49545 = null;
var G__49546 = (0);
var G__49547 = (0);
seq__48620_49443 = G__49544;
chunk__48622_49444 = G__49545;
count__48623_49445 = G__49546;
i__48624_49446 = G__49547;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49552 = arguments.length;
var i__5770__auto___49558 = (0);
while(true){
if((i__5770__auto___49558 < len__5769__auto___49552)){
args__5775__auto__.push((arguments[i__5770__auto___49558]));

var G__49559 = (i__5770__auto___49558 + (1));
i__5770__auto___49558 = G__49559;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48755){
var G__48756 = cljs.core.first(seq48755);
var seq48755__$1 = cljs.core.next(seq48755);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48756,seq48755__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48763 = arguments.length;
switch (G__48763) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33655__auto___49562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_48780){
var state_val_48781 = (state_48780[(1)]);
if((state_val_48781 === (1))){
var state_48780__$1 = state_48780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48780__$1,(2),once_or_cleanup);
} else {
if((state_val_48781 === (2))){
var inst_48776 = (state_48780[(2)]);
var inst_48778 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48780__$1 = (function (){var statearr_48784 = state_48780;
(statearr_48784[(7)] = inst_48776);

return statearr_48784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48780__$1,inst_48778);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33421__auto__ = null;
var shadow$dom$state_machine__33421__auto____0 = (function (){
var statearr_48785 = [null,null,null,null,null,null,null,null];
(statearr_48785[(0)] = shadow$dom$state_machine__33421__auto__);

(statearr_48785[(1)] = (1));

return statearr_48785;
});
var shadow$dom$state_machine__33421__auto____1 = (function (state_48780){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_48780);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e48788){var ex__33424__auto__ = e48788;
var statearr_48789_49591 = state_48780;
(statearr_48789_49591[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_48780[(4)]))){
var statearr_48790_49593 = state_48780;
(statearr_48790_49593[(1)] = cljs.core.first((state_48780[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49598 = state_48780;
state_48780 = G__49598;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
shadow$dom$state_machine__33421__auto__ = function(state_48780){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33421__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33421__auto____1.call(this,state_48780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33421__auto____0;
shadow$dom$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33421__auto____1;
return shadow$dom$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_48793 = f__33656__auto__();
(statearr_48793[(6)] = c__33655__auto___49562);

return statearr_48793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
