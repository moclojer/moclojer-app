(ns front.app.auth.subs
  (:require [refx.alpha :as refx]))

(refx/reg-sub
 :app.auth/current-user
 (fn [db]
   (:current-user db)))

(refx/reg-sub
 :app.auth/email-sent
 (fn [db]
   (:login-email-sent db)))

(refx/reg-sub
 :app.auth/login-loading
 (fn [db]
   (:login-loading? db)))

(refx/reg-sub
 :app.auth/login-error
 (fn [db]
   (:login-error db)))

(refx/reg-sub
 :app.auth/username-sent
 (fn [db]
   (:username-sent db)))

(refx/reg-sub
 :app.auth/is-username-available?
 (fn [db]
   (:username-available? db)))

(refx/reg-sub
 :app.auth/username-to-save
 (fn [db]
   (:username-to-save db)))

(refx/reg-sub
 :app.auth/user-exists?
 (fn [db]
   (:user-exists? db)))
