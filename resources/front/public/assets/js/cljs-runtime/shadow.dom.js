goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45747 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45747(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45748 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45748(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44531 = coll;
var G__44532 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44531,G__44532) : shadow.dom.lazy_native_coll_seq.call(null,G__44531,G__44532));
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
var G__44577 = arguments.length;
switch (G__44577) {
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
var G__44583 = arguments.length;
switch (G__44583) {
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
var G__44600 = arguments.length;
switch (G__44600) {
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
var G__44615 = arguments.length;
switch (G__44615) {
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
var G__44622 = arguments.length;
switch (G__44622) {
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
var G__44634 = arguments.length;
switch (G__44634) {
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
}catch (e44648){if((e44648 instanceof Object)){
var e = e44648;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44648;

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
var seq__44656 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44657 = null;
var count__44658 = (0);
var i__44659 = (0);
while(true){
if((i__44659 < count__44658)){
var el = chunk__44657.cljs$core$IIndexed$_nth$arity$2(null,i__44659);
var handler_45755__$1 = ((function (seq__44656,chunk__44657,count__44658,i__44659,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44656,chunk__44657,count__44658,i__44659,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45755__$1);


var G__45756 = seq__44656;
var G__45757 = chunk__44657;
var G__45758 = count__44658;
var G__45759 = (i__44659 + (1));
seq__44656 = G__45756;
chunk__44657 = G__45757;
count__44658 = G__45758;
i__44659 = G__45759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44656);
if(temp__5804__auto__){
var seq__44656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44656__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44656__$1);
var G__45760 = cljs.core.chunk_rest(seq__44656__$1);
var G__45761 = c__5568__auto__;
var G__45762 = cljs.core.count(c__5568__auto__);
var G__45763 = (0);
seq__44656 = G__45760;
chunk__44657 = G__45761;
count__44658 = G__45762;
i__44659 = G__45763;
continue;
} else {
var el = cljs.core.first(seq__44656__$1);
var handler_45764__$1 = ((function (seq__44656,chunk__44657,count__44658,i__44659,el,seq__44656__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44656,chunk__44657,count__44658,i__44659,el,seq__44656__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45764__$1);


var G__45765 = cljs.core.next(seq__44656__$1);
var G__45766 = null;
var G__45767 = (0);
var G__45768 = (0);
seq__44656 = G__45765;
chunk__44657 = G__45766;
count__44658 = G__45767;
i__44659 = G__45768;
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
var G__44683 = arguments.length;
switch (G__44683) {
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
var seq__44692 = cljs.core.seq(events);
var chunk__44693 = null;
var count__44694 = (0);
var i__44695 = (0);
while(true){
if((i__44695 < count__44694)){
var vec__44705 = chunk__44693.cljs$core$IIndexed$_nth$arity$2(null,i__44695);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44705,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44705,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45770 = seq__44692;
var G__45771 = chunk__44693;
var G__45772 = count__44694;
var G__45773 = (i__44695 + (1));
seq__44692 = G__45770;
chunk__44693 = G__45771;
count__44694 = G__45772;
i__44695 = G__45773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44692);
if(temp__5804__auto__){
var seq__44692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44692__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44692__$1);
var G__45774 = cljs.core.chunk_rest(seq__44692__$1);
var G__45775 = c__5568__auto__;
var G__45776 = cljs.core.count(c__5568__auto__);
var G__45777 = (0);
seq__44692 = G__45774;
chunk__44693 = G__45775;
count__44694 = G__45776;
i__44695 = G__45777;
continue;
} else {
var vec__44709 = cljs.core.first(seq__44692__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44709,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45778 = cljs.core.next(seq__44692__$1);
var G__45779 = null;
var G__45780 = (0);
var G__45781 = (0);
seq__44692 = G__45778;
chunk__44693 = G__45779;
count__44694 = G__45780;
i__44695 = G__45781;
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
var seq__44713 = cljs.core.seq(styles);
var chunk__44714 = null;
var count__44715 = (0);
var i__44716 = (0);
while(true){
if((i__44716 < count__44715)){
var vec__44727 = chunk__44714.cljs$core$IIndexed$_nth$arity$2(null,i__44716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44727,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45782 = seq__44713;
var G__45783 = chunk__44714;
var G__45784 = count__44715;
var G__45785 = (i__44716 + (1));
seq__44713 = G__45782;
chunk__44714 = G__45783;
count__44715 = G__45784;
i__44716 = G__45785;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44713);
if(temp__5804__auto__){
var seq__44713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44713__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44713__$1);
var G__45786 = cljs.core.chunk_rest(seq__44713__$1);
var G__45787 = c__5568__auto__;
var G__45788 = cljs.core.count(c__5568__auto__);
var G__45789 = (0);
seq__44713 = G__45786;
chunk__44714 = G__45787;
count__44715 = G__45788;
i__44716 = G__45789;
continue;
} else {
var vec__44737 = cljs.core.first(seq__44713__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44737,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45790 = cljs.core.next(seq__44713__$1);
var G__45791 = null;
var G__45792 = (0);
var G__45793 = (0);
seq__44713 = G__45790;
chunk__44714 = G__45791;
count__44715 = G__45792;
i__44716 = G__45793;
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
var G__44745_45794 = key;
var G__44745_45795__$1 = (((G__44745_45794 instanceof cljs.core.Keyword))?G__44745_45794.fqn:null);
switch (G__44745_45795__$1) {
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
var ks_45797 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_45797,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_45797,"aria-");
}
})())){
el.setAttribute(ks_45797,value);
} else {
(el[ks_45797] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44753){
var map__44754 = p__44753;
var map__44754__$1 = cljs.core.__destructure_map(map__44754);
var props = map__44754__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44754__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44755 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44755,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44755,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44755,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44758 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44758,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44758;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44763 = arguments.length;
switch (G__44763) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44769){
var vec__44771 = p__44769;
var seq__44772 = cljs.core.seq(vec__44771);
var first__44773 = cljs.core.first(seq__44772);
var seq__44772__$1 = cljs.core.next(seq__44772);
var nn = first__44773;
var first__44773__$1 = cljs.core.first(seq__44772__$1);
var seq__44772__$2 = cljs.core.next(seq__44772__$1);
var np = first__44773__$1;
var nc = seq__44772__$2;
var node = vec__44771;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44775 = nn;
var G__44776 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44775,G__44776) : create_fn.call(null,G__44775,G__44776));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44777 = nn;
var G__44778 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44777,G__44778) : create_fn.call(null,G__44777,G__44778));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44780 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780,(1),null);
var seq__44787_45799 = cljs.core.seq(node_children);
var chunk__44788_45800 = null;
var count__44789_45801 = (0);
var i__44790_45802 = (0);
while(true){
if((i__44790_45802 < count__44789_45801)){
var child_struct_45803 = chunk__44788_45800.cljs$core$IIndexed$_nth$arity$2(null,i__44790_45802);
var children_45804 = shadow.dom.dom_node(child_struct_45803);
if(cljs.core.seq_QMARK_(children_45804)){
var seq__44876_45805 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45804));
var chunk__44878_45806 = null;
var count__44879_45807 = (0);
var i__44880_45808 = (0);
while(true){
if((i__44880_45808 < count__44879_45807)){
var child_45809 = chunk__44878_45806.cljs$core$IIndexed$_nth$arity$2(null,i__44880_45808);
if(cljs.core.truth_(child_45809)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45809);


var G__45810 = seq__44876_45805;
var G__45811 = chunk__44878_45806;
var G__45812 = count__44879_45807;
var G__45813 = (i__44880_45808 + (1));
seq__44876_45805 = G__45810;
chunk__44878_45806 = G__45811;
count__44879_45807 = G__45812;
i__44880_45808 = G__45813;
continue;
} else {
var G__45816 = seq__44876_45805;
var G__45817 = chunk__44878_45806;
var G__45818 = count__44879_45807;
var G__45819 = (i__44880_45808 + (1));
seq__44876_45805 = G__45816;
chunk__44878_45806 = G__45817;
count__44879_45807 = G__45818;
i__44880_45808 = G__45819;
continue;
}
} else {
var temp__5804__auto___45820 = cljs.core.seq(seq__44876_45805);
if(temp__5804__auto___45820){
var seq__44876_45821__$1 = temp__5804__auto___45820;
if(cljs.core.chunked_seq_QMARK_(seq__44876_45821__$1)){
var c__5568__auto___45822 = cljs.core.chunk_first(seq__44876_45821__$1);
var G__45823 = cljs.core.chunk_rest(seq__44876_45821__$1);
var G__45824 = c__5568__auto___45822;
var G__45825 = cljs.core.count(c__5568__auto___45822);
var G__45826 = (0);
seq__44876_45805 = G__45823;
chunk__44878_45806 = G__45824;
count__44879_45807 = G__45825;
i__44880_45808 = G__45826;
continue;
} else {
var child_45827 = cljs.core.first(seq__44876_45821__$1);
if(cljs.core.truth_(child_45827)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45827);


var G__45830 = cljs.core.next(seq__44876_45821__$1);
var G__45831 = null;
var G__45832 = (0);
var G__45833 = (0);
seq__44876_45805 = G__45830;
chunk__44878_45806 = G__45831;
count__44879_45807 = G__45832;
i__44880_45808 = G__45833;
continue;
} else {
var G__45834 = cljs.core.next(seq__44876_45821__$1);
var G__45835 = null;
var G__45836 = (0);
var G__45837 = (0);
seq__44876_45805 = G__45834;
chunk__44878_45806 = G__45835;
count__44879_45807 = G__45836;
i__44880_45808 = G__45837;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45804);
}


var G__45838 = seq__44787_45799;
var G__45839 = chunk__44788_45800;
var G__45840 = count__44789_45801;
var G__45841 = (i__44790_45802 + (1));
seq__44787_45799 = G__45838;
chunk__44788_45800 = G__45839;
count__44789_45801 = G__45840;
i__44790_45802 = G__45841;
continue;
} else {
var temp__5804__auto___45842 = cljs.core.seq(seq__44787_45799);
if(temp__5804__auto___45842){
var seq__44787_45844__$1 = temp__5804__auto___45842;
if(cljs.core.chunked_seq_QMARK_(seq__44787_45844__$1)){
var c__5568__auto___45845 = cljs.core.chunk_first(seq__44787_45844__$1);
var G__45846 = cljs.core.chunk_rest(seq__44787_45844__$1);
var G__45847 = c__5568__auto___45845;
var G__45848 = cljs.core.count(c__5568__auto___45845);
var G__45849 = (0);
seq__44787_45799 = G__45846;
chunk__44788_45800 = G__45847;
count__44789_45801 = G__45848;
i__44790_45802 = G__45849;
continue;
} else {
var child_struct_45850 = cljs.core.first(seq__44787_45844__$1);
var children_45851 = shadow.dom.dom_node(child_struct_45850);
if(cljs.core.seq_QMARK_(children_45851)){
var seq__44898_45852 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45851));
var chunk__44900_45853 = null;
var count__44901_45854 = (0);
var i__44902_45855 = (0);
while(true){
if((i__44902_45855 < count__44901_45854)){
var child_45856 = chunk__44900_45853.cljs$core$IIndexed$_nth$arity$2(null,i__44902_45855);
if(cljs.core.truth_(child_45856)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45856);


var G__45857 = seq__44898_45852;
var G__45858 = chunk__44900_45853;
var G__45859 = count__44901_45854;
var G__45860 = (i__44902_45855 + (1));
seq__44898_45852 = G__45857;
chunk__44900_45853 = G__45858;
count__44901_45854 = G__45859;
i__44902_45855 = G__45860;
continue;
} else {
var G__45861 = seq__44898_45852;
var G__45862 = chunk__44900_45853;
var G__45863 = count__44901_45854;
var G__45864 = (i__44902_45855 + (1));
seq__44898_45852 = G__45861;
chunk__44900_45853 = G__45862;
count__44901_45854 = G__45863;
i__44902_45855 = G__45864;
continue;
}
} else {
var temp__5804__auto___45865__$1 = cljs.core.seq(seq__44898_45852);
if(temp__5804__auto___45865__$1){
var seq__44898_45866__$1 = temp__5804__auto___45865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44898_45866__$1)){
var c__5568__auto___45867 = cljs.core.chunk_first(seq__44898_45866__$1);
var G__45868 = cljs.core.chunk_rest(seq__44898_45866__$1);
var G__45869 = c__5568__auto___45867;
var G__45870 = cljs.core.count(c__5568__auto___45867);
var G__45871 = (0);
seq__44898_45852 = G__45868;
chunk__44900_45853 = G__45869;
count__44901_45854 = G__45870;
i__44902_45855 = G__45871;
continue;
} else {
var child_45872 = cljs.core.first(seq__44898_45866__$1);
if(cljs.core.truth_(child_45872)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45872);


var G__45874 = cljs.core.next(seq__44898_45866__$1);
var G__45875 = null;
var G__45876 = (0);
var G__45877 = (0);
seq__44898_45852 = G__45874;
chunk__44900_45853 = G__45875;
count__44901_45854 = G__45876;
i__44902_45855 = G__45877;
continue;
} else {
var G__45878 = cljs.core.next(seq__44898_45866__$1);
var G__45879 = null;
var G__45880 = (0);
var G__45881 = (0);
seq__44898_45852 = G__45878;
chunk__44900_45853 = G__45879;
count__44901_45854 = G__45880;
i__44902_45855 = G__45881;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45851);
}


var G__45883 = cljs.core.next(seq__44787_45844__$1);
var G__45884 = null;
var G__45885 = (0);
var G__45886 = (0);
seq__44787_45799 = G__45883;
chunk__44788_45800 = G__45884;
count__44789_45801 = G__45885;
i__44790_45802 = G__45886;
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
var seq__44948 = cljs.core.seq(node);
var chunk__44949 = null;
var count__44950 = (0);
var i__44951 = (0);
while(true){
if((i__44951 < count__44950)){
var n = chunk__44949.cljs$core$IIndexed$_nth$arity$2(null,i__44951);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45888 = seq__44948;
var G__45889 = chunk__44949;
var G__45890 = count__44950;
var G__45891 = (i__44951 + (1));
seq__44948 = G__45888;
chunk__44949 = G__45889;
count__44950 = G__45890;
i__44951 = G__45891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44948);
if(temp__5804__auto__){
var seq__44948__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44948__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44948__$1);
var G__45892 = cljs.core.chunk_rest(seq__44948__$1);
var G__45893 = c__5568__auto__;
var G__45894 = cljs.core.count(c__5568__auto__);
var G__45895 = (0);
seq__44948 = G__45892;
chunk__44949 = G__45893;
count__44950 = G__45894;
i__44951 = G__45895;
continue;
} else {
var n = cljs.core.first(seq__44948__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45896 = cljs.core.next(seq__44948__$1);
var G__45897 = null;
var G__45898 = (0);
var G__45899 = (0);
seq__44948 = G__45896;
chunk__44949 = G__45897;
count__44950 = G__45898;
i__44951 = G__45899;
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
var G__45027 = arguments.length;
switch (G__45027) {
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
var G__45031 = arguments.length;
switch (G__45031) {
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
var G__45077 = arguments.length;
switch (G__45077) {
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
var len__5769__auto___45912 = arguments.length;
var i__5770__auto___45913 = (0);
while(true){
if((i__5770__auto___45913 < len__5769__auto___45912)){
args__5775__auto__.push((arguments[i__5770__auto___45913]));

var G__45914 = (i__5770__auto___45913 + (1));
i__5770__auto___45913 = G__45914;
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
var seq__45155_45915 = cljs.core.seq(nodes);
var chunk__45156_45916 = null;
var count__45157_45917 = (0);
var i__45158_45918 = (0);
while(true){
if((i__45158_45918 < count__45157_45917)){
var node_45919 = chunk__45156_45916.cljs$core$IIndexed$_nth$arity$2(null,i__45158_45918);
fragment.appendChild(shadow.dom._to_dom(node_45919));


var G__45920 = seq__45155_45915;
var G__45921 = chunk__45156_45916;
var G__45922 = count__45157_45917;
var G__45923 = (i__45158_45918 + (1));
seq__45155_45915 = G__45920;
chunk__45156_45916 = G__45921;
count__45157_45917 = G__45922;
i__45158_45918 = G__45923;
continue;
} else {
var temp__5804__auto___45924 = cljs.core.seq(seq__45155_45915);
if(temp__5804__auto___45924){
var seq__45155_45925__$1 = temp__5804__auto___45924;
if(cljs.core.chunked_seq_QMARK_(seq__45155_45925__$1)){
var c__5568__auto___45926 = cljs.core.chunk_first(seq__45155_45925__$1);
var G__45927 = cljs.core.chunk_rest(seq__45155_45925__$1);
var G__45928 = c__5568__auto___45926;
var G__45929 = cljs.core.count(c__5568__auto___45926);
var G__45930 = (0);
seq__45155_45915 = G__45927;
chunk__45156_45916 = G__45928;
count__45157_45917 = G__45929;
i__45158_45918 = G__45930;
continue;
} else {
var node_45932 = cljs.core.first(seq__45155_45925__$1);
fragment.appendChild(shadow.dom._to_dom(node_45932));


var G__45933 = cljs.core.next(seq__45155_45925__$1);
var G__45934 = null;
var G__45935 = (0);
var G__45936 = (0);
seq__45155_45915 = G__45933;
chunk__45156_45916 = G__45934;
count__45157_45917 = G__45935;
i__45158_45918 = G__45936;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45116){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45116));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45186_45937 = cljs.core.seq(scripts);
var chunk__45187_45938 = null;
var count__45188_45939 = (0);
var i__45189_45940 = (0);
while(true){
if((i__45189_45940 < count__45188_45939)){
var vec__45214_45942 = chunk__45187_45938.cljs$core$IIndexed$_nth$arity$2(null,i__45189_45940);
var script_tag_45943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45214_45942,(0),null);
var script_body_45944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45214_45942,(1),null);
eval(script_body_45944);


var G__45945 = seq__45186_45937;
var G__45946 = chunk__45187_45938;
var G__45947 = count__45188_45939;
var G__45948 = (i__45189_45940 + (1));
seq__45186_45937 = G__45945;
chunk__45187_45938 = G__45946;
count__45188_45939 = G__45947;
i__45189_45940 = G__45948;
continue;
} else {
var temp__5804__auto___45949 = cljs.core.seq(seq__45186_45937);
if(temp__5804__auto___45949){
var seq__45186_45950__$1 = temp__5804__auto___45949;
if(cljs.core.chunked_seq_QMARK_(seq__45186_45950__$1)){
var c__5568__auto___45951 = cljs.core.chunk_first(seq__45186_45950__$1);
var G__45953 = cljs.core.chunk_rest(seq__45186_45950__$1);
var G__45954 = c__5568__auto___45951;
var G__45955 = cljs.core.count(c__5568__auto___45951);
var G__45956 = (0);
seq__45186_45937 = G__45953;
chunk__45187_45938 = G__45954;
count__45188_45939 = G__45955;
i__45189_45940 = G__45956;
continue;
} else {
var vec__45230_45958 = cljs.core.first(seq__45186_45950__$1);
var script_tag_45959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230_45958,(0),null);
var script_body_45960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45230_45958,(1),null);
eval(script_body_45960);


var G__45963 = cljs.core.next(seq__45186_45950__$1);
var G__45964 = null;
var G__45965 = (0);
var G__45966 = (0);
seq__45186_45937 = G__45963;
chunk__45187_45938 = G__45964;
count__45188_45939 = G__45965;
i__45189_45940 = G__45966;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45233){
var vec__45234 = p__45233;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45234,(1),null);
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
var G__45244 = arguments.length;
switch (G__45244) {
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
var seq__45264 = cljs.core.seq(style_keys);
var chunk__45265 = null;
var count__45266 = (0);
var i__45267 = (0);
while(true){
if((i__45267 < count__45266)){
var it = chunk__45265.cljs$core$IIndexed$_nth$arity$2(null,i__45267);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45973 = seq__45264;
var G__45974 = chunk__45265;
var G__45975 = count__45266;
var G__45976 = (i__45267 + (1));
seq__45264 = G__45973;
chunk__45265 = G__45974;
count__45266 = G__45975;
i__45267 = G__45976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45264);
if(temp__5804__auto__){
var seq__45264__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45264__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45264__$1);
var G__45977 = cljs.core.chunk_rest(seq__45264__$1);
var G__45978 = c__5568__auto__;
var G__45979 = cljs.core.count(c__5568__auto__);
var G__45980 = (0);
seq__45264 = G__45977;
chunk__45265 = G__45978;
count__45266 = G__45979;
i__45267 = G__45980;
continue;
} else {
var it = cljs.core.first(seq__45264__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45981 = cljs.core.next(seq__45264__$1);
var G__45982 = null;
var G__45983 = (0);
var G__45984 = (0);
seq__45264 = G__45981;
chunk__45265 = G__45982;
count__45266 = G__45983;
i__45267 = G__45984;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k45285,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__45294 = k45285;
var G__45294__$1 = (((G__45294 instanceof cljs.core.Keyword))?G__45294.fqn:null);
switch (G__45294__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45285,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__45311){
var vec__45314 = p__45311;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45284){
var self__ = this;
var G__45284__$1 = this;
return (new cljs.core.RecordIter((0),G__45284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45286,other45287){
var self__ = this;
var this45286__$1 = this;
return (((!((other45287 == null)))) && ((((this45286__$1.constructor === other45287.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45286__$1.x,other45287.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45286__$1.y,other45287.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45286__$1.__extmap,other45287.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k45285){
var self__ = this;
var this__5350__auto____$1 = this;
var G__45356 = k45285;
var G__45356__$1 = (((G__45356 instanceof cljs.core.Keyword))?G__45356.fqn:null);
switch (G__45356__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45285);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__45284){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__45357 = cljs.core.keyword_identical_QMARK_;
var expr__45358 = k__5352__auto__;
if(cljs.core.truth_((pred__45357.cljs$core$IFn$_invoke$arity$2 ? pred__45357.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45358) : pred__45357.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45358)))){
return (new shadow.dom.Coordinate(G__45284,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45357.cljs$core$IFn$_invoke$arity$2 ? pred__45357.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45358) : pred__45357.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45358)))){
return (new shadow.dom.Coordinate(self__.x,G__45284,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__45284),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__45284){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45284,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45289){
var extmap__5385__auto__ = (function (){var G__45369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45289,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45289)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45369);
} else {
return G__45369;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45289),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45289),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k45381,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__45401 = k45381;
var G__45401__$1 = (((G__45401 instanceof cljs.core.Keyword))?G__45401.fqn:null);
switch (G__45401__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45381,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__45402){
var vec__45407 = p__45402;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45407,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45407,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45380){
var self__ = this;
var G__45380__$1 = this;
return (new cljs.core.RecordIter((0),G__45380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45382,other45383){
var self__ = this;
var this45382__$1 = this;
return (((!((other45383 == null)))) && ((((this45382__$1.constructor === other45383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45382__$1.w,other45383.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45382__$1.h,other45383.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45382__$1.__extmap,other45383.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k45381){
var self__ = this;
var this__5350__auto____$1 = this;
var G__45471 = k45381;
var G__45471__$1 = (((G__45471 instanceof cljs.core.Keyword))?G__45471.fqn:null);
switch (G__45471__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45381);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__45380){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__45474 = cljs.core.keyword_identical_QMARK_;
var expr__45475 = k__5352__auto__;
if(cljs.core.truth_((pred__45474.cljs$core$IFn$_invoke$arity$2 ? pred__45474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45475) : pred__45474.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45475)))){
return (new shadow.dom.Size(G__45380,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45474.cljs$core$IFn$_invoke$arity$2 ? pred__45474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45475) : pred__45474.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45475)))){
return (new shadow.dom.Size(self__.w,G__45380,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__45380),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__45380){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45380,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45398){
var extmap__5385__auto__ = (function (){var G__45490 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45398,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45490);
} else {
return G__45490;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45398),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45398),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__46082 = (i + (1));
var G__46083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46082;
ret = G__46083;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45538){
var vec__45540 = p__45538;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45540,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45544 = arguments.length;
switch (G__45544) {
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
var G__46091 = ps;
var G__46092 = (i + (1));
el__$1 = G__46091;
i = G__46092;
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
var vec__45577 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45582_46095 = cljs.core.seq(props);
var chunk__45583_46096 = null;
var count__45584_46097 = (0);
var i__45585_46098 = (0);
while(true){
if((i__45585_46098 < count__45584_46097)){
var vec__45599_46099 = chunk__45583_46096.cljs$core$IIndexed$_nth$arity$2(null,i__45585_46098);
var k_46100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45599_46099,(0),null);
var v_46101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45599_46099,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46100);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46100),v_46101);


var G__46103 = seq__45582_46095;
var G__46104 = chunk__45583_46096;
var G__46105 = count__45584_46097;
var G__46106 = (i__45585_46098 + (1));
seq__45582_46095 = G__46103;
chunk__45583_46096 = G__46104;
count__45584_46097 = G__46105;
i__45585_46098 = G__46106;
continue;
} else {
var temp__5804__auto___46107 = cljs.core.seq(seq__45582_46095);
if(temp__5804__auto___46107){
var seq__45582_46108__$1 = temp__5804__auto___46107;
if(cljs.core.chunked_seq_QMARK_(seq__45582_46108__$1)){
var c__5568__auto___46109 = cljs.core.chunk_first(seq__45582_46108__$1);
var G__46110 = cljs.core.chunk_rest(seq__45582_46108__$1);
var G__46111 = c__5568__auto___46109;
var G__46112 = cljs.core.count(c__5568__auto___46109);
var G__46113 = (0);
seq__45582_46095 = G__46110;
chunk__45583_46096 = G__46111;
count__45584_46097 = G__46112;
i__45585_46098 = G__46113;
continue;
} else {
var vec__45602_46114 = cljs.core.first(seq__45582_46108__$1);
var k_46115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45602_46114,(0),null);
var v_46116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45602_46114,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46115);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46115),v_46116);


var G__46117 = cljs.core.next(seq__45582_46108__$1);
var G__46118 = null;
var G__46119 = (0);
var G__46120 = (0);
seq__45582_46095 = G__46117;
chunk__45583_46096 = G__46118;
count__45584_46097 = G__46119;
i__45585_46098 = G__46120;
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
var vec__45611 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611,(1),null);
var seq__45615_46123 = cljs.core.seq(node_children);
var chunk__45617_46124 = null;
var count__45618_46125 = (0);
var i__45619_46126 = (0);
while(true){
if((i__45619_46126 < count__45618_46125)){
var child_struct_46127 = chunk__45617_46124.cljs$core$IIndexed$_nth$arity$2(null,i__45619_46126);
if((!((child_struct_46127 == null)))){
if(typeof child_struct_46127 === 'string'){
var text_46130 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46130),child_struct_46127].join(''));
} else {
var children_46131 = shadow.dom.svg_node(child_struct_46127);
if(cljs.core.seq_QMARK_(children_46131)){
var seq__45640_46132 = cljs.core.seq(children_46131);
var chunk__45642_46133 = null;
var count__45643_46134 = (0);
var i__45644_46135 = (0);
while(true){
if((i__45644_46135 < count__45643_46134)){
var child_46136 = chunk__45642_46133.cljs$core$IIndexed$_nth$arity$2(null,i__45644_46135);
if(cljs.core.truth_(child_46136)){
node.appendChild(child_46136);


var G__46137 = seq__45640_46132;
var G__46138 = chunk__45642_46133;
var G__46139 = count__45643_46134;
var G__46140 = (i__45644_46135 + (1));
seq__45640_46132 = G__46137;
chunk__45642_46133 = G__46138;
count__45643_46134 = G__46139;
i__45644_46135 = G__46140;
continue;
} else {
var G__46141 = seq__45640_46132;
var G__46142 = chunk__45642_46133;
var G__46143 = count__45643_46134;
var G__46144 = (i__45644_46135 + (1));
seq__45640_46132 = G__46141;
chunk__45642_46133 = G__46142;
count__45643_46134 = G__46143;
i__45644_46135 = G__46144;
continue;
}
} else {
var temp__5804__auto___46145 = cljs.core.seq(seq__45640_46132);
if(temp__5804__auto___46145){
var seq__45640_46146__$1 = temp__5804__auto___46145;
if(cljs.core.chunked_seq_QMARK_(seq__45640_46146__$1)){
var c__5568__auto___46149 = cljs.core.chunk_first(seq__45640_46146__$1);
var G__46150 = cljs.core.chunk_rest(seq__45640_46146__$1);
var G__46151 = c__5568__auto___46149;
var G__46152 = cljs.core.count(c__5568__auto___46149);
var G__46153 = (0);
seq__45640_46132 = G__46150;
chunk__45642_46133 = G__46151;
count__45643_46134 = G__46152;
i__45644_46135 = G__46153;
continue;
} else {
var child_46154 = cljs.core.first(seq__45640_46146__$1);
if(cljs.core.truth_(child_46154)){
node.appendChild(child_46154);


var G__46155 = cljs.core.next(seq__45640_46146__$1);
var G__46156 = null;
var G__46157 = (0);
var G__46158 = (0);
seq__45640_46132 = G__46155;
chunk__45642_46133 = G__46156;
count__45643_46134 = G__46157;
i__45644_46135 = G__46158;
continue;
} else {
var G__46159 = cljs.core.next(seq__45640_46146__$1);
var G__46160 = null;
var G__46161 = (0);
var G__46162 = (0);
seq__45640_46132 = G__46159;
chunk__45642_46133 = G__46160;
count__45643_46134 = G__46161;
i__45644_46135 = G__46162;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46131);
}
}


var G__46163 = seq__45615_46123;
var G__46164 = chunk__45617_46124;
var G__46165 = count__45618_46125;
var G__46166 = (i__45619_46126 + (1));
seq__45615_46123 = G__46163;
chunk__45617_46124 = G__46164;
count__45618_46125 = G__46165;
i__45619_46126 = G__46166;
continue;
} else {
var G__46167 = seq__45615_46123;
var G__46168 = chunk__45617_46124;
var G__46169 = count__45618_46125;
var G__46170 = (i__45619_46126 + (1));
seq__45615_46123 = G__46167;
chunk__45617_46124 = G__46168;
count__45618_46125 = G__46169;
i__45619_46126 = G__46170;
continue;
}
} else {
var temp__5804__auto___46171 = cljs.core.seq(seq__45615_46123);
if(temp__5804__auto___46171){
var seq__45615_46172__$1 = temp__5804__auto___46171;
if(cljs.core.chunked_seq_QMARK_(seq__45615_46172__$1)){
var c__5568__auto___46173 = cljs.core.chunk_first(seq__45615_46172__$1);
var G__46174 = cljs.core.chunk_rest(seq__45615_46172__$1);
var G__46175 = c__5568__auto___46173;
var G__46176 = cljs.core.count(c__5568__auto___46173);
var G__46177 = (0);
seq__45615_46123 = G__46174;
chunk__45617_46124 = G__46175;
count__45618_46125 = G__46176;
i__45619_46126 = G__46177;
continue;
} else {
var child_struct_46178 = cljs.core.first(seq__45615_46172__$1);
if((!((child_struct_46178 == null)))){
if(typeof child_struct_46178 === 'string'){
var text_46179 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46179),child_struct_46178].join(''));
} else {
var children_46182 = shadow.dom.svg_node(child_struct_46178);
if(cljs.core.seq_QMARK_(children_46182)){
var seq__45647_46184 = cljs.core.seq(children_46182);
var chunk__45649_46185 = null;
var count__45650_46186 = (0);
var i__45651_46187 = (0);
while(true){
if((i__45651_46187 < count__45650_46186)){
var child_46188 = chunk__45649_46185.cljs$core$IIndexed$_nth$arity$2(null,i__45651_46187);
if(cljs.core.truth_(child_46188)){
node.appendChild(child_46188);


var G__46190 = seq__45647_46184;
var G__46191 = chunk__45649_46185;
var G__46192 = count__45650_46186;
var G__46193 = (i__45651_46187 + (1));
seq__45647_46184 = G__46190;
chunk__45649_46185 = G__46191;
count__45650_46186 = G__46192;
i__45651_46187 = G__46193;
continue;
} else {
var G__46195 = seq__45647_46184;
var G__46196 = chunk__45649_46185;
var G__46197 = count__45650_46186;
var G__46198 = (i__45651_46187 + (1));
seq__45647_46184 = G__46195;
chunk__45649_46185 = G__46196;
count__45650_46186 = G__46197;
i__45651_46187 = G__46198;
continue;
}
} else {
var temp__5804__auto___46199__$1 = cljs.core.seq(seq__45647_46184);
if(temp__5804__auto___46199__$1){
var seq__45647_46200__$1 = temp__5804__auto___46199__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45647_46200__$1)){
var c__5568__auto___46201 = cljs.core.chunk_first(seq__45647_46200__$1);
var G__46202 = cljs.core.chunk_rest(seq__45647_46200__$1);
var G__46203 = c__5568__auto___46201;
var G__46204 = cljs.core.count(c__5568__auto___46201);
var G__46205 = (0);
seq__45647_46184 = G__46202;
chunk__45649_46185 = G__46203;
count__45650_46186 = G__46204;
i__45651_46187 = G__46205;
continue;
} else {
var child_46206 = cljs.core.first(seq__45647_46200__$1);
if(cljs.core.truth_(child_46206)){
node.appendChild(child_46206);


var G__46207 = cljs.core.next(seq__45647_46200__$1);
var G__46208 = null;
var G__46209 = (0);
var G__46210 = (0);
seq__45647_46184 = G__46207;
chunk__45649_46185 = G__46208;
count__45650_46186 = G__46209;
i__45651_46187 = G__46210;
continue;
} else {
var G__46211 = cljs.core.next(seq__45647_46200__$1);
var G__46212 = null;
var G__46213 = (0);
var G__46214 = (0);
seq__45647_46184 = G__46211;
chunk__45649_46185 = G__46212;
count__45650_46186 = G__46213;
i__45651_46187 = G__46214;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46182);
}
}


var G__46216 = cljs.core.next(seq__45615_46172__$1);
var G__46217 = null;
var G__46218 = (0);
var G__46219 = (0);
seq__45615_46123 = G__46216;
chunk__45617_46124 = G__46217;
count__45618_46125 = G__46218;
i__45619_46126 = G__46219;
continue;
} else {
var G__46221 = cljs.core.next(seq__45615_46172__$1);
var G__46222 = null;
var G__46223 = (0);
var G__46224 = (0);
seq__45615_46123 = G__46221;
chunk__45617_46124 = G__46222;
count__45618_46125 = G__46223;
i__45619_46126 = G__46224;
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
var len__5769__auto___46231 = arguments.length;
var i__5770__auto___46232 = (0);
while(true){
if((i__5770__auto___46232 < len__5769__auto___46231)){
args__5775__auto__.push((arguments[i__5770__auto___46232]));

var G__46233 = (i__5770__auto___46232 + (1));
i__5770__auto___46232 = G__46233;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45662){
var G__45663 = cljs.core.first(seq45662);
var seq45662__$1 = cljs.core.next(seq45662);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45663,seq45662__$1);
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
var G__45695 = arguments.length;
switch (G__45695) {
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
var c__42198__auto___46240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42199__auto__ = (function (){var switch__41950__auto__ = (function (state_45719){
var state_val_45720 = (state_45719[(1)]);
if((state_val_45720 === (1))){
var state_45719__$1 = state_45719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45719__$1,(2),once_or_cleanup);
} else {
if((state_val_45720 === (2))){
var inst_45716 = (state_45719[(2)]);
var inst_45717 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45719__$1 = (function (){var statearr_45729 = state_45719;
(statearr_45729[(7)] = inst_45716);

return statearr_45729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45719__$1,inst_45717);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41951__auto__ = null;
var shadow$dom$state_machine__41951__auto____0 = (function (){
var statearr_45737 = [null,null,null,null,null,null,null,null];
(statearr_45737[(0)] = shadow$dom$state_machine__41951__auto__);

(statearr_45737[(1)] = (1));

return statearr_45737;
});
var shadow$dom$state_machine__41951__auto____1 = (function (state_45719){
while(true){
var ret_value__41952__auto__ = (function (){try{while(true){
var result__41953__auto__ = switch__41950__auto__(state_45719);
if(cljs.core.keyword_identical_QMARK_(result__41953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41953__auto__;
}
break;
}
}catch (e45738){var ex__41954__auto__ = e45738;
var statearr_45741_46242 = state_45719;
(statearr_45741_46242[(2)] = ex__41954__auto__);


if(cljs.core.seq((state_45719[(4)]))){
var statearr_45742_46243 = state_45719;
(statearr_45742_46243[(1)] = cljs.core.first((state_45719[(4)])));

} else {
throw ex__41954__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46244 = state_45719;
state_45719 = G__46244;
continue;
} else {
return ret_value__41952__auto__;
}
break;
}
});
shadow$dom$state_machine__41951__auto__ = function(state_45719){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41951__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41951__auto____1.call(this,state_45719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41951__auto____0;
shadow$dom$state_machine__41951__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41951__auto____1;
return shadow$dom$state_machine__41951__auto__;
})()
})();
var state__42200__auto__ = (function (){var statearr_45743 = f__42199__auto__();
(statearr_45743[(6)] = c__42198__auto___46240);

return statearr_45743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42200__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
