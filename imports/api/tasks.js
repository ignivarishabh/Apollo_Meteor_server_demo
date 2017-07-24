import Tasks from '../collections/tasks'
export const typeDefs = `
	type Task {
		_id: String
		title:String
		isCompleted: Boolean
	}
	type SuccessMessgae{
		Success:Boolean
		result: [Task]
	}

	type DeleteTask{
		msg:String
	}

	type Query {
		getTasks:SuccessMessgae
		getTask(_id:String!):Task
	}

	type Mutation {
      createTask (
        title: String!
      ): Task

      updateTask (
      	_id:String!
      	title: String
      	):Task

      deleteTask(
      	_id:String!
      	):DeleteTask
    }

`;

export const resolvers = {
	Query:{
		getTasks(root,args,context){
			result = Tasks.getAllTasks();
			if(result){
				return
					{
						Success:true,
						result
					 }
			}else{
				return{
						Success:false
					  }
			}
		},

		getTask(root,{_id},context){
			return Tasks.getTask(_id)
		}
		
	},
	Mutation:{
		async createTask(root,{title}){
			let _id = Tasks.createTask(title)
			return Tasks.getTask(_id)
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