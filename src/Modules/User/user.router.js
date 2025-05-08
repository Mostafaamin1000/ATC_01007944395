import {Router} from 'express';
import { deleteUser, getAllUsers, getUserById, updateUser } from './user.controller.js';
import { allowTo, protectedRouter } from '../auth/auth.controller.js';

const userRouter = Router();

userRouter.get('/users',getAllUsers)
userRouter.get('/user/:id',protectedRouter , allowTo('user','admin'),getUserById)
userRouter.put('/update-user/:id',protectedRouter , allowTo('admin'),updateUser)
userRouter.delete('/delete-user/:id',protectedRouter , allowTo('admin'),deleteUser)

export default userRouter;