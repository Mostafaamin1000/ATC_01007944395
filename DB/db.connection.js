import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const DBConnect = ()=>{
     mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error in DB Connection');
});
}