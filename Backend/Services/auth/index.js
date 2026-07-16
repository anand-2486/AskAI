import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import dns from "node:dns"
dns.setServers(["8.8.8.8", "1.1.1.1"])
dotenv.config()

const PORT=process.env.PORT

const app=express()

app.get("/",(req,res)=>{
    res.json({message:"Hello from auth"})
})

app.listen(PORT,()=>{
    console.log(`Server is working at ${PORT}`)
    connectDb()
})