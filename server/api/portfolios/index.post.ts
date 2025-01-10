import { z } from "zod"

const bodySchema = z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    projectUrl: z.string().nonempty(),
    availableOn: z.string().optional(),
    techStack: z.string().optional(),
    imageUrl: z.string().nonempty()
})

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return await useDrizzle().insert(tables.portfolios).values(body).returning()
})
