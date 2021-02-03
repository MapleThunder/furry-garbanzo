import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'No custom scalars are used in your Prisma Schema.'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Item: Prisma.Item
  CartItem: Prisma.CartItem
  OrderItem: Prisma.OrderItem
  Order: Prisma.Order
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'password' | 'resetToken' | 'resetTokenExpiry' | 'permissions' | 'Item' | 'Cart' | 'OrderItem' | 'Order'
      ordering: 'id' | 'name' | 'email' | 'password' | 'resetToken' | 'resetTokenExpiry' | 'permissions'
    }
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'user' | 'userId' | 'Cart'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'userId'
    }
    cartItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'quantity' | 'Item' | 'User' | 'itemId' | 'userId'
      ordering: 'id' | 'quantity' | 'itemId' | 'userId'
    }
    orderItems: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'user' | 'userId' | 'Order' | 'orderId'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'userId' | 'orderId'
    }
    orders: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'total' | 'user' | 'charge' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'total' | 'charge' | 'userId' | 'createdAt' | 'updatedAt'
    }
  },
  User: {
    Item: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'user' | 'userId' | 'Cart'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'userId'
    }
    Cart: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'quantity' | 'Item' | 'User' | 'itemId' | 'userId'
      ordering: 'id' | 'quantity' | 'itemId' | 'userId'
    }
    OrderItem: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'user' | 'userId' | 'Order' | 'orderId'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'userId' | 'orderId'
    }
    Order: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'items' | 'total' | 'user' | 'charge' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'total' | 'charge' | 'userId' | 'createdAt' | 'updatedAt'
    }
  }
  Item: {
    Cart: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'quantity' | 'Item' | 'User' | 'itemId' | 'userId'
      ordering: 'id' | 'quantity' | 'itemId' | 'userId'
    }
  }
  CartItem: {

  }
  OrderItem: {

  }
  Order: {
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'user' | 'userId' | 'Order' | 'orderId'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price' | 'quantity' | 'userId' | 'orderId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    item: 'Item'
    items: 'Item'
    cartItem: 'CartItem'
    cartItems: 'CartItem'
    orderItem: 'OrderItem'
    orderItems: 'OrderItem'
    order: 'Order'
    orders: 'Order'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneItem: 'Item'
    updateOneItem: 'Item'
    updateManyItem: 'BatchPayload'
    deleteOneItem: 'Item'
    deleteManyItem: 'BatchPayload'
    upsertOneItem: 'Item'
    createOneCartItem: 'CartItem'
    updateOneCartItem: 'CartItem'
    updateManyCartItem: 'BatchPayload'
    deleteOneCartItem: 'CartItem'
    deleteManyCartItem: 'BatchPayload'
    upsertOneCartItem: 'CartItem'
    createOneOrderItem: 'OrderItem'
    updateOneOrderItem: 'OrderItem'
    updateManyOrderItem: 'BatchPayload'
    deleteOneOrderItem: 'OrderItem'
    deleteManyOrderItem: 'BatchPayload'
    upsertOneOrderItem: 'OrderItem'
    createOneOrder: 'Order'
    updateOneOrder: 'Order'
    updateManyOrder: 'BatchPayload'
    deleteOneOrder: 'Order'
    deleteManyOrder: 'BatchPayload'
    upsertOneOrder: 'Order'
  },
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    password: 'String'
    resetToken: 'String'
    resetTokenExpiry: 'Float'
    permissions: 'Permission'
    Item: 'Item'
    Cart: 'CartItem'
    OrderItem: 'OrderItem'
    Order: 'Order'
  }
  Item: {
    id: 'Int'
    title: 'String'
    description: 'String'
    image: 'String'
    largeImage: 'String'
    price: 'Int'
    user: 'User'
    userId: 'Int'
    Cart: 'CartItem'
  }
  CartItem: {
    id: 'Int'
    quantity: 'Int'
    Item: 'Item'
    User: 'User'
    itemId: 'Int'
    userId: 'Int'
  }
  OrderItem: {
    id: 'Int'
    title: 'String'
    description: 'String'
    image: 'String'
    largeImage: 'String'
    price: 'Int'
    quantity: 'Int'
    user: 'User'
    userId: 'Int'
    Order: 'Order'
    orderId: 'Int'
  }
  Order: {
    id: 'Int'
    items: 'OrderItem'
    total: 'Int'
    user: 'User'
    charge: 'String'
    userId: 'Int'
    createdAt: 'String'
    updatedAt: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Item: Typegen.NexusPrismaFields<'Item'>
  CartItem: Typegen.NexusPrismaFields<'CartItem'>
  OrderItem: Typegen.NexusPrismaFields<'OrderItem'>
  Order: Typegen.NexusPrismaFields<'Order'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  