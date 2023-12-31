import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import { connectDB } from './db/db.js';
import { startApolloServer } from './app.js';

connectDB()
startApolloServer(typeDefs, resolvers)