import UserSchema from '../Models/User.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';


const jwt = jsonwebtoken
const SECRET_KEY = "THISISSECRETKEY"



//#region sigup Implementation

export const signup = async (req,res)=>{
    const {username, email, password} = req.body
    try {
        //#region checking for existing user
        const existingUser = await UserSchema.findOne({email : email})
        if (existingUser){
            return res.status(400).json({message: "User already exists"})
        }
        //#endregion
        
        //#region Hashing Password
        const hashedPassword = await bcrypt.hash(password, 10 ) // 10 is also called salt it define how many time it will run for hashing
        //#endregion

        //#region User Genrate
        const result = await UserSchema.create({
            email: email,
            password: hashedPassword,
            username: username
        })
        //#endregion

        //#region Token Genrate
            const token = jwt.sign({email: result.email, id: result._id}, SECRET_KEY)
            res.status(201).json({user: result, token: token})
        //#endregion

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong please try again 😥"})
    }

}

//#endregion


//#region SignIn Implementation
export const signin = async(req,res)=>{
const {email, password} = req.body;

    try {

        //#region checking for existing user

        const existingUser = await UserSchema.findOne({email : email})
        if (!existingUser){
            return res.status(40).json({message: "User not exists"})
        }

        //#endregion
        
        //#region Decrypting & Checking User Credentials

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credentials 🐾"})
        }

        //#endregion

        //#region  SignIN with token
            const token = jwt.sign({email: existingUser.email, id: existingUser._id}, SECRET_KEY)
            res.status(201).json({user: existingUser, token: token})

        //#endregion


    }catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went Wrong 😫"})
    }

}

//#endregion
