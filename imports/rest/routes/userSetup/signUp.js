import {successResponse} from '../../../utilites/responseStructure';

export default (req,res)=>{
	console.log('signUp')
    successResponse(res,'endpoint hit successfull','sign up');

}