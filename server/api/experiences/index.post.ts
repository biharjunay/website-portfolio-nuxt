import { z } from "zod"
import validateUserID from "~/server/helpers/userid-validation"

const bodySchema = z.object({
    userId: z.number(),
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
    return await useDrizzle().insert(tables.experiences).values(body).returning()
})