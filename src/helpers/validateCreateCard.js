import Joi from "joi";

function validateCreateCard() {
    return (Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subtitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        phone: Joi.string().required().min(9).max(11).pattern(/^05\d+$/).messages({
            'string.empty': '"phone" is required.',
            'string.min': '"phone" must be at least 9 digits.',
            'string.max': '"phone" must be at most 11 digits.',
            'string.pattern.base': '"phone" must start with 05 and contain only digits (no dashes, spaces or letters).'
        }),
        email: Joi.string().min(5).required().email({ tlds: false }),
        web: Joi.string().min(14).allow("").uri(),
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
    }));
}

//zip - required:
//באישור של מתרגל
//וזה  עשיתי שהמיקוד יהיה שדה חובה כי השרת מחייב להחזיר מספר וכאשר אני עושה שזה יהיה אופציונלי זה מחזיר מחרוזת ריקה 

export default validateCreateCard;
