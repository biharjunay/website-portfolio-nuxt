import { z } from "zod"


const bodySchema = z.object({
    
    name: z.string().nonempty(),
    officeName: z.string().nonempty(),
    monthStart: z.number().min(1),
    monthEnd: z.number().min(1),
    yearStart: z.number().min(1),
    yearEnd: z.number().min(1),
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, "id")!
    const data = (await useDrizzle().select().from(tables.experiences).where(eq(tables.experiences.id, parseInt(id))))[0]
    if (!data) throw createError({
        statusCode: 422,
        message: "Data is not found"
    })
    const body = await readValidatedBody(event, bodySchema.parse)
    return await useDrizzle().update(tables.experiences).set(body).where(eq(tables.experiences.id, parseInt(id))).returning()
})