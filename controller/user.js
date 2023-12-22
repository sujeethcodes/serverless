const helperUtils = require("../helper/helper");
const userValidation = require("../validation/validation"); 
const {dbConTest} = require("../database/db");

module.exports.createUser = async (event, context) => {
  try {

    const userData = JSON.parse(event.body)
    const {error, value} = userValidation.validate(userData);

    if (error) {
      return helperUtils.response(400, error.details[0].message);
    }

    let val = await dbConTest()

    const createUser = await val.User.create({
      userId: helperUtils.getRandomNumber(15),
      name: value.name,
      industry: value.industry,
      role: value.role,
    });

    return helperUtils.response(200,"USER_CREATED_SUCCESSFULLY")
  } catch (err) {
    console.error(err);
    return helperUtils.response(400,"ERROR_CREATING_USER")
  }
};