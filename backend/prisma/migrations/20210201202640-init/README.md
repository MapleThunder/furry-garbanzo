# Migration `20210201202640-init`

This migration has been generated at 2/1/2021, 4:26:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."CartItem" (
"id" SERIAL,
"quantity" integer   NOT NULL DEFAULT 1,
"itemId" integer   NOT NULL ,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."CartItem" ADD FOREIGN KEY ("itemId")REFERENCES "public"."Item"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."CartItem" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210201163252-init..20210201202640-init
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
@@ -24,16 +24,27 @@
   resetToken       String?
   resetTokenExpiry Float?
   permissions      Permission[]
   Item             Item[]
+  Cart             CartItem[]
 }
 model Item {
-  id          Int     @id @default(autoincrement())
+  id          Int        @id @default(autoincrement())
   title       String
   description String
   image       String?
   largeImage  String?
   price       Int
-  user        User    @relation(fields: [userId], references: [id])
+  user        User       @relation(fields: [userId], references: [id])
   userId      Int
+  Cart        CartItem[]
 }
+
+model CartItem {
+  id       Int  @id @default(autoincrement())
+  quantity Int  @default(value: 1)
+  Item     Item @relation(fields: [itemId], references: [id])
+  User     User @relation(fields: [userId], references: [id])
+  itemId   Int
+  userId   Int
+}
```


