
shadow.cljs.devtools.client.env.module_loaded('core');

try { front.dev.core.init(); } catch (e) { console.error("An error occurred when calling (front.dev.core/init)"); throw(e); }