import express from 'express';
import apiRoutes from './routes/products.routes.js';
import { graphqlHTTP } from 'express-graphql';
import { graphqlRoot, graphqlSchema } from './services/graphql/products.services.js';

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({     
      schema: graphqlSchema,  
      rootValue: graphqlRoot, 
      graphiql: true, 
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server ok, puerto: ${PORT}`);
});

export default app;