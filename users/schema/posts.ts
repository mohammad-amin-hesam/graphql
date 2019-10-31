const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql;

const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        view_count: { type: GraphQLInt }
    })
});

export default new GraphQLSchema({
    query: PostType,
});
