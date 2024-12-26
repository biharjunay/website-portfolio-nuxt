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
    const id = getRouterParam(event, 'id')!
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().update(tables.educations).set(validate).where(eq(tables.educations.id, parseInt(id)))
    }
})