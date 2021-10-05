
const express=require("express");

const mongo = require("./mongo")
// const data=require("./app");
const postRoute = require("./router/post.route")
// const userRoute = require("./router/users.router");
port=3001
const app = express()
const application=async()=>{
    try{
        await mongo.connect();
        app.use(express.json());
        // console.log(data)
        app.use("/posts",postRoute);
        app.listen(port, () => console.log(`starting server in port-${port}`))
    }
    catch(error)

    {
        console.log("error on starting app",error)
    }   
}
application()