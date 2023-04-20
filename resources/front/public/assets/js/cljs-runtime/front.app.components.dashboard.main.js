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
front.app.components.dashboard.main.new_cm = (function front$app$components$dashboard$main$new_cm(p__35224){
var map__35225 = p__35224;
var map__35225__$1 = cljs.core.__destructure_map(map__35225);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return (new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state": module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": initial_value, "extensions": (function (){var G__35230 = front.app.components.dashboard.main.extensions;
var G__35230__$1 = (((on_change == null))?G__35230.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.editable.of(false)):G__35230);
if((!((on_change == null)))){
return G__35230__$1.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.updateListener.of((function (update){
if(cljs.core.truth_(update.docChanged)){
var G__35235 = update.state.doc.toString();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__35235) : on_change.call(null,G__35235));
} else {
return null;
}
})));
} else {
return G__35230__$1;
}
})()})), "parent": parent})));
});
if(goog.DEBUG){
front.app.components.dashboard.main.sig35248 = helix.core.signature_BANG_();
} else {
}

front.app.components.dashboard.main.editor = (function (){var G__35272 = (function front$app$components$dashboard$main$editor_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35273,(0),null);
var map__35276__$1 = cljs.core.__destructure_map(map__35276);
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.dashboard.main.sig35248)){
(front.app.components.dashboard.main.sig35248.cljs$core$IFn$_invoke$arity$0 ? front.app.components.dashboard.main.sig35248.cljs$core$IFn$_invoke$arity$0() : front.app.components.dashboard.main.sig35248.call(null));
} else {
}
} else {
}

var cm_instance = helix.hooks.use_ref(null);
var cm_mount = (function (){var G__35277 = (function (p1__35242_SHARP_){
if(cljs.core.truth_(p1__35242_SHARP_)){
return cljs.core.reset_BANG_(cm_instance,front.app.components.dashboard.main.new_cm(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),p1__35242_SHARP_,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(function (){var or__5045__auto__ = initial_value;
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
var G__35278 = [];
return (helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2(G__35277,G__35278) : helix.hooks.raw_use_callback.call(null,G__35277,G__35278));
})();
var G__35282_35341 = helix.hooks.wrap_fx((function (){
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
var G__35283_35342 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__35282_35341,G__35283_35342) : helix.hooks.raw_use_effect.call(null,G__35282_35341,G__35283_35342));

var G__35289_35343 = helix.hooks.wrap_fx((function (){
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
var G__35290_35344 = [value];
(helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2(G__35289_35343,G__35290_35344) : helix.hooks.raw_use_layout_effect.call(null,G__35289_35343,G__35290_35344));

return helix.core.get_react().createElement("div",(function (){var obj35292 = ({"className":"min-h-full","style":helix.impl.props.dom_style(style),"ref":cm_mount});
return obj35292;
})());
});
if(goog.DEBUG === true){
var G__35293 = G__35272;
(G__35293.displayName = "front.app.components.dashboard.main/editor");

return G__35293;
} else {
return G__35272;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.dashboard.main.sig35248)){
(front.app.components.dashboard.main.sig35248.cljs$core$IFn$_invoke$arity$4 ? front.app.components.dashboard.main.sig35248.cljs$core$IFn$_invoke$arity$4(front.app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__35242#] (when p1__35242# (reset! cm-instance (new-cm {:parent p1__35242#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null) : front.app.components.dashboard.main.sig35248.call(null,front.app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__35242#] (when p1__35242# (reset! cm-instance (new-cm {:parent p1__35242#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.dashboard.main.editor,"front.app.components.dashboard.main/editor");
} else {
}

if(goog.DEBUG){
front.app.components.dashboard.main.sig35294 = helix.core.signature_BANG_();
} else {
}

front.app.components.dashboard.main.Main = (function (){var G__35298 = (function front$app$components$dashboard$main$Main_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.dashboard.main.sig35294)){
(front.app.components.dashboard.main.sig35294.cljs$core$IFn$_invoke$arity$0 ? front.app.components.dashboard.main.sig35294.cljs$core$IFn$_invoke$arity$0() : front.app.components.dashboard.main.sig35294.call(null));
} else {
}
} else {
}

var vec__35303 = helix.hooks.use_state("");
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(0),null);
var set_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35303,(1),null);
return helix.core.get_react().createElement("main",(function (){var obj35313 = ({"className":"ml-60 pt-16 max-h-screnn overflow-auto"});
return obj35313;
})(),helix.core.get_react().createElement("div",(function (){var obj35315 = ({"className":"px-6 py-8"});
return obj35315;
})(),helix.core.get_react().createElement("div",(function (){var obj35319 = ({"className":"max-w-4xl mx-auto"});
return obj35319;
})(),helix.core.get_react().createElement("div",(function (){var obj35321 = ({"className":"bg-white rounded-3xl p-8 mb-5"});
return obj35321;
})(),helix.core.get_react().createElement("h1",(function (){var obj35324 = ({"className":"text-3xl font-bold mb-10"});
return obj35324;
})(),"Create your mock api"),helix.core.get_react().createElement("div",(function (){var obj35326 = ({"className":"flex items-center justify-between"});
return obj35326;
})(),helix.core.get_react().createElement(front.app.components.dashboard.main.editor,(function (){var obj35329 = ({"value":data,"on-change":set_data});
return obj35329;
})()))))));
});
if(goog.DEBUG === true){
var G__35330 = G__35298;
(G__35330.displayName = "front.app.components.dashboard.main/Main");

return G__35330;
} else {
return G__35298;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.dashboard.main.sig35294)){
(front.app.components.dashboard.main.sig35294.cljs$core$IFn$_invoke$arity$4 ? front.app.components.dashboard.main.sig35294.cljs$core$IFn$_invoke$arity$4(front.app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null) : front.app.components.dashboard.main.sig35294.call(null,front.app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.dashboard.main.Main,"front.app.components.dashboard.main/Main");
} else {
}


//# sourceMappingURL=front.app.components.dashboard.main.js.map
