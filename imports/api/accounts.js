import Tasks from '../collections/tasks'
export const typeDefs = `
	type User {
		_id: String
		name:String
		createdAt: Date
	}

	type Query {
		getUsers:[User]
		getUser(_id:String!):User,
	}

	type Mutation {
      createUser (
        name: String!
      ): User

      updateUser (
      	_id:String!
      	name: String
      	):User
    }

`;

export const resolvers = {
	Query:{
		getTasks(root,args,context){
			return Tasks.getAllTasks();
		},

		getTask(root,{_id},context){
			return Tasks.getTask(_id)
		}
		
	},
	Mutation:{
		async createAccount(root,{title}){
			Accounts.createAccount({

			});
		},
		async updateTask(root,{_id,title}){
			Tasks.updateTask(_id,title)
			return Tasks.getTask(_id)
		},
		async deleteTask(root,{_id}){
			Tasks.deleteTask(_id);
			return {msg:"Deleted Successfully"}
		},
	}
}