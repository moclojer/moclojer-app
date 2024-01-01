CREATE OR REPLACE FUNCTION check_uq_wildcard()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
     SELECT 1
     FROM mock
     WHERE user_id = NEW.user_id
       AND subdomain = NEW.subdomain
       AND wildcard = NEW.wildcard
  ) THEN
      RAISE EXCEPTION 'Duplicate wildcard for this user subdomain';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
--;
CREATE TRIGGER enforce_uq_wildcard
BEFORE INSERT ON mock
FOR EACH ROW EXECUTE FUNCTION check_uq_wildcard();
--;
CREATE UNIQUE INDEX uq_wildcard_per_user_subdomain
ON mock (user_id, subdomain, wildcard);
