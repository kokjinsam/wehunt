// @flow

import { WebApp } from 'meteor/webapp';
import { apolloServer } from 'apollo-server';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';

type configureGraphQLType = {
  schema: string,
  resolvers: string,
};

export default function ({
  schema,
  resolvers,
}: configureGraphQLType) {
  const graphQLServer = express();
  const GRAPHQL_PORT = 4000;

  graphQLServer.use('/graphql', apolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
  }));

  graphQLServer.listen(GRAPHQL_PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
  ));

  WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
}
