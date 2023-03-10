
const express = require("express")
const users = express.Router()
const {UsersSingupModel} = require("../modelFile/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config()

// //GET USERS DATA
// users.get("/", async (req, res)=>{
//     try {
//         let usersData = await UsersSingupModel.find()
//         res.send(usersData)
//     } catch (error) {
//         console.log("something went wrong in GET users data")
//     }
// })

//REGISTER USERS
users.post("/register", async (req, res)=>{
    try {
        let {name, email, password, country} = req.body
        let matchEmail = await UsersSingupModel.find({email})
        if(matchEmail.length>0){
            res.send({msg:"email is already register"})
        }else{
            bcrypt.hash(password, 5, async (err, hashPassword)=>{
                // Store hash in your password DB.
                if(err){
                    res.send({msg:"something error in hashPassword"})
                }else{
                    const register = new UsersSingupModel({name, email, country, password:hashPassword})
                    await register.save()
                    res.send({msg: "singup successfull"})
                }
            });
        }
    } catch (error) {
        console.log("something went wrong in REGISTER user")
    }
})


//LOGIN USERS
users.post("/login", async (req, res)=>{
    try {
        const {email, password} = req.body
        const matchEmail = await UsersSingupModel.find({email})
        if(matchEmail.length>0){
            bcrypt.compare(password, matchEmail[0].password, function(err, result) {
                // result == true
                if(result){
                    var token = jwt.sign({userID:matchEmail[0]._id}, process.env.key);
                    res.send({msg:"login succesfull", name:matchEmail[0].name, token})
                }else{
                    res.send({msg:"wrong credential"})
                }
            });
        }else{
            res.send({msg:"singup first"})
        }
    } catch (error) {
        console.log("something went wrong in LOGIN user ")
    }
})



module.exports = {users}