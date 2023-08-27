CREATE TABLE IF NOT EXISTS mock (
  id uuid NOT NULL PRIMARY KEY,
  user_id uuid NULL,
  subdomain VARCHAR(255) NOT NULL,
  content VARCHAR(255) NULL,
  enabled BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
