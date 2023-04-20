goog.provide('dev.refresh');
helix.experimental.refresh.inject_hook_BANG_();
dev.refresh.refresh = (function dev$refresh$refresh(){
return helix.experimental.refresh.refresh_BANG_();
});
dev.refresh.clear_cache_and_render_BANG_ = (function dev$refresh$clear_cache_and_render_BANG_(){
refx.alpha.clear_subscription_cache_BANG_();

return front.app.core.render();
});

//# sourceMappingURL=dev.refresh.js.map
