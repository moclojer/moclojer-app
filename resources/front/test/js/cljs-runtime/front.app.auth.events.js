goog.provide('front.app.auth.events');
front.app.auth.events.set_current_user_cookie_BANG_ = (function front$app$auth$events$set_current_user_cookie_BANG_(p__62193){
var map__62194 = p__62193;
var map__62194__$1 = cljs.core.__destructure_map(map__62194);
var current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62194__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return front.app.auth.db.set_cookie("current-user",new cljs.core.Keyword(null,"expires_in","expires_in",453935095).cljs$core$IFn$_invoke$arity$1(current_user),current_user);
});
front.app.auth.events.remove_current_user_cookie_BANG_ = (function front$app$auth$events$remove_current_user_cookie_BANG_(_){
return front.app.auth.db.remove_cookie("current-user");
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.set_current_user_cookie_BANG_)], null),(function (p__62207,p__62208){
var map__62210 = p__62207;
var map__62210__$1 = cljs.core.__destructure_map(map__62210);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62210__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62211 = p__62208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62211,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62211,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350),(function (db,p__62215){
var vec__62216 = p__62215;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62216,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62216,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"current-user","current-user",-868792091),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),(function (p__62220,p__62221){
var map__62222 = p__62220;
var map__62222__$1 = cljs.core.__destructure_map(map__62222);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62222__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62223 = p__62221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/auth",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160),(function (p__62230,p__62231){
var map__62232 = p__62230;
var map__62232__$1 = cljs.core.__destructure_map(map__62232);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62232__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62233 = p__62231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62233,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772),(function (db,p__62238){
var vec__62239 = p__62238;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62239,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62239,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),(function (p__62244,p__62245){
var map__62248 = p__62244;
var map__62248__$1 = cljs.core.__destructure_map(map__62248);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62248__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__62249 = p__62245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62249,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62249,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/send-email",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.remove_current_user_cookie_BANG_)], null),(function (p__62253,_){
var map__62254 = p__62253;
var map__62254__$1 = cljs.core.__destructure_map(map__62254);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62254__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),(function (db,error){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),error),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));

//# sourceMappingURL=front.app.auth.events.js.map
