goog.provide('front.app.auth.db');
var module$node_modules$js_cookie$dist$js_cookie=shadow.js.require("module$node_modules$js_cookie$dist$js_cookie", {});
front.app.auth.db.set_cookie = (function front$app$auth$db$set_cookie(name,expires,value){
return module$node_modules$js_cookie$dist$js_cookie.set(name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),({"expires": expires}));
});
front.app.auth.db.get_cookie = (function front$app$auth$db$get_cookie(name){
return module$node_modules$js_cookie$dist$js_cookie.get(name);
});
front.app.auth.db.remove_cookie = (function front$app$auth$db$remove_cookie(name){
return module$node_modules$js_cookie$dist$js_cookie.remove(name);
});
refx.alpha.reg_cofx(new cljs.core.Keyword("app.auth","cookie","app.auth/cookie",645627376),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"cookie-current-user","cookie-current-user",140042850),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(front.app.auth.db.get_cookie("current-user")));
}));

//# sourceMappingURL=front.app.auth.db.js.map
