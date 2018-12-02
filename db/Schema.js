const {
   GraphQLString,
   GraphQLSchema,
   GraphQLObjectType,
   GraphQLInt
} = require('graphql')


const CompanhiaType = new GraphQLObjectType({
    name: 'Compranhia',
    fields: {
        id: {
            type: GraphQLInt
        },
        nome: {
            type: GraphQLString 
        }
    }
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            companhia: {
                type: CompanhiaType,
                resolve() {
                    return {
                        id: 123,
                        nome: 'Aplle',
                    }
                }
            }
        }
    })
})