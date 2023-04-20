goog.provide('front.app.components.footer');
if(goog.DEBUG){
front.app.components.footer.sig39266 = helix.core.signature_BANG_();
} else {
}

front.app.components.footer.FooterComponent = (function (){var G__39279 = (function front$app$components$footer$FooterComponent_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__39280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.components.footer.sig39266)){
(front.app.components.footer.sig39266.cljs$core$IFn$_invoke$arity$0 ? front.app.components.footer.sig39266.cljs$core$IFn$_invoke$arity$0() : front.app.components.footer.sig39266.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("footer",(function (){var obj39284 = ({"className":"bg-slate-50"});
return obj39284;
})(),helix.core.get_react().createElement(front.app.components.container.Container,null,helix.core.get_react().createElement("div",(function (){var obj39286 = ({"className":"py-16"});
return obj39286;
})(),helix.core.get_react().createElement("nav",(function (){var obj39289 = ({"className":"mt-10 text-sm"});
return obj39289;
})(),helix.core.get_react().createElement("div",(function (){var obj39291 = ({"className":"-my-1 flex justify-center gap-x-6"});
return obj39291;
})(),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj39293 = ({"children":"Features","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","features","app.core/features",-37398004))});
return obj39293;
})()),helix.core.get_react().createElement(front.app.components.navlink.NavLink,(function (){var obj39295 = ({"children":"Pricing","href":reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.core","pricing","app.core/pricing",-947818728))});
return obj39295;
})())))),helix.core.get_react().createElement("div",(function (){var obj39297 = ({"className":"flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"});
return obj39297;
})(),helix.core.get_react().createElement("div",(function (){var obj39299 = ({"className":"flex gap-x-6"});
return obj39299;
})(),helix.core.get_react().createElement("a",(function (){var obj39301 = ({"href":"https://twitter.com/moclojer","className":"group fa-twitter","target":"_blank"});
return obj39301;
})(),helix.core.get_react().createElement("svg",(function (){var obj39303 = ({"aria-hidden":"true","className":"h-6 w-6 fill-slate-500 group-hover:fill-slate-700"});
return obj39303;
})(),helix.core.get_react().createElement("path",(function (){var obj39305 = ({"d":"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"});
return obj39305;
})()))),helix.core.get_react().createElement("a",(function (){var obj39307 = ({"href":"https://clj.social/@moclojer","className":"group","target":"_blank"});
return obj39307;
})(),helix.core.get_react().createElement("svg",(function (){var obj39309 = ({"aria-hidden":"true","className":"h-6 w-6 fill-slate-500 group-hover:fill-slate-700"});
return obj39309;
})(),helix.core.get_react().createElement("path",(function (){var obj39311 = ({"d":"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"});
return obj39311;
})()))),helix.core.get_react().createElement("a",(function (){var obj39313 = ({"href":"https://github.com/moclojer","target":"_blank","className":"group","aria-label":"GitHub"});
return obj39313;
})(),helix.core.get_react().createElement("svg",(function (){var obj39315 = ({"aria-hidden":"true","className":"h-6 w-6 fill-slate-500 group-hover:fill-slate-700"});
return obj39315;
})(),helix.core.get_react().createElement("path",(function (){var obj39317 = ({"d":"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"});
return obj39317;
})()))))),helix.core.get_react().createElement("pre",null,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39318_39323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39319_39324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39320_39325 = true;
var _STAR_print_fn_STAR__temp_val__39321_39326 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39320_39325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39321_39326);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refx.db.app_db));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39319_39324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39318_39323);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})())));
});
if(goog.DEBUG === true){
var G__39322 = G__39279;
(G__39322.displayName = "front.app.components.footer/FooterComponent");

return G__39322;
} else {
return G__39279;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.components.footer.sig39266)){
(front.app.components.footer.sig39266.cljs$core$IFn$_invoke$arity$4 ? front.app.components.footer.sig39266.cljs$core$IFn$_invoke$arity$4(front.app.components.footer.FooterComponent,"",null,null) : front.app.components.footer.sig39266.call(null,front.app.components.footer.FooterComponent,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.components.footer.FooterComponent,"front.app.components.footer/FooterComponent");
} else {
}


//# sourceMappingURL=front.app.components.footer.js.map
