goog.provide('front.app.auth.events');
front.app.auth.events.set_current_user_cookie_BANG_ = (function front$app$auth$events$set_current_user_cookie_BANG_(p__53157){
var map__53158 = p__53157;
var map__53158__$1 = cljs.core.__destructure_map(map__53158);
var current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53158__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return front.app.auth.db.set_cookie("current-user",new cljs.core.Keyword(null,"expires_in","expires_in",453935095).cljs$core$IFn$_invoke$arity$1(current_user),current_user);
});
front.app.auth.events.remove_current_user_cookie_BANG_ = (function front$app$auth$events$remove_current_user_cookie_BANG_(_){
return front.app.auth.db.remove_cookie("current-user");
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.set_current_user_cookie_BANG_)], null),(function (p__53160,p__53161){
var map__53162 = p__53160;
var map__53162__$1 = cljs.core.__destructure_map(map__53162);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53162__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53163 = p__53161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53163,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53163,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350),(function (db,p__53167){
var vec__53168 = p__53167;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53168,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53168,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"current-user","current-user",-868792091),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),(function (p__53171,p__53172){
var map__53173 = p__53171;
var map__53173__$1 = cljs.core.__destructure_map(map__53173);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53173__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53174 = p__53172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53174,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53174,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/auth",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160),(function (p__53177,p__53178){
var map__53179 = p__53177;
var map__53179__$1 = cljs.core.__destructure_map(map__53179);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53179__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53180 = p__53178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53180,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53180,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772),(function (db,p__53184){
var vec__53185 = p__53184;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53185,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),(function (p__53188,p__53189){
var map__53190 = p__53188;
var map__53190__$1 = cljs.core.__destructure_map(map__53190);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53190__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__53191 = p__53189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53191,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53191,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/send-email",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(front.app.auth.events.remove_current_user_cookie_BANG_)], null),(function (p__53194,_){
var map__53195 = p__53194;
var map__53195__$1 = cljs.core.__destructure_map(map__53195);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53195__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),(function (db,error){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),error),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));

//# sourceMappingURL=front.app.auth.events.js.map
