goog.provide('front.dev.refresh');
helix.experimental.refresh.inject_hook_BANG_();
front.dev.refresh.refresh = (function front$dev$refresh$refresh(){
return helix.experimental.refresh.refresh_BANG_();
});
front.dev.refresh.clear_cache_and_render_BANG_ = (function front$dev$refresh$clear_cache_and_render_BANG_(){
refx.alpha.clear_subscription_cache_BANG_();

return front.app.core.render();
});

//# sourceMappingURL=front.dev.refresh.js.map
