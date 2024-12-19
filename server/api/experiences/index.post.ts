import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number(),
    name: Joi.string().required(),
    education_name: Joi.string().required(),
    month_start: Joi.number().required(),
    month_end: Joi.number().required(),
    year_start: Joi.number().required(),
    year_end: Joi.number().required(),
})
export default defineEventHandler(async event => {
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(validator)
        return await useDrizzle().insert(tables.experiences).values(validate)
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({
                status: 422,
                message: err.message
            })
        }
    }
})