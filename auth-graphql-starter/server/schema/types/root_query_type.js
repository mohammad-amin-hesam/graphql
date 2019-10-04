const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: GraphQLString
});

module.exports = RootQueryType;
// that's not really good man :)
