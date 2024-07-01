CREATE TABLE IF NOT EXISTS org (
  id uuid NOT NULL PRIMARY KEY,
  -- hate to see it, but we can't use the field `name`
  slug VARCHAR(255) UNIQUE NOT NULL,
  orgname VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

--;;

CREATE TABLE IF NOT EXISTS org_user (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  org_id uuid NOT NULL,
  user_id uuid NOT NULL,

  CONSTRAINT fk_org_user_org
             FOREIGN KEY(org_id)
             REFERENCES org(id)
             ON DELETE CASCADE,

  CONSTRAINT fk_org_user_user
             FOREIGN KEY(user_id)
             REFERENCES customer(uuid)
             ON DELETE CASCADE
);

--;;

ALTER TABLE mock ADD COLUMN org_id uuid NULL;

--;;

UPDATE mock SET org_id = user_id;

--;;

ALTER TABLE mock ADD CONSTRAINT fk_mock_org_id
                 FOREIGN KEY(org_id)
                 REFERENCES org(id)
                 ON DELETE SET NULL;
