import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/api/schema';
import Tasks from '/imports/collections/tasks'


createApolloServer({
  schema,
});

Meteor.startup(()=>{
	//  console.log('',Tasks.find().fetch())
	// WebApp.rawConnectHandlers.use(function(req, res, next) {
	//   res.setHeader("Access-Control-Allow-Origin", "*");
	//   return next();
	// });
	// WebApp.rawConnectHandlers.use("/public", function(req, res, next) {
	//   res.setHeader("Access-Control-Allow-Origin", "*");
	//   return next();
	// });
})
