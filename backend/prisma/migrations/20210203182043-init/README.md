# Migration `20210203182043-init`

This migration has been generated at 2/3/2021, 2:20:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Order" ALTER COLUMN "createdAt" SET DATA TYPE text ,
ALTER COLUMN "updatedAt" SET DATA TYPE text 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210203164409-init..20210203182043-init
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
-  createdAt Int
-  updatedAt Int
+  createdAt String
+  updatedAt String
 }
```


