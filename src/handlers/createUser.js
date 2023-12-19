const User = require("../models/userModel")

module.exports.handler = async(event, context)=>{
    // return ({
    //     body:JSON.stringify({message:"success"})
    // })
try{

    const {name, industry, role} = JSON.parse(event.body)
const createUser = await User.create({
   
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