import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import express from "express";
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
export async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    app.get('/', (req, res) => res.send('Welcome to this backend service'));
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    app.use('/graphql', cors(), express.json(), expressMiddleware(server));
    await new Promise(resolve => httpServer.listen({
        port: process.env.PORT
    }, resolve));
    console.log(`Server ready at port ${process.env.PORT}`);
}
