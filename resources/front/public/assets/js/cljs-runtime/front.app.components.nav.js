goog.provide('front.app.components.nav');
if(goog.DEBUG){
front.app.components.nav.sig29610 = helix.core.signature_BANG_();
} else {
}

front.app.components.nav.NavBar = (function (){var G__29611 = (function front$app$components$nav$NavBar_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__29615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29612,(0),null);
var map__29615__$1 = cljs.core.__destructure_map(map__29615);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29615__$1,new cljs.core.Keyword(null,"user","user",1532431356));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.nav.sig29610)){
(front.app.components.nav.sig29610.cljs$core$IFn$_invoke$arity$0 ? front.app.components.nav.sig29610.cljs$core$IFn$_invoke$arity$0() : front.app.components.nav.sig29610.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",(function (){var obj29617 = ({"className":"py-10"});
return obj29617;
})(),helix.core.get_react().createElement("div",(function (){var obj29620 = ({"className":"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"});
return obj29620;
})(),helix.core.get_react().createElement("nav",(function (){var obj29625 = ({"className":"relative z-50 flex justify-between"});
return obj29625;
})(),helix.core.get_react().createElement("div",(function (){var obj29627 = ({"className":"flex items-center md:gap-x-12"});
return obj29627;
})(),helix.core.get_react().createElement("img",(function (){var obj29629 = ({"src":""});
return obj29629;
})()),helix.core.get_react().createElement("div",(function (){var obj29633 = ({"className":"hidden md:flex md:gap-x-6"});
return obj29633;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29637 = ({"children":"Home","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","home","app.core/home",1018164047))});
return obj29637;
})()),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29643 = ({"children":"Features","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","features","app.core/features",-37398004))});
return obj29643;
})()),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj29647 = ({"children":"Pricing","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","pricing","app.core/pricing",-947818728))});
return obj29647;
})()))),helix.core.get_react().createElement("div",(function (){var obj29653 = ({"className":"flex items-center gap-x-5 md:gap-x-8"});
return obj29653;
})(),helix.core.get_react().createElement(front.app.auth.views.AuthMenu,(function (){var obj29657 = ({"user":user});
return obj29657;
})()),helix.core.get_react().createElement(front.app.components.button.Button,null,"Get started"),helix.core.get_react().createElement("div",(function (){var obj29661 = ({"className":"-mr-1 md:hidden"});
return obj29661;
})())))));
});
if(goog.DEBUG === true){
var G__29664 = G__29611;
(G__29664.displayName = "front.app.components.nav/NavBar");

return G__29664;
} else {
return G__29611;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.nav.sig29610)){
(front.app.components.nav.sig29610.cljs$core$IFn$_invoke$arity$4 ? front.app.components.nav.sig29610.cljs$core$IFn$_invoke$arity$4(front.app.components.nav.NavBar,"",null,null) : front.app.components.nav.sig29610.call(null,front.app.components.nav.NavBar,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.nav.NavBar,"front.app.components.nav/NavBar");
} else {
}


//# sourceMappingURL=front.app.components.nav.js.map
