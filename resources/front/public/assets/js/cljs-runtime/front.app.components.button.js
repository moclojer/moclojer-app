goog.provide('front.app.components.button');
front.app.components.button.base_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),"group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 ",new cljs.core.Keyword(null,"outline","outline",793464534),"group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none "], null);
front.app.components.button.variant_syles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slate","slate",1394989518),"bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ",new cljs.core.Keyword(null,"blue","blue",-622100620),"bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 ",new cljs.core.Keyword(null,"white","white",-483998618),"bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white "], null),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slate","slate",1394989518),"ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 ",new cljs.core.Keyword(null,"white","white",-483998618),"ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white "], null)], null);
front.app.components.button.props__GT_classes = (function front$app$components$button$props__GT_classes(p__33764){
var map__33766 = p__33764;
var map__33766__$1 = cljs.core.__destructure_map(map__33766);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"solid","solid",-2023773691));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33766__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584),"");
var variant__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(variant);
var color__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((front.app.components.button.base_styles.cljs$core$IFn$_invoke$arity$1 ? front.app.components.button.base_styles.cljs$core$IFn$_invoke$arity$1(variant__$1) : front.app.components.button.base_styles.call(null,variant__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(front.app.components.button.variant_syles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant__$1,color__$1], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('');
});
if(goog.DEBUG){
front.app.components.button.sig33768 = helix.core.signature_BANG_();
} else {
}

front.app.components.button.Button = (function (){var G__33836 = (function front$app$components$button$Button_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__33837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__33840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33837,(0),null);
var map__33840__$1 = cljs.core.__destructure_map(map__33840);
var props = map__33840__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.button.sig33768)){
(front.app.components.button.sig33768.cljs$core$IFn$_invoke$arity$0 ? front.app.components.button.sig33768.cljs$core$IFn$_invoke$arity$0() : front.app.components.button.sig33768.call(null));
} else {
}
} else {
}

var classes = front.app.components.button.props__GT_classes(props);
return helix.core.get_react().createElement("button",helix.impl.props.merge_obj((function (){var obj33856 = ({"className":classes});
return obj33856;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class-name","class-name",945142584)))),children);
});
if(goog.DEBUG === true){
var G__33857 = G__33836;
(G__33857.displayName = "front.app.components.button/Button");

return G__33857;
} else {
return G__33836;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.button.sig33768)){
(front.app.components.button.sig33768.cljs$core$IFn$_invoke$arity$4 ? front.app.components.button.sig33768.cljs$core$IFn$_invoke$arity$4(front.app.components.button.Button,"",null,null) : front.app.components.button.sig33768.call(null,front.app.components.button.Button,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.button.Button,"front.app.components.button/Button");
} else {
}


//# sourceMappingURL=front.app.components.button.js.map
