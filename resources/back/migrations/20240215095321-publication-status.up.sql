CREATE TYPE publication_status;

ALTER TABLE mock ADD COLUMN publication publication_status NOT NULL;
