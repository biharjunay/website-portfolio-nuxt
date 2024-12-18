import { portfolios } from "~/server/database/schema"

export default defineEventHandler(async event => {
    try {
        const body: typeof portfolios.$inferInsert = await readBody(event)
        if (!body?.title || !body?.projectUrl) {
            throw new Error('Missing required fields: name or createdAt');
          }
        // return await useDrizzle().insert(portfolios).values(body)
    } catch (err) {
        console.log(err)
        throw createError({
            status: 422,
            message: (err as any).message
        })
    }
})