goog.provide('app.aux');
var module$node_modules$$testing_library$react$dist$index=shadow.js.require("module$node_modules$$testing_library$react$dist$index", {});
app.aux.wait_for = (function app$aux$wait_for(var_args){
var G__33276 = arguments.length;
switch (G__33276) {
case 1:
return app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.aux.wait_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.aux.wait_for.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return module$node_modules$$testing_library$react$dist$index.waitFor(callback);
}));

(app.aux.wait_for.cljs$core$IFn$_invoke$arity$2 = (function (callback,options){
return module$node_modules$$testing_library$react$dist$index.waitFor(callback,cljs.core.clj__GT_js(options));
}));

(app.aux.wait_for.cljs$lang$maxFixedArity = 2);

app.aux.text = (function app$aux$text(el){
return el.textContent;
});
app.aux.length = (function app$aux$length(el){
return el.length;
});
app.aux.find_by_text = (function app$aux$find_by_text(el,text){
return el.findByText(text);
});
app.aux.click = (function app$aux$click(el){
return module$node_modules$$testing_library$react$dist$index.fireEvent.click(el);
});
app.aux.change = (function app$aux$change(el,value){
return module$node_modules$$testing_library$react$dist$index.fireEvent.change(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)));
});
app.aux.tag = (function app$aux$tag(element,tag_name){
return element.getElementsByTagName(tag_name);
});
app.aux.query = (function app$aux$query(element,query){
return element.querySelector(query);
});
app.aux.testing_container = (function app$aux$testing_container(){
var div = document.createElement("div");
return document.body.appendChild(div);
});
app.aux.render = (function app$aux$render(component){
return module$node_modules$$testing_library$react$dist$index.render(helix.core.get_react().createElement(component,null),({"container": app.aux.testing_container()}));
});
app.aux.cleanup = (function app$aux$cleanup(var_args){
var G__33310 = arguments.length;
switch (G__33310) {
case 0:
return app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.aux.cleanup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.aux.cleanup.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$$testing_library$react$dist$index.cleanup();
}));

(app.aux.cleanup.cljs$core$IFn$_invoke$arity$1 = (function (after_fn){
module$node_modules$$testing_library$react$dist$index.cleanup();

return (after_fn.cljs$core$IFn$_invoke$arity$0 ? after_fn.cljs$core$IFn$_invoke$arity$0() : after_fn.call(null));
}));

(app.aux.cleanup.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.aux.js.map
