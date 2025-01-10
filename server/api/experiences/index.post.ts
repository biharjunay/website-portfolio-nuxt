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
    const body = await readValidatedBody(event, bodySchema.parse)
    return await drizzleDb.insert(tables.experiences).values(body).returning()
})