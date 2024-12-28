import { addAlbum, listAlbum, removeAlbum } from '../controllers/albumControllers.js';

import express from 'express'
import upload from '../middlewares/multer.js';

const albumRouter = express.Router();
// songRouter.post('/add',upload.fields([{name:'image',maxCount:1}, {name:'audio',maxCount:1}]), addSong);
albumRouter.post('/add', upload.single('image'), addAlbum);
albumRouter.post('/remove',removeAlbum);
albumRouter.get('/list',listAlbum);

export default albumRouter;
