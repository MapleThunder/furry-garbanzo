const {
  unusedFragMessage,
} = require("graphql/validation/rules/NoUnusedFragments");

const Query = {
  async items(parent, args, context, info) {
    const items = context.db.query.items();
    return items;
  },
};

module.exports = Query;
