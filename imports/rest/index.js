import express from 'express';
import middleware from './middleware'
import routes from './routes'
export const app = new express();

export default function setupApi() { 
	app.use(middleware);
	app.use(routes);
}