# Apollo_Meteor_server_demo
demo for graphQl Server using Meteor and graphql

Basic usage of graphql with apollo


usage of middleware with graphql endpoint.

code:- 

      createApolloServer({schema},{configServer:(graphQLServer) => {
                              graphQLServer.use(bodyParser.json()); 
                              graphQLServer.use(middleware)
                            },
                    });
 
