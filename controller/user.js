const helperUtils = require("../helper/helper");
const userValidation = require("../validation/validation"); 
const {responseMessage} = require("../helper/message")
const {dbConTest} = require("../database/db");

module.exports.createUser = async (event, context) => {
  try {
    const userData = JSON.parse(event.body)
    const {error, value} = userValidation.validate(userData);

    if (error) {
      return helperUtils.response(error.details[0].message);
    }

    let {User} = await dbConTest()
    try {
      const createUser = await User.create({
        userId: helperUtils.getRandomNumber(15),
        name: value.name,
        industry: value.industry,
        role: value.role,
      })
      return helperUtils.response(responseMessage.SUCCESS)
    } catch (error) {
      throw new Error(err)
    }
    
  } catch (err) {
   throw new Error(err)
  }
};
