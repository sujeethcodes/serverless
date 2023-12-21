const helperUtils = require("../helper/helper");
const validation = require("../validation/joi"); 

const User = require("../models/user");

module.exports.createUser = async (event, context) => {
  try {
    const { name, industry, role } = JSON.parse(event.body);

    const nameValidation = validation.validateName(name);
    const industryValidation = validation.validateIndustry(industry);
    const roleValidation = validation.validateRole(role);

    if (nameValidation.error || industryValidation.error || roleValidation.error) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Validation error" }),
      };
    }

    const createUser = await User.create({
      userId: helperUtils.getRandomNumber(15),
      name: name,
      industry: industry,
      role: role,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User created successfully' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Error creating user' }),
    };
  }
};
