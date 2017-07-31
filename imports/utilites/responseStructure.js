export function successResponse (res,message,result){
	 res.status(200).json({ error:false,message,result});
}

export function failResponse(res,message){
	 res.status(200).json({ error:true,message});
	
}