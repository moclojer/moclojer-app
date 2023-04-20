goog.provide('front.app.pricing.views');
if(goog.DEBUG){
front.app.pricing.views.sig35884 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.Plan = (function (){var G__35921 = (function front$app$pricing$views$Plan_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
var map__35928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(0),null);
var map__35928__$1 = cljs.core.__destructure_map(map__35928);
var featured = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"featured","featured",1584623723));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"price","price",22129180));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig35884)){
(front.app.pricing.views.sig35884.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig35884.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig35884.call(null));
} else {
}
} else {
}

var class_name_section = (cljs.core.truth_(featured)?["flex flex-col rounded-3xl px-6 sm:px-8 ","order-first bg-blue-600 py-8 lg:order-none"].join(''):["flex flex-col rounded-3xl px-6 sm:px-8 ","lg:py-8"].join(''));
return helix.core.get_react().createElement("section",(function (){var obj35933 = ({"className":class_name_section});
return obj35933;
})(),helix.core.get_react().createElement("h3",(function (){var obj35936 = ({"className":"mt-5 font-display text-lg text-white"});
return obj35936;
})(),name),helix.core.get_react().createElement("p",(function (){var obj35938 = ({"className":["mt-2 text-base",(cljs.core.truth_(featured)?" text-white":" text-slate-400")].join('')});
return obj35938;
})(),description),helix.core.get_react().createElement("p",(function (){var obj35940 = ({"className":"order-first font-display text-5xl font-light tracking-tight text-white"});
return obj35940;
})(),price),helix.core.get_react().createElement("ul",(function (){var obj35942 = ({"role":"list","className":["order-last mt-10 flex flex-col gap-y-3 text-sm",(cljs.core.truth_(featured)?" text-white":" text-slate-400")].join('')});
return obj35942;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (feature){
return helix.core.get_react().createElement("li",(function (){var obj35944 = ({"key":feature,"className":"relative"});
return obj35944;
})(),helix.core.get_react().createElement(front.app.components.checkicon.CheckIcon,(function (){var obj35946 = ({"class-name":(cljs.core.truth_(featured)?"text-white":"text-slate-400")});
return obj35946;
})()),helix.core.get_react().createElement("span",(function (){var obj35948 = ({"className":"ml-4"});
return obj35948;
})(),feature));
}),features)),helix.core.get_react().createElement(front.app.components.button.Button,(function (){var obj35950 = ({"href":"/","variant":(cljs.core.truth_(featured)?"solid":"outline"),"color":"white","class-name":"mt-8","aria-label":["Get started with te ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," plane for price"].join('')});
return obj35950;
})(),"Get started"));
});
if(goog.DEBUG === true){
var G__35951 = G__35921;
(G__35951.displayName = "front.app.pricing.views/Plan");

return G__35951;
} else {
return G__35921;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig35884)){
(front.app.pricing.views.sig35884.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig35884.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.Plan,"",null,null) : front.app.pricing.views.sig35884.call(null,front.app.pricing.views.Plan,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.Plan,"front.app.pricing.views/Plan");
} else {
}

if(goog.DEBUG){
front.app.pricing.views.sig35952 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.Pricing = (function (){var G__35957 = (function front$app$pricing$views$Pricing_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__35959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig35952)){
(front.app.pricing.views.sig35952.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig35952.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig35952.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("section",(function (){var obj35964 = ({"id":"pricing","aria-label":"pricing","className":"bg-slate-900 py-20 sm:py-32"});
return obj35964;
})(),helix.core.get_react().createElement(front.app.components.container.Container,null,helix.core.get_react().createElement("div",(function (){var obj35970 = ({"className":"md:text-center"});
return obj35970;
})(),helix.core.get_react().createElement("h2",(function (){var obj35972 = ({"className":"font-display text-3xl tracking-tight text-white sm:text-4xl"});
return obj35972;
})(),helix.core.get_react().createElement("span",(function (){var obj35974 = ({"className":"relative whitespace-nowrap"});
return obj35974;
})(),helix.core.get_react().createElement(front.app.components.swirlydoodle.SwirlyDoodle,(function (){var obj35979 = ({"class-name":"absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"});
return obj35979;
})()),helix.core.get_react().createElement("span",(function (){var obj35981 = ({"className":"relative"});
return obj35981;
})(),"Simple pricing")," for everyone.")),helix.core.get_react().createElement("p",(function (){var obj35983 = ({"className":"mt-4 text-lg text-slate-400"});
return obj35983;
})(),"It doesn't matter what size your business is.")),helix.core.get_react().createElement("div",(function (){var obj35986 = ({"className":"-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8"});
return obj35986;
})(),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj35988 = ({"name":"Starter","price":"$9","description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj35988;
})()),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj35991 = ({"name":"Small B","price":"$15","featured":true,"description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj35991;
})()),helix.core.get_react().createElement(front.app.pricing.views.Plan,(function (){var obj35994 = ({"name":"Big tech","price":"$9","description":"Good for anyone who is bla bla bla bla","href":"/","features":new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Send 10 quotes and invoices","Connect up to 2 bank accounts","Track up to 15 expenses per month","Manual payroll support","Export up to 3 reports"], null)});
return obj35994;
})()))));
});
if(goog.DEBUG === true){
var G__36002 = G__35957;
(G__36002.displayName = "front.app.pricing.views/Pricing");

return G__36002;
} else {
return G__35957;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig35952)){
(front.app.pricing.views.sig35952.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig35952.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.Pricing,"",null,null) : front.app.pricing.views.sig35952.call(null,front.app.pricing.views.Pricing,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.Pricing,"front.app.pricing.views/Pricing");
} else {
}

if(goog.DEBUG){
front.app.pricing.views.sig36010 = helix.core.signature_BANG_();
} else {
}

front.app.pricing.views.pricing_page = (function (){var G__36032 = (function front$app$pricing$views$pricing_page_render(props__32635__auto__,maybe_ref__32636__auto__){
var vec__36035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32635__auto__),maybe_ref__32636__auto__], null);
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_(front.app.pricing.views.sig36010)){
(front.app.pricing.views.sig36010.cljs$core$IFn$_invoke$arity$0 ? front.app.pricing.views.sig36010.cljs$core$IFn$_invoke$arity$0() : front.app.pricing.views.sig36010.call(null));
} else {
}
} else {
}

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement(front.app.pricing.views.Pricing,null));
});
if(goog.DEBUG === true){
var G__36039 = G__36032;
(G__36039.displayName = "front.app.pricing.views/pricing-page");

return G__36039;
} else {
return G__36032;
}
})();


if(cljs.core.truth_(cljs.core.with_meta(new cljs.core.Symbol("goog","DEBUG","goog/DEBUG",1589374035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("clojure.core","boolean","clojure.core/boolean",-1187218872,null)], null)))){
if(cljs.core.truth_(front.app.pricing.views.sig36010)){
(front.app.pricing.views.sig36010.cljs$core$IFn$_invoke$arity$4 ? front.app.pricing.views.sig36010.cljs$core$IFn$_invoke$arity$4(front.app.pricing.views.pricing_page,"",null,null) : front.app.pricing.views.sig36010.call(null,front.app.pricing.views.pricing_page,"",null,null));
} else {
}

helix.core.register_BANG_(front.app.pricing.views.pricing_page,"front.app.pricing.views/pricing-page");
} else {
}


//# sourceMappingURL=front.app.pricing.views.js.map
