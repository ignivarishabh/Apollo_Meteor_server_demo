const userSetup = require('express').Router();
import signIn from './signIn';
import signUp from './signUp';


userSetup.get('/signIn', signIn);
userSetup.get('/signUp', signUp);

module.exports = userSetup;