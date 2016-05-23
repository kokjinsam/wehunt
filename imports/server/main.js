// @flow

import configureGraphQL from './configs/graphql';
import schema from './schemas';
import resolvers from './resolvers';

configureGraphQL({
  schema,
  resolvers,
});
