import { z } from "zod"
import successResponse from "~/constants/success-response"
import validateUserID from "~/server/helpers/userid-validation"

const bodySchema = z.object({
    userId: z.number(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    projectUrl: z.string().nonempty(),
    availableOn: z.string().optional(),
    techStack: z.string().optional(),
}).superRefine(async ({userId}, ctx) => {
    await validateUserID(userId, ctx)
})

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return await useDrizzle().insert(tables.portfolios).values(body).returning()
})
