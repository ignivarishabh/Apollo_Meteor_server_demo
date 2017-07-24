class Tasks extends Mongo.Collection{
	getAllTasks(){
		return super.find().fetch();
	}
	getTask(_id){
		return super.findOne({_id});
	}
	createTask(title){
		return super.insert({title,createdAt:Date.now(),isCompleted:false})
	}
	updateTask(_id,title){
		return super.update({_id},{$set:{title}});
	}
	deleteTask(_id){
		console.log(_id)
		return super.remove({_id});
	}
}

export default new Tasks('tasks');