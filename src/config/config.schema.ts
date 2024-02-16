import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
    STAGE: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432).required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),
    SECRET_JWT: Joi.string().required(),
    ENCRYPT_KEY_PWD: Joi.string().required()
})