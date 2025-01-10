import { z } from "zod"


const bodySchema = z.object({
    
    title: z.string().nonempty(),
    year: z.number(),
    description: z.string()
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})
export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parse)
    return await drizzleDb.insert(tables.achievements).values(body).returning()
})
