import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/graphql/schema';
import Tasks from '/imports/collections/tasks'
import setupApi,{app} from '/imports/rest'
import bodyParser from 'body-parser';
let middleware = function middleware (req, res, next) { 
	console.log('in_middleware', req.body.variables)

	  next();
	} 

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

