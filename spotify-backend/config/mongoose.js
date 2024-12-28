// import mongoose from 'mongoose'

// require("dotenv").config();

// const connectDB = ()=> {
//     mongoose.connect((process.env.MONGODB_URL), {
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     } ).then(()=> console.log('db connection established')).catch((e)=> {console.log('db connection failed'); console.error(e); process.exit(1);} )
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection established'))
    .catch((e) => {
        console.log('DB connection failed');
        console.error(e);
        process.exit(1);
    });
};

export default connectDB;
