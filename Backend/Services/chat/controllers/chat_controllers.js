import Conversation from "../models/conversation_model.js"

export const createConversation=async (req,res)=>{
    try{
        const userId=req.headers["x-user-id"]
        console.log("userId",userId)
        const conversation=await Conversation.create({
            userId:userId
        })

        return res.status(200).json(conversation)
    }catch(error){
        return res.status(500).json({message:`create conversation error ${error}`})
    }
}

export const getConversation=async (req,res)=>{
    try{
        const userId=req.headers["x-user-id"]
        console.log("userId",userId)
        const conversation=await Conversation.find({
            userId:userId
        }).sort({updatedAt:-1})

        return res.status(200).json(conversation)
    }catch(error){
        return res.status(500).json({message:`get conversation error ${error}`})
    }
}

export const updateConversation=async (req,res)=>{
    try{
        const {id,title}=req.body
        const conversation=await Conversation.findByIdAndUpdate(id,{
            title
        })

        return res.status(200).json(conversation)
    }catch(error){
        return res.status(500).json({message:`update conversation error ${error}`})
    }
}

export const saveMessage=async (req,res)=>{
    try{
        const {conversationId,role,content}=req.body
        const Message=await Message.create({
            conversationId,
            content,
            role
        })
        return res.status(200).json(message)
    }catch(error){
        return res.status(500).json({message:`save messages error ${error}`})
    }
}

export const getMessage=async (req,res)=>{
    try{
        const Message=await Message.create({
            conversationId:req.params.conversationId
        }).sort({createdAt:-1})
        return res.status(200).json(message)
    }catch(error){
        return res.status(500).json({message:`get messages error ${error}`})
    }
}