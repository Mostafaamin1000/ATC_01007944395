process.on('uncaughtException',(err)=>{  //!for errors in code
    console.log("Error",err);
})
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { DBConnect } from './DB/db.connection.js';
import {bootstrap} from './src/Modules/bootstrap.js'
import { AppError } from './src/utils/appError.js';
import { globalError } from './src/middlewares/globalError.js';
dotenv.config()
DBConnect()
const app = express()
const port =process.env.PORT ||  3000
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use(cors())
bootstrap(app)


app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running 😎" })
})

//! for unfound Routes 
app.use((req,res,next)=>{
    next(new AppError(`route not found ${req.originalUrl}`, 404))
})

app.use(globalError)

    
process.on('unhandledRejection',(err)=>{   //! for errors outside express 
    console.log("Error",err);
    
})

app.listen(port ,()=>{
    console.log(`Server is running on port ${port} ...`);
    
})