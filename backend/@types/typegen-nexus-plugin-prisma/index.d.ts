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
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email'
      ordering: 'id' | 'name' | 'email'
    }
    items: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price'
      ordering: 'id' | 'title' | 'description' | 'image' | 'largeImage' | 'price'
    }
  },
  User: {

  }
  Item: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    item: 'Item'
    items: 'Item'
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
  },
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
  }
  Item: {
    id: 'Int'
    title: 'String'
    description: 'String'
    image: 'String'
    largeImage: 'String'
    price: 'Int'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Item: Typegen.NexusPrismaFields<'Item'>
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
  