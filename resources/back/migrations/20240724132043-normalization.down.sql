ALTER TABLE mock DROP CONSTRAINT fk_mock_customer;

--;;

ALTER TABLE mock ALTER COLUMN user_id SET NOT NULL;

--;;

ALTER TABLE customer DROP CONSTRAINT fk_customer_org;
