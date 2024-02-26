CREATE TYPE publication_status AS ENUM('offline', 'publishing', 'published');
--;;
ALTER TABLE mock ADD COLUMN publication publication_status DEFAULT 'offline';
--;;
UPDATE mock SET publication = 'published' WHERE publication IS NULL;
--;;
ALTER TABLE mock ALTER COLUMN publication SET NOT NULL;
