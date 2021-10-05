
const route=require("express").Router()
 
const service=require("../service/posts.service")

route.get( service.findPosts)
route.post("/",service.insertPosts )

module.exports=route;;