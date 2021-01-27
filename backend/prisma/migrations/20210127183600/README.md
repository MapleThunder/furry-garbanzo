# Migration `20210127183600`

This migration has been generated at 1/27/2021, 2:36:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Item" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt"

DROP TABLE "public"."_prisma_migrations"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210127183600
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model User {
+  id    Int    @id @default(autoincrement())
+  name  String
+  email String @unique
+}
+
+model Item {
+  id          Int     @id @default(autoincrement())
+  title       String
+  description String
+  image       String?
+  largeImage  String?
+  price       Int
+  // createdAt   DateTime
+  // updatedAt   DateTime
+  // user User
+}
```


