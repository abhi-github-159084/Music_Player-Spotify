import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongoose.js';
import songRouter from './routes/songRoute.js';
import connectCloudinary from './config/cloudinary.js';
import albumRouter from './routes/albumRoute.js';

// app config 
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary(); 

// middlewares 
app.use(express.json());
app.use(cors());

// initializing routes 
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);

app.get("/", (req,res)=> {
    res.send("API working")
});

app.listen(port, ()=> {
    console.log(`server is started at port ${port}`)
});


