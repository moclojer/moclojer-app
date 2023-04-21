goog.provide('dev.session_storage');
dev.session_storage.set_item_BANG_ = (function dev$session_storage$set_item_BANG_(key,val){
return window.sessionStorage.setItem(key,val);
});
dev.session_storage.get_item = (function dev$session_storage$get_item(key){
return window.sessionStorage.getItem(key);
});
dev.session_storage.remove_item_BANG_ = (function dev$session_storage$remove_item_BANG_(key){
return window.sessionStorage.removeItem(key);
});

//# sourceMappingURL=dev.session_storage.js.map
