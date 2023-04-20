goog.provide('front.dev.core');
front.dev.core.debug_QMARK_ = goog.DEBUG;
front.dev.core.dev_setup = (function front$dev$core$dev_setup(){
if(front.dev.core.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
front.dev.core.init = (function front$dev$core$init(){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32147__auto__){
return promesa.protocols._bind(promesa.protocols._promise(front.dev.msw.core.init_BANG_()),(function (___32146__auto__){
return promesa.protocols._bind(promesa.protocols._promise(front.dev.core.dev_setup()),(function (___32146__auto____$1){
return promesa.protocols._promise(front.app.core.init());
}));
}));
}));
});
goog.exportSymbol('front.dev.core.init', front.dev.core.init);

//# sourceMappingURL=front.dev.core.js.map
