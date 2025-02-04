ALTER TABLE mock ADD COLUMN git_repo VARCHAR(255) CHECK (git_repo ~ '^https?://github\.com/.*\.git$');

--;;

ALTER TABLE mock ADD COLUMN sha CHAR(40) CHECK (sha ~ '^[0-9a-f]{40}$');

--;;
