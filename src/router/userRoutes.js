import express from 'express';
import { signin, signup } from '../Controllers/UserController.js';

const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/Login", signin )

export default userRouter