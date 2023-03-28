import express from 'express';
import { forgetPassword, signin, signup } from '../Controllers/UserController.js';
import { sendMail } from '../Controllers/sendMail.js';

const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/Login", signin )
userRouter.post("/resetpassword", forgetPassword )
userRouter.get("/sendmail",sendMail)

export default userRouter