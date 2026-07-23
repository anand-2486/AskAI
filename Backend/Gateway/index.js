import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import protect from "./middleware/auth_middleware.js"
import getCurrentUser from "./controllers/user_controllers.js"
import { proxyWithHeader } from "./utils/proxyWithHeader.js"
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
app.use("/chat",protect,proxyWithHeader(process.env.CHAT_SERVICE))
app.use("/chat",protect,proxy(process.env.AGENT_SERVICE))
app.get("/me",protect,getCurrentUser)
app.get("/",(req,res)=>{
    res.json({message:"Hello from Gateway"})
})

app.listen(PORT,()=>{
    console.log(`Server is working at ${PORT}`)
})