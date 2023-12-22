const Joi = require("joi");
const {validationMessage} = require("../helper/message")

const userValidation = Joi.object({
  name: Joi.string().required().messages({
    'any.required': validationMessage.NAME,
  }),
  industry: Joi.string().required().messages({
    'any.required': validationMessage.INDUSTRY,
  }),
  role: Joi.string().required().messages({
    'any.required': validationMessage.ROLE,
  })
})

module.exports = userValidation