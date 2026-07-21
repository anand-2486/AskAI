import redis from "../../Shared/redis/redis.js"

const protect=async (req,res,next) =>{
    try{
        //console.log("Cookies:", req.cookies);
        const sessionId=req.cookies?.session

        //console.log("Session ID:", sessionId);
        if(!sessionId){
            return res.status(400).json({message:"unauthorized. please authorize soon"})
        }
        const session=await redis.get(`session-${sessionId}`)
        
        //console.log("Redis Session:", session);
        if(!session){
            return res.status(400).json({message:"session expired"})
        }
        req.user=JSON.parse(session)
        next()
    }catch(error){
        return res.status(500).json({message:`protect error${error}`})
    }
}

export default protect





