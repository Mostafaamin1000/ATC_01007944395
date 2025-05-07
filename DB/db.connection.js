import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const DBConnect = mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(() => {
    console.log('Error in DB Connection');
});