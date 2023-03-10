
const express = require("express")
const {connection} =  require("./configFile/connection")
const {users} = require("./routerFile/userRouter")
const {carts} = require("./routerFile/userCart")
const {authorization} = require("./middleWareFile/authentication")

const cors = require("cors")
const {admin} = require("./routerFile/adminRouter")

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/admin", admin)
app.use("/users", users)
app.use("/cartProducts", carts)
app.use(authorization)



let port = process.env.port || 4000

app.listen(port, async ()=>{
    try {
        await connection
        console.log("connect to DataBase")
    } catch (error) {
        console.log("something wrong in port")
    }
    console.log(`server in running on port ${port}`)
})