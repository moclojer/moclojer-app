CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--;;

CREATE TABLE IF NOT EXISTS customer (
  uuid uuid UNIQUE NOT NULL,
  external_uuid uuid UNIQUE NOT NULL PRIMARY KEY,
  username varchar(255) NULL,
  email varchar(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

--;;

INSERT INTO customer (uuid, external_uuid, username, email)
VALUES ('5106853a-7b46-4f8e-a047-a6102a20832a','f108cd7b-8fe3-4290-a11e-608e62c87948', 'rod', 'rod@cljazz.co');
