goog.provide('front.app.aux');
var module$node_modules$$testing_library$react$dist$index=shadow.js.require("module$node_modules$$testing_library$react$dist$index", {});
front.app.aux.wait_for = (function front$app$aux$wait_for(var_args){
var G__53607 = arguments.length;
switch (G__53607) {
case 1:
return front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$1 = (function (callback){
return module$node_modules$$testing_library$react$dist$index.waitFor(callback);
}));

(front.app.aux.wait_for.cljs$core$IFn$_invoke$arity$2 = (function (callback,options){
return module$node_modules$$testing_library$react$dist$index.waitFor(callback,cljs.core.clj__GT_js(options));
}));

(front.app.aux.wait_for.cljs$lang$maxFixedArity = 2);

front.app.aux.text = (function front$app$aux$text(el){
return el.textContent;
});
front.app.aux.length = (function front$app$aux$length(el){
return el.length;
});
front.app.aux.find_by_text = (function front$app$aux$find_by_text(el,text){
return el.findByText(text);
});
front.app.aux.click = (function front$app$aux$click(el){
return module$node_modules$$testing_library$react$dist$index.fireEvent.click(el);
});
front.app.aux.change = (function front$app$aux$change(el,value){
return module$node_modules$$testing_library$react$dist$index.fireEvent.change(el,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)));
});
front.app.aux.tag = (function front$app$aux$tag(element,tag_name){
return element.getElementsByTagName(tag_name);
});
front.app.aux.query = (function front$app$aux$query(element,query){
return element.querySelector(query);
});
front.app.aux.testing_container = (function front$app$aux$testing_container(){
var div = document.createElement("div");
return document.body.appendChild(div);
});
front.app.aux.render = (function front$app$aux$render(component){
return module$node_modules$$testing_library$react$dist$index.render(helix.core.get_react().createElement(component,null),({"container": front.app.aux.testing_container()}));
});
front.app.aux.cleanup = (function front$app$aux$cleanup(var_args){
var G__53618 = arguments.length;
switch (G__53618) {
case 0:
return front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$$testing_library$react$dist$index.cleanup();
}));

(front.app.aux.cleanup.cljs$core$IFn$_invoke$arity$1 = (function (after_fn){
module$node_modules$$testing_library$react$dist$index.cleanup();

return (after_fn.cljs$core$IFn$_invoke$arity$0 ? after_fn.cljs$core$IFn$_invoke$arity$0() : after_fn.call(null));
}));

(front.app.aux.cleanup.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=front.app.aux.js.map
