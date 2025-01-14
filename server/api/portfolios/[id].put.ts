import { z } from "zod"
import {del} from "@vercel/blob";

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
    const data = (await drizzleDb.select().from(tables.portfolios).where(eq(tables.portfolios.id, parseInt(id))).limit(1))[0]
    if (!data) throw createError({
        status: 422,
        message: 'Data is not found'
    })
    const body = await readValidatedBody(event, bodySchema.parse)
    if (body.imageUrl !== data.imageUrl) await del(data.imageUrl!)
    return drizzleDb.update(tables.portfolios).set(body).where(eq(tables.portfolios.id, parseInt(id))).returning();
})