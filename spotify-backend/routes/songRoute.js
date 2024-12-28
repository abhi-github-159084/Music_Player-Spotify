import { addSong, listSong, removeSong } from '../controllers/songControllers.js';

import express from 'express'
import upload from '../middlewares/multer.js';

const songRouter = express.Router();
// songRouter.post('/add',upload.fields([{name:'image',maxCount:1}, {name:'audio',maxCount:1}]), addSong);
songRouter.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), addSong);
songRouter.post('/remove',removeSong);
songRouter.get('/list',listSong);

export default songRouter;
