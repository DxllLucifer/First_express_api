import express from "express"
import userRouter from "./router/userRoutes.js";
import notesRouter from "./router/noteRoutes.js";
import mongoose from 'mongoose';
// import data from "./data.js";


const app = express();
const port = 3000;

app.use(express.json())
app.use((req,res,next)=>{
    console.log(`HTTP Method - ${req.method} , URL- ${req.url}` );
    next();
})
app.use("/users",userRouter)
app.use("/notes",notesRouter)

app.get("/", (req,res)=>{
    res.send("Hello")
})

mongoose.connect("mongodb+srv://admin:admin@cluster0.q5cr3ka.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{    
app.listen(port,()=>console.log(`listen port ${port}`))
}).catch((err)=>{
    console.log(err);
})

//#region ---> " Showing Json Data By Importing Data "

// app.get('/',(req,res)=>{
//    res.status(200).json(data)
// })
// app.get('/random',(req,res)=>{
    
//    let Index = Math.floor(Math.random() * data.length)
//    let randomdata = data[Index]
//    res.status(200).json(randomdata)
// })

//#endregion 

