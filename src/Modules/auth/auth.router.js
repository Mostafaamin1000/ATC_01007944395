import { Router } from "express";
import { signin, signup } from "./auth.controller.js";
import { checkEmail } from "../../middlewares/checkemail.js";


const authRouter=Router()


authRouter.post('/signup',checkEmail,signup)
authRouter.post('/signin',signin)
// authRouter.patch('/changepassword',Validate(changePasswordVal),changeUserPassword)
// // 💡 Forgot Password
// authRouter.post('/forget-password',forgetPassword)
// // 🔄 Reset Password
// authRouter.post('/reset-password/:token',resetPassword)
    
export default authRouter   