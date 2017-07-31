import {successResponse} from '../../../utilites/responseStructure';

export default (req,res)=>{
	console.log('signIn')
    successResponse(res,'endpoint hit successfull','sign in');

}