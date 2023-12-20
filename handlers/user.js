const User = require("../models/user")
const helperUtils = require("../utils/helper")
const validation = require("../validation/joi")


module.exports.createUser = async(event, context)=>{

try{

    const {name, industry, role} = JSON.parse(event.body)
    if(!name){
        return ({
            statusCode:401,
            body:JSON.stringify({message:"NAME_REQUIRED"})
        })
    }
    if(!industry){
        return ({
            statusCode:401,
            body:JSON.stringify({message:"INDUSTRY_REQUIRED"})
        })
    }
    if(!role){
        return ({
            statusCode:401,
            body:JSON.stringify({message:"ROLE_REQUIRED"})
        })
    }
const createUser = await User.create({
   
    userId:helperUtils.getRandomNumber(15),
    name:name,
    industry:industry,
    role:role
})

return ({
    statusCode:200,
    body:JSON.stringify({message:"success"})
})

}catch (err){
    return ({
        statusCode:401,
        body:JSON.stringify({message:err})
    })
}
   
}
module.exports.handler 