
import express from 'express';
import userSetup from './userSetup';
import {successResponse} from '../../utilites/responseStructure';

const router = express.Router();

 router.use('/userSetup',userSetup)

router.get('/api',(req,res)=>{
	console.log('check')
    successResponse(res,'endpoint hit successfull','Hello World!!!');
});

export default router