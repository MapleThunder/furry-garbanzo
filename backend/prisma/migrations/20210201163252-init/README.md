# Migration `20210201163252-init`

This migration has been generated at 2/1/2021, 12:32:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Item" ADD COLUMN "userId" integer   NOT NULL 

ALTER TABLE "public"."Item" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210129161535-init..20210201163252-init
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
@@ -23,8 +23,9 @@
   password         String
   resetToken       String?
   resetTokenExpiry Float?
   permissions      Permission[]
+  Item             Item[]
 }
 model Item {
   id          Int     @id @default(autoincrement())
@@ -32,8 +33,7 @@
   description String
   image       String?
   largeImage  String?
   price       Int
-  // createdAt   DateTime
-  // updatedAt   DateTime
-  // user User
+  user        User    @relation(fields: [userId], references: [id])
+  userId      Int
 }
```


