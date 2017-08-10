
import express from 'express';
import userSetup from './userSetup';
import {successResponse} from '../../utilites/responseStructure';

const router = express.Router();

 router.use('/userSetup',userSetup)


export default router