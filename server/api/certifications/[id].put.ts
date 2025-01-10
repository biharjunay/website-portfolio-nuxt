import { z } from "zod"


const bodySchema = z.object({
    
    title: z.string().nonempty(),
    yearStart: z.number().min(1),
    yearEnd: z.number().min(1),
    certificateUrl: z.string().nonempty()
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})
export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')!
    const data = (await drizzleDb.select().from(tables.certifications).where(eq(tables.certifications.id, parseInt(id))))[0]
    if (!data) throw createError({
        status: 422,
        message: "Data is not found"
    })
    const body = await readValidatedBody(event, bodySchema.parse)
    return await drizzleDb.update(tables.certifications).set(body).where(eq(tables.certifications.id, parseInt(id))).returning()
})
