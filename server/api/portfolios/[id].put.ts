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
    const id = getRouterParam(event, 'id')!
    const data = (await useDrizzle().select().from(tables.portfolios).where(eq(tables.portfolios.id, parseInt(id))).limit(1))[0]
    if (!data) throw createError({
        status: 422,
        message: 'Data is not found'
    })
    const body = await readValidatedBody(event, bodySchema.parseAsync)
    return await useDrizzle().update(tables.portfolios).set(body).where(eq(tables.portfolios.id, parseInt(id))).returning()
})