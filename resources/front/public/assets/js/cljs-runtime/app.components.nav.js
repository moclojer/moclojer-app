goog.provide('app.components.nav');
if(goog.DEBUG){
app.components.nav.sig25254 = helix.core.signature_BANG_();
} else {
}

app.components.nav.NavBar = (function (){var G__25256 = (function app$components$nav$NavBar_render(props__20503__auto__,maybe_ref__20504__auto__){
var vec__25261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__20503__auto__),maybe_ref__20504__auto__], null);
var map__25264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25261,(0),null);
var map__25264__$1 = cljs.core.__destructure_map(map__25264);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(app.components.nav.sig25254)){
(app.components.nav.sig25254.cljs$core$IFn$_invoke$arity$0 ? app.components.nav.sig25254.cljs$core$IFn$_invoke$arity$0() : app.components.nav.sig25254.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj25266 = ({"className":"py-10"});
return obj25266;
})(),helix.core.get_react().createElement("div",(function (){var obj25268 = ({"className":"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"});
return obj25268;
})(),helix.core.get_react().createElement("nav",(function (){var obj25272 = ({"className":"relative z-50 flex justify-between"});
return obj25272;
})(),helix.core.get_react().createElement("div",(function (){var obj25276 = ({"className":"flex items-center md:gap-x-12"});
return obj25276;
})(),helix.core.get_react().createElement("img",(function (){var obj25282 = ({"src":""});
return obj25282;
})()),helix.core.get_react().createElement("div",(function (){var obj25290 = ({"className":"hidden md:flex md:gap-x-6"});
return obj25290;
})(),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj25292 = ({"children":"Home","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","home","app.core/home",1018164047))});
return obj25292;
})()),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj25296 = ({"children":"Features","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","features","app.core/features",-37398004))});
return obj25296;
})()),helix.core.get_react().createElement(app.components.navlink.NavLink,(function (){var obj25304 = ({"children":"Pricing","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","pricing","app.core/pricing",-947818728))});
return obj25304;
})()))),helix.core.get_react().createElement("div",(function (){var obj25306 = ({"className":"flex items-center gap-x-5 md:gap-x-8"});
return obj25306;
})(),helix.core.get_react().createElement(app.auth.views.AuthMenu,(function (){var obj25308 = ({"user":user});
return obj25308;
})()),helix.core.get_react().createElement(app.components.button.Button,null,"Get started"),helix.core.get_react().createElement("div",(function (){var obj25312 = ({"className":"-mr-1 md:hidden"});
return obj25312;
})())))));
});
if(goog.DEBUG === true){
var G__25315 = G__25256;
(G__25315.displayName = "app.components.nav/NavBar");

return G__25315;
} else {
return G__25256;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(app.components.nav.sig25254)){
(app.components.nav.sig25254.cljs$core$IFn$_invoke$arity$4 ? app.components.nav.sig25254.cljs$core$IFn$_invoke$arity$4(app.components.nav.NavBar,"",null,null) : app.components.nav.sig25254.call(null,app.components.nav.NavBar,"",null,null));
} else {
}

helix.core.register_BANG_(app.components.nav.NavBar,"app.components.nav/NavBar");
} else {
}


//# sourceMappingURL=app.components.nav.js.map
