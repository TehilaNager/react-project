import Joi from "joi";

function validateEditUser() {
    return (Joi.object({
        first: Joi.string().min(2).max(256).required(),
        middle: Joi.string().min(2).max(256).allow(""),
        last: Joi.string().min(2).max(256).required(),
        phone: Joi.string().min(9).max(11).required().pattern(/^05\d{7,9}$/).messages({
            'string.pattern.base': '"phone" must be a standard Israeli phone number starting with 05 and must contain at least 9 digits.',
            'string.empty': '"phone" is required.',
            'string.min': '"phone" must be at least 9 characters long.',
            'string.max': '"phone" must be at most 11 characters long.',
        }),
        url: Joi.string().min(14).allow("").uri(),
        alt: Joi.string().min(2).max(256).allow(""),
        state: Joi.string().min(2).max(256).allow(""),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().max(Number.MAX_SAFE_INTEGER).required().custom((value, helpers) => {
            if (value.toString().length < 2) {
                return helpers.error('number.minDigits');
            }
            return value;
        })
            .messages({
                'number.base': '"House Number" must be a number',
                'number.max': '"House Number" must be a safe integer',
                'number.minDigits': '"House Number" must contain at least two digits',
            }),
        zip: Joi.number().max(Number.MAX_SAFE_INTEGER).required().custom((value, helpers) => {
            if (value.toString().length < 2) {
                return helpers.error('number.minDigits');
            }
            return value;
        })
            .messages({
                'number.base': '"ZIP Code" must be a number',
                'number.max': '"ZIP Code" must be a safe integer',
                'number.minDigits': '"ZIP Code" must contain at least two digits',
            }),
        isBusiness: Joi.boolean().required(),
    }));
}

export default validateEditUser;