import Joi from "joi"

const validator = Joi.object({
    user_id: Joi.number(),
    name: Joi.string(),
    educationName: Joi.string(),
    monthStart: Joi.number(),
    monthEnd: Joi.number(),
    yearStart: Joi.number(),
    yearEnd: Joi.number(),
    description: Joi.string()
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