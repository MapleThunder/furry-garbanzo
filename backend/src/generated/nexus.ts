/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  FloatNullableFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: Array<number | null> | null; // [Float]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatNullableFilter'] | null; // NestedFloatNullableFilter
    notIn?: Array<number | null> | null; // [Float]
  }
  IntFieldUpdateOperationsInput: { // input type
    set?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: Array<number | null> | null; // [Int]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: Array<number | null> | null; // [Int]
  }
  ItemCreateInput: { // input type
    description: string; // String!
    image?: string | null; // String
    largeImage?: string | null; // String
    price: number; // Int!
    title: string; // String!
  }
  ItemUpdateInput: { // input type
    description?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    image?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    largeImage?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    price?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    title?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  ItemUpdateManyMutationInput: { // input type
    description?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    image?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    largeImage?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    price?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    title?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  ItemWhereInput: { // input type
    AND?: Array<NexusGenInputs['ItemWhereInput'] | null> | null; // [ItemWhereInput]
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    largeImage?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    NOT?: Array<NexusGenInputs['ItemWhereInput'] | null> | null; // [ItemWhereInput]
    OR?: Array<NexusGenInputs['ItemWhereInput'] | null> | null; // [ItemWhereInput]
    price?: NexusGenInputs['IntFilter'] | null; // IntFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ItemWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedFloatNullableFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: Array<number | null> | null; // [Float]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatNullableFilter'] | null; // NestedFloatNullableFilter
    notIn?: Array<number | null> | null; // [Float]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: Array<number | null> | null; // [Int]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: Array<number | null> | null; // [Int]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  NullableFloatFieldUpdateOperationsInput: { // input type
    set?: number | null; // Float
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: Array<string | null> | null; // [String]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: Array<string | null> | null; // [String]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
    permissions?: NexusGenInputs['UserCreatepermissionsInput'] | null; // UserCreatepermissionsInput
    resetToken?: string | null; // String
    resetTokenExpiry?: number | null; // Float
  }
  UserCreatepermissionsInput: { // input type
    set?: Array<NexusGenEnums['Permission'] | null> | null; // [Permission]
  }
  UserUpdateInput: { // input type
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    permissions?: NexusGenInputs['UserUpdatepermissionsInput'] | null; // UserUpdatepermissionsInput
    resetToken?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    resetTokenExpiry?: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'] | null; // NullableFloatFieldUpdateOperationsInput
  }
  UserUpdateManyMutationInput: { // input type
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    password?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    permissions?: NexusGenInputs['UserUpdatepermissionsInput'] | null; // UserUpdatepermissionsInput
    resetToken?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    resetTokenExpiry?: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'] | null; // NullableFloatFieldUpdateOperationsInput
  }
  UserUpdatepermissionsInput: { // input type
    set?: Array<NexusGenEnums['Permission'] | null> | null; // [Permission]
  }
  UserWhereInput: { // input type
    AND?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    OR?: Array<NexusGenInputs['UserWhereInput'] | null> | null; // [UserWhereInput]
    password?: NexusGenInputs['StringFilter'] | null; // StringFilter
    permissions?: Array<NexusGenEnums['Permission'] | null> | null; // [Permission]
    resetToken?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    resetTokenExpiry?: NexusGenInputs['FloatNullableFilter'] | null; // FloatNullableFilter
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  Permission: "ADMIN" | "ITEM_CREATE" | "ITEM_DELETE" | "ITEM_UPDATE" | "PERMISSION_UPDATE" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  BatchPayload: { // root type
    count: number; // Int!
  }
  Item: { // root type
    description: string; // String!
    id: number; // Int!
    image?: string | null; // String
    largeImage?: string | null; // String
    price: number; // Int!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    permissions: NexusGenEnums['Permission'][]; // [Permission!]!
    resetToken?: string | null; // String
    resetTokenExpiry?: number | null; // Float
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  FloatNullableFilter: NexusGenInputs['FloatNullableFilter'];
  IntFieldUpdateOperationsInput: NexusGenInputs['IntFieldUpdateOperationsInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  ItemCreateInput: NexusGenInputs['ItemCreateInput'];
  ItemUpdateInput: NexusGenInputs['ItemUpdateInput'];
  ItemUpdateManyMutationInput: NexusGenInputs['ItemUpdateManyMutationInput'];
  ItemWhereInput: NexusGenInputs['ItemWhereInput'];
  ItemWhereUniqueInput: NexusGenInputs['ItemWhereUniqueInput'];
  NestedFloatNullableFilter: NexusGenInputs['NestedFloatNullableFilter'];
  NestedIntFilter: NexusGenInputs['NestedIntFilter'];
  NestedStringFilter: NexusGenInputs['NestedStringFilter'];
  NestedStringNullableFilter: NexusGenInputs['NestedStringNullableFilter'];
  NullableFloatFieldUpdateOperationsInput: NexusGenInputs['NullableFloatFieldUpdateOperationsInput'];
  NullableStringFieldUpdateOperationsInput: NexusGenInputs['NullableStringFieldUpdateOperationsInput'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  StringNullableFilter: NexusGenInputs['StringNullableFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreatepermissionsInput: NexusGenInputs['UserCreatepermissionsInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserUpdatepermissionsInput: NexusGenInputs['UserUpdatepermissionsInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  Permission: NexusGenEnums['Permission'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  BatchPayload: { // field return type
    count: number; // Int!
  }
  Item: { // field return type
    description: string; // String!
    id: number; // Int!
    image: string | null; // String
    largeImage: string | null; // String
    price: number; // Int!
    title: string; // String!
  }
  Mutation: { // field return type
    createOneItem: NexusGenRootTypes['Item']; // Item!
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteManyItem: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteOneItem: NexusGenRootTypes['Item'] | null; // Item
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    updateManyItem: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUser: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateOneItem: NexusGenRootTypes['Item'] | null; // Item
    updateOneUser: NexusGenRootTypes['User'] | null; // User
    upsertOneItem: NexusGenRootTypes['Item']; // Item!
    upsertOneUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    item: NexusGenRootTypes['Item'] | null; // Item
    items: NexusGenRootTypes['Item'][]; // [Item!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string; // String!
    permissions: NexusGenEnums['Permission'][]; // [Permission!]!
    resetToken: string | null; // String
    resetTokenExpiry: number | null; // Float
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneItem: { // args
      data: NexusGenInputs['ItemCreateInput']; // ItemCreateInput!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyItem: { // args
      where?: NexusGenInputs['ItemWhereInput'] | null; // ItemWhereInput
    }
    deleteManyUser: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deleteOneItem: { // args
      where: NexusGenInputs['ItemWhereUniqueInput']; // ItemWhereUniqueInput!
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateManyItem: { // args
      data: NexusGenInputs['ItemUpdateManyMutationInput']; // ItemUpdateManyMutationInput!
      where?: NexusGenInputs['ItemWhereInput'] | null; // ItemWhereInput
    }
    updateManyUser: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updateOneItem: { // args
      data: NexusGenInputs['ItemUpdateInput']; // ItemUpdateInput!
      where: NexusGenInputs['ItemWhereUniqueInput']; // ItemWhereUniqueInput!
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertOneItem: { // args
      create: NexusGenInputs['ItemCreateInput']; // ItemCreateInput!
      update: NexusGenInputs['ItemUpdateInput']; // ItemUpdateInput!
      where: NexusGenInputs['ItemWhereUniqueInput']; // ItemWhereUniqueInput!
    }
    upsertOneUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    item: { // args
      where: NexusGenInputs['ItemWhereUniqueInput']; // ItemWhereUniqueInput!
    }
    items: { // args
      after?: NexusGenInputs['ItemWhereUniqueInput'] | null; // ItemWhereUniqueInput
      before?: NexusGenInputs['ItemWhereUniqueInput'] | null; // ItemWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BatchPayload" | "Item" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = "FloatNullableFilter" | "IntFieldUpdateOperationsInput" | "IntFilter" | "ItemCreateInput" | "ItemUpdateInput" | "ItemUpdateManyMutationInput" | "ItemWhereInput" | "ItemWhereUniqueInput" | "NestedFloatNullableFilter" | "NestedIntFilter" | "NestedStringFilter" | "NestedStringNullableFilter" | "NullableFloatFieldUpdateOperationsInput" | "NullableStringFieldUpdateOperationsInput" | "StringFieldUpdateOperationsInput" | "StringFilter" | "StringNullableFilter" | "UserCreateInput" | "UserCreatepermissionsInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserUpdatepermissionsInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Permission";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: { prisma: PrismaClient.PrismaClient };
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}