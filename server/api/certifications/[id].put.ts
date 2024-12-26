import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    yearStart: Joi.number().required(),
    yearEnd: Joi.string().required(),
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().update(tables.certifications).set(validate).where(eq(tables.certifications.id, parseInt(id)))
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({    
                message: err.message,
                status: 422
            })
        }
    } 
})
