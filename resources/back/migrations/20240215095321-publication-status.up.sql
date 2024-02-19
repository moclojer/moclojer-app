CREATE TYPE publication_status AS ENUM('offline', 'publishing', 'published');
--;;
ALTER TABLE mock ADD COLUMN publication publication_status NOT NULL;
