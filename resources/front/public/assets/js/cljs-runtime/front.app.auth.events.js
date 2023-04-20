goog.provide('front.app.auth.events');
front.app.auth.events.set_current_user_cookie_BANG_ = (function front$app$auth$events$set_current_user_cookie_BANG_(p__32819){
var map__32820 = p__32819;
var map__32820__$1 = cljs.core.__destructure_map(map__32820);
var current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32820__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return front.app.auth.db.set_cookie("current-user",new cljs.core.Keyword(null,"expires_in","expires_in",453935095).cljs$core$IFn$_invoke$arity$1(current_user),current_user);
});
front.app.auth.events.remove_current_user_cookie_BANG_ = (function front$app$auth$events$remove_current_user_cookie_BANG_(_){
return front.app.auth.db.remove_cookie("current-user");
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.set_current_user_cookie_BANG_)], null),(function (p__32822,p__32823){
var map__32824 = p__32822;
var map__32824__$1 = cljs.core.__destructure_map(map__32824);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32824__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32825 = p__32823;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350),(function (db,p__32831){
var vec__32832 = p__32831;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32832,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32832,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"current-user","current-user",-868792091),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),(function (p__32836,p__32837){
var map__32838 = p__32836;
var map__32838__$1 = cljs.core.__destructure_map(map__32838);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32838__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32839 = p__32837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32839,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32839,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/auth",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160),(function (p__32843,p__32844){
var map__32845 = p__32843;
var map__32845__$1 = cljs.core.__destructure_map(map__32845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32846 = p__32844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772),(function (db,p__32850){
var vec__32851 = p__32850;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32851,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),(function (p__32854,p__32855){
var map__32856 = p__32854;
var map__32856__$1 = cljs.core.__destructure_map(map__32856);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32856__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32857 = p__32855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32857,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32857,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/send-email",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.remove_current_user_cookie_BANG_)], null),(function (p__32860,_){
var map__32861 = p__32860;
var map__32861__$1 = cljs.core.__destructure_map(map__32861);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),(function (db,error){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),error),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));

//# sourceMappingURL=front.app.auth.events.js.map
