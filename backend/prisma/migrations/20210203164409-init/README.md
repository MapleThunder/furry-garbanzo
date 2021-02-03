# Migration `20210203164409-init`

This migration has been generated at 2/3/2021, 12:44:09 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Order" DROP COLUMN "createdAt",
ADD COLUMN "createdAt" integer   NOT NULL ,
DROP COLUMN "updatedAt",
ADD COLUMN "updatedAt" integer   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210203163818-init..20210203164409-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 enum Permission {
   ADMIN
@@ -71,7 +71,7 @@
   total     Int
   user      User        @relation(fields: [userId], references: [id])
   charge    String
   userId    Int
-  createdAt DateTime
-  updatedAt DateTime
+  createdAt Int
+  updatedAt Int
 }
```


