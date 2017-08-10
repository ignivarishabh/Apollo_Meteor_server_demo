const userSetup = require('express').Router();
import middleware from '../../middleware'
import signIn from './signIn';
import signUp from './signUp';


userSetup.post('/signIn', signIn);
userSetup.get('/signUp', signUp);

module.exports = userSetup;