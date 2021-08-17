const { ApolloServer, gql } = require("apollo-server");
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);

  apolloServer.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
    `);
  });
}
