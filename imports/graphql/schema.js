import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import tasks from './tasks'
import accounts from './accounts'
import messages from './messages'
import { mergeModules, } from 'graphql-schema-modules';
const { typeDefs, resolvers } = mergeModules([tasks,  accounts, messages]);

export default  makeExecutableSchema({
  typeDefs,
  resolvers,
});