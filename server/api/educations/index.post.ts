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
    try {
        const body: typeof tables.educations.$inferInsert = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().insert(tables.educations).values(validate)
    } catch (error: any) {
        if (error instanceof Joi.ValidationError) {
            return createError({
                status: 422,
                message: error.message
            })
        }
        else {
            return createError({
                status: 500,
                message: error.message
            })
        }
    }
})