import { getModel } from "../config/llmModel.js"

export const router=async (state)=>{
    const llm=await getModel("router")

    const prompt=`Your are an agent router.
    
    Available agents:
    
    - Chat
    - Search
    - coding
    - pdf
    - ppt
    - image
    
    Rules:
    
    chat:
    General Conversation,
    explanations,
    learning,
    questions.
    
    search:
    Current events,
    latest information,
    news,
    recent developments,
    internet lookup.
    
    coding:
    Generate code,
    debug code,
    build projects,
    architecture,
    API design
    
    pdf:
    Questions about generate PDF's or document context.
    
    ppt:
    Questions about generate ppts or ppt context
    
    imageGen:
    Generate image,
    create image

    Return ONLY one word:
    
    chat 
    search
    coding
    pdf
    ppt
    imageGen
    
    UserQuery
    ${state.prompt}
    `

    const resposne=await llm.invoke(prompt)
    console.log(response)
    return{
        ...state,
        agent:response.content.trim().toLowerCase()
    }
}