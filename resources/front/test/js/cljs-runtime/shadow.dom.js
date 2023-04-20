goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_54893 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_54893(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_54894 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_54894(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__53513 = coll;
var G__53514 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__53513,G__53514) : shadow.dom.lazy_native_coll_seq.call(null,G__53513,G__53514));
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
var G__53550 = arguments.length;
switch (G__53550) {
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
var G__53560 = arguments.length;
switch (G__53560) {
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
var G__53573 = arguments.length;
switch (G__53573) {
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
var G__53587 = arguments.length;
switch (G__53587) {
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
var G__53597 = arguments.length;
switch (G__53597) {
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
var G__53636 = arguments.length;
switch (G__53636) {
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
}catch (e53646){if((e53646 instanceof Object)){
var e = e53646;
return console.log("didnt support attachEvent",el,e);
} else {
throw e53646;

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
var seq__53657 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__53658 = null;
var count__53659 = (0);
var i__53660 = (0);
while(true){
if((i__53660 < count__53659)){
var el = chunk__53658.cljs$core$IIndexed$_nth$arity$2(null,i__53660);
var handler_54907__$1 = ((function (seq__53657,chunk__53658,count__53659,i__53660,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53657,chunk__53658,count__53659,i__53660,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54907__$1);


var G__54909 = seq__53657;
var G__54910 = chunk__53658;
var G__54911 = count__53659;
var G__54912 = (i__53660 + (1));
seq__53657 = G__54909;
chunk__53658 = G__54910;
count__53659 = G__54911;
i__53660 = G__54912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53657);
if(temp__5804__auto__){
var seq__53657__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53657__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53657__$1);
var G__54913 = cljs.core.chunk_rest(seq__53657__$1);
var G__54914 = c__5568__auto__;
var G__54915 = cljs.core.count(c__5568__auto__);
var G__54916 = (0);
seq__53657 = G__54913;
chunk__53658 = G__54914;
count__53659 = G__54915;
i__53660 = G__54916;
continue;
} else {
var el = cljs.core.first(seq__53657__$1);
var handler_54917__$1 = ((function (seq__53657,chunk__53658,count__53659,i__53660,el,seq__53657__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__53657,chunk__53658,count__53659,i__53660,el,seq__53657__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_54917__$1);


var G__54918 = cljs.core.next(seq__53657__$1);
var G__54919 = null;
var G__54920 = (0);
var G__54921 = (0);
seq__53657 = G__54918;
chunk__53658 = G__54919;
count__53659 = G__54920;
i__53660 = G__54921;
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
var G__53669 = arguments.length;
switch (G__53669) {
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
var seq__53695 = cljs.core.seq(events);
var chunk__53696 = null;
var count__53697 = (0);
var i__53698 = (0);
while(true){
if((i__53698 < count__53697)){
var vec__53728 = chunk__53696.cljs$core$IIndexed$_nth$arity$2(null,i__53698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53728,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54923 = seq__53695;
var G__54924 = chunk__53696;
var G__54925 = count__53697;
var G__54926 = (i__53698 + (1));
seq__53695 = G__54923;
chunk__53696 = G__54924;
count__53697 = G__54925;
i__53698 = G__54926;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53695);
if(temp__5804__auto__){
var seq__53695__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53695__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53695__$1);
var G__54927 = cljs.core.chunk_rest(seq__53695__$1);
var G__54928 = c__5568__auto__;
var G__54929 = cljs.core.count(c__5568__auto__);
var G__54930 = (0);
seq__53695 = G__54927;
chunk__53696 = G__54928;
count__53697 = G__54929;
i__53698 = G__54930;
continue;
} else {
var vec__53735 = cljs.core.first(seq__53695__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53735,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__54931 = cljs.core.next(seq__53695__$1);
var G__54932 = null;
var G__54933 = (0);
var G__54934 = (0);
seq__53695 = G__54931;
chunk__53696 = G__54932;
count__53697 = G__54933;
i__53698 = G__54934;
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
var seq__53742 = cljs.core.seq(styles);
var chunk__53743 = null;
var count__53744 = (0);
var i__53745 = (0);
while(true){
if((i__53745 < count__53744)){
var vec__53760 = chunk__53743.cljs$core$IIndexed$_nth$arity$2(null,i__53745);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53760,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54935 = seq__53742;
var G__54936 = chunk__53743;
var G__54937 = count__53744;
var G__54938 = (i__53745 + (1));
seq__53742 = G__54935;
chunk__53743 = G__54936;
count__53744 = G__54937;
i__53745 = G__54938;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53742);
if(temp__5804__auto__){
var seq__53742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53742__$1);
var G__54939 = cljs.core.chunk_rest(seq__53742__$1);
var G__54940 = c__5568__auto__;
var G__54941 = cljs.core.count(c__5568__auto__);
var G__54942 = (0);
seq__53742 = G__54939;
chunk__53743 = G__54940;
count__53744 = G__54941;
i__53745 = G__54942;
continue;
} else {
var vec__53766 = cljs.core.first(seq__53742__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53766,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__54943 = cljs.core.next(seq__53742__$1);
var G__54944 = null;
var G__54945 = (0);
var G__54946 = (0);
seq__53742 = G__54943;
chunk__53743 = G__54944;
count__53744 = G__54945;
i__53745 = G__54946;
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
var G__53803_54947 = key;
var G__53803_54948__$1 = (((G__53803_54947 instanceof cljs.core.Keyword))?G__53803_54947.fqn:null);
switch (G__53803_54948__$1) {
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
var ks_54952 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_54952,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_54952,"aria-");
}
})())){
el.setAttribute(ks_54952,value);
} else {
(el[ks_54952] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__53831){
var map__53832 = p__53831;
var map__53832__$1 = cljs.core.__destructure_map(map__53832);
var props = map__53832__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__53834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53834,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__53839 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__53839,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__53839;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__53846 = arguments.length;
switch (G__53846) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__53855){
var vec__53856 = p__53855;
var seq__53857 = cljs.core.seq(vec__53856);
var first__53858 = cljs.core.first(seq__53857);
var seq__53857__$1 = cljs.core.next(seq__53857);
var nn = first__53858;
var first__53858__$1 = cljs.core.first(seq__53857__$1);
var seq__53857__$2 = cljs.core.next(seq__53857__$1);
var np = first__53858__$1;
var nc = seq__53857__$2;
var node = vec__53856;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53860 = nn;
var G__53861 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53860,G__53861) : create_fn.call(null,G__53860,G__53861));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53862 = nn;
var G__53863 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__53862,G__53863) : create_fn.call(null,G__53862,G__53863));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__53869 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53869,(1),null);
var seq__53872_54957 = cljs.core.seq(node_children);
var chunk__53873_54958 = null;
var count__53874_54959 = (0);
var i__53875_54960 = (0);
while(true){
if((i__53875_54960 < count__53874_54959)){
var child_struct_54961 = chunk__53873_54958.cljs$core$IIndexed$_nth$arity$2(null,i__53875_54960);
var children_54962 = shadow.dom.dom_node(child_struct_54961);
if(cljs.core.seq_QMARK_(children_54962)){
var seq__53943_54963 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54962));
var chunk__53945_54964 = null;
var count__53946_54965 = (0);
var i__53947_54966 = (0);
while(true){
if((i__53947_54966 < count__53946_54965)){
var child_54967 = chunk__53945_54964.cljs$core$IIndexed$_nth$arity$2(null,i__53947_54966);
if(cljs.core.truth_(child_54967)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54967);


var G__54968 = seq__53943_54963;
var G__54969 = chunk__53945_54964;
var G__54970 = count__53946_54965;
var G__54971 = (i__53947_54966 + (1));
seq__53943_54963 = G__54968;
chunk__53945_54964 = G__54969;
count__53946_54965 = G__54970;
i__53947_54966 = G__54971;
continue;
} else {
var G__54972 = seq__53943_54963;
var G__54973 = chunk__53945_54964;
var G__54974 = count__53946_54965;
var G__54975 = (i__53947_54966 + (1));
seq__53943_54963 = G__54972;
chunk__53945_54964 = G__54973;
count__53946_54965 = G__54974;
i__53947_54966 = G__54975;
continue;
}
} else {
var temp__5804__auto___54976 = cljs.core.seq(seq__53943_54963);
if(temp__5804__auto___54976){
var seq__53943_54978__$1 = temp__5804__auto___54976;
if(cljs.core.chunked_seq_QMARK_(seq__53943_54978__$1)){
var c__5568__auto___54979 = cljs.core.chunk_first(seq__53943_54978__$1);
var G__54980 = cljs.core.chunk_rest(seq__53943_54978__$1);
var G__54981 = c__5568__auto___54979;
var G__54982 = cljs.core.count(c__5568__auto___54979);
var G__54983 = (0);
seq__53943_54963 = G__54980;
chunk__53945_54964 = G__54981;
count__53946_54965 = G__54982;
i__53947_54966 = G__54983;
continue;
} else {
var child_54984 = cljs.core.first(seq__53943_54978__$1);
if(cljs.core.truth_(child_54984)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54984);


var G__54985 = cljs.core.next(seq__53943_54978__$1);
var G__54986 = null;
var G__54987 = (0);
var G__54988 = (0);
seq__53943_54963 = G__54985;
chunk__53945_54964 = G__54986;
count__53946_54965 = G__54987;
i__53947_54966 = G__54988;
continue;
} else {
var G__54989 = cljs.core.next(seq__53943_54978__$1);
var G__54990 = null;
var G__54991 = (0);
var G__54992 = (0);
seq__53943_54963 = G__54989;
chunk__53945_54964 = G__54990;
count__53946_54965 = G__54991;
i__53947_54966 = G__54992;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54962);
}


var G__54993 = seq__53872_54957;
var G__54994 = chunk__53873_54958;
var G__54995 = count__53874_54959;
var G__54996 = (i__53875_54960 + (1));
seq__53872_54957 = G__54993;
chunk__53873_54958 = G__54994;
count__53874_54959 = G__54995;
i__53875_54960 = G__54996;
continue;
} else {
var temp__5804__auto___54997 = cljs.core.seq(seq__53872_54957);
if(temp__5804__auto___54997){
var seq__53872_54998__$1 = temp__5804__auto___54997;
if(cljs.core.chunked_seq_QMARK_(seq__53872_54998__$1)){
var c__5568__auto___54999 = cljs.core.chunk_first(seq__53872_54998__$1);
var G__55000 = cljs.core.chunk_rest(seq__53872_54998__$1);
var G__55001 = c__5568__auto___54999;
var G__55002 = cljs.core.count(c__5568__auto___54999);
var G__55003 = (0);
seq__53872_54957 = G__55000;
chunk__53873_54958 = G__55001;
count__53874_54959 = G__55002;
i__53875_54960 = G__55003;
continue;
} else {
var child_struct_55004 = cljs.core.first(seq__53872_54998__$1);
var children_55005 = shadow.dom.dom_node(child_struct_55004);
if(cljs.core.seq_QMARK_(children_55005)){
var seq__53956_55006 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_55005));
var chunk__53958_55007 = null;
var count__53959_55008 = (0);
var i__53960_55009 = (0);
while(true){
if((i__53960_55009 < count__53959_55008)){
var child_55010 = chunk__53958_55007.cljs$core$IIndexed$_nth$arity$2(null,i__53960_55009);
if(cljs.core.truth_(child_55010)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55010);


var G__55011 = seq__53956_55006;
var G__55012 = chunk__53958_55007;
var G__55013 = count__53959_55008;
var G__55014 = (i__53960_55009 + (1));
seq__53956_55006 = G__55011;
chunk__53958_55007 = G__55012;
count__53959_55008 = G__55013;
i__53960_55009 = G__55014;
continue;
} else {
var G__55015 = seq__53956_55006;
var G__55016 = chunk__53958_55007;
var G__55017 = count__53959_55008;
var G__55018 = (i__53960_55009 + (1));
seq__53956_55006 = G__55015;
chunk__53958_55007 = G__55016;
count__53959_55008 = G__55017;
i__53960_55009 = G__55018;
continue;
}
} else {
var temp__5804__auto___55019__$1 = cljs.core.seq(seq__53956_55006);
if(temp__5804__auto___55019__$1){
var seq__53956_55020__$1 = temp__5804__auto___55019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53956_55020__$1)){
var c__5568__auto___55021 = cljs.core.chunk_first(seq__53956_55020__$1);
var G__55022 = cljs.core.chunk_rest(seq__53956_55020__$1);
var G__55023 = c__5568__auto___55021;
var G__55024 = cljs.core.count(c__5568__auto___55021);
var G__55025 = (0);
seq__53956_55006 = G__55022;
chunk__53958_55007 = G__55023;
count__53959_55008 = G__55024;
i__53960_55009 = G__55025;
continue;
} else {
var child_55026 = cljs.core.first(seq__53956_55020__$1);
if(cljs.core.truth_(child_55026)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_55026);


var G__55027 = cljs.core.next(seq__53956_55020__$1);
var G__55028 = null;
var G__55029 = (0);
var G__55030 = (0);
seq__53956_55006 = G__55027;
chunk__53958_55007 = G__55028;
count__53959_55008 = G__55029;
i__53960_55009 = G__55030;
continue;
} else {
var G__55031 = cljs.core.next(seq__53956_55020__$1);
var G__55032 = null;
var G__55033 = (0);
var G__55034 = (0);
seq__53956_55006 = G__55031;
chunk__53958_55007 = G__55032;
count__53959_55008 = G__55033;
i__53960_55009 = G__55034;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_55005);
}


var G__55035 = cljs.core.next(seq__53872_54998__$1);
var G__55036 = null;
var G__55037 = (0);
var G__55038 = (0);
seq__53872_54957 = G__55035;
chunk__53873_54958 = G__55036;
count__53874_54959 = G__55037;
i__53875_54960 = G__55038;
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
var seq__53983 = cljs.core.seq(node);
var chunk__53984 = null;
var count__53985 = (0);
var i__53986 = (0);
while(true){
if((i__53986 < count__53985)){
var n = chunk__53984.cljs$core$IIndexed$_nth$arity$2(null,i__53986);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55039 = seq__53983;
var G__55040 = chunk__53984;
var G__55041 = count__53985;
var G__55042 = (i__53986 + (1));
seq__53983 = G__55039;
chunk__53984 = G__55040;
count__53985 = G__55041;
i__53986 = G__55042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53983);
if(temp__5804__auto__){
var seq__53983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53983__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53983__$1);
var G__55043 = cljs.core.chunk_rest(seq__53983__$1);
var G__55044 = c__5568__auto__;
var G__55045 = cljs.core.count(c__5568__auto__);
var G__55046 = (0);
seq__53983 = G__55043;
chunk__53984 = G__55044;
count__53985 = G__55045;
i__53986 = G__55046;
continue;
} else {
var n = cljs.core.first(seq__53983__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__55047 = cljs.core.next(seq__53983__$1);
var G__55048 = null;
var G__55049 = (0);
var G__55050 = (0);
seq__53983 = G__55047;
chunk__53984 = G__55048;
count__53985 = G__55049;
i__53986 = G__55050;
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
var G__53995 = arguments.length;
switch (G__53995) {
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
var G__54008 = arguments.length;
switch (G__54008) {
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
var G__54032 = arguments.length;
switch (G__54032) {
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
var len__5769__auto___55056 = arguments.length;
var i__5770__auto___55057 = (0);
while(true){
if((i__5770__auto___55057 < len__5769__auto___55056)){
args__5775__auto__.push((arguments[i__5770__auto___55057]));

var G__55058 = (i__5770__auto___55057 + (1));
i__5770__auto___55057 = G__55058;
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
var seq__54040_55059 = cljs.core.seq(nodes);
var chunk__54041_55060 = null;
var count__54042_55061 = (0);
var i__54043_55062 = (0);
while(true){
if((i__54043_55062 < count__54042_55061)){
var node_55063 = chunk__54041_55060.cljs$core$IIndexed$_nth$arity$2(null,i__54043_55062);
fragment.appendChild(shadow.dom._to_dom(node_55063));


var G__55064 = seq__54040_55059;
var G__55065 = chunk__54041_55060;
var G__55066 = count__54042_55061;
var G__55067 = (i__54043_55062 + (1));
seq__54040_55059 = G__55064;
chunk__54041_55060 = G__55065;
count__54042_55061 = G__55066;
i__54043_55062 = G__55067;
continue;
} else {
var temp__5804__auto___55068 = cljs.core.seq(seq__54040_55059);
if(temp__5804__auto___55068){
var seq__54040_55069__$1 = temp__5804__auto___55068;
if(cljs.core.chunked_seq_QMARK_(seq__54040_55069__$1)){
var c__5568__auto___55070 = cljs.core.chunk_first(seq__54040_55069__$1);
var G__55071 = cljs.core.chunk_rest(seq__54040_55069__$1);
var G__55072 = c__5568__auto___55070;
var G__55073 = cljs.core.count(c__5568__auto___55070);
var G__55074 = (0);
seq__54040_55059 = G__55071;
chunk__54041_55060 = G__55072;
count__54042_55061 = G__55073;
i__54043_55062 = G__55074;
continue;
} else {
var node_55075 = cljs.core.first(seq__54040_55069__$1);
fragment.appendChild(shadow.dom._to_dom(node_55075));


var G__55076 = cljs.core.next(seq__54040_55069__$1);
var G__55077 = null;
var G__55078 = (0);
var G__55079 = (0);
seq__54040_55059 = G__55076;
chunk__54041_55060 = G__55077;
count__54042_55061 = G__55078;
i__54043_55062 = G__55079;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq54039){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54039));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__54069_55080 = cljs.core.seq(scripts);
var chunk__54070_55081 = null;
var count__54071_55082 = (0);
var i__54072_55083 = (0);
while(true){
if((i__54072_55083 < count__54071_55082)){
var vec__54099_55084 = chunk__54070_55081.cljs$core$IIndexed$_nth$arity$2(null,i__54072_55083);
var script_tag_55085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54099_55084,(0),null);
var script_body_55086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54099_55084,(1),null);
eval(script_body_55086);


var G__55087 = seq__54069_55080;
var G__55088 = chunk__54070_55081;
var G__55089 = count__54071_55082;
var G__55090 = (i__54072_55083 + (1));
seq__54069_55080 = G__55087;
chunk__54070_55081 = G__55088;
count__54071_55082 = G__55089;
i__54072_55083 = G__55090;
continue;
} else {
var temp__5804__auto___55091 = cljs.core.seq(seq__54069_55080);
if(temp__5804__auto___55091){
var seq__54069_55092__$1 = temp__5804__auto___55091;
if(cljs.core.chunked_seq_QMARK_(seq__54069_55092__$1)){
var c__5568__auto___55093 = cljs.core.chunk_first(seq__54069_55092__$1);
var G__55094 = cljs.core.chunk_rest(seq__54069_55092__$1);
var G__55095 = c__5568__auto___55093;
var G__55096 = cljs.core.count(c__5568__auto___55093);
var G__55097 = (0);
seq__54069_55080 = G__55094;
chunk__54070_55081 = G__55095;
count__54071_55082 = G__55096;
i__54072_55083 = G__55097;
continue;
} else {
var vec__54105_55098 = cljs.core.first(seq__54069_55092__$1);
var script_tag_55099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54105_55098,(0),null);
var script_body_55100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54105_55098,(1),null);
eval(script_body_55100);


var G__55101 = cljs.core.next(seq__54069_55092__$1);
var G__55102 = null;
var G__55103 = (0);
var G__55104 = (0);
seq__54069_55080 = G__55101;
chunk__54070_55081 = G__55102;
count__54071_55082 = G__55103;
i__54072_55083 = G__55104;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__54110){
var vec__54111 = p__54110;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54111,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54111,(1),null);
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
var G__54128 = arguments.length;
switch (G__54128) {
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
var seq__54155 = cljs.core.seq(style_keys);
var chunk__54156 = null;
var count__54157 = (0);
var i__54158 = (0);
while(true){
if((i__54158 < count__54157)){
var it = chunk__54156.cljs$core$IIndexed$_nth$arity$2(null,i__54158);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55106 = seq__54155;
var G__55107 = chunk__54156;
var G__55108 = count__54157;
var G__55109 = (i__54158 + (1));
seq__54155 = G__55106;
chunk__54156 = G__55107;
count__54157 = G__55108;
i__54158 = G__55109;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54155);
if(temp__5804__auto__){
var seq__54155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54155__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54155__$1);
var G__55110 = cljs.core.chunk_rest(seq__54155__$1);
var G__55111 = c__5568__auto__;
var G__55112 = cljs.core.count(c__5568__auto__);
var G__55113 = (0);
seq__54155 = G__55110;
chunk__54156 = G__55111;
count__54157 = G__55112;
i__54158 = G__55113;
continue;
} else {
var it = cljs.core.first(seq__54155__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__55114 = cljs.core.next(seq__54155__$1);
var G__55115 = null;
var G__55116 = (0);
var G__55117 = (0);
seq__54155 = G__55114;
chunk__54156 = G__55115;
count__54157 = G__55116;
i__54158 = G__55117;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k54165,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__54170 = k54165;
var G__54170__$1 = (((G__54170 instanceof cljs.core.Keyword))?G__54170.fqn:null);
switch (G__54170__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54165,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__54177){
var vec__54179 = p__54177;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54179,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54179,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54164){
var self__ = this;
var G__54164__$1 = this;
return (new cljs.core.RecordIter((0),G__54164__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54166,other54167){
var self__ = this;
var this54166__$1 = this;
return (((!((other54167 == null)))) && ((((this54166__$1.constructor === other54167.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54166__$1.x,other54167.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54166__$1.y,other54167.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54166__$1.__extmap,other54167.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k54165){
var self__ = this;
var this__5350__auto____$1 = this;
var G__54208 = k54165;
var G__54208__$1 = (((G__54208 instanceof cljs.core.Keyword))?G__54208.fqn:null);
switch (G__54208__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54165);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__54164){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__54209 = cljs.core.keyword_identical_QMARK_;
var expr__54210 = k__5352__auto__;
if(cljs.core.truth_((pred__54209.cljs$core$IFn$_invoke$arity$2 ? pred__54209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__54210) : pred__54209.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__54210)))){
return (new shadow.dom.Coordinate(G__54164,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54209.cljs$core$IFn$_invoke$arity$2 ? pred__54209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__54210) : pred__54209.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__54210)))){
return (new shadow.dom.Coordinate(self__.x,G__54164,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__54164),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__54164){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__54164,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__54168){
var extmap__5385__auto__ = (function (){var G__54294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54168,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__54168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54294);
} else {
return G__54294;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__54168),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__54168),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k54310,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__54320 = k54310;
var G__54320__$1 = (((G__54320 instanceof cljs.core.Keyword))?G__54320.fqn:null);
switch (G__54320__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54310,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__54370){
var vec__54372 = p__54370;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54372,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54372,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54309){
var self__ = this;
var G__54309__$1 = this;
return (new cljs.core.RecordIter((0),G__54309__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54311,other54312){
var self__ = this;
var this54311__$1 = this;
return (((!((other54312 == null)))) && ((((this54311__$1.constructor === other54312.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54311__$1.w,other54312.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54311__$1.h,other54312.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54311__$1.__extmap,other54312.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k54310){
var self__ = this;
var this__5350__auto____$1 = this;
var G__54551 = k54310;
var G__54551__$1 = (((G__54551 instanceof cljs.core.Keyword))?G__54551.fqn:null);
switch (G__54551__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54310);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__54309){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__54565 = cljs.core.keyword_identical_QMARK_;
var expr__54566 = k__5352__auto__;
if(cljs.core.truth_((pred__54565.cljs$core$IFn$_invoke$arity$2 ? pred__54565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__54566) : pred__54565.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__54566)))){
return (new shadow.dom.Size(G__54309,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54565.cljs$core$IFn$_invoke$arity$2 ? pred__54565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__54566) : pred__54565.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__54566)))){
return (new shadow.dom.Size(self__.w,G__54309,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__54309),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__54309){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__54309,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__54313){
var extmap__5385__auto__ = (function (){var G__54593 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54313,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__54313)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54593);
} else {
return G__54593;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__54313),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__54313),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__55135 = (i + (1));
var G__55136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__55135;
ret = G__55136;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54615){
var vec__54616 = p__54615;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54616,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__54621 = arguments.length;
switch (G__54621) {
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
var G__55144 = ps;
var G__55145 = (i + (1));
el__$1 = G__55144;
i = G__55145;
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
var vec__54718 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54718,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54718,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54718,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__54730_55150 = cljs.core.seq(props);
var chunk__54731_55151 = null;
var count__54732_55152 = (0);
var i__54733_55153 = (0);
while(true){
if((i__54733_55153 < count__54732_55152)){
var vec__54740_55157 = chunk__54731_55151.cljs$core$IIndexed$_nth$arity$2(null,i__54733_55153);
var k_55158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740_55157,(0),null);
var v_55159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740_55157,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_55158);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55158),v_55159);


var G__55160 = seq__54730_55150;
var G__55161 = chunk__54731_55151;
var G__55162 = count__54732_55152;
var G__55163 = (i__54733_55153 + (1));
seq__54730_55150 = G__55160;
chunk__54731_55151 = G__55161;
count__54732_55152 = G__55162;
i__54733_55153 = G__55163;
continue;
} else {
var temp__5804__auto___55167 = cljs.core.seq(seq__54730_55150);
if(temp__5804__auto___55167){
var seq__54730_55168__$1 = temp__5804__auto___55167;
if(cljs.core.chunked_seq_QMARK_(seq__54730_55168__$1)){
var c__5568__auto___55169 = cljs.core.chunk_first(seq__54730_55168__$1);
var G__55170 = cljs.core.chunk_rest(seq__54730_55168__$1);
var G__55171 = c__5568__auto___55169;
var G__55172 = cljs.core.count(c__5568__auto___55169);
var G__55173 = (0);
seq__54730_55150 = G__55170;
chunk__54731_55151 = G__55171;
count__54732_55152 = G__55172;
i__54733_55153 = G__55173;
continue;
} else {
var vec__54744_55174 = cljs.core.first(seq__54730_55168__$1);
var k_55175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744_55174,(0),null);
var v_55176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54744_55174,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_55175);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_55175),v_55176);


var G__55177 = cljs.core.next(seq__54730_55168__$1);
var G__55178 = null;
var G__55179 = (0);
var G__55180 = (0);
seq__54730_55150 = G__55177;
chunk__54731_55151 = G__55178;
count__54732_55152 = G__55179;
i__54733_55153 = G__55180;
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
var vec__54750 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54750,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54750,(1),null);
var seq__54753_55181 = cljs.core.seq(node_children);
var chunk__54755_55182 = null;
var count__54756_55183 = (0);
var i__54757_55184 = (0);
while(true){
if((i__54757_55184 < count__54756_55183)){
var child_struct_55189 = chunk__54755_55182.cljs$core$IIndexed$_nth$arity$2(null,i__54757_55184);
if((!((child_struct_55189 == null)))){
if(typeof child_struct_55189 === 'string'){
var text_55190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55190),child_struct_55189].join(''));
} else {
var children_55191 = shadow.dom.svg_node(child_struct_55189);
if(cljs.core.seq_QMARK_(children_55191)){
var seq__54771_55192 = cljs.core.seq(children_55191);
var chunk__54773_55193 = null;
var count__54774_55194 = (0);
var i__54775_55195 = (0);
while(true){
if((i__54775_55195 < count__54774_55194)){
var child_55196 = chunk__54773_55193.cljs$core$IIndexed$_nth$arity$2(null,i__54775_55195);
if(cljs.core.truth_(child_55196)){
node.appendChild(child_55196);


var G__55197 = seq__54771_55192;
var G__55198 = chunk__54773_55193;
var G__55199 = count__54774_55194;
var G__55200 = (i__54775_55195 + (1));
seq__54771_55192 = G__55197;
chunk__54773_55193 = G__55198;
count__54774_55194 = G__55199;
i__54775_55195 = G__55200;
continue;
} else {
var G__55201 = seq__54771_55192;
var G__55202 = chunk__54773_55193;
var G__55203 = count__54774_55194;
var G__55204 = (i__54775_55195 + (1));
seq__54771_55192 = G__55201;
chunk__54773_55193 = G__55202;
count__54774_55194 = G__55203;
i__54775_55195 = G__55204;
continue;
}
} else {
var temp__5804__auto___55205 = cljs.core.seq(seq__54771_55192);
if(temp__5804__auto___55205){
var seq__54771_55206__$1 = temp__5804__auto___55205;
if(cljs.core.chunked_seq_QMARK_(seq__54771_55206__$1)){
var c__5568__auto___55207 = cljs.core.chunk_first(seq__54771_55206__$1);
var G__55208 = cljs.core.chunk_rest(seq__54771_55206__$1);
var G__55209 = c__5568__auto___55207;
var G__55210 = cljs.core.count(c__5568__auto___55207);
var G__55211 = (0);
seq__54771_55192 = G__55208;
chunk__54773_55193 = G__55209;
count__54774_55194 = G__55210;
i__54775_55195 = G__55211;
continue;
} else {
var child_55223 = cljs.core.first(seq__54771_55206__$1);
if(cljs.core.truth_(child_55223)){
node.appendChild(child_55223);


var G__55236 = cljs.core.next(seq__54771_55206__$1);
var G__55237 = null;
var G__55238 = (0);
var G__55239 = (0);
seq__54771_55192 = G__55236;
chunk__54773_55193 = G__55237;
count__54774_55194 = G__55238;
i__54775_55195 = G__55239;
continue;
} else {
var G__55240 = cljs.core.next(seq__54771_55206__$1);
var G__55241 = null;
var G__55242 = (0);
var G__55243 = (0);
seq__54771_55192 = G__55240;
chunk__54773_55193 = G__55241;
count__54774_55194 = G__55242;
i__54775_55195 = G__55243;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55191);
}
}


var G__55244 = seq__54753_55181;
var G__55245 = chunk__54755_55182;
var G__55246 = count__54756_55183;
var G__55247 = (i__54757_55184 + (1));
seq__54753_55181 = G__55244;
chunk__54755_55182 = G__55245;
count__54756_55183 = G__55246;
i__54757_55184 = G__55247;
continue;
} else {
var G__55248 = seq__54753_55181;
var G__55249 = chunk__54755_55182;
var G__55250 = count__54756_55183;
var G__55251 = (i__54757_55184 + (1));
seq__54753_55181 = G__55248;
chunk__54755_55182 = G__55249;
count__54756_55183 = G__55250;
i__54757_55184 = G__55251;
continue;
}
} else {
var temp__5804__auto___55252 = cljs.core.seq(seq__54753_55181);
if(temp__5804__auto___55252){
var seq__54753_55253__$1 = temp__5804__auto___55252;
if(cljs.core.chunked_seq_QMARK_(seq__54753_55253__$1)){
var c__5568__auto___55254 = cljs.core.chunk_first(seq__54753_55253__$1);
var G__55255 = cljs.core.chunk_rest(seq__54753_55253__$1);
var G__55256 = c__5568__auto___55254;
var G__55257 = cljs.core.count(c__5568__auto___55254);
var G__55258 = (0);
seq__54753_55181 = G__55255;
chunk__54755_55182 = G__55256;
count__54756_55183 = G__55257;
i__54757_55184 = G__55258;
continue;
} else {
var child_struct_55259 = cljs.core.first(seq__54753_55253__$1);
if((!((child_struct_55259 == null)))){
if(typeof child_struct_55259 === 'string'){
var text_55260 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_55260),child_struct_55259].join(''));
} else {
var children_55261 = shadow.dom.svg_node(child_struct_55259);
if(cljs.core.seq_QMARK_(children_55261)){
var seq__54777_55262 = cljs.core.seq(children_55261);
var chunk__54779_55263 = null;
var count__54780_55264 = (0);
var i__54781_55265 = (0);
while(true){
if((i__54781_55265 < count__54780_55264)){
var child_55266 = chunk__54779_55263.cljs$core$IIndexed$_nth$arity$2(null,i__54781_55265);
if(cljs.core.truth_(child_55266)){
node.appendChild(child_55266);


var G__55267 = seq__54777_55262;
var G__55268 = chunk__54779_55263;
var G__55269 = count__54780_55264;
var G__55270 = (i__54781_55265 + (1));
seq__54777_55262 = G__55267;
chunk__54779_55263 = G__55268;
count__54780_55264 = G__55269;
i__54781_55265 = G__55270;
continue;
} else {
var G__55278 = seq__54777_55262;
var G__55279 = chunk__54779_55263;
var G__55280 = count__54780_55264;
var G__55281 = (i__54781_55265 + (1));
seq__54777_55262 = G__55278;
chunk__54779_55263 = G__55279;
count__54780_55264 = G__55280;
i__54781_55265 = G__55281;
continue;
}
} else {
var temp__5804__auto___55285__$1 = cljs.core.seq(seq__54777_55262);
if(temp__5804__auto___55285__$1){
var seq__54777_55286__$1 = temp__5804__auto___55285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54777_55286__$1)){
var c__5568__auto___55287 = cljs.core.chunk_first(seq__54777_55286__$1);
var G__55288 = cljs.core.chunk_rest(seq__54777_55286__$1);
var G__55289 = c__5568__auto___55287;
var G__55290 = cljs.core.count(c__5568__auto___55287);
var G__55291 = (0);
seq__54777_55262 = G__55288;
chunk__54779_55263 = G__55289;
count__54780_55264 = G__55290;
i__54781_55265 = G__55291;
continue;
} else {
var child_55292 = cljs.core.first(seq__54777_55286__$1);
if(cljs.core.truth_(child_55292)){
node.appendChild(child_55292);


var G__55293 = cljs.core.next(seq__54777_55286__$1);
var G__55294 = null;
var G__55295 = (0);
var G__55296 = (0);
seq__54777_55262 = G__55293;
chunk__54779_55263 = G__55294;
count__54780_55264 = G__55295;
i__54781_55265 = G__55296;
continue;
} else {
var G__55297 = cljs.core.next(seq__54777_55286__$1);
var G__55298 = null;
var G__55299 = (0);
var G__55300 = (0);
seq__54777_55262 = G__55297;
chunk__54779_55263 = G__55298;
count__54780_55264 = G__55299;
i__54781_55265 = G__55300;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_55261);
}
}


var G__55301 = cljs.core.next(seq__54753_55253__$1);
var G__55302 = null;
var G__55303 = (0);
var G__55304 = (0);
seq__54753_55181 = G__55301;
chunk__54755_55182 = G__55302;
count__54756_55183 = G__55303;
i__54757_55184 = G__55304;
continue;
} else {
var G__55305 = cljs.core.next(seq__54753_55253__$1);
var G__55306 = null;
var G__55307 = (0);
var G__55308 = (0);
seq__54753_55181 = G__55305;
chunk__54755_55182 = G__55306;
count__54756_55183 = G__55307;
i__54757_55184 = G__55308;
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
var len__5769__auto___55312 = arguments.length;
var i__5770__auto___55313 = (0);
while(true){
if((i__5770__auto___55313 < len__5769__auto___55312)){
args__5775__auto__.push((arguments[i__5770__auto___55313]));

var G__55314 = (i__5770__auto___55313 + (1));
i__5770__auto___55313 = G__55314;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq54794){
var G__54795 = cljs.core.first(seq54794);
var seq54794__$1 = cljs.core.next(seq54794);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54795,seq54794__$1);
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
var G__54805 = arguments.length;
switch (G__54805) {
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
var c__42198__auto___55319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_54852){
var state_val_54853 = (state_54852[(1)]);
if((state_val_54853 === (1))){
var state_54852__$1 = state_54852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54852__$1,(2),once_or_cleanup);
} else {
if((state_val_54853 === (2))){
var inst_54849 = (state_54852[(2)]);
var inst_54850 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_54852__$1 = (function (){var statearr_54854 = state_54852;
(statearr_54854[(7)] = inst_54849);

return statearr_54854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54852__$1,inst_54850);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41951__auto__ = null;
var shadow$dom$state_machine__41951__auto____0 = (function (){
var statearr_54859 = [null,null,null,null,null,null,null,null];
(statearr_54859[(0)] = shadow$dom$state_machine__41951__auto__);

(statearr_54859[(1)] = (1));

return statearr_54859;
});
var shadow$dom$state_machine__41951__auto____1 = (function (state_54852){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_54852);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e54860){var ex__41954__auto__ = e54860;
var statearr_54861_55320 = state_54852;
(statearr_54861_55320[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_54852[(4)]))){
var statearr_54865_55321 = state_54852;
(statearr_54865_55321[(1)] = cljs.core.first((state_54852[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55325 = state_54852;
state_54852 = G__55325;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
shadow$dom$state_machine__41951__auto__ = function(state_54852){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41951__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41951__auto____1.call(this,state_54852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41951__auto____0;
shadow$dom$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41951__auto____1;
return shadow$dom$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_54867 = f__42199__auto__();
(statearr_54867[(6)] = c__42198__auto___55319);

return statearr_54867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
