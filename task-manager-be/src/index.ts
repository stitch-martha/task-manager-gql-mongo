import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { typeDefs } from './graphql/typeDefs';
import  resolvers from './graphql/resolvers';

const uri = process.env.MONGO_DB_URI

const main = async () => {
  await mongoose.connect(uri, {dbName: process.env.DB_NAME})
};

main()
  .then(() => console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

async function server() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

server().catch((err) => console.log(err))
