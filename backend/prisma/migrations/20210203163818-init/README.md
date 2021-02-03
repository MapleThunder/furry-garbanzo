# Migration `20210203163818-init`

This migration has been generated at 2/3/2021, 12:38:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Order" ADD COLUMN "createdAt" timestamp(3)   NOT NULL ,
ADD COLUMN "updatedAt" timestamp(3)   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210202203831-init..20210203163818-init
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
@@ -65,11 +65,13 @@
   orderId     Int?
 }
 model Order {
-  id     Int         @id @default(autoincrement())
-  items  OrderItem[]
-  total  Int
-  user   User        @relation(fields: [userId], references: [id])
-  charge String
-  userId Int
+  id        Int         @id @default(autoincrement())
+  items     OrderItem[]
+  total     Int
+  user      User        @relation(fields: [userId], references: [id])
+  charge    String
+  userId    Int
+  createdAt DateTime
+  updatedAt DateTime
 }
```


