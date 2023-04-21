goog.provide('app.components.button');
app.components.button.base_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),"group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 ",new cljs.core.Keyword(null,"outline","outline",793464534),"group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none "], null);
app.components.button.variant_syles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"slate","slate",1394989518),"bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 ",new cljs.core.Keyword(null,"blue","blue",-622100620),"bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 ",new cljs.core.Keyword(null,"white","white",-483998618),"bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white "], null),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slate","slate",1394989518),"ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 ",new cljs.core.Keyword(null,"white","white",-483998618),"ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white "], null)], null);
app.components.button.props__GT_classes = (function app$components$button$props__GT_classes(p__50287){
var map__50288 = p__50287;
var map__50288__$1 = cljs.core.__destructure_map(map__50288);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50288__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"solid","solid",-2023773691));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50288__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50288__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584),"");
var variant__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(variant);
var color__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.components.button.base_styles.cljs$core$IFn$_invoke$arity$1 ? app.components.button.base_styles.cljs$core$IFn$_invoke$arity$1(variant__$1) : app.components.button.base_styles.call(null,variant__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.components.button.variant_syles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant__$1,color__$1], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)].join('');
});
if(goog.DEBUG){
app.components.button.sig50289 = helix.core.signature_BANG_();
} else {
}

app.components.button.Button = (function (){var G__50291 = (function app$components$button$Button_render(props__27104__auto__,maybe_ref__27105__auto__){
var vec__50292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27104__auto__),maybe_ref__27105__auto__], null);
var map__50295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50292,(0),null);
var map__50295__$1 = cljs.core.__destructure_map(map__50295);
var props = map__50295__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.button.sig50289)){
(app.components.button.sig50289.cljs$core$IFn$_invoke$arity$0 ? app.components.button.sig50289.cljs$core$IFn$_invoke$arity$0() : app.components.button.sig50289.call(null));
} else {
}
} else {
}

var classes = app.components.button.props__GT_classes(props);
return helix.core.get_react().createElement("button",helix.impl.props.merge_obj((function (){var obj50316 = ({"className":classes});
return obj50316;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class-name","class-name",945142584)))),children);
});
if(goog.DEBUG === true){
var G__50324 = G__50291;
(G__50324.displayName = "app.components.button/Button");

return G__50324;
} else {
return G__50291;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.button.sig50289)){
(app.components.button.sig50289.cljs$core$IFn$_invoke$arity$4 ? app.components.button.sig50289.cljs$core$IFn$_invoke$arity$4(app.components.button.Button,"",null,null) : app.components.button.sig50289.call(null,app.components.button.Button,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.button.Button,"app.components.button/Button");
} else {
}


//# sourceMappingURL=app.components.button.js.map
