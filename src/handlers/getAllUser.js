const User = require("../models/userModel")

module.exports.handler = async(event, context)=>{

try {
    const getAllUser = await User.findAll({})
    return ({
        statusCode:200,
        body:JSON.stringify({message:getAllUser})
    })
} catch (error) {
    return ({
        statusCode:401,
        body:JSON.stringify({message:err})
    })
}

}