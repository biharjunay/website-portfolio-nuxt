import { z } from "zod"
import validateUserID from "~/server/helpers/userid-validation"

const bodySchema = z.object({
    userId: z.number().min(1),
    major: z.string().nonempty(),
    educationName: z.string().nonempty(),
    monthStart: z.number().min(1),
    monthEnd: z.number().min(1),
    yearStart: z.number().min(1),
    yearEnd: z.number().min(1),
    description: z.string().nonempty(),
}).superRefine(async ({ userId }, ctx) => {
    await validateUserID(userId, ctx)
})

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return await useDrizzle().insert(tables.educations).values(body).returning()
})