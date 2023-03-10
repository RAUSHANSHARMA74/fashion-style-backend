
let jwt = require("jsonwebtoken")

let authorization = (req, res, next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token, "masai")
        if(decoded){
            console.log(decoded)
            const userID = decoded.userID
            req.body.userID = userID
            next()
        }else{
            res.send({msg:"please login first"})
        }
    }else{
        res.send({msg:"please login first"})
    }
}

module.exports = {authorization};
