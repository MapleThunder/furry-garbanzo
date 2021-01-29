# Migration `20210129161535-init`

This migration has been generated at 1/29/2021, 12:15:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Permission" AS ENUM ('ADMIN', 'USER', 'ITEM_CREATE', 'ITEM_UPDATE', 'ITEM_DELETE', 'PERMISSION_UPDATE')

ALTER TABLE "public"."User" ADD COLUMN "password" text   NOT NULL ,
ADD COLUMN "resetToken" text   ,
ADD COLUMN "resetTokenExpiry" Decimal(65,30)   ,
ADD COLUMN "permissions" "Permission"[]  
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210127183600..20210129161535-init
--- datamodel.dml
+++ datamodel.dml
@@ -3,15 +3,28 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
+enum Permission {
+  ADMIN
+  USER
+  ITEM_CREATE
+  ITEM_UPDATE
+  ITEM_DELETE
+  PERMISSION_UPDATE
+}
+
 model User {
-  id    Int    @id @default(autoincrement())
-  name  String
-  email String @unique
+  id               Int          @id @default(autoincrement())
+  name             String
+  email            String       @unique
+  password         String
+  resetToken       String?
+  resetTokenExpiry Float?
+  permissions      Permission[]
 }
 model Item {
   id          Int     @id @default(autoincrement())
```


