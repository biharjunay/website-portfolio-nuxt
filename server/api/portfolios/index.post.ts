import Joi from "joi";
import { portfolios } from "~/server/database/schema"

const validator = Joi.object({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
})
export default defineEventHandler(async event => {
    try {
        const body: typeof portfolios.$inferInsert = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().insert(portfolios).values(validate)
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            console.log(err)
            throw createError({
                status: 422,
                message: err.message
            })
        }
    }
})