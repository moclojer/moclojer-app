goog.provide('app.auth.events');
app.auth.events.set_current_user_cookie_BANG_ = (function app$auth$events$set_current_user_cookie_BANG_(p__49945){
var map__49946 = p__49945;
var map__49946__$1 = cljs.core.__destructure_map(map__49946);
var current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return app.auth.db.set_cookie("current-user",new cljs.core.Keyword(null,"expires_in","expires_in",453935095).cljs$core$IFn$_invoke$arity$1(current_user),current_user);
});
app.auth.events.remove_current_user_cookie_BANG_ = (function app$auth$events$remove_current_user_cookie_BANG_(_){
return app.auth.db.remove_cookie("current-user");
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(app.auth.events.set_current_user_cookie_BANG_)], null),(function (p__49949,p__49950){
var map__49951 = p__49949;
var map__49951__$1 = cljs.core.__destructure_map(map__49951);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49951__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49952 = p__49950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49952,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49952,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350),(function (db,p__49955){
var vec__49956 = p__49955;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"current-user","current-user",-868792091),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),(function (p__49959,p__49960){
var map__49961 = p__49959;
var map__49961__$1 = cljs.core.__destructure_map(map__49961);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49962 = p__49960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49962,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49962,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/auth",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160),(function (p__49965,p__49966){
var map__49967 = p__49965;
var map__49967__$1 = cljs.core.__destructure_map(map__49967);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49967__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49968 = p__49966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49968,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49968,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772),(function (db,p__49971){
var vec__49972 = p__49971;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49972,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),(function (p__49975,p__49976){
var map__49977 = p__49975;
var map__49977__$1 = cljs.core.__destructure_map(map__49977);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49977__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49978 = p__49976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49978,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/send-email",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(app.auth.events.remove_current_user_cookie_BANG_)], null),(function (p__49981,_){
var map__49982 = p__49981;
var map__49982__$1 = cljs.core.__destructure_map(map__49982);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49982__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),(function (db,error){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),error),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));

//# sourceMappingURL=app.auth.events.js.map
