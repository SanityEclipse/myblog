CRUD BLOG REVISITED


PSQL join:

SELECT * FROM "newEntries"
INNER JOIN "newComments" ON "newEntries"."id" = "newComments"."newEntries_id";
