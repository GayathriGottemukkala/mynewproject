import express from "express"
const app=express()
app.use(express.json())

app.listen(3000,()=>{
    console.log("server running")
})

import  collection from "./mongo.js"
import cors from "cors"

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/login", cors(), (request, response)=>{

})

app.post("/login", async(request, response)=>{
    const {email, password}=request.body
    try{
        const checking=await collection.findOne({email:email})
        if(checking){
            response.json("exist")
        }else{
            response.json("not exist")
        }
    }catch(e){
           response.json("not exist")
    }
})



app.listen(3000,()=>{
    console.log("server running at port 3000")
})