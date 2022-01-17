const Joi = require('joi');
function signUpValidation(user) {
    const joiSignUpSchema = Joi.object
        ({
            firstName: Joi.string().required().min(1).max(120),
            lastName: Joi.string().required().max(120),
            username: Joi.string().min(2),
            email: Joi.string().email().required().min(3).max(120),
            password: Joi.string().min(3).max(1024).required(),
            phone: Joi.string().required(),
            type: Joi.string(),
        })
    return result = joiSignUpSchema.validate(user);
}
module.exports.signUpValidation = signUpValidation;