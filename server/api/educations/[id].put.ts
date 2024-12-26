import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number().required().required(),
    major: Joi.string().required(),
    educationName: Joi.string().required(),
    monthStart: Joi.number().required(),
    monthEnd: Joi.number().required(),
    yearStart: Joi.number().required(),
    yearEnd: Joi.number().required(),
    description: Joi.string().required()
})

export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().update(tables.educations).set(validate).where(eq(tables.educations.id, parseInt(id)))
    } catch (err: any) {
        if (err instanceof Joi.ValidationError) {
            throw createError({
                status: 422,
                message: err.message
            })
        }
        throw createError({
            message: err.message
        })
    }
})