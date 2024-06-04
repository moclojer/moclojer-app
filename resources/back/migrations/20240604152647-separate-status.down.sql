ALTER TABLE mock ADD COLUMN publication publication_status DEFAULT 'offline';
--;;
UPDATE mock mm SET publication = mm.dns_status;
--;;
ALTER TABLE mock ALTER COLUMN unification_status SET NOT NULL;
--;;
ALTER TABLE mock DROP COLUMN dns_status;
--;;
ALTER TABLE mock DROP COLUMN unification_status;
