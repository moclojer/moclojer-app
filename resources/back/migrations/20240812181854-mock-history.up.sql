CREATE TABLE IF NOT EXISTS mock_history (
  id uuid NOT NULL PRIMARY KEY,
  mock_id uuid NOT NULL,
  content text NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,

  CONSTRAINT fk_mock_id
    FOREIGN KEY (mock_id)
    REFERENCES mock(id)
    ON DELETE CASCADE
);

--;;

CREATE OR REPLACE FUNCTION log_mock_archive()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO mock_history (id, mock_id, content, created_at)
  VALUES (uuid_generate_v4(), NEW.id, NEW.content, CURRENT_TIMESTAMP);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--;;

CREATE TRIGGER trigger_mock_archive
AFTER INSERT OR UPDATE ON mock
FOR EACH ROW
EXECUTE FUNCTION log_mock_archive();
