ALTER TABLE customer
ADD CONSTRAINT fk_customer_org
FOREIGN KEY (org_id)
REFERENCES org(id);

--;;

ALTER TABLE mock
ALTER COLUMN user_id
DROP NOT NULL;

--;;

ALTER TABLE mock
ADD CONSTRAINT fk_mock_customer
FOREIGN KEY (user_id)
REFERENCES customer(uuid);
