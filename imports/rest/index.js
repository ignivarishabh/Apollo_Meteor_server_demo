import express from 'express';
import bodyParser from 'body-parser';
import middleware from './middleware'
import routes from './routes'
export const app = new express();

export default function setupApi() { 
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json()); 
	app.use(middleware);
	app.use(routes);
}