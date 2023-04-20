goog.provide('dev.msw.handlers');
dev.msw.handlers.login_handler = (function dev$msw$handlers$login_handler(req,res,ctx){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.body.username,"err@ee.cc")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx.delay((500)),ctx.status((500)),ctx.json(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null)))], null));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx.delay((500)),ctx.status((201)),ctx.json(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"username","username",1605666410),req.body.username], null)))], null));
}
});
dev.msw.handlers.handlers = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev.msw.helpers.resp_post("/login",dev.msw.handlers.login_handler)], null);

//# sourceMappingURL=dev.msw.handlers.js.map
