goog.provide('app.components.dashboard.main');
var module$node_modules$$codemirror$closebrackets$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$closebrackets$dist$index_cjs", {});
var module$node_modules$$codemirror$fold$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$fold$dist$index_cjs", {});
var module$node_modules$$codemirror$gutter$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$gutter$dist$index_cjs", {});
var module$node_modules$$codemirror$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$history$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$history$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
app.components.dashboard.main.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-content": ({"white-space": "pre-wrap", "padding": "10px 8px", "min-height": "100%"}), ".cm-line": ({"font-family": "Fira Code", "font-size": "0.8rem"}), "&.cm-focused": ({"outline": "none"}), ".cm-gutters": ({"background": "transparent", "border": "none"}), ".cm-gutterElement": ({"margin-left": "5px"})}));
app.components.dashboard.main.extensions = [app.components.dashboard.main.theme,module$node_modules$$codemirror$history$dist$index_cjs.history(),module$node_modules$$codemirror$highlight$dist$index_cjs.defaultHighlightStyle,module$node_modules$$codemirror$view$dist$index_cjs.drawSelection(),module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true)];
app.components.dashboard.main.new_cm = (function app$components$dashboard$main$new_cm(p__23272){
var map__23278 = p__23272;
var map__23278__$1 = cljs.core.__destructure_map(map__23278);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23278__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23278__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23278__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return (new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state": module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": initial_value, "extensions": (function (){var G__23294 = app.components.dashboard.main.extensions;
var G__23294__$1 = (((on_change == null))?G__23294.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.editable.of(false)):G__23294);
if((!((on_change == null)))){
return G__23294__$1.concat(module$node_modules$$codemirror$view$dist$index_cjs.EditorView.updateListener.of((function (update){
if(cljs.core.truth_(update.docChanged)){
var G__23304 = update.state.doc.toString();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__23304) : on_change.call(null,G__23304));
} else {
return null;
}
})));
} else {
return G__23294__$1;
}
})()})), "parent": parent})));
});
if(goog.DEBUG){
app.components.dashboard.main.sig23316 = helix.core.signature_BANG_();
} else {
}

app.components.dashboard.main.editor = (function (){var G__23324 = (function app$components$dashboard$main$editor_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__23328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var map__23328__$1 = cljs.core.__destructure_map(map__23328);
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.dashboard.main.sig23316)){
(app.components.dashboard.main.sig23316.cljs$core$IFn$_invoke$arity$0 ? app.components.dashboard.main.sig23316.cljs$core$IFn$_invoke$arity$0() : app.components.dashboard.main.sig23316.call(null));
} else {
}
} else {
}

var cm_instance = helix.hooks.use_ref(null);
var cm_mount = (function (){var G__23332 = (function (p1__23311_SHARP_){
if(cljs.core.truth_(p1__23311_SHARP_)){
return cljs.core.reset_BANG_(cm_instance,app.components.dashboard.main.new_cm(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),p1__23311_SHARP_,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(function (){var or__5045__auto__ = initial_value;
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
var G__23333 = [];
return (helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_callback.cljs$core$IFn$_invoke$arity$2(G__23332,G__23333) : helix.hooks.raw_use_callback.call(null,G__23332,G__23333));
})();
var G__23340_23432 = helix.hooks.wrap_fx((function (){
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
var G__23341_23433 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__23340_23432,G__23341_23433) : helix.hooks.raw_use_effect.call(null,G__23340_23432,G__23341_23433));

var G__23349_23437 = helix.hooks.wrap_fx((function (){
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
var G__23350_23438 = [value];
(helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_layout_effect.cljs$core$IFn$_invoke$arity$2(G__23349_23437,G__23350_23438) : helix.hooks.raw_use_layout_effect.call(null,G__23349_23437,G__23350_23438));

return helix.core.get_react().createElement("div",(function (){var obj23366 = ({"className":"min-h-full","style":helix.impl.props.dom_style(style),"ref":cm_mount});
return obj23366;
})());
});
if(goog.DEBUG === true){
var G__23368 = G__23324;
(G__23368.displayName = "app.components.dashboard.main/editor");

return G__23368;
} else {
return G__23324;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.dashboard.main.sig23316)){
(app.components.dashboard.main.sig23316.cljs$core$IFn$_invoke$arity$4 ? app.components.dashboard.main.sig23316.cljs$core$IFn$_invoke$arity$4(app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__23311#] (when p1__23311# (reset! cm-instance (new-cm {:parent p1__23311#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null) : app.components.dashboard.main.sig23316.call(null,app.components.dashboard.main.editor,"(hooks/use-ref nil)(hooks/use-callback :once (fn* [p1__23311#] (when p1__23311# (reset! cm-instance (new-cm {:parent p1__23311#, :initial-value (or initial-value \"\"), :on-change on-change})))))(hooks/use-effect :once (fn* [] (when-let [cm (clojure.core/deref cm-instance)] (.destroy cm))))(hooks/use-layout-effect [value] (when value (when-let [cm (clojure.core/deref cm-instance)] (when (not= (string/join \"\\n\" (.. cm -state -doc -text)) value) (let [tx (-> (.-state cm) (.update {:changes {:from 0, :to (.. cm -state -doc -length), :insert value}}))] (.dispatch cm tx))))))",null,null));
} else {
}

helix.core.register_BANG_(app.components.dashboard.main.editor,"app.components.dashboard.main/editor");
} else {
}

if(goog.DEBUG){
app.components.dashboard.main.sig23377 = helix.core.signature_BANG_();
} else {
}

app.components.dashboard.main.Main = (function (){var G__23379 = (function app$components$dashboard$main$Main_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__23384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.dashboard.main.sig23377)){
(app.components.dashboard.main.sig23377.cljs$core$IFn$_invoke$arity$0 ? app.components.dashboard.main.sig23377.cljs$core$IFn$_invoke$arity$0() : app.components.dashboard.main.sig23377.call(null));
} else {
}
} else {
}

var vec__23388 = helix.hooks.use_state("");
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23388,(0),null);
var set_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23388,(1),null);
return helix.core.get_react().createElement("main",(function (){var obj23396 = ({"className":"ml-60 pt-16 max-h-screnn overflow-auto"});
return obj23396;
})(),helix.core.get_react().createElement("div",(function (){var obj23399 = ({"className":"px-6 py-8"});
return obj23399;
})(),helix.core.get_react().createElement("div",(function (){var obj23401 = ({"className":"max-w-4xl mx-auto"});
return obj23401;
})(),helix.core.get_react().createElement("div",(function (){var obj23403 = ({"className":"bg-white rounded-3xl p-8 mb-5"});
return obj23403;
})(),helix.core.get_react().createElement("h1",(function (){var obj23409 = ({"className":"text-3xl font-bold mb-10"});
return obj23409;
})(),"Create your mock api"),helix.core.get_react().createElement("div",(function (){var obj23411 = ({"className":"flex items-center justify-between"});
return obj23411;
})(),helix.core.get_react().createElement(app.components.dashboard.main.editor,(function (){var obj23419 = ({"value":data,"on-change":set_data});
return obj23419;
})()))))));
});
if(goog.DEBUG === true){
var G__23421 = G__23379;
(G__23421.displayName = "app.components.dashboard.main/Main");

return G__23421;
} else {
return G__23379;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.dashboard.main.sig23377)){
(app.components.dashboard.main.sig23377.cljs$core$IFn$_invoke$arity$4 ? app.components.dashboard.main.sig23377.cljs$core$IFn$_invoke$arity$4(app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null) : app.components.dashboard.main.sig23377.call(null,app.components.dashboard.main.Main,"(hooks/use-state \"\")",null,null));
} else {
}

helix.core.register_BANG_(app.components.dashboard.main.Main,"app.components.dashboard.main/Main");
} else {
}


//# sourceMappingURL=app.components.dashboard.main.js.map
