import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/graphql/schema';
import Tasks from '/imports/collections/tasks'
import setupApi,{app} from '/imports/rest'



createApolloServer({
  schema,
  
});


Meteor.startup(()=>{
	setupApi();

	WebApp.connectHandlers.use(app);


})
