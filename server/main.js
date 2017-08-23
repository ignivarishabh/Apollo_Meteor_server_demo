import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/graphql/schema';
import middleware from '/imports/graphql/middleware/middleware';
import Tasks from '/imports/collections/tasks'
import setupApi,{app} from '/imports/rest'
import bodyParser from 'body-parser';
// setting schema and middleware for graphql
createApolloServer({schema},{configServer:(graphQLServer) => {
												graphQLServer.use(bodyParser.json()); 
												graphQLServer.use(middleware)
											},
							});
Meteor.startup(()=>{
	setupApi();
	WebApp.connectHandlers.use(app);
})