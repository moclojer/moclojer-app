goog.provide('app.dev');
helix.experimental.refresh.inject_hook_BANG_();
app.dev.refresh = (function app$dev$refresh(){
refx.alpha.clear_subscription_cache_BANG_();

return helix.experimental.refresh.refresh_BANG_();
});
app.dev.debug_QMARK_ = goog.DEBUG;
app.dev.dev_setup = (function app$dev$dev_setup(){
if(app.dev.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});

//# sourceMappingURL=app.dev.js.map
