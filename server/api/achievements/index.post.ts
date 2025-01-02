import { z } from "zod"
import validateUserID from "~/server/helpers/userid-validation"

const bodySchema = z.object({
    userId: z.number().min(1),
    title: z.string().nonempty(),
    year: z.number(),
    description: z.string()
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})
export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parse)
    return await useDrizzle().insert(tables.achievements).values(body).returning()
})
