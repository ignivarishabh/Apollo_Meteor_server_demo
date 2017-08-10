import {successResponse,failResponse} from '../../../utilites/responseStructure';
import {checkFields} from '../../../utilites/requestValidations';
// import {signUp} from '../../controller/signUp';

export default (req,res,next)=>{
	let data = req.body;
	if(checkFields(data,{email:'isEmail',password:'mandatory'})){
    		failResponse(res,'validations failed',checkFields);		
	}else{
		// signUp(data,(error,res)=>{
		// 	if(error){
		// 		failResponse(res,'logical erro',error);	
		// 	}else{
		// 		successResponse(res,'endpoint hit successfull','sign up');		
		// 	}
    		
		// });

	}

}