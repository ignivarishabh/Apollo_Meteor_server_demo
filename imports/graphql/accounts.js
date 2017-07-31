export const typeDefs = `
	type User {
		_id: String
		profile:profile
	}
	type profile{
		name:String
		auth:token
	}
	type token {
		token:String
	}

	type Success{
		msg:String
		_id:String

	}	

	type Query {
		getUsers:[User]
		getUser(_id:String!):User,
	}

	type Mutation {
      createAccount (
        email: String!
        password:String!
        name:String!
      ): Success

    
    }

`;

export const resolvers = {
	Query:{
		getUsers(root,args,context){
			return Meteor.users.find({}).fetch()
		}
		
	},
	Mutation:{
		async createAccount(root,{email,password,name}){
			if(email && password && name){
				let _id = Accounts.createUser({email,password, profile: {name,auth:{token:Random.secret(32)}} });
				if(_id)
					return {error:false,msg:'User created Successfully',result:{_id}}
				else
			 return {error:false,msg:'data found Successfully',result}

					return {msg:'User already exists'}
			}else{
				return {msg:'mandatory field not filled'}
			}
			
		},
		
	}
}