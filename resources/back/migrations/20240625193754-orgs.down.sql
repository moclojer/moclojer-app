ALTER TABLE mock ADD COLUMN user_id;

--;;

UPDATE mock m_ SET m_.user_id = m_.org_id;

--;;

ALTER TABLE mock DROP COLUMN org_id;
