CREATE TABLE IF NOT EXISTS yaml_history (
  id uuid NOT NULL PRIMARY KEY,
  mock_id uuid NOT NULL,
  user_id uuid NOT NULL,  
  content text NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,


  CONSTRAINT fk_org_user_user
             FOREIGN KEY(user_id)
             REFERENCES customer(uuid)
             ON DELETE CASCADE,

  CONSTRAINT fk_mock_id
    FOREIGN KEY (mock_id)
    REFERENCES mock(id)
    ON DELETE CASCADE
);

