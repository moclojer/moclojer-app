goog.provide('front.app.components.dashboard.main');
var module$node_modules$$codemirror$closebrackets$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$closebrackets$dist$index_cjs", {});
var module$node_modules$$codemirror$fold$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$fold$dist$index_cjs", {});
var module$node_modules$$codemirror$gutter$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$gutter$dist$index_cjs", {});
var module$node_modules$$codemirror$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$history$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$history$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
front.app.components.dashboard.main.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-content": ({"white-space": "pre-wrap", "padding": "10px 8px", "min-height": "100%"}), ".cm-line": ({"font-family": "Fira Code", "font-size": "0.8rem"}), "&.cm-focused": ({"outline": "none"}), ".cm-gutters": ({"background": "transparent", "border": "none"}), ".cm-gutterElement": ({"margin-left": "5px"})}));
front.app.components.dashboard.main.extensions = [front.app.components.dashboard.main.theme,module$node_modules$$codemirror$history$dist$index_cjs.history(),module$node_modules$$codemirror$highlight$dist$index_cjs.defaultHighlightStyle,module$node_modules$$codemirror$view$dist$index_cjs.drawSelection(),module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true)];
front.app.components.dashboard.main.new_cm = (function front$app$components$dashboard$main$new_cm(p__27214){
var map__27215 = p__27214;
var map__27215__$1 = cljs.core.__destructure_map(map__27215);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27215__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27215__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27215__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return (new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state": module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": initial_value, "extensions": (function (){var G__27219 = front.app.components.dashboard.main.extensions;
var G__27219__$1 = (((on_change == null))?G__27219.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.editable.of(false)):G__27219);
if((!((on_change == null)))){
return G__27219__$1.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.updateListener.of((function (update){
if(cljs.core.truth_(update.docChanged)){
var G__27271 = update.state.doc.toString();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__27271) : on_change.call(null,G__27271));
} else {
return null;
}
})));
} else {
return G__27219__$1;
}
})()})), "parent": parent})));
});
if(goog.DEBUG){
front.app.components.dashboard.main.sig27277 = helix.core.signature_BANG_();
} else {
}

front.app.components.dashboard.main.editor = (function (){var G__27293 = (function front$app$components$dashboard$main$editor_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__27294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__27297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27294,(0),null);
var map__27297__$1 = cljs.core.__destructure_map(map__27297);
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27297__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.dashboard.main.sig27277)){
(front.app.components.dashboard.main.sig27277.cljs$core$IFn$_invoke$arity$0 ? front.app.components.dashboard.main.sig27277.cljs$core$IFn$_invoke$arity$0() : front.app.components.dashboard.main.sig27277.call(null));
} else {
}
} else {
}

var cm_instance = helix.hooks.use_ref(null);
var cm_mount = (function (){var G__27300 = (function (p1__27272_SHARP_){
if(cljs.core.truth_(p1__27272_SHARP_)){
return cljs.core.reset_BANG_(cm_instance,front.app.components.dashboard.main.new_cm(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),p1__27272_SHARP_,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(function (){var or__5045__auto__ = initial_value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)));
} else {
return null;
}
});
var G__27301 = [];
return (helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2(G__27300,G__27301) : helix.hooks.raw_use_callback.call(null,G__27300,G__27301));
})();
var G__27303_27370 = helix.hooks.wrap_fx((function (){
return (function (){
var temp__5804__auto__ = cljs.core.deref(cm_instance);
if(cljs.core.truth_(temp__5804__auto__)){
var cm = temp__5804__auto__;
return cm.destroy();
} else {
return null;
}
});
}));
var G__27304_27371 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__27303_27370,G__27304_27371) : helix.hooks.raw_use_effect.call(null,G__27303_27370,G__27304_27371));

var G__27305_27372 = helix.hooks.wrap_fx((function (){
if(cljs.core.truth_(value)){
var temp__5804__auto__ = cljs.core.deref(cm_instance);
if(cljs.core.truth_(temp__5804__auto__)){
var cm = temp__5804__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cm.state.doc.text),value)){
var tx = cm.state.update(({"changes": ({"from": (0), "to": cm.state.doc.length, "insert": value})}));
return cm.dispatch(tx);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
var G__27306_27373 = [value];
(helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2(G__27305_27372,G__27306_27373) : helix.hooks.raw_use_layout_effect.call(null,G__27305_27372,G__27306_27373));

return helix.core.get_react().createElement("div",(function (){var obj27309 = ({"className":"min-h-full","style":helix.impl.props.dom_style(style),"ref":cm_mount});
return obj27309;
})());
});
if(goog.DEBUG === true){
var G__27310 = G__27293;
(G__27310.displayName = "front.app.components.dashboard.main/editor");

return G__27310;
} else {
return G__27293;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.dashboard.main.sig27277)){
(front.app.components.dashboard.main.sig27277.cljs$core$IFn$_invoke$arity$4 ? front.app.components.dashboard.main.sig27277.cljs$core$IFn$_invoke$arity$4(front.app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__27272#] (when p1__27272# (reset! cm-instance (new-cm {:parent p1__27272#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null) : front.app.components.dashboard.main.sig27277.call(null,front.app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__27272#] (when p1__27272# (reset! cm-instance (new-cm {:parent p1__27272#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.dashboard.main.editor,"front.app.components.dashboard.main/editor");
} else {
}

if(goog.DEBUG){
front.app.components.dashboard.main.sig27312 = helix.core.signature_BANG_();
} else {
}

front.app.components.dashboard.main.Main = (function (){var G__27332 = (function front$app$components$dashboard$main$Main_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__27333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.dashboard.main.sig27312)){
(front.app.components.dashboard.main.sig27312.cljs$core$IFn$_invoke$arity$0 ? front.app.components.dashboard.main.sig27312.cljs$core$IFn$_invoke$arity$0() : front.app.components.dashboard.main.sig27312.call(null));
} else {
}
} else {
}

var vec__27336 = helix.hooks.use_state("");
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(0),null);
var set_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27336,(1),null);
return helix.core.get_react().createElement("main",(function (){var obj27344 = ({"className":"ml-60 pt-16 max-h-screnn overflow-auto"});
return obj27344;
})(),helix.core.get_react().createElement("div",(function (){var obj27346 = ({"className":"px-6 py-8"});
return obj27346;
})(),helix.core.get_react().createElement("div",(function (){var obj27349 = ({"className":"max-w-4xl mx-auto"});
return obj27349;
})(),helix.core.get_react().createElement("div",(function (){var obj27351 = ({"className":"bg-white rounded-3xl p-8 mb-5"});
return obj27351;
})(),helix.core.get_react().createElement("h1",(function (){var obj27353 = ({"className":"text-3xl font-bold mb-10"});
return obj27353;
})(),"Create your mock api"),helix.core.get_react().createElement("div",(function (){var obj27365 = ({"className":"flex items-center justify-between"});
return obj27365;
})(),helix.core.get_react().createElement(front.app.components.dashboard.main.editor,(function (){var obj27367 = ({"value":data,"on-change":set_data});
return obj27367;
})()))))));
});
if(goog.DEBUG === true){
var G__27368 = G__27332;
(G__27368.displayName = "front.app.components.dashboard.main/Main");

return G__27368;
} else {
return G__27332;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.dashboard.main.sig27312)){
(front.app.components.dashboard.main.sig27312.cljs$core$IFn$_invoke$arity$4 ? front.app.components.dashboard.main.sig27312.cljs$core$IFn$_invoke$arity$4(front.app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null) : front.app.components.dashboard.main.sig27312.call(null,front.app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.dashboard.main.Main,"front.app.components.dashboard.main/Main");
} else {
}


//# sourceMappingURL=front.app.components.dashboard.main.js.map
