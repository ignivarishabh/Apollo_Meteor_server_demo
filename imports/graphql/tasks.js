import Tasks from '../collections/tasks'
export const typeDefs = `
	type Task {
		_id: String
		title:String
		isCompleted: Boolean
	}
	type SuccessMessgae{
		Success:String
		result: [Task]
	}

	type SingleTask{
		error:Boolean
		msg:String
		result:Task
	}

	type DeleteTask{
		msg:String
	}

	type Query {
		getTasks:SuccessMessgae
		getTask(_id:String!):SingleTask
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
			console.log('hi')
			result = Tasks.getAllTasks();
			return({
					Success:'true',
					result:result
				   })
		},

		getTask(root,{_id},context){
			let result = Tasks.getTask(_id);
			 if(result)
			 return {error:false,msg:'data found Successfully',result}
			else{
			 return {error:true,msg:'no data found',result:null}	
			}
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