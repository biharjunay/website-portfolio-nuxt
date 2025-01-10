import Joi from "joi"
import { z } from "zod"


const bodySchema = z.object({
    
    title: z.string().nonempty(),
    year: z.number(),
    description: z.string()
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    const data = (await useDrizzle().select().from(tables.achievements).where(eq(tables.achievements.id, parseInt(id))))[0]
    if (!data) throw createError({
        statusCode: 422,
        message: "No Data Found"
    })
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return await useDrizzle().update(tables.achievements).set(body).where(eq(tables.achievements.id, parseInt(id))).returning()
})
