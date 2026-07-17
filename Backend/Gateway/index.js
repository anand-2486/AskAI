import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
const PORT=process.env.PORT

const app=express()
app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}
))
app.use(cookieParser())
app.use("/auth",proxy(process.env.AUTH_SERVICE))

app.get("/",(req,res)=>{
    res.json({message:"Hello from Gateway"})
})

app.listen(PORT,()=>{
    console.log(`Server is working at ${PORT}`)
})