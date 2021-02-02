# Migration `20210202184627-init`

This migration has been generated at 2/2/2021, 2:46:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."CartItem" ALTER COLUMN "itemId" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210201202640-init..20210202184627-init
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
@@ -40,11 +40,11 @@
   Cart        CartItem[]
 }
 model CartItem {
-  id       Int  @id @default(autoincrement())
-  quantity Int  @default(value: 1)
-  Item     Item @relation(fields: [itemId], references: [id])
-  User     User @relation(fields: [userId], references: [id])
-  itemId   Int
+  id       Int   @id @default(autoincrement())
+  quantity Int   @default(value: 1)
+  Item     Item? @relation(fields: [itemId], references: [id])
+  User     User  @relation(fields: [userId], references: [id])
+  itemId   Int?
   userId   Int
 }
```


