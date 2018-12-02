const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./db/Schema')


const app = express();
const port = 3000;

// * midlleware

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true

}))

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})