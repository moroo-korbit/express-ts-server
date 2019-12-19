import { Application } from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';

const applyGraphqlMiddleware = (path: string, app: Application, schema: GraphQLSchema) => {
  app.use(path, graphqlHTTP({
    schema,
    graphiql: true,
  }))
}

export default applyGraphqlMiddleware;