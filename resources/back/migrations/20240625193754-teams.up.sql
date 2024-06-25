CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--;;

CREATE TABLE IF NOT EXISTS team (
  id uuid NOT NULL PRIMARY KEY,
  subdomain VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

--;;

CREATE TABLE IF NOT EXISTS team_customer (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  team_id uuid NOT NULL,
  customer_id uuid NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,

  CONSTRAINT fk_team_customer_team_id
             FOREIGN KEY(team_id)
             REFERENCES team(id),

  CONSTRAINT fk_team_customer_customer_id
             FOREIGN KEY(customer_id)
             REFERENCES customer(uuid)
);

--;;

ALTER TABLE mock ADD COLUMN team_id uuid NULL;

--;;

ALTER TABLE mock ADD CONSTRAINT mock_team_id
                 FOREIGN KEY(team_id)
                 REFERENCES team(id);

--;;

ALTER TABLE customer DROP COLUMN org_id;
