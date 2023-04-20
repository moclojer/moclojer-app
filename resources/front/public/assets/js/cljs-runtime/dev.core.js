goog.provide('dev.core');
dev.core.debug_QMARK_ = goog.DEBUG;
dev.core.dev_setup = (function dev$core$dev_setup(){
if(dev.core.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
dev.core.init = (function dev$core$init(){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___29329__auto__){
return promesa.protocols._bind(promesa.protocols._promise(dev.msw.core.init_BANG_()),(function (___29328__auto__){
return promesa.protocols._bind(promesa.protocols._promise(dev.core.dev_setup()),(function (___29328__auto____$1){
return promesa.protocols._promise(front.app.core.init());
}));
}));
}));
});
goog.exportSymbol('dev.core.init', dev.core.init);

//# sourceMappingURL=dev.core.js.map
