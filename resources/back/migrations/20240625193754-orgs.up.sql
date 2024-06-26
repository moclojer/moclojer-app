CREATE TABLE IF NOT EXISTS org (
  id uuid NOT NULL PRIMARY KEY,
  subdomain VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

--;;

ALTER TABLE mock ADD COLUMN org_id uuid NULL;

--;;
̓
UPDATE mock SET org_id = user_id;

--;;

ALTER TABLE mock ADD CONSTRAINT fk_mock_org_id
                 FOREIGN KEY(org_id)
                 REFERENCES org(id);
