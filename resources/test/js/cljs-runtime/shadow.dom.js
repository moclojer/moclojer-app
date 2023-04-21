goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45876 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45876(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45881 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45881(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44165 = coll;
var G__44166 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44165,G__44166) : shadow.dom.lazy_native_coll_seq.call(null,G__44165,G__44166));
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
var G__44198 = arguments.length;
switch (G__44198) {
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
var G__44209 = arguments.length;
switch (G__44209) {
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
var G__44217 = arguments.length;
switch (G__44217) {
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
var G__44228 = arguments.length;
switch (G__44228) {
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
var G__44260 = arguments.length;
switch (G__44260) {
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
var G__44279 = arguments.length;
switch (G__44279) {
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
}catch (e44289){if((e44289 instanceof Object)){
var e = e44289;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44289;

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
var seq__44308 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44309 = null;
var count__44310 = (0);
var i__44311 = (0);
while(true){
if((i__44311 < count__44310)){
var el = chunk__44309.cljs$core$IIndexed$_nth$arity$2(null,i__44311);
var handler_45908__$1 = ((function (seq__44308,chunk__44309,count__44310,i__44311,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44308,chunk__44309,count__44310,i__44311,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45908__$1);


var G__45913 = seq__44308;
var G__45914 = chunk__44309;
var G__45915 = count__44310;
var G__45916 = (i__44311 + (1));
seq__44308 = G__45913;
chunk__44309 = G__45914;
count__44310 = G__45915;
i__44311 = G__45916;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44308);
if(temp__5804__auto__){
var seq__44308__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44308__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44308__$1);
var G__45920 = cljs.core.chunk_rest(seq__44308__$1);
var G__45921 = c__5568__auto__;
var G__45922 = cljs.core.count(c__5568__auto__);
var G__45923 = (0);
seq__44308 = G__45920;
chunk__44309 = G__45921;
count__44310 = G__45922;
i__44311 = G__45923;
continue;
} else {
var el = cljs.core.first(seq__44308__$1);
var handler_45924__$1 = ((function (seq__44308,chunk__44309,count__44310,i__44311,el,seq__44308__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44308,chunk__44309,count__44310,i__44311,el,seq__44308__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45924__$1);


var G__45925 = cljs.core.next(seq__44308__$1);
var G__45926 = null;
var G__45927 = (0);
var G__45928 = (0);
seq__44308 = G__45925;
chunk__44309 = G__45926;
count__44310 = G__45927;
i__44311 = G__45928;
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
var G__44373 = arguments.length;
switch (G__44373) {
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
var seq__44395 = cljs.core.seq(events);
var chunk__44396 = null;
var count__44397 = (0);
var i__44398 = (0);
while(true){
if((i__44398 < count__44397)){
var vec__44418 = chunk__44396.cljs$core$IIndexed$_nth$arity$2(null,i__44398);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44418,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45935 = seq__44395;
var G__45936 = chunk__44396;
var G__45937 = count__44397;
var G__45938 = (i__44398 + (1));
seq__44395 = G__45935;
chunk__44396 = G__45936;
count__44397 = G__45937;
i__44398 = G__45938;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44395);
if(temp__5804__auto__){
var seq__44395__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44395__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44395__$1);
var G__45939 = cljs.core.chunk_rest(seq__44395__$1);
var G__45940 = c__5568__auto__;
var G__45941 = cljs.core.count(c__5568__auto__);
var G__45942 = (0);
seq__44395 = G__45939;
chunk__44396 = G__45940;
count__44397 = G__45941;
i__44398 = G__45942;
continue;
} else {
var vec__44435 = cljs.core.first(seq__44395__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44435,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45943 = cljs.core.next(seq__44395__$1);
var G__45944 = null;
var G__45945 = (0);
var G__45946 = (0);
seq__44395 = G__45943;
chunk__44396 = G__45944;
count__44397 = G__45945;
i__44398 = G__45946;
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
var seq__44444 = cljs.core.seq(styles);
var chunk__44445 = null;
var count__44446 = (0);
var i__44447 = (0);
while(true){
if((i__44447 < count__44446)){
var vec__44469 = chunk__44445.cljs$core$IIndexed$_nth$arity$2(null,i__44447);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44469,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45948 = seq__44444;
var G__45949 = chunk__44445;
var G__45950 = count__44446;
var G__45951 = (i__44447 + (1));
seq__44444 = G__45948;
chunk__44445 = G__45949;
count__44446 = G__45950;
i__44447 = G__45951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44444);
if(temp__5804__auto__){
var seq__44444__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44444__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44444__$1);
var G__45953 = cljs.core.chunk_rest(seq__44444__$1);
var G__45954 = c__5568__auto__;
var G__45955 = cljs.core.count(c__5568__auto__);
var G__45956 = (0);
seq__44444 = G__45953;
chunk__44445 = G__45954;
count__44446 = G__45955;
i__44447 = G__45956;
continue;
} else {
var vec__44473 = cljs.core.first(seq__44444__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44473,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45959 = cljs.core.next(seq__44444__$1);
var G__45960 = null;
var G__45961 = (0);
var G__45962 = (0);
seq__44444 = G__45959;
chunk__44445 = G__45960;
count__44446 = G__45961;
i__44447 = G__45962;
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
var G__44482_45965 = key;
var G__44482_45966__$1 = (((G__44482_45965 instanceof cljs.core.Keyword))?G__44482_45965.fqn:null);
switch (G__44482_45966__$1) {
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
var ks_45968 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_45968,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_45968,"aria-");
}
})())){
el.setAttribute(ks_45968,value);
} else {
(el[ks_45968] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44510){
var map__44520 = p__44510;
var map__44520__$1 = cljs.core.__destructure_map(map__44520);
var props = map__44520__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44520__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44523 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44523,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44523,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44523,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44533 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44533,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44533;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44542 = arguments.length;
switch (G__44542) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44553){
var vec__44554 = p__44553;
var seq__44555 = cljs.core.seq(vec__44554);
var first__44556 = cljs.core.first(seq__44555);
var seq__44555__$1 = cljs.core.next(seq__44555);
var nn = first__44556;
var first__44556__$1 = cljs.core.first(seq__44555__$1);
var seq__44555__$2 = cljs.core.next(seq__44555__$1);
var np = first__44556__$1;
var nc = seq__44555__$2;
var node = vec__44554;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44563 = nn;
var G__44564 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44563,G__44564) : create_fn.call(null,G__44563,G__44564));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44570 = nn;
var G__44571 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44570,G__44571) : create_fn.call(null,G__44570,G__44571));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44574 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44574,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44574,(1),null);
var seq__44579_45994 = cljs.core.seq(node_children);
var chunk__44580_45995 = null;
var count__44581_45996 = (0);
var i__44582_45997 = (0);
while(true){
if((i__44582_45997 < count__44581_45996)){
var child_struct_45998 = chunk__44580_45995.cljs$core$IIndexed$_nth$arity$2(null,i__44582_45997);
var children_45999 = shadow.dom.dom_node(child_struct_45998);
if(cljs.core.seq_QMARK_(children_45999)){
var seq__44679_46000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45999));
var chunk__44681_46001 = null;
var count__44682_46002 = (0);
var i__44683_46003 = (0);
while(true){
if((i__44683_46003 < count__44682_46002)){
var child_46006 = chunk__44681_46001.cljs$core$IIndexed$_nth$arity$2(null,i__44683_46003);
if(cljs.core.truth_(child_46006)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46006);


var G__46008 = seq__44679_46000;
var G__46009 = chunk__44681_46001;
var G__46010 = count__44682_46002;
var G__46011 = (i__44683_46003 + (1));
seq__44679_46000 = G__46008;
chunk__44681_46001 = G__46009;
count__44682_46002 = G__46010;
i__44683_46003 = G__46011;
continue;
} else {
var G__46012 = seq__44679_46000;
var G__46013 = chunk__44681_46001;
var G__46014 = count__44682_46002;
var G__46015 = (i__44683_46003 + (1));
seq__44679_46000 = G__46012;
chunk__44681_46001 = G__46013;
count__44682_46002 = G__46014;
i__44683_46003 = G__46015;
continue;
}
} else {
var temp__5804__auto___46017 = cljs.core.seq(seq__44679_46000);
if(temp__5804__auto___46017){
var seq__44679_46019__$1 = temp__5804__auto___46017;
if(cljs.core.chunked_seq_QMARK_(seq__44679_46019__$1)){
var c__5568__auto___46020 = cljs.core.chunk_first(seq__44679_46019__$1);
var G__46023 = cljs.core.chunk_rest(seq__44679_46019__$1);
var G__46024 = c__5568__auto___46020;
var G__46025 = cljs.core.count(c__5568__auto___46020);
var G__46026 = (0);
seq__44679_46000 = G__46023;
chunk__44681_46001 = G__46024;
count__44682_46002 = G__46025;
i__44683_46003 = G__46026;
continue;
} else {
var child_46027 = cljs.core.first(seq__44679_46019__$1);
if(cljs.core.truth_(child_46027)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46027);


var G__46029 = cljs.core.next(seq__44679_46019__$1);
var G__46030 = null;
var G__46031 = (0);
var G__46032 = (0);
seq__44679_46000 = G__46029;
chunk__44681_46001 = G__46030;
count__44682_46002 = G__46031;
i__44683_46003 = G__46032;
continue;
} else {
var G__46033 = cljs.core.next(seq__44679_46019__$1);
var G__46034 = null;
var G__46035 = (0);
var G__46036 = (0);
seq__44679_46000 = G__46033;
chunk__44681_46001 = G__46034;
count__44682_46002 = G__46035;
i__44683_46003 = G__46036;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45999);
}


var G__46038 = seq__44579_45994;
var G__46039 = chunk__44580_45995;
var G__46040 = count__44581_45996;
var G__46041 = (i__44582_45997 + (1));
seq__44579_45994 = G__46038;
chunk__44580_45995 = G__46039;
count__44581_45996 = G__46040;
i__44582_45997 = G__46041;
continue;
} else {
var temp__5804__auto___46042 = cljs.core.seq(seq__44579_45994);
if(temp__5804__auto___46042){
var seq__44579_46043__$1 = temp__5804__auto___46042;
if(cljs.core.chunked_seq_QMARK_(seq__44579_46043__$1)){
var c__5568__auto___46044 = cljs.core.chunk_first(seq__44579_46043__$1);
var G__46045 = cljs.core.chunk_rest(seq__44579_46043__$1);
var G__46046 = c__5568__auto___46044;
var G__46047 = cljs.core.count(c__5568__auto___46044);
var G__46048 = (0);
seq__44579_45994 = G__46045;
chunk__44580_45995 = G__46046;
count__44581_45996 = G__46047;
i__44582_45997 = G__46048;
continue;
} else {
var child_struct_46049 = cljs.core.first(seq__44579_46043__$1);
var children_46050 = shadow.dom.dom_node(child_struct_46049);
if(cljs.core.seq_QMARK_(children_46050)){
var seq__44711_46051 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46050));
var chunk__44713_46052 = null;
var count__44714_46053 = (0);
var i__44715_46054 = (0);
while(true){
if((i__44715_46054 < count__44714_46053)){
var child_46055 = chunk__44713_46052.cljs$core$IIndexed$_nth$arity$2(null,i__44715_46054);
if(cljs.core.truth_(child_46055)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46055);


var G__46056 = seq__44711_46051;
var G__46057 = chunk__44713_46052;
var G__46058 = count__44714_46053;
var G__46059 = (i__44715_46054 + (1));
seq__44711_46051 = G__46056;
chunk__44713_46052 = G__46057;
count__44714_46053 = G__46058;
i__44715_46054 = G__46059;
continue;
} else {
var G__46061 = seq__44711_46051;
var G__46062 = chunk__44713_46052;
var G__46063 = count__44714_46053;
var G__46064 = (i__44715_46054 + (1));
seq__44711_46051 = G__46061;
chunk__44713_46052 = G__46062;
count__44714_46053 = G__46063;
i__44715_46054 = G__46064;
continue;
}
} else {
var temp__5804__auto___46065__$1 = cljs.core.seq(seq__44711_46051);
if(temp__5804__auto___46065__$1){
var seq__44711_46066__$1 = temp__5804__auto___46065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44711_46066__$1)){
var c__5568__auto___46067 = cljs.core.chunk_first(seq__44711_46066__$1);
var G__46068 = cljs.core.chunk_rest(seq__44711_46066__$1);
var G__46069 = c__5568__auto___46067;
var G__46070 = cljs.core.count(c__5568__auto___46067);
var G__46071 = (0);
seq__44711_46051 = G__46068;
chunk__44713_46052 = G__46069;
count__44714_46053 = G__46070;
i__44715_46054 = G__46071;
continue;
} else {
var child_46074 = cljs.core.first(seq__44711_46066__$1);
if(cljs.core.truth_(child_46074)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46074);


var G__46075 = cljs.core.next(seq__44711_46066__$1);
var G__46076 = null;
var G__46077 = (0);
var G__46078 = (0);
seq__44711_46051 = G__46075;
chunk__44713_46052 = G__46076;
count__44714_46053 = G__46077;
i__44715_46054 = G__46078;
continue;
} else {
var G__46080 = cljs.core.next(seq__44711_46066__$1);
var G__46082 = null;
var G__46083 = (0);
var G__46084 = (0);
seq__44711_46051 = G__46080;
chunk__44713_46052 = G__46082;
count__44714_46053 = G__46083;
i__44715_46054 = G__46084;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46050);
}


var G__46086 = cljs.core.next(seq__44579_46043__$1);
var G__46087 = null;
var G__46088 = (0);
var G__46089 = (0);
seq__44579_45994 = G__46086;
chunk__44580_45995 = G__46087;
count__44581_45996 = G__46088;
i__44582_45997 = G__46089;
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
var seq__44766 = cljs.core.seq(node);
var chunk__44767 = null;
var count__44768 = (0);
var i__44769 = (0);
while(true){
if((i__44769 < count__44768)){
var n = chunk__44767.cljs$core$IIndexed$_nth$arity$2(null,i__44769);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46098 = seq__44766;
var G__46099 = chunk__44767;
var G__46100 = count__44768;
var G__46101 = (i__44769 + (1));
seq__44766 = G__46098;
chunk__44767 = G__46099;
count__44768 = G__46100;
i__44769 = G__46101;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44766);
if(temp__5804__auto__){
var seq__44766__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44766__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44766__$1);
var G__46103 = cljs.core.chunk_rest(seq__44766__$1);
var G__46104 = c__5568__auto__;
var G__46105 = cljs.core.count(c__5568__auto__);
var G__46106 = (0);
seq__44766 = G__46103;
chunk__44767 = G__46104;
count__44768 = G__46105;
i__44769 = G__46106;
continue;
} else {
var n = cljs.core.first(seq__44766__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46107 = cljs.core.next(seq__44766__$1);
var G__46108 = null;
var G__46109 = (0);
var G__46110 = (0);
seq__44766 = G__46107;
chunk__44767 = G__46108;
count__44768 = G__46109;
i__44769 = G__46110;
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
var G__44803 = arguments.length;
switch (G__44803) {
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
var G__44811 = arguments.length;
switch (G__44811) {
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
var G__44835 = arguments.length;
switch (G__44835) {
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
var len__5769__auto___46128 = arguments.length;
var i__5770__auto___46129 = (0);
while(true){
if((i__5770__auto___46129 < len__5769__auto___46128)){
args__5775__auto__.push((arguments[i__5770__auto___46129]));

var G__46130 = (i__5770__auto___46129 + (1));
i__5770__auto___46129 = G__46130;
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
var seq__44873_46132 = cljs.core.seq(nodes);
var chunk__44874_46133 = null;
var count__44875_46134 = (0);
var i__44876_46135 = (0);
while(true){
if((i__44876_46135 < count__44875_46134)){
var node_46136 = chunk__44874_46133.cljs$core$IIndexed$_nth$arity$2(null,i__44876_46135);
fragment.appendChild(shadow.dom._to_dom(node_46136));


var G__46137 = seq__44873_46132;
var G__46138 = chunk__44874_46133;
var G__46139 = count__44875_46134;
var G__46140 = (i__44876_46135 + (1));
seq__44873_46132 = G__46137;
chunk__44874_46133 = G__46138;
count__44875_46134 = G__46139;
i__44876_46135 = G__46140;
continue;
} else {
var temp__5804__auto___46141 = cljs.core.seq(seq__44873_46132);
if(temp__5804__auto___46141){
var seq__44873_46142__$1 = temp__5804__auto___46141;
if(cljs.core.chunked_seq_QMARK_(seq__44873_46142__$1)){
var c__5568__auto___46143 = cljs.core.chunk_first(seq__44873_46142__$1);
var G__46144 = cljs.core.chunk_rest(seq__44873_46142__$1);
var G__46145 = c__5568__auto___46143;
var G__46146 = cljs.core.count(c__5568__auto___46143);
var G__46147 = (0);
seq__44873_46132 = G__46144;
chunk__44874_46133 = G__46145;
count__44875_46134 = G__46146;
i__44876_46135 = G__46147;
continue;
} else {
var node_46148 = cljs.core.first(seq__44873_46142__$1);
fragment.appendChild(shadow.dom._to_dom(node_46148));


var G__46149 = cljs.core.next(seq__44873_46142__$1);
var G__46150 = null;
var G__46151 = (0);
var G__46152 = (0);
seq__44873_46132 = G__46149;
chunk__44874_46133 = G__46150;
count__44875_46134 = G__46151;
i__44876_46135 = G__46152;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44858){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44858));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44901_46157 = cljs.core.seq(scripts);
var chunk__44902_46158 = null;
var count__44903_46159 = (0);
var i__44904_46160 = (0);
while(true){
if((i__44904_46160 < count__44903_46159)){
var vec__44931_46163 = chunk__44902_46158.cljs$core$IIndexed$_nth$arity$2(null,i__44904_46160);
var script_tag_46164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44931_46163,(0),null);
var script_body_46165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44931_46163,(1),null);
eval(script_body_46165);


var G__46169 = seq__44901_46157;
var G__46170 = chunk__44902_46158;
var G__46171 = count__44903_46159;
var G__46172 = (i__44904_46160 + (1));
seq__44901_46157 = G__46169;
chunk__44902_46158 = G__46170;
count__44903_46159 = G__46171;
i__44904_46160 = G__46172;
continue;
} else {
var temp__5804__auto___46173 = cljs.core.seq(seq__44901_46157);
if(temp__5804__auto___46173){
var seq__44901_46176__$1 = temp__5804__auto___46173;
if(cljs.core.chunked_seq_QMARK_(seq__44901_46176__$1)){
var c__5568__auto___46177 = cljs.core.chunk_first(seq__44901_46176__$1);
var G__46178 = cljs.core.chunk_rest(seq__44901_46176__$1);
var G__46179 = c__5568__auto___46177;
var G__46180 = cljs.core.count(c__5568__auto___46177);
var G__46181 = (0);
seq__44901_46157 = G__46178;
chunk__44902_46158 = G__46179;
count__44903_46159 = G__46180;
i__44904_46160 = G__46181;
continue;
} else {
var vec__44941_46182 = cljs.core.first(seq__44901_46176__$1);
var script_tag_46183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941_46182,(0),null);
var script_body_46184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44941_46182,(1),null);
eval(script_body_46184);


var G__46185 = cljs.core.next(seq__44901_46176__$1);
var G__46186 = null;
var G__46187 = (0);
var G__46188 = (0);
seq__44901_46157 = G__46185;
chunk__44902_46158 = G__46186;
count__44903_46159 = G__46187;
i__44904_46160 = G__46188;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44947){
var vec__44948 = p__44947;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(1),null);
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
var G__44969 = arguments.length;
switch (G__44969) {
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
var seq__45014 = cljs.core.seq(style_keys);
var chunk__45015 = null;
var count__45016 = (0);
var i__45017 = (0);
while(true){
if((i__45017 < count__45016)){
var it = chunk__45015.cljs$core$IIndexed$_nth$arity$2(null,i__45017);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46211 = seq__45014;
var G__46212 = chunk__45015;
var G__46213 = count__45016;
var G__46214 = (i__45017 + (1));
seq__45014 = G__46211;
chunk__45015 = G__46212;
count__45016 = G__46213;
i__45017 = G__46214;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45014);
if(temp__5804__auto__){
var seq__45014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45014__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45014__$1);
var G__46215 = cljs.core.chunk_rest(seq__45014__$1);
var G__46216 = c__5568__auto__;
var G__46217 = cljs.core.count(c__5568__auto__);
var G__46218 = (0);
seq__45014 = G__46215;
chunk__45015 = G__46216;
count__45016 = G__46217;
i__45017 = G__46218;
continue;
} else {
var it = cljs.core.first(seq__45014__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46222 = cljs.core.next(seq__45014__$1);
var G__46223 = null;
var G__46224 = (0);
var G__46225 = (0);
seq__45014 = G__46222;
chunk__45015 = G__46223;
count__45016 = G__46224;
i__45017 = G__46225;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k45040,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__45052 = k45040;
var G__45052__$1 = (((G__45052 instanceof cljs.core.Keyword))?G__45052.fqn:null);
switch (G__45052__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45040,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__45066){
var vec__45068 = p__45066;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45068,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45039){
var self__ = this;
var G__45039__$1 = this;
return (new cljs.core.RecordIter((0),G__45039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45041,other45042){
var self__ = this;
var this45041__$1 = this;
return (((!((other45042 == null)))) && ((((this45041__$1.constructor === other45042.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45041__$1.x,other45042.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45041__$1.y,other45042.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45041__$1.__extmap,other45042.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k45040){
var self__ = this;
var this__5350__auto____$1 = this;
var G__45127 = k45040;
var G__45127__$1 = (((G__45127 instanceof cljs.core.Keyword))?G__45127.fqn:null);
switch (G__45127__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45040);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__45039){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__45142 = cljs.core.keyword_identical_QMARK_;
var expr__45143 = k__5352__auto__;
if(cljs.core.truth_((pred__45142.cljs$core$IFn$_invoke$arity$2 ? pred__45142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45143) : pred__45142.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45143)))){
return (new shadow.dom.Coordinate(G__45039,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45142.cljs$core$IFn$_invoke$arity$2 ? pred__45142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45143) : pred__45142.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45143)))){
return (new shadow.dom.Coordinate(self__.x,G__45039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__45039),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__45039){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45039,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45044){
var extmap__5385__auto__ = (function (){var G__45166 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45044,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45044)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45166);
} else {
return G__45166;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45044),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45044),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k45204,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__45225 = k45204;
var G__45225__$1 = (((G__45225 instanceof cljs.core.Keyword))?G__45225.fqn:null);
switch (G__45225__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45204,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__45238){
var vec__45242 = p__45238;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45242,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45203){
var self__ = this;
var G__45203__$1 = this;
return (new cljs.core.RecordIter((0),G__45203__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45205,other45206){
var self__ = this;
var this45205__$1 = this;
return (((!((other45206 == null)))) && ((((this45205__$1.constructor === other45206.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45205__$1.w,other45206.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45205__$1.h,other45206.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45205__$1.__extmap,other45206.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k45204){
var self__ = this;
var this__5350__auto____$1 = this;
var G__45305 = k45204;
var G__45305__$1 = (((G__45305 instanceof cljs.core.Keyword))?G__45305.fqn:null);
switch (G__45305__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45204);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__45203){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__45309 = cljs.core.keyword_identical_QMARK_;
var expr__45310 = k__5352__auto__;
if(cljs.core.truth_((pred__45309.cljs$core$IFn$_invoke$arity$2 ? pred__45309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45310) : pred__45309.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45310)))){
return (new shadow.dom.Size(G__45203,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45309.cljs$core$IFn$_invoke$arity$2 ? pred__45309.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45310) : pred__45309.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45310)))){
return (new shadow.dom.Size(self__.w,G__45203,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__45203),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__45203){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45203,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45211){
var extmap__5385__auto__ = (function (){var G__45366 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45211,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45211)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45366);
} else {
return G__45366;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45211),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45211),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__46316 = (i + (1));
var G__46317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46316;
ret = G__46317;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45435){
var vec__45436 = p__45435;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45436,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45436,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45474 = arguments.length;
switch (G__45474) {
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
var G__46332 = ps;
var G__46333 = (i + (1));
el__$1 = G__46332;
i = G__46333;
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
var vec__45550 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45561_46337 = cljs.core.seq(props);
var chunk__45562_46338 = null;
var count__45563_46339 = (0);
var i__45564_46340 = (0);
while(true){
if((i__45564_46340 < count__45563_46339)){
var vec__45600_46341 = chunk__45562_46338.cljs$core$IIndexed$_nth$arity$2(null,i__45564_46340);
var k_46342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45600_46341,(0),null);
var v_46343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45600_46341,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46342);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46342),v_46343);


var G__46344 = seq__45561_46337;
var G__46345 = chunk__45562_46338;
var G__46346 = count__45563_46339;
var G__46347 = (i__45564_46340 + (1));
seq__45561_46337 = G__46344;
chunk__45562_46338 = G__46345;
count__45563_46339 = G__46346;
i__45564_46340 = G__46347;
continue;
} else {
var temp__5804__auto___46348 = cljs.core.seq(seq__45561_46337);
if(temp__5804__auto___46348){
var seq__45561_46349__$1 = temp__5804__auto___46348;
if(cljs.core.chunked_seq_QMARK_(seq__45561_46349__$1)){
var c__5568__auto___46350 = cljs.core.chunk_first(seq__45561_46349__$1);
var G__46351 = cljs.core.chunk_rest(seq__45561_46349__$1);
var G__46352 = c__5568__auto___46350;
var G__46353 = cljs.core.count(c__5568__auto___46350);
var G__46354 = (0);
seq__45561_46337 = G__46351;
chunk__45562_46338 = G__46352;
count__45563_46339 = G__46353;
i__45564_46340 = G__46354;
continue;
} else {
var vec__45611_46355 = cljs.core.first(seq__45561_46349__$1);
var k_46356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611_46355,(0),null);
var v_46357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611_46355,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46356);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46356),v_46357);


var G__46358 = cljs.core.next(seq__45561_46349__$1);
var G__46359 = null;
var G__46360 = (0);
var G__46361 = (0);
seq__45561_46337 = G__46358;
chunk__45562_46338 = G__46359;
count__45563_46339 = G__46360;
i__45564_46340 = G__46361;
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
var vec__45643 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643,(1),null);
var seq__45646_46362 = cljs.core.seq(node_children);
var chunk__45648_46363 = null;
var count__45649_46364 = (0);
var i__45650_46365 = (0);
while(true){
if((i__45650_46365 < count__45649_46364)){
var child_struct_46366 = chunk__45648_46363.cljs$core$IIndexed$_nth$arity$2(null,i__45650_46365);
if((!((child_struct_46366 == null)))){
if(typeof child_struct_46366 === 'string'){
var text_46367 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46367),child_struct_46366].join(''));
} else {
var children_46368 = shadow.dom.svg_node(child_struct_46366);
if(cljs.core.seq_QMARK_(children_46368)){
var seq__45741_46369 = cljs.core.seq(children_46368);
var chunk__45743_46370 = null;
var count__45744_46371 = (0);
var i__45745_46372 = (0);
while(true){
if((i__45745_46372 < count__45744_46371)){
var child_46373 = chunk__45743_46370.cljs$core$IIndexed$_nth$arity$2(null,i__45745_46372);
if(cljs.core.truth_(child_46373)){
node.appendChild(child_46373);


var G__46374 = seq__45741_46369;
var G__46375 = chunk__45743_46370;
var G__46376 = count__45744_46371;
var G__46377 = (i__45745_46372 + (1));
seq__45741_46369 = G__46374;
chunk__45743_46370 = G__46375;
count__45744_46371 = G__46376;
i__45745_46372 = G__46377;
continue;
} else {
var G__46378 = seq__45741_46369;
var G__46379 = chunk__45743_46370;
var G__46380 = count__45744_46371;
var G__46381 = (i__45745_46372 + (1));
seq__45741_46369 = G__46378;
chunk__45743_46370 = G__46379;
count__45744_46371 = G__46380;
i__45745_46372 = G__46381;
continue;
}
} else {
var temp__5804__auto___46382 = cljs.core.seq(seq__45741_46369);
if(temp__5804__auto___46382){
var seq__45741_46383__$1 = temp__5804__auto___46382;
if(cljs.core.chunked_seq_QMARK_(seq__45741_46383__$1)){
var c__5568__auto___46384 = cljs.core.chunk_first(seq__45741_46383__$1);
var G__46385 = cljs.core.chunk_rest(seq__45741_46383__$1);
var G__46386 = c__5568__auto___46384;
var G__46387 = cljs.core.count(c__5568__auto___46384);
var G__46388 = (0);
seq__45741_46369 = G__46385;
chunk__45743_46370 = G__46386;
count__45744_46371 = G__46387;
i__45745_46372 = G__46388;
continue;
} else {
var child_46389 = cljs.core.first(seq__45741_46383__$1);
if(cljs.core.truth_(child_46389)){
node.appendChild(child_46389);


var G__46390 = cljs.core.next(seq__45741_46383__$1);
var G__46391 = null;
var G__46392 = (0);
var G__46393 = (0);
seq__45741_46369 = G__46390;
chunk__45743_46370 = G__46391;
count__45744_46371 = G__46392;
i__45745_46372 = G__46393;
continue;
} else {
var G__46394 = cljs.core.next(seq__45741_46383__$1);
var G__46395 = null;
var G__46396 = (0);
var G__46397 = (0);
seq__45741_46369 = G__46394;
chunk__45743_46370 = G__46395;
count__45744_46371 = G__46396;
i__45745_46372 = G__46397;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46368);
}
}


var G__46401 = seq__45646_46362;
var G__46402 = chunk__45648_46363;
var G__46403 = count__45649_46364;
var G__46404 = (i__45650_46365 + (1));
seq__45646_46362 = G__46401;
chunk__45648_46363 = G__46402;
count__45649_46364 = G__46403;
i__45650_46365 = G__46404;
continue;
} else {
var G__46405 = seq__45646_46362;
var G__46406 = chunk__45648_46363;
var G__46407 = count__45649_46364;
var G__46408 = (i__45650_46365 + (1));
seq__45646_46362 = G__46405;
chunk__45648_46363 = G__46406;
count__45649_46364 = G__46407;
i__45650_46365 = G__46408;
continue;
}
} else {
var temp__5804__auto___46414 = cljs.core.seq(seq__45646_46362);
if(temp__5804__auto___46414){
var seq__45646_46419__$1 = temp__5804__auto___46414;
if(cljs.core.chunked_seq_QMARK_(seq__45646_46419__$1)){
var c__5568__auto___46420 = cljs.core.chunk_first(seq__45646_46419__$1);
var G__46421 = cljs.core.chunk_rest(seq__45646_46419__$1);
var G__46422 = c__5568__auto___46420;
var G__46423 = cljs.core.count(c__5568__auto___46420);
var G__46424 = (0);
seq__45646_46362 = G__46421;
chunk__45648_46363 = G__46422;
count__45649_46364 = G__46423;
i__45650_46365 = G__46424;
continue;
} else {
var child_struct_46425 = cljs.core.first(seq__45646_46419__$1);
if((!((child_struct_46425 == null)))){
if(typeof child_struct_46425 === 'string'){
var text_46426 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46426),child_struct_46425].join(''));
} else {
var children_46427 = shadow.dom.svg_node(child_struct_46425);
if(cljs.core.seq_QMARK_(children_46427)){
var seq__45772_46428 = cljs.core.seq(children_46427);
var chunk__45774_46429 = null;
var count__45775_46430 = (0);
var i__45776_46431 = (0);
while(true){
if((i__45776_46431 < count__45775_46430)){
var child_46432 = chunk__45774_46429.cljs$core$IIndexed$_nth$arity$2(null,i__45776_46431);
if(cljs.core.truth_(child_46432)){
node.appendChild(child_46432);


var G__46433 = seq__45772_46428;
var G__46434 = chunk__45774_46429;
var G__46435 = count__45775_46430;
var G__46436 = (i__45776_46431 + (1));
seq__45772_46428 = G__46433;
chunk__45774_46429 = G__46434;
count__45775_46430 = G__46435;
i__45776_46431 = G__46436;
continue;
} else {
var G__46437 = seq__45772_46428;
var G__46438 = chunk__45774_46429;
var G__46439 = count__45775_46430;
var G__46440 = (i__45776_46431 + (1));
seq__45772_46428 = G__46437;
chunk__45774_46429 = G__46438;
count__45775_46430 = G__46439;
i__45776_46431 = G__46440;
continue;
}
} else {
var temp__5804__auto___46441__$1 = cljs.core.seq(seq__45772_46428);
if(temp__5804__auto___46441__$1){
var seq__45772_46442__$1 = temp__5804__auto___46441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45772_46442__$1)){
var c__5568__auto___46443 = cljs.core.chunk_first(seq__45772_46442__$1);
var G__46444 = cljs.core.chunk_rest(seq__45772_46442__$1);
var G__46445 = c__5568__auto___46443;
var G__46446 = cljs.core.count(c__5568__auto___46443);
var G__46447 = (0);
seq__45772_46428 = G__46444;
chunk__45774_46429 = G__46445;
count__45775_46430 = G__46446;
i__45776_46431 = G__46447;
continue;
} else {
var child_46448 = cljs.core.first(seq__45772_46442__$1);
if(cljs.core.truth_(child_46448)){
node.appendChild(child_46448);


var G__46450 = cljs.core.next(seq__45772_46442__$1);
var G__46451 = null;
var G__46452 = (0);
var G__46454 = (0);
seq__45772_46428 = G__46450;
chunk__45774_46429 = G__46451;
count__45775_46430 = G__46452;
i__45776_46431 = G__46454;
continue;
} else {
var G__46457 = cljs.core.next(seq__45772_46442__$1);
var G__46458 = null;
var G__46459 = (0);
var G__46460 = (0);
seq__45772_46428 = G__46457;
chunk__45774_46429 = G__46458;
count__45775_46430 = G__46459;
i__45776_46431 = G__46460;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46427);
}
}


var G__46461 = cljs.core.next(seq__45646_46419__$1);
var G__46462 = null;
var G__46463 = (0);
var G__46464 = (0);
seq__45646_46362 = G__46461;
chunk__45648_46363 = G__46462;
count__45649_46364 = G__46463;
i__45650_46365 = G__46464;
continue;
} else {
var G__46465 = cljs.core.next(seq__45646_46419__$1);
var G__46466 = null;
var G__46467 = (0);
var G__46468 = (0);
seq__45646_46362 = G__46465;
chunk__45648_46363 = G__46466;
count__45649_46364 = G__46467;
i__45650_46365 = G__46468;
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
var len__5769__auto___46497 = arguments.length;
var i__5770__auto___46498 = (0);
while(true){
if((i__5770__auto___46498 < len__5769__auto___46497)){
args__5775__auto__.push((arguments[i__5770__auto___46498]));

var G__46499 = (i__5770__auto___46498 + (1));
i__5770__auto___46498 = G__46499;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45812){
var G__45813 = cljs.core.first(seq45812);
var seq45812__$1 = cljs.core.next(seq45812);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45813,seq45812__$1);
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
var G__45827 = arguments.length;
switch (G__45827) {
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
var c__33523__auto___46506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33524__auto__ = (function (){var switch__33257__auto__ = (function (state_45840){
var state_val_45841 = (state_45840[(1)]);
if((state_val_45841 === (1))){
var state_45840__$1 = state_45840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45840__$1,(2),once_or_cleanup);
} else {
if((state_val_45841 === (2))){
var inst_45837 = (state_45840[(2)]);
var inst_45838 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45840__$1 = (function (){var statearr_45845 = state_45840;
(statearr_45845[(7)] = inst_45837);

return statearr_45845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45840__$1,inst_45838);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33258__auto__ = null;
var shadow$dom$state_machine__33258__auto____0 = (function (){
var statearr_45846 = [null,null,null,null,null,null,null,null];
(statearr_45846[(0)] = shadow$dom$state_machine__33258__auto__);

(statearr_45846[(1)] = (1));

return statearr_45846;
});
var shadow$dom$state_machine__33258__auto____1 = (function (state_45840){
while(true){
var ret_value__33259__auto__ = (function (){try{while(true){
var result__33260__auto__ = switch__33257__auto__(state_45840);
if(cljs.core.keyword_identical_QMARK_(result__33260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33260__auto__;
}
break;
}
}catch (e45849){var ex__33261__auto__ = e45849;
var statearr_45850_46510 = state_45840;
(statearr_45850_46510[(2)] = ex__33261__auto__);


if(cljs.core.seq((state_45840[(4)]))){
var statearr_45851_46511 = state_45840;
(statearr_45851_46511[(1)] = cljs.core.first((state_45840[(4)])));

} else {
throw ex__33261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46512 = state_45840;
state_45840 = G__46512;
continue;
} else {
return ret_value__33259__auto__;
}
break;
}
});
shadow$dom$state_machine__33258__auto__ = function(state_45840){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33258__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33258__auto____1.call(this,state_45840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33258__auto____0;
shadow$dom$state_machine__33258__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33258__auto____1;
return shadow$dom$state_machine__33258__auto__;
})()
})();
var state__33525__auto__ = (function (){var statearr_45861 = f__33524__auto__();
(statearr_45861[(6)] = c__33523__auto___46506);

return statearr_45861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33525__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
