import { z } from "zod"

const bodySchema = z.object({
    name: z.string().nonempty(),
    officeName: z.string().nonempty(),
    monthStart: z.number().min(1),
    monthEnd: z.number().optional(),
    yearStart: z.number().min(1),
    yearEnd: z.number().optional(),
    description: z.string().optional(),

})
export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parse)
    return await drizzleDb.insert(tables.experiences).values(body).returning()
})