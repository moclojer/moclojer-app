goog.provide('app.auth.events');
app.auth.events.set_current_user_cookie_BANG_ = (function app$auth$events$set_current_user_cookie_BANG_(p__21626){
var map__21628 = p__21626;
var map__21628__$1 = cljs.core.__destructure_map(map__21628);
var current_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21628__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return app.auth.db.set_cookie("current-user",new cljs.core.Keyword(null,"expires_in","expires_in",453935095).cljs$core$IFn$_invoke$arity$1(current_user),current_user);
});
app.auth.events.remove_current_user_cookie_BANG_ = (function app$auth$events$remove_current_user_cookie_BANG_(_){
return app.auth.db.remove_cookie("current-user");
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(app.auth.events.set_current_user_cookie_BANG_)], null),(function (p__21670,p__21671){
var map__21672 = p__21670;
var map__21672__$1 = cljs.core.__destructure_map(map__21672);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21673 = p__21671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21673,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350),(function (db,p__21696){
var vec__21697 = p__21696;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21697,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21697,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"current-user","current-user",-868792091),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","login","app.auth/login",1145290492),(function (p__21707,p__21708){
var map__21709 = p__21707;
var map__21709__$1 = cljs.core.__destructure_map(map__21709);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21710 = p__21708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/auth",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-done","app.auth/login-done",-398596315)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","login-error","app.auth/login-error",2008740350)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160),(function (p__21720,p__21721){
var map__21723 = p__21720;
var map__21723__$1 = cljs.core.__destructure_map(map__21723);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21723__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21724 = p__21721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21724,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21724,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success","success",1890645906),response], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772),(function (db,p__21741){
var vec__21742 = p__21741;
var key_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(0),null);
var val_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(1),null);
console.error(key_error,val_error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_error,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(val_error)], null)),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email","app.auth/send-email",-459398038),(function (p__21755,p__21756){
var map__21758 = p__21755;
var map__21758__$1 = cljs.core.__destructure_map(map__21758);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21758__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21759 = p__21756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21759,(0),null);
var login = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/login/send-email",new cljs.core.Keyword(null,"body","body",-2049205669),login,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-done","app.auth/send-email-done",979933160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.auth","send-email-error","app.auth/send-email-error",-1367940772)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),true], 0))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","send-email-again","app.auth/send-email-again",-25575890),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app.auth","logout","app.auth/logout",-1850847146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.after(app.auth.events.remove_current_user_cookie_BANG_)], null),(function (p__21764,_){
var map__21765 = p__21764;
var map__21765__$1 = cljs.core.__destructure_map(map__21765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21765__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),null)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.auth","error","app.auth/error",-125470583),(function (db,error){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),null),new cljs.core.Keyword(null,"login-loading?","login-loading?",-1491014397),false),new cljs.core.Keyword(null,"login-error","login-error",-1290265439),error),new cljs.core.Keyword(null,"login-email-sent","login-email-sent",1198441300),null);
}));

//# sourceMappingURL=app.auth.events.js.map
