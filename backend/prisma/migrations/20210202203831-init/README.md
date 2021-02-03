# Migration `20210202203831-init`

This migration has been generated at 2/2/2021, 4:38:31 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."OrderItem" (
"id" SERIAL,
"title" text   NOT NULL ,
"description" text   NOT NULL ,
"image" text   ,
"largeImage" text   ,
"price" integer   NOT NULL ,
"quantity" integer   NOT NULL DEFAULT 1,
"userId" integer   NOT NULL ,
"orderId" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Order" (
"id" SERIAL,
"total" integer   NOT NULL ,
"charge" text   NOT NULL ,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."OrderItem" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."OrderItem" ADD FOREIGN KEY ("orderId")REFERENCES "public"."Order"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Order" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210202184627-init..20210202203831-init
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
@@ -25,8 +25,10 @@
   resetTokenExpiry Float?
   permissions      Permission[]
   Item             Item[]
   Cart             CartItem[]
+  OrderItem        OrderItem[]
+  Order            Order[]
 }
 model Item {
   id          Int        @id @default(autoincrement())
@@ -47,4 +49,27 @@
   User     User  @relation(fields: [userId], references: [id])
   itemId   Int?
   userId   Int
 }
+
+model OrderItem {
+  id          Int     @id @default(autoincrement())
+  title       String
+  description String
+  image       String?
+  largeImage  String?
+  price       Int
+  quantity    Int     @default(value: 1)
+  user        User    @relation(fields: [userId], references: [id])
+  userId      Int
+  Order       Order?  @relation(fields: [orderId], references: [id])
+  orderId     Int?
+}
+
+model Order {
+  id     Int         @id @default(autoincrement())
+  items  OrderItem[]
+  total  Int
+  user   User        @relation(fields: [userId], references: [id])
+  charge String
+  userId Int
+}
```


