import {successResponse} from '../../../utilites/responseStructure';

export default (req,res,next)=>{
    successResponse(res,'endpoint hit successfull','sign in');

}