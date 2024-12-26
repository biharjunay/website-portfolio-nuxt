import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
})
export default defineEventHandler(async event => {
    const body = await readBody(event)
    try {
        const validate = await validator.validateAsync(body)
        return await useDrizzle().insert(tables.achievements).values(validate)
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({    
                message: err.message,
                status: 422
            })
        }
    } 
})
