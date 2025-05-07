import Joi from "joi";

function validateCreateCard() {
    return (Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subtitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        // phone: Joi.string().min(9).max(12).required().pattern(/^05\d{1}-?\d+$/)
        //     .messages({
        //         'string.empty': '"phone" is required.',
        //         'string.pattern.base': '"phone" must be a valid Israeli phone number, starting with 05 and followed by a digit, with an optional dash after the third digit.'
        //     }),
        phone: Joi.string()
            .required()
            .pattern(/^05\d{6,8}$|^05\d{1}-\d{7,9}$/)
            .messages({
                'string.empty': '"phone" is required.',
                'string.pattern.base': '"phone" must start with 05 and include 9–11 digits. You can write it either as 050123456 or 050-1234567 (dash is optional, but if you use it, it must come after the third digit and total digits must be 10–11).'
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
//עשיתי שהמיקוד יהיה שדה חובה כי השרת מחייב להחזיר מספר וכאשר אני עושה שזה יהיה אופציונלי זה מחזיר מחרוזת ריקה 

export default validateCreateCard;
