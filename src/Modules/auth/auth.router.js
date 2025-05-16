import { Router } from "express";
import { signin, signup } from "./auth.controller.js";
import { checkEmail } from "../../middlewares/checkemail.js";
import { Validate } from "../../middlewares/validate.js";
import { changePasswordVal, signinVal, signupVal } from "./auth.validation.js";


const authRouter=Router()


authRouter.post('/signup',Validate(signupVal),checkEmail,signup)
authRouter.post('/signin',Validate(signinVal),signin)
authRouter.patch('/changepassword',Validate(changePasswordVal),changeUserPassword)
authRouter.post('/forget-password',forgetPassword)
authRouter.post('/reset-password/:token',resetPassword)
    
export default authRouter   