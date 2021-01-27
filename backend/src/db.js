// This file connects to the Prisma DB and give us
// the ability to query it with JS.
const { PrismaClient } = require("@prisma/client");
// const { use } = require("nexus");
// const { prisma } = require("nexus-plugin-prisma");

// use(
//   prisma({
//     client: { options: { log: ["query"] } },
//   })
// );
const db = new PrismaClient();

module.exports = db;
