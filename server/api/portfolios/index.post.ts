import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    project_url: Joi.number().required(),
})
export default defineEventHandler(async event => {
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().insert(tables.portfolios).values(validate)
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({
                status: 422,
                message: err.message
            })
        }
    }
})
