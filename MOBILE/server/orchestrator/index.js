if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { ApolloServer } = require('apollo-server');
const { typeDefsApp, resolversApp } = require('./schemas/app')
const { typeDefUser, resolversUser } = require('./schemas/user')

const server = new ApolloServer({
  typeDefs: [typeDefsApp, typeDefUser],
  resolvers: [resolversApp, resolversUser],
  introspection: true
})

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`[OMOCAREER - SERVER] LISTEN TO ${url}`)
})