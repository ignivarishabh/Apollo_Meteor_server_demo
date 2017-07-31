import { PubSub ,withFilter} from 'graphql-subscriptions';
import Messages from '../collections/messages'

const pubsub = new PubSub();

export const typeDefs = `
	type messageResult{
		error: String
		msg:String
	    result:message
	}

	type message{
		text:String
	}
	
	type Mutation{
		messageAdded(text:String!,
					 roomId:String!,
					 createdBy:String!):messageResult
	}
	type Subscription {
		  messageAdded(roomId: String!): messageResult
	}
`;

export const resolvers = {

	Mutation:{
		async messageAdded(root,{text,roomId,createdBy}){
			if(text && roomId && createdBy){
				newMessage = Messages.addMessage({text,roomId,createdBy})
				if(newMessage)
					pubsub.publish('messageAdded', { messageAdded: {text,roomId,createdBy}, roomId });
					
					return {error:false,
							msg:'Message added succesfully',
							result:text
						}	
			}
		
		},
	},

	Subscription: {
	    messageAdded: {
	      subscribe: withFilter(() => pubsub.asyncIterator('messageAdded'), (payload, variables) => {
	        return payload.roomId === variables.roomId;
	      }),
	    }
  },
}