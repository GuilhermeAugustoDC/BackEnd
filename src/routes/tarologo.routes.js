import express from 'express';
import {
	getTarologo,
	createTarologo,
	getTarologoById,
	updateTarologo,
	deleteTarologoById,
	deleteAllTarologos,
} from '../controllers/tarologo.controller.js';

const tarologoRouter = express.Router();

tarologoRouter.get('/tarologos', getTarologo);
tarologoRouter.get('/tarologo/:id', getTarologoById);
tarologoRouter.post('/createTarologo', createTarologo);
tarologoRouter.put('/updateTarologo/:id', updateTarologo);
tarologoRouter.delete('/deleteTarologoById/:id', deleteTarologoById);
tarologoRouter.delete('/deleteAllTarologos', deleteAllTarologos);

export default tarologoRouter;
