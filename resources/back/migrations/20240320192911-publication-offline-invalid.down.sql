UPDATE mock SET publication = 'offline' WHERE publication = 'offline-invalid';
--;;
ALTER TYPE publication_status DROP VALUE 'offline-invalid';
