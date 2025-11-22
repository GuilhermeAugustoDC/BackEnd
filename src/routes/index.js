import express from 'express';
import tarologoRoutes from './tarologo.routes.js';


const mainRouter = express.Router();

mainRouter.use('/', tarologoRoutes);


export default mainRouter;
