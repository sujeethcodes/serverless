const Joi = require("joi");
const message = require("../helper/message")
console.log(message)
const userValidation = Joi.object({
  name: Joi.string().required().messages({
    'any.required': message.name,
  }),
  industry: Joi.string().required().messages({
    'any.required': message.industry,
  }),
  role: Joi.string().required().messages({
    'any.required': message.role,
  })
})

module.exports = userValidation