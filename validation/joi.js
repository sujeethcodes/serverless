const Joi = require("joi");

const validation = {};

validation.name = Joi.object().keys({
  name: Joi.string().required(),
});

validation.industry = Joi.object().keys({
    industry: Joi.string().required(),
});

validation.role = Joi.object().keys({
    role: Joi.string().required(),
});
module.exports = validation;