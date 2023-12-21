const Joi = require("joi");

const validateName = (name) => Joi.object({ name: Joi.string().required()}).validate({ name });
const validateIndustry = (industry) => Joi.object({ industry: Joi.string().required() }).validate({ industry });
const validateRole = (role) => Joi.object({ role: Joi.string().required() }).validate({ role });

module.exports = {
  validateName,
  validateIndustry,
  validateRole,
};
