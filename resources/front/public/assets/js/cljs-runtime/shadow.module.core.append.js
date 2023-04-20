
shadow.cljs.devtools.client.env.module_loaded('core');

try { dev.core.init(); } catch (e) { console.error("An error occurred when calling (dev.core/init)"); throw(e); }