import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    const body = await readBody(event)
    try {
        const validate = await validator.validateAsync(body)
        return await useDrizzle().update(tables.achievements).set(validate).where(eq(tables.achievements.id, parseInt(id)))
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({    
                message: err.message,
                status: 422
            })
        }
    } 
})
