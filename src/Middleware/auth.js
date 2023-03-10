import jsonwebtoken from 'jsonwebtoken';
const jwt = jsonwebtoken
const SECRET_KEY = "THISISSECRETKEY"


export const auth = (req, res, next)=>{
    try {
        let token = req.headers.authorization
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY );
            req.userId= user.id ;
        }
        else{
            res.status(401).json({message: "Unauthorized User 🐢"});
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User 🐒 " });

    }
}

