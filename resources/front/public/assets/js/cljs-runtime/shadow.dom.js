goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37191 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_37191(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37192 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_37192(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35903 = coll;
var G__35904 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35903,G__35904) : shadow.dom.lazy_native_coll_seq.call(null,G__35903,G__35904));
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
var G__35915 = arguments.length;
switch (G__35915) {
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
var G__35918 = arguments.length;
switch (G__35918) {
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
var G__35925 = arguments.length;
switch (G__35925) {
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
var G__35931 = arguments.length;
switch (G__35931) {
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
var G__35947 = arguments.length;
switch (G__35947) {
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
var G__35955 = arguments.length;
switch (G__35955) {
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
}catch (e35966){if((e35966 instanceof Object)){
var e = e35966;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35966;

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
var seq__35984 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35985 = null;
var count__35986 = (0);
var i__35987 = (0);
while(true){
if((i__35987 < count__35986)){
var el = chunk__35985.cljs$core$IIndexed$_nth$arity$2(null,i__35987);
var handler_37219__$1 = ((function (seq__35984,chunk__35985,count__35986,i__35987,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35984,chunk__35985,count__35986,i__35987,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37219__$1);


var G__37223 = seq__35984;
var G__37224 = chunk__35985;
var G__37225 = count__35986;
var G__37226 = (i__35987 + (1));
seq__35984 = G__37223;
chunk__35985 = G__37224;
count__35986 = G__37225;
i__35987 = G__37226;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35984);
if(temp__5804__auto__){
var seq__35984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35984__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35984__$1);
var G__37227 = cljs.core.chunk_rest(seq__35984__$1);
var G__37228 = c__5568__auto__;
var G__37229 = cljs.core.count(c__5568__auto__);
var G__37230 = (0);
seq__35984 = G__37227;
chunk__35985 = G__37228;
count__35986 = G__37229;
i__35987 = G__37230;
continue;
} else {
var el = cljs.core.first(seq__35984__$1);
var handler_37231__$1 = ((function (seq__35984,chunk__35985,count__35986,i__35987,el,seq__35984__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35984,chunk__35985,count__35986,i__35987,el,seq__35984__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37231__$1);


var G__37232 = cljs.core.next(seq__35984__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__35984 = G__37232;
chunk__35985 = G__37233;
count__35986 = G__37234;
i__35987 = G__37235;
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
var G__36001 = arguments.length;
switch (G__36001) {
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
var seq__36007 = cljs.core.seq(events);
var chunk__36008 = null;
var count__36009 = (0);
var i__36010 = (0);
while(true){
if((i__36010 < count__36009)){
var vec__36026 = chunk__36008.cljs$core$IIndexed$_nth$arity$2(null,i__36010);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37240 = seq__36007;
var G__37241 = chunk__36008;
var G__37242 = count__36009;
var G__37243 = (i__36010 + (1));
seq__36007 = G__37240;
chunk__36008 = G__37241;
count__36009 = G__37242;
i__36010 = G__37243;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36007);
if(temp__5804__auto__){
var seq__36007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36007__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36007__$1);
var G__37244 = cljs.core.chunk_rest(seq__36007__$1);
var G__37245 = c__5568__auto__;
var G__37246 = cljs.core.count(c__5568__auto__);
var G__37247 = (0);
seq__36007 = G__37244;
chunk__36008 = G__37245;
count__36009 = G__37246;
i__36010 = G__37247;
continue;
} else {
var vec__36031 = cljs.core.first(seq__36007__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37248 = cljs.core.next(seq__36007__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__36007 = G__37248;
chunk__36008 = G__37249;
count__36009 = G__37250;
i__36010 = G__37251;
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
var seq__36038 = cljs.core.seq(styles);
var chunk__36039 = null;
var count__36040 = (0);
var i__36041 = (0);
while(true){
if((i__36041 < count__36040)){
var vec__36061 = chunk__36039.cljs$core$IIndexed$_nth$arity$2(null,i__36041);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36061,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37259 = seq__36038;
var G__37260 = chunk__36039;
var G__37261 = count__36040;
var G__37262 = (i__36041 + (1));
seq__36038 = G__37259;
chunk__36039 = G__37260;
count__36040 = G__37261;
i__36041 = G__37262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36038);
if(temp__5804__auto__){
var seq__36038__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36038__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36038__$1);
var G__37265 = cljs.core.chunk_rest(seq__36038__$1);
var G__37266 = c__5568__auto__;
var G__37267 = cljs.core.count(c__5568__auto__);
var G__37268 = (0);
seq__36038 = G__37265;
chunk__36039 = G__37266;
count__36040 = G__37267;
i__36041 = G__37268;
continue;
} else {
var vec__36066 = cljs.core.first(seq__36038__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36066,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37269 = cljs.core.next(seq__36038__$1);
var G__37270 = null;
var G__37271 = (0);
var G__37272 = (0);
seq__36038 = G__37269;
chunk__36039 = G__37270;
count__36040 = G__37271;
i__36041 = G__37272;
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
var G__36076_37273 = key;
var G__36076_37274__$1 = (((G__36076_37273 instanceof cljs.core.Keyword))?G__36076_37273.fqn:null);
switch (G__36076_37274__$1) {
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
var ks_37276 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37276,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37276,"aria-");
}
})())){
el.setAttribute(ks_37276,value);
} else {
(el[ks_37276] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36099){
var map__36100 = p__36099;
var map__36100__$1 = cljs.core.__destructure_map(map__36100);
var props = map__36100__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36101 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36101,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36107 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36107,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36107;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36121 = arguments.length;
switch (G__36121) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36127){
var vec__36129 = p__36127;
var seq__36130 = cljs.core.seq(vec__36129);
var first__36131 = cljs.core.first(seq__36130);
var seq__36130__$1 = cljs.core.next(seq__36130);
var nn = first__36131;
var first__36131__$1 = cljs.core.first(seq__36130__$1);
var seq__36130__$2 = cljs.core.next(seq__36130__$1);
var np = first__36131__$1;
var nc = seq__36130__$2;
var node = vec__36129;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36137 = nn;
var G__36138 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36137,G__36138) : create_fn.call(null,G__36137,G__36138));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36150 = nn;
var G__36151 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36150,G__36151) : create_fn.call(null,G__36150,G__36151));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36154 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36154,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36154,(1),null);
var seq__36157_37303 = cljs.core.seq(node_children);
var chunk__36158_37304 = null;
var count__36159_37305 = (0);
var i__36160_37306 = (0);
while(true){
if((i__36160_37306 < count__36159_37305)){
var child_struct_37307 = chunk__36158_37304.cljs$core$IIndexed$_nth$arity$2(null,i__36160_37306);
var children_37308 = shadow.dom.dom_node(child_struct_37307);
if(cljs.core.seq_QMARK_(children_37308)){
var seq__36219_37309 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37308));
var chunk__36221_37310 = null;
var count__36222_37311 = (0);
var i__36223_37312 = (0);
while(true){
if((i__36223_37312 < count__36222_37311)){
var child_37313 = chunk__36221_37310.cljs$core$IIndexed$_nth$arity$2(null,i__36223_37312);
if(cljs.core.truth_(child_37313)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37313);


var G__37314 = seq__36219_37309;
var G__37315 = chunk__36221_37310;
var G__37316 = count__36222_37311;
var G__37317 = (i__36223_37312 + (1));
seq__36219_37309 = G__37314;
chunk__36221_37310 = G__37315;
count__36222_37311 = G__37316;
i__36223_37312 = G__37317;
continue;
} else {
var G__37318 = seq__36219_37309;
var G__37319 = chunk__36221_37310;
var G__37320 = count__36222_37311;
var G__37321 = (i__36223_37312 + (1));
seq__36219_37309 = G__37318;
chunk__36221_37310 = G__37319;
count__36222_37311 = G__37320;
i__36223_37312 = G__37321;
continue;
}
} else {
var temp__5804__auto___37322 = cljs.core.seq(seq__36219_37309);
if(temp__5804__auto___37322){
var seq__36219_37323__$1 = temp__5804__auto___37322;
if(cljs.core.chunked_seq_QMARK_(seq__36219_37323__$1)){
var c__5568__auto___37324 = cljs.core.chunk_first(seq__36219_37323__$1);
var G__37325 = cljs.core.chunk_rest(seq__36219_37323__$1);
var G__37326 = c__5568__auto___37324;
var G__37327 = cljs.core.count(c__5568__auto___37324);
var G__37328 = (0);
seq__36219_37309 = G__37325;
chunk__36221_37310 = G__37326;
count__36222_37311 = G__37327;
i__36223_37312 = G__37328;
continue;
} else {
var child_37329 = cljs.core.first(seq__36219_37323__$1);
if(cljs.core.truth_(child_37329)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37329);


var G__37330 = cljs.core.next(seq__36219_37323__$1);
var G__37331 = null;
var G__37332 = (0);
var G__37333 = (0);
seq__36219_37309 = G__37330;
chunk__36221_37310 = G__37331;
count__36222_37311 = G__37332;
i__36223_37312 = G__37333;
continue;
} else {
var G__37334 = cljs.core.next(seq__36219_37323__$1);
var G__37335 = null;
var G__37336 = (0);
var G__37337 = (0);
seq__36219_37309 = G__37334;
chunk__36221_37310 = G__37335;
count__36222_37311 = G__37336;
i__36223_37312 = G__37337;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37308);
}


var G__37338 = seq__36157_37303;
var G__37339 = chunk__36158_37304;
var G__37340 = count__36159_37305;
var G__37341 = (i__36160_37306 + (1));
seq__36157_37303 = G__37338;
chunk__36158_37304 = G__37339;
count__36159_37305 = G__37340;
i__36160_37306 = G__37341;
continue;
} else {
var temp__5804__auto___37342 = cljs.core.seq(seq__36157_37303);
if(temp__5804__auto___37342){
var seq__36157_37343__$1 = temp__5804__auto___37342;
if(cljs.core.chunked_seq_QMARK_(seq__36157_37343__$1)){
var c__5568__auto___37344 = cljs.core.chunk_first(seq__36157_37343__$1);
var G__37345 = cljs.core.chunk_rest(seq__36157_37343__$1);
var G__37346 = c__5568__auto___37344;
var G__37347 = cljs.core.count(c__5568__auto___37344);
var G__37348 = (0);
seq__36157_37303 = G__37345;
chunk__36158_37304 = G__37346;
count__36159_37305 = G__37347;
i__36160_37306 = G__37348;
continue;
} else {
var child_struct_37349 = cljs.core.first(seq__36157_37343__$1);
var children_37354 = shadow.dom.dom_node(child_struct_37349);
if(cljs.core.seq_QMARK_(children_37354)){
var seq__36256_37355 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37354));
var chunk__36258_37356 = null;
var count__36259_37357 = (0);
var i__36260_37358 = (0);
while(true){
if((i__36260_37358 < count__36259_37357)){
var child_37359 = chunk__36258_37356.cljs$core$IIndexed$_nth$arity$2(null,i__36260_37358);
if(cljs.core.truth_(child_37359)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37359);


var G__37360 = seq__36256_37355;
var G__37361 = chunk__36258_37356;
var G__37362 = count__36259_37357;
var G__37363 = (i__36260_37358 + (1));
seq__36256_37355 = G__37360;
chunk__36258_37356 = G__37361;
count__36259_37357 = G__37362;
i__36260_37358 = G__37363;
continue;
} else {
var G__37364 = seq__36256_37355;
var G__37365 = chunk__36258_37356;
var G__37366 = count__36259_37357;
var G__37367 = (i__36260_37358 + (1));
seq__36256_37355 = G__37364;
chunk__36258_37356 = G__37365;
count__36259_37357 = G__37366;
i__36260_37358 = G__37367;
continue;
}
} else {
var temp__5804__auto___37368__$1 = cljs.core.seq(seq__36256_37355);
if(temp__5804__auto___37368__$1){
var seq__36256_37369__$1 = temp__5804__auto___37368__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36256_37369__$1)){
var c__5568__auto___37370 = cljs.core.chunk_first(seq__36256_37369__$1);
var G__37371 = cljs.core.chunk_rest(seq__36256_37369__$1);
var G__37372 = c__5568__auto___37370;
var G__37373 = cljs.core.count(c__5568__auto___37370);
var G__37374 = (0);
seq__36256_37355 = G__37371;
chunk__36258_37356 = G__37372;
count__36259_37357 = G__37373;
i__36260_37358 = G__37374;
continue;
} else {
var child_37375 = cljs.core.first(seq__36256_37369__$1);
if(cljs.core.truth_(child_37375)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37375);


var G__37376 = cljs.core.next(seq__36256_37369__$1);
var G__37377 = null;
var G__37378 = (0);
var G__37379 = (0);
seq__36256_37355 = G__37376;
chunk__36258_37356 = G__37377;
count__36259_37357 = G__37378;
i__36260_37358 = G__37379;
continue;
} else {
var G__37380 = cljs.core.next(seq__36256_37369__$1);
var G__37381 = null;
var G__37382 = (0);
var G__37383 = (0);
seq__36256_37355 = G__37380;
chunk__36258_37356 = G__37381;
count__36259_37357 = G__37382;
i__36260_37358 = G__37383;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37354);
}


var G__37384 = cljs.core.next(seq__36157_37343__$1);
var G__37385 = null;
var G__37386 = (0);
var G__37387 = (0);
seq__36157_37303 = G__37384;
chunk__36158_37304 = G__37385;
count__36159_37305 = G__37386;
i__36160_37306 = G__37387;
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
var seq__36346 = cljs.core.seq(node);
var chunk__36347 = null;
var count__36348 = (0);
var i__36349 = (0);
while(true){
if((i__36349 < count__36348)){
var n = chunk__36347.cljs$core$IIndexed$_nth$arity$2(null,i__36349);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37391 = seq__36346;
var G__37392 = chunk__36347;
var G__37393 = count__36348;
var G__37394 = (i__36349 + (1));
seq__36346 = G__37391;
chunk__36347 = G__37392;
count__36348 = G__37393;
i__36349 = G__37394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36346);
if(temp__5804__auto__){
var seq__36346__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36346__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36346__$1);
var G__37398 = cljs.core.chunk_rest(seq__36346__$1);
var G__37399 = c__5568__auto__;
var G__37400 = cljs.core.count(c__5568__auto__);
var G__37401 = (0);
seq__36346 = G__37398;
chunk__36347 = G__37399;
count__36348 = G__37400;
i__36349 = G__37401;
continue;
} else {
var n = cljs.core.first(seq__36346__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37402 = cljs.core.next(seq__36346__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__36346 = G__37402;
chunk__36347 = G__37403;
count__36348 = G__37404;
i__36349 = G__37405;
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
var G__36448 = arguments.length;
switch (G__36448) {
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
var G__36489 = arguments.length;
switch (G__36489) {
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
var G__36524 = arguments.length;
switch (G__36524) {
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
var len__5769__auto___37421 = arguments.length;
var i__5770__auto___37422 = (0);
while(true){
if((i__5770__auto___37422 < len__5769__auto___37421)){
args__5775__auto__.push((arguments[i__5770__auto___37422]));

var G__37423 = (i__5770__auto___37422 + (1));
i__5770__auto___37422 = G__37423;
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
var seq__36561_37424 = cljs.core.seq(nodes);
var chunk__36562_37425 = null;
var count__36563_37426 = (0);
var i__36564_37427 = (0);
while(true){
if((i__36564_37427 < count__36563_37426)){
var node_37428 = chunk__36562_37425.cljs$core$IIndexed$_nth$arity$2(null,i__36564_37427);
fragment.appendChild(shadow.dom._to_dom(node_37428));


var G__37430 = seq__36561_37424;
var G__37431 = chunk__36562_37425;
var G__37432 = count__36563_37426;
var G__37433 = (i__36564_37427 + (1));
seq__36561_37424 = G__37430;
chunk__36562_37425 = G__37431;
count__36563_37426 = G__37432;
i__36564_37427 = G__37433;
continue;
} else {
var temp__5804__auto___37434 = cljs.core.seq(seq__36561_37424);
if(temp__5804__auto___37434){
var seq__36561_37435__$1 = temp__5804__auto___37434;
if(cljs.core.chunked_seq_QMARK_(seq__36561_37435__$1)){
var c__5568__auto___37436 = cljs.core.chunk_first(seq__36561_37435__$1);
var G__37437 = cljs.core.chunk_rest(seq__36561_37435__$1);
var G__37438 = c__5568__auto___37436;
var G__37439 = cljs.core.count(c__5568__auto___37436);
var G__37440 = (0);
seq__36561_37424 = G__37437;
chunk__36562_37425 = G__37438;
count__36563_37426 = G__37439;
i__36564_37427 = G__37440;
continue;
} else {
var node_37441 = cljs.core.first(seq__36561_37435__$1);
fragment.appendChild(shadow.dom._to_dom(node_37441));


var G__37445 = cljs.core.next(seq__36561_37435__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__36561_37424 = G__37445;
chunk__36562_37425 = G__37446;
count__36563_37426 = G__37447;
i__36564_37427 = G__37448;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36558){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36558));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36581_37457 = cljs.core.seq(scripts);
var chunk__36582_37458 = null;
var count__36583_37459 = (0);
var i__36584_37460 = (0);
while(true){
if((i__36584_37460 < count__36583_37459)){
var vec__36606_37461 = chunk__36582_37458.cljs$core$IIndexed$_nth$arity$2(null,i__36584_37460);
var script_tag_37462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606_37461,(0),null);
var script_body_37463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606_37461,(1),null);
eval(script_body_37463);


var G__37464 = seq__36581_37457;
var G__37465 = chunk__36582_37458;
var G__37466 = count__36583_37459;
var G__37467 = (i__36584_37460 + (1));
seq__36581_37457 = G__37464;
chunk__36582_37458 = G__37465;
count__36583_37459 = G__37466;
i__36584_37460 = G__37467;
continue;
} else {
var temp__5804__auto___37468 = cljs.core.seq(seq__36581_37457);
if(temp__5804__auto___37468){
var seq__36581_37469__$1 = temp__5804__auto___37468;
if(cljs.core.chunked_seq_QMARK_(seq__36581_37469__$1)){
var c__5568__auto___37470 = cljs.core.chunk_first(seq__36581_37469__$1);
var G__37471 = cljs.core.chunk_rest(seq__36581_37469__$1);
var G__37472 = c__5568__auto___37470;
var G__37473 = cljs.core.count(c__5568__auto___37470);
var G__37474 = (0);
seq__36581_37457 = G__37471;
chunk__36582_37458 = G__37472;
count__36583_37459 = G__37473;
i__36584_37460 = G__37474;
continue;
} else {
var vec__36611_37475 = cljs.core.first(seq__36581_37469__$1);
var script_tag_37476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36611_37475,(0),null);
var script_body_37477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36611_37475,(1),null);
eval(script_body_37477);


var G__37478 = cljs.core.next(seq__36581_37469__$1);
var G__37479 = null;
var G__37480 = (0);
var G__37481 = (0);
seq__36581_37457 = G__37478;
chunk__36582_37458 = G__37479;
count__36583_37459 = G__37480;
i__36584_37460 = G__37481;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36617){
var vec__36618 = p__36617;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36618,(1),null);
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
var G__36639 = arguments.length;
switch (G__36639) {
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
var seq__36672 = cljs.core.seq(style_keys);
var chunk__36673 = null;
var count__36674 = (0);
var i__36675 = (0);
while(true){
if((i__36675 < count__36674)){
var it = chunk__36673.cljs$core$IIndexed$_nth$arity$2(null,i__36675);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37484 = seq__36672;
var G__37485 = chunk__36673;
var G__37486 = count__36674;
var G__37487 = (i__36675 + (1));
seq__36672 = G__37484;
chunk__36673 = G__37485;
count__36674 = G__37486;
i__36675 = G__37487;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36672);
if(temp__5804__auto__){
var seq__36672__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36672__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36672__$1);
var G__37488 = cljs.core.chunk_rest(seq__36672__$1);
var G__37489 = c__5568__auto__;
var G__37490 = cljs.core.count(c__5568__auto__);
var G__37491 = (0);
seq__36672 = G__37488;
chunk__36673 = G__37489;
count__36674 = G__37490;
i__36675 = G__37491;
continue;
} else {
var it = cljs.core.first(seq__36672__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37492 = cljs.core.next(seq__36672__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__36672 = G__37492;
chunk__36673 = G__37493;
count__36674 = G__37494;
i__36675 = G__37495;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36688,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36696 = k36688;
var G__36696__$1 = (((G__36696 instanceof cljs.core.Keyword))?G__36696.fqn:null);
switch (G__36696__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36688,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36697){
var vec__36698 = p__36697;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36698,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36698,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36687){
var self__ = this;
var G__36687__$1 = this;
return (new cljs.core.RecordIter((0),G__36687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36689,other36690){
var self__ = this;
var this36689__$1 = this;
return (((!((other36690 == null)))) && ((((this36689__$1.constructor === other36690.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36689__$1.x,other36690.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36689__$1.y,other36690.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36689__$1.__extmap,other36690.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36688){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36726 = k36688;
var G__36726__$1 = (((G__36726 instanceof cljs.core.Keyword))?G__36726.fqn:null);
switch (G__36726__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36688);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36687){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36728 = cljs.core.keyword_identical_QMARK_;
var expr__36729 = k__5352__auto__;
if(cljs.core.truth_((pred__36728.cljs$core$IFn$_invoke$arity$2 ? pred__36728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36729) : pred__36728.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36729)))){
return (new shadow.dom.Coordinate(G__36687,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36728.cljs$core$IFn$_invoke$arity$2 ? pred__36728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36729) : pred__36728.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36729)))){
return (new shadow.dom.Coordinate(self__.x,G__36687,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36687),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36687){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36687,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36691){
var extmap__5385__auto__ = (function (){var G__36742 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36691,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36691)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36742);
} else {
return G__36742;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36691),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36691),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36755,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36762 = k36755;
var G__36762__$1 = (((G__36762 instanceof cljs.core.Keyword))?G__36762.fqn:null);
switch (G__36762__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36755,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36765){
var vec__36767 = p__36765;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36767,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36767,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36754){
var self__ = this;
var G__36754__$1 = this;
return (new cljs.core.RecordIter((0),G__36754__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36756,other36757){
var self__ = this;
var this36756__$1 = this;
return (((!((other36757 == null)))) && ((((this36756__$1.constructor === other36757.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36756__$1.w,other36757.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36756__$1.h,other36757.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36756__$1.__extmap,other36757.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36755){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36805 = k36755;
var G__36805__$1 = (((G__36805 instanceof cljs.core.Keyword))?G__36805.fqn:null);
switch (G__36805__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36755);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36754){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36809 = cljs.core.keyword_identical_QMARK_;
var expr__36810 = k__5352__auto__;
if(cljs.core.truth_((pred__36809.cljs$core$IFn$_invoke$arity$2 ? pred__36809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36810) : pred__36809.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36810)))){
return (new shadow.dom.Size(G__36754,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36809.cljs$core$IFn$_invoke$arity$2 ? pred__36809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36810) : pred__36809.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36810)))){
return (new shadow.dom.Size(self__.w,G__36754,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36754),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36754){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36754,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36759){
var extmap__5385__auto__ = (function (){var G__36821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36759,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36759)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36821);
} else {
return G__36821;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36759),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36759),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__37525 = (i + (1));
var G__37526 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37525;
ret = G__37526;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36863){
var vec__36865 = p__36863;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36865,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36876 = arguments.length;
switch (G__36876) {
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
var G__37529 = ps;
var G__37530 = (i + (1));
el__$1 = G__37529;
i = G__37530;
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
var vec__36946 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36946,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36950_37531 = cljs.core.seq(props);
var chunk__36951_37532 = null;
var count__36952_37533 = (0);
var i__36953_37534 = (0);
while(true){
if((i__36953_37534 < count__36952_37533)){
var vec__36985_37535 = chunk__36951_37532.cljs$core$IIndexed$_nth$arity$2(null,i__36953_37534);
var k_37536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985_37535,(0),null);
var v_37537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36985_37535,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37536);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37536),v_37537);


var G__37538 = seq__36950_37531;
var G__37539 = chunk__36951_37532;
var G__37540 = count__36952_37533;
var G__37541 = (i__36953_37534 + (1));
seq__36950_37531 = G__37538;
chunk__36951_37532 = G__37539;
count__36952_37533 = G__37540;
i__36953_37534 = G__37541;
continue;
} else {
var temp__5804__auto___37542 = cljs.core.seq(seq__36950_37531);
if(temp__5804__auto___37542){
var seq__36950_37543__$1 = temp__5804__auto___37542;
if(cljs.core.chunked_seq_QMARK_(seq__36950_37543__$1)){
var c__5568__auto___37544 = cljs.core.chunk_first(seq__36950_37543__$1);
var G__37545 = cljs.core.chunk_rest(seq__36950_37543__$1);
var G__37546 = c__5568__auto___37544;
var G__37547 = cljs.core.count(c__5568__auto___37544);
var G__37548 = (0);
seq__36950_37531 = G__37545;
chunk__36951_37532 = G__37546;
count__36952_37533 = G__37547;
i__36953_37534 = G__37548;
continue;
} else {
var vec__36992_37550 = cljs.core.first(seq__36950_37543__$1);
var k_37551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36992_37550,(0),null);
var v_37552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36992_37550,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37551);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37551),v_37552);


var G__37554 = cljs.core.next(seq__36950_37543__$1);
var G__37555 = null;
var G__37556 = (0);
var G__37557 = (0);
seq__36950_37531 = G__37554;
chunk__36951_37532 = G__37555;
count__36952_37533 = G__37556;
i__36953_37534 = G__37557;
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
var vec__37007 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37007,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37007,(1),null);
var seq__37012_37560 = cljs.core.seq(node_children);
var chunk__37014_37561 = null;
var count__37015_37562 = (0);
var i__37016_37563 = (0);
while(true){
if((i__37016_37563 < count__37015_37562)){
var child_struct_37564 = chunk__37014_37561.cljs$core$IIndexed$_nth$arity$2(null,i__37016_37563);
if((!((child_struct_37564 == null)))){
if(typeof child_struct_37564 === 'string'){
var text_37565 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37565),child_struct_37564].join(''));
} else {
var children_37566 = shadow.dom.svg_node(child_struct_37564);
if(cljs.core.seq_QMARK_(children_37566)){
var seq__37071_37567 = cljs.core.seq(children_37566);
var chunk__37073_37568 = null;
var count__37074_37569 = (0);
var i__37075_37570 = (0);
while(true){
if((i__37075_37570 < count__37074_37569)){
var child_37571 = chunk__37073_37568.cljs$core$IIndexed$_nth$arity$2(null,i__37075_37570);
if(cljs.core.truth_(child_37571)){
node.appendChild(child_37571);


var G__37572 = seq__37071_37567;
var G__37573 = chunk__37073_37568;
var G__37574 = count__37074_37569;
var G__37575 = (i__37075_37570 + (1));
seq__37071_37567 = G__37572;
chunk__37073_37568 = G__37573;
count__37074_37569 = G__37574;
i__37075_37570 = G__37575;
continue;
} else {
var G__37576 = seq__37071_37567;
var G__37577 = chunk__37073_37568;
var G__37578 = count__37074_37569;
var G__37579 = (i__37075_37570 + (1));
seq__37071_37567 = G__37576;
chunk__37073_37568 = G__37577;
count__37074_37569 = G__37578;
i__37075_37570 = G__37579;
continue;
}
} else {
var temp__5804__auto___37580 = cljs.core.seq(seq__37071_37567);
if(temp__5804__auto___37580){
var seq__37071_37581__$1 = temp__5804__auto___37580;
if(cljs.core.chunked_seq_QMARK_(seq__37071_37581__$1)){
var c__5568__auto___37582 = cljs.core.chunk_first(seq__37071_37581__$1);
var G__37583 = cljs.core.chunk_rest(seq__37071_37581__$1);
var G__37584 = c__5568__auto___37582;
var G__37585 = cljs.core.count(c__5568__auto___37582);
var G__37586 = (0);
seq__37071_37567 = G__37583;
chunk__37073_37568 = G__37584;
count__37074_37569 = G__37585;
i__37075_37570 = G__37586;
continue;
} else {
var child_37587 = cljs.core.first(seq__37071_37581__$1);
if(cljs.core.truth_(child_37587)){
node.appendChild(child_37587);


var G__37588 = cljs.core.next(seq__37071_37581__$1);
var G__37589 = null;
var G__37590 = (0);
var G__37591 = (0);
seq__37071_37567 = G__37588;
chunk__37073_37568 = G__37589;
count__37074_37569 = G__37590;
i__37075_37570 = G__37591;
continue;
} else {
var G__37592 = cljs.core.next(seq__37071_37581__$1);
var G__37593 = null;
var G__37594 = (0);
var G__37595 = (0);
seq__37071_37567 = G__37592;
chunk__37073_37568 = G__37593;
count__37074_37569 = G__37594;
i__37075_37570 = G__37595;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37566);
}
}


var G__37596 = seq__37012_37560;
var G__37597 = chunk__37014_37561;
var G__37598 = count__37015_37562;
var G__37599 = (i__37016_37563 + (1));
seq__37012_37560 = G__37596;
chunk__37014_37561 = G__37597;
count__37015_37562 = G__37598;
i__37016_37563 = G__37599;
continue;
} else {
var G__37601 = seq__37012_37560;
var G__37602 = chunk__37014_37561;
var G__37603 = count__37015_37562;
var G__37604 = (i__37016_37563 + (1));
seq__37012_37560 = G__37601;
chunk__37014_37561 = G__37602;
count__37015_37562 = G__37603;
i__37016_37563 = G__37604;
continue;
}
} else {
var temp__5804__auto___37605 = cljs.core.seq(seq__37012_37560);
if(temp__5804__auto___37605){
var seq__37012_37606__$1 = temp__5804__auto___37605;
if(cljs.core.chunked_seq_QMARK_(seq__37012_37606__$1)){
var c__5568__auto___37607 = cljs.core.chunk_first(seq__37012_37606__$1);
var G__37608 = cljs.core.chunk_rest(seq__37012_37606__$1);
var G__37609 = c__5568__auto___37607;
var G__37610 = cljs.core.count(c__5568__auto___37607);
var G__37611 = (0);
seq__37012_37560 = G__37608;
chunk__37014_37561 = G__37609;
count__37015_37562 = G__37610;
i__37016_37563 = G__37611;
continue;
} else {
var child_struct_37612 = cljs.core.first(seq__37012_37606__$1);
if((!((child_struct_37612 == null)))){
if(typeof child_struct_37612 === 'string'){
var text_37613 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37613),child_struct_37612].join(''));
} else {
var children_37614 = shadow.dom.svg_node(child_struct_37612);
if(cljs.core.seq_QMARK_(children_37614)){
var seq__37101_37615 = cljs.core.seq(children_37614);
var chunk__37103_37616 = null;
var count__37104_37617 = (0);
var i__37105_37618 = (0);
while(true){
if((i__37105_37618 < count__37104_37617)){
var child_37619 = chunk__37103_37616.cljs$core$IIndexed$_nth$arity$2(null,i__37105_37618);
if(cljs.core.truth_(child_37619)){
node.appendChild(child_37619);


var G__37620 = seq__37101_37615;
var G__37621 = chunk__37103_37616;
var G__37622 = count__37104_37617;
var G__37623 = (i__37105_37618 + (1));
seq__37101_37615 = G__37620;
chunk__37103_37616 = G__37621;
count__37104_37617 = G__37622;
i__37105_37618 = G__37623;
continue;
} else {
var G__37624 = seq__37101_37615;
var G__37625 = chunk__37103_37616;
var G__37626 = count__37104_37617;
var G__37627 = (i__37105_37618 + (1));
seq__37101_37615 = G__37624;
chunk__37103_37616 = G__37625;
count__37104_37617 = G__37626;
i__37105_37618 = G__37627;
continue;
}
} else {
var temp__5804__auto___37628__$1 = cljs.core.seq(seq__37101_37615);
if(temp__5804__auto___37628__$1){
var seq__37101_37629__$1 = temp__5804__auto___37628__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37101_37629__$1)){
var c__5568__auto___37630 = cljs.core.chunk_first(seq__37101_37629__$1);
var G__37631 = cljs.core.chunk_rest(seq__37101_37629__$1);
var G__37632 = c__5568__auto___37630;
var G__37633 = cljs.core.count(c__5568__auto___37630);
var G__37634 = (0);
seq__37101_37615 = G__37631;
chunk__37103_37616 = G__37632;
count__37104_37617 = G__37633;
i__37105_37618 = G__37634;
continue;
} else {
var child_37635 = cljs.core.first(seq__37101_37629__$1);
if(cljs.core.truth_(child_37635)){
node.appendChild(child_37635);


var G__37636 = cljs.core.next(seq__37101_37629__$1);
var G__37637 = null;
var G__37638 = (0);
var G__37639 = (0);
seq__37101_37615 = G__37636;
chunk__37103_37616 = G__37637;
count__37104_37617 = G__37638;
i__37105_37618 = G__37639;
continue;
} else {
var G__37640 = cljs.core.next(seq__37101_37629__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__37101_37615 = G__37640;
chunk__37103_37616 = G__37641;
count__37104_37617 = G__37642;
i__37105_37618 = G__37643;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37614);
}
}


var G__37644 = cljs.core.next(seq__37012_37606__$1);
var G__37645 = null;
var G__37646 = (0);
var G__37647 = (0);
seq__37012_37560 = G__37644;
chunk__37014_37561 = G__37645;
count__37015_37562 = G__37646;
i__37016_37563 = G__37647;
continue;
} else {
var G__37648 = cljs.core.next(seq__37012_37606__$1);
var G__37649 = null;
var G__37650 = (0);
var G__37651 = (0);
seq__37012_37560 = G__37648;
chunk__37014_37561 = G__37649;
count__37015_37562 = G__37650;
i__37016_37563 = G__37651;
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
var len__5769__auto___37654 = arguments.length;
var i__5770__auto___37655 = (0);
while(true){
if((i__5770__auto___37655 < len__5769__auto___37654)){
args__5775__auto__.push((arguments[i__5770__auto___37655]));

var G__37656 = (i__5770__auto___37655 + (1));
i__5770__auto___37655 = G__37656;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37126){
var G__37127 = cljs.core.first(seq37126);
var seq37126__$1 = cljs.core.next(seq37126);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37127,seq37126__$1);
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
var G__37146 = arguments.length;
switch (G__37146) {
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
var c__33655__auto___37664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33656__auto__ = (function (){var switch__33420__auto__ = (function (state_37161){
var state_val_37162 = (state_37161[(1)]);
if((state_val_37162 === (1))){
var state_37161__$1 = state_37161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37161__$1,(2),once_or_cleanup);
} else {
if((state_val_37162 === (2))){
var inst_37158 = (state_37161[(2)]);
var inst_37159 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37161__$1 = (function (){var statearr_37165 = state_37161;
(statearr_37165[(7)] = inst_37158);

return statearr_37165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37161__$1,inst_37159);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33421__auto__ = null;
var shadow$dom$state_machine__33421__auto____0 = (function (){
var statearr_37166 = [null,null,null,null,null,null,null,null];
(statearr_37166[(0)] = shadow$dom$state_machine__33421__auto__);

(statearr_37166[(1)] = (1));

return statearr_37166;
});
var shadow$dom$state_machine__33421__auto____1 = (function (state_37161){
while(true){
var ret_value__33422__auto__ = (function (){try{while(true){
var result__33423__auto__ = switch__33420__auto__(state_37161);
if(cljs.core.keyword_identical_QMARK_(result__33423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33423__auto__;
}
break;
}
}catch (e37167){var ex__33424__auto__ = e37167;
var statearr_37168_37665 = state_37161;
(statearr_37168_37665[(2)] = ex__33424__auto__);


if(cljs.core.seq((state_37161[(4)]))){
var statearr_37169_37666 = state_37161;
(statearr_37169_37666[(1)] = cljs.core.first((state_37161[(4)])));

} else {
throw ex__33424__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33422__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_37161;
state_37161 = G__37667;
continue;
} else {
return ret_value__33422__auto__;
}
break;
}
});
shadow$dom$state_machine__33421__auto__ = function(state_37161){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33421__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33421__auto____1.call(this,state_37161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33421__auto____0;
shadow$dom$state_machine__33421__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33421__auto____1;
return shadow$dom$state_machine__33421__auto__;
})()
})();
var state__33657__auto__ = (function (){var statearr_37174 = f__33656__auto__();
(statearr_37174[(6)] = c__33655__auto___37664);

return statearr_37174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33657__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
