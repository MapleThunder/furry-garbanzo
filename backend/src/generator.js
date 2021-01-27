const {
  makeSchema,
  queryType,
  mutationType,
  objectType,
} = require("@nexus/schema");
const { nexusSchemaPrisma } = require("nexus-plugin-prisma/schema");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// https://github.com/graphql-nexus/nexus-schema-plugin-prisma/issues/339
const allTheThings = (obj) => {
  for (const method in obj) {
    if (typeof obj[method] === "function") {
      obj[method]();
    }
  }
};

// extract all models from prisma dmmf
const parentTypes = () => {
  const models = prisma._dmmf.mappings.map((e) => e.model);
  return models.map((name) =>
    objectType({
      name,
      definition(t) {
        allTheThings(t.model);
      },
    })
  );
};

makeSchema({
  // Where to export the data
  outputs: {
    schema: __dirname + "/generated/prisma.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  // all the types to expose
  types: [
    queryType({
      definition(t) {
        allTheThings(t.crud);
      },
    }),
    mutationType({
      definition(t) {
        allTheThings(t.crud);
      },
    }),
    ...parentTypes(),
  ],
  // just few stuff to make this workaround work
  typegenAutoConfig: {
    contextType: "{ prisma: PrismaClient.PrismaClient }",
    sources: [{ source: "@prisma/client", alias: "PrismaClient" }],
  },
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
      shouldGenerateArtifacts: true,
    }),
  ],
});
