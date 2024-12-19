import Joi from "joi"
import { portfolios } from "~/server/database/schema"

const validator = Joi.object({
    user_id: Joi.number(),
    title: Joi.string().required(),
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    try {
        const body = await readBody(event)
        const validate = await validator.validateAsync(body)
        return await useDrizzle().update(portfolios).set(validate).where(eq(portfolios.id, parseInt(id)))
    } catch (err) {
        if (err instanceof Joi.ValidationError) {
            return createError({
                status: 422,
                message: err.message
            })
        }
    }
})