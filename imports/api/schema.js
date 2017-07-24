import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import {typeDefs,resolvers} from './tasks'
export default  makeExecutableSchema({
  typeDefs,
  resolvers,
});