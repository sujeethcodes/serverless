const helperUtils = require("../helper/helper");
const validation = require("../validation/joi"); 
const {dbConTest} = require("../database/db")

module.exports.createUser = async (event, context) => {
  try {
    const { name, industry, role } = JSON.parse(event.body);

    const nameValidation = validation.validateName(name);
    const industryValidation = validation.validateIndustry(industry);
    const roleValidation = validation.validateRole(role);

    if (nameValidation.error || industryValidation.error || roleValidation.error) {
      return helperUtils.response(400,"VALIDATION_ERROR")
    }

    let val = await dbConTest()

    const createUser = await val.User.create({
      userId: helperUtils.getRandomNumber(15),
      name: name,
      industry: industry,
      role: role,
    });

    return helperUtils.response(200,"USER_CREATED_SUCCESSFULLY")
  } catch (err) {
    console.error(err);
    return helperUtils.response(400,"ERROR_CREATING_USER")
  }
};


