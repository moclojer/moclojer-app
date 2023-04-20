goog.provide('front.app.components.nav');
if(goog.DEBUG){
front.app.components.nav.sig36127 = helix.core.signature_BANG_();
} else {
}

front.app.components.nav.NavBar = (function (){var G__36130 = (function front$app$components$nav$NavBar_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__36131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__36134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var map__36134__$1 = cljs.core.__destructure_map(map__36134);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36134__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.nav.sig36127)){
(front.app.components.nav.sig36127.cljs$core$IFn$_invoke$arity$0 ? front.app.components.nav.sig36127.cljs$core$IFn$_invoke$arity$0() : front.app.components.nav.sig36127.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj36138 = ({"className":"py-10"});
return obj36138;
})(),helix.core.get_react().createElement("div",(function (){var obj36147 = ({"className":"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"});
return obj36147;
})(),helix.core.get_react().createElement("nav",(function (){var obj36149 = ({"className":"relative z-50 flex justify-between"});
return obj36149;
})(),helix.core.get_react().createElement("div",(function (){var obj36151 = ({"className":"flex items-center md:gap-x-12"});
return obj36151;
})(),helix.core.get_react().createElement("img",(function (){var obj36156 = ({"src":""});
return obj36156;
})()),helix.core.get_react().createElement("div",(function (){var obj36158 = ({"className":"hidden md:flex md:gap-x-6"});
return obj36158;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj36160 = ({"children":"Home","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","home","app.core/home",1018164047))});
return obj36160;
})()),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj36162 = ({"children":"Features","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","features","app.core/features",-37398004))});
return obj36162;
})()),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj36164 = ({"children":"Pricing","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","pricing","app.core/pricing",-947818728))});
return obj36164;
})()))),helix.core.get_react().createElement("div",(function (){var obj36166 = ({"className":"flex items-center gap-x-5 md:gap-x-8"});
return obj36166;
})(),helix.core.get_react().createElement(front.app.auth.views.AuthMenu,(function (){var obj36169 = ({"user":user});
return obj36169;
})()),helix.core.get_react().createElement(front.app.components.button.Button,null,"Get started"),helix.core.get_react().createElement("div",(function (){var obj36171 = ({"className":"-mr-1 md:hidden"});
return obj36171;
})())))));
});
if(goog.DEBUG === true){
var G__36172 = G__36130;
(G__36172.displayName = "front.app.components.nav/NavBar");

return G__36172;
} else {
return G__36130;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.nav.sig36127)){
(front.app.components.nav.sig36127.cljs$core$IFn$_invoke$arity$4 ? front.app.components.nav.sig36127.cljs$core$IFn$_invoke$arity$4(front.app.components.nav.NavBar,"",null,null) : front.app.components.nav.sig36127.call(null,front.app.components.nav.NavBar,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.nav.NavBar,"front.app.components.nav/NavBar");
} else {
}


//# sourceMappingURL=front.app.components.nav.js.map
