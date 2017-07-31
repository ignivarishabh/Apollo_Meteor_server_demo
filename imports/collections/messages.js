class Messages extends Mongo.Collection{
	addMessage({text,roomId,createdBy}){
		return super.insert({text,roomId,createdBy,createdAt:Date.now()})
	}
}

export default Message = new Messages('messages')