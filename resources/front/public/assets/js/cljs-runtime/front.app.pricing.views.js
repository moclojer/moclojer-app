goog.provide('front.app.pricing.views');
if(goog.DEBUG){
front.app.pricing.views.sig29220 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.Plan = (function (){var G__29221 = (function front$app$pricing$views$Plan_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
var map__29225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29222,(0),null);
var map__29225__$1 = cljs.core.__destructure_map(map__29225);
var featured = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"featured","featured",1584623723));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"price","price",22129180));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29225__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig29220)){
(front.app.pricing.views.sig29220.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig29220.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig29220.call(null));
} else {
}
} else {
}

var class_name_section = (cljs.core.truth_(featured)?["flex flex-col rounded-3xl px-6 sm:px-8 ","order-first bg-blue-600 py-8 lg:order-none"].join(''):["flex flex-col rounded-3xl px-6 sm:px-8 ","lg:py-8"].join(''));
return helix.core.get_react().createElement("section",(function (){var obj29234 = ({"className":class_name_section});
return obj29234;
})(),helix.core.get_react().createElement("h3",(function (){var obj29236 = ({"className":"mt-5 font-display text-lg text-white"});
return obj29236;
})(),name),helix.core.get_react().createElement("p",(function (){var obj29239 = ({"className":["mt-2 text-base",(cljs.core.truth_(featured)?" text-white":" text-slate-400")].join('')});
return obj29239;
})(),description),helix.core.get_react().createElement("p",(function (){var obj29242 = ({"className":"order-first font-display text-5xl font-light tracking-tight text-white"});
return obj29242;
})(),price),helix.core.get_react().createElement("ul",(function (){var obj29244 = ({"role":"list","className":["order-last mt-10 flex flex-col gap-y-3 text-sm",(cljs.core.truth_(featured)?" text-white":" text-slate-400")].join('')});
return obj29244;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (feature){
return helix.core.get_react().createElement("li",(function (){var obj29246 = ({"key":feature,"className":"relative"});
return obj29246;
})(),helix.core.get_react().createElement(front.app.components.checkicon.CheckIcon,(function (){var obj29248 = ({"class-name":(cljs.core.truth_(featured)?"text-white":"text-slate-400")});
return obj29248;
})()),helix.core.get_react().createElement("span",(function (){var obj29250 = ({"className":"ml-4"});
return obj29250;
})(),feature));
}),features)),helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj29253 = ({"href":"/","variant":(cljs.core.truth_(featured)?"solid":"outline"),"color":"white","class-name":"mt-8","aria-label":["Get started with te ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," plane for price"].join('')});
return obj29253;
})(),"Get started"));
});
if(goog.DEBUG === true){
var G__29254 = G__29221;
(G__29254.displayName = "front.app.pricing.views/Plan");

return G__29254;
} else {
return G__29221;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig29220)){
(front.app.pricing.views.sig29220.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig29220.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.Plan,"",null,null) : front.app.pricing.views.sig29220.call(null,front.app.pricing.views.Plan,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.Plan,"front.app.pricing.views/Plan");
} else {
}

if(goog.DEBUG){
front.app.pricing.views.sig29258 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.Pricing = (function (){var G__29263 = (function front$app$pricing$views$Pricing_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig29258)){
(front.app.pricing.views.sig29258.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig29258.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig29258.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("section",(function (){var obj29270 = ({"id":"pricing","aria-label":"pricing","className":"bg-slate-900 py-20 sm:py-32"});
return obj29270;
})(),helix.core.get_react().createElement(front.app.components.container.Container,null,helix.core.get_react().createElement("div",(function (){var obj29273 = ({"className":"md:text-center"});
return obj29273;
})(),helix.core.get_react().createElement("h2",(function (){var obj29279 = ({"className":"font-display text-3xl tracking-tight text-white sm:text-4xl"});
return obj29279;
})(),helix.core.get_react().createElement("span",(function (){var obj29281 = ({"className":"relative whitespace-nowrap"});
return obj29281;
})(),helix.core.get_react().createElement(front.app.components.swirlydoodle.SwirlyDoodle,(function (){var obj29283 = ({"class-name":"absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"});
return obj29283;
})()),helix.core.get_react().createElement("span",(function (){var obj29291 = ({"className":"relative"});
return obj29291;
})(),"Simple pricing")," for everyone.")),helix.core.get_react().createElement("p",(function (){var obj29293 = ({"className":"mt-4 text-lg text-slate-400"});
return obj29293;
})(),"It doesn't matter what size your business is.")),helix.core.get_react().createElement("div",(function (){var obj29297 = ({"className":"-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"});
return obj29297;
})(),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj29299 = ({"name":"Starter","price":"$9","description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj29299;
})()),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj29305 = ({"name":"Small B","price":"$15","featured":true,"description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj29305;
})()),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj29308 = ({"name":"Big tech","price":"$9","description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj29308;
})()))));
});
if(goog.DEBUG === true){
var G__29309 = G__29263;
(G__29309.displayName = "front.app.pricing.views/Pricing");

return G__29309;
} else {
return G__29263;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig29258)){
(front.app.pricing.views.sig29258.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig29258.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.Pricing,"",null,null) : front.app.pricing.views.sig29258.call(null,front.app.pricing.views.Pricing,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.Pricing,"front.app.pricing.views/Pricing");
} else {
}

if(goog.DEBUG){
front.app.pricing.views.sig29310 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.pricing_page = (function (){var G__29315 = (function front$app$pricing$views$pricing_page_render(props__24071__auto__,maybe_ref__24072__auto__){
var vec__29319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__24071__auto__),maybe_ref__24072__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig29310)){
(front.app.pricing.views.sig29310.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig29310.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig29310.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.pricing.views.Pricing,null));
});
if(goog.DEBUG === true){
var G__29324 = G__29315;
(G__29324.displayName = "front.app.pricing.views/pricing-page");

return G__29324;
} else {
return G__29315;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig29310)){
(front.app.pricing.views.sig29310.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig29310.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.pricing_page,"",null,null) : front.app.pricing.views.sig29310.call(null,front.app.pricing.views.pricing_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.pricing_page,"front.app.pricing.views/pricing-page");
} else {
}


//# sourceMappingURL=front.app.pricing.views.js.map
