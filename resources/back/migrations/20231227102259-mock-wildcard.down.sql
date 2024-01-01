ALTER TABLE mock DROP CONSTRAINT IF EXISTS uq_wildcard_per_user_subdomain;
--;
DROP TRIGGER IF EXISTS enforce_uq_wildcard ON mock;
--;
DROP FUNCTION IF EXISTS check_unique_wildcard();
--;
DROP INDEX IF EXISTS uq_wildcard_per_user_subdomain;
