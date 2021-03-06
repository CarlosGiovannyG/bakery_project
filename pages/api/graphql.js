import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import typeDefs from "../../graphql/types";
import resolvers from "../../graphql/resolvers/index";
import Apis from "../../graphql/sources";

const cors = Cors();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {},
  dataSources: () => ({
    UsersApi: new Apis.UsersApi(),
  }),
  introspection: true,
  playground: true,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
